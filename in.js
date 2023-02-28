let startDateStr = "13-Mar-2023";
let nameMonth = [
    'January',   'February',
    'March',     'April',
    'May',       'June',
    'July',      'August',
    'September', 'October',
    'November',  'December'
]
let weekdays = [
    'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 
    'Friday', 'Saturday', 'Sunday'
];

function createDatesShedule(startDateStr, week, period) {
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
            let weekDay = new Date(year, month, j).getDay();

            if (weekDay === 6) continue;

            if (week === 'pair') {
                if (weekDay % 2 === 0) {
                    dayArr.push(j);
                }
            } else {
                if (weekDay % 2 === 1) {
                    dayArr.push(j);
                }
            }
        }
        attendanceObj.year = year;
        attendanceObj.month = nameMonth[month - 1];
        attendanceObj.days = dayArr;
       
        attendanceArr.push(attendanceObj);

        startDay = 1;
    }

    return attendanceArr;
}

let result = createDatesShedule(startDateStr, 'odd', 12);

console.log(result);