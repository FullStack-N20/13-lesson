function getDateFromBankDays(bankDays) {
    let date = new Date(2025, 0, 1);
    let daysCount = 0;

    while (daysCount < bankDays) {
        date.setDate(date.getDate() + 1);
        let dayOfWeek = date.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            daysCount++;
        }
    }

    return date;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let bankDays = parseInt(prompt("Enter bank working days (example: 60):"));
let resultDate = getDateFromBankDays(bankDays);

console.log(`${bankDays} bank working days correspond to ${days[resultDate.getDay()]}, ${months[resultDate.getMonth()]} ${resultDate.getDate()}, ${resultDate.getFullYear()}`);