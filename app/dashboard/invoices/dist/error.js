'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Error(_a) {
    var error = _a.error, reset = _a.reset;
    react_1.useEffect(function () {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);
    return (React.createElement("main", { className: "flex h-full flex-col items-center justify-center" },
        React.createElement("h2", { className: "text-center" }, "Something went wrong!"),
        React.createElement("button", { className: "mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400", onClick: 
            // Attempt to recover by trying to re-render the invoices route
            function () { return reset(); } }, "Try again")));
}
exports["default"] = Error;
