"use strict";
exports.__esModule = true;
exports.DeleteInvoice = exports.UpdateInvoice = exports.CreateInvoice = void 0;
var link_1 = require("next/link");
var outline_1 = require("@heroicons/react/24/outline");
var actions_1 = require("@/app/lib/actions");
function CreateInvoice() {
    return (React.createElement(link_1["default"], { href: "/dashboard/invoices/create", className: "flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" },
        React.createElement("span", { className: "hidden md:block" }, "Create Invoice"),
        React.createElement(outline_1.PlusIcon, { className: "h-5 md:ml-4" })));
}
exports.CreateInvoice = CreateInvoice;
function UpdateInvoice(_a) {
    var id = _a.id;
    return (React.createElement(link_1["default"], { href: "/dashboard/invoices", className: "rounded-md border p-2 hover:bg-gray-100" },
        React.createElement(outline_1.PencilIcon, { className: "w-5" })));
}
exports.UpdateInvoice = UpdateInvoice;
function DeleteInvoice(_a) {
    var id = _a.id;
    var deleteInvoiceWithId = actions_1.deleteInvoice.bind(null, id);
    return (React.createElement("form", { action: deleteInvoiceWithId },
        React.createElement("button", { type: "submit", className: "rounded-md border p-2 hover:bg-gray-100" },
            React.createElement("span", { className: "sr-only" }, "Delete"),
            React.createElement(outline_1.TrashIcon, { className: "w-5" }))));
}
exports.DeleteInvoice = DeleteInvoice;
