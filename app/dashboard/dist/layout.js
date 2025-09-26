"use strict";
exports.__esModule = true;
exports.experimental_ppr = exports.metadata = void 0;
require("@/app/ui/global.css");
var fonts_1 = require("@/app/ui/fonts");
var sidenav_1 = require("@/app/ui/dashboard/sidenav");
exports.metadata = {
    title: 'Acme Dashboard',
    description: 'The official Next.js Course Dashboard, built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
};
exports.experimental_ppr = true;
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: fonts_1.inter.className + " antialiased" },
            React.createElement("div", { className: "flex h-screen" },
                React.createElement(sidenav_1["default"], null),
                React.createElement("main", { className: "flex-grow overflow-auto" }, children)))));
}
exports["default"] = RootLayout;
