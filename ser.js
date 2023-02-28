// import moment from 'moment';

let startDateStr = "09-Feb-2023"; //"2023-11-13";

function createDateShedule(startDateStr, period) {
    let startDate = new Date(startDateStr);
    let d = 0;
    let startDay = startDate.getDate();
    let residualDays = startDay;
    let month;
    let year;
    let days;
    
    for (let i = 1; i <= period; i++) {
        if (month > 11) {
            startDate = new Date(`${++year}-01-01`);
            d = 0;
        }

        year = startDate.getFullYear();
        month = startDate.getMonth() + ++d;
        days = new Date(year, month, 0).getDate();

        if (i === period) days = residualDays;

        for (let j = startDay; j <= days; j++) {
            console.log(j, month, year);
        }

        startDay = 1;
    }
}

createDateShedule(startDateStr, 8);