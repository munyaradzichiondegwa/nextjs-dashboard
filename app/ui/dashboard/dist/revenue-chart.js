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
var utils_1 = require("@/app/lib/utils");
var outline_1 = require("@heroicons/react/24/outline");
var fonts_1 = require("@/app/ui/fonts");
var data_1 = require("@/app/lib/data");
// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/
function RevenueChart() {
    return __awaiter(this, void 0, void 0, function () {
        var revenue, chartHeight, _a, yAxisLabels, topLabel;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, data_1.fetchRevenue()];
                case 1:
                    revenue = _b.sent();
                    chartHeight = 350;
                    if (!revenue || revenue.length === 0) {
                        return [2 /*return*/, React.createElement("p", { className: "mt-4 text-gray-400" }, "No data available.")];
                    }
                    _a = utils_1.generateYAxis(revenue), yAxisLabels = _a.yAxisLabels, topLabel = _a.topLabel;
                    return [2 /*return*/, (React.createElement("div", { className: "w-full md:col-span-4" },
                            React.createElement("h2", { className: fonts_1.lusitana.className + " mb-4 text-xl md:text-2xl" }, "Recent Revenue"),
                            React.createElement("div", { className: "rounded-xl bg-gray-50 p-4" },
                                React.createElement("div", { className: "sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4" },
                                    React.createElement("div", { className: "mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex", style: { height: chartHeight + "px" } }, yAxisLabels.map(function (label) { return (React.createElement("p", { key: label }, label)); })),
                                    revenue.map(function (month) {
                                        var barHeight = topLabel ? (chartHeight / topLabel) * month.revenue : 0;
                                        return (React.createElement("div", { key: month.month, className: "flex flex-col items-center gap-2" },
                                            React.createElement("div", { className: "w-full rounded-md bg-blue-300", style: { height: barHeight + "px" }, title: month.month + ": $" + month.revenue }),
                                            React.createElement("p", { className: "-rotate-90 text-sm text-gray-400 sm:rotate-0" }, month.month)));
                                    })),
                                React.createElement("div", { className: "flex items-center pb-2 pt-6" },
                                    React.createElement(outline_1.CalendarIcon, { className: "h-5 w-5 text-gray-500" }),
                                    React.createElement("h3", { className: "ml-2 text-sm text-gray-500" }, "Last 12 months")))))];
            }
        });
    });
}
exports["default"] = RevenueChart;
