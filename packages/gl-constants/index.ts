/** GL_ENUM type */
export type GL_ENUM = number

/**
 * DEPTH_BUFFER_BIT = 0x00000100
 *
 * Passed to clear the current depth buffer.
 *
 * [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)
 * - Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.
 */
export const GL_DEPTH_BUFFER_BIT = 0x00000100

export type GL_DEPTH_BUFFER_BIT = 0x00000100

/**
 * STENCIL_BUFFER_BIT = 0x00000400
 *
 * Passed to clear the current stencil buffer.
 *
 * [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)
 * - Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.
 */
export const GL_STENCIL_BUFFER_BIT = 0x00000400

export type GL_STENCIL_BUFFER_BIT = 0x00000400

/**
 * COLOR_BUFFER_BIT = 0x00004000
 *
 * Passed to clear the current color buffer.
 *
 * [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)
 * - Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.
 */
export const GL_COLOR_BUFFER_BIT = 0x00004000

export type GL_COLOR_BUFFER_BIT = 0x00004000

/**
 * POINTS = 0x0000
 *
 * Passed to drawElements or drawArrays to draw single points.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_POINTS = 0x0000

export type GL_POINTS = 0x0000

/**
 * LINES = 0x0001
 *
 * Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_LINES = 0x0001

export type GL_LINES = 0x0001

/**
 * LINE_LOOP = 0x0002
 *
 * Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_LINE_LOOP = 0x0002

export type GL_LINE_LOOP = 0x0002

/**
 * LINE_STRIP = 0x0003
 *
 * Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_LINE_STRIP = 0x0003

export type GL_LINE_STRIP = 0x0003

/**
 * TRIANGLES = 0x0004
 *
 * Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_TRIANGLES = 0x0004

export type GL_TRIANGLES = 0x0004

/**
 * TRIANGLE_STRIP = 0x0005
 *
 * Passed to drawElements or drawArrays to draw a connected group of triangles.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_TRIANGLE_STRIP = 0x0005

export type GL_TRIANGLE_STRIP = 0x0005

/**
 * TRIANGLE_FAN = 0x0006
 *
 * Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.
 *
 * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
 * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
 * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
 */
export const GL_TRIANGLE_FAN = 0x0006

export type GL_TRIANGLE_FAN = 0x0006

/**
 * ZERO = 0
 *
 * Passed to blendFunc or blendFuncSeparate to turn off a component.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ZERO = 0

export type GL_ZERO = 0

/**
 * ONE = 1
 *
 * Passed to blendFunc or blendFuncSeparate to turn on a component.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE = 1

export type GL_ONE = 1

/**
 * SRC_COLOR = 0x0300
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_COLOR = 0x0300

export type GL_SRC_COLOR = 0x0300

/**
 * ONE_MINUS_SRC_COLOR = 0x0301
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_SRC_COLOR = 0x0301

export type GL_ONE_MINUS_SRC_COLOR = 0x0301

/**
 * SRC_ALPHA = 0x0302
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_ALPHA = 0x0302

export type GL_SRC_ALPHA = 0x0302

/**
 * ONE_MINUS_SRC_ALPHA = 0x0303
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_SRC_ALPHA = 0x0303

export type GL_ONE_MINUS_SRC_ALPHA = 0x0303

/**
 * DST_ALPHA = 0x0304
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_DST_ALPHA = 0x0304

export type GL_DST_ALPHA = 0x0304

/**
 * ONE_MINUS_DST_ALPHA = 0x0305
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_DST_ALPHA = 0x0305

export type GL_ONE_MINUS_DST_ALPHA = 0x0305

/**
 * DST_COLOR = 0x0306
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_DST_COLOR = 0x0306

export type GL_DST_COLOR = 0x0306

/**
 * ONE_MINUS_DST_COLOR = 0x0307
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_DST_COLOR = 0x0307

export type GL_ONE_MINUS_DST_COLOR = 0x0307

/**
 * SRC_ALPHA_SATURATE = 0x0308
 *
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_ALPHA_SATURATE = 0x0308

export type GL_SRC_ALPHA_SATURATE = 0x0308

/**
 * CONSTANT_COLOR = 0x8001
 *
 * Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_CONSTANT_COLOR = 0x8001

export type GL_CONSTANT_COLOR = 0x8001

/**
 * ONE_MINUS_CONSTANT_COLOR = 0x8002
 *
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_CONSTANT_COLOR = 0x8002

export type GL_ONE_MINUS_CONSTANT_COLOR = 0x8002

/**
 * CONSTANT_ALPHA = 0x8003
 *
 * Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_CONSTANT_ALPHA = 0x8003

export type GL_CONSTANT_ALPHA = 0x8003

/**
 * ONE_MINUS_CONSTANT_ALPHA = 0x8004
 *
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.
 *
 * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
 * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
 * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004

export type GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004

/**
 * FUNC_ADD = 0x8006
 *
 * Passed to blendEquation or blendEquationSeparate to set an addition blend function.
 *
 * [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)
 * - Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
 * or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_ADD = 0x8006

export type GL_FUNC_ADD = 0x8006

/**
 * FUNC_SUBTRACT = 0x800a
 *
 * Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
 *
 * [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)
 * - Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
 * or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_SUBTRACT = 0x800a

export type GL_FUNC_SUBTRACT = 0x800a

/**
 * FUNC_REVERSE_SUBTRACT = 0x800b
 *
 * Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).
 *
 * [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)
 * - Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
 * or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_REVERSE_SUBTRACT = 0x800b

export type GL_FUNC_REVERSE_SUBTRACT = 0x800b

/**
 * BLEND_EQUATION = 0x8009
 *
 * Passed to getParameter to get the current RGB blend function.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_EQUATION = 0x8009

export type GL_BLEND_EQUATION = 0x8009

/**
 * BLEND_EQUATION_RGB = 0x8009
 *
 * Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_EQUATION_RGB = 0x8009

export type GL_BLEND_EQUATION_RGB = 0x8009

/**
 * BLEND_EQUATION_ALPHA = 0x883d
 *
 * Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_EQUATION_ALPHA = 0x883d

export type GL_BLEND_EQUATION_ALPHA = 0x883d

/**
 * BLEND_DST_RGB = 0x80c8
 *
 * Passed to getParameter to get the current destination RGB blend function.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_DST_RGB = 0x80c8

export type GL_BLEND_DST_RGB = 0x80c8

/**
 * BLEND_SRC_RGB = 0x80c9
 *
 * Passed to getParameter to get the current destination RGB blend function.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_SRC_RGB = 0x80c9

export type GL_BLEND_SRC_RGB = 0x80c9

/**
 * BLEND_DST_ALPHA = 0x80ca
 *
 * Passed to getParameter to get the current destination alpha blend function.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_DST_ALPHA = 0x80ca

export type GL_BLEND_DST_ALPHA = 0x80ca

/**
 * BLEND_SRC_ALPHA = 0x80cb
 *
 * Passed to getParameter to get the current source alpha blend function.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_SRC_ALPHA = 0x80cb

export type GL_BLEND_SRC_ALPHA = 0x80cb

/**
 * BLEND_COLOR = 0x8005
 *
 * Passed to getParameter to return a the current blend color.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLEND_COLOR = 0x8005

export type GL_BLEND_COLOR = 0x8005

/**
 * ARRAY_BUFFER_BINDING = 0x8894
 *
 * Passed to getParameter to get the array buffer binding.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_ARRAY_BUFFER_BINDING = 0x8894

export type GL_ARRAY_BUFFER_BINDING = 0x8894

/**
 * ELEMENT_ARRAY_BUFFER_BINDING = 0x8895
 *
 * Passed to getParameter to get the current element array buffer.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895

export type GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895

/**
 * LINE_WIDTH = 0x0b21
 *
 * Passed to getParameter to get the current lineWidth (set by the lineWidth method).
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_LINE_WIDTH = 0x0b21

export type GL_LINE_WIDTH = 0x0b21

/**
 * ALIASED_POINT_SIZE_RANGE = 0x846d
 *
 * Passed to getParameter to get the current size of a point drawn with gl.POINTS
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_ALIASED_POINT_SIZE_RANGE = 0x846d

export type GL_ALIASED_POINT_SIZE_RANGE = 0x846d

/**
 * ALIASED_LINE_WIDTH_RANGE = 0x846e
 *
 * Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e

export type GL_ALIASED_LINE_WIDTH_RANGE = 0x846e

/**
 * CULL_FACE_MODE = 0x0b45
 *
 * Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_CULL_FACE_MODE = 0x0b45

export type GL_CULL_FACE_MODE = 0x0b45

/**
 * FRONT_FACE = 0x0b46
 *
 * Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_FRONT_FACE = 0x0b46

export type GL_FRONT_FACE = 0x0b46

/**
 * DEPTH_RANGE = 0x0b70
 *
 * Passed to getParameter to return a length-2 array of floats giving the current depth range.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_DEPTH_RANGE = 0x0b70

export type GL_DEPTH_RANGE = 0x0b70

/**
 * DEPTH_WRITEMASK = 0x0b72
 *
 * Passed to getParameter to determine if the depth write mask is enabled.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_DEPTH_WRITEMASK = 0x0b72

export type GL_DEPTH_WRITEMASK = 0x0b72

/**
 * DEPTH_CLEAR_VALUE = 0x0b73
 *
 * Passed to getParameter to determine the current depth clear value.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_DEPTH_CLEAR_VALUE = 0x0b73

export type GL_DEPTH_CLEAR_VALUE = 0x0b73

/**
 * DEPTH_FUNC = 0x0b74
 *
 * Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_DEPTH_FUNC = 0x0b74

export type GL_DEPTH_FUNC = 0x0b74

/**
 * STENCIL_CLEAR_VALUE = 0x0b91
 *
 * Passed to getParameter to get the value the stencil will be cleared to.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_CLEAR_VALUE = 0x0b91

export type GL_STENCIL_CLEAR_VALUE = 0x0b91

/**
 * STENCIL_FUNC = 0x0b92
 *
 * Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_FUNC = 0x0b92

export type GL_STENCIL_FUNC = 0x0b92

/**
 * STENCIL_FAIL = 0x0b94
 *
 * Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_FAIL = 0x0b94

export type GL_STENCIL_FAIL = 0x0b94

/**
 * STENCIL_PASS_DEPTH_FAIL = 0x0b95
 *
 * Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_PASS_DEPTH_FAIL = 0x0b95

export type GL_STENCIL_PASS_DEPTH_FAIL = 0x0b95

/**
 * STENCIL_PASS_DEPTH_PASS = 0x0b96
 *
 * Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_PASS_DEPTH_PASS = 0x0b96

export type GL_STENCIL_PASS_DEPTH_PASS = 0x0b96

/**
 * STENCIL_REF = 0x0b97
 *
 * Passed to getParameter to get the reference value used for stencil tests.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_REF = 0x0b97

export type GL_STENCIL_REF = 0x0b97

/**
 * STENCIL_VALUE_MASK = 0x0b93
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_VALUE_MASK = 0x0b93

export type GL_STENCIL_VALUE_MASK = 0x0b93

/**
 * STENCIL_WRITEMASK = 0x0b98
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_WRITEMASK = 0x0b98

export type GL_STENCIL_WRITEMASK = 0x0b98

/**
 * STENCIL_BACK_FUNC = 0x8800
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_FUNC = 0x8800

export type GL_STENCIL_BACK_FUNC = 0x8800

/**
 * STENCIL_BACK_FAIL = 0x8801
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_FAIL = 0x8801

export type GL_STENCIL_BACK_FAIL = 0x8801

/**
 * STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802

export type GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802

/**
 * STENCIL_BACK_PASS_DEPTH_PASS = 0x8803
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803

export type GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803

/**
 * STENCIL_BACK_REF = 0x8ca3
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_REF = 0x8ca3

export type GL_STENCIL_BACK_REF = 0x8ca3

/**
 * STENCIL_BACK_VALUE_MASK = 0x8ca4
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_VALUE_MASK = 0x8ca4

export type GL_STENCIL_BACK_VALUE_MASK = 0x8ca4

/**
 * STENCIL_BACK_WRITEMASK = 0x8ca5
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BACK_WRITEMASK = 0x8ca5

export type GL_STENCIL_BACK_WRITEMASK = 0x8ca5

/**
 * VIEWPORT = 0x0ba2
 *
 * Returns an [Int32Array](https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) with four elements for the current viewport dimensions.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_VIEWPORT = 0x0ba2

export type GL_VIEWPORT = 0x0ba2

/**
 * SCISSOR_BOX = 0x0c10
 *
 * Returns an [Int32Array](https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) with four elements for the current scissor box dimensions.
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_SCISSOR_BOX = 0x0c10

export type GL_SCISSOR_BOX = 0x0c10

/**
 * COLOR_CLEAR_VALUE = 0x0c22
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_COLOR_CLEAR_VALUE = 0x0c22

export type GL_COLOR_CLEAR_VALUE = 0x0c22

/**
 * COLOR_WRITEMASK = 0x0c23
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_COLOR_WRITEMASK = 0x0c23

export type GL_COLOR_WRITEMASK = 0x0c23

/**
 * UNPACK_ALIGNMENT = 0x0cf5
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_UNPACK_ALIGNMENT = 0x0cf5

export type GL_UNPACK_ALIGNMENT = 0x0cf5

/**
 * PACK_ALIGNMENT = 0x0d05
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_PACK_ALIGNMENT = 0x0d05

export type GL_PACK_ALIGNMENT = 0x0d05

/**
 * MAX_TEXTURE_SIZE = 0x0d33
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_TEXTURE_SIZE = 0x0d33

export type GL_MAX_TEXTURE_SIZE = 0x0d33

/**
 * MAX_VIEWPORT_DIMS = 0x0d3a
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_VIEWPORT_DIMS = 0x0d3a

export type GL_MAX_VIEWPORT_DIMS = 0x0d3a

/**
 * SUBPIXEL_BITS = 0x0d50
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_SUBPIXEL_BITS = 0x0d50

export type GL_SUBPIXEL_BITS = 0x0d50

/**
 * RED_BITS = 0x0d52
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_RED_BITS = 0x0d52

export type GL_RED_BITS = 0x0d52

/**
 * GREEN_BITS = 0x0d53
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_GREEN_BITS = 0x0d53

export type GL_GREEN_BITS = 0x0d53

/**
 * BLUE_BITS = 0x0d54
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BLUE_BITS = 0x0d54

export type GL_BLUE_BITS = 0x0d54

/**
 * ALPHA_BITS = 0x0d55
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_ALPHA_BITS = 0x0d55

export type GL_ALPHA_BITS = 0x0d55

/**
 * DEPTH_BITS = 0x0d56
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_DEPTH_BITS = 0x0d56

export type GL_DEPTH_BITS = 0x0d56

/**
 * STENCIL_BITS = 0x0d57
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_STENCIL_BITS = 0x0d57

export type GL_STENCIL_BITS = 0x0d57

/**
 * POLYGON_OFFSET_UNITS = 0x2a00
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_POLYGON_OFFSET_UNITS = 0x2a00

export type GL_POLYGON_OFFSET_UNITS = 0x2a00

/**
 * POLYGON_OFFSET_FACTOR = 0x8038
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_POLYGON_OFFSET_FACTOR = 0x8038

export type GL_POLYGON_OFFSET_FACTOR = 0x8038

/**
 * TEXTURE_BINDING_2D = 0x8069
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_TEXTURE_BINDING_2D = 0x8069

export type GL_TEXTURE_BINDING_2D = 0x8069

/**
 * SAMPLE_BUFFERS = 0x80a8
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_SAMPLE_BUFFERS = 0x80a8

export type GL_SAMPLE_BUFFERS = 0x80a8

/**
 * SAMPLES = 0x80a9
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_SAMPLES = 0x80a9

export type GL_SAMPLES = 0x80a9

/**
 * SAMPLE_COVERAGE_VALUE = 0x80aa
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_SAMPLE_COVERAGE_VALUE = 0x80aa

export type GL_SAMPLE_COVERAGE_VALUE = 0x80aa

/**
 * SAMPLE_COVERAGE_INVERT = 0x80ab
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_SAMPLE_COVERAGE_INVERT = 0x80ab

export type GL_SAMPLE_COVERAGE_INVERT = 0x80ab

/**
 * COMPRESSED_TEXTURE_FORMATS = 0x86a3
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3

export type GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3

/**
 * VENDOR = 0x1f00
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_VENDOR = 0x1f00

export type GL_VENDOR = 0x1f00

/**
 * RENDERER = 0x1f01
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_RENDERER = 0x1f01

export type GL_RENDERER = 0x1f01

/**
 * VERSION = 0x1f02
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_VERSION = 0x1f02

export type GL_VERSION = 0x1f02

/**
 * IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a

export type GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a

/**
 * IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b

export type GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b

/**
 * BROWSER_DEFAULT_WEBGL = 0x9244
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_BROWSER_DEFAULT_WEBGL = 0x9244

export type GL_BROWSER_DEFAULT_WEBGL = 0x9244

/**
 * STATIC_DRAW = 0x88e4
 *
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_STATIC_DRAW = 0x88e4

export type GL_STATIC_DRAW = 0x88e4

/**
 * STREAM_DRAW = 0x88e0
 *
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_STREAM_DRAW = 0x88e0

export type GL_STREAM_DRAW = 0x88e0

/**
 * DYNAMIC_DRAW = 0x88e8
 *
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_DYNAMIC_DRAW = 0x88e8

export type GL_DYNAMIC_DRAW = 0x88e8

/**
 * ARRAY_BUFFER = 0x8892
 *
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_ARRAY_BUFFER = 0x8892

export type GL_ARRAY_BUFFER = 0x8892

/**
 * ELEMENT_ARRAY_BUFFER = 0x8893
 *
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_ELEMENT_ARRAY_BUFFER = 0x8893

export type GL_ELEMENT_ARRAY_BUFFER = 0x8893

/**
 * BUFFER_SIZE = 0x8764
 *
 * Passed to getBufferParameter to get a buffer's size.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_BUFFER_SIZE = 0x8764

export type GL_BUFFER_SIZE = 0x8764

/**
 * BUFFER_USAGE = 0x8765
 *
 * Passed to getBufferParameter to get the hint for the buffer passed in when it was created.
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
 * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
 * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
 * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
 * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
 */
export const GL_BUFFER_USAGE = 0x8765

export type GL_BUFFER_USAGE = 0x8765

/**
 * CURRENT_VERTEX_ATTRIB = 0x8626
 *
 * Passed to getVertexAttrib to read back the current vertex attribute.
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_CURRENT_VERTEX_ATTRIB = 0x8626

export type GL_CURRENT_VERTEX_ATTRIB = 0x8626

/**
 * VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622

export type GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622

/**
 * VERTEX_ATTRIB_ARRAY_SIZE = 0x8623
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623

export type GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623

/**
 * VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624

export type GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624

/**
 * VERTEX_ATTRIB_ARRAY_TYPE = 0x8625
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625

export type GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625

/**
 * VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a

export type GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a

/**
 * VERTEX_ATTRIB_ARRAY_POINTER = 0x8645
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645

export type GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645

/**
 * VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
 * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
 */
export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f

export type GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f

/**
 * CULL_FACE = 0x0b44
 *
 * Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
 *
 * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
 * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
 */
export const GL_CULL_FACE = 0x0b44

export type GL_CULL_FACE = 0x0b44

/**
 * FRONT = 0x0404
 *
 * Passed to cullFace to specify that only front faces should be culled.
 *
 * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
 * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
 */
export const GL_FRONT = 0x0404

export type GL_FRONT = 0x0404

/**
 * BACK = 0x0405
 *
 * Passed to cullFace to specify that only back faces should be culled.
 *
 * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
 * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
 */
export const GL_BACK = 0x0405

export type GL_BACK = 0x0405

/**
 * FRONT_AND_BACK = 0x0408
 *
 * Passed to cullFace to specify that front and back faces should be culled.
 *
 * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
 * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
 */
export const GL_FRONT_AND_BACK = 0x0408

export type GL_FRONT_AND_BACK = 0x0408

/**
 * BLEND = 0x0be2
 *
 * Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_BLEND = 0x0be2

export type GL_BLEND = 0x0be2

/**
 * DEPTH_TEST = 0x0b71
 *
 * Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_DEPTH_TEST = 0x0b71

export type GL_DEPTH_TEST = 0x0b71

/**
 * DITHER = 0x0bd0
 *
 * Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_DITHER = 0x0bd0

export type GL_DITHER = 0x0bd0

/**
 * POLYGON_OFFSET_FILL = 0x8037
 *
 * Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_POLYGON_OFFSET_FILL = 0x8037

export type GL_POLYGON_OFFSET_FILL = 0x8037

/**
 * SAMPLE_ALPHA_TO_COVERAGE = 0x809e
 *
 * Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e

export type GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e

/**
 * SAMPLE_COVERAGE = 0x80a0
 *
 * Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_SAMPLE_COVERAGE = 0x80a0

export type GL_SAMPLE_COVERAGE = 0x80a0

/**
 * SCISSOR_TEST = 0x0c11
 *
 * Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_SCISSOR_TEST = 0x0c11

export type GL_SCISSOR_TEST = 0x0c11

/**
 * STENCIL_TEST = 0x0b90
 *
 * Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.
 *
 * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
 * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
 * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
 */
export const GL_STENCIL_TEST = 0x0b90

export type GL_STENCIL_TEST = 0x0b90

/**
 * NO_ERROR = 0
 *
 * Returned from getError.
 *
 * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
 * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
 */
export const GL_NO_ERROR = 0

export type GL_NO_ERROR = 0

/**
 * INVALID_ENUM = 0x0500
 *
 * Returned from getError.
 *
 * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
 * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
 */
export const GL_INVALID_ENUM = 0x0500

export type GL_INVALID_ENUM = 0x0500

/**
 * INVALID_VALUE = 0x0501
 *
 * Returned from getError.
 *
 * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
 * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
 */
export const GL_INVALID_VALUE = 0x0501

export type GL_INVALID_VALUE = 0x0501

/**
 * INVALID_OPERATION = 0x0502
 *
 * Returned from getError.
 *
 * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
 * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
 */
export const GL_INVALID_OPERATION = 0x0502

export type GL_INVALID_OPERATION = 0x0502

/**
 * OUT_OF_MEMORY = 0x0505
 *
 * Returned from getError.
 *
 * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
 * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
 */
export const GL_OUT_OF_MEMORY = 0x0505

export type GL_OUT_OF_MEMORY = 0x0505

/**
 * CONTEXT_LOST_WEBGL = 0x9242
 *
 * Returned from getError.
 *
 * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
 * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
 */
export const GL_CONTEXT_LOST_WEBGL = 0x9242

export type GL_CONTEXT_LOST_WEBGL = 0x9242

/**
 * CW = 0x0900
 *
 * Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
 *
 * [Front face directions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#front_face_directions)
 * - Constants passed to [frontFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/frontFace).
 */
export const GL_CW = 0x0900

export type GL_CW = 0x0900

/**
 * CCW = 0x0901
 *
 * Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction
 *
 * [Front face directions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#front_face_directions)
 * - Constants passed to [frontFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/frontFace).
 */
export const GL_CCW = 0x0901

export type GL_CCW = 0x0901

/**
 * DONT_CARE = 0x1100
 *
 * There is no preference for this behavior.
 *
 * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
 * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
 */
export const GL_DONT_CARE = 0x1100

export type GL_DONT_CARE = 0x1100

/**
 * FASTEST = 0x1101
 *
 * The most efficient behavior should be used.
 *
 * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
 * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
 */
export const GL_FASTEST = 0x1101

export type GL_FASTEST = 0x1101

/**
 * NICEST = 0x1102
 *
 * The most correct or the highest quality option should be used.
 *
 * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
 * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
 */
export const GL_NICEST = 0x1102

export type GL_NICEST = 0x1102

/**
 * GENERATE_MIPMAP_HINT = 0x8192
 *
 * Hint for the quality of filtering when generating mipmap images with [generateMipmap()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/generateMipmap).
 *
 * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
 * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
 */
export const GL_GENERATE_MIPMAP_HINT = 0x8192

export type GL_GENERATE_MIPMAP_HINT = 0x8192

/**
 * BYTE = 0x1400
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_BYTE = 0x1400

export type GL_BYTE = 0x1400

/**
 * UNSIGNED_BYTE = 0x1401
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_UNSIGNED_BYTE = 0x1401

export type GL_UNSIGNED_BYTE = 0x1401

/**
 * SHORT = 0x1402
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_SHORT = 0x1402

export type GL_SHORT = 0x1402

/**
 * UNSIGNED_SHORT = 0x1403
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_UNSIGNED_SHORT = 0x1403

export type GL_UNSIGNED_SHORT = 0x1403

/**
 * INT = 0x1404
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_INT = 0x1404

export type GL_INT = 0x1404

/**
 * UNSIGNED_INT = 0x1405
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_UNSIGNED_INT = 0x1405

export type GL_UNSIGNED_INT = 0x1405

/**
 * FLOAT = 0x1406
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
 */
export const GL_FLOAT = 0x1406

export type GL_FLOAT = 0x1406

/**
 * DEPTH_COMPONENT = 0x1902
 *
 * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
 */
export const GL_DEPTH_COMPONENT = 0x1902

export type GL_DEPTH_COMPONENT = 0x1902

/**
 * ALPHA = 0x1906
 *
 * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
 */
export const GL_ALPHA = 0x1906

export type GL_ALPHA = 0x1906

/**
 * RGB = 0x1907
 *
 * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
 */
export const GL_RGB = 0x1907

export type GL_RGB = 0x1907

/**
 * RGBA = 0x1908
 *
 * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
 */
export const GL_RGBA = 0x1908

export type GL_RGBA = 0x1908

/**
 * LUMINANCE = 0x1909
 *
 * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
 */
export const GL_LUMINANCE = 0x1909

export type GL_LUMINANCE = 0x1909

/**
 * LUMINANCE_ALPHA = 0x190a
 *
 * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
 */
export const GL_LUMINANCE_ALPHA = 0x190a

export type GL_LUMINANCE_ALPHA = 0x190a

/**
 * UNSIGNED_SHORT_4_4_4_4 = 0x8033
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)
 */
export const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033

export type GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033

/**
 * UNSIGNED_SHORT_5_5_5_1 = 0x8034
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)
 */
export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034

export type GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034

/**
 * UNSIGNED_SHORT_5_6_5 = 0x8363
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)
 */
export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363

export type GL_UNSIGNED_SHORT_5_6_5 = 0x8363

/**
 * FRAGMENT_SHADER = 0x8b30
 *
 * Passed to createShader to define a fragment shader.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_FRAGMENT_SHADER = 0x8b30

export type GL_FRAGMENT_SHADER = 0x8b30

/**
 * VERTEX_SHADER = 0x8b31
 *
 * Passed to createShader to define a vertex shader
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_VERTEX_SHADER = 0x8b31

export type GL_VERTEX_SHADER = 0x8b31

/**
 * COMPILE_STATUS = 0x8b81
 *
 * Passed to getShaderParameter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_COMPILE_STATUS = 0x8b81

export type GL_COMPILE_STATUS = 0x8b81

/**
 * DELETE_STATUS = 0x8b80
 *
 * Passed to getShaderParameter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_DELETE_STATUS = 0x8b80

export type GL_DELETE_STATUS = 0x8b80

/**
 * LINK_STATUS = 0x8b82
 *
 * Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_LINK_STATUS = 0x8b82

export type GL_LINK_STATUS = 0x8b82

/**
 * VALIDATE_STATUS = 0x8b83
 *
 * Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_VALIDATE_STATUS = 0x8b83

export type GL_VALIDATE_STATUS = 0x8b83

/**
 * ATTACHED_SHADERS = 0x8b85
 *
 * Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_ATTACHED_SHADERS = 0x8b85

export type GL_ATTACHED_SHADERS = 0x8b85

/**
 * ACTIVE_ATTRIBUTES = 0x8b89
 *
 * Passed to getProgramParameter to get the number of attributes active in a program.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_ACTIVE_ATTRIBUTES = 0x8b89

export type GL_ACTIVE_ATTRIBUTES = 0x8b89

/**
 * ACTIVE_UNIFORMS = 0x8b86
 *
 * Passed to getProgramParameter to get the number of uniforms active in a program.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_ACTIVE_UNIFORMS = 0x8b86

export type GL_ACTIVE_UNIFORMS = 0x8b86

/**
 * MAX_VERTEX_ATTRIBS = 0x8869
 *
 * The maximum number of entries possible in the vertex attribute list.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_VERTEX_ATTRIBS = 0x8869

export type GL_MAX_VERTEX_ATTRIBS = 0x8869

/**
 * MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb

export type GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb

/**
 * MAX_VARYING_VECTORS = 0x8dfc
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_VARYING_VECTORS = 0x8dfc

export type GL_MAX_VARYING_VECTORS = 0x8dfc

/**
 * MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d

export type GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d

/**
 * MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c

export type GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c

/**
 * MAX_TEXTURE_IMAGE_UNITS = 0x8872
 *
 * Implementation dependent number of maximum texture units. At least 8.
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872

export type GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872

/**
 * MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd

export type GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd

/**
 * SHADER_TYPE = 0x8b4f
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_SHADER_TYPE = 0x8b4f

export type GL_SHADER_TYPE = 0x8b4f

/**
 * SHADING_LANGUAGE_VERSION = 0x8b8c
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_SHADING_LANGUAGE_VERSION = 0x8b8c

export type GL_SHADING_LANGUAGE_VERSION = 0x8b8c

/**
 * CURRENT_PROGRAM = 0x8b8d
 *
 * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
 * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
 * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
 */
export const GL_CURRENT_PROGRAM = 0x8b8d

export type GL_CURRENT_PROGRAM = 0x8b8d

/**
 * NEVER = 0x0200
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_NEVER = 0x0200

export type GL_NEVER = 0x0200

/**
 * LESS = 0x0201
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_LESS = 0x0201

export type GL_LESS = 0x0201

/**
 * EQUAL = 0x0202
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_EQUAL = 0x0202

export type GL_EQUAL = 0x0202

/**
 * LEQUAL = 0x0203
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_LEQUAL = 0x0203

export type GL_LEQUAL = 0x0203

/**
 * GREATER = 0x0204
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_GREATER = 0x0204

export type GL_GREATER = 0x0204

/**
 * NOTEQUAL = 0x0205
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_NOTEQUAL = 0x0205

export type GL_NOTEQUAL = 0x0205

/**
 * GEQUAL = 0x0206
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_GEQUAL = 0x0206

export type GL_GEQUAL = 0x0206

/**
 * ALWAYS = 0x0207
 *
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
 *
 * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
 * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
 * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
 */
export const GL_ALWAYS = 0x0207

export type GL_ALWAYS = 0x0207

/**
 * KEEP = 0x1e00
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_KEEP = 0x1e00

export type GL_KEEP = 0x1e00

/**
 * REPLACE = 0x1e01
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_REPLACE = 0x1e01

export type GL_REPLACE = 0x1e01

/**
 * INCR = 0x1e02
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_INCR = 0x1e02

export type GL_INCR = 0x1e02

/**
 * DECR = 0x1e03
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_DECR = 0x1e03

export type GL_DECR = 0x1e03

/**
 * INVERT = 0x150a
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_INVERT = 0x150a

export type GL_INVERT = 0x150a

/**
 * INCR_WRAP = 0x8507
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_INCR_WRAP = 0x8507

export type GL_INCR_WRAP = 0x8507

/**
 * DECR_WRAP = 0x8508
 *
 * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
 * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
 */
export const GL_DECR_WRAP = 0x8508

export type GL_DECR_WRAP = 0x8508

/**
 * NEAREST = 0x2600
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_NEAREST = 0x2600

export type GL_NEAREST = 0x2600

/**
 * LINEAR = 0x2601
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_LINEAR = 0x2601

export type GL_LINEAR = 0x2601

/**
 * NEAREST_MIPMAP_NEAREST = 0x2700
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_NEAREST_MIPMAP_NEAREST = 0x2700

export type GL_NEAREST_MIPMAP_NEAREST = 0x2700

/**
 * LINEAR_MIPMAP_NEAREST = 0x2701
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_LINEAR_MIPMAP_NEAREST = 0x2701

export type GL_LINEAR_MIPMAP_NEAREST = 0x2701

/**
 * NEAREST_MIPMAP_LINEAR = 0x2702
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_NEAREST_MIPMAP_LINEAR = 0x2702

export type GL_NEAREST_MIPMAP_LINEAR = 0x2702

/**
 * LINEAR_MIPMAP_LINEAR = 0x2703
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_LINEAR_MIPMAP_LINEAR = 0x2703

export type GL_LINEAR_MIPMAP_LINEAR = 0x2703

/**
 * TEXTURE_MAG_FILTER = 0x2800
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_MAG_FILTER = 0x2800

export type GL_TEXTURE_MAG_FILTER = 0x2800

/**
 * TEXTURE_MIN_FILTER = 0x2801
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_MIN_FILTER = 0x2801

export type GL_TEXTURE_MIN_FILTER = 0x2801

/**
 * TEXTURE_WRAP_S = 0x2802
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_WRAP_S = 0x2802

export type GL_TEXTURE_WRAP_S = 0x2802

/**
 * TEXTURE_WRAP_T = 0x2803
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_WRAP_T = 0x2803

export type GL_TEXTURE_WRAP_T = 0x2803

/**
 * TEXTURE_2D = 0x0de1
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_2D = 0x0de1

export type GL_TEXTURE_2D = 0x0de1

/**
 * TEXTURE = 0x1702
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE = 0x1702

export type GL_TEXTURE = 0x1702

/**
 * TEXTURE_CUBE_MAP = 0x8513
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP = 0x8513

export type GL_TEXTURE_CUBE_MAP = 0x8513

/**
 * TEXTURE_BINDING_CUBE_MAP = 0x8514
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_BINDING_CUBE_MAP = 0x8514

export type GL_TEXTURE_BINDING_CUBE_MAP = 0x8514

/**
 * TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515

export type GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516

export type GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517

export type GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518

export type GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519

export type GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a

export type GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a

/**
 * MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c

export type GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c

/**
 * ACTIVE_TEXTURE = 0x84e0
 *
 * The current active texture unit.
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_ACTIVE_TEXTURE = 0x84e0

export type GL_ACTIVE_TEXTURE = 0x84e0

/**
 * REPEAT = 0x2901
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_REPEAT = 0x2901

export type GL_REPEAT = 0x2901

/**
 * CLAMP_TO_EDGE = 0x812f
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_CLAMP_TO_EDGE = 0x812f

export type GL_CLAMP_TO_EDGE = 0x812f

/**
 * MIRRORED_REPEAT = 0x8370
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_MIRRORED_REPEAT = 0x8370

export type GL_MIRRORED_REPEAT = 0x8370

/**
 * FLOAT_VEC2 = 0x8b50
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_FLOAT_VEC2 = 0x8b50

export type GL_FLOAT_VEC2 = 0x8b50

/**
 * FLOAT_VEC3 = 0x8b51
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_FLOAT_VEC3 = 0x8b51

export type GL_FLOAT_VEC3 = 0x8b51

/**
 * FLOAT_VEC4 = 0x8b52
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_FLOAT_VEC4 = 0x8b52

export type GL_FLOAT_VEC4 = 0x8b52

/**
 * INT_VEC2 = 0x8b53
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_INT_VEC2 = 0x8b53

export type GL_INT_VEC2 = 0x8b53

/**
 * INT_VEC3 = 0x8b54
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_INT_VEC3 = 0x8b54

export type GL_INT_VEC3 = 0x8b54

/**
 * INT_VEC4 = 0x8b55
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_INT_VEC4 = 0x8b55

export type GL_INT_VEC4 = 0x8b55

/**
 * BOOL = 0x8b56
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_BOOL = 0x8b56

export type GL_BOOL = 0x8b56

/**
 * BOOL_VEC2 = 0x8b57
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_BOOL_VEC2 = 0x8b57

export type GL_BOOL_VEC2 = 0x8b57

/**
 * BOOL_VEC3 = 0x8b58
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_BOOL_VEC3 = 0x8b58

export type GL_BOOL_VEC3 = 0x8b58

/**
 * BOOL_VEC4 = 0x8b59
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_BOOL_VEC4 = 0x8b59

export type GL_BOOL_VEC4 = 0x8b59

/**
 * FLOAT_MAT2 = 0x8b5a
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_FLOAT_MAT2 = 0x8b5a

export type GL_FLOAT_MAT2 = 0x8b5a

/**
 * FLOAT_MAT3 = 0x8b5b
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_FLOAT_MAT3 = 0x8b5b

export type GL_FLOAT_MAT3 = 0x8b5b

/**
 * FLOAT_MAT4 = 0x8b5c
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_FLOAT_MAT4 = 0x8b5c

export type GL_FLOAT_MAT4 = 0x8b5c

/**
 * SAMPLER_2D = 0x8b5e
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_SAMPLER_2D = 0x8b5e

export type GL_SAMPLER_2D = 0x8b5e

/**
 * SAMPLER_CUBE = 0x8b60
 *
 * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
 */
export const GL_SAMPLER_CUBE = 0x8b60

export type GL_SAMPLER_CUBE = 0x8b60

/**
 * LOW_FLOAT = 0x8df0
 *
 * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
 */
export const GL_LOW_FLOAT = 0x8df0

export type GL_LOW_FLOAT = 0x8df0

/**
 * MEDIUM_FLOAT = 0x8df1
 *
 * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
 */
export const GL_MEDIUM_FLOAT = 0x8df1

export type GL_MEDIUM_FLOAT = 0x8df1

/**
 * HIGH_FLOAT = 0x8df2
 *
 * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
 */
export const GL_HIGH_FLOAT = 0x8df2

export type GL_HIGH_FLOAT = 0x8df2

/**
 * LOW_INT = 0x8df3
 *
 * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
 */
export const GL_LOW_INT = 0x8df3

export type GL_LOW_INT = 0x8df3

/**
 * MEDIUM_INT = 0x8df4
 *
 * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
 */
export const GL_MEDIUM_INT = 0x8df4

export type GL_MEDIUM_INT = 0x8df4

/**
 * HIGH_INT = 0x8df5
 *
 * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
 */
export const GL_HIGH_INT = 0x8df5

export type GL_HIGH_INT = 0x8df5

/**
 * FRAMEBUFFER = 0x8d40
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER = 0x8d40

export type GL_FRAMEBUFFER = 0x8d40

/**
 * RENDERBUFFER = 0x8d41
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER = 0x8d41

export type GL_RENDERBUFFER = 0x8d41

/**
 * RGBA4 = 0x8056
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RGBA4 = 0x8056

export type GL_RGBA4 = 0x8056

/**
 * RGB5_A1 = 0x8057
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RGB5_A1 = 0x8057

export type GL_RGB5_A1 = 0x8057

/**
 * RGB565 = 0x8d62
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RGB565 = 0x8d62

export type GL_RGB565 = 0x8d62

/**
 * DEPTH_COMPONENT16 = 0x81a5
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_DEPTH_COMPONENT16 = 0x81a5

export type GL_DEPTH_COMPONENT16 = 0x81a5

/**
 * STENCIL_INDEX8 = 0x8d48
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_STENCIL_INDEX8 = 0x8d48

export type GL_STENCIL_INDEX8 = 0x8d48

/**
 * DEPTH_STENCIL = 0x84f9
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_DEPTH_STENCIL = 0x84f9

export type GL_DEPTH_STENCIL = 0x84f9

/**
 * RENDERBUFFER_WIDTH = 0x8d42
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_WIDTH = 0x8d42

export type GL_RENDERBUFFER_WIDTH = 0x8d42

/**
 * RENDERBUFFER_HEIGHT = 0x8d43
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_HEIGHT = 0x8d43

export type GL_RENDERBUFFER_HEIGHT = 0x8d43

/**
 * RENDERBUFFER_INTERNAL_FORMAT = 0x8d44
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44

export type GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44

/**
 * RENDERBUFFER_RED_SIZE = 0x8d50
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_RED_SIZE = 0x8d50

export type GL_RENDERBUFFER_RED_SIZE = 0x8d50

/**
 * RENDERBUFFER_GREEN_SIZE = 0x8d51
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_GREEN_SIZE = 0x8d51

export type GL_RENDERBUFFER_GREEN_SIZE = 0x8d51

/**
 * RENDERBUFFER_BLUE_SIZE = 0x8d52
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_BLUE_SIZE = 0x8d52

export type GL_RENDERBUFFER_BLUE_SIZE = 0x8d52

/**
 * RENDERBUFFER_ALPHA_SIZE = 0x8d53
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53

export type GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53

/**
 * RENDERBUFFER_DEPTH_SIZE = 0x8d54
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54

export type GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54

/**
 * RENDERBUFFER_STENCIL_SIZE = 0x8d55
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55

export type GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0

export type GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1

export type GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2

export type GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3

export type GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3

/**
 * COLOR_ATTACHMENT0 = 0x8ce0
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_COLOR_ATTACHMENT0 = 0x8ce0

export type GL_COLOR_ATTACHMENT0 = 0x8ce0

/**
 * DEPTH_ATTACHMENT = 0x8d00
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_DEPTH_ATTACHMENT = 0x8d00

export type GL_DEPTH_ATTACHMENT = 0x8d00

/**
 * STENCIL_ATTACHMENT = 0x8d20
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_STENCIL_ATTACHMENT = 0x8d20

export type GL_STENCIL_ATTACHMENT = 0x8d20

/**
 * DEPTH_STENCIL_ATTACHMENT = 0x821a
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_DEPTH_STENCIL_ATTACHMENT = 0x821a

export type GL_DEPTH_STENCIL_ATTACHMENT = 0x821a

/**
 * NONE = 0
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_NONE = 0

export type GL_NONE = 0

/**
 * FRAMEBUFFER_COMPLETE = 0x8cd5
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_COMPLETE = 0x8cd5

export type GL_FRAMEBUFFER_COMPLETE = 0x8cd5

/**
 * FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6

export type GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6

/**
 * FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7

export type GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7

/**
 * FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9

export type GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9

/**
 * FRAMEBUFFER_UNSUPPORTED = 0x8cdd
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd

export type GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd

/**
 * FRAMEBUFFER_BINDING = 0x8ca6
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_FRAMEBUFFER_BINDING = 0x8ca6

export type GL_FRAMEBUFFER_BINDING = 0x8ca6

/**
 * RENDERBUFFER_BINDING = 0x8ca7
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_RENDERBUFFER_BINDING = 0x8ca7

export type GL_RENDERBUFFER_BINDING = 0x8ca7

/**
 * MAX_RENDERBUFFER_SIZE = 0x84e8
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_MAX_RENDERBUFFER_SIZE = 0x84e8

export type GL_MAX_RENDERBUFFER_SIZE = 0x84e8

/**
 * INVALID_FRAMEBUFFER_OPERATION = 0x0506
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
 */
export const GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506

export type GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506

/**
 * UNPACK_FLIP_Y_WEBGL = 0x9240
 *
 * [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)
 * - Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).
 */
export const GL_UNPACK_FLIP_Y_WEBGL = 0x9240

export type GL_UNPACK_FLIP_Y_WEBGL = 0x9240

/**
 * UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241
 *
 * [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)
 * - Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).
 */
export const GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241

export type GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241

/**
 * UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243
 *
 * [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)
 * - Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).
 */
export const GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243

export type GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243

/**
 * READ_BUFFER = 0x0c02
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_READ_BUFFER = 0x0c02

export type GL_READ_BUFFER = 0x0c02

/**
 * UNPACK_ROW_LENGTH = 0x0cf2
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_UNPACK_ROW_LENGTH = 0x0cf2

export type GL_UNPACK_ROW_LENGTH = 0x0cf2

/**
 * UNPACK_SKIP_ROWS = 0x0cf3
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_UNPACK_SKIP_ROWS = 0x0cf3

export type GL_UNPACK_SKIP_ROWS = 0x0cf3

/**
 * UNPACK_SKIP_PIXELS = 0x0cf4
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_UNPACK_SKIP_PIXELS = 0x0cf4

export type GL_UNPACK_SKIP_PIXELS = 0x0cf4

/**
 * PACK_ROW_LENGTH = 0x0d02
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_PACK_ROW_LENGTH = 0x0d02

export type GL_PACK_ROW_LENGTH = 0x0d02

/**
 * PACK_SKIP_ROWS = 0x0d03
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_PACK_SKIP_ROWS = 0x0d03

export type GL_PACK_SKIP_ROWS = 0x0d03

/**
 * PACK_SKIP_PIXELS = 0x0d04
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_PACK_SKIP_PIXELS = 0x0d04

export type GL_PACK_SKIP_PIXELS = 0x0d04

/**
 * TEXTURE_BINDING_3D = 0x806a
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_TEXTURE_BINDING_3D = 0x806a

export type GL_TEXTURE_BINDING_3D = 0x806a

/**
 * UNPACK_SKIP_IMAGES = 0x806d
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_UNPACK_SKIP_IMAGES = 0x806d

export type GL_UNPACK_SKIP_IMAGES = 0x806d

/**
 * UNPACK_IMAGE_HEIGHT = 0x806e
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_UNPACK_IMAGE_HEIGHT = 0x806e

export type GL_UNPACK_IMAGE_HEIGHT = 0x806e

/**
 * MAX_3D_TEXTURE_SIZE = 0x8073
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_3D_TEXTURE_SIZE = 0x8073

export type GL_MAX_3D_TEXTURE_SIZE = 0x8073

/**
 * MAX_ELEMENTS_VERTICES = 0x80e8
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_ELEMENTS_VERTICES = 0x80e8

export type GL_MAX_ELEMENTS_VERTICES = 0x80e8

/**
 * MAX_ELEMENTS_INDICES = 0x80e9
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_ELEMENTS_INDICES = 0x80e9

export type GL_MAX_ELEMENTS_INDICES = 0x80e9

/**
 * MAX_TEXTURE_LOD_BIAS = 0x84fd
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_TEXTURE_LOD_BIAS = 0x84fd

export type GL_MAX_TEXTURE_LOD_BIAS = 0x84fd

/**
 * MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49

export type GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49

/**
 * MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a

export type GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a

/**
 * MAX_ARRAY_TEXTURE_LAYERS = 0x88ff
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff

export type GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff

/**
 * MIN_PROGRAM_TEXEL_OFFSET = 0x8904
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904

export type GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904

/**
 * MAX_PROGRAM_TEXEL_OFFSET = 0x8905
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905

export type GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905

/**
 * MAX_VARYING_COMPONENTS = 0x8b4b
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_VARYING_COMPONENTS = 0x8b4b

export type GL_MAX_VARYING_COMPONENTS = 0x8b4b

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b

export type GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b

/**
 * RASTERIZER_DISCARD = 0x8c89
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_RASTERIZER_DISCARD = 0x8c89

export type GL_RASTERIZER_DISCARD = 0x8c89

/**
 * VERTEX_ARRAY_BINDING = 0x85b5
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_VERTEX_ARRAY_BINDING = 0x85b5

export type GL_VERTEX_ARRAY_BINDING = 0x85b5

/**
 * MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122

export type GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122

/**
 * MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125

export type GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125

/**
 * MAX_SERVER_WAIT_TIMEOUT = 0x9111
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111

export type GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111

/**
 * MAX_ELEMENT_INDEX = 0x8d6b
 *
 * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
 * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
 */
