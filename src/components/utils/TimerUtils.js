import dayjs from "dayjs";

export function getRemainingTime(timestamp) {
    const timestampDayjs = dayjs(timestamp);
    const nowDayjs = dayjs();

    const seconds = getRemainingSeconds(nowDayjs, timestampDayjs);
    const minutes = getRemainingMinutes(nowDayjs, timestampDayjs);
    const hours = getRemainingHours(nowDayjs, timestampDayjs);
    const days = getRemainingDays(nowDayjs, timestampDayjs);

    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        return {days: '00', hours: '00', minutes: '00', seconds: '00'};
    }

    return {days, hours, minutes, seconds};
    
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2)
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2)
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2)
}

function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString()
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString
}