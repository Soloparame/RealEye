"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./css/style.css");
var google_1 = require("next/font/google");
var local_1 = require("next/font/local");
var header_1 = require("@/components/ui/header");
var inter = google_1.Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});
var nacelle = local_1["default"]({
    src: [
        {
            path: "../public/fonts/nacelle-regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/nacelle-italic.woff2",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/fonts/nacelle-semibold.woff2",
            weight: "600",
            style: "normal"
        },
        {
            path: "../public/fonts/nacelle-semibolditalic.woff2",
            weight: "600",
            style: "italic"
        },
    ],
    variable: "--font-nacelle",
    display: "swap"
});
exports.metadata = {
    title: "RealEye - AI-Powered Deepfake Detection",
    description: "Advanced AI-based system for detecting deepfakes and synthetic videos. Protect yourself from misinformation and verify video authenticity."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.variable + " " + nacelle.variable + " bg-gray-950 font-inter text-base text-gray-200 antialiased" },
            React.createElement("div", { className: "flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip" },
                React.createElement(header_1["default"], null),
                children))));
}
exports["default"] = RootLayout;
