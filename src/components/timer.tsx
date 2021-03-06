import React from "react";

export interface TimerProps {
  on: boolean;
  action: any;
  interval?: number;
}

export const TimerComponent: React.FC<TimerProps> = (props) => {
  const { on, action, interval } = props;

  React.useEffect(() => {
    let timer: number | null = null;
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
