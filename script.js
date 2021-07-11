let taskbar = document.getElementById("startbutton");
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px";
    }
    else {
        startmenu.style.bottom = "50px";
    }
});

let explorericon = document.getElementsByClassName("explorericon")[0];
let explorer = document.getElementById("explorer");

explorericon.addEventListener("click", () => {
    console.log("clicked");
    if (explorer.style.margin == "-100%") {
        explorer.style.margin = "5%";
    }
    else {
        explorer.style.margin = "-100%";
    }
});

function clock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clockFormat = 'AM'

    let week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";

    let weekday = week[date.getDay()];
    
    let day = date.getUTCDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();

    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        clockFormat = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;

    let finalTime = `${hours}:${minutes}:${seconds} ${clockFormat}<br>${weekday}<br>${day}-${month}-${year}`;
    time = document.getElementsByClassName("time")[0];
    time.innerHTML = finalTime;

    setInterval(clock, 1000);
};

clock();
