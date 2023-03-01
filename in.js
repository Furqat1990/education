let nameMonth = [
    'January',   'February',
    'March',     'April',
    'May',       'June',
    'July',      'August',
    'September', 'October',
    'November',  'December'
]

let weekdays = [
    'Sunday', 'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 
    'Friday', 'Saturday'
];

function getCourseWeekDays(startCourseDate, courseMonths, week) {
    let convertToDate = new Date(startCourseDate);
    let year = convertToDate.getFullYear();
    let month = convertToDate.getMonth();
    let day = convertToDate.getDate();
    
    let courseWeekDay;
    
    let courseShedule = [];
    let tempDays = [];
    let tempWeekNames = [];

    for (let i = 1; i <= courseMonths; i++) {
        let courseDays = new Date(year, month + 1, 0).getDate();

        tempDays = [];
        tempWeekNames = [];

        for (let j = day; j <= courseDays; j++) {
            courseWeekDay = new Date(year, month, j).getDay();

            if (courseWeekDay === 0) continue;

            if (week === 'odd')
                if (courseWeekDay % 2 === 1) {
                    tempDays.push(j);
                    tempWeekNames.push(weekdays[courseWeekDay]);                
                }

            if (week === 'pair')
                if (courseWeekDay % 2 === 0) {
                    tempDays.push(j);
                    tempWeekNames.push(weekdays[courseWeekDay]);                
                }

        }

        courseShedule.push({
            year,
            month:nameMonth[month],
            weeks:tempWeekNames,
            days:tempDays
        });

        day = 1;
        month++;

        if (month > 11) { 
            month = 0;
            year++;
        }
    }

    return courseShedule;
}

let result = getCourseWeekDays("2023-Jan-23", 17, 'odd');

console.log(result);