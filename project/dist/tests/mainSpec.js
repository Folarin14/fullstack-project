"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("../main"));
// it('expect buildPerson to return Your Person is Rory', () => {
//     expect(buildPerson('Rory')).toEqual('Your Person is Rory')
// })
it('expect myFunc(5) to equal 25', function () {
    expect((0, main_1.default)(5)).toEqual(25);
});
