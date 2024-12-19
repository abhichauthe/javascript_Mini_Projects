const clock = document.getElementById('clock');
// Ensure the element with ID 'clock' exists in your HTML
setInterval(function () {
    let date = new Date(); // Correct casing
    clock.innerHTML = date.toLocaleTimeString(); // Correct method name
}, 1000);
