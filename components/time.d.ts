import React from "react";
export interface Description {
    years: string;
    months: string;
    days: string;
}
export declare const TimeComponent: React.FC<{
    secs: number;
    descriptions?: Description;
}>;
