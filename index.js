// Set Interval() is a function() that takes two arguments: a fun and a time in millisecond.
// 1000 millisecond = 1 seconds

// let count = 0;
// let myInterval = setInterval (()=>{
// console.log(count);
// count++;
// },1000);

// function stopMyInterval ( ) {
//     clearInterval (myInterval);
// }
// // stopMyInterval();

let minutes = 24;
let seconds = 59;

function start() {
    interval = setInterval(()=> {
        if(seconds ==0){
            seconds = 59;
            minutes--;
        }
        seconds--;
    
        if(minutes==0 && seconds==0){
            stop();
            alert("Time's up");
        }
        displayTime(minutes,seconds);
     }, 1000);
}
function stop() {
clearInterval(interval);
}
function reset(){
    stop();
    minutes = 24;
    seconds = 59;
    displayTime(minutes,seconds);
}
function displayTime(minutes,seconds) {
document.getElementById("timer-set").innerHTML = `<h1>${minutes} : ${seconds}</h2>`;
    }

 
