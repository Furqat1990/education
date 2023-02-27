// let startDate = new Date(startDateStr);
    
// for (let i = 1; i <= 14; i++) { 
//     let year = startDate.getFullYear();
//     let month = startDate.getMonth() + i;
//     let days = new Date(year, month, 0).getDate();

//     if (month > 12) {
//         startDate = new Date("2024-01-01");
//     }
// }

let time = new Date("2024-09-01");
let d = 1;

for (let i = 1; i <= 20; i++) {
    let year = time.getFullYear();
    let month = time.getMonth() + d++;
    let day = new Date(year, month, 0).getDate();

    console.log(year, month);

    if (month > 11) {
        time = new Date(`${++year}-01-01`);
        d = 1
    }

    // console.log(year, month, day);    
}

