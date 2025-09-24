"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var outline_1 = require("@heroicons/react/24/outline");
function NotFound() {
    return (React.createElement("main", { className: "flex h-full flex-col items-center justify-center gap-2" },
        React.createElement(outline_1.FaceFrownIcon, { className: "w-10 text-gray-400" }),
        React.createElement("h2", { className: "text-xl font-semibold" }, "404 Not Found"),
        React.createElement("p", null, "Could not find the requested invoice."),
        React.createElement(link_1["default"], { href: "/dashboard/invoices", className: "mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400" }, "Go Back")));
}
exports["default"] = NotFound;
