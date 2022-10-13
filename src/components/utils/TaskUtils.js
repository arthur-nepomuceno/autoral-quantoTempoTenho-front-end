function calculateTimeDifference(days, hours, limit){

    const limitTimeStamp = +new Date(limit);
    const thisMomentTimeStamp = +new Date();
    const estimativeTimeStamp = convertToMilliseconds(days, hours)

    const timeDifference = (limitTimeStamp - thisMomentTimeStamp)

    if(timeDifference > 2 * estimativeTimeStamp){
        return {bgColor: '#03A62C', color: '#000000'}
    }

    if(timeDifference > estimativeTimeStamp && timeDifference <= 2 * estimativeTimeStamp){
        return {bgColor: '#F2CB05', color: '#000000'};
    }

    if(timeDifference < estimativeTimeStamp && timeDifference > 0){
        return {bgColor: '#F20707', color: '#FFFFFF'};
    }

    if(timeDifference < 0){
        return {bgColor: '#04050D', color: '#FFFFFF'}
    }
}

function convertToMilliseconds(days, hours){
    return (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000);
}

export {
    calculateTimeDifference,
}