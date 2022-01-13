import { devLog, runParallel, devChildTask, devRunMain } from '@balsamic/dev'
import path from 'path'
import { generateConstantsSourceCode, generateReadme } from './gl-constants/definitions'
import { getConstantsDefinitionsHTML, parseConstantDefinitionsFromHtml } from './gl-constants/definitions-parser'
import prettier from 'prettier'
import fs from 'fs'

const root = path.resolve(__dirname, '..')

const buildIndexTs = async (project: string): Promise<void> => {
  const folder = path.resolve(root, 'packages', project)
  await devChildTask.runModuleBin(
    'typescript',
    'tsc',
    [
      ['-p', path.join(folder, 'tsconfig.build.json')],
      ['-m', 'commonjs'],
      ['-declaration', 'false'],
      ['-declarationMap', 'false']
    ],
    { title: `tsc commonjs ${project}` }
  )

  await fs.promises.writeFile(
    path.resolve(root, path.join(folder, 'index.cjs')),
    (
      await fs.promises.readFile(path.resolve(root, path.join(folder, 'index.js')), 'utf-8')
    ).replaceAll('index.js', 'index.cjs'),
    'utf8'
  )

  await fs.promises.writeFile(
    path.resolve(root, path.join(folder, 'index.cjs.map')),
    (
      await fs.promises.readFile(path.resolve(root, path.join(folder, 'index.js.map')), 'utf-8')
    ).replaceAll('index.js', 'index.cjs'),
    'utf8'
  )

  await devChildTask.runModuleBin(
    'typescript',
    'tsc',
    [
      ['-p', path.join(folder, 'tsconfig.build.json')],
      ['-m', 'esnext']
    ],
    { title: `tsc esm ${project}` }
  )
}

function buildGlConstants(): Promise<void> {
  return devLog.timed('build gl-constants', async () => {
    const indexTsPath = path.resolve(root, 'packages/gl-constants/index.ts')
    const readmeMdPath = path.resolve(root, 'packages/gl-constants/README.md')

    const prettierConfig = await prettier.resolveConfig(indexTsPath)

    const definitions = await devLog.timed('load gl-constants definitions', async () =>
      parseConstantDefinitionsFromHtml(
        await getConstantsDefinitionsHTML({
          cacheFilename: path.resolve(root, '.downloads/webgl_api_constants.html')
        })
      )
    )

    const buildGlConsantsReadme = async (): Promise<void> => {
      return devLog.timed('generate gl-constants/README.md', async () => {
        const readme = await fs.promises.readFile(readmeMdPath, 'utf8')
        let transformed = generateReadme(definitions, readme)
        transformed = prettier.format(transformed, { ...prettierConfig, filepath: indexTsPath, parser: 'markdown' })
        await fs.promises.writeFile(readmeMdPath, transformed, 'utf8')
      })
    }

    const buildGlConstantsCode = async (): Promise<void> => {
      const source = await generateConstantsSourceCode(definitions)
      await devLog.timed('prettify gl-constants/index.ts', async () => {
        await fs.promises.writeFile(
          indexTsPath,
          prettier.format(source, { ...prettierConfig, filepath: indexTsPath, parser: 'typescript' }),
          'utf-8'
        )
      })

      await buildIndexTs('gl-constants')
    }

    await runParallel(buildGlConsantsReadme, buildGlConstantsCode)
  })
}

function buildKeycodes(): Promise<void> {
  return devLog.timed('build keycodes', async () => {
    buildIndexTs('keycodes')
  })
}

function build(): Promise<void> {
  return runParallel(buildGlConstants, buildKeycodes)
}

devRunMain(build)
