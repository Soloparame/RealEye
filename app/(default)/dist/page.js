"use strict";
exports.__esModule = true;
exports.metadata = void 0;
exports.metadata = {
    title: "RealEye - Advanced Deepfake Detection",
    description: "Detect AI-generated videos with cutting-edge deep learning technology. Verify video authenticity and combat misinformation."
};
var page_illustration_1 = require("@/components/page-illustration");
var hero_home_1 = require("@/components/hero-home");
var workflows_1 = require("@/components/workflows");
var features_1 = require("@/components/features");
var testimonials_1 = require("@/components/testimonials");
var cta_1 = require("@/components/cta");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(page_illustration_1["default"], null),
        React.createElement(hero_home_1["default"], null),
        React.createElement(workflows_1["default"], null),
        React.createElement(features_1["default"], null),
        React.createElement(testimonials_1["default"], null),
        React.createElement(cta_1["default"], null)));
}
exports["default"] = Home;
