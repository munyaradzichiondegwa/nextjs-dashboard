'use client';
"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var link_1 = require("next/link");
var button_1 = require("@/app/ui/button");
var actions_1 = require("@/app/lib/actions");
function EditInvoiceForm(_a) {
    var invoice = _a.invoice, customers = _a.customers;
    // Bind the invoice ID to the Server Action
    var updateInvoiceWithId = actions_1.updateInvoice.bind(null, invoice.id);
    return (React.createElement("form", { action: updateInvoiceWithId },
        React.createElement("div", { className: "rounded-md bg-gray-50 p-4 md:p-6" },
            React.createElement("div", { className: "mb-4" },
                React.createElement("label", { htmlFor: "customer", className: "mb-2 block text-sm font-medium" }, "Choose customer"),
                React.createElement("div", { className: "relative" },
                    React.createElement("select", { id: "customer", name: "customerId", className: "peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500", defaultValue: invoice.customer_id },
                        React.createElement("option", { value: "", disabled: true }, "Select a customer"),
                        customers.map(function (customer) { return (React.createElement("option", { key: customer.id, value: customer.id }, customer.name)); })),
                    React.createElement(outline_1.UserCircleIcon, { className: "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" }))),
            React.createElement("div", { className: "mb-4" },
                React.createElement("label", { htmlFor: "amount", className: "mb-2 block text-sm font-medium" }, "Choose an amount"),
                React.createElement("div", { className: "relative mt-2 rounded-md" },
                    React.createElement("div", { className: "relative" },
                        React.createElement("input", { id: "amount", name: "amount", type: "number", step: "0.01", defaultValue: invoice.amount, placeholder: "Enter USD amount", className: "peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" }),
                        React.createElement(outline_1.CurrencyDollarIcon, { className: "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" })))),
            React.createElement("fieldset", null,
                React.createElement("legend", { className: "mb-2 block text-sm font-medium" }, "Set the invoice status"),
                React.createElement("div", { className: "rounded-md border border-gray-200 bg-white px-[14px] py-3" },
                    React.createElement("div", { className: "flex gap-4" },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("input", { id: "pending", name: "status", type: "radio", value: "pending", defaultChecked: invoice.status === 'pending', className: "h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2" }),
                            React.createElement("label", { htmlFor: "pending", className: "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600" },
                                "Pending ",
                                React.createElement(outline_1.ClockIcon, { className: "h-4 w-4" }))),
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("input", { id: "paid", name: "status", type: "radio", value: "paid", defaultChecked: invoice.status === 'paid', className: "h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2" }),
                            React.createElement("label", { htmlFor: "paid", className: "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white" },
                                "Paid ",
                                React.createElement(outline_1.CheckIcon, { className: "h-4 w-4" }))))))),
        React.createElement("div", { className: "mt-6 flex justify-end gap-4" },
            React.createElement(link_1["default"], { href: "/dashboard/invoices", className: "flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" }, "Cancel"),
            React.createElement(button_1.Button, { type: "submit" }, "Edit Invoice"))));
}
exports["default"] = EditInvoiceForm;
