var dateModule = new Date();

dayInfoArray =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

monthInfoArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dayInfo = dateModule.getDay();
var monthInfo = dateModule.getMonth();
var yearInfo  = dateModule.getFullYear();
var dateInfo = dateModule.getDate();

if(monthInfo < 10){
    monthInfo = "0" + monthInfo;
}



console.log(dayInfo);

console.log(dayInfoArray[dateModule.getDay()],monthInfoArray[dateModule.getMonth()],yearInfo);


document.getElementById("dayInfo").innerHTML = dateInfo;
document.getElementById("monthInfo").innerHTML = monthInfoArray[dateModule.getMonth()];
document.getElementById("yearInfo").innerHTML = yearInfo;