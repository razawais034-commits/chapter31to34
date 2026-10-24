// task 1
//  Write a program that displays current date and time in your browser.
//  document.write(Date());
var currentDate = new Date();
document.write("Current Date and Time: " + currentDate);


// task 2
//  Write a program that alerts the current month in words. For example December.
// var months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];

// var now = new Date();
// var currentMonth = months[now.getMonth()];

// alert("Current Month: " + currentMonth);


// task 3
//  Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun
var days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

var now = new Date();
var currentDay = days[now.getDay()];

alert("Today is: " + currentDay);




// task 4
 //Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
var today = new Date();
var day = today.getDay();

if (day === 0 || day === 6) {
    document.write("It's Fun day");
}


// task 5
//Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

var today = new Date();
var date = today.getDate();

if (date < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

// task 6
// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var date = new Date();

var minutesSinceEpoch = date.getTime() / (1000 * 60);

document.write("Minutes since Jan 1, 1970: " + minutesSinceEpoch);



// task 7
//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var now = new Date();
var hours = now.getHours();

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

// task 8
// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31);

document.write("Later Date: " + laterDate);


// task 9
//Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
var ramadanStart = new Date("June 18, 2015");
var today = new Date();

var diffInMs = today - ramadanStart;

var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

alert("Days past since 1st Ramadan: " + Math.floor(diffInDays));




//task 10
// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015
var startDate = new Date("January 1, 2015");
var referenceDate = new Date("January 1, 1970");

var diffInMs = startDate - referenceDate;

var diffInSeconds = diffInMs / 1000;

document.write("Seconds between 1970 and 2015: " + diffInSeconds);


// task 11
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var currentDate = new Date();   // current date and time

var hours = currentDate.getHours();  // extract hours

currentDate.setHours(hours + 1);  // reset date object 1 hour ahead

document.write("Updated Date & Time: " + currentDate);


// task 12
//. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? var date = new Date();  // current date
date.setFullYear(date.getFullYear() - 100);  // 100 years back
alert("Date 100 years back: " + date);


//task 13
// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
var age = +prompt("Enter your age:");
var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("Your Birth Year is: " + birthYear);