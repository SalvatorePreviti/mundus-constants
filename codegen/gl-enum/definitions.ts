import path from 'path'
import fs from 'fs'

export interface GLConstantDefinition {
  name: string
  value: string
  description: string
  title: string
  subtitle: string
  group: string
  jsdoc: string
  repeated: boolean
}

export function generateReadme(definitions: GLConstantDefinition[], readme: string): string {
  let generated = ''

  const generateDef = (def: GLConstantDefinition): void => {
    generated += `### \`const GL_${def.name} = ${def.value}\`\n\n`
    generated += `${def.description}\n\n`
  }

  let lastGroup = ''
  for (const def of definitions) {
    if (!def.group) {
      generateDef(def)
    }
  }

  for (const def of definitions) {
    if (!def.group) {
      continue
    }

    if (def.group !== lastGroup) {
      generated += `\n\n\n-----\n## ${def.group}\n-----\n`
      lastGroup = def.group
    }

    generateDef(def)
  }

  let result = ''
  let inserting = false
  for (const line of readme.split('\n')) {
    if (line.includes('__generated__readme_begin__')) {
      result += `${line}\n\n`
      result += generated
      inserting = true
      continue
    }
    if (inserting) {
      if (line.includes('__generated__readme_end__')) {
        result += `\n${line}\n`
        inserting = false
      }
      continue
    }
    result += `${line}\n`
  }

  return result
}

export async function generateConstantsSourceCode(definitions: GLConstantDefinition[]): Promise<string> {
  const template = await fs.promises.readFile(path.join(__dirname, 'template.ts'), 'utf8')

  let constantsSourceCode = ''
  let enumSourceCode = ''

  const compressedTextureTypes: string[] = []

  const enumValues: GLConstantDefinition[] = []
  for (const def of definitions) {
    if (!def.repeated) {
      constantsSourceCode += `${def.jsdoc}\n`
      constantsSourceCode += `export const GL_${def.name} = ${def.value}\n\n`

      constantsSourceCode += `export type GL_${def.name} = ${def.value}\n\n`

      enumValues.push(def)

      if (def.name !== 'COMPRESSED_TEXTURE_FORMATS' && def.name.startsWith('COMPRESSED_')) {
        compressedTextureTypes.push(`GL_${def.name}`)
      }
    }
  }

  constantsSourceCode += '/** One of the available compressed texture formats */\n'
  constantsSourceCode += 'export type GL_COMPRESSED_TEXTURE_FORMAT = \n'
  for (const compressedTextureType of compressedTextureTypes) {
    constantsSourceCode += `  | ${compressedTextureType}\n`
  }
  constantsSourceCode += '\n'

  for (let i = 0; i < enumValues.length; ++i) {
    const def = enumValues[i]
    enumSourceCode += `${def.jsdoc}\n`
    enumSourceCode += `${def.name} = GL_${def.name}`
    if (i !== enumValues.length - 1) {
      enumSourceCode += ',\n\n'
    }
  }

  let result = ''
  let insertingConstants = false
  for (const line of template.split('\n')) {
    if (line.includes('__template_constants_begin__')) {
      result += constantsSourceCode
      insertingConstants = true
      continue
    }
    if (insertingConstants) {
      if (line.includes('__template_constants_end__')) {
        insertingConstants = false
      }
      continue
    }
    if (line.includes('__template__glenum_values__')) {
      result += enumSourceCode
      continue
    }
    result += `${line}\n`
  }

  return result
}
