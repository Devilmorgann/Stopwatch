
let timerDisplay = document.getElementsByClassName("timerdisplay")[0];

let start = document.getElementById(`Start`);
let stop = document.getElementById(`Stop`);
let reset = document.getElementById(`Reset`);

console.log(start,stop,reset);

let msec = 0; 
let sec = 0;
let min = 0;



let timerId = null;

start.addEventListener('click', function (params) {
   if (timerId != null) {
    clearInterval(timerId);
   }
   timerId = setInterval(startTimer,10)
})




stop.addEventListener('click', function (params) {
   clearInterval(timerId)
 })
;
 reset.addEventListener('click', function (params) {
    clearInterval(timerId)
    timerDisplay.innerHTML=`00:00:00`;
  })



function startTimer() {
    msec++;
    if(msec == 100){
        msec = 0;

        sec++;
        if(sec == 60){
            min++;
        }
    }

let msecString = msec < 10 ?  `0${msec}`:msec;
let secString = sec < 10 ?  `0${sec}`:sec;
let minString = min < 10 ?  `0${min}`:min;

timerDisplay.innerHTML = `${minString}:${secString}:${msecString}`;
}
