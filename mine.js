let startDateStr = "2023-03-13";
let startDate = new Date(startDateStr);
let lengthMonth = 4;
let dates = [];

for (let i = 1; i <= lengthMonth; i++) {
    let year = startDate.getFullYear();
    let month = startDate.getMonth() + i;
    let days = new Date(year, month, 0).getDate();

    for (let j = 1; j <= days; j++) {
        console.log(j, new Date(year, month, j).toLocaleString('default', { month: 'long' }));
        // dates.push({
        //     name: new Date(year, month, j).toLocaleString('default', { month: 'long' }),
        //     day: j
        // });
    }
}

// console.log(dates);