// import moment from 'moment';

let startDateStr = "2023-11-13";

function createDateShedule(startDateStr, period) {
    let startDate = new Date(startDateStr);
    let d = 0;
    let startDay = startDate.getDate();
    let residualDays = startDay;
    let month;
    let year;
    let days;
    let dayArr = [];
    let attendanceObj = {};
    let attendanceArr = [];
    
    for (let i = 1; i <= period; i++) {
        if (month > 11) {
            startDate = new Date(`${++year}-01-01`);
            d = 0;
        }

        year = startDate.getFullYear();
        month = startDate.getMonth() + ++d;
        days = new Date(year, month, 0).getDate();

        if (i === period) days = residualDays;
        
        dayArr = [];
        attendanceObj = {};

        for (let j = startDay; j <= days; j++) {
            dayArr.push(j);
        }

        attendanceObj.days = dayArr;
        attendanceObj.month = month;
        attendanceObj.year = year;

        attendanceArr.push(attendanceObj);

        startDay = 1;
    }

    return attendanceArr;
}

let result = createDateShedule(startDateStr, 8);

console.log(result);