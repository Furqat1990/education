let startDateStr = "2023-Mar-13";
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

function getCourseWeekDays(startCourseDate, courseMonths) {
    let convertToDate = new Date(startCourseDate);
    let year = convertToDate.getFullYear();
    let month = convertToDate.getMonth();
    let day = convertToDate.getDate();

    

    for (let i = 1; i <= courseMonths; i++) {
        let courseDays = new Date(year, month + 1, 0).getDate();
        month++;

        if (month > 11) { 
            month = 0;
            year++;
        }

        for (let j = day; j <= courseDays; j++) {
            console.log(new Date(year, month, j));
        }
        day = 1;
    }
}

getCourseWeekDays("2023-Mar-13", 17);