//difference between var and let
// ES5 
// var is in old js
// var is function scoped
// var add it self to browser window object

//ES6
// let is in new js
// let is braces scoped
// let doesnt add it self to browser window object

// operators in js
// let a = 10;
// let b = 5;
// let c = a+b;
// console.log(c);
// +]
// _
//  *
// /
// %
// <
// >
// <=
// >=
// ==
// !
// !=



// function example () {
//     for(let i = 0; i<10; i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// example();

// function example1 () {
//     for(var i = 0; i<10; i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// example1();


// condition in js

// let a = 30;
// let b = 20;

// if(a==b){
//     console.log('both are equal')
// }
// else if(a<b){
//     console.log('a is less than b')
// }
// else if(a>b){
//     console.log('a is greater than b')
// }
// else if(a!=b){
//     console.log('a is not is equal to b')
// }
// else{
//     console.log('not equal')
// }

//function in js

// function add(){
//     let a = 10;
//     let b = 20;
//     let c = a+b;
//     console.log(c);
// }

// add();

// function add (a,b) {
//     let sum = a+b;
//     console.log(sum);
// }
//  add(5,10);

// array in js

// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);

// var arr1 = [...arr]
// console.log(arr1);

// arr.pop();
// console.log(arr);
// console.log(arr1)

// arr.shift();
// console.log(arr);

// arr.unshift(1);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.push(9);
// console.log(arr);

// arr.splice(2,1);
// console.log(arr);

// var array1 = [1,true,null,'ram',[1,2,3,4]];
// console.log(array1);


// blank object in js
// let blankObject = {};
// console.log(blankObject);

//filled object 
// let filledObject = {
//     name : 'a',
//     address : 'abc',
//     phone: 12345
// }
// console.log(filledObject);

// let patientInfo = {
//     name: 'Adam',
//     age: 40,
//     address: 'abc',
//     isAbove18 : true,
//     patientPulseReportHistory : [50,60,70,55,45],
//     AppointmentDetail: {
//         appointmentDate: '2024-04,01',
//         surgeon: 'Mike',
//         AnesthesiaType: 'local',
//         anesthesiologist: ['Michale','Jefry']
//     },
//     previousAppointmentDate: '2024-03-02',
// }

// console.log(patientInfo);
// console.log(patientInfo.AppointmentDetail.surgeon)