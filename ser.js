import moment from 'moment';

// Start date of the period (YYYY-MM-DD format)
let startDateStr = "2023-03-21";
let startDate = new Date(startDateStr);

// Length of the period in months
let lengthInMonths = 12;

// Array to hold the dates
let days = [];
let obj = {};
let d = startDate.getDate();
let nnn = [];

// Loop through the months and days and add each date to the array
for (let i = 1; i <= lengthInMonths; i++) {

    let year = startDate.getFullYear();
    let month = startDate.getMonth() + i;

    if (i > 12) {
        i = 1;
        year += 1;
        month = 1
    }

    // Get the number of days in the current month
    let daysInMonth = new Date(year, month, 0).getDate();
    days = [];
    obj = {};

    // Loop through the days of the month and add each date to the array
    for (let day = d; day <= daysInMonth; day++) {
        let dateArr = moment(`${year}-${month}-${day}`).format('LLLL').replace(/,/g, '').split(' ');
        days.push(dateArr[2]);
        obj.month = dateArr[1];
        obj.year = dateArr[3];
    }

    obj.days = days;
    nnn.push(obj);

    d = 1;
}

console.log(nnn);

// dates.forEach(dat => {
//     console.log(dat.getDate(), dat.toLocaleString('default', { month: 'long' }));
// });
