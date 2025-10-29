"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var image_1 = require("next/image");
var secondary_illustration_svg_1 = require("@/public/images/secondary-illustration.svg");
function ModalVideo(_a) {
    var thumb = _a.thumb, thumbWidth = _a.thumbWidth, thumbHeight = _a.thumbHeight, thumbAlt = _a.thumbAlt, video = _a.video, videoWidth = _a.videoWidth, videoHeight = _a.videoHeight;
    var _b = react_1.useState(false), modalOpen = _b[0], setModalOpen = _b[1];
    var videoRef = react_1.useRef(null);
    return (React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2", "aria-hidden": "true" },
            React.createElement(image_1["default"], { className: "md:max-w-none", src: secondary_illustration_svg_1["default"], width: 1165, height: 1012, alt: "Secondary illustration" })),
        React.createElement("button", { className: "group relative flex items-center justify-center rounded-3xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200", onClick: function () {
                setModalOpen(true);
            }, "aria-label": "Watch the video", "data-aos": "fade-up", "data-aos-delay": 200 },
            React.createElement("div", { className: "absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-indigo-500/20 p-[1px]" },
                React.createElement("div", { className: "h-full w-full rounded-3xl bg-gray-950" },
                    React.createElement("div", { className: "absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }))),
            React.createElement("figure", { className: "relative overflow-hidden rounded-3xl shadow-2xl shadow-indigo-500/10 transition-shadow group-hover:shadow-indigo-500/20" },
                React.createElement(image_1["default"], { className: "opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80", src: thumb, width: thumbWidth, height: thumbHeight, priority: true, alt: thumbAlt })),
            React.createElement("span", { className: "pointer-events-none absolute" },
                React.createElement("div", { className: "rounded-full border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm p-4 shadow-xl shadow-black/50 transition-transform group-hover:scale-110 group-hover:border-indigo-500/50" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none" },
                        React.createElement("path", { fill: "url(#pla)", fillRule: "evenodd", d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm4-12-6-4v8l6-4Z", clipRule: "evenodd" }),
                        React.createElement("defs", null,
                            React.createElement("linearGradient", { id: "pla", x1: 12, x2: 12, y1: 0, y2: 24, gradientUnits: "userSpaceOnUse" },
                                React.createElement("stop", { stopColor: "#6366F1" }),
                                React.createElement("stop", { offset: 1, stopColor: "#8B5CF6" }))))),
                React.createElement("span", { className: "absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-900/80 px-4 py-2 text-sm font-medium leading-tight text-gray-200 backdrop-blur-sm shadow-lg shadow-black/50" },
                    "Watch Demo",
                    React.createElement("span", { className: "text-gray-500" }, " - "),
                    "3:47"))),
        React.createElement(react_2.Dialog, { initialFocus: videoRef, open: modalOpen, onClose: function () { return setModalOpen(false); } },
            React.createElement(react_2.DialogBackdrop, { transition: true, className: "fixed inset-0 z-99999 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0" }),
            React.createElement("div", { className: "fixed inset-0 z-99999 flex px-4 py-6 sm:px-6" },
                React.createElement("div", { className: "mx-auto flex h-full max-w-6xl items-center" },
                    React.createElement(react_2.DialogPanel, { transition: true, className: "aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0" },
                        React.createElement("video", { ref: videoRef, width: videoWidth, height: videoHeight, loop: true, controls: true },
                            React.createElement("source", { src: video, type: "video/mp4" }),
                            "Your browser does not support the video tag.")))))));
}
exports["default"] = ModalVideo;
