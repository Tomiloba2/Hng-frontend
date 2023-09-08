const date = new Date()

function getCurrentDate() {
    const currentDate = date.toLocaleDateString(undefined, {
        weekday: `long`
    })
    const displayDate = document.getElementById('day')
    displayDate.textContent = currentDate
    console.log(displayDate);
}
function getCurrentTime() {
    const date = new Date()
    const currentTime = date.getUTCMilliseconds()
    const displayDate = document.getElementById('time')
    displayDate.textContent = currentTime
    console.log(displayDate);
}
getCurrentDate()
setInterval(getCurrentTime,1000)