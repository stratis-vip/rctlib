"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerComponent = void 0;
const react_1 = __importDefault(require("react"));
exports.TimerComponent = (props) => {
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
//# sourceMappingURL=timer.js.map