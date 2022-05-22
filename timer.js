const refDataValue = document.querySelector('[data-value="days"]');
const refHoursValue = document.querySelector('[data-value="hours"]');
const refMinsValue = document.querySelector('[data-value="mins"]');
const refSecsValue = document.querySelector('[data-value="secs"]');

const timer = {
    start() {
        const deadline = new Date(2022, 5, 22);

        setInterval(() => {
            const currentTime = new Date();
            
            const deltaTime =  deadline - currentTime;

            updateClockface(deltaTime);
        }, 1000);
    },
};

timer.start();


function updateClockface(time) {
   
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));


    refDataValue.textContent = `${days}`;
    refHoursValue.textContent = `${hours}`;
    refMinsValue.textContent = `${mins}`;
    refSecsValue.textContent = `${secs}`;

}

function pad(value) {
    return String(value).padStart(2, '0');
}
