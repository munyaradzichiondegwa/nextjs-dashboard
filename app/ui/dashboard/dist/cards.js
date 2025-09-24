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
exports.Card = void 0;
// /app/ui/dashboard/cards.tsx
var outline_1 = require("@heroicons/react/24/outline");
var fonts_1 = require("@/app/ui/fonts");
var data_1 = require("@/app/lib/data");
// Map card types to icons
var iconMap = {
    collected: outline_1.BanknotesIcon,
    customers: outline_1.UserGroupIcon,
    pending: outline_1.ClockIcon,
    invoices: outline_1.InboxIcon
};
// Wrapper component to fetch all card data and render cards
function CardWrapper() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, data_1.fetchCardData()];
                case 1:
                    _a = _b.sent(), numberOfInvoices = _a.numberOfInvoices, numberOfCustomers = _a.numberOfCustomers, totalPaidInvoices = _a.totalPaidInvoices, totalPendingInvoices = _a.totalPendingInvoices;
                    return [2 /*return*/, (React.createElement(React.Fragment, null,
                            React.createElement(Card, { title: "Collected", value: totalPaidInvoices, type: "collected" }),
                            React.createElement(Card, { title: "Pending", value: totalPendingInvoices, type: "pending" }),
                            React.createElement(Card, { title: "Total Invoices", value: numberOfInvoices, type: "invoices" }),
                            React.createElement(Card, { title: "Total Customers", value: numberOfCustomers, type: "customers" })))];
            }
        });
    });
}
exports["default"] = CardWrapper;
// Individual Card component
function Card(_a) {
    var title = _a.title, value = _a.value, type = _a.type;
    var Icon = iconMap[type];
    return (React.createElement("div", { className: "rounded-xl bg-gray-50 p-2 shadow-sm" },
        React.createElement("div", { className: "flex items-center p-4" },
            Icon && React.createElement(Icon, { className: "h-5 w-5 text-gray-700" }),
            React.createElement("h3", { className: "ml-2 text-sm font-medium" }, title)),
        React.createElement("p", { className: fonts_1.lusitana.className + " truncate rounded-xl bg-white px-4 py-8 text-center text-2xl" }, value)));
}
exports.Card = Card;
