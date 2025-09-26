'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var outline_1 = require("@heroicons/react/24/outline");
var button_1 = require("@/app/ui/button");
var actions_1 = require("@/app/lib/actions");
var react_1 = require("react");
function EditInvoiceForm(_a) {
    var _b, _c, _d, _e, _f, _g;
    var invoice = _a.invoice, customers = _a.customers;
    var initialState = { message: null, errors: {} };
    // Bind invoice id so updateInvoice automatically receives it
    var updateInvoiceWithId = actions_1.updateInvoice.bind(null, invoice.id);
    // useActionState provides [state, formAction] for form submission and validation
    var _h = react_1.useActionState(updateInvoiceWithId, initialState), state = _h[0], formAction = _h[1];
    return (React.createElement("form", { action: formAction },
        React.createElement("div", { className: "rounded-md bg-gray-50 p-4 md:p-6" },
            state.message && (React.createElement("div", { className: "mb-4 rounded-md bg-red-100 p-2 text-sm text-red-700" }, state.message)),
            React.createElement("div", { className: "mb-4" },
                React.createElement("label", { htmlFor: "customer", className: "mb-2 block text-sm font-medium" }, "Choose customer"),
                React.createElement("div", { className: "relative" },
                    React.createElement("select", { id: "customer", name: "customerId", required: true, defaultValue: invoice.customerId, className: "peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" },
                        React.createElement("option", { value: "", disabled: true }, "Select a customer"),
                        customers.map(function (customer) { return (React.createElement("option", { key: customer.id, value: customer.id }, customer.name)); })),
                    React.createElement(outline_1.UserCircleIcon, { className: "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" })), (_c = (_b = state.errors) === null || _b === void 0 ? void 0 : _b.customerId) === null || _c === void 0 ? void 0 :
                _c.map(function (error) { return (React.createElement("p", { key: error, className: "mt-1 text-xs text-red-600" }, error)); })),
            React.createElement("div", { className: "mb-4" },
                React.createElement("label", { htmlFor: "amount", className: "mb-2 block text-sm font-medium" }, "Enter amount"),
                React.createElement("div", { className: "relative mt-2 rounded-md" },
                    React.createElement("input", { id: "amount", name: "amount", type: "number", step: "0.01", min: 0.01, required: true, defaultValue: invoice.amount / 100, className: "peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" }),
                    React.createElement(outline_1.CurrencyDollarIcon, { className: "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" })), (_e = (_d = state.errors) === null || _d === void 0 ? void 0 : _d.amount) === null || _e === void 0 ? void 0 :
                _e.map(function (error) { return (React.createElement("p", { key: error, className: "mt-1 text-xs text-red-600" }, error)); })),
            React.createElement("fieldset", { className: "mb-4" },
                React.createElement("legend", { className: "mb-2 block text-sm font-medium" }, "Set the invoice status"),
                React.createElement("div", { className: "rounded-md border border-gray-200 bg-white px-[14px] py-3" },
                    React.createElement("div", { className: "flex gap-4" }, ['pending', 'paid'].map(function (status) { return (React.createElement("div", { className: "flex items-center", key: status },
                        React.createElement("input", { id: status, name: "status", type: "radio", value: status, required: true, defaultChecked: invoice.status === status, className: "h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2" }),
                        React.createElement("label", { htmlFor: status, className: "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium " + (status === 'paid'
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-gray-600') },
                            status === 'paid' ? 'Paid' : 'Pending',
                            status === 'paid' ? React.createElement(outline_1.CheckIcon, { className: "h-4 w-4" }) : React.createElement(outline_1.ClockIcon, { className: "h-4 w-4" })))); }))), (_g = (_f = state.errors) === null || _f === void 0 ? void 0 : _f.status) === null || _g === void 0 ? void 0 :
                _g.map(function (error) { return (React.createElement("p", { key: error, className: "mt-1 text-xs text-red-600" }, error)); }))),
        React.createElement("div", { className: "flex justify-end gap-4 mt-4" },
            React.createElement(link_1["default"], { href: "/dashboard/invoices", className: "flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200" }, "Cancel"),
            React.createElement(button_1.Button, { type: "submit" }, "Update Invoice"))));
}
exports["default"] = EditInvoiceForm;
