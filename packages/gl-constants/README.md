## @mundus/gl-constants - WebGL constants

This module exports all webgl constants as single const exports.
This allows better tree shaking and minification during bundling.

See https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants for more information

---

# Installation:

```sh
npm i @mundus/gl-constants
```

---

# Usage:

```js
import { GL_LINE_LOOP, GL_ALIASED_POINT_SIZE_RANGE } from '@mundus/gl-constants'
```

### `type GL_ENUM = number`

    Generic type for GL_xxx values

### `enum GL_ENUM_ENUM { ... }`

    All Webgl2 constants in a single enum.

    NOTE: Use this only as a type or for debugging or tooling, enum values and enum names are not tree shakeable

### `const GL_ENUM_NAME: readonly string[]`

    The names of all webgl2 constants.

    NOTE: Use this only as a type or for debugging or tooling, enum values and enum names are not tree shakeable

### `GL_ENUM_NAME.get(value: GL_ENUM | GL_ENUM_ENUM | GL_ENUM_NAME | string | null | undefined): GL_ENUM_NAME | undefined`

    Infers the name of a GL_ENUM constant, useful for debugging (print the name of a GL constant).

    NOTE: Use this only as a type or for debugging or tooling, enum values and enum names are not tree shakeable

### `const GL_SIZE_OF_BYTE = 1`

    Size of one GL_BYTE or GL_UNSIGNED_BYTE in bytes

### `const GL_SIZE_OF_SHORT = 2`

    Size of one GL_BYTE or GL_UNSIGNED_BYTE in bytes

### `const GL_SIZE_OF_INT = 4`

    Size of GL_INT or GL_UNSIGNED_INT in bytes

### `const GL_SIZE_OF_FLOAT = 4`

    Size of GL_FLOAT in bytes

<!-- __generated__readme_begin__ -->

---

## [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)

- Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.

---

### `const GL_DEPTH_BUFFER_BIT = 0x00000100`

Passed to clear the current depth buffer.

### `const GL_STENCIL_BUFFER_BIT = 0x00000400`

Passed to clear the current stencil buffer.

### `const GL_COLOR_BUFFER_BIT = 0x00004000`

Passed to clear the current color buffer.

---

## [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)

- Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
  or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.

---

### `const GL_POINTS = 0x0000`

Passed to drawElements or drawArrays to draw single points.

### `const GL_LINES = 0x0001`

Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.

### `const GL_LINE_LOOP = 0x0002`

Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.

### `const GL_LINE_STRIP = 0x0003`

Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.

### `const GL_TRIANGLES = 0x0004`

Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.

### `const GL_TRIANGLE_STRIP = 0x0005`

Passed to drawElements or drawArrays to draw a connected group of triangles.

### `const GL_TRIANGLE_FAN = 0x0006`

Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.

---

## [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)

- Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
  or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).

---

### `const GL_ZERO = 0`

Passed to blendFunc or blendFuncSeparate to turn off a component.

### `const GL_ONE = 1`

Passed to blendFunc or blendFuncSeparate to turn on a component.

### `const GL_SRC_COLOR = 0x0300`

Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.

### `const GL_ONE_MINUS_SRC_COLOR = 0x0301`

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.

### `const GL_SRC_ALPHA = 0x0302`

Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.

### `const GL_ONE_MINUS_SRC_ALPHA = 0x0303`

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.

### `const GL_DST_ALPHA = 0x0304`

Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.

### `const GL_ONE_MINUS_DST_ALPHA = 0x0305`

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.

### `const GL_DST_COLOR = 0x0306`

Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.

### `const GL_ONE_MINUS_DST_COLOR = 0x0307`

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.

### `const GL_SRC_ALPHA_SATURATE = 0x0308`

Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.

### `const GL_CONSTANT_COLOR = 0x8001`

Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.

### `const GL_ONE_MINUS_CONSTANT_COLOR = 0x8002`

Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.

### `const GL_CONSTANT_ALPHA = 0x8003`

Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.

### `const GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004`

Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.

---

## [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)

- Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
  or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).

---

### `const GL_FUNC_ADD = 0x8006`

Passed to blendEquation or blendEquationSeparate to set an addition blend function.

### `const GL_FUNC_SUBTRACT = 0x800a`

Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).

### `const GL_FUNC_REVERSE_SUBTRACT = 0x800b`

Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).

---

## [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)

- Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.

---

### `const GL_BLEND_EQUATION = 0x8009`

Passed to getParameter to get the current RGB blend function.

### `const GL_BLEND_EQUATION_RGB = 0x8009`

Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION

### `const GL_BLEND_EQUATION_ALPHA = 0x883d`

Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION

### `const GL_BLEND_DST_RGB = 0x80c8`

Passed to getParameter to get the current destination RGB blend function.

### `const GL_BLEND_SRC_RGB = 0x80c9`

Passed to getParameter to get the current destination RGB blend function.

### `const GL_BLEND_DST_ALPHA = 0x80ca`

Passed to getParameter to get the current destination alpha blend function.

### `const GL_BLEND_SRC_ALPHA = 0x80cb`

Passed to getParameter to get the current source alpha blend function.

### `const GL_BLEND_COLOR = 0x8005`

Passed to getParameter to return a the current blend color.

### `const GL_ARRAY_BUFFER_BINDING = 0x8894`

Passed to getParameter to get the array buffer binding.

### `const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895`

Passed to getParameter to get the current element array buffer.

### `const GL_LINE_WIDTH = 0x0b21`

