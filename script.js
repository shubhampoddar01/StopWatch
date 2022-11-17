
let sec =0;
let min =0;
let hour =0;

let secString = document.getElementById("sec");
let minString = document.getElementById("min");
let hourString = document.getElementById("hour");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop"); 
let resetBtn = document.getElementById("reset");

let interval;

function stopwatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        secString.innerHTML=sec;
    }

    if(min==60){
        min=0;
        hour++;
        minString.innerHTML=min;
    }

    if(sec<10)
    {
        secString.innerHTML='0'+ sec;
    }else{
        secString.innerHTML=sec;
    }

    if(min<10)
    {
        minString.innerHTML='0'+ min;
    }else{
        minString.innerHTML=min;
    }
     
    if(hour<10)
    {
        hourString.innerHTML='0'+ hour;
    }else{
        hourString.innerHTML=hour;
    }

}

function startTimer(){
    clearInterval(interval);
    interval=setInterval(stopwatch, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    sec=0;
    min=0;
    hour=0;

    secString.innerHTML="00";
    minString.innerHTML="00";
    hourString.innerHTML="00";
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTimer);