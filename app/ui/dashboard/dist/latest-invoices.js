"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var clsx_1 = require("clsx");
var image_1 = require("next/image");
var fonts_1 = require("@/app/ui/fonts");
// Temporary: you can fetch or import this data instead
var latestInvoices = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        amount: '$250.00',
        image_url: '/default-avatar.png'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        amount: '$180.00',
        image_url: '/default-avatar.png'
    },
];
function LatestInvoices() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (React.createElement("div", { className: "flex w-full flex-col md:col-span-4" },
                    React.createElement("h2", { className: fonts_1.lusitana.className + " mb-4 text-xl md:text-2xl" }, "Latest Invoices"),
                    React.createElement("div", { className: "flex grow flex-col justify-between rounded-xl bg-gray-50 p-4" },
                        React.createElement("div", { className: "bg-white px-6" }, latestInvoices.map(function (invoice, i) { return (React.createElement("div", { key: invoice.id, className: clsx_1["default"]('flex flex-row items-center justify-between py-4', { 'border-t': i !== 0 }) },
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement(image_1["default"], { src: invoice.image_url, alt: invoice.name + "'s profile picture", className: "mr-4 rounded-full", width: 32, height: 32 }),
                                React.createElement("div", { className: "min-w-0" },
                                    React.createElement("p", { className: "truncate text-sm font-semibold md:text-base" }, invoice.name),
                                    React.createElement("p", { className: "hidden text-sm text-gray-500 sm:block" }, invoice.email))),
                            React.createElement("p", { className: fonts_1.lusitana.className + " truncate text-sm font-medium md:text-base" }, invoice.amount))); })),
                        React.createElement("div", { className: "flex items-center pb-2 pt-6" },
                            React.createElement(outline_1.ArrowPathIcon, { className: "h-5 w-5 text-gray-500" }),
                            React.createElement("h3", { className: "ml-2 text-sm text-gray-500 " }, "Updated just now")))))];
        });
    });
}
exports["default"] = LatestInvoices;
