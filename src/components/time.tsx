import React from "react";
const DAY = 24 * 3600;
const MONTH = 30 * DAY;
const YEAR = 12 * MONTH;
const DESCRIPTIONS = {years:'Χρ', months:'Μν', days: 'Ημ'}

export interface Description {
  years:string
  months:string
  days: string
}

export const TimeComponent: React.FC<{ secs: number, descriptions?:Description }> = (props) => {
  const { secs, descriptions } = props;

  return <div>{numberToTime(secs, descriptions )}</div>
};

const numberToTime = (s: number, dscrptns?:Description) => {
  if (s === undefined || s === 0) {
    return "00:00:00";
  }
  const descriptions = dscrptns ? dscrptns : DESCRIPTIONS
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
