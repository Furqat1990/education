// Start date of the period (YYYY-MM-DD format)
const startDateStr = '2023-03-01';
const startDate = new Date(startDateStr);

// Length of the period in months
const lengthInMonths = 2;

// Array to hold the dates
const dates = [];

// Loop through the months and days and add each date to the array
for (let i = 0; i < lengthInMonths; i++) {
  const year = startDate.getFullYear();
  const month = startDate.getMonth() + i;

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Loop through the days of the month and add each date to the array
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    dates.push(date);
  }
}

let str = "";

date.forEach((dat, index) => {
    str = "";

    
});