export const GL_MAX_ELEMENT_INDEX = 0x8d6b

export type GL_MAX_ELEMENT_INDEX = 0x8d6b

/**
 * RED = 0x1903
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RED = 0x1903

export type GL_RED = 0x1903

/**
 * RGB8 = 0x8051
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB8 = 0x8051

export type GL_RGB8 = 0x8051

/**
 * RGBA8 = 0x8058
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA8 = 0x8058

export type GL_RGBA8 = 0x8058

/**
 * RGB10_A2 = 0x8059
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB10_A2 = 0x8059

export type GL_RGB10_A2 = 0x8059

/**
 * TEXTURE_3D = 0x806f
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_3D = 0x806f

export type GL_TEXTURE_3D = 0x806f

/**
 * TEXTURE_WRAP_R = 0x8072
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_WRAP_R = 0x8072

export type GL_TEXTURE_WRAP_R = 0x8072

/**
 * TEXTURE_MIN_LOD = 0x813a
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_MIN_LOD = 0x813a

export type GL_TEXTURE_MIN_LOD = 0x813a

/**
 * TEXTURE_MAX_LOD = 0x813b
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_MAX_LOD = 0x813b

export type GL_TEXTURE_MAX_LOD = 0x813b

/**
 * TEXTURE_BASE_LEVEL = 0x813c
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_BASE_LEVEL = 0x813c

export type GL_TEXTURE_BASE_LEVEL = 0x813c

/**
 * TEXTURE_MAX_LEVEL = 0x813d
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_MAX_LEVEL = 0x813d

export type GL_TEXTURE_MAX_LEVEL = 0x813d

/**
 * TEXTURE_COMPARE_MODE = 0x884c
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_COMPARE_MODE = 0x884c

export type GL_TEXTURE_COMPARE_MODE = 0x884c

/**
 * TEXTURE_COMPARE_FUNC = 0x884d
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_COMPARE_FUNC = 0x884d

export type GL_TEXTURE_COMPARE_FUNC = 0x884d

/**
 * SRGB = 0x8c40
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_SRGB = 0x8c40

export type GL_SRGB = 0x8c40

/**
 * SRGB8 = 0x8c41
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_SRGB8 = 0x8c41

export type GL_SRGB8 = 0x8c41

/**
 * SRGB8_ALPHA8 = 0x8c43
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_SRGB8_ALPHA8 = 0x8c43

export type GL_SRGB8_ALPHA8 = 0x8c43

/**
 * COMPARE_REF_TO_TEXTURE = 0x884e
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_COMPARE_REF_TO_TEXTURE = 0x884e

export type GL_COMPARE_REF_TO_TEXTURE = 0x884e

/**
 * RGBA32F = 0x8814
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA32F = 0x8814

export type GL_RGBA32F = 0x8814

/**
 * RGB32F = 0x8815
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB32F = 0x8815

export type GL_RGB32F = 0x8815

/**
 * RGBA16F = 0x881a
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA16F = 0x881a

export type GL_RGBA16F = 0x881a

/**
 * RGB16F = 0x881b
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB16F = 0x881b

export type GL_RGB16F = 0x881b

/**
 * TEXTURE_2D_ARRAY = 0x8c1a
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_2D_ARRAY = 0x8c1a

export type GL_TEXTURE_2D_ARRAY = 0x8c1a

/**
 * TEXTURE_BINDING_2D_ARRAY = 0x8c1d
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d

export type GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d

/**
 * R11F_G11F_B10F = 0x8c3a
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R11F_G11F_B10F = 0x8c3a

export type GL_R11F_G11F_B10F = 0x8c3a

/**
 * RGB9_E5 = 0x8c3d
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB9_E5 = 0x8c3d

export type GL_RGB9_E5 = 0x8c3d

/**
 * RGBA32UI = 0x8d70
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA32UI = 0x8d70

export type GL_RGBA32UI = 0x8d70

/**
 * RGB32UI = 0x8d71
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB32UI = 0x8d71

export type GL_RGB32UI = 0x8d71

/**
 * RGBA16UI = 0x8d76
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA16UI = 0x8d76

export type GL_RGBA16UI = 0x8d76

/**
 * RGB16UI = 0x8d77
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB16UI = 0x8d77

export type GL_RGB16UI = 0x8d77

/**
 * RGBA8UI = 0x8d7c
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA8UI = 0x8d7c

export type GL_RGBA8UI = 0x8d7c

/**
 * RGB8UI = 0x8d7d
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB8UI = 0x8d7d

export type GL_RGB8UI = 0x8d7d

/**
 * RGBA32I = 0x8d82
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA32I = 0x8d82

export type GL_RGBA32I = 0x8d82

/**
 * RGB32I = 0x8d83
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB32I = 0x8d83

export type GL_RGB32I = 0x8d83

/**
 * RGBA16I = 0x8d88
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA16I = 0x8d88

export type GL_RGBA16I = 0x8d88

/**
 * RGB16I = 0x8d89
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB16I = 0x8d89

export type GL_RGB16I = 0x8d89

/**
 * RGBA8I = 0x8d8e
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA8I = 0x8d8e

export type GL_RGBA8I = 0x8d8e

/**
 * RGB8I = 0x8d8f
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB8I = 0x8d8f

export type GL_RGB8I = 0x8d8f

/**
 * RED_INTEGER = 0x8d94
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RED_INTEGER = 0x8d94

export type GL_RED_INTEGER = 0x8d94

/**
 * RGB_INTEGER = 0x8d98
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB_INTEGER = 0x8d98

export type GL_RGB_INTEGER = 0x8d98

/**
 * RGBA_INTEGER = 0x8d99
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA_INTEGER = 0x8d99

export type GL_RGBA_INTEGER = 0x8d99

/**
 * R8 = 0x8229
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R8 = 0x8229

export type GL_R8 = 0x8229

/**
 * RG8 = 0x822b
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG8 = 0x822b

export type GL_RG8 = 0x822b

/**
 * R16F = 0x822d
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R16F = 0x822d

export type GL_R16F = 0x822d

/**
 * R32F = 0x822e
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R32F = 0x822e

export type GL_R32F = 0x822e

/**
 * RG16F = 0x822f
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG16F = 0x822f

export type GL_RG16F = 0x822f

/**
 * RG32F = 0x8230
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG32F = 0x8230

export type GL_RG32F = 0x8230

/**
 * R8I = 0x8231
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R8I = 0x8231

export type GL_R8I = 0x8231

/**
 * R8UI = 0x8232
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R8UI = 0x8232

export type GL_R8UI = 0x8232

/**
 * R16I = 0x8233
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R16I = 0x8233

export type GL_R16I = 0x8233

/**
 * R16UI = 0x8234
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R16UI = 0x8234

export type GL_R16UI = 0x8234

/**
 * R32I = 0x8235
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R32I = 0x8235

export type GL_R32I = 0x8235

/**
 * R32UI = 0x8236
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R32UI = 0x8236

export type GL_R32UI = 0x8236

/**
 * RG8I = 0x8237
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG8I = 0x8237

export type GL_RG8I = 0x8237

/**
 * RG8UI = 0x8238
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG8UI = 0x8238

export type GL_RG8UI = 0x8238

/**
 * RG16I = 0x8239
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG16I = 0x8239

export type GL_RG16I = 0x8239

/**
 * RG16UI = 0x823a
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG16UI = 0x823a

export type GL_RG16UI = 0x823a

/**
 * RG32I = 0x823b
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG32I = 0x823b

export type GL_RG32I = 0x823b

/**
 * RG32UI = 0x823c
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG32UI = 0x823c

export type GL_RG32UI = 0x823c

/**
 * R8_SNORM = 0x8f94
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_R8_SNORM = 0x8f94

export type GL_R8_SNORM = 0x8f94

/**
 * RG8_SNORM = 0x8f95
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RG8_SNORM = 0x8f95

export type GL_RG8_SNORM = 0x8f95

/**
 * RGB8_SNORM = 0x8f96
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB8_SNORM = 0x8f96

export type GL_RGB8_SNORM = 0x8f96

/**
 * RGBA8_SNORM = 0x8f97
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGBA8_SNORM = 0x8f97

export type GL_RGBA8_SNORM = 0x8f97

/**
 * RGB10_A2UI = 0x906f
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_RGB10_A2UI = 0x906f

export type GL_RGB10_A2UI = 0x906f

/**
 * TEXTURE_IMMUTABLE_FORMAT = 0x912f
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f

export type GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f

/**
 * TEXTURE_IMMUTABLE_LEVELS = 0x82df
 *
 * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
 * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
 * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
 * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
 */
export const GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df

export type GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df

/**
 * UNSIGNED_INT_2_10_10_10_REV = 0x8368
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368

export type GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368

/**
 * UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b

export type GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b

/**
 * UNSIGNED_INT_5_9_9_9_REV = 0x8c3e
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e

export type GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e

/**
 * FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad

export type GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad

/**
 * UNSIGNED_INT_24_8 = 0x84fa
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_UNSIGNED_INT_24_8 = 0x84fa

export type GL_UNSIGNED_INT_24_8 = 0x84fa

/**
 * HALF_FLOAT = 0x140b
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_HALF_FLOAT = 0x140b

export type GL_HALF_FLOAT = 0x140b

/**
 * RG = 0x8227
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_RG = 0x8227

export type GL_RG = 0x8227

/**
 * RG_INTEGER = 0x8228
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_RG_INTEGER = 0x8228

export type GL_RG_INTEGER = 0x8228

/**
 * INT_2_10_10_10_REV = 0x8d9f
 *
 * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
 */
export const GL_INT_2_10_10_10_REV = 0x8d9f

export type GL_INT_2_10_10_10_REV = 0x8d9f

/**
 * CURRENT_QUERY = 0x8865
 *
 * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
 */
export const GL_CURRENT_QUERY = 0x8865

export type GL_CURRENT_QUERY = 0x8865

/**
 * QUERY_RESULT = 0x8866
 *
 * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
 */
export const GL_QUERY_RESULT = 0x8866

export type GL_QUERY_RESULT = 0x8866

/**
 * QUERY_RESULT_AVAILABLE = 0x8867
 *
 * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
 */
export const GL_QUERY_RESULT_AVAILABLE = 0x8867

export type GL_QUERY_RESULT_AVAILABLE = 0x8867

/**
 * ANY_SAMPLES_PASSED = 0x8c2f
 *
 * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
 */
export const GL_ANY_SAMPLES_PASSED = 0x8c2f

export type GL_ANY_SAMPLES_PASSED = 0x8c2f

/**
 * ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a
 *
 * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
 */
export const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a

export type GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a

/**
 * MAX_DRAW_BUFFERS = 0x8824
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_MAX_DRAW_BUFFERS = 0x8824

export type GL_MAX_DRAW_BUFFERS = 0x8824

/**
 * DRAW_BUFFER0 = 0x8825
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER0 = 0x8825

export type GL_DRAW_BUFFER0 = 0x8825

/**
 * DRAW_BUFFER1 = 0x8826
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER1 = 0x8826

export type GL_DRAW_BUFFER1 = 0x8826

/**
 * DRAW_BUFFER2 = 0x8827
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER2 = 0x8827

export type GL_DRAW_BUFFER2 = 0x8827

/**
 * DRAW_BUFFER3 = 0x8828
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER3 = 0x8828

export type GL_DRAW_BUFFER3 = 0x8828

/**
 * DRAW_BUFFER4 = 0x8829
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER4 = 0x8829

export type GL_DRAW_BUFFER4 = 0x8829

/**
 * DRAW_BUFFER5 = 0x882a
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER5 = 0x882a

export type GL_DRAW_BUFFER5 = 0x882a

/**
 * DRAW_BUFFER6 = 0x882b
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER6 = 0x882b

export type GL_DRAW_BUFFER6 = 0x882b

/**
 * DRAW_BUFFER7 = 0x882c
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER7 = 0x882c

export type GL_DRAW_BUFFER7 = 0x882c

/**
 * DRAW_BUFFER8 = 0x882d
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER8 = 0x882d

export type GL_DRAW_BUFFER8 = 0x882d

/**
 * DRAW_BUFFER9 = 0x882e
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER9 = 0x882e

export type GL_DRAW_BUFFER9 = 0x882e

/**
 * DRAW_BUFFER10 = 0x882f
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER10 = 0x882f

export type GL_DRAW_BUFFER10 = 0x882f

/**
 * DRAW_BUFFER11 = 0x8830
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER11 = 0x8830

export type GL_DRAW_BUFFER11 = 0x8830

/**
 * DRAW_BUFFER12 = 0x8831
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER12 = 0x8831

export type GL_DRAW_BUFFER12 = 0x8831

/**
 * DRAW_BUFFER13 = 0x8832
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER13 = 0x8832

export type GL_DRAW_BUFFER13 = 0x8832

/**
 * DRAW_BUFFER14 = 0x8833
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER14 = 0x8833

export type GL_DRAW_BUFFER14 = 0x8833

/**
 * DRAW_BUFFER15 = 0x8834
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_DRAW_BUFFER15 = 0x8834

export type GL_DRAW_BUFFER15 = 0x8834

/**
 * MAX_COLOR_ATTACHMENTS = 0x8cdf
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_MAX_COLOR_ATTACHMENTS = 0x8cdf

export type GL_MAX_COLOR_ATTACHMENTS = 0x8cdf

/**
 * COLOR_ATTACHMENT1 = 0x8ce1
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT1 = 0x8ce1

export type GL_COLOR_ATTACHMENT1 = 0x8ce1

/**
 * COLOR_ATTACHMENT2 = 0x8ce2
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT2 = 0x8ce2

export type GL_COLOR_ATTACHMENT2 = 0x8ce2

/**
 * COLOR_ATTACHMENT3 = 0x8ce3
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT3 = 0x8ce3

export type GL_COLOR_ATTACHMENT3 = 0x8ce3

/**
 * COLOR_ATTACHMENT4 = 0x8ce4
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT4 = 0x8ce4

export type GL_COLOR_ATTACHMENT4 = 0x8ce4

/**
 * COLOR_ATTACHMENT5 = 0x8ce5
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT5 = 0x8ce5

export type GL_COLOR_ATTACHMENT5 = 0x8ce5

/**
 * COLOR_ATTACHMENT6 = 0x8ce6
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT6 = 0x8ce6

export type GL_COLOR_ATTACHMENT6 = 0x8ce6

/**
 * COLOR_ATTACHMENT7 = 0x8ce7
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT7 = 0x8ce7

export type GL_COLOR_ATTACHMENT7 = 0x8ce7

/**
 * COLOR_ATTACHMENT8 = 0x8ce8
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT8 = 0x8ce8

export type GL_COLOR_ATTACHMENT8 = 0x8ce8

/**
 * COLOR_ATTACHMENT9 = 0x8ce9
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT9 = 0x8ce9

export type GL_COLOR_ATTACHMENT9 = 0x8ce9

/**
 * COLOR_ATTACHMENT10 = 0x8cea
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT10 = 0x8cea

export type GL_COLOR_ATTACHMENT10 = 0x8cea

/**
 * COLOR_ATTACHMENT11 = 0x8ceb
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT11 = 0x8ceb

export type GL_COLOR_ATTACHMENT11 = 0x8ceb

/**
 * COLOR_ATTACHMENT12 = 0x8cec
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT12 = 0x8cec

export type GL_COLOR_ATTACHMENT12 = 0x8cec

/**
 * COLOR_ATTACHMENT13 = 0x8ced
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT13 = 0x8ced

export type GL_COLOR_ATTACHMENT13 = 0x8ced

/**
 * COLOR_ATTACHMENT14 = 0x8cee
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT14 = 0x8cee

export type GL_COLOR_ATTACHMENT14 = 0x8cee

/**
 * COLOR_ATTACHMENT15 = 0x8cef
 *
 * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
 */
export const GL_COLOR_ATTACHMENT15 = 0x8cef

export type GL_COLOR_ATTACHMENT15 = 0x8cef

/**
 * SAMPLER_3D = 0x8b5f
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_SAMPLER_3D = 0x8b5f

export type GL_SAMPLER_3D = 0x8b5f

/**
 * SAMPLER_2D_SHADOW = 0x8b62
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_SAMPLER_2D_SHADOW = 0x8b62

export type GL_SAMPLER_2D_SHADOW = 0x8b62

/**
 * SAMPLER_2D_ARRAY = 0x8dc1
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_SAMPLER_2D_ARRAY = 0x8dc1

export type GL_SAMPLER_2D_ARRAY = 0x8dc1

/**
 * SAMPLER_2D_ARRAY_SHADOW = 0x8dc4
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4

export type GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4

/**
 * SAMPLER_CUBE_SHADOW = 0x8dc5
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_SAMPLER_CUBE_SHADOW = 0x8dc5

export type GL_SAMPLER_CUBE_SHADOW = 0x8dc5

/**
 * INT_SAMPLER_2D = 0x8dca
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_INT_SAMPLER_2D = 0x8dca

export type GL_INT_SAMPLER_2D = 0x8dca

/**
 * INT_SAMPLER_3D = 0x8dcb
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_INT_SAMPLER_3D = 0x8dcb

export type GL_INT_SAMPLER_3D = 0x8dcb

/**
 * INT_SAMPLER_CUBE = 0x8dcc
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_INT_SAMPLER_CUBE = 0x8dcc

export type GL_INT_SAMPLER_CUBE = 0x8dcc

/**
 * INT_SAMPLER_2D_ARRAY = 0x8dcf
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_INT_SAMPLER_2D_ARRAY = 0x8dcf

export type GL_INT_SAMPLER_2D_ARRAY = 0x8dcf

/**
 * UNSIGNED_INT_SAMPLER_2D = 0x8dd2
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2

export type GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2

/**
 * UNSIGNED_INT_SAMPLER_3D = 0x8dd3
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3

export type GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3

/**
 * UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4

export type GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4

/**
 * UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7

export type GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7

/**
 * MAX_SAMPLES = 0x8d57
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_MAX_SAMPLES = 0x8d57

export type GL_MAX_SAMPLES = 0x8d57

/**
 * SAMPLER_BINDING = 0x8919
 *
 * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
 */
export const GL_SAMPLER_BINDING = 0x8919

export type GL_SAMPLER_BINDING = 0x8919

/**
 * PIXEL_PACK_BUFFER = 0x88eb
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_PIXEL_PACK_BUFFER = 0x88eb

export type GL_PIXEL_PACK_BUFFER = 0x88eb

/**
 * PIXEL_UNPACK_BUFFER = 0x88ec
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_PIXEL_UNPACK_BUFFER = 0x88ec

export type GL_PIXEL_UNPACK_BUFFER = 0x88ec

/**
 * PIXEL_PACK_BUFFER_BINDING = 0x88ed
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed

export type GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed

/**
 * PIXEL_UNPACK_BUFFER_BINDING = 0x88ef
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef

export type GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef

/**
 * COPY_READ_BUFFER = 0x8f36
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_COPY_READ_BUFFER = 0x8f36

export type GL_COPY_READ_BUFFER = 0x8f36

/**
 * COPY_WRITE_BUFFER = 0x8f37
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_COPY_WRITE_BUFFER = 0x8f37

export type GL_COPY_WRITE_BUFFER = 0x8f37

/**
 * COPY_READ_BUFFER_BINDING = 0x8f36
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_COPY_READ_BUFFER_BINDING = 0x8f36

export type GL_COPY_READ_BUFFER_BINDING = 0x8f36

/**
 * COPY_WRITE_BUFFER_BINDING = 0x8f37
 *
 * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
 */
export const GL_COPY_WRITE_BUFFER_BINDING = 0x8f37

export type GL_COPY_WRITE_BUFFER_BINDING = 0x8f37

/**
 * FLOAT_MAT2x3 = 0x8b65
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_FLOAT_MAT2x3 = 0x8b65

export type GL_FLOAT_MAT2x3 = 0x8b65

/**
 * FLOAT_MAT2x4 = 0x8b66
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_FLOAT_MAT2x4 = 0x8b66

export type GL_FLOAT_MAT2x4 = 0x8b66

/**
 * FLOAT_MAT3x2 = 0x8b67
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_FLOAT_MAT3x2 = 0x8b67

export type GL_FLOAT_MAT3x2 = 0x8b67

/**
 * FLOAT_MAT3x4 = 0x8b68
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_FLOAT_MAT3x4 = 0x8b68

export type GL_FLOAT_MAT3x4 = 0x8b68

/**
 * FLOAT_MAT4x2 = 0x8b69
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_FLOAT_MAT4x2 = 0x8b69

export type GL_FLOAT_MAT4x2 = 0x8b69

/**
 * FLOAT_MAT4x3 = 0x8b6a
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_FLOAT_MAT4x3 = 0x8b6a

export type GL_FLOAT_MAT4x3 = 0x8b6a

/**
 * UNSIGNED_INT_VEC2 = 0x8dc6
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_UNSIGNED_INT_VEC2 = 0x8dc6

export type GL_UNSIGNED_INT_VEC2 = 0x8dc6

/**
 * UNSIGNED_INT_VEC3 = 0x8dc7
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_UNSIGNED_INT_VEC3 = 0x8dc7

export type GL_UNSIGNED_INT_VEC3 = 0x8dc7

/**
 * UNSIGNED_INT_VEC4 = 0x8dc8
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_UNSIGNED_INT_VEC4 = 0x8dc8

export type GL_UNSIGNED_INT_VEC4 = 0x8dc8

/**
 * UNSIGNED_NORMALIZED = 0x8c17
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_UNSIGNED_NORMALIZED = 0x8c17

export type GL_UNSIGNED_NORMALIZED = 0x8c17

/**
 * SIGNED_NORMALIZED = 0x8f9c
 *
 * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
 */
export const GL_SIGNED_NORMALIZED = 0x8f9c

export type GL_SIGNED_NORMALIZED = 0x8f9c

/**
 * VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes_2)
 */
export const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd

export type GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe
 *
 * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes_2)
 */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe

export type GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe

/**
 * TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f

export type GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80

export type GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80

/**
 * TRANSFORM_FEEDBACK_VARYINGS = 0x8c83
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83

export type GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83

/**
 * TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84

export type GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84

/**
 * TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85

export type GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85

/**
 * TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88

export type GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88

/**
 * MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a

export type GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b

export type GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b

/**
 * INTERLEAVED_ATTRIBS = 0x8c8c
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_INTERLEAVED_ATTRIBS = 0x8c8c

export type GL_INTERLEAVED_ATTRIBS = 0x8c8c

/**
 * SEPARATE_ATTRIBS = 0x8c8d
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_SEPARATE_ATTRIBS = 0x8c8d

export type GL_SEPARATE_ATTRIBS = 0x8c8d

/**
 * TRANSFORM_FEEDBACK_BUFFER = 0x8c8e
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e

export type GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e

/**
 * TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f

export type GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f

/**
 * TRANSFORM_FEEDBACK = 0x8e22
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK = 0x8e22

export type GL_TRANSFORM_FEEDBACK = 0x8e22

/**
 * TRANSFORM_FEEDBACK_PAUSED = 0x8e23
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23

export type GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23

/**
 * TRANSFORM_FEEDBACK_ACTIVE = 0x8e24
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24

export type GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24

/**
 * TRANSFORM_FEEDBACK_BINDING = 0x8e25
 *
 * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
 */
export const GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25

export type GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210

export type GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211

export type GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211

/**
 * FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212

export type GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212

/**
 * FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213

export type GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213

/**
 * FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214

export type GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214

/**
 * FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215

export type GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215

/**
 * FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216

export type GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216

/**
 * FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217

export type GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217

/**
 * FRAMEBUFFER_DEFAULT = 0x8218
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_DEFAULT = 0x8218

export type GL_FRAMEBUFFER_DEFAULT = 0x8218

/**
 * DEPTH24_STENCIL8 = 0x88f0
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_DEPTH24_STENCIL8 = 0x88f0

export type GL_DEPTH24_STENCIL8 = 0x88f0

/**
 * DRAW_FRAMEBUFFER_BINDING = 0x8ca6
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6

export type GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6

/**
 * READ_FRAMEBUFFER = 0x8ca8
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_READ_FRAMEBUFFER = 0x8ca8

export type GL_READ_FRAMEBUFFER = 0x8ca8

/**
 * DRAW_FRAMEBUFFER = 0x8ca9
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_DRAW_FRAMEBUFFER = 0x8ca9

export type GL_DRAW_FRAMEBUFFER = 0x8ca9

/**
 * READ_FRAMEBUFFER_BINDING = 0x8caa
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_READ_FRAMEBUFFER_BINDING = 0x8caa

export type GL_READ_FRAMEBUFFER_BINDING = 0x8caa

/**
 * RENDERBUFFER_SAMPLES = 0x8cab
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_RENDERBUFFER_SAMPLES = 0x8cab

export type GL_RENDERBUFFER_SAMPLES = 0x8cab

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4

export type GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4

/**
 * FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56
 *
 * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
 */
export const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56

export type GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56

/**
 * UNIFORM_BUFFER = 0x8a11
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BUFFER = 0x8a11

export type GL_UNIFORM_BUFFER = 0x8a11

/**
 * UNIFORM_BUFFER_BINDING = 0x8a28
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BUFFER_BINDING = 0x8a28

export type GL_UNIFORM_BUFFER_BINDING = 0x8a28

/**
 * UNIFORM_BUFFER_START = 0x8a29
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BUFFER_START = 0x8a29

export type GL_UNIFORM_BUFFER_START = 0x8a29

/**
 * UNIFORM_BUFFER_SIZE = 0x8a2a
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BUFFER_SIZE = 0x8a2a

export type GL_UNIFORM_BUFFER_SIZE = 0x8a2a

/**
 * MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b

export type GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b

/**
 * MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d

export type GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d

/**
 * MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e

export type GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e

/**
 * MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f

export type GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f

/**
 * MAX_UNIFORM_BLOCK_SIZE = 0x8a30
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30

export type GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30

/**
 * MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31

export type GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31

/**
 * MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33

export type GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33

/**
 * UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34

export type GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34

/**
 * ACTIVE_UNIFORM_BLOCKS = 0x8a36
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36

export type GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36

/**
 * UNIFORM_TYPE = 0x8a37
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_TYPE = 0x8a37

export type GL_UNIFORM_TYPE = 0x8a37

/**
 * UNIFORM_SIZE = 0x8a38
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_SIZE = 0x8a38

export type GL_UNIFORM_SIZE = 0x8a38

/**
 * UNIFORM_BLOCK_INDEX = 0x8a3a
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_INDEX = 0x8a3a

export type GL_UNIFORM_BLOCK_INDEX = 0x8a3a

/**
 * UNIFORM_OFFSET = 0x8a3b
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_OFFSET = 0x8a3b

export type GL_UNIFORM_OFFSET = 0x8a3b

/**
 * UNIFORM_ARRAY_STRIDE = 0x8a3c
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_ARRAY_STRIDE = 0x8a3c

export type GL_UNIFORM_ARRAY_STRIDE = 0x8a3c

/**
 * UNIFORM_MATRIX_STRIDE = 0x8a3d
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_MATRIX_STRIDE = 0x8a3d

export type GL_UNIFORM_MATRIX_STRIDE = 0x8a3d

/**
 * UNIFORM_IS_ROW_MAJOR = 0x8a3e
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e

export type GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e

/**
 * UNIFORM_BLOCK_BINDING = 0x8a3f
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_BINDING = 0x8a3f

export type GL_UNIFORM_BLOCK_BINDING = 0x8a3f

/**
 * UNIFORM_BLOCK_DATA_SIZE = 0x8a40
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40

export type GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42

export type GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43

export type GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43

/**
 * UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44

export type GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44

/**
 * UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46
 *
 * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
 */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46

export type GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46

/**
 * OBJECT_TYPE = 0x9112
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_OBJECT_TYPE = 0x9112

export type GL_OBJECT_TYPE = 0x9112

/**
 * SYNC_CONDITION = 0x9113
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SYNC_CONDITION = 0x9113

export type GL_SYNC_CONDITION = 0x9113

/**
 * SYNC_STATUS = 0x9114
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SYNC_STATUS = 0x9114

export type GL_SYNC_STATUS = 0x9114

/**
 * SYNC_FLAGS = 0x9115
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SYNC_FLAGS = 0x9115

export type GL_SYNC_FLAGS = 0x9115

/**
 * SYNC_FENCE = 0x9116
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SYNC_FENCE = 0x9116

export type GL_SYNC_FENCE = 0x9116

/**
 * SYNC_GPU_COMMANDS_COMPLETE = 0x9117
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117

export type GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117

/**
 * UNSIGNALED = 0x9118
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_UNSIGNALED = 0x9118

export type GL_UNSIGNALED = 0x9118

/**
 * SIGNALED = 0x9119
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SIGNALED = 0x9119

export type GL_SIGNALED = 0x9119

/**
 * ALREADY_SIGNALED = 0x911a
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_ALREADY_SIGNALED = 0x911a

export type GL_ALREADY_SIGNALED = 0x911a

/**
 * TIMEOUT_EXPIRED = 0x911b
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_TIMEOUT_EXPIRED = 0x911b

export type GL_TIMEOUT_EXPIRED = 0x911b

/**
 * CONDITION_SATISFIED = 0x911c
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_CONDITION_SATISFIED = 0x911c

export type GL_CONDITION_SATISFIED = 0x911c

/**
 * WAIT_FAILED = 0x911d
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_WAIT_FAILED = 0x911d

export type GL_WAIT_FAILED = 0x911d

/**
 * SYNC_FLUSH_COMMANDS_BIT = 0x00000001
 *
 * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
 */
export const GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001

export type GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001

/**
 * COLOR = 0x1800
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_COLOR = 0x1800

export type GL_COLOR = 0x1800

/**
 * DEPTH = 0x1801
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_DEPTH = 0x1801

export type GL_DEPTH = 0x1801

/**
 * STENCIL = 0x1802
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_STENCIL = 0x1802

export type GL_STENCIL = 0x1802

/**
 * MIN = 0x8007
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_MIN = 0x8007

export type GL_MIN = 0x8007

/**
 * MAX = 0x8008
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_MAX = 0x8008

export type GL_MAX = 0x8008

/**
 * DEPTH_COMPONENT24 = 0x81a6
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_DEPTH_COMPONENT24 = 0x81a6

export type GL_DEPTH_COMPONENT24 = 0x81a6

/**
 * STREAM_READ = 0x88e1
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_STREAM_READ = 0x88e1

export type GL_STREAM_READ = 0x88e1

/**
 * STREAM_COPY = 0x88e2
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_STREAM_COPY = 0x88e2

export type GL_STREAM_COPY = 0x88e2

/**
 * STATIC_READ = 0x88e5
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_STATIC_READ = 0x88e5

export type GL_STATIC_READ = 0x88e5

/**
 * STATIC_COPY = 0x88e6
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_STATIC_COPY = 0x88e6

export type GL_STATIC_COPY = 0x88e6

/**
 * DYNAMIC_READ = 0x88e9
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_DYNAMIC_READ = 0x88e9

export type GL_DYNAMIC_READ = 0x88e9

/**
 * DYNAMIC_COPY = 0x88ea
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_DYNAMIC_COPY = 0x88ea

export type GL_DYNAMIC_COPY = 0x88ea

/**
 * DEPTH_COMPONENT32F = 0x8cac
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_DEPTH_COMPONENT32F = 0x8cac

export type GL_DEPTH_COMPONENT32F = 0x8cac

/**
 * DEPTH32F_STENCIL8 = 0x8cad
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_DEPTH32F_STENCIL8 = 0x8cad

export type GL_DEPTH32F_STENCIL8 = 0x8cad

/**
 * INVALID_INDEX = 0xffffffff
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_INVALID_INDEX = 0xffffffff

export type GL_INVALID_INDEX = 0xffffffff

/**
 * TIMEOUT_IGNORED = -1
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_TIMEOUT_IGNORED = -1

export type GL_TIMEOUT_IGNORED = -1

/**
 * MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247
 *
 * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
 */
export const GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247

export type GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe
 *
 * Describes the frequency divisor used for instanced rendering.
 *
 * [ANGLE_instanced_arrays](https://developer.mozilla.org//en-US/docs/Web/API/ANGLE_instanced_arrays)
 */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe

export type GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe

/**
 * UNMASKED_VENDOR_WEBGL = 0x9245
 *
 * Passed to getParameter to get the vendor string of the graphics driver.
 *
 * [WEBGL_debug_renderer_info](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_debug_renderer_info)
 */
export const GL_UNMASKED_VENDOR_WEBGL = 0x9245

export type GL_UNMASKED_VENDOR_WEBGL = 0x9245

/**
 * UNMASKED_RENDERER_WEBGL = 0x9246
 *
 * Passed to getParameter to get the renderer string of the graphics driver.
 *
 * [WEBGL_debug_renderer_info](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_debug_renderer_info)
 */
export const GL_UNMASKED_RENDERER_WEBGL = 0x9246

export type GL_UNMASKED_RENDERER_WEBGL = 0x9246

/**
 * MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff
 *
 * Returns the maximum available anisotropy.
 *
 * [EXT_texture_filter_anisotropic](https://developer.mozilla.org//en-US/docs/Web/API/EXT_texture_filter_anisotropic)
 */
export const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff

export type GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff

/**
 * TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe
 *
 * Passed to texParameter to set the desired maximum anisotropy for a texture.
 *
 * [EXT_texture_filter_anisotropic](https://developer.mozilla.org//en-US/docs/Web/API/EXT_texture_filter_anisotropic)
 */
export const GL_TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe

export type GL_TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe

/**
 * COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0
 *
 * A DXT1-compressed image in an RGB image format.
 *
 * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
export const GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0

export type GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0

/**
 * COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1
 *
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 *
 * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1

export type GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1

/**
 * COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2
 *
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 *
 * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2

export type GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2

/**
 * COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3
 *
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.
 *
 * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3

export type GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3

/**
 * COMPRESSED_R11_EAC = 0x9270
 *
 * One-channel (red) unsigned format compression.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_R11_EAC = 0x9270

export type GL_COMPRESSED_R11_EAC = 0x9270

/**
 * COMPRESSED_SIGNED_R11_EAC = 0x9271
 *
 * One-channel (red) signed format compression.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_SIGNED_R11_EAC = 0x9271

export type GL_COMPRESSED_SIGNED_R11_EAC = 0x9271

/**
 * COMPRESSED_RG11_EAC = 0x9272
 *
 * Two-channel (red and green) unsigned format compression.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_RG11_EAC = 0x9272

export type GL_COMPRESSED_RG11_EAC = 0x9272

/**
 * COMPRESSED_SIGNED_RG11_EAC = 0x9273
 *
 * Two-channel (red and green) signed format compression.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_SIGNED_RG11_EAC = 0x9273

export type GL_COMPRESSED_SIGNED_RG11_EAC = 0x9273

/**
 * COMPRESSED_RGB8_ETC2 = 0x9274
 *
 * Compresses RBG8 data with no alpha channel.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_RGB8_ETC2 = 0x9274

export type GL_COMPRESSED_RGB8_ETC2 = 0x9274

/**
 * COMPRESSED_RGBA8_ETC2_EAC = 0x9275
 *
 * Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9275

export type GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9275

/**
 * COMPRESSED_SRGB8_ETC2 = 0x9276
 *
 * Compresses sRBG8 data with no alpha channel.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_SRGB8_ETC2 = 0x9276

export type GL_COMPRESSED_SRGB8_ETC2 = 0x9276

/**
 * COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277
 *
 * Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277

export type GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277

/**
 * COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278
 *
 * Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278

export type GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278

/**
 * COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279
 *
 * Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 *
 * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
 */
export const GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279

export type GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279

/**
 * COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00
 *
 * RGB compression in 4-bit mode. One block for each 4×4 pixels.
 *
 * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
 */
export const GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00

export type GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00

/**
 * COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02
 *
 * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 *
 * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
 */
export const GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02

export type GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02

/**
 * COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01
 *
 * RGB compression in 2-bit mode. One block for each 8×4 pixels.
 *
 * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
 */
export const GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01

export type GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01

/**
 * COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03
 *
 * RGBA compression in 2-bit mode. One block for each 8×4 pixe
 *
 * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
 */
export const GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03

export type GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03

/**
 * COMPRESSED_RGB_ETC1_WEBGL = 0x8d64
 *
 * Compresses 24-bit RGB data with no alpha channel.
 *
 * [WEBGL_compressed_texture_etc1](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc1)
 */
export const GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8d64

export type GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8d64

/**
 * UNSIGNED_INT_24_8_WEBGL = 0x84fa
 *
 * Unsigned integer type for 24-bit depth texture data.
 *
 * [WEBGL_depth_texture](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_depth_texture)
 */
export const GL_UNSIGNED_INT_24_8_WEBGL = 0x84fa

export type GL_UNSIGNED_INT_24_8_WEBGL = 0x84fa

/**
 * HALF_FLOAT_OES = 0x8d61
 *
 * Half floating-point type (16-bit).
 *
 * [OES_texture_half_float](https://developer.mozilla.org//en-US/docs/Web/API/OES_texture_half_float)
 */
export const GL_HALF_FLOAT_OES = 0x8d61

export type GL_HALF_FLOAT_OES = 0x8d61

/**
 * RGBA32F_EXT = 0x8814
 *
 * RGBA 32-bit floating-point color-renderable format.
 *
 * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
 */
export const GL_RGBA32F_EXT = 0x8814

export type GL_RGBA32F_EXT = 0x8814

/**
 * RGB32F_EXT = 0x8815
 *
 * RGB 32-bit floating-point color-renderable format.
 *
 * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
 */
export const GL_RGB32F_EXT = 0x8815

export type GL_RGB32F_EXT = 0x8815

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211
 *
 * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211

export type GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211

/**
 * UNSIGNED_NORMALIZED_EXT = 0x8c17
 *
 * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
 */
export const GL_UNSIGNED_NORMALIZED_EXT = 0x8c17

export type GL_UNSIGNED_NORMALIZED_EXT = 0x8c17

/**
 * MIN_EXT = 0x8007
 *
 * Produces the minimum color components of the source and destination colors.
 *
 * [EXT_blend_minmax](https://developer.mozilla.org//en-US/docs/Web/API/EXT_blend_minmax)
 */
export const GL_MIN_EXT = 0x8007

export type GL_MIN_EXT = 0x8007

/**
 * MAX_EXT = 0x8008
 *
 * Produces the maximum color components of the source and destination colors.
 *
 * [EXT_blend_minmax](https://developer.mozilla.org//en-US/docs/Web/API/EXT_blend_minmax)
 */
export const GL_MAX_EXT = 0x8008

export type GL_MAX_EXT = 0x8008

/**
 * SRGB_EXT = 0x8c40
 *
 * Unsized sRGB format that leaves the precision up to the driver.
 *
 * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
 */
export const GL_SRGB_EXT = 0x8c40

export type GL_SRGB_EXT = 0x8c40

/**
 * SRGB_ALPHA_EXT = 0x8c42
 *
 * Unsized sRGB format with unsized alpha component.
 *
 * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
 */
export const GL_SRGB_ALPHA_EXT = 0x8c42

export type GL_SRGB_ALPHA_EXT = 0x8c42

/**
 * SRGB8_ALPHA8_EXT = 0x8c43
 *
 * Sized (8-bit) sRGB and alpha formats.
 *
 * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
 */
export const GL_SRGB8_ALPHA8_EXT = 0x8c43

export type GL_SRGB8_ALPHA8_EXT = 0x8c43

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210
 *
 * Returns the framebuffer color encoding.
 *
 * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210

export type GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b
 *
 * Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.
 *
 * [OES_standard_derivatives](https://developer.mozilla.org//en-US/docs/Web/API/OES_standard_derivatives)
 */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b

export type GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b

/**
 * COLOR_ATTACHMENT0_WEBGL = 0x8ce0
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT0_WEBGL = 0x8ce0

export type GL_COLOR_ATTACHMENT0_WEBGL = 0x8ce0

/**
 * COLOR_ATTACHMENT1_WEBGL = 0x8ce1
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT1_WEBGL = 0x8ce1

export type GL_COLOR_ATTACHMENT1_WEBGL = 0x8ce1

/**
 * COLOR_ATTACHMENT2_WEBGL = 0x8ce2
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT2_WEBGL = 0x8ce2

export type GL_COLOR_ATTACHMENT2_WEBGL = 0x8ce2

/**
 * COLOR_ATTACHMENT3_WEBGL = 0x8ce3
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT3_WEBGL = 0x8ce3

export type GL_COLOR_ATTACHMENT3_WEBGL = 0x8ce3

/**
 * COLOR_ATTACHMENT4_WEBGL = 0x8ce4
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT4_WEBGL = 0x8ce4

export type GL_COLOR_ATTACHMENT4_WEBGL = 0x8ce4

/**
 * COLOR_ATTACHMENT5_WEBGL = 0x8ce5
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT5_WEBGL = 0x8ce5

export type GL_COLOR_ATTACHMENT5_WEBGL = 0x8ce5

/**
 * COLOR_ATTACHMENT6_WEBGL = 0x8ce6
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT6_WEBGL = 0x8ce6

export type GL_COLOR_ATTACHMENT6_WEBGL = 0x8ce6

/**
 * COLOR_ATTACHMENT7_WEBGL = 0x8ce7
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT7_WEBGL = 0x8ce7

export type GL_COLOR_ATTACHMENT7_WEBGL = 0x8ce7

/**
 * COLOR_ATTACHMENT8_WEBGL = 0x8ce8
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT8_WEBGL = 0x8ce8

export type GL_COLOR_ATTACHMENT8_WEBGL = 0x8ce8

/**
 * COLOR_ATTACHMENT9_WEBGL = 0x8ce9
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT9_WEBGL = 0x8ce9

export type GL_COLOR_ATTACHMENT9_WEBGL = 0x8ce9

/**
 * COLOR_ATTACHMENT10_WEBGL = 0x8cea
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT10_WEBGL = 0x8cea

export type GL_COLOR_ATTACHMENT10_WEBGL = 0x8cea

/**
 * COLOR_ATTACHMENT11_WEBGL = 0x8ceb
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT11_WEBGL = 0x8ceb

export type GL_COLOR_ATTACHMENT11_WEBGL = 0x8ceb

/**
 * COLOR_ATTACHMENT12_WEBGL = 0x8cec
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT12_WEBGL = 0x8cec

export type GL_COLOR_ATTACHMENT12_WEBGL = 0x8cec

/**
 * COLOR_ATTACHMENT13_WEBGL = 0x8ced
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT13_WEBGL = 0x8ced

export type GL_COLOR_ATTACHMENT13_WEBGL = 0x8ced

/**
 * COLOR_ATTACHMENT14_WEBGL = 0x8cee
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT14_WEBGL = 0x8cee

export type GL_COLOR_ATTACHMENT14_WEBGL = 0x8cee

/**
 * COLOR_ATTACHMENT15_WEBGL = 0x8cef
 *
 * Framebuffer color attachment point
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_COLOR_ATTACHMENT15_WEBGL = 0x8cef

export type GL_COLOR_ATTACHMENT15_WEBGL = 0x8cef

/**
 * DRAW_BUFFER0_WEBGL = 0x8825
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER0_WEBGL = 0x8825

export type GL_DRAW_BUFFER0_WEBGL = 0x8825

/**
 * DRAW_BUFFER1_WEBGL = 0x8826
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER1_WEBGL = 0x8826

export type GL_DRAW_BUFFER1_WEBGL = 0x8826

/**
 * DRAW_BUFFER2_WEBGL = 0x8827
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER2_WEBGL = 0x8827

export type GL_DRAW_BUFFER2_WEBGL = 0x8827

/**
 * DRAW_BUFFER3_WEBGL = 0x8828
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER3_WEBGL = 0x8828

export type GL_DRAW_BUFFER3_WEBGL = 0x8828

/**
 * DRAW_BUFFER4_WEBGL = 0x8829
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER4_WEBGL = 0x8829

export type GL_DRAW_BUFFER4_WEBGL = 0x8829

/**
 * DRAW_BUFFER5_WEBGL = 0x882a
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER5_WEBGL = 0x882a

export type GL_DRAW_BUFFER5_WEBGL = 0x882a

/**
 * DRAW_BUFFER6_WEBGL = 0x882b
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER6_WEBGL = 0x882b

export type GL_DRAW_BUFFER6_WEBGL = 0x882b

/**
 * DRAW_BUFFER7_WEBGL = 0x882c
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER7_WEBGL = 0x882c

export type GL_DRAW_BUFFER7_WEBGL = 0x882c

/**
 * DRAW_BUFFER8_WEBGL = 0x882d
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER8_WEBGL = 0x882d

export type GL_DRAW_BUFFER8_WEBGL = 0x882d

/**
 * DRAW_BUFFER9_WEBGL = 0x882e
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER9_WEBGL = 0x882e

export type GL_DRAW_BUFFER9_WEBGL = 0x882e

/**
 * DRAW_BUFFER10_WEBGL = 0x882f
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER10_WEBGL = 0x882f

export type GL_DRAW_BUFFER10_WEBGL = 0x882f

/**
 * DRAW_BUFFER11_WEBGL = 0x8830
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER11_WEBGL = 0x8830

export type GL_DRAW_BUFFER11_WEBGL = 0x8830

/**
 * DRAW_BUFFER12_WEBGL = 0x8831
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER12_WEBGL = 0x8831

export type GL_DRAW_BUFFER12_WEBGL = 0x8831

/**
 * DRAW_BUFFER13_WEBGL = 0x8832
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER13_WEBGL = 0x8832

export type GL_DRAW_BUFFER13_WEBGL = 0x8832

/**
 * DRAW_BUFFER14_WEBGL = 0x8833
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER14_WEBGL = 0x8833

export type GL_DRAW_BUFFER14_WEBGL = 0x8833

/**
 * DRAW_BUFFER15_WEBGL = 0x8834
 *
 * Draw buffer
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_DRAW_BUFFER15_WEBGL = 0x8834

export type GL_DRAW_BUFFER15_WEBGL = 0x8834

/**
 * MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf
 *
 * Maximum number of framebuffer color attachment points
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf

export type GL_MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf

/**
 * MAX_DRAW_BUFFERS_WEBGL = 0x8824
 *
 * Maximum number of draw buffers
 *
 * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
 */
export const GL_MAX_DRAW_BUFFERS_WEBGL = 0x8824

export type GL_MAX_DRAW_BUFFERS_WEBGL = 0x8824

/**
 * VERTEX_ARRAY_BINDING_OES = 0x85b5
 *
 * The bound vertex array object (VAO).
 *
 * [OES_vertex_array_object](https://developer.mozilla.org//en-US/docs/Web/API/OES_vertex_array_object)
 */
export const GL_VERTEX_ARRAY_BINDING_OES = 0x85b5

export type GL_VERTEX_ARRAY_BINDING_OES = 0x85b5

/**
 * QUERY_COUNTER_BITS_EXT = 0x8864
 *
 * The number of bits used to hold the query result for the given target.
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_QUERY_COUNTER_BITS_EXT = 0x8864

export type GL_QUERY_COUNTER_BITS_EXT = 0x8864

/**
 * CURRENT_QUERY_EXT = 0x8865
 *
 * The currently active query.
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_CURRENT_QUERY_EXT = 0x8865

export type GL_CURRENT_QUERY_EXT = 0x8865

/**
 * QUERY_RESULT_EXT = 0x8866
 *
 * The query result.
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_QUERY_RESULT_EXT = 0x8866

export type GL_QUERY_RESULT_EXT = 0x8866

/**
 * QUERY_RESULT_AVAILABLE_EXT = 0x8867
 *
 * A Boolean indicating whether or not a query result is available.
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_QUERY_RESULT_AVAILABLE_EXT = 0x8867

export type GL_QUERY_RESULT_AVAILABLE_EXT = 0x8867

/**
 * TIME_ELAPSED_EXT = 0x88bf
 *
 * Elapsed time (in nanoseconds).
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_TIME_ELAPSED_EXT = 0x88bf

export type GL_TIME_ELAPSED_EXT = 0x88bf

/**
 * TIMESTAMP_EXT = 0x8e28
 *
 * The current time.
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_TIMESTAMP_EXT = 0x8e28

export type GL_TIMESTAMP_EXT = 0x8e28

/**
 * GPU_DISJOINT_EXT = 0x8fbb
 *
 * A Boolean indicating whether or not the GPU performed any disjoint operation.
 *
 * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
 */
export const GL_GPU_DISJOINT_EXT = 0x8fbb

export type GL_GPU_DISJOINT_EXT = 0x8fbb

/** One of the available compressed texture formats */
export type GL_COMPRESSED_TEXTURE_FORMAT =
  | GL_COMPRESSED_RGB_S3TC_DXT1_EXT
  | GL_COMPRESSED_RGBA_S3TC_DXT1_EXT
  | GL_COMPRESSED_RGBA_S3TC_DXT3_EXT
  | GL_COMPRESSED_RGBA_S3TC_DXT5_EXT
  | GL_COMPRESSED_R11_EAC
  | GL_COMPRESSED_SIGNED_R11_EAC
  | GL_COMPRESSED_RG11_EAC
  | GL_COMPRESSED_SIGNED_RG11_EAC
  | GL_COMPRESSED_RGB8_ETC2
  | GL_COMPRESSED_RGBA8_ETC2_EAC
  | GL_COMPRESSED_SRGB8_ETC2
  | GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
  | GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2
  | GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2
  | GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG
  | GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
  | GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG
  | GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
  | GL_COMPRESSED_RGB_ETC1_WEBGL

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
  /**
   * DEPTH_BUFFER_BIT = 0x00000100
   *
   * Passed to clear the current depth buffer.
   *
   * [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)
   * - Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.
   */
  DEPTH_BUFFER_BIT = GL_DEPTH_BUFFER_BIT,

  /**
   * STENCIL_BUFFER_BIT = 0x00000400
   *
   * Passed to clear the current stencil buffer.
   *
   * [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)
   * - Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.
   */
  STENCIL_BUFFER_BIT = GL_STENCIL_BUFFER_BIT,

  /**
   * COLOR_BUFFER_BIT = 0x00004000
   *
   * Passed to clear the current color buffer.
   *
   * [Clearing buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#clearing_buffers)
   * - Constants passed to [clear()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/clear) to clear buffer masks.
   */
  COLOR_BUFFER_BIT = GL_COLOR_BUFFER_BIT,

  /**
   * POINTS = 0x0000
   *
   * Passed to drawElements or drawArrays to draw single points.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  POINTS = GL_POINTS,

  /**
   * LINES = 0x0001
   *
   * Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  LINES = GL_LINES,

  /**
   * LINE_LOOP = 0x0002
   *
   * Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  LINE_LOOP = GL_LINE_LOOP,

  /**
   * LINE_STRIP = 0x0003
   *
   * Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  LINE_STRIP = GL_LINE_STRIP,

  /**
   * TRIANGLES = 0x0004
   *
   * Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  TRIANGLES = GL_TRIANGLES,

  /**
   * TRIANGLE_STRIP = 0x0005
   *
   * Passed to drawElements or drawArrays to draw a connected group of triangles.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  TRIANGLE_STRIP = GL_TRIANGLE_STRIP,

  /**
   * TRIANGLE_FAN = 0x0006
   *
   * Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.
   *
   * [Rendering primitives](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#rendering_primitives)
   * - Constants passed to [drawElements()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawElements)
   * or [drawArrays()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/drawArrays) to specify what kind of primitive to render.
   */
  TRIANGLE_FAN = GL_TRIANGLE_FAN,

  /**
   * ZERO = 0
   *
   * Passed to blendFunc or blendFuncSeparate to turn off a component.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ZERO = GL_ZERO,

  /**
   * ONE = 1
   *
   * Passed to blendFunc or blendFuncSeparate to turn on a component.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE = GL_ONE,

  /**
   * SRC_COLOR = 0x0300
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  SRC_COLOR = GL_SRC_COLOR,

  /**
   * ONE_MINUS_SRC_COLOR = 0x0301
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE_MINUS_SRC_COLOR = GL_ONE_MINUS_SRC_COLOR,

  /**
   * SRC_ALPHA = 0x0302
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  SRC_ALPHA = GL_SRC_ALPHA,

  /**
   * ONE_MINUS_SRC_ALPHA = 0x0303
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE_MINUS_SRC_ALPHA = GL_ONE_MINUS_SRC_ALPHA,

  /**
   * DST_ALPHA = 0x0304
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  DST_ALPHA = GL_DST_ALPHA,

  /**
   * ONE_MINUS_DST_ALPHA = 0x0305
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE_MINUS_DST_ALPHA = GL_ONE_MINUS_DST_ALPHA,

  /**
   * DST_COLOR = 0x0306
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  DST_COLOR = GL_DST_COLOR,

  /**
   * ONE_MINUS_DST_COLOR = 0x0307
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE_MINUS_DST_COLOR = GL_ONE_MINUS_DST_COLOR,

  /**
   * SRC_ALPHA_SATURATE = 0x0308
   *
   * Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  SRC_ALPHA_SATURATE = GL_SRC_ALPHA_SATURATE,

  /**
   * CONSTANT_COLOR = 0x8001
   *
   * Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  CONSTANT_COLOR = GL_CONSTANT_COLOR,

  /**
   * ONE_MINUS_CONSTANT_COLOR = 0x8002
   *
   * Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE_MINUS_CONSTANT_COLOR = GL_ONE_MINUS_CONSTANT_COLOR,

  /**
   * CONSTANT_ALPHA = 0x8003
   *
   * Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  CONSTANT_ALPHA = GL_CONSTANT_ALPHA,

  /**
   * ONE_MINUS_CONSTANT_ALPHA = 0x8004
   *
   * Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.
   *
   * [Blending modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_modes)
   * - Constants passed to [blendFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFunc)
   * or [blendFuncSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) to specify the blending mode (for both, RBG and alpha, or separately).
   */
  ONE_MINUS_CONSTANT_ALPHA = GL_ONE_MINUS_CONSTANT_ALPHA,

  /**
   * FUNC_ADD = 0x8006
   *
   * Passed to blendEquation or blendEquationSeparate to set an addition blend function.
   *
   * [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)
   * - Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
   * or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).
   */
  FUNC_ADD = GL_FUNC_ADD,

  /**
   * FUNC_SUBTRACT = 0x800a
   *
   * Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
   *
   * [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)
   * - Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
   * or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).
   */
  FUNC_SUBTRACT = GL_FUNC_SUBTRACT,

  /**
   * FUNC_REVERSE_SUBTRACT = 0x800b
   *
   * Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).
   *
   * [Blending equations](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#blending_equations)
   * - Constants passed to [blendEquation()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquation)
   * or [blendEquationSeparate()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) to control how the blending is calculated (for both, RBG and alpha, or separately).
   */
  FUNC_REVERSE_SUBTRACT = GL_FUNC_REVERSE_SUBTRACT,

  /**
   * BLEND_EQUATION = 0x8009
   *
   * Passed to getParameter to get the current RGB blend function.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_EQUATION = GL_BLEND_EQUATION,

  /**
   * BLEND_EQUATION_RGB = 0x8009
   *
   * Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_EQUATION_RGB = GL_BLEND_EQUATION_RGB,

  /**
   * BLEND_EQUATION_ALPHA = 0x883d
   *
   * Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_EQUATION_ALPHA = GL_BLEND_EQUATION_ALPHA,

  /**
   * BLEND_DST_RGB = 0x80c8
   *
   * Passed to getParameter to get the current destination RGB blend function.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_DST_RGB = GL_BLEND_DST_RGB,

  /**
   * BLEND_SRC_RGB = 0x80c9
   *
   * Passed to getParameter to get the current destination RGB blend function.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_SRC_RGB = GL_BLEND_SRC_RGB,

  /**
   * BLEND_DST_ALPHA = 0x80ca
   *
   * Passed to getParameter to get the current destination alpha blend function.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_DST_ALPHA = GL_BLEND_DST_ALPHA,

  /**
   * BLEND_SRC_ALPHA = 0x80cb
   *
   * Passed to getParameter to get the current source alpha blend function.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_SRC_ALPHA = GL_BLEND_SRC_ALPHA,

  /**
   * BLEND_COLOR = 0x8005
   *
   * Passed to getParameter to return a the current blend color.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLEND_COLOR = GL_BLEND_COLOR,

  /**
   * ARRAY_BUFFER_BINDING = 0x8894
   *
   * Passed to getParameter to get the array buffer binding.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  ARRAY_BUFFER_BINDING = GL_ARRAY_BUFFER_BINDING,

  /**
   * ELEMENT_ARRAY_BUFFER_BINDING = 0x8895
   *
   * Passed to getParameter to get the current element array buffer.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  ELEMENT_ARRAY_BUFFER_BINDING = GL_ELEMENT_ARRAY_BUFFER_BINDING,

  /**
   * LINE_WIDTH = 0x0b21
   *
   * Passed to getParameter to get the current lineWidth (set by the lineWidth method).
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  LINE_WIDTH = GL_LINE_WIDTH,

  /**
   * ALIASED_POINT_SIZE_RANGE = 0x846d
   *
   * Passed to getParameter to get the current size of a point drawn with gl.POINTS
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  ALIASED_POINT_SIZE_RANGE = GL_ALIASED_POINT_SIZE_RANGE,

  /**
   * ALIASED_LINE_WIDTH_RANGE = 0x846e
   *
   * Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  ALIASED_LINE_WIDTH_RANGE = GL_ALIASED_LINE_WIDTH_RANGE,

  /**
   * CULL_FACE_MODE = 0x0b45
   *
   * Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  CULL_FACE_MODE = GL_CULL_FACE_MODE,

  /**
   * FRONT_FACE = 0x0b46
   *
   * Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  FRONT_FACE = GL_FRONT_FACE,

  /**
   * DEPTH_RANGE = 0x0b70
   *
   * Passed to getParameter to return a length-2 array of floats giving the current depth range.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  DEPTH_RANGE = GL_DEPTH_RANGE,

  /**
   * DEPTH_WRITEMASK = 0x0b72
   *
   * Passed to getParameter to determine if the depth write mask is enabled.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  DEPTH_WRITEMASK = GL_DEPTH_WRITEMASK,

  /**
   * DEPTH_CLEAR_VALUE = 0x0b73
   *
   * Passed to getParameter to determine the current depth clear value.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  DEPTH_CLEAR_VALUE = GL_DEPTH_CLEAR_VALUE,

  /**
   * DEPTH_FUNC = 0x0b74
   *
   * Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  DEPTH_FUNC = GL_DEPTH_FUNC,

  /**
   * STENCIL_CLEAR_VALUE = 0x0b91
   *
   * Passed to getParameter to get the value the stencil will be cleared to.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_CLEAR_VALUE = GL_STENCIL_CLEAR_VALUE,

  /**
   * STENCIL_FUNC = 0x0b92
   *
   * Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_FUNC = GL_STENCIL_FUNC,

  /**
   * STENCIL_FAIL = 0x0b94
   *
   * Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_FAIL = GL_STENCIL_FAIL,

  /**
   * STENCIL_PASS_DEPTH_FAIL = 0x0b95
   *
   * Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_PASS_DEPTH_FAIL = GL_STENCIL_PASS_DEPTH_FAIL,

  /**
   * STENCIL_PASS_DEPTH_PASS = 0x0b96
   *
   * Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_PASS_DEPTH_PASS = GL_STENCIL_PASS_DEPTH_PASS,

  /**
   * STENCIL_REF = 0x0b97
   *
   * Passed to getParameter to get the reference value used for stencil tests.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_REF = GL_STENCIL_REF,

  /**
   * STENCIL_VALUE_MASK = 0x0b93
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_VALUE_MASK = GL_STENCIL_VALUE_MASK,

  /**
   * STENCIL_WRITEMASK = 0x0b98
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_WRITEMASK = GL_STENCIL_WRITEMASK,

  /**
   * STENCIL_BACK_FUNC = 0x8800
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_FUNC = GL_STENCIL_BACK_FUNC,

  /**
   * STENCIL_BACK_FAIL = 0x8801
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_FAIL = GL_STENCIL_BACK_FAIL,

  /**
   * STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_PASS_DEPTH_FAIL = GL_STENCIL_BACK_PASS_DEPTH_FAIL,

  /**
   * STENCIL_BACK_PASS_DEPTH_PASS = 0x8803
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_PASS_DEPTH_PASS = GL_STENCIL_BACK_PASS_DEPTH_PASS,

  /**
   * STENCIL_BACK_REF = 0x8ca3
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_REF = GL_STENCIL_BACK_REF,

  /**
   * STENCIL_BACK_VALUE_MASK = 0x8ca4
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_VALUE_MASK = GL_STENCIL_BACK_VALUE_MASK,

  /**
   * STENCIL_BACK_WRITEMASK = 0x8ca5
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BACK_WRITEMASK = GL_STENCIL_BACK_WRITEMASK,

  /**
   * VIEWPORT = 0x0ba2
   *
   * Returns an [Int32Array](https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) with four elements for the current viewport dimensions.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  VIEWPORT = GL_VIEWPORT,

  /**
   * SCISSOR_BOX = 0x0c10
   *
   * Returns an [Int32Array](https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) with four elements for the current scissor box dimensions.
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  SCISSOR_BOX = GL_SCISSOR_BOX,

  /**
   * COLOR_CLEAR_VALUE = 0x0c22
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  COLOR_CLEAR_VALUE = GL_COLOR_CLEAR_VALUE,

  /**
   * COLOR_WRITEMASK = 0x0c23
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  COLOR_WRITEMASK = GL_COLOR_WRITEMASK,

  /**
   * UNPACK_ALIGNMENT = 0x0cf5
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  UNPACK_ALIGNMENT = GL_UNPACK_ALIGNMENT,

  /**
   * PACK_ALIGNMENT = 0x0d05
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  PACK_ALIGNMENT = GL_PACK_ALIGNMENT,

  /**
   * MAX_TEXTURE_SIZE = 0x0d33
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_TEXTURE_SIZE = GL_MAX_TEXTURE_SIZE,

  /**
   * MAX_VIEWPORT_DIMS = 0x0d3a
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_VIEWPORT_DIMS = GL_MAX_VIEWPORT_DIMS,

  /**
   * SUBPIXEL_BITS = 0x0d50
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  SUBPIXEL_BITS = GL_SUBPIXEL_BITS,

  /**
   * RED_BITS = 0x0d52
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  RED_BITS = GL_RED_BITS,

  /**
   * GREEN_BITS = 0x0d53
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  GREEN_BITS = GL_GREEN_BITS,

  /**
   * BLUE_BITS = 0x0d54
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BLUE_BITS = GL_BLUE_BITS,

  /**
   * ALPHA_BITS = 0x0d55
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  ALPHA_BITS = GL_ALPHA_BITS,

  /**
   * DEPTH_BITS = 0x0d56
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  DEPTH_BITS = GL_DEPTH_BITS,

  /**
   * STENCIL_BITS = 0x0d57
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  STENCIL_BITS = GL_STENCIL_BITS,

  /**
   * POLYGON_OFFSET_UNITS = 0x2a00
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  POLYGON_OFFSET_UNITS = GL_POLYGON_OFFSET_UNITS,

  /**
   * POLYGON_OFFSET_FACTOR = 0x8038
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  POLYGON_OFFSET_FACTOR = GL_POLYGON_OFFSET_FACTOR,

  /**
   * TEXTURE_BINDING_2D = 0x8069
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  TEXTURE_BINDING_2D = GL_TEXTURE_BINDING_2D,

  /**
   * SAMPLE_BUFFERS = 0x80a8
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  SAMPLE_BUFFERS = GL_SAMPLE_BUFFERS,

  /**
   * SAMPLES = 0x80a9
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  SAMPLES = GL_SAMPLES,

  /**
   * SAMPLE_COVERAGE_VALUE = 0x80aa
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  SAMPLE_COVERAGE_VALUE = GL_SAMPLE_COVERAGE_VALUE,

  /**
   * SAMPLE_COVERAGE_INVERT = 0x80ab
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  SAMPLE_COVERAGE_INVERT = GL_SAMPLE_COVERAGE_INVERT,

  /**
   * COMPRESSED_TEXTURE_FORMATS = 0x86a3
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  COMPRESSED_TEXTURE_FORMATS = GL_COMPRESSED_TEXTURE_FORMATS,

  /**
   * VENDOR = 0x1f00
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  VENDOR = GL_VENDOR,

  /**
   * RENDERER = 0x1f01
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  RENDERER = GL_RENDERER,

  /**
   * VERSION = 0x1f02
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  VERSION = GL_VERSION,

  /**
   * IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  IMPLEMENTATION_COLOR_READ_TYPE = GL_IMPLEMENTATION_COLOR_READ_TYPE,

  /**
   * IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  IMPLEMENTATION_COLOR_READ_FORMAT = GL_IMPLEMENTATION_COLOR_READ_FORMAT,

  /**
   * BROWSER_DEFAULT_WEBGL = 0x9244
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  BROWSER_DEFAULT_WEBGL = GL_BROWSER_DEFAULT_WEBGL,

  /**
   * STATIC_DRAW = 0x88e4
   *
   * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  STATIC_DRAW = GL_STATIC_DRAW,

  /**
   * STREAM_DRAW = 0x88e0
   *
   * Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  STREAM_DRAW = GL_STREAM_DRAW,

  /**
   * DYNAMIC_DRAW = 0x88e8
   *
   * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  DYNAMIC_DRAW = GL_DYNAMIC_DRAW,

  /**
   * ARRAY_BUFFER = 0x8892
   *
   * Passed to bindBuffer or bufferData to specify the type of buffer being used.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  ARRAY_BUFFER = GL_ARRAY_BUFFER,

  /**
   * ELEMENT_ARRAY_BUFFER = 0x8893
   *
   * Passed to bindBuffer or bufferData to specify the type of buffer being used.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  ELEMENT_ARRAY_BUFFER = GL_ELEMENT_ARRAY_BUFFER,

  /**
   * BUFFER_SIZE = 0x8764
   *
   * Passed to getBufferParameter to get a buffer's size.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  BUFFER_SIZE = GL_BUFFER_SIZE,

  /**
   * BUFFER_USAGE = 0x8765
   *
   * Passed to getBufferParameter to get the hint for the buffer passed in when it was created.
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers)
   * - Constants passed to [bufferData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferData),
   * [bufferSubData()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bufferSubData),
   * [bindBuffer()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindBuffer),
   * or [getBufferParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter).
   */
  BUFFER_USAGE = GL_BUFFER_USAGE,

  /**
   * CURRENT_VERTEX_ATTRIB = 0x8626
   *
   * Passed to getVertexAttrib to read back the current vertex attribute.
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  CURRENT_VERTEX_ATTRIB = GL_CURRENT_VERTEX_ATTRIB,

  /**
   * VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_ENABLED = GL_VERTEX_ATTRIB_ARRAY_ENABLED,

  /**
   * VERTEX_ATTRIB_ARRAY_SIZE = 0x8623
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_SIZE = GL_VERTEX_ATTRIB_ARRAY_SIZE,

  /**
   * VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_STRIDE = GL_VERTEX_ATTRIB_ARRAY_STRIDE,

  /**
   * VERTEX_ATTRIB_ARRAY_TYPE = 0x8625
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_TYPE = GL_VERTEX_ATTRIB_ARRAY_TYPE,

  /**
   * VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_NORMALIZED = GL_VERTEX_ATTRIB_ARRAY_NORMALIZED,

  /**
   * VERTEX_ATTRIB_ARRAY_POINTER = 0x8645
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_POINTER = GL_VERTEX_ATTRIB_ARRAY_POINTER,

  /**
   * VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes)
   * - Constants passed to [getVertexAttrib()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib).
   */
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING,

  /**
   * CULL_FACE = 0x0b44
   *
   * Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
   *
   * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
   * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
   */
  CULL_FACE = GL_CULL_FACE,

  /**
   * FRONT = 0x0404
   *
   * Passed to cullFace to specify that only front faces should be culled.
   *
   * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
   * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
   */
  FRONT = GL_FRONT,

  /**
   * BACK = 0x0405
   *
   * Passed to cullFace to specify that only back faces should be culled.
   *
   * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
   * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
   */
  BACK = GL_BACK,

  /**
   * FRONT_AND_BACK = 0x0408
   *
   * Passed to cullFace to specify that front and back faces should be culled.
   *
   * [Culling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#culling)
   * - Constants passed to [cullFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/cullFace).
   */
  FRONT_AND_BACK = GL_FRONT_AND_BACK,

  /**
   * BLEND = 0x0be2
   *
   * Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  BLEND = GL_BLEND,

  /**
   * DEPTH_TEST = 0x0b71
   *
   * Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  DEPTH_TEST = GL_DEPTH_TEST,

  /**
   * DITHER = 0x0bd0
   *
   * Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  DITHER = GL_DITHER,

  /**
   * POLYGON_OFFSET_FILL = 0x8037
   *
   * Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  POLYGON_OFFSET_FILL = GL_POLYGON_OFFSET_FILL,

  /**
   * SAMPLE_ALPHA_TO_COVERAGE = 0x809e
   *
   * Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  SAMPLE_ALPHA_TO_COVERAGE = GL_SAMPLE_ALPHA_TO_COVERAGE,

  /**
   * SAMPLE_COVERAGE = 0x80a0
   *
   * Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  SAMPLE_COVERAGE = GL_SAMPLE_COVERAGE,

  /**
   * SCISSOR_TEST = 0x0c11
   *
   * Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  SCISSOR_TEST = GL_SCISSOR_TEST,

  /**
   * STENCIL_TEST = 0x0b90
   *
   * Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.
   *
   * [Enabling and disabling](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#enabling_and_disabling)
   * - Constants passed to [enable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/enable)
   * or [disable()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/disable).
   */
  STENCIL_TEST = GL_STENCIL_TEST,

  /**
   * NO_ERROR = 0
   *
   * Returned from getError.
   *
   * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
   * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
   */
  NO_ERROR = GL_NO_ERROR,

  /**
   * INVALID_ENUM = 0x0500
   *
   * Returned from getError.
   *
   * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
   * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
   */
  INVALID_ENUM = GL_INVALID_ENUM,

  /**
   * INVALID_VALUE = 0x0501
   *
   * Returned from getError.
   *
   * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
   * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
   */
  INVALID_VALUE = GL_INVALID_VALUE,

  /**
   * INVALID_OPERATION = 0x0502
   *
   * Returned from getError.
   *
   * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
   * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
   */
  INVALID_OPERATION = GL_INVALID_OPERATION,

  /**
   * OUT_OF_MEMORY = 0x0505
   *
   * Returned from getError.
   *
   * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
   * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
   */
  OUT_OF_MEMORY = GL_OUT_OF_MEMORY,

  /**
   * CONTEXT_LOST_WEBGL = 0x9242
   *
   * Returned from getError.
   *
   * [Errors](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#errors)
   * - Constants returned from [getError()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getError).
   */
  CONTEXT_LOST_WEBGL = GL_CONTEXT_LOST_WEBGL,

  /**
   * CW = 0x0900
   *
   * Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
   *
   * [Front face directions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#front_face_directions)
   * - Constants passed to [frontFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/frontFace).
   */
  CW = GL_CW,

  /**
   * CCW = 0x0901
   *
   * Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction
   *
   * [Front face directions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#front_face_directions)
   * - Constants passed to [frontFace()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/frontFace).
   */
  CCW = GL_CCW,

  /**
   * DONT_CARE = 0x1100
   *
   * There is no preference for this behavior.
   *
   * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
   * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
   */
  DONT_CARE = GL_DONT_CARE,

  /**
   * FASTEST = 0x1101
   *
   * The most efficient behavior should be used.
   *
   * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
   * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
   */
  FASTEST = GL_FASTEST,

  /**
   * NICEST = 0x1102
   *
   * The most correct or the highest quality option should be used.
   *
   * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
   * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
   */
  NICEST = GL_NICEST,

  /**
   * GENERATE_MIPMAP_HINT = 0x8192
   *
   * Hint for the quality of filtering when generating mipmap images with [generateMipmap()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/generateMipmap).
   *
   * [Hints](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#hints)
   * - Constants passed to [hint()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/hint)
   */
  GENERATE_MIPMAP_HINT = GL_GENERATE_MIPMAP_HINT,

  /**
   * BYTE = 0x1400
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  BYTE = GL_BYTE,

  /**
   * UNSIGNED_BYTE = 0x1401
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  UNSIGNED_BYTE = GL_UNSIGNED_BYTE,

  /**
   * SHORT = 0x1402
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  SHORT = GL_SHORT,

  /**
   * UNSIGNED_SHORT = 0x1403
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  UNSIGNED_SHORT = GL_UNSIGNED_SHORT,

  /**
   * INT = 0x1404
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  INT = GL_INT,

  /**
   * UNSIGNED_INT = 0x1405
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  UNSIGNED_INT = GL_UNSIGNED_INT,

  /**
   * FLOAT = 0x1406
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types)
   */
  FLOAT = GL_FLOAT,

  /**
   * DEPTH_COMPONENT = 0x1902
   *
   * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
   */
  DEPTH_COMPONENT = GL_DEPTH_COMPONENT,

  /**
   * ALPHA = 0x1906
   *
   * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
   */
  ALPHA = GL_ALPHA,

  /**
   * RGB = 0x1907
   *
   * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
   */
  RGB = GL_RGB,

  /**
   * RGBA = 0x1908
   *
   * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
   */
  RGBA = GL_RGBA,

  /**
   * LUMINANCE = 0x1909
   *
   * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
   */
  LUMINANCE = GL_LUMINANCE,

  /**
   * LUMINANCE_ALPHA = 0x190a
   *
   * [Pixel formats](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_formats)
   */
  LUMINANCE_ALPHA = GL_LUMINANCE_ALPHA,

  /**
   * UNSIGNED_SHORT_4_4_4_4 = 0x8033
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)
   */
  UNSIGNED_SHORT_4_4_4_4 = GL_UNSIGNED_SHORT_4_4_4_4,

  /**
   * UNSIGNED_SHORT_5_5_5_1 = 0x8034
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)
   */
  UNSIGNED_SHORT_5_5_5_1 = GL_UNSIGNED_SHORT_5_5_5_1,

  /**
   * UNSIGNED_SHORT_5_6_5 = 0x8363
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types)
   */
  UNSIGNED_SHORT_5_6_5 = GL_UNSIGNED_SHORT_5_6_5,

  /**
   * FRAGMENT_SHADER = 0x8b30
   *
   * Passed to createShader to define a fragment shader.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  FRAGMENT_SHADER = GL_FRAGMENT_SHADER,

  /**
   * VERTEX_SHADER = 0x8b31
   *
   * Passed to createShader to define a vertex shader
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  VERTEX_SHADER = GL_VERTEX_SHADER,

  /**
   * COMPILE_STATUS = 0x8b81
   *
   * Passed to getShaderParameter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  COMPILE_STATUS = GL_COMPILE_STATUS,

  /**
   * DELETE_STATUS = 0x8b80
   *
   * Passed to getShaderParameter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  DELETE_STATUS = GL_DELETE_STATUS,

  /**
   * LINK_STATUS = 0x8b82
   *
   * Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  LINK_STATUS = GL_LINK_STATUS,

  /**
   * VALIDATE_STATUS = 0x8b83
   *
   * Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  VALIDATE_STATUS = GL_VALIDATE_STATUS,

  /**
   * ATTACHED_SHADERS = 0x8b85
   *
   * Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  ATTACHED_SHADERS = GL_ATTACHED_SHADERS,

  /**
   * ACTIVE_ATTRIBUTES = 0x8b89
   *
   * Passed to getProgramParameter to get the number of attributes active in a program.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  ACTIVE_ATTRIBUTES = GL_ACTIVE_ATTRIBUTES,

  /**
   * ACTIVE_UNIFORMS = 0x8b86
   *
   * Passed to getProgramParameter to get the number of uniforms active in a program.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  ACTIVE_UNIFORMS = GL_ACTIVE_UNIFORMS,

  /**
   * MAX_VERTEX_ATTRIBS = 0x8869
   *
   * The maximum number of entries possible in the vertex attribute list.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_VERTEX_ATTRIBS = GL_MAX_VERTEX_ATTRIBS,

  /**
   * MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_VERTEX_UNIFORM_VECTORS = GL_MAX_VERTEX_UNIFORM_VECTORS,

  /**
   * MAX_VARYING_VECTORS = 0x8dfc
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_VARYING_VECTORS = GL_MAX_VARYING_VECTORS,

  /**
   * MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_COMBINED_TEXTURE_IMAGE_UNITS = GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS,

  /**
   * MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_VERTEX_TEXTURE_IMAGE_UNITS = GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS,

  /**
   * MAX_TEXTURE_IMAGE_UNITS = 0x8872
   *
   * Implementation dependent number of maximum texture units. At least 8.
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_TEXTURE_IMAGE_UNITS = GL_MAX_TEXTURE_IMAGE_UNITS,

  /**
   * MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  MAX_FRAGMENT_UNIFORM_VECTORS = GL_MAX_FRAGMENT_UNIFORM_VECTORS,

  /**
   * SHADER_TYPE = 0x8b4f
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  SHADER_TYPE = GL_SHADER_TYPE,

  /**
   * SHADING_LANGUAGE_VERSION = 0x8b8c
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  SHADING_LANGUAGE_VERSION = GL_SHADING_LANGUAGE_VERSION,

  /**
   * CURRENT_PROGRAM = 0x8b8d
   *
   * [Shaders](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shaders)
   * - Constants passed to [createShader()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/createShader)
   * or [getShaderParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter)
   */
  CURRENT_PROGRAM = GL_CURRENT_PROGRAM,

  /**
   * NEVER = 0x0200
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  NEVER = GL_NEVER,

  /**
   * LESS = 0x0201
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  LESS = GL_LESS,

  /**
   * EQUAL = 0x0202
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  EQUAL = GL_EQUAL,

  /**
   * LEQUAL = 0x0203
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  LEQUAL = GL_LEQUAL,

  /**
   * GREATER = 0x0204
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  GREATER = GL_GREATER,

  /**
   * NOTEQUAL = 0x0205
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  NOTEQUAL = GL_NOTEQUAL,

  /**
   * GEQUAL = 0x0206
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  GEQUAL = GL_GEQUAL,

  /**
   * ALWAYS = 0x0207
   *
   * Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
   *
   * [Depth or stencil tests](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#depth_or_stencil_tests)
   * - Constants passed to [depthFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
   * or [stencilFunc()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilFunc).
   */
  ALWAYS = GL_ALWAYS,

  /**
   * KEEP = 0x1e00
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  KEEP = GL_KEEP,

  /**
   * REPLACE = 0x1e01
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  REPLACE = GL_REPLACE,

  /**
   * INCR = 0x1e02
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  INCR = GL_INCR,

  /**
   * DECR = 0x1e03
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  DECR = GL_DECR,

  /**
   * INVERT = 0x150a
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  INVERT = GL_INVERT,

  /**
   * INCR_WRAP = 0x8507
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  INCR_WRAP = GL_INCR_WRAP,

  /**
   * DECR_WRAP = 0x8508
   *
   * [Stencil actions](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#stencil_actions)
   * - Constants passed to [stencilOp()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/stencilOp).
   */
  DECR_WRAP = GL_DECR_WRAP,

  /**
   * NEAREST = 0x2600
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  NEAREST = GL_NEAREST,

  /**
   * LINEAR = 0x2601
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  LINEAR = GL_LINEAR,

  /**
   * NEAREST_MIPMAP_NEAREST = 0x2700
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  NEAREST_MIPMAP_NEAREST = GL_NEAREST_MIPMAP_NEAREST,

  /**
   * LINEAR_MIPMAP_NEAREST = 0x2701
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  LINEAR_MIPMAP_NEAREST = GL_LINEAR_MIPMAP_NEAREST,

  /**
   * NEAREST_MIPMAP_LINEAR = 0x2702
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  NEAREST_MIPMAP_LINEAR = GL_NEAREST_MIPMAP_LINEAR,

  /**
   * LINEAR_MIPMAP_LINEAR = 0x2703
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  LINEAR_MIPMAP_LINEAR = GL_LINEAR_MIPMAP_LINEAR,

  /**
   * TEXTURE_MAG_FILTER = 0x2800
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_MAG_FILTER = GL_TEXTURE_MAG_FILTER,

  /**
   * TEXTURE_MIN_FILTER = 0x2801
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_MIN_FILTER = GL_TEXTURE_MIN_FILTER,

  /**
   * TEXTURE_WRAP_S = 0x2802
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_WRAP_S = GL_TEXTURE_WRAP_S,

  /**
   * TEXTURE_WRAP_T = 0x2803
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_WRAP_T = GL_TEXTURE_WRAP_T,

  /**
   * TEXTURE_2D = 0x0de1
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_2D = GL_TEXTURE_2D,

  /**
   * TEXTURE = 0x1702
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE = GL_TEXTURE,

  /**
   * TEXTURE_CUBE_MAP = 0x8513
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP = GL_TEXTURE_CUBE_MAP,

  /**
   * TEXTURE_BINDING_CUBE_MAP = 0x8514
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_BINDING_CUBE_MAP = GL_TEXTURE_BINDING_CUBE_MAP,

  /**
   * TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP_POSITIVE_X = GL_TEXTURE_CUBE_MAP_POSITIVE_X,

  /**
   * TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP_NEGATIVE_X = GL_TEXTURE_CUBE_MAP_NEGATIVE_X,

  /**
   * TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP_POSITIVE_Y = GL_TEXTURE_CUBE_MAP_POSITIVE_Y,

  /**
   * TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP_NEGATIVE_Y = GL_TEXTURE_CUBE_MAP_NEGATIVE_Y,

  /**
   * TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP_POSITIVE_Z = GL_TEXTURE_CUBE_MAP_POSITIVE_Z,

  /**
   * TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_CUBE_MAP_NEGATIVE_Z = GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,

  /**
   * MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  MAX_CUBE_MAP_TEXTURE_SIZE = GL_MAX_CUBE_MAP_TEXTURE_SIZE,

  /**
   * ACTIVE_TEXTURE = 0x84e0
   *
   * The current active texture unit.
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  ACTIVE_TEXTURE = GL_ACTIVE_TEXTURE,

  /**
   * REPEAT = 0x2901
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  REPEAT = GL_REPEAT,

  /**
   * CLAMP_TO_EDGE = 0x812f
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  CLAMP_TO_EDGE = GL_CLAMP_TO_EDGE,

  /**
   * MIRRORED_REPEAT = 0x8370
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  MIRRORED_REPEAT = GL_MIRRORED_REPEAT,

  /**
   * FLOAT_VEC2 = 0x8b50
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  FLOAT_VEC2 = GL_FLOAT_VEC2,

  /**
   * FLOAT_VEC3 = 0x8b51
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  FLOAT_VEC3 = GL_FLOAT_VEC3,

  /**
   * FLOAT_VEC4 = 0x8b52
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  FLOAT_VEC4 = GL_FLOAT_VEC4,

  /**
   * INT_VEC2 = 0x8b53
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  INT_VEC2 = GL_INT_VEC2,

  /**
   * INT_VEC3 = 0x8b54
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  INT_VEC3 = GL_INT_VEC3,

  /**
   * INT_VEC4 = 0x8b55
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  INT_VEC4 = GL_INT_VEC4,

  /**
   * BOOL = 0x8b56
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  BOOL = GL_BOOL,

  /**
   * BOOL_VEC2 = 0x8b57
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  BOOL_VEC2 = GL_BOOL_VEC2,

  /**
   * BOOL_VEC3 = 0x8b58
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  BOOL_VEC3 = GL_BOOL_VEC3,

  /**
   * BOOL_VEC4 = 0x8b59
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  BOOL_VEC4 = GL_BOOL_VEC4,

  /**
   * FLOAT_MAT2 = 0x8b5a
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  FLOAT_MAT2 = GL_FLOAT_MAT2,

  /**
   * FLOAT_MAT3 = 0x8b5b
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  FLOAT_MAT3 = GL_FLOAT_MAT3,

  /**
   * FLOAT_MAT4 = 0x8b5c
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  FLOAT_MAT4 = GL_FLOAT_MAT4,

  /**
   * SAMPLER_2D = 0x8b5e
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  SAMPLER_2D = GL_SAMPLER_2D,

  /**
   * SAMPLER_CUBE = 0x8b60
   *
   * [Uniform types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniform_types)
   */
  SAMPLER_CUBE = GL_SAMPLER_CUBE,

  /**
   * LOW_FLOAT = 0x8df0
   *
   * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
   */
  LOW_FLOAT = GL_LOW_FLOAT,

  /**
   * MEDIUM_FLOAT = 0x8df1
   *
   * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
   */
  MEDIUM_FLOAT = GL_MEDIUM_FLOAT,

  /**
   * HIGH_FLOAT = 0x8df2
   *
   * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
   */
  HIGH_FLOAT = GL_HIGH_FLOAT,

  /**
   * LOW_INT = 0x8df3
   *
   * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
   */
  LOW_INT = GL_LOW_INT,

  /**
   * MEDIUM_INT = 0x8df4
   *
   * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
   */
  MEDIUM_INT = GL_MEDIUM_INT,

  /**
   * HIGH_INT = 0x8df5
   *
   * [Shader precision-specified types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#shader_precision-specified_types)
   */
  HIGH_INT = GL_HIGH_INT,

  /**
   * FRAMEBUFFER = 0x8d40
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER = GL_FRAMEBUFFER,

  /**
   * RENDERBUFFER = 0x8d41
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER = GL_RENDERBUFFER,

  /**
   * RGBA4 = 0x8056
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RGBA4 = GL_RGBA4,

  /**
   * RGB5_A1 = 0x8057
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RGB5_A1 = GL_RGB5_A1,

  /**
   * RGB565 = 0x8d62
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RGB565 = GL_RGB565,

  /**
   * DEPTH_COMPONENT16 = 0x81a5
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  DEPTH_COMPONENT16 = GL_DEPTH_COMPONENT16,

  /**
   * STENCIL_INDEX8 = 0x8d48
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  STENCIL_INDEX8 = GL_STENCIL_INDEX8,

  /**
   * DEPTH_STENCIL = 0x84f9
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  DEPTH_STENCIL = GL_DEPTH_STENCIL,

  /**
   * RENDERBUFFER_WIDTH = 0x8d42
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_WIDTH = GL_RENDERBUFFER_WIDTH,

  /**
   * RENDERBUFFER_HEIGHT = 0x8d43
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_HEIGHT = GL_RENDERBUFFER_HEIGHT,

  /**
   * RENDERBUFFER_INTERNAL_FORMAT = 0x8d44
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_INTERNAL_FORMAT = GL_RENDERBUFFER_INTERNAL_FORMAT,

  /**
   * RENDERBUFFER_RED_SIZE = 0x8d50
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_RED_SIZE = GL_RENDERBUFFER_RED_SIZE,

  /**
   * RENDERBUFFER_GREEN_SIZE = 0x8d51
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_GREEN_SIZE = GL_RENDERBUFFER_GREEN_SIZE,

  /**
   * RENDERBUFFER_BLUE_SIZE = 0x8d52
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_BLUE_SIZE = GL_RENDERBUFFER_BLUE_SIZE,

  /**
   * RENDERBUFFER_ALPHA_SIZE = 0x8d53
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_ALPHA_SIZE = GL_RENDERBUFFER_ALPHA_SIZE,

  /**
   * RENDERBUFFER_DEPTH_SIZE = 0x8d54
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_DEPTH_SIZE = GL_RENDERBUFFER_DEPTH_SIZE,

  /**
   * RENDERBUFFER_STENCIL_SIZE = 0x8d55
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_STENCIL_SIZE = GL_RENDERBUFFER_STENCIL_SIZE,

  /**
   * FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE,

  /**
   * FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME,

  /**
   * FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL,

  /**
   * FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE,

  /**
   * COLOR_ATTACHMENT0 = 0x8ce0
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  COLOR_ATTACHMENT0 = GL_COLOR_ATTACHMENT0,

  /**
   * DEPTH_ATTACHMENT = 0x8d00
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  DEPTH_ATTACHMENT = GL_DEPTH_ATTACHMENT,

  /**
   * STENCIL_ATTACHMENT = 0x8d20
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  STENCIL_ATTACHMENT = GL_STENCIL_ATTACHMENT,

  /**
   * DEPTH_STENCIL_ATTACHMENT = 0x821a
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  DEPTH_STENCIL_ATTACHMENT = GL_DEPTH_STENCIL_ATTACHMENT,

  /**
   * NONE = 0
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  NONE = GL_NONE,

  /**
   * FRAMEBUFFER_COMPLETE = 0x8cd5
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_COMPLETE = GL_FRAMEBUFFER_COMPLETE,

  /**
   * FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT = GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT,

  /**
   * FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT,

  /**
   * FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS = GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS,

  /**
   * FRAMEBUFFER_UNSUPPORTED = 0x8cdd
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_UNSUPPORTED = GL_FRAMEBUFFER_UNSUPPORTED,

  /**
   * FRAMEBUFFER_BINDING = 0x8ca6
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  FRAMEBUFFER_BINDING = GL_FRAMEBUFFER_BINDING,

  /**
   * RENDERBUFFER_BINDING = 0x8ca7
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  RENDERBUFFER_BINDING = GL_RENDERBUFFER_BINDING,

  /**
   * MAX_RENDERBUFFER_SIZE = 0x84e8
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  MAX_RENDERBUFFER_SIZE = GL_MAX_RENDERBUFFER_SIZE,

  /**
   * INVALID_FRAMEBUFFER_OPERATION = 0x0506
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers)
   */
  INVALID_FRAMEBUFFER_OPERATION = GL_INVALID_FRAMEBUFFER_OPERATION,

  /**
   * UNPACK_FLIP_Y_WEBGL = 0x9240
   *
   * [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)
   * - Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).
   */
  UNPACK_FLIP_Y_WEBGL = GL_UNPACK_FLIP_Y_WEBGL,

  /**
   * UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241
   *
   * [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)
   * - Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).
   */
  UNPACK_PREMULTIPLY_ALPHA_WEBGL = GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL,

  /**
   * UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243
   *
   * [Pixel storage modes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_storage_modes)
   * - Constants passed to [pixelStorei()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/pixelStorei).
   */
  UNPACK_COLORSPACE_CONVERSION_WEBGL = GL_UNPACK_COLORSPACE_CONVERSION_WEBGL,

  /**
   * READ_BUFFER = 0x0c02
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  READ_BUFFER = GL_READ_BUFFER,

  /**
   * UNPACK_ROW_LENGTH = 0x0cf2
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  UNPACK_ROW_LENGTH = GL_UNPACK_ROW_LENGTH,

  /**
   * UNPACK_SKIP_ROWS = 0x0cf3
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  UNPACK_SKIP_ROWS = GL_UNPACK_SKIP_ROWS,

  /**
   * UNPACK_SKIP_PIXELS = 0x0cf4
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  UNPACK_SKIP_PIXELS = GL_UNPACK_SKIP_PIXELS,

  /**
   * PACK_ROW_LENGTH = 0x0d02
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  PACK_ROW_LENGTH = GL_PACK_ROW_LENGTH,

  /**
   * PACK_SKIP_ROWS = 0x0d03
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  PACK_SKIP_ROWS = GL_PACK_SKIP_ROWS,

  /**
   * PACK_SKIP_PIXELS = 0x0d04
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  PACK_SKIP_PIXELS = GL_PACK_SKIP_PIXELS,

  /**
   * TEXTURE_BINDING_3D = 0x806a
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  TEXTURE_BINDING_3D = GL_TEXTURE_BINDING_3D,

  /**
   * UNPACK_SKIP_IMAGES = 0x806d
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  UNPACK_SKIP_IMAGES = GL_UNPACK_SKIP_IMAGES,

  /**
   * UNPACK_IMAGE_HEIGHT = 0x806e
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  UNPACK_IMAGE_HEIGHT = GL_UNPACK_IMAGE_HEIGHT,

  /**
   * MAX_3D_TEXTURE_SIZE = 0x8073
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_3D_TEXTURE_SIZE = GL_MAX_3D_TEXTURE_SIZE,

  /**
   * MAX_ELEMENTS_VERTICES = 0x80e8
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_ELEMENTS_VERTICES = GL_MAX_ELEMENTS_VERTICES,

  /**
   * MAX_ELEMENTS_INDICES = 0x80e9
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_ELEMENTS_INDICES = GL_MAX_ELEMENTS_INDICES,

  /**
   * MAX_TEXTURE_LOD_BIAS = 0x84fd
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_TEXTURE_LOD_BIAS = GL_MAX_TEXTURE_LOD_BIAS,

  /**
   * MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_FRAGMENT_UNIFORM_COMPONENTS = GL_MAX_FRAGMENT_UNIFORM_COMPONENTS,

  /**
   * MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_VERTEX_UNIFORM_COMPONENTS = GL_MAX_VERTEX_UNIFORM_COMPONENTS,

  /**
   * MAX_ARRAY_TEXTURE_LAYERS = 0x88ff
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_ARRAY_TEXTURE_LAYERS = GL_MAX_ARRAY_TEXTURE_LAYERS,

  /**
   * MIN_PROGRAM_TEXEL_OFFSET = 0x8904
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MIN_PROGRAM_TEXEL_OFFSET = GL_MIN_PROGRAM_TEXEL_OFFSET,

  /**
   * MAX_PROGRAM_TEXEL_OFFSET = 0x8905
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_PROGRAM_TEXEL_OFFSET = GL_MAX_PROGRAM_TEXEL_OFFSET,

  /**
   * MAX_VARYING_COMPONENTS = 0x8b4b
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_VARYING_COMPONENTS = GL_MAX_VARYING_COMPONENTS,

  /**
   * FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  FRAGMENT_SHADER_DERIVATIVE_HINT = GL_FRAGMENT_SHADER_DERIVATIVE_HINT,

  /**
   * RASTERIZER_DISCARD = 0x8c89
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  RASTERIZER_DISCARD = GL_RASTERIZER_DISCARD,

  /**
   * VERTEX_ARRAY_BINDING = 0x85b5
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  VERTEX_ARRAY_BINDING = GL_VERTEX_ARRAY_BINDING,

  /**
   * MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_VERTEX_OUTPUT_COMPONENTS = GL_MAX_VERTEX_OUTPUT_COMPONENTS,

  /**
   * MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_FRAGMENT_INPUT_COMPONENTS = GL_MAX_FRAGMENT_INPUT_COMPONENTS,

  /**
   * MAX_SERVER_WAIT_TIMEOUT = 0x9111
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_SERVER_WAIT_TIMEOUT = GL_MAX_SERVER_WAIT_TIMEOUT,

  /**
   * MAX_ELEMENT_INDEX = 0x8d6b
   *
   * [Getting GL parameter information](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#getting_gl_parameter_information_2)
   * - Constants passed to [getParameter()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/getParameter) to specify what information to return.
   */
  MAX_ELEMENT_INDEX = GL_MAX_ELEMENT_INDEX,

  /**
   * RED = 0x1903
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RED = GL_RED,

  /**
   * RGB8 = 0x8051
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB8 = GL_RGB8,

  /**
   * RGBA8 = 0x8058
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA8 = GL_RGBA8,

  /**
   * RGB10_A2 = 0x8059
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB10_A2 = GL_RGB10_A2,

  /**
   * TEXTURE_3D = 0x806f
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_3D = GL_TEXTURE_3D,

  /**
   * TEXTURE_WRAP_R = 0x8072
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_WRAP_R = GL_TEXTURE_WRAP_R,

  /**
   * TEXTURE_MIN_LOD = 0x813a
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_MIN_LOD = GL_TEXTURE_MIN_LOD,

  /**
   * TEXTURE_MAX_LOD = 0x813b
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_MAX_LOD = GL_TEXTURE_MAX_LOD,

  /**
   * TEXTURE_BASE_LEVEL = 0x813c
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_BASE_LEVEL = GL_TEXTURE_BASE_LEVEL,

  /**
   * TEXTURE_MAX_LEVEL = 0x813d
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_MAX_LEVEL = GL_TEXTURE_MAX_LEVEL,

  /**
   * TEXTURE_COMPARE_MODE = 0x884c
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_COMPARE_MODE = GL_TEXTURE_COMPARE_MODE,

  /**
   * TEXTURE_COMPARE_FUNC = 0x884d
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_COMPARE_FUNC = GL_TEXTURE_COMPARE_FUNC,

  /**
   * SRGB = 0x8c40
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  SRGB = GL_SRGB,

  /**
   * SRGB8 = 0x8c41
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  SRGB8 = GL_SRGB8,

  /**
   * SRGB8_ALPHA8 = 0x8c43
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  SRGB8_ALPHA8 = GL_SRGB8_ALPHA8,

  /**
   * COMPARE_REF_TO_TEXTURE = 0x884e
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  COMPARE_REF_TO_TEXTURE = GL_COMPARE_REF_TO_TEXTURE,

  /**
   * RGBA32F = 0x8814
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA32F = GL_RGBA32F,

  /**
   * RGB32F = 0x8815
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB32F = GL_RGB32F,

  /**
   * RGBA16F = 0x881a
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA16F = GL_RGBA16F,

  /**
   * RGB16F = 0x881b
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB16F = GL_RGB16F,

  /**
   * TEXTURE_2D_ARRAY = 0x8c1a
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_2D_ARRAY = GL_TEXTURE_2D_ARRAY,

  /**
   * TEXTURE_BINDING_2D_ARRAY = 0x8c1d
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_BINDING_2D_ARRAY = GL_TEXTURE_BINDING_2D_ARRAY,

  /**
   * R11F_G11F_B10F = 0x8c3a
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R11F_G11F_B10F = GL_R11F_G11F_B10F,

  /**
   * RGB9_E5 = 0x8c3d
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB9_E5 = GL_RGB9_E5,

  /**
   * RGBA32UI = 0x8d70
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA32UI = GL_RGBA32UI,

  /**
   * RGB32UI = 0x8d71
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB32UI = GL_RGB32UI,

  /**
   * RGBA16UI = 0x8d76
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA16UI = GL_RGBA16UI,

  /**
   * RGB16UI = 0x8d77
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB16UI = GL_RGB16UI,

  /**
   * RGBA8UI = 0x8d7c
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA8UI = GL_RGBA8UI,

  /**
   * RGB8UI = 0x8d7d
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB8UI = GL_RGB8UI,

  /**
   * RGBA32I = 0x8d82
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA32I = GL_RGBA32I,

  /**
   * RGB32I = 0x8d83
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB32I = GL_RGB32I,

  /**
   * RGBA16I = 0x8d88
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA16I = GL_RGBA16I,

  /**
   * RGB16I = 0x8d89
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB16I = GL_RGB16I,

  /**
   * RGBA8I = 0x8d8e
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA8I = GL_RGBA8I,

  /**
   * RGB8I = 0x8d8f
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB8I = GL_RGB8I,

  /**
   * RED_INTEGER = 0x8d94
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RED_INTEGER = GL_RED_INTEGER,

  /**
   * RGB_INTEGER = 0x8d98
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB_INTEGER = GL_RGB_INTEGER,

  /**
   * RGBA_INTEGER = 0x8d99
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA_INTEGER = GL_RGBA_INTEGER,

  /**
   * R8 = 0x8229
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R8 = GL_R8,

  /**
   * RG8 = 0x822b
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG8 = GL_RG8,

  /**
   * R16F = 0x822d
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R16F = GL_R16F,

  /**
   * R32F = 0x822e
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R32F = GL_R32F,

  /**
   * RG16F = 0x822f
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG16F = GL_RG16F,

  /**
   * RG32F = 0x8230
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG32F = GL_RG32F,

  /**
   * R8I = 0x8231
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R8I = GL_R8I,

  /**
   * R8UI = 0x8232
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R8UI = GL_R8UI,

  /**
   * R16I = 0x8233
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R16I = GL_R16I,

  /**
   * R16UI = 0x8234
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R16UI = GL_R16UI,

  /**
   * R32I = 0x8235
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R32I = GL_R32I,

  /**
   * R32UI = 0x8236
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R32UI = GL_R32UI,

  /**
   * RG8I = 0x8237
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG8I = GL_RG8I,

  /**
   * RG8UI = 0x8238
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG8UI = GL_RG8UI,

  /**
   * RG16I = 0x8239
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG16I = GL_RG16I,

  /**
   * RG16UI = 0x823a
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG16UI = GL_RG16UI,

  /**
   * RG32I = 0x823b
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG32I = GL_RG32I,

  /**
   * RG32UI = 0x823c
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG32UI = GL_RG32UI,

  /**
   * R8_SNORM = 0x8f94
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  R8_SNORM = GL_R8_SNORM,

  /**
   * RG8_SNORM = 0x8f95
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RG8_SNORM = GL_RG8_SNORM,

  /**
   * RGB8_SNORM = 0x8f96
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB8_SNORM = GL_RGB8_SNORM,

  /**
   * RGBA8_SNORM = 0x8f97
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGBA8_SNORM = GL_RGBA8_SNORM,

  /**
   * RGB10_A2UI = 0x906f
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  RGB10_A2UI = GL_RGB10_A2UI,

  /**
   * TEXTURE_IMMUTABLE_FORMAT = 0x912f
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_IMMUTABLE_FORMAT = GL_TEXTURE_IMMUTABLE_FORMAT,

  /**
   * TEXTURE_IMMUTABLE_LEVELS = 0x82df
   *
   * [Textures](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#textures_2)
   * - Constants passed to [texParameteri()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [texParameterf()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texParameter),
   * [bindTexture()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/bindTexture),
   * [texImage2D()](https://developer.mozilla.org//en-US/docs/Web/API/WebGLRenderingContext/texImage2D), and others.
   */
  TEXTURE_IMMUTABLE_LEVELS = GL_TEXTURE_IMMUTABLE_LEVELS,

  /**
   * UNSIGNED_INT_2_10_10_10_REV = 0x8368
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  UNSIGNED_INT_2_10_10_10_REV = GL_UNSIGNED_INT_2_10_10_10_REV,

  /**
   * UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  UNSIGNED_INT_10F_11F_11F_REV = GL_UNSIGNED_INT_10F_11F_11F_REV,

  /**
   * UNSIGNED_INT_5_9_9_9_REV = 0x8c3e
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  UNSIGNED_INT_5_9_9_9_REV = GL_UNSIGNED_INT_5_9_9_9_REV,

  /**
   * FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  FLOAT_32_UNSIGNED_INT_24_8_REV = GL_FLOAT_32_UNSIGNED_INT_24_8_REV,

  /**
   * UNSIGNED_INT_24_8 = 0x84fa
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  UNSIGNED_INT_24_8 = GL_UNSIGNED_INT_24_8,

  /**
   * HALF_FLOAT = 0x140b
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  HALF_FLOAT = GL_HALF_FLOAT,

  /**
   * RG = 0x8227
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  RG = GL_RG,

  /**
   * RG_INTEGER = 0x8228
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  RG_INTEGER = GL_RG_INTEGER,

  /**
   * INT_2_10_10_10_REV = 0x8d9f
   *
   * [Pixel types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#pixel_types_2)
   */
  INT_2_10_10_10_REV = GL_INT_2_10_10_10_REV,

  /**
   * CURRENT_QUERY = 0x8865
   *
   * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
   */
  CURRENT_QUERY = GL_CURRENT_QUERY,

  /**
   * QUERY_RESULT = 0x8866
   *
   * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
   */
  QUERY_RESULT = GL_QUERY_RESULT,

  /**
   * QUERY_RESULT_AVAILABLE = 0x8867
   *
   * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
   */
  QUERY_RESULT_AVAILABLE = GL_QUERY_RESULT_AVAILABLE,

  /**
   * ANY_SAMPLES_PASSED = 0x8c2f
   *
   * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
   */
  ANY_SAMPLES_PASSED = GL_ANY_SAMPLES_PASSED,

  /**
   * ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a
   *
   * [Queries](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#queries)
   */
  ANY_SAMPLES_PASSED_CONSERVATIVE = GL_ANY_SAMPLES_PASSED_CONSERVATIVE,

  /**
   * MAX_DRAW_BUFFERS = 0x8824
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  MAX_DRAW_BUFFERS = GL_MAX_DRAW_BUFFERS,

  /**
   * DRAW_BUFFER0 = 0x8825
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER0 = GL_DRAW_BUFFER0,

  /**
   * DRAW_BUFFER1 = 0x8826
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER1 = GL_DRAW_BUFFER1,

  /**
   * DRAW_BUFFER2 = 0x8827
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER2 = GL_DRAW_BUFFER2,

  /**
   * DRAW_BUFFER3 = 0x8828
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER3 = GL_DRAW_BUFFER3,

  /**
   * DRAW_BUFFER4 = 0x8829
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER4 = GL_DRAW_BUFFER4,

  /**
   * DRAW_BUFFER5 = 0x882a
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER5 = GL_DRAW_BUFFER5,

  /**
   * DRAW_BUFFER6 = 0x882b
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER6 = GL_DRAW_BUFFER6,

  /**
   * DRAW_BUFFER7 = 0x882c
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER7 = GL_DRAW_BUFFER7,

  /**
   * DRAW_BUFFER8 = 0x882d
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER8 = GL_DRAW_BUFFER8,

  /**
   * DRAW_BUFFER9 = 0x882e
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER9 = GL_DRAW_BUFFER9,

  /**
   * DRAW_BUFFER10 = 0x882f
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER10 = GL_DRAW_BUFFER10,

  /**
   * DRAW_BUFFER11 = 0x8830
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER11 = GL_DRAW_BUFFER11,

  /**
   * DRAW_BUFFER12 = 0x8831
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER12 = GL_DRAW_BUFFER12,

  /**
   * DRAW_BUFFER13 = 0x8832
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER13 = GL_DRAW_BUFFER13,

  /**
   * DRAW_BUFFER14 = 0x8833
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER14 = GL_DRAW_BUFFER14,

  /**
   * DRAW_BUFFER15 = 0x8834
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  DRAW_BUFFER15 = GL_DRAW_BUFFER15,

  /**
   * MAX_COLOR_ATTACHMENTS = 0x8cdf
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  MAX_COLOR_ATTACHMENTS = GL_MAX_COLOR_ATTACHMENTS,

  /**
   * COLOR_ATTACHMENT1 = 0x8ce1
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT1 = GL_COLOR_ATTACHMENT1,

  /**
   * COLOR_ATTACHMENT2 = 0x8ce2
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT2 = GL_COLOR_ATTACHMENT2,

  /**
   * COLOR_ATTACHMENT3 = 0x8ce3
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT3 = GL_COLOR_ATTACHMENT3,

  /**
   * COLOR_ATTACHMENT4 = 0x8ce4
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT4 = GL_COLOR_ATTACHMENT4,

  /**
   * COLOR_ATTACHMENT5 = 0x8ce5
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT5 = GL_COLOR_ATTACHMENT5,

  /**
   * COLOR_ATTACHMENT6 = 0x8ce6
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT6 = GL_COLOR_ATTACHMENT6,

  /**
   * COLOR_ATTACHMENT7 = 0x8ce7
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT7 = GL_COLOR_ATTACHMENT7,

  /**
   * COLOR_ATTACHMENT8 = 0x8ce8
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT8 = GL_COLOR_ATTACHMENT8,

  /**
   * COLOR_ATTACHMENT9 = 0x8ce9
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT9 = GL_COLOR_ATTACHMENT9,

  /**
   * COLOR_ATTACHMENT10 = 0x8cea
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT10 = GL_COLOR_ATTACHMENT10,

  /**
   * COLOR_ATTACHMENT11 = 0x8ceb
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT11 = GL_COLOR_ATTACHMENT11,

  /**
   * COLOR_ATTACHMENT12 = 0x8cec
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT12 = GL_COLOR_ATTACHMENT12,

  /**
   * COLOR_ATTACHMENT13 = 0x8ced
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT13 = GL_COLOR_ATTACHMENT13,

  /**
   * COLOR_ATTACHMENT14 = 0x8cee
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT14 = GL_COLOR_ATTACHMENT14,

  /**
   * COLOR_ATTACHMENT15 = 0x8cef
   *
   * [Draw buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#draw_buffers)
   */
  COLOR_ATTACHMENT15 = GL_COLOR_ATTACHMENT15,

  /**
   * SAMPLER_3D = 0x8b5f
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  SAMPLER_3D = GL_SAMPLER_3D,

  /**
   * SAMPLER_2D_SHADOW = 0x8b62
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  SAMPLER_2D_SHADOW = GL_SAMPLER_2D_SHADOW,

  /**
   * SAMPLER_2D_ARRAY = 0x8dc1
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  SAMPLER_2D_ARRAY = GL_SAMPLER_2D_ARRAY,

  /**
   * SAMPLER_2D_ARRAY_SHADOW = 0x8dc4
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  SAMPLER_2D_ARRAY_SHADOW = GL_SAMPLER_2D_ARRAY_SHADOW,

  /**
   * SAMPLER_CUBE_SHADOW = 0x8dc5
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  SAMPLER_CUBE_SHADOW = GL_SAMPLER_CUBE_SHADOW,

  /**
   * INT_SAMPLER_2D = 0x8dca
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  INT_SAMPLER_2D = GL_INT_SAMPLER_2D,

  /**
   * INT_SAMPLER_3D = 0x8dcb
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  INT_SAMPLER_3D = GL_INT_SAMPLER_3D,

  /**
   * INT_SAMPLER_CUBE = 0x8dcc
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  INT_SAMPLER_CUBE = GL_INT_SAMPLER_CUBE,

  /**
   * INT_SAMPLER_2D_ARRAY = 0x8dcf
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  INT_SAMPLER_2D_ARRAY = GL_INT_SAMPLER_2D_ARRAY,

  /**
   * UNSIGNED_INT_SAMPLER_2D = 0x8dd2
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  UNSIGNED_INT_SAMPLER_2D = GL_UNSIGNED_INT_SAMPLER_2D,

  /**
   * UNSIGNED_INT_SAMPLER_3D = 0x8dd3
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  UNSIGNED_INT_SAMPLER_3D = GL_UNSIGNED_INT_SAMPLER_3D,

  /**
   * UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  UNSIGNED_INT_SAMPLER_CUBE = GL_UNSIGNED_INT_SAMPLER_CUBE,

  /**
   * UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  UNSIGNED_INT_SAMPLER_2D_ARRAY = GL_UNSIGNED_INT_SAMPLER_2D_ARRAY,

  /**
   * MAX_SAMPLES = 0x8d57
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  MAX_SAMPLES = GL_MAX_SAMPLES,

  /**
   * SAMPLER_BINDING = 0x8919
   *
   * [Samplers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#samplers)
   */
  SAMPLER_BINDING = GL_SAMPLER_BINDING,

  /**
   * PIXEL_PACK_BUFFER = 0x88eb
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  PIXEL_PACK_BUFFER = GL_PIXEL_PACK_BUFFER,

  /**
   * PIXEL_UNPACK_BUFFER = 0x88ec
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  PIXEL_UNPACK_BUFFER = GL_PIXEL_UNPACK_BUFFER,

  /**
   * PIXEL_PACK_BUFFER_BINDING = 0x88ed
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  PIXEL_PACK_BUFFER_BINDING = GL_PIXEL_PACK_BUFFER_BINDING,

  /**
   * PIXEL_UNPACK_BUFFER_BINDING = 0x88ef
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  PIXEL_UNPACK_BUFFER_BINDING = GL_PIXEL_UNPACK_BUFFER_BINDING,

  /**
   * COPY_READ_BUFFER = 0x8f36
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  COPY_READ_BUFFER = GL_COPY_READ_BUFFER,

  /**
   * COPY_WRITE_BUFFER = 0x8f37
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  COPY_WRITE_BUFFER = GL_COPY_WRITE_BUFFER,

  /**
   * COPY_READ_BUFFER_BINDING = 0x8f36
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  COPY_READ_BUFFER_BINDING = GL_COPY_READ_BUFFER_BINDING,

  /**
   * COPY_WRITE_BUFFER_BINDING = 0x8f37
   *
   * [Buffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#buffers_2)
   */
  COPY_WRITE_BUFFER_BINDING = GL_COPY_WRITE_BUFFER_BINDING,

  /**
   * FLOAT_MAT2x3 = 0x8b65
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  FLOAT_MAT2x3 = GL_FLOAT_MAT2x3,

  /**
   * FLOAT_MAT2x4 = 0x8b66
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  FLOAT_MAT2x4 = GL_FLOAT_MAT2x4,

  /**
   * FLOAT_MAT3x2 = 0x8b67
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  FLOAT_MAT3x2 = GL_FLOAT_MAT3x2,

  /**
   * FLOAT_MAT3x4 = 0x8b68
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  FLOAT_MAT3x4 = GL_FLOAT_MAT3x4,

  /**
   * FLOAT_MAT4x2 = 0x8b69
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  FLOAT_MAT4x2 = GL_FLOAT_MAT4x2,

  /**
   * FLOAT_MAT4x3 = 0x8b6a
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  FLOAT_MAT4x3 = GL_FLOAT_MAT4x3,

  /**
   * UNSIGNED_INT_VEC2 = 0x8dc6
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  UNSIGNED_INT_VEC2 = GL_UNSIGNED_INT_VEC2,

  /**
   * UNSIGNED_INT_VEC3 = 0x8dc7
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  UNSIGNED_INT_VEC3 = GL_UNSIGNED_INT_VEC3,

  /**
   * UNSIGNED_INT_VEC4 = 0x8dc8
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  UNSIGNED_INT_VEC4 = GL_UNSIGNED_INT_VEC4,

  /**
   * UNSIGNED_NORMALIZED = 0x8c17
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  UNSIGNED_NORMALIZED = GL_UNSIGNED_NORMALIZED,

  /**
   * SIGNED_NORMALIZED = 0x8f9c
   *
   * [Data types](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#data_types_2)
   */
  SIGNED_NORMALIZED = GL_SIGNED_NORMALIZED,

  /**
   * VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes_2)
   */
  VERTEX_ATTRIB_ARRAY_INTEGER = GL_VERTEX_ATTRIB_ARRAY_INTEGER,

  /**
   * VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe
   *
   * [Vertex attributes](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#vertex_attributes_2)
   */
  VERTEX_ATTRIB_ARRAY_DIVISOR = GL_VERTEX_ATTRIB_ARRAY_DIVISOR,

  /**
   * TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_BUFFER_MODE = GL_TRANSFORM_FEEDBACK_BUFFER_MODE,

  /**
   * MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS,

  /**
   * TRANSFORM_FEEDBACK_VARYINGS = 0x8c83
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_VARYINGS = GL_TRANSFORM_FEEDBACK_VARYINGS,

  /**
   * TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_BUFFER_START = GL_TRANSFORM_FEEDBACK_BUFFER_START,

  /**
   * TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_BUFFER_SIZE = GL_TRANSFORM_FEEDBACK_BUFFER_SIZE,

  /**
   * TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN,

  /**
   * MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS,

  /**
   * MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS,

  /**
   * INTERLEAVED_ATTRIBS = 0x8c8c
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  INTERLEAVED_ATTRIBS = GL_INTERLEAVED_ATTRIBS,

  /**
   * SEPARATE_ATTRIBS = 0x8c8d
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  SEPARATE_ATTRIBS = GL_SEPARATE_ATTRIBS,

  /**
   * TRANSFORM_FEEDBACK_BUFFER = 0x8c8e
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_BUFFER = GL_TRANSFORM_FEEDBACK_BUFFER,

  /**
   * TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_BUFFER_BINDING = GL_TRANSFORM_FEEDBACK_BUFFER_BINDING,

  /**
   * TRANSFORM_FEEDBACK = 0x8e22
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK = GL_TRANSFORM_FEEDBACK,

  /**
   * TRANSFORM_FEEDBACK_PAUSED = 0x8e23
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_PAUSED = GL_TRANSFORM_FEEDBACK_PAUSED,

  /**
   * TRANSFORM_FEEDBACK_ACTIVE = 0x8e24
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_ACTIVE = GL_TRANSFORM_FEEDBACK_ACTIVE,

  /**
   * TRANSFORM_FEEDBACK_BINDING = 0x8e25
   *
   * [Transform feedback](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#transform_feedback)
   */
  TRANSFORM_FEEDBACK_BINDING = GL_TRANSFORM_FEEDBACK_BINDING,

  /**
   * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING,

  /**
   * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE,

  /**
   * FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_RED_SIZE = GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE,

  /**
   * FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE,

  /**
   * FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE,

  /**
   * FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE,

  /**
   * FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE,

  /**
   * FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE,

  /**
   * FRAMEBUFFER_DEFAULT = 0x8218
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_DEFAULT = GL_FRAMEBUFFER_DEFAULT,

  /**
   * DEPTH24_STENCIL8 = 0x88f0
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  DEPTH24_STENCIL8 = GL_DEPTH24_STENCIL8,

  /**
   * DRAW_FRAMEBUFFER_BINDING = 0x8ca6
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  DRAW_FRAMEBUFFER_BINDING = GL_DRAW_FRAMEBUFFER_BINDING,

  /**
   * READ_FRAMEBUFFER = 0x8ca8
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  READ_FRAMEBUFFER = GL_READ_FRAMEBUFFER,

  /**
   * DRAW_FRAMEBUFFER = 0x8ca9
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  DRAW_FRAMEBUFFER = GL_DRAW_FRAMEBUFFER,

  /**
   * READ_FRAMEBUFFER_BINDING = 0x8caa
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  READ_FRAMEBUFFER_BINDING = GL_READ_FRAMEBUFFER_BINDING,

  /**
   * RENDERBUFFER_SAMPLES = 0x8cab
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  RENDERBUFFER_SAMPLES = GL_RENDERBUFFER_SAMPLES,

  /**
   * FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER,

  /**
   * FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56
   *
   * [Framebuffers and renderbuffers](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#framebuffers_and_renderbuffers_2)
   */
  FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE,

  /**
   * UNIFORM_BUFFER = 0x8a11
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BUFFER = GL_UNIFORM_BUFFER,

  /**
   * UNIFORM_BUFFER_BINDING = 0x8a28
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BUFFER_BINDING = GL_UNIFORM_BUFFER_BINDING,

  /**
   * UNIFORM_BUFFER_START = 0x8a29
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BUFFER_START = GL_UNIFORM_BUFFER_START,

  /**
   * UNIFORM_BUFFER_SIZE = 0x8a2a
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BUFFER_SIZE = GL_UNIFORM_BUFFER_SIZE,

  /**
   * MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_VERTEX_UNIFORM_BLOCKS = GL_MAX_VERTEX_UNIFORM_BLOCKS,

  /**
   * MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_FRAGMENT_UNIFORM_BLOCKS = GL_MAX_FRAGMENT_UNIFORM_BLOCKS,

  /**
   * MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_COMBINED_UNIFORM_BLOCKS = GL_MAX_COMBINED_UNIFORM_BLOCKS,

  /**
   * MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_UNIFORM_BUFFER_BINDINGS = GL_MAX_UNIFORM_BUFFER_BINDINGS,

  /**
   * MAX_UNIFORM_BLOCK_SIZE = 0x8a30
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_UNIFORM_BLOCK_SIZE = GL_MAX_UNIFORM_BLOCK_SIZE,

  /**
   * MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS,

  /**
   * MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS,

  /**
   * UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BUFFER_OFFSET_ALIGNMENT = GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT,

  /**
   * ACTIVE_UNIFORM_BLOCKS = 0x8a36
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  ACTIVE_UNIFORM_BLOCKS = GL_ACTIVE_UNIFORM_BLOCKS,

  /**
   * UNIFORM_TYPE = 0x8a37
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_TYPE = GL_UNIFORM_TYPE,

  /**
   * UNIFORM_SIZE = 0x8a38
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_SIZE = GL_UNIFORM_SIZE,

  /**
   * UNIFORM_BLOCK_INDEX = 0x8a3a
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_INDEX = GL_UNIFORM_BLOCK_INDEX,

  /**
   * UNIFORM_OFFSET = 0x8a3b
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_OFFSET = GL_UNIFORM_OFFSET,

  /**
   * UNIFORM_ARRAY_STRIDE = 0x8a3c
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_ARRAY_STRIDE = GL_UNIFORM_ARRAY_STRIDE,

  /**
   * UNIFORM_MATRIX_STRIDE = 0x8a3d
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_MATRIX_STRIDE = GL_UNIFORM_MATRIX_STRIDE,

  /**
   * UNIFORM_IS_ROW_MAJOR = 0x8a3e
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_IS_ROW_MAJOR = GL_UNIFORM_IS_ROW_MAJOR,

  /**
   * UNIFORM_BLOCK_BINDING = 0x8a3f
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_BINDING = GL_UNIFORM_BLOCK_BINDING,

  /**
   * UNIFORM_BLOCK_DATA_SIZE = 0x8a40
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_DATA_SIZE = GL_UNIFORM_BLOCK_DATA_SIZE,

  /**
   * UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_ACTIVE_UNIFORMS = GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS,

  /**
   * UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES,

  /**
   * UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER,

  /**
   * UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46
   *
   * [Uniforms](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#uniforms)
   */
  UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER,

  /**
   * OBJECT_TYPE = 0x9112
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  OBJECT_TYPE = GL_OBJECT_TYPE,

  /**
   * SYNC_CONDITION = 0x9113
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SYNC_CONDITION = GL_SYNC_CONDITION,

  /**
   * SYNC_STATUS = 0x9114
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SYNC_STATUS = GL_SYNC_STATUS,

  /**
   * SYNC_FLAGS = 0x9115
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SYNC_FLAGS = GL_SYNC_FLAGS,

  /**
   * SYNC_FENCE = 0x9116
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SYNC_FENCE = GL_SYNC_FENCE,

  /**
   * SYNC_GPU_COMMANDS_COMPLETE = 0x9117
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SYNC_GPU_COMMANDS_COMPLETE = GL_SYNC_GPU_COMMANDS_COMPLETE,

  /**
   * UNSIGNALED = 0x9118
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  UNSIGNALED = GL_UNSIGNALED,

  /**
   * SIGNALED = 0x9119
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SIGNALED = GL_SIGNALED,

  /**
   * ALREADY_SIGNALED = 0x911a
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  ALREADY_SIGNALED = GL_ALREADY_SIGNALED,

  /**
   * TIMEOUT_EXPIRED = 0x911b
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  TIMEOUT_EXPIRED = GL_TIMEOUT_EXPIRED,

  /**
   * CONDITION_SATISFIED = 0x911c
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  CONDITION_SATISFIED = GL_CONDITION_SATISFIED,

  /**
   * WAIT_FAILED = 0x911d
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  WAIT_FAILED = GL_WAIT_FAILED,

  /**
   * SYNC_FLUSH_COMMANDS_BIT = 0x00000001
   *
   * [Sync objects](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#sync_objects)
   */
  SYNC_FLUSH_COMMANDS_BIT = GL_SYNC_FLUSH_COMMANDS_BIT,

  /**
   * COLOR = 0x1800
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  COLOR = GL_COLOR,

  /**
   * DEPTH = 0x1801
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  DEPTH = GL_DEPTH,

  /**
   * STENCIL = 0x1802
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  STENCIL = GL_STENCIL,

  /**
   * MIN = 0x8007
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  MIN = GL_MIN,

  /**
   * MAX = 0x8008
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  MAX = GL_MAX,

  /**
   * DEPTH_COMPONENT24 = 0x81a6
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  DEPTH_COMPONENT24 = GL_DEPTH_COMPONENT24,

  /**
   * STREAM_READ = 0x88e1
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  STREAM_READ = GL_STREAM_READ,

  /**
   * STREAM_COPY = 0x88e2
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  STREAM_COPY = GL_STREAM_COPY,

  /**
   * STATIC_READ = 0x88e5
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  STATIC_READ = GL_STATIC_READ,

  /**
   * STATIC_COPY = 0x88e6
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  STATIC_COPY = GL_STATIC_COPY,

  /**
   * DYNAMIC_READ = 0x88e9
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  DYNAMIC_READ = GL_DYNAMIC_READ,

  /**
   * DYNAMIC_COPY = 0x88ea
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  DYNAMIC_COPY = GL_DYNAMIC_COPY,

  /**
   * DEPTH_COMPONENT32F = 0x8cac
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  DEPTH_COMPONENT32F = GL_DEPTH_COMPONENT32F,

  /**
   * DEPTH32F_STENCIL8 = 0x8cad
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  DEPTH32F_STENCIL8 = GL_DEPTH32F_STENCIL8,

  /**
   * INVALID_INDEX = 0xffffffff
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  INVALID_INDEX = GL_INVALID_INDEX,

  /**
   * TIMEOUT_IGNORED = -1
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  TIMEOUT_IGNORED = GL_TIMEOUT_IGNORED,

  /**
   * MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247
   *
   * [Miscellaneous constants](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#miscellaneous_constants)
   */
  MAX_CLIENT_WAIT_TIMEOUT_WEBGL = GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL,

  /**
   * VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe
   *
   * Describes the frequency divisor used for instanced rendering.
   *
   * [ANGLE_instanced_arrays](https://developer.mozilla.org//en-US/docs/Web/API/ANGLE_instanced_arrays)
   */
  VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE,

  /**
   * UNMASKED_VENDOR_WEBGL = 0x9245
   *
   * Passed to getParameter to get the vendor string of the graphics driver.
   *
   * [WEBGL_debug_renderer_info](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_debug_renderer_info)
   */
  UNMASKED_VENDOR_WEBGL = GL_UNMASKED_VENDOR_WEBGL,

  /**
   * UNMASKED_RENDERER_WEBGL = 0x9246
   *
   * Passed to getParameter to get the renderer string of the graphics driver.
   *
   * [WEBGL_debug_renderer_info](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_debug_renderer_info)
   */
  UNMASKED_RENDERER_WEBGL = GL_UNMASKED_RENDERER_WEBGL,

  /**
   * MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff
   *
   * Returns the maximum available anisotropy.
   *
   * [EXT_texture_filter_anisotropic](https://developer.mozilla.org//en-US/docs/Web/API/EXT_texture_filter_anisotropic)
   */
  MAX_TEXTURE_MAX_ANISOTROPY_EXT = GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT,

  /**
   * TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe
   *
   * Passed to texParameter to set the desired maximum anisotropy for a texture.
   *
   * [EXT_texture_filter_anisotropic](https://developer.mozilla.org//en-US/docs/Web/API/EXT_texture_filter_anisotropic)
   */
  TEXTURE_MAX_ANISOTROPY_EXT = GL_TEXTURE_MAX_ANISOTROPY_EXT,

  /**
   * COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0
   *
   * A DXT1-compressed image in an RGB image format.
   *
   * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
   */
  COMPRESSED_RGB_S3TC_DXT1_EXT = GL_COMPRESSED_RGB_S3TC_DXT1_EXT,

  /**
   * COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1
   *
   * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
   *
   * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
   */
  COMPRESSED_RGBA_S3TC_DXT1_EXT = GL_COMPRESSED_RGBA_S3TC_DXT1_EXT,

  /**
   * COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2
   *
   * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
   *
   * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
   */
  COMPRESSED_RGBA_S3TC_DXT3_EXT = GL_COMPRESSED_RGBA_S3TC_DXT3_EXT,

  /**
   * COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3
   *
   * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.
   *
   * [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_s3tc)
   */
  COMPRESSED_RGBA_S3TC_DXT5_EXT = GL_COMPRESSED_RGBA_S3TC_DXT5_EXT,

  /**
   * COMPRESSED_R11_EAC = 0x9270
   *
   * One-channel (red) unsigned format compression.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_R11_EAC = GL_COMPRESSED_R11_EAC,

  /**
   * COMPRESSED_SIGNED_R11_EAC = 0x9271
   *
   * One-channel (red) signed format compression.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_SIGNED_R11_EAC = GL_COMPRESSED_SIGNED_R11_EAC,

  /**
   * COMPRESSED_RG11_EAC = 0x9272
   *
   * Two-channel (red and green) unsigned format compression.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_RG11_EAC = GL_COMPRESSED_RG11_EAC,

  /**
   * COMPRESSED_SIGNED_RG11_EAC = 0x9273
   *
   * Two-channel (red and green) signed format compression.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_SIGNED_RG11_EAC = GL_COMPRESSED_SIGNED_RG11_EAC,

  /**
   * COMPRESSED_RGB8_ETC2 = 0x9274
   *
   * Compresses RBG8 data with no alpha channel.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_RGB8_ETC2 = GL_COMPRESSED_RGB8_ETC2,

  /**
   * COMPRESSED_RGBA8_ETC2_EAC = 0x9275
   *
   * Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_RGBA8_ETC2_EAC = GL_COMPRESSED_RGBA8_ETC2_EAC,

  /**
   * COMPRESSED_SRGB8_ETC2 = 0x9276
   *
   * Compresses sRBG8 data with no alpha channel.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_SRGB8_ETC2 = GL_COMPRESSED_SRGB8_ETC2,

  /**
   * COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277
   *
   * Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,

  /**
   * COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278
   *
   * Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,

  /**
   * COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279
   *
   * Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
   *
   * [WEBGL_compressed_texture_etc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc)
   */
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,

  /**
   * COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00
   *
   * RGB compression in 4-bit mode. One block for each 4×4 pixels.
   *
   * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
   */
  COMPRESSED_RGB_PVRTC_4BPPV1_IMG = GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG,

  /**
   * COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02
   *
   * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
   *
   * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
   */
  COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,

  /**
   * COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01
   *
   * RGB compression in 2-bit mode. One block for each 8×4 pixels.
   *
   * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
   */
  COMPRESSED_RGB_PVRTC_2BPPV1_IMG = GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG,

  /**
   * COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03
   *
   * RGBA compression in 2-bit mode. One block for each 8×4 pixe
   *
   * [WEBGL_compressed_texture_pvrtc](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_pvrtc)
   */
  COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,

  /**
   * COMPRESSED_RGB_ETC1_WEBGL = 0x8d64
   *
   * Compresses 24-bit RGB data with no alpha channel.
   *
   * [WEBGL_compressed_texture_etc1](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_compressed_texture_etc1)
   */
  COMPRESSED_RGB_ETC1_WEBGL = GL_COMPRESSED_RGB_ETC1_WEBGL,

  /**
   * UNSIGNED_INT_24_8_WEBGL = 0x84fa
   *
   * Unsigned integer type for 24-bit depth texture data.
   *
   * [WEBGL_depth_texture](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_depth_texture)
   */
  UNSIGNED_INT_24_8_WEBGL = GL_UNSIGNED_INT_24_8_WEBGL,

  /**
   * HALF_FLOAT_OES = 0x8d61
   *
   * Half floating-point type (16-bit).
   *
   * [OES_texture_half_float](https://developer.mozilla.org//en-US/docs/Web/API/OES_texture_half_float)
   */
  HALF_FLOAT_OES = GL_HALF_FLOAT_OES,

  /**
   * RGBA32F_EXT = 0x8814
   *
   * RGBA 32-bit floating-point color-renderable format.
   *
   * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
   */
  RGBA32F_EXT = GL_RGBA32F_EXT,

  /**
   * RGB32F_EXT = 0x8815
   *
   * RGB 32-bit floating-point color-renderable format.
   *
   * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
   */
  RGB32F_EXT = GL_RGB32F_EXT,

  /**
   * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211
   *
   * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
   */
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT,

  /**
   * UNSIGNED_NORMALIZED_EXT = 0x8c17
   *
   * [WEBGL_color_buffer_float](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_color_buffer_float)
   */
  UNSIGNED_NORMALIZED_EXT = GL_UNSIGNED_NORMALIZED_EXT,

  /**
   * MIN_EXT = 0x8007
   *
   * Produces the minimum color components of the source and destination colors.
   *
   * [EXT_blend_minmax](https://developer.mozilla.org//en-US/docs/Web/API/EXT_blend_minmax)
   */
  MIN_EXT = GL_MIN_EXT,

  /**
   * MAX_EXT = 0x8008
   *
   * Produces the maximum color components of the source and destination colors.
   *
   * [EXT_blend_minmax](https://developer.mozilla.org//en-US/docs/Web/API/EXT_blend_minmax)
   */
  MAX_EXT = GL_MAX_EXT,

  /**
   * SRGB_EXT = 0x8c40
   *
   * Unsized sRGB format that leaves the precision up to the driver.
   *
   * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
   */
  SRGB_EXT = GL_SRGB_EXT,

  /**
   * SRGB_ALPHA_EXT = 0x8c42
   *
   * Unsized sRGB format with unsized alpha component.
   *
   * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
   */
  SRGB_ALPHA_EXT = GL_SRGB_ALPHA_EXT,

  /**
   * SRGB8_ALPHA8_EXT = 0x8c43
   *
   * Sized (8-bit) sRGB and alpha formats.
   *
   * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
   */
  SRGB8_ALPHA8_EXT = GL_SRGB8_ALPHA8_EXT,

  /**
   * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210
   *
   * Returns the framebuffer color encoding.
   *
   * [EXT_sRGB](https://developer.mozilla.org//en-US/docs/Web/API/EXT_sRGB)
   */
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT,

  /**
   * FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b
   *
   * Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.
   *
   * [OES_standard_derivatives](https://developer.mozilla.org//en-US/docs/Web/API/OES_standard_derivatives)
   */
  FRAGMENT_SHADER_DERIVATIVE_HINT_OES = GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES,

  /**
   * COLOR_ATTACHMENT0_WEBGL = 0x8ce0
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT0_WEBGL = GL_COLOR_ATTACHMENT0_WEBGL,

  /**
   * COLOR_ATTACHMENT1_WEBGL = 0x8ce1
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT1_WEBGL = GL_COLOR_ATTACHMENT1_WEBGL,

  /**
   * COLOR_ATTACHMENT2_WEBGL = 0x8ce2
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT2_WEBGL = GL_COLOR_ATTACHMENT2_WEBGL,

  /**
   * COLOR_ATTACHMENT3_WEBGL = 0x8ce3
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT3_WEBGL = GL_COLOR_ATTACHMENT3_WEBGL,

  /**
   * COLOR_ATTACHMENT4_WEBGL = 0x8ce4
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT4_WEBGL = GL_COLOR_ATTACHMENT4_WEBGL,

  /**
   * COLOR_ATTACHMENT5_WEBGL = 0x8ce5
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT5_WEBGL = GL_COLOR_ATTACHMENT5_WEBGL,

  /**
   * COLOR_ATTACHMENT6_WEBGL = 0x8ce6
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT6_WEBGL = GL_COLOR_ATTACHMENT6_WEBGL,

  /**
   * COLOR_ATTACHMENT7_WEBGL = 0x8ce7
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT7_WEBGL = GL_COLOR_ATTACHMENT7_WEBGL,

  /**
   * COLOR_ATTACHMENT8_WEBGL = 0x8ce8
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT8_WEBGL = GL_COLOR_ATTACHMENT8_WEBGL,

  /**
   * COLOR_ATTACHMENT9_WEBGL = 0x8ce9
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT9_WEBGL = GL_COLOR_ATTACHMENT9_WEBGL,

  /**
   * COLOR_ATTACHMENT10_WEBGL = 0x8cea
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT10_WEBGL = GL_COLOR_ATTACHMENT10_WEBGL,

  /**
   * COLOR_ATTACHMENT11_WEBGL = 0x8ceb
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT11_WEBGL = GL_COLOR_ATTACHMENT11_WEBGL,

  /**
   * COLOR_ATTACHMENT12_WEBGL = 0x8cec
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT12_WEBGL = GL_COLOR_ATTACHMENT12_WEBGL,

  /**
   * COLOR_ATTACHMENT13_WEBGL = 0x8ced
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT13_WEBGL = GL_COLOR_ATTACHMENT13_WEBGL,

  /**
   * COLOR_ATTACHMENT14_WEBGL = 0x8cee
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT14_WEBGL = GL_COLOR_ATTACHMENT14_WEBGL,

  /**
   * COLOR_ATTACHMENT15_WEBGL = 0x8cef
   *
   * Framebuffer color attachment point
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  COLOR_ATTACHMENT15_WEBGL = GL_COLOR_ATTACHMENT15_WEBGL,

  /**
   * DRAW_BUFFER0_WEBGL = 0x8825
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER0_WEBGL = GL_DRAW_BUFFER0_WEBGL,

  /**
   * DRAW_BUFFER1_WEBGL = 0x8826
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER1_WEBGL = GL_DRAW_BUFFER1_WEBGL,

  /**
   * DRAW_BUFFER2_WEBGL = 0x8827
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER2_WEBGL = GL_DRAW_BUFFER2_WEBGL,

  /**
   * DRAW_BUFFER3_WEBGL = 0x8828
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER3_WEBGL = GL_DRAW_BUFFER3_WEBGL,

  /**
   * DRAW_BUFFER4_WEBGL = 0x8829
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER4_WEBGL = GL_DRAW_BUFFER4_WEBGL,

  /**
   * DRAW_BUFFER5_WEBGL = 0x882a
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER5_WEBGL = GL_DRAW_BUFFER5_WEBGL,

  /**
   * DRAW_BUFFER6_WEBGL = 0x882b
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER6_WEBGL = GL_DRAW_BUFFER6_WEBGL,

  /**
   * DRAW_BUFFER7_WEBGL = 0x882c
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER7_WEBGL = GL_DRAW_BUFFER7_WEBGL,

  /**
   * DRAW_BUFFER8_WEBGL = 0x882d
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER8_WEBGL = GL_DRAW_BUFFER8_WEBGL,

  /**
   * DRAW_BUFFER9_WEBGL = 0x882e
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER9_WEBGL = GL_DRAW_BUFFER9_WEBGL,

  /**
   * DRAW_BUFFER10_WEBGL = 0x882f
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER10_WEBGL = GL_DRAW_BUFFER10_WEBGL,

  /**
   * DRAW_BUFFER11_WEBGL = 0x8830
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER11_WEBGL = GL_DRAW_BUFFER11_WEBGL,

  /**
   * DRAW_BUFFER12_WEBGL = 0x8831
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER12_WEBGL = GL_DRAW_BUFFER12_WEBGL,

  /**
   * DRAW_BUFFER13_WEBGL = 0x8832
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER13_WEBGL = GL_DRAW_BUFFER13_WEBGL,

  /**
   * DRAW_BUFFER14_WEBGL = 0x8833
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER14_WEBGL = GL_DRAW_BUFFER14_WEBGL,

  /**
   * DRAW_BUFFER15_WEBGL = 0x8834
   *
   * Draw buffer
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  DRAW_BUFFER15_WEBGL = GL_DRAW_BUFFER15_WEBGL,

  /**
   * MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf
   *
   * Maximum number of framebuffer color attachment points
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  MAX_COLOR_ATTACHMENTS_WEBGL = GL_MAX_COLOR_ATTACHMENTS_WEBGL,

  /**
   * MAX_DRAW_BUFFERS_WEBGL = 0x8824
   *
   * Maximum number of draw buffers
   *
   * [WEBGL_draw_buffers](https://developer.mozilla.org//en-US/docs/Web/API/WEBGL_draw_buffers)
   */
  MAX_DRAW_BUFFERS_WEBGL = GL_MAX_DRAW_BUFFERS_WEBGL,

  /**
   * VERTEX_ARRAY_BINDING_OES = 0x85b5
   *
   * The bound vertex array object (VAO).
   *
   * [OES_vertex_array_object](https://developer.mozilla.org//en-US/docs/Web/API/OES_vertex_array_object)
   */
  VERTEX_ARRAY_BINDING_OES = GL_VERTEX_ARRAY_BINDING_OES,

  /**
   * QUERY_COUNTER_BITS_EXT = 0x8864
   *
   * The number of bits used to hold the query result for the given target.
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  QUERY_COUNTER_BITS_EXT = GL_QUERY_COUNTER_BITS_EXT,

  /**
   * CURRENT_QUERY_EXT = 0x8865
   *
   * The currently active query.
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  CURRENT_QUERY_EXT = GL_CURRENT_QUERY_EXT,

  /**
   * QUERY_RESULT_EXT = 0x8866
   *
   * The query result.
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  QUERY_RESULT_EXT = GL_QUERY_RESULT_EXT,

  /**
   * QUERY_RESULT_AVAILABLE_EXT = 0x8867
   *
   * A Boolean indicating whether or not a query result is available.
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  QUERY_RESULT_AVAILABLE_EXT = GL_QUERY_RESULT_AVAILABLE_EXT,

  /**
   * TIME_ELAPSED_EXT = 0x88bf
   *
   * Elapsed time (in nanoseconds).
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  TIME_ELAPSED_EXT = GL_TIME_ELAPSED_EXT,

  /**
   * TIMESTAMP_EXT = 0x8e28
   *
   * The current time.
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  TIMESTAMP_EXT = GL_TIMESTAMP_EXT,

  /**
   * GPU_DISJOINT_EXT = 0x8fbb
   *
   * A Boolean indicating whether or not the GPU performed any disjoint operation.
   *
   * [EXT_disjoint_timer_query](https://developer.mozilla.org//en-US/docs/Web/API/EXT_disjoint_timer_query)
   */
  GPU_DISJOINT_EXT = GL_GPU_DISJOINT_EXT
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
