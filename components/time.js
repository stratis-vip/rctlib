"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeComponent = void 0;
const react_1 = __importDefault(require("react"));
const DAY = 24 * 3600;
const MONTH = 30 * DAY;
const YEAR = 12 * MONTH;
const DESCRIPTIONS = { years: 'Χρ', months: 'Μν', days: 'Ημ' };
exports.TimeComponent = (props) => {
    const { secs, descriptions } = props;
    return react_1.default.createElement("div", null, numberToTime(secs, descriptions));
};
const numberToTime = (s, dscrptns) => {
    if (s === undefined || s === 0) {
        return "00:00:00";
    }
    const descriptions = dscrptns ? dscrptns : DESCRIPTIONS;
    const years = Math.floor(s / YEAR);
    s = s - YEAR * years;
    const months = Math.floor(s / MONTH);
    s = s - MONTH * months;
    const days = Math.floor(s / DAY);
    s = s - DAY * days;
    const hours = Math.floor(s / 3600);
    s = s - 3600 * hours;
    const mins = Math.floor(s / 60);
    s = s - 60 * mins;
    let daysString = "";
    if (years > 0) {
        daysString += `${years} ${descriptions.years} `;
    }
    if (months > 0) {
        daysString += `${months} ${descriptions.months} `;
    }
    if (days > 0) {
        daysString += `${days} ${descriptions.days} `;
    }
    return `${daysString} ${hours
        .toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${Math.floor(s).toString().padStart(2, "0")}`;
};
//# sourceMappingURL=time.js.map