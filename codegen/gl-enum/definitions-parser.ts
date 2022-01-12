import fs from 'fs'
import path from 'path'
import https from 'https'
import { JSDOM } from 'jsdom'
import { GLConstantDefinition } from './definitions'

const SPACE_REGEX =
  /[\s\u000B\u000C\u00A0\u0085\u1680\u180E\ufeff\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u202F\u205f\u3000]/g

const SPACES_REGEX = /[\s\n\r][\s\n\r]+/g

const CONSTANTS_HTML_URL = 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants'

export function parseConstantDefinitionsFromHtml(html: string): GLConstantDefinition[] {
  const dom = new JSDOM(html)
  const parsed: GLConstantDefinition[] = []
  const encountered = new Set()
  let title = ''
  let subtitle = ''

  for (const queried of dom.window.document.querySelectorAll('article.main-page-content')) {
    for (const articleNode of getArticleNodes(queried)) {
      if (articleNode.tagName === 'P') {
        subtitle = elementText(articleNode)
      } else if (articleNode.tagName === 'H3') {
        title = elementText(articleNode)
      } else if (articleNode.tagName === 'TABLE') {
        if (parseTable(articleNode)) {
          subtitle = ''
          title = ''
        }
      }
    }
  }

  return parsed

  function getArticleNodes(article: Element): Element[] {
    const result: Element[] = []
    for (const item of Array.from(article.childNodes) as Element[]) {
      if (item.tagName === 'DIV') {
        for (const divItemElement of Array.from(item.childNodes) as Element[]) {
          if (divItemElement.tagName) {
            result.push(divItemElement)
          }
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function parseTable(articleNode: Element): GLConstantDefinition[] {
    const result: GLConstantDefinition[] = []
    for (const tr of articleNode.querySelectorAll('tr')) {
      const tds = tr.querySelectorAll('td')
      if (tds.length) {
        const name = elementText(tds[0])
        if (name && !name.includes(' ')) {
          let value = elementText(tds[1])
          if (value.startsWith('0x')) {
            value = value.toLowerCase()
          }
          const description = elementText(tds[2]).replace('to clear to clear', 'to clear')
          const group = [title, subtitle]
            .filter((x) => x)
            .join(' - ')
            .replaceAll(') - ', ')\n- ')
            .replaceAll('), [', '),\n[')
            .replaceAll(') or [', ')\nor [')
            .replaceAll('), or [', '),\nor [')
            .replaceAll(') and [', ')\nand [')
            .replaceAll('), and [', '),\nand [')
            .trim()

          let jsdoc = '/**\n'
          jsdoc += ` * ${name} = ${value}\n`

          if (description) {
            jsdoc += ' * \n'
            jsdoc += ` * ${description}\n`
          }

          if (group) {
            jsdoc += ' * \n'
            jsdoc += ` * ${group.replaceAll('\n', '\n * ')}\n`
          }
          jsdoc += ' */'

          const item: GLConstantDefinition = {
            name,
            value,
            description,
            title,
            subtitle,
            group,
            jsdoc,
            repeated: encountered.has(name)
          }

          parsed.push(item)
          encountered.add(name)
        }
      }
    }
    return result
  }

  function elementText(element: Element): string {
    element = element.cloneNode(true) as Element

    const anchors = element.querySelectorAll('a')
    for (const anchor of Array.from(anchors)) {
      let linkText = anchor && (anchor as HTMLElement).textContent
      linkText = linkText ? fixSpaces(linkText.replace(/WebGLRenderingContext\./g, '')) : ''
      if (linkText) {
        let href = anchor.getAttribute('href')
        if (href) {
          if (href.startsWith('/')) {
            href = `https://developer.mozilla.org/${href}`
          } else if (href.startsWith('#')) {
            href = `${CONSTANTS_HTML_URL}${href}`
          }
          linkText = `[${linkText}](${href})`
        }

        anchor.textContent = linkText
      }
    }

    const textContent = element && (element as HTMLElement).textContent
    return textContent ? fixSpaces(textContent.replace(/WebGLRenderingContext\./g, '')) : ''
  }
}

export async function getConstantsDefinitionsHTML({
  url = CONSTANTS_HTML_URL,
  cacheFilename = null
}: {
  url?: string
  cacheFilename?: string | null
}): Promise<string> {
  if (cacheFilename) {
    try {
      const result = await fs.promises.readFile(cacheFilename, 'utf8')
      if (result.length) {
        console.info(cacheFilename, 'file found, not downloading.')
        return result
      }
    } catch (_) {
      // Ignore error
    }
    console.info(cacheFilename, 'not found, downloading from', url)
  } else {
    console.info('downloading from', url)
  }

  return new Promise<string>((resolve, reject) => {
    https
      .get(url, (res) => {
        const data: Buffer[] = []
        res.on('data', (chunk) => {
          data.push(chunk)
        })

        res.on('end', () => {
          const statusCode = res.statusCode || 0
          if (statusCode < 200 || statusCode >= 300) {
            reject(new Error(`HTTP get returned status code ${res.statusCode}`))
            return
          }
          const jsdom = new JSDOM(fixSpaces(Buffer.concat(data).toString()))

          for (const item of Array.from(
            jsdom.window.document.querySelectorAll(
              'script, svg, style, link, meta, img, button, nav, footer, .hidden, .page-overlay, .a11y-nav, .visually-hidden, .language-menu'
            )
          )) {
            item.remove()
          }

          const innerHtml = fixSpaces(jsdom.window.document.querySelector('html')?.innerHTML || '')
          if (!innerHtml) {
            throw new Error('Downloaded empty file')
          }

          const result = `<!-- Downloaded from ${url} -->\n<html>${innerHtml}</html>`
          if (cacheFilename) {
            try {
              fs.mkdirSync(path.dirname(cacheFilename), { recursive: true })
            } catch (_) {
              // Ignore error
            }
            fs.writeFileSync(cacheFilename, result)
            console.log(`${url} downloaded and cached.`)
          }
          resolve(result)
        })
      })
      .on('error', reject)
  })
}

function fixSpaces(s: string): string {
  return s.replace(SPACE_REGEX, ' ').replace(SPACES_REGEX, ' ').trim()
}
