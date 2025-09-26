'use client';
"use strict";
exports.__esModule = true;
var fonts_1 = require("@/app/ui/fonts");
var outline_1 = require("@heroicons/react/24/outline");
var solid_1 = require("@heroicons/react/20/solid");
var button_1 = require("@/app/ui/button");
var react_1 = require("react");
var actions_1 = require("@/app/lib/actions");
var navigation_1 = require("next/navigation");
function LoginForm() {
    var searchParams = navigation_1.useSearchParams();
    var callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    var _a = react_1.useActionState(actions_1.authenticate, undefined), errorMessage = _a[0], formAction = _a[1], isPending = _a[2];
    return (React.createElement("form", { action: formAction, className: "space-y-3" },
        React.createElement("div", { className: "flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8" },
            React.createElement("h1", { className: fonts_1.lusitana.className + " mb-3 text-2xl" }, "Please log in to continue."),
            React.createElement("div", { className: "w-full" },
                React.createElement("div", null,
                    React.createElement("label", { className: "mb-3 mt-5 block text-xs font-medium text-gray-900", htmlFor: "email" }, "Email"),
                    React.createElement("div", { className: "relative" },
                        React.createElement("input", { className: "peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500", id: "email", type: "email", name: "email", placeholder: "Enter your email address", required: true }),
                        React.createElement(outline_1.AtSymbolIcon, { className: "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" }))),
                React.createElement("div", { className: "mt-4" },
                    React.createElement("label", { className: "mb-3 mt-5 block text-xs font-medium text-gray-900", htmlFor: "password" }, "Password"),
                    React.createElement("div", { className: "relative" },
                        React.createElement("input", { className: "peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500", id: "password", type: "password", name: "password", placeholder: "Enter password", required: true, minLength: 6 }),
                        React.createElement(outline_1.KeyIcon, { className: "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" })))),
            React.createElement("input", { type: "hidden", name: "redirectTo", value: callbackUrl }),
            React.createElement(button_1.Button, { className: "mt-4 w-full", "aria-disabled": isPending },
                "Log in ",
                React.createElement(solid_1.ArrowRightIcon, { className: "ml-auto h-5 w-5 text-gray-50" })),
            React.createElement("div", { className: "flex h-8 items-end space-x-1", "aria-live": "polite", "aria-atomic": "true" }, errorMessage && (React.createElement(React.Fragment, null,
                React.createElement(outline_1.ExclamationCircleIcon, { className: "h-5 w-5 text-red-500" }),
                React.createElement("p", { className: "text-sm text-red-500" }, errorMessage)))))));
}
exports["default"] = LoginForm;
