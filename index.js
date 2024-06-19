let start = document.querySelector(".start_btn");
let stop = document.querySelector(".stop_btn");
let reset = document.querySelector(".reset_btn");
let getTime = document.querySelector(".time_btn");
let clearTime = document.querySelector(".clear_btn");

let resetValue = document.querySelector(".resetValue");
let count = document.getElementById("countDown");
let counter = 0;
let intervalId ="";

//  Function to start the timer

   const startTimer = () => {
        intervalId = setInterval( () =>{
           count.innerText = counter++;
       }, 1000);
       
   }

//  Function to stop the timer

   const stopTimer = () => {
       getTimeText();
       clearInterval(intervalId);
   }

//  Function to reset the timer

   const resetTimer = () => {
       counter = 0;
       count.innerText = counter;
       stopTimer();

   }

//  Function to show the stop time

   const getTimeText = () => {
       const newPara = document.createElement("p");
       newPara.innerHTML =  `The stop time is ${counter-1}`;
       resetValue.append(newPara);
       
   };
   
//  Function to show the stop time

   const clearTimeText = () => {
        resetValue.remove();
   };
   

   start.addEventListener("click", startTimer);
   stop.addEventListener("click", stopTimer);
   reset.addEventListener("click", resetTimer);
   getTime.addEventListener("click", getTimeText);
   clearTime.addEventListener("click", clearTimeText);

let str = "Watch Thapa Technical javascript course on youtube";
console.log(str);
let counta=0;
for(let i=0; i<str.length; i++){
   counta=0;
   if(str[i] == " "){
       console.log(counta);
       console.log("ends here");
       
   }
   else{
       counta++;
       console.log(str[i]);

   }
   // console.log(counta);
   
}


