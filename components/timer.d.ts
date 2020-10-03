import React from "react";
export interface TimerProps {
    on: boolean;
    action: any;
    interval?: number;
}
export declare const TimerComponent: React.FC<TimerProps>;
