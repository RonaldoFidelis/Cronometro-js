let display_time = document.querySelector('.time');
const btn_start = document.querySelector('.btn-start');
const btn_pause = document.querySelector('.btn-pause');
const btn_clear = document.querySelector('.btn-clear');

let sec = 0;
let min = 0;
let hour = 0;
let time = 0;

function getTime (){
    time = setInterval(()=>{
        sec +=1;

        if(sec >= 60){
            sec = 0;
            min += 1;
        }
        if(min >= 60){
            min = 0;
            hour += 1
        }

        if(min < 10 && hour < 10){
            display_time.textContent = `0${hour}:0${min}:${sec}`;
        }else if (min > 10 && hour < 10){
            display_time.textContent = `0${hour}:${min}:${sec}`;
        }else if (min < 10 && hour > 10){
            display_time.textContent = `${hour}:0${min}:${sec}`;
        }else{
            display_time.textContent = `${hour}:${min}:${sec}`;
        }
        
    },1000)
}

function startTime () {
    clearInterval(time);
    getTime();
};

function pauseTime(){
    clearInterval(time);
};

function clearTime(){
    clearInterval(time);
    display_time.textContent = "00:00:00";
    sec = 0;
    min = 0;
    hour = 0;
};

btn_start.addEventListener("click", startTime);

btn_pause.addEventListener("click", pauseTime);

btn_clear.addEventListener("click", clearTime);