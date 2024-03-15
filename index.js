// *********Vazifa1*********
// Function findTriangleType() finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
//  1 Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
//  2 Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
//  3 Else “Scalene triangle.” since values of all sides are unequal.


// function findTriangleType(a,b,c) {
//     if (a==b && b==c){
//         console.log("Equilateral triangle")
//     }
//     else if(a==b||b==c|| a==c){
//         console.log("Isosceles triangle")
//     }
//     else{
//         console.log("Scalene triangle")
//     }

// }
// findTriangleType(5,7,5)


// *********Vazifa2*********
// Function checkLeapYear() find if the given year is a leap year or not by using %, !=, && and || operators in JavaScript.

//  1 If year is divisble by 4 and not divisble by 100 then print “leap year”.
//  2 Or if year is divisible by 400 then print “leap year”.
//  3 Else print “not a leap year”.


// function checkLeapYear(year){
//     if(year%4==0 && year%100!=0 || year%400==0){
//         console.log(year, " is a leap year")
//     }
//     else{
//         console.log(year, "is not a leap year")
//     }
// }
// checkLeapYear(2100)


// *********Vazifa3*********
// Function findGrade() to find the grade of the student based on the input marks.
//  1 Print “A+ grade” if marks is between 90 and 100.
//  2 Print “A grade” if marks is between 80 and 90.
//  3 Print “B grade” if marks is between 70 and 80.
//  4 Print “C grade” if marks is between 60 and 70.
//  5 Print “D grade” if marks is between 50 and 60.
//  6 Print “E grade” if marks is between 40 and 50.
//  7 Print “Student has failed” if marks is between 0 and 40.
//  8 Else print “Invalid marks”.


// function findGrade(grade){
//     if(grade>=90 && grade<=100){
//         console.log("A+ grade")
//     }
//     else if(grade>=80 && grade<=90){
//         console.log("A grade")
//     }
//     else if(grade>=70 && grade<=80){
//         console.log("B grade")
//     }
//     else if(grade>=60 && grade<=70){
//         console.log("C grade")
//     }
//     else if(grade>=50 && grade<=60){
//         console.log("D grade")
//     }
//     else if(grade>=40 && grade<=50){
//         console.log("E grade")
//     }
//     else if(grade>=0 && grade<=40){
//         console.log("Student has failed")
//     }
//     else{
//         console.log("Invalid marks")
//     }
// }
// findGrade(68)