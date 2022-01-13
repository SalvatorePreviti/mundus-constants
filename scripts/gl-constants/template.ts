/** GL_ENUM type */
export type GL_ENUM = number

// __template_constants_begin__
type GL_BYTE = 0
type GL_UNSIGNED_BYTE = 0
type GL_SHORT = 0
type GL_UNSIGNED_SHORT = 0
type GL_INT = 0
type GL_UNSIGNED_INT = 0
type GL_FLOAT = 0
type GL_COMPRESSED_TEXTURE_FORMAT = 0
// __template_constants_end__

/** Size of one {@link GL_BYTE} or {@link GL_UNSIGNED_BYTE} in bytes, 1 */
export const GL_SIZE_OF_BYTE = 1

/** Size of a {@link GL_SHORT} or {@link GL_UNSIGNED_SHORT} in bytes, 2 */
export const GL_SIZE_OF_SHORT = 2

/** Size of {@link GL_INT} or {@link GL_UNSIGNED_INT} in bytes, 4 */
export const GL_SIZE_OF_INT = 4

/** Size of {@link GL_FLOAT} in bytes, 4 */
export const GL_SIZE_OF_FLOAT = 4

/**
 * All Webgl2 constants in a single enum.
 * See https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
 *
 * NOTE: Use this only as a type or for debugging or tooling, enum values and enum names are not tree shakeable
 */
export enum GL_ENUM_ENUM {
  __template__glenum_values__
}

/** The names of all webgl2 constants */
export type GL_ENUM_NAME = keyof typeof GL_ENUM_ENUM

export namespace GL_ENUM_NAME {
  export interface GL_ENUM_NAME_ARRAY extends ReadonlyArray<GL_ENUM_NAME> {
    /** Infers the name of a GL_ENUM constant */
    get(value: GL_ENUM | GL_ENUM_ENUM | GL_ENUM_NAME | string | null | undefined): GL_ENUM_NAME | undefined
  }
}

/**
 * The names of all webgl2 constants.
 *
 * NOTE: Use this only as a type or for debugging or tooling, enum values and enum names are not tree shakeable
 */
export const GL_ENUM_NAME: GL_ENUM_NAME.GL_ENUM_NAME_ARRAY = /* @__PURE__ */ ((): GL_ENUM_NAME.GL_ENUM_NAME_ARRAY => {
  const arr = Object.keys(GL_ENUM_ENUM).filter(
    (k: string) => k.charCodeAt(0) > 57
  ) as unknown as GL_ENUM_NAME.GL_ENUM_NAME_ARRAY
  let map: Map<unknown, GL_ENUM_NAME> | null = null
  const buildNameLookup = (): Map<unknown, GL_ENUM_NAME> => {
    const lk = new Map<unknown, GL_ENUM_NAME>()
    for (const key of arr) {
      const n = GL_ENUM_ENUM[key]
      const keyLower = key.toLowerCase()
      lk.set(key, key)
      lk.set(keyLower, key)
      lk.set(`GL_${key}`, key)
      lk.set(`gl_${keyLower}`, key)
      if (!lk.has(n)) {
        lk.set(n, key)
        lk.set(n.toString(), key)
      }
    }
    return lk
  }

  arr.get = (value: GL_ENUM | GL_ENUM_ENUM | GL_ENUM_NAME | string | null | undefined): GL_ENUM_NAME | undefined =>
    (map || (map = buildNameLookup())).get(value)

  return arr
})()

/**
 * Gets the size of a GL_ type. Returns 0 for invalid types.
 *
 * {@link GL_BYTE}=1
 *
 * {@link GL_UNSIGNED_BYTE}=1
 *
 * {@link GL_SHORT}=2
 *
 * {@link GL_UNSIGNED_SHORT}=2
 *
 * {@link GL_INT}=4
 *
 * {@link GL_UNSIGNED_INT}=4
 *
 * {@link GL_FLOAT}=4
 */
export const GL_sizeOfType: {
  (type: GL_BYTE | GL_UNSIGNED_BYTE): 1
  (type: GL_SHORT | GL_UNSIGNED_SHORT): 2
  (type: GL_INT | GL_UNSIGNED_INT | GL_FLOAT): 4
  (type: GL_ENUM): 0 | 1 | 2 | 4
} = (type: number): any => (type >= 5120 ? (type < 5122 ? 1 : type < 5124 ? 2 : type < 5127 ? 4 : 0) : 0)

/**
 * Returns true if the given GL texture format is compressed.
 *
 * {@link GL_COMPRESSED_RGB_S3TC_DXT1_EXT} |
 *
 * {@link GL_COMPRESSED_RGBA_S3TC_DXT1_EXT} |
 *
 * {@link GL_COMPRESSED_RGBA_S3TC_DXT3_EXT} |
 *
 * {@link GL_COMPRESSED_RGBA_S3TC_DXT5_EXT} |
 *
 * {@link GL_COMPRESSED_R11_EAC} |
 *
 * {@link GL_COMPRESSED_SIGNED_R11_EAC} |
 *
 * {@link GL_COMPRESSED_RG11_EAC} |
 *
 * {@link GL_COMPRESSED_SIGNED_RG11_EAC} |
 *
 * {@link GL_COMPRESSED_RGB8_ETC2} |
 *
 * {@link GL_COMPRESSED_RGBA8_ETC2_EAC} |
 *
 * {@link GL_COMPRESSED_SRGB8_ETC2} |
 *
 * {@link GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC} |
 *
 * {@link GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2} |
 *
 * {@link GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2} |
 *
 * {@link GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG} |
 *
 * {@link GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG} |
 *
 * {@link GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG} |
 *
 * {@link GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG} |
 *
 * {@link GL_COMPRESSED_RGB_ETC1_WEBGL}
 */
export const GL_isTextureFormatCompressed: {
  (type: GL_COMPRESSED_TEXTURE_FORMAT): true
  (type: GL_ENUM): boolean
} = (value: GL_ENUM): any =>
  (value > 33775 && value < 33780) ||
  (value > 35839 && value < 35844) ||
  value === 36196 ||
  (value > 37487 && value < 37498)
