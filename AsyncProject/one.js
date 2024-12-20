const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    
    return color;
};

let intervalId;

const startChangingColor = function() {
    // Only create new interval if one doesn't exist
    if(!intervalId) {
        intervalId = setInterval(function() {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor); // Fixed this line