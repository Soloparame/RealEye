"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var logo_svg_1 = require("@/public/images/logo.svg");
function Logo() {
    return (React.createElement(link_1["default"], { href: "/", className: "inline-flex shrink-0", "aria-label": "RealEye" },
        React.createElement(image_1["default"], { src: logo_svg_1["default"], alt: "RealEye Logo", width: 32, height: 32 })));
}
exports["default"] = Logo;
