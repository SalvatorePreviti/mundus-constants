import { devLog, runParallel, devChildTask } from '@balsamic/dev'
import path from 'path'
import { generateConstantsSourceCode, generateReadme } from './gl-enum/definitions'
import { getConstantsDefinitionsHTML, parseConstantDefinitionsFromHtml } from './gl-enum/definitions-parser'
import prettier from 'prettier'
import fs from 'fs'

const root = path.resolve(__dirname, '..')

async function build(): Promise<void> {
  await devLog.timed('gl-enum', async () => {
    devLog.log()
    const definitions = await devLog.timed('load gl-enum definitions', async () =>
      parseConstantDefinitionsFromHtml(
        await getConstantsDefinitionsHTML({
          cacheFilename: path.resolve(root, '.downloads/webgl_api_constants.html')
        })
      )
    )

    const indexTsPath = path.resolve(root, 'packages/gl-constants/index.ts')
    const readmeMdPath = path.resolve(root, 'packages/gl-constants/README.md')

    devLog.log()
    devLog.log()

    const prettierConfig = await prettier.resolveConfig(indexTsPath)

    const transformReadme = async (): Promise<void> => {
      return devLog.timed('generate readme', async () => {
        const readme = await fs.promises.readFile(readmeMdPath, 'utf8')
        let transformed = generateReadme(definitions, readme)
        transformed = prettier.format(transformed, { ...prettierConfig, filepath: indexTsPath, parser: 'markdown' })
        await fs.promises.writeFile(readmeMdPath, transformed, 'utf8')
      })
    }

    const buildIndex = async (): Promise<void> => {
      const source = await generateConstantsSourceCode(definitions)
      await devLog.timed('prettify gl-constants/index.ts', async () => {
        await fs.promises.writeFile(
          indexTsPath,
          prettier.format(source, { ...prettierConfig, filepath: indexTsPath, parser: 'typescript' }),
          'utf-8'
        )
      })

      await devChildTask.runModuleBin('typescript', 'tsc', [
        ['-p', 'tsconfig.build.json'],
        ['-m', 'esnext'],
        'packages/gl-constants/index.ts'
      ])
    }

    runParallel(transformReadme, buildIndex)
  })
}

build()
