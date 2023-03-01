const date = new Date(2023, 2, 29); // January is month 0
const weekday = date.getDay(); // returns 2 for Tuesday
const day = date.getDate();

const weekNames = [
    'Yakshanba', 'Dushanba', 'Seshanba',
    'Chorshanba', 'Payshanba', 'Juma',
    'Shanba'
]

console.log(day, weekNames[weekday]);