// Start date of the period (YYYY-MM-DD format)
const startDateStr = '2022-03-01';
const startDate = new Date(startDateStr);

// Length of the period in months
const lengthInMonths = 4;

// Array to hold the month names
const monthNames = [];

// Loop through the months and add their names to the array
for (let i = 0; i < lengthInMonths; i++) {
  const date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
  const monthName = date.toDateString(); //date.toLocaleString('default', { month: 'long' });
  monthNames.push(monthName);
}

// Log the array of month names
console.log(monthNames);