Passed to getParameter to get the current lineWidth (set by the lineWidth method).

### `const GL_ALIASED_POINT_SIZE_RANGE = 0x846d`

Passed to getParameter to get the current size of a point drawn with gl.POINTS

### `const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e`

Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.

### `const GL_CULL_FACE_MODE = 0x0b45`

Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK

### `const GL_FRONT_FACE = 0x0b46`

Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.

### `const GL_DEPTH_RANGE = 0x0b70`

Passed to getParameter to return a length-2 array of floats giving the current depth range.

### `const GL_DEPTH_WRITEMASK = 0x0b72`

Passed to getParameter to determine if the depth write mask is enabled.

### `const GL_DEPTH_CLEAR_VALUE = 0x0b73`

Passed to getParameter to determine the current depth clear value.

### `const GL_DEPTH_FUNC = 0x0b74`

Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.

### `const GL_STENCIL_CLEAR_VALUE = 0x0b91`

Passed to getParameter to get the value the stencil will be cleared to.

### `const GL_STENCIL_FUNC = 0x0b92`

Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.

### `const GL_STENCIL_FAIL = 0x0b94`

Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.

### `const GL_STENCIL_PASS_DEPTH_FAIL = 0x0b95`

Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.

### `const GL_STENCIL_PASS_DEPTH_PASS = 0x0b96`

Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.

### `const GL_STENCIL_REF = 0x0b97`

Passed to getParameter to get the reference value used for stencil tests.

### `const GL_STENCIL_VALUE_MASK = 0x0b93`

### `const GL_STENCIL_WRITEMASK = 0x0b98`

### `const GL_STENCIL_BACK_FUNC = 0x8800`

### `const GL_STENCIL_BACK_FAIL = 0x8801`

### `const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802`

### `const GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803`

### `const GL_STENCIL_BACK_REF = 0x8ca3`

### `const GL_STENCIL_BACK_VALUE_MASK = 0x8ca4`

### `const GL_STENCIL_BACK_WRITEMASK = 0x8ca5`

### `const GL_VIEWPORT = 0x0ba2`

Returns an [Int32Array](https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) with four elements for the current viewport dimensions.

### `const GL_SCISSOR_BOX = 0x0c10`

Returns an [Int32Array](https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) with four elements for the current scissor box dimensions.

### `const GL_COLOR_CLEAR_VALUE = 0x0c22`

### `const GL_COLOR_WRITEMASK = 0x0c23`

### `const GL_UNPACK_ALIGNMENT = 0x0cf5`

### `const GL_PACK_ALIGNMENT = 0x0d05`

### `const GL_MAX_TEXTURE_SIZE = 0x0d33`

### `const GL_MAX_VIEWPORT_DIMS = 0x0d3a`

### `const GL_SUBPIXEL_BITS = 0x0d50`

### `const GL_RED_BITS = 0x0d52`

### `const GL_GREEN_BITS = 0x0d53`

### `const GL_BLUE_BITS = 0x0d54`

### `const GL_ALPHA_BITS = 0x0d55`

### `const GL_DEPTH_BITS = 0x0d56`

### `const GL_STENCIL_BITS = 0x0d57`

### `const GL_POLYGON_OFFSET_UNITS = 0x2a00`

### `const GL_POLYGON_OFFSET_FACTOR = 0x8038`

### `const GL_TEXTURE_BINDING_2D = 0x8069`

### `const GL_SAMPLE_BUFFERS = 0x80a8`

### `const GL_SAMPLES = 0x80a9`

### `const GL_SAMPLE_COVERAGE_VALUE = 0x80aa`

### `const GL_SAMPLE_COVERAGE_INVERT = 0x80ab`

### `const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3`

### `const GL_VENDOR = 0x1f00`

### `const GL_RENDERER = 0x1f01`

### `const GL_VERSION = 0x1f02`

### `const GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a`

### `const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b`

### `const GL_BROWSER_DEFAULT_WEBGL = 0x9244`

---

## [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)

- Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
  [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
  [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
  or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).

---

### `const GL_STATIC_DRAW = 0x88e4`

Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.

### `const GL_STREAM_DRAW = 0x88e0`

Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.

### `const GL_DYNAMIC_DRAW = 0x88e8`

Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.

### `const GL_ARRAY_BUFFER = 0x8892`

Passed to bindBuffer or bufferData to specify the type of buffer being used.

### `const GL_ELEMENT_ARRAY_BUFFER = 0x8893`

Passed to bindBuffer or bufferData to specify the type of buffer being used.

### `const GL_BUFFER_SIZE = 0x8764`

Passed to getBufferParameter to get a buffer's size.

### `const GL_BUFFER_USAGE = 0x8765`

Passed to getBufferParameter to get the hint for the buffer passed in when it was created.

---

## [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)

- Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).

---

### `const GL_CURRENT_VERTEX_ATTRIB = 0x8626`

Passed to getVertexAttrib to read back the current vertex attribute.

### `const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622`

### `const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623`

### `const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624`

### `const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625`

### `const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a`

### `const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645`

### `const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f`

---

## [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)

- Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).

---

### `const GL_CULL_FACE = 0x0b44`

Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.

### `const GL_FRONT = 0x0404`

Passed to cullFace to specify that only front faces should be culled.

### `const GL_BACK = 0x0405`

Passed to cullFace to specify that only back faces should be culled.

### `const GL_FRONT_AND_BACK = 0x0408`

Passed to cullFace to specify that front and back faces should be culled.

