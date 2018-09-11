"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var isa_1 = require("./isa");
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        var _this = _super.call(this) || this;
        console.log("Saving Account Constructor");
        return _this;
    }
    SavingAccount.prototype.output = function () {
        console.log(" I am a OUtput Method");
    };
    SavingAccount.prototype.computeROI = function () {
        console.log("Override compute ROI from Interface");
    };
    SavingAccount.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(" I am a SavingAccount Print...");
    };
    return SavingAccount;
}(isa_1.Account));
//var ac:Account = new Account();
var sa = new SavingAccount();
sa.print();
sa.computeROI();
sa.output();
