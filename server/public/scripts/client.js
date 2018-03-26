var app = angular.module('StudentApp', []);
console.log('client.js loaded');

/** ---- CONTROLLER HERE ---- **/
app.controller('StudentController', function(){
  console.log('StudentController loaded');
  // studentList is a global variable array of student names
  // don't overthink this, you don't need a $http request
  // the array already exists right here
  console.log(studentList);
  // @TODO: Write your controller code in here
});