---

## [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)

- Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
  or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).

---

### `const GL_BLEND = 0x0be2`

Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.

### `const GL_DEPTH_TEST = 0x0b71`

Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.

### `const GL_DITHER = 0x0bd0`

Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.

### `const GL_POLYGON_OFFSET_FILL = 0x8037`

Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.

### `const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e`

Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.

### `const GL_SAMPLE_COVERAGE = 0x80a0`

Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.

### `const GL_SCISSOR_TEST = 0x0c11`

Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.

### `const GL_STENCIL_TEST = 0x0b90`

Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.

---

## [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)

- Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).

---

### `const GL_NO_ERROR = 0`

Returned from getError.

### `const GL_INVALID_ENUM = 0x0500`

Returned from getError.

### `const GL_INVALID_VALUE = 0x0501`

Returned from getError.

### `const GL_INVALID_OPERATION = 0x0502`

Returned from getError.

### `const GL_OUT_OF_MEMORY = 0x0505`

Returned from getError.

### `const GL_CONTEXT_LOST_WEBGL = 0x9242`

Returned from getError.

---

## [Front face directions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#front_face_directions)

- Constants passed to [frontFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/frontFace).

---

### `const GL_CW = 0x0900`

Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction

### `const GL_CCW = 0x0901`

Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction

---

## [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)

- Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)

---

### `const GL_DONT_CARE = 0x1100`

There is no preference for this behavior.

### `const GL_FASTEST = 0x1101`

The most efficient behavior should be used.

### `const GL_NICEST = 0x1102`

The most correct or the highest quality option should be used.

### `const GL_GENERATE_MIPMAP_HINT = 0x8192`

Hint for the quality of filtering when generating mipmap images with [generateMipmap()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/generateMipmap).

---

## [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)

---

### `const GL_BYTE = 0x1400`

### `const GL_UNSIGNED_BYTE = 0x1401`

### `const GL_SHORT = 0x1402`

### `const GL_UNSIGNED_SHORT = 0x1403`

### `const GL_INT = 0x1404`

### `const GL_UNSIGNED_INT = 0x1405`

### `const GL_FLOAT = 0x1406`

---

## [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)

---

### `const GL_DEPTH_COMPONENT = 0x1902`

### `const GL_ALPHA = 0x1906`

### `const GL_RGB = 0x1907`

### `const GL_RGBA = 0x1908`

### `const GL_LUMINANCE = 0x1909`

### `const GL_LUMINANCE_ALPHA = 0x190a`

---

## [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)

---

### `const GL_UNSIGNED_BYTE = 0x1401`

### `const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033`

### `const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034`

### `const GL_UNSIGNED_SHORT_5_6_5 = 0x8363`

---

## [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)

- Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
  or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)

---

### `const GL_FRAGMENT_SHADER = 0x8b30`

Passed to createShader to define a fragment shader.

### `const GL_VERTEX_SHADER = 0x8b31`

Passed to createShader to define a vertex shader

### `const GL_COMPILE_STATUS = 0x8b81`

Passed to getShaderParameter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error

### `const GL_DELETE_STATUS = 0x8b80`

Passed to getShaderParameter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.

### `const GL_LINK_STATUS = 0x8b82`

Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.

### `const GL_VALIDATE_STATUS = 0x8b83`

Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.

### `const GL_ATTACHED_SHADERS = 0x8b85`

Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.

### `const GL_ACTIVE_ATTRIBUTES = 0x8b89`

Passed to getProgramParameter to get the number of attributes active in a program.

### `const GL_ACTIVE_UNIFORMS = 0x8b86`

Passed to getProgramParameter to get the number of uniforms active in a program.

### `const GL_MAX_VERTEX_ATTRIBS = 0x8869`

The maximum number of entries possible in the vertex attribute list.

### `const GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb`

### `const GL_MAX_VARYING_VECTORS = 0x8dfc`

### `const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d`

### `const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c`

### `const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872`

Implementation dependent number of maximum texture units. At least 8.

### `const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd`

### `const GL_SHADER_TYPE = 0x8b4f`

### `const GL_SHADING_LANGUAGE_VERSION = 0x8b8c`

### `const GL_CURRENT_PROGRAM = 0x8b8d`

---

## [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)

- Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
  or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).

---

### `const GL_NEVER = 0x0200`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.

### `const GL_LESS = 0x0201`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.

### `const GL_EQUAL = 0x0202`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.

### `const GL_LEQUAL = 0x0203`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.

### `const GL_GREATER = 0x0204`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.

### `const GL_NOTEQUAL = 0x0205`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.

### `const GL_GEQUAL = 0x0206`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.

### `const GL_ALWAYS = 0x0207`

Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.

---

## [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)

- Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).

---

### `const GL_KEEP = 0x1e00`

### `const GL_REPLACE = 0x1e01`

### `const GL_INCR = 0x1e02`

### `const GL_DECR = 0x1e03`

### `const GL_INVERT = 0x150a`

### `const GL_INCR_WRAP = 0x8507`

### `const GL_DECR_WRAP = 0x8508`

---

## [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)

- Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
  [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
  [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
  [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.

---

### `const GL_NEAREST = 0x2600`

### `const GL_LINEAR = 0x2601`

### `const GL_NEAREST_MIPMAP_NEAREST = 0x2700`

### `const GL_LINEAR_MIPMAP_NEAREST = 0x2701`

### `const GL_NEAREST_MIPMAP_LINEAR = 0x2702`

### `const GL_LINEAR_MIPMAP_LINEAR = 0x2703`

### `const GL_TEXTURE_MAG_FILTER = 0x2800`

### `const GL_TEXTURE_MIN_FILTER = 0x2801`

### `const GL_TEXTURE_WRAP_S = 0x2802`

### `const GL_TEXTURE_WRAP_T = 0x2803`

### `const GL_TEXTURE_2D = 0x0de1`

### `const GL_TEXTURE = 0x1702`

### `const GL_TEXTURE_CUBE_MAP = 0x8513`

### `const GL_TEXTURE_BINDING_CUBE_MAP = 0x8514`

### `const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515`

### `const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516`

### `const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517`

### `const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518`

### `const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519`

### `const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a`

### `const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c`

### `const GL_ACTIVE_TEXTURE = 0x84e0`

The current active texture unit.

### `const GL_REPEAT = 0x2901`

### `const GL_CLAMP_TO_EDGE = 0x812f`

### `const GL_MIRRORED_REPEAT = 0x8370`

---

## [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)

---

### `const GL_FLOAT_VEC2 = 0x8b50`

### `const GL_FLOAT_VEC3 = 0x8b51`

### `const GL_FLOAT_VEC4 = 0x8b52`

### `const GL_INT_VEC2 = 0x8b53`

### `const GL_INT_VEC3 = 0x8b54`

### `const GL_INT_VEC4 = 0x8b55`

### `const GL_BOOL = 0x8b56`

### `const GL_BOOL_VEC2 = 0x8b57`

### `const GL_BOOL_VEC3 = 0x8b58`

### `const GL_BOOL_VEC4 = 0x8b59`

### `const GL_FLOAT_MAT2 = 0x8b5a`

### `const GL_FLOAT_MAT3 = 0x8b5b`

### `const GL_FLOAT_MAT4 = 0x8b5c`

### `const GL_SAMPLER_2D = 0x8b5e`

### `const GL_SAMPLER_CUBE = 0x8b60`

---

## [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)

---

### `const GL_LOW_FLOAT = 0x8df0`

### `const GL_MEDIUM_FLOAT = 0x8df1`

### `const GL_HIGH_FLOAT = 0x8df2`

### `const GL_LOW_INT = 0x8df3`

### `const GL_MEDIUM_INT = 0x8df4`

### `const GL_HIGH_INT = 0x8df5`

---

## [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)

---

### `const GL_FRAMEBUFFER = 0x8d40`

### `const GL_RENDERBUFFER = 0x8d41`

### `const GL_RGBA4 = 0x8056`

### `const GL_RGB5_A1 = 0x8057`

### `const GL_RGB565 = 0x8d62`

### `const GL_DEPTH_COMPONENT16 = 0x81a5`

### `const GL_STENCIL_INDEX8 = 0x8d48`

### `const GL_DEPTH_STENCIL = 0x84f9`

### `const GL_RENDERBUFFER_WIDTH = 0x8d42`

### `const GL_RENDERBUFFER_HEIGHT = 0x8d43`

### `const GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44`

### `const GL_RENDERBUFFER_RED_SIZE = 0x8d50`

### `const GL_RENDERBUFFER_GREEN_SIZE = 0x8d51`

### `const GL_RENDERBUFFER_BLUE_SIZE = 0x8d52`

### `const GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53`

### `const GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54`

### `const GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55`

### `const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0`

### `const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1`

### `const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2`

### `const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3`

### `const GL_COLOR_ATTACHMENT0 = 0x8ce0`

### `const GL_DEPTH_ATTACHMENT = 0x8d00`

### `const GL_STENCIL_ATTACHMENT = 0x8d20`

### `const GL_DEPTH_STENCIL_ATTACHMENT = 0x821a`

### `const GL_NONE = 0`

### `const GL_FRAMEBUFFER_COMPLETE = 0x8cd5`

### `const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6`

### `const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7`

### `const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9`

### `const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd`

### `const GL_FRAMEBUFFER_BINDING = 0x8ca6`

### `const GL_RENDERBUFFER_BINDING = 0x8ca7`

### `const GL_MAX_RENDERBUFFER_SIZE = 0x84e8`

### `const GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506`

---

## [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)

- Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).

---

### `const GL_UNPACK_FLIP_Y_WEBGL = 0x9240`

### `const GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241`

### `const GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243`

---

## [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)

- Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.

---

### `const GL_READ_BUFFER = 0x0c02`

### `const GL_UNPACK_ROW_LENGTH = 0x0cf2`

### `const GL_UNPACK_SKIP_ROWS = 0x0cf3`

### `const GL_UNPACK_SKIP_PIXELS = 0x0cf4`

### `const GL_PACK_ROW_LENGTH = 0x0d02`

### `const GL_PACK_SKIP_ROWS = 0x0d03`

### `const GL_PACK_SKIP_PIXELS = 0x0d04`

### `const GL_TEXTURE_BINDING_3D = 0x806a`

### `const GL_UNPACK_SKIP_IMAGES = 0x806d`

### `const GL_UNPACK_IMAGE_HEIGHT = 0x806e`

### `const GL_MAX_3D_TEXTURE_SIZE = 0x8073`

### `const GL_MAX_ELEMENTS_VERTICES = 0x80e8`

### `const GL_MAX_ELEMENTS_INDICES = 0x80e9`

### `const GL_MAX_TEXTURE_LOD_BIAS = 0x84fd`

### `const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49`

### `const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a`

### `const GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff`

### `const GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904`

### `const GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905`

### `const GL_MAX_VARYING_COMPONENTS = 0x8b4b`

### `const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b`

### `const GL_RASTERIZER_DISCARD = 0x8c89`

### `const GL_VERTEX_ARRAY_BINDING = 0x85b5`

### `const GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122`

### `const GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125`

### `const GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111`

### `const GL_MAX_ELEMENT_INDEX = 0x8d6b`

---

## [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)

- Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
  [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
  [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
  [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.

---

### `const GL_RED = 0x1903`

### `const GL_RGB8 = 0x8051`

### `const GL_RGBA8 = 0x8058`

### `const GL_RGB10_A2 = 0x8059`

### `const GL_TEXTURE_3D = 0x806f`

### `const GL_TEXTURE_WRAP_R = 0x8072`

### `const GL_TEXTURE_MIN_LOD = 0x813a`

### `const GL_TEXTURE_MAX_LOD = 0x813b`

### `const GL_TEXTURE_BASE_LEVEL = 0x813c`

### `const GL_TEXTURE_MAX_LEVEL = 0x813d`

### `const GL_TEXTURE_COMPARE_MODE = 0x884c`

### `const GL_TEXTURE_COMPARE_FUNC = 0x884d`

### `const GL_SRGB = 0x8c40`

### `const GL_SRGB8 = 0x8c41`

### `const GL_SRGB8_ALPHA8 = 0x8c43`

### `const GL_COMPARE_REF_TO_TEXTURE = 0x884e`

### `const GL_RGBA32F = 0x8814`

### `const GL_RGB32F = 0x8815`

### `const GL_RGBA16F = 0x881a`

### `const GL_RGB16F = 0x881b`

### `const GL_TEXTURE_2D_ARRAY = 0x8c1a`

### `const GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d`

### `const GL_R11F_G11F_B10F = 0x8c3a`

### `const GL_RGB9_E5 = 0x8c3d`

### `const GL_RGBA32UI = 0x8d70`

### `const GL_RGB32UI = 0x8d71`

### `const GL_RGBA16UI = 0x8d76`

### `const GL_RGB16UI = 0x8d77`

### `const GL_RGBA8UI = 0x8d7c`

### `const GL_RGB8UI = 0x8d7d`

### `const GL_RGBA32I = 0x8d82`

### `const GL_RGB32I = 0x8d83`

### `const GL_RGBA16I = 0x8d88`

### `const GL_RGB16I = 0x8d89`

### `const GL_RGBA8I = 0x8d8e`

### `const GL_RGB8I = 0x8d8f`

### `const GL_RED_INTEGER = 0x8d94`

### `const GL_RGB_INTEGER = 0x8d98`

### `const GL_RGBA_INTEGER = 0x8d99`

### `const GL_R8 = 0x8229`

### `const GL_RG8 = 0x822b`

### `const GL_R16F = 0x822d`

### `const GL_R32F = 0x822e`

### `const GL_RG16F = 0x822f`

### `const GL_RG32F = 0x8230`

### `const GL_R8I = 0x8231`

### `const GL_R8UI = 0x8232`

### `const GL_R16I = 0x8233`

### `const GL_R16UI = 0x8234`

### `const GL_R32I = 0x8235`

### `const GL_R32UI = 0x8236`

### `const GL_RG8I = 0x8237`

### `const GL_RG8UI = 0x8238`

### `const GL_RG16I = 0x8239`

### `const GL_RG16UI = 0x823a`

### `const GL_RG32I = 0x823b`

### `const GL_RG32UI = 0x823c`

### `const GL_R8_SNORM = 0x8f94`

### `const GL_RG8_SNORM = 0x8f95`

### `const GL_RGB8_SNORM = 0x8f96`

### `const GL_RGBA8_SNORM = 0x8f97`

### `const GL_RGB10_A2UI = 0x906f`

### `const GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f`

### `const GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df`

---

## [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)

---

### `const GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368`

### `const GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b`

### `const GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e`

### `const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad`

### `const GL_UNSIGNED_INT_24_8 = 0x84fa`

### `const GL_HALF_FLOAT = 0x140b`

### `const GL_RG = 0x8227`

### `const GL_RG_INTEGER = 0x8228`

### `const GL_INT_2_10_10_10_REV = 0x8d9f`

---

## [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)

---

### `const GL_CURRENT_QUERY = 0x8865`

### `const GL_QUERY_RESULT = 0x8866`

### `const GL_QUERY_RESULT_AVAILABLE = 0x8867`

### `const GL_ANY_SAMPLES_PASSED = 0x8c2f`

### `const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a`

---

## [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)

---

### `const GL_MAX_DRAW_BUFFERS = 0x8824`

### `const GL_DRAW_BUFFER0 = 0x8825`

### `const GL_DRAW_BUFFER1 = 0x8826`

### `const GL_DRAW_BUFFER2 = 0x8827`

### `const GL_DRAW_BUFFER3 = 0x8828`

### `const GL_DRAW_BUFFER4 = 0x8829`

### `const GL_DRAW_BUFFER5 = 0x882a`

### `const GL_DRAW_BUFFER6 = 0x882b`

### `const GL_DRAW_BUFFER7 = 0x882c`

### `const GL_DRAW_BUFFER8 = 0x882d`

### `const GL_DRAW_BUFFER9 = 0x882e`

### `const GL_DRAW_BUFFER10 = 0x882f`

### `const GL_DRAW_BUFFER11 = 0x8830`

### `const GL_DRAW_BUFFER12 = 0x8831`

### `const GL_DRAW_BUFFER13 = 0x8832`

### `const GL_DRAW_BUFFER14 = 0x8833`

### `const GL_DRAW_BUFFER15 = 0x8834`

### `const GL_MAX_COLOR_ATTACHMENTS = 0x8cdf`

### `const GL_COLOR_ATTACHMENT1 = 0x8ce1`

### `const GL_COLOR_ATTACHMENT2 = 0x8ce2`

### `const GL_COLOR_ATTACHMENT3 = 0x8ce3`

### `const GL_COLOR_ATTACHMENT4 = 0x8ce4`

### `const GL_COLOR_ATTACHMENT5 = 0x8ce5`

### `const GL_COLOR_ATTACHMENT6 = 0x8ce6`

### `const GL_COLOR_ATTACHMENT7 = 0x8ce7`

### `const GL_COLOR_ATTACHMENT8 = 0x8ce8`

### `const GL_COLOR_ATTACHMENT9 = 0x8ce9`

### `const GL_COLOR_ATTACHMENT10 = 0x8cea`

### `const GL_COLOR_ATTACHMENT11 = 0x8ceb`

### `const GL_COLOR_ATTACHMENT12 = 0x8cec`

### `const GL_COLOR_ATTACHMENT13 = 0x8ced`

### `const GL_COLOR_ATTACHMENT14 = 0x8cee`

### `const GL_COLOR_ATTACHMENT15 = 0x8cef`

---

## [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)

---

### `const GL_SAMPLER_3D = 0x8b5f`

### `const GL_SAMPLER_2D_SHADOW = 0x8b62`

### `const GL_SAMPLER_2D_ARRAY = 0x8dc1`

### `const GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4`

### `const GL_SAMPLER_CUBE_SHADOW = 0x8dc5`

### `const GL_INT_SAMPLER_2D = 0x8dca`

### `const GL_INT_SAMPLER_3D = 0x8dcb`

### `const GL_INT_SAMPLER_CUBE = 0x8dcc`

### `const GL_INT_SAMPLER_2D_ARRAY = 0x8dcf`

### `const GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2`

### `const GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3`

### `const GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4`

### `const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7`

### `const GL_MAX_SAMPLES = 0x8d57`

### `const GL_SAMPLER_BINDING = 0x8919`

---

## [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)

---

### `const GL_PIXEL_PACK_BUFFER = 0x88eb`

### `const GL_PIXEL_UNPACK_BUFFER = 0x88ec`

### `const GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed`

### `const GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef`

### `const GL_COPY_READ_BUFFER = 0x8f36`

### `const GL_COPY_WRITE_BUFFER = 0x8f37`

### `const GL_COPY_READ_BUFFER_BINDING = 0x8f36`

### `const GL_COPY_WRITE_BUFFER_BINDING = 0x8f37`

---

## [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)

---

### `const GL_FLOAT_MAT2x3 = 0x8b65`

### `const GL_FLOAT_MAT2x4 = 0x8b66`

### `const GL_FLOAT_MAT3x2 = 0x8b67`

### `const GL_FLOAT_MAT3x4 = 0x8b68`

### `const GL_FLOAT_MAT4x2 = 0x8b69`

### `const GL_FLOAT_MAT4x3 = 0x8b6a`

### `const GL_UNSIGNED_INT_VEC2 = 0x8dc6`

### `const GL_UNSIGNED_INT_VEC3 = 0x8dc7`

### `const GL_UNSIGNED_INT_VEC4 = 0x8dc8`

### `const GL_UNSIGNED_NORMALIZED = 0x8c17`

### `const GL_SIGNED_NORMALIZED = 0x8f9c`

---

## [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes_2)

---

### `const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd`

### `const GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe`

---

## [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)

---

### `const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f`

### `const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80`

### `const GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83`

### `const GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84`

### `const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85`

### `const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88`

### `const GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a`

### `const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b`

### `const GL_INTERLEAVED_ATTRIBS = 0x8c8c`

### `const GL_SEPARATE_ATTRIBS = 0x8c8d`

### `const GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e`

### `const GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f`

### `const GL_TRANSFORM_FEEDBACK = 0x8e22`

### `const GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23`

### `const GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24`

### `const GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25`

---

## [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)

---

### `const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210`

### `const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211`

### `const GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212`

### `const GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213`

### `const GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214`

### `const GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215`

### `const GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216`

### `const GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217`

### `const GL_FRAMEBUFFER_DEFAULT = 0x8218`

### `const GL_DEPTH_STENCIL_ATTACHMENT = 0x821a`

### `const GL_DEPTH_STENCIL = 0x84f9`

### `const GL_DEPTH24_STENCIL8 = 0x88f0`

### `const GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6`

### `const GL_READ_FRAMEBUFFER = 0x8ca8`

### `const GL_DRAW_FRAMEBUFFER = 0x8ca9`

### `const GL_READ_FRAMEBUFFER_BINDING = 0x8caa`

### `const GL_RENDERBUFFER_SAMPLES = 0x8cab`

### `const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4`

### `const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56`

---

## [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)

---

### `const GL_UNIFORM_BUFFER = 0x8a11`

### `const GL_UNIFORM_BUFFER_BINDING = 0x8a28`

### `const GL_UNIFORM_BUFFER_START = 0x8a29`

### `const GL_UNIFORM_BUFFER_SIZE = 0x8a2a`

### `const GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b`

### `const GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d`

### `const GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e`

### `const GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f`

### `const GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30`

### `const GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31`

### `const GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33`

### `const GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34`

### `const GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36`

### `const GL_UNIFORM_TYPE = 0x8a37`

### `const GL_UNIFORM_SIZE = 0x8a38`

### `const GL_UNIFORM_BLOCK_INDEX = 0x8a3a`

### `const GL_UNIFORM_OFFSET = 0x8a3b`

### `const GL_UNIFORM_ARRAY_STRIDE = 0x8a3c`

### `const GL_UNIFORM_MATRIX_STRIDE = 0x8a3d`

### `const GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e`

### `const GL_UNIFORM_BLOCK_BINDING = 0x8a3f`

### `const GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40`

### `const GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42`

### `const GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43`

### `const GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44`

### `const GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46`

---

## [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)

---

### `const GL_OBJECT_TYPE = 0x9112`

### `const GL_SYNC_CONDITION = 0x9113`

### `const GL_SYNC_STATUS = 0x9114`

### `const GL_SYNC_FLAGS = 0x9115`

### `const GL_SYNC_FENCE = 0x9116`

### `const GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117`

### `const GL_UNSIGNALED = 0x9118`

### `const GL_SIGNALED = 0x9119`

### `const GL_ALREADY_SIGNALED = 0x911a`

### `const GL_TIMEOUT_EXPIRED = 0x911b`

### `const GL_CONDITION_SATISFIED = 0x911c`

### `const GL_WAIT_FAILED = 0x911d`

### `const GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001`

---

## [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)

---

### `const GL_COLOR = 0x1800`

### `const GL_DEPTH = 0x1801`

### `const GL_STENCIL = 0x1802`

### `const GL_MIN = 0x8007`

### `const GL_MAX = 0x8008`

### `const GL_DEPTH_COMPONENT24 = 0x81a6`

### `const GL_STREAM_READ = 0x88e1`

### `const GL_STREAM_COPY = 0x88e2`

### `const GL_STATIC_READ = 0x88e5`

### `const GL_STATIC_COPY = 0x88e6`

### `const GL_DYNAMIC_READ = 0x88e9`

### `const GL_DYNAMIC_COPY = 0x88ea`

### `const GL_DEPTH_COMPONENT32F = 0x8cac`

### `const GL_DEPTH32F_STENCIL8 = 0x8cad`

### `const GL_INVALID_INDEX = 0xffffffff`

### `const GL_TIMEOUT_IGNORED = -1`

### `const GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247`

---

## [ANGLE_instanced_arrays](https://developer.mozilla.org//en-US/docs/Web/API/ANGLE_instanced_arrays)

---

### `const GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe`

Describes the frequency divisor used for instanced rendering.

---

## [WEBGL_debug_renderer_info](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_debug_renderer_info)

---

### `const GL_UNMASKED_VENDOR_WEBGL = 0x9245`

Passed to getParameter to get the vendor string of the graphics driver.

### `const GL_UNMASKED_RENDERER_WEBGL = 0x9246`

Passed to getParameter to get the renderer string of the graphics driver.

---

## [EXT_texture_filter_anisotropic](https://developer.mozilla.org//en-US/docs/Web/API/EXT_texture_filter_anisotropic)

---

### `const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff`

Returns the maximum available anisotropy.

### `const GL_TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe`

Passed to texParameter to set the desired maximum anisotropy for a texture.

---

## [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)

---

### `const GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0`

A DXT1-compressed image in an RGB image format.

### `const GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1`

A DXT1-compressed image in an RGB image format with a simple on/off alpha value.

### `const GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2`

A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.

### `const GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3`

A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.

---

## [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)

---

### `const GL_COMPRESSED_R11_EAC = 0x9270`

One-channel (red) unsigned format compression.

### `const GL_COMPRESSED_SIGNED_R11_EAC = 0x9271`

One-channel (red) signed format compression.

### `const GL_COMPRESSED_RG11_EAC = 0x9272`

Two-channel (red and green) unsigned format compression.

### `const GL_COMPRESSED_SIGNED_RG11_EAC = 0x9273`

Two-channel (red and green) signed format compression.

### `const GL_COMPRESSED_RGB8_ETC2 = 0x9274`

Compresses RBG8 data with no alpha channel.

### `const GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9275`

Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.

### `const GL_COMPRESSED_SRGB8_ETC2 = 0x9276`

Compresses sRBG8 data with no alpha channel.

### `const GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277`

Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.

### `const GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278`

Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

### `const GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279`

Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

---

## [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)

---

### `const GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00`

RGB compression in 4-bit mode. One block for each 4×4 pixels.

### `const GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02`

RGBA compression in 4-bit mode. One block for each 4×4 pixels.

### `const GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01`

RGB compression in 2-bit mode. One block for each 8×4 pixels.

### `const GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03`

RGBA compression in 2-bit mode. One block for each 8×4 pixe

---

## [WEBGL_compressed_texture_etc1](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc1)

---

### `const GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8d64`

Compresses 24-bit RGB data with no alpha channel.

---

## [WEBGL_depth_texture](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_depth_texture)

---

### `const GL_UNSIGNED_INT_24_8_WEBGL = 0x84fa`

Unsigned integer type for 24-bit depth texture data.

---

## [OES_texture_half_float](https://developer.mozilla.org//en-US/docs/Web/API/OES_texture_half_float)

---

### `const GL_HALF_FLOAT_OES = 0x8d61`

Half floating-point type (16-bit).

---

## [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)

---

### `const GL_RGBA32F_EXT = 0x8814`

RGBA 32-bit floating-point color-renderable format.

### `const GL_RGB32F_EXT = 0x8815`

RGB 32-bit floating-point color-renderable format.

### `const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211`

### `const GL_UNSIGNED_NORMALIZED_EXT = 0x8c17`

---

## [EXT_blend_minmax](https://developer.mozilla.org//en-US/docs/Web/API/EXT_blend_minmax)

---

### `const GL_MIN_EXT = 0x8007`

Produces the minimum color components of the source and destination colors.

### `const GL_MAX_EXT = 0x8008`

Produces the maximum color components of the source and destination colors.

---

## [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)

---

### `const GL_SRGB_EXT = 0x8c40`

Unsized sRGB format that leaves the precision up to the driver.

### `const GL_SRGB_ALPHA_EXT = 0x8c42`

Unsized sRGB format with unsized alpha component.

### `const GL_SRGB8_ALPHA8_EXT = 0x8c43`

Sized (8-bit) sRGB and alpha formats.

### `const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210`

Returns the framebuffer color encoding.

---

## [OES_standard_derivatives](https://developer.mozilla.org//en-US/docs/Web/API/OES_standard_derivatives)

---

### `const GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b`

Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.

---

## [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)

---

### `const GL_COLOR_ATTACHMENT0_WEBGL = 0x8ce0`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT1_WEBGL = 0x8ce1`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT2_WEBGL = 0x8ce2`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT3_WEBGL = 0x8ce3`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT4_WEBGL = 0x8ce4`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT5_WEBGL = 0x8ce5`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT6_WEBGL = 0x8ce6`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT7_WEBGL = 0x8ce7`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT8_WEBGL = 0x8ce8`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT9_WEBGL = 0x8ce9`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT10_WEBGL = 0x8cea`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT11_WEBGL = 0x8ceb`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT12_WEBGL = 0x8cec`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT13_WEBGL = 0x8ced`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT14_WEBGL = 0x8cee`

Framebuffer color attachment point

### `const GL_COLOR_ATTACHMENT15_WEBGL = 0x8cef`

Framebuffer color attachment point

### `const GL_DRAW_BUFFER0_WEBGL = 0x8825`

Draw buffer

### `const GL_DRAW_BUFFER1_WEBGL = 0x8826`

Draw buffer

### `const GL_DRAW_BUFFER2_WEBGL = 0x8827`

Draw buffer

### `const GL_DRAW_BUFFER3_WEBGL = 0x8828`

Draw buffer

### `const GL_DRAW_BUFFER4_WEBGL = 0x8829`

Draw buffer

### `const GL_DRAW_BUFFER5_WEBGL = 0x882a`

Draw buffer

### `const GL_DRAW_BUFFER6_WEBGL = 0x882b`

Draw buffer

### `const GL_DRAW_BUFFER7_WEBGL = 0x882c`

Draw buffer

### `const GL_DRAW_BUFFER8_WEBGL = 0x882d`

Draw buffer

### `const GL_DRAW_BUFFER9_WEBGL = 0x882e`

Draw buffer

### `const GL_DRAW_BUFFER10_WEBGL = 0x882f`

Draw buffer

### `const GL_DRAW_BUFFER11_WEBGL = 0x8830`

Draw buffer

### `const GL_DRAW_BUFFER12_WEBGL = 0x8831`

Draw buffer

### `const GL_DRAW_BUFFER13_WEBGL = 0x8832`

Draw buffer

### `const GL_DRAW_BUFFER14_WEBGL = 0x8833`

Draw buffer

### `const GL_DRAW_BUFFER15_WEBGL = 0x8834`

Draw buffer

### `const GL_MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf`

Maximum number of framebuffer color attachment points

### `const GL_MAX_DRAW_BUFFERS_WEBGL = 0x8824`

Maximum number of draw buffers

---

## [OES_vertex_array_object](https://developer.mozilla.org//en-US/docs/Web/API/OES_vertex_array_object)

---

### `const GL_VERTEX_ARRAY_BINDING_OES = 0x85b5`

The bound vertex array object (VAO).

---

## [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)

---

### `const GL_QUERY_COUNTER_BITS_EXT = 0x8864`

The number of bits used to hold the query result for the given target.

### `const GL_CURRENT_QUERY_EXT = 0x8865`

The currently active query.

### `const GL_QUERY_RESULT_EXT = 0x8866`

The query result.

### `const GL_QUERY_RESULT_AVAILABLE_EXT = 0x8867`

A Boolean indicating whether or not a query result is available.

### `const GL_TIME_ELAPSED_EXT = 0x88bf`

Elapsed time (in nanoseconds).

### `const GL_TIMESTAMP_EXT = 0x8e28`

The current time.

### `const GL_GPU_DISJOINT_EXT = 0x8fbb`

A Boolean indicating whether or not the GPU performed any disjoint operation.

<!-- __generated__readme_end__ -->

### License

This package:

    MIT License
    Copyright (c) 2022 Salvatore Previti

Documentation and list of constants from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants)

    © 2005-2022 Mozilla and individual contributors. Content is available under these [licenses](https://developer.mozilla.org/docs/MDN/About#Copyrights_and_licenses).
