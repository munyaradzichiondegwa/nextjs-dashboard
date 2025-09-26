"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var sidenav_1 = require("@/app/ui/dashboard/sidenav");
exports.metadata = {
    title: {
        template: '%s | Acme Dashboard',
        "default": 'Acme Dashboard'
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
};
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "flex h-screen flex-col md:flex-row md:overflow-hidden" },
        React.createElement("div", { className: "w-full flex-none md:w-64" },
            React.createElement(sidenav_1["default"], null)),
        React.createElement("div", { className: "flex-grow p-6 md:overflow-y-auto md:p-12" }, children)));
}
exports["default"] = Layout;
