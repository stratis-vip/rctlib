"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TimerComponent = (props) => {
    const { on, action, interval } = props;
    react_1.default.useEffect(() => {
        let timer = null;
        if (on) {
            timer = setInterval(action, interval ? interval : 1000);
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    });
    return null;
};
exports.default = TimerComponent;
//# sourceMappingURL=timer.js.map