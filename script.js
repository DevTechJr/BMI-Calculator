
alert("Welcome To Anirudh's BMI Calculator Application!")

let submit = document.querySelector(".submit");
let message = document.querySelector("#message");

submit.addEventListener("click", function(){
    let height = document.querySelector("#fheight").value;
    let weight = document.querySelector("#fweight").value;
    let result;
    let status;
    
height = height*height;
result = weight/height;
result = Math.round(result * 10) / 10;

if (result < 18.5) {
status =" Underweight"
}else if (result>18.5 && result< 24.9) {
    status =" In Good Shape!"
}else if (result>24.9 && result< 29.9) {
    status =" Overweight"
}else {
    status =" Obese"
}

message.textContent="Your BMI Is : " + result + ". You Are" + status;


})