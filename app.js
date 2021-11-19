// alert("Hello World");

// JS Chapter 31-34

// Q no 1 
// var date = new Date();
// console.log(date);

// Q no 2
// var date = new Date();
// var a = date.toDateString();
// console.log(a);
// var month = a.slice(4, 7);
// // console.log(month);
// if(month === "Jan"){
//     document.write("Current Month: " + month.concat("uary"))
// }
// else if(month === "Feb"){
//     document.write("Current Month: " + month.concat("uary"))
// }
// else if(month === "Mar"){
//     document.write("Current Month: " + month.concat("ch"))
// }
// else if(month === "Apr"){
//     document.write("Current Month: " + month.concat("ril"))
// }
// else if(month === "Jun"){
//     document.write("Current Month: " + month.concat("e"))
// }
// else if(month === "Jul"){
//     document.write("Current Month: " + month.concat("y"))
// }
// else if(month === "Aug"){
//     document.write("Current Month: " + month.concat("ust"))
// }
// else if(month === "Sep"){
//     document.write("Current Month: " + month.concat("tember"))
// }
// else if(month === "Oct"){
//     document.write("Current Month: " + month.concat("ober"))
// }
// else if(month === "Nov"){
//     document.write("Current Month: " + month.concat("ember"))
// }
// else if(month === "Dec"){
//     document.write("Current Month: " + month.concat("ember"))
// }

// Q no 3
// var date = new Date();
// var newDate = date.toString();
// var currentDay = newDate.slice(0, 3);
// alert("Today is " + currentDay);

// Q no 4
// var date = new Date();
// var newDate = date.toString();
// var currentDay = newDate.slice(0, 3);
// if(currentDay === "Sat" || currentDay === "Sun"){
//     alert("It's Fun day")
// }
// else{
//     alert("Working day")
// }

// Q no 5
// var date = new Date();
// var day = date.getDate();
// if(day <= 15){
//     document.write("First Fifteen days of the month");
// }
// else{
//     document.write("Last Days of the month")
// }

// Q no 6
// var date = new Date();
// var milliScnd = date.getTime();
// var minutes = milliScnd / (1000 * 60);
// document.write("Current Date: " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + milliScnd);
// document.write("<br>Elapsed minutes since January 1, 1970: " + minutes);

// Q no 7
// var date = new Date();
// var time = date.getHours();
// if(time < 12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// Q no 8
// var latterDate = new Date("Dec 31, 2020");
// document.write("Latter Date: " + latterDate);

// Q no 9
// var date = new Date();
// var datemilli = date.getTime();
// var ramadanDate = new Date("June 18, 2015");
// var ramadanmilli = ramadanDate.getTime();
// var milliseonds = datemilli - ramadanmilli;
// var days = Math.floor(milliseonds / (1000 * 60 * 60 * 24 ));
// document.write(days + " days have passed since 1st Ramadan, 2015");

// Q no 10
// var date = new Date();
// var datemilli = date.getTime();
// var ramadanDate = new Date("Jan 1, 2015");
// var ramadanmilli = ramadanDate.getTime();
// var milliseonds = datemilli - ramadanmilli;
// var days = Math.floor(milliseonds / (1000 * 60 ));
// document.write(days + " seconds have passed since beginning of 2015");

// Q no 11
// var date = new Date();
// var hours = date - 3600000;
// var newDate = new Date(hours);
// document.write("Current date: " + date);
// document.write("<br>1 hour ago: " + newDate);

// Q no 12
// var date = new Date();
// document.write("current date: " + date);
// date.setFullYear(1921);
// document.write("<br>100 years back, it was: " + date);

// Q no 13
// var age = +prompt("What's your age?");
// var date = new Date();
// var strngDate = date.toString()
// var year = strngDate.slice(11, 15)
// var birthYear = year - age;
// document.write("Your age is " + age);
// document.write("<br>Your birth year is " + birthYear);