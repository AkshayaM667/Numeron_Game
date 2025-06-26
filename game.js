var greaterThan = document.getElementById('greater-than');
var equalTo = document.getElementById('equal-to');
var lesserThan = document.getElementById('lesser-than');

 var number1box= document.getElementById('number1');
 var number2box= document.getElementById('number2');

 var timer = document.getElementById('timer');

 var score =0;
 var time =5;
 
 generateNumber();

 greaterThan.onclick = ()=>{
    if(number1>number2){
        score++;
        reseTime(timerId);
    }
    else{
         location.href="./gameover.html?score="+score;


    }
   generateNumber();
 };
 equalTo.onclick = ()=>{
    if(number1==number2){
        score++;
         reseTime(timerId);
    }
    else{
        location.href="./gameover.html?score="+score;


    }
   generateNumber();
};
lesserThan.onclick = ()=>{
    if(number1<number2){
        score++;
         reseTime(timerId);
    }
    else{
        location.href="./gameover.html?score="+score;

    }
    generateNumber();
};
function generateNumber(){
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    number1box.innerHTML=number1;
    number2box.innerHTML=number2;
}

var timerId;
function startTimer() {
    time=5;
    timer.innerHTML = time;
    timerId=setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(timerId);
            location.href="gameover.html";
        }
        timer.innerHTML = time;
    },1000);
}
function reseTime() {
    clearInterval(timerId);
    startTimer();
}
startTimer();