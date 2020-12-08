/****
 * 获取全局对象
 * https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global.js
 *
 * 在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过 window、self 或者 frames 取到全局对象，但是在 Web Workers 中，只有 self 可以。在 Node.js 中，它们都无法获取，必须使用 global
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
 */

var check = function (it) {
    return it && it.Math === Math && it;
};

var getGlobal = function () {
    return (
        check(typeof globalThis === "object" && globalThis) ||
        check(typeof window === "object" && window) ||
        check(typeof self === "object" && self) ||
        check(typeof global === "object" && global) ||
        (function () {
            return this;
        })() ||
        Function("return this")()
    );
};
