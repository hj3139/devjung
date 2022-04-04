"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Button.less");
var Button = function (props) {
    var _a = props.type, type = _a === void 0 ? 'default' : _a, _b = props.width, width = _b === void 0 ? 100 : _b, _c = props.height, height = _c === void 0 ? 50 : _c, children = props.children, style = props.style, rest = __rest(props, ["type", "width", "height", "children", "style"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "hj-".concat(type, "-button-wrapper"), style: __assign({ width: width, height: height }, style) }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: 'button', style: __assign({ width: width, height: height }, style) }, rest, { children: children }), void 0) }), void 0));
};
exports.default = Button;
//# sourceMappingURL=index.js.map