function calculateWorkTime(startTime , endTime) {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    if (startHours > endHours || (startHours === endHours && startMinutes > endMinutes)) {
        throw new Error("End time cannot be before start time");
    }

    let totalMinutes = (endHours - startHours) * 60 + (endMinutes - startMinutes);
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    return `Working hours are ${hours} hours and ${minutes} minutes`;
}

try {
    console.log(calculateWorkTime("09:00", "17:30"));
    console.log(calculateWorkTime("10:00", "09:30"));
} catch (error) {
    console.log(error.message);
}
