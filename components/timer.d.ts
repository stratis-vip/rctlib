import React from "react";
interface TimerProps {
    on: boolean;
    action: any;
    interval?: number;
}
declare const TimerComponent: React.FC<TimerProps>;
export default TimerComponent;
