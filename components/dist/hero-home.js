"use strict";
exports.__esModule = true;
var hero_image_01_jpg_1 = require("@/public/images/hero-image-01.jpg");
var modal_video_1 = require("@/components/modal-video");
function HeroHome() {
    return (React.createElement("section", null,
        React.createElement("div", { className: "mx-auto max-w-6xl px-4 sm:px-6" },
            React.createElement("div", { className: "py-12 md:py-20" },
                React.createElement("div", { className: "pb-12 text-center md:pb-20" },
                    React.createElement("h1", { className: "animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl", "data-aos": "fade-up" }, "Detect Deepfakes with AI-Powered Technology"),
                    React.createElement("div", { className: "mx-auto max-w-3xl" },
                        React.createElement("p", { className: "mb-8 text-xl text-indigo-200/65", "data-aos": "fade-up", "data-aos-delay": 200 }, "RealEye uses advanced deep learning to automatically detect AI-generated and manipulated videos. Upload any video to verify its authenticity and protect yourself from misinformation."),
                        React.createElement("div", { className: "mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center" },
                            React.createElement("div", { "data-aos": "fade-up", "data-aos-delay": 400 },
                                React.createElement("a", { className: "btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto", href: "#0" },
                                    React.createElement("span", { className: "relative inline-flex items-center" },
                                        "Detect Video Now",
                                        React.createElement("span", { className: "ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5" }, "->")))),
                            React.createElement("div", { "data-aos": "fade-up", "data-aos-delay": 600 },
                                React.createElement("a", { className: "btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto", href: "#0" }, "Learn How It Works"))))),
                React.createElement("div", { className: "mx-auto max-w-4xl", "data-aos": "fade-up", "data-aos-delay": 400 },
                    React.createElement(modal_video_1["default"], { thumb: hero_image_01_jpg_1["default"], thumbWidth: 880, thumbHeight: 495, thumbAlt: "Modal video thumbnail", video: "videos//video.mp4", videoWidth: 1920, videoHeight: 1080 }))))));
}
exports["default"] = HeroHome;
