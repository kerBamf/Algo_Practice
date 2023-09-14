function poisonDuration(timeSeries, duration) {
    let timePoisoned = 0
    for (let i = 0; i < timeSeries.length; i++) {
        if (timeSeries[i+1] - timeSeries[i] >= duration) {
            timePoisoned += duration
        } else if (i == timeSeries.length-1) {
            timePoisoned += duration
        } else {
            timePoisoned += timeSeries[i+1] - timeSeries[i]
        }
    }
    return timePoisoned
}

console.log(poisonDuration([1, 2], 2))