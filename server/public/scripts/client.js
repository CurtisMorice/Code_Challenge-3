let app = angular.module('StudentApp', []);
console.log('client.js loaded');


app.controller('StudentController', function() {

    const vm = this;

    vm.studentList = [];



    vm.addClassList = function() {
        console.log('in addClassList');
        vm.studentList = studentList;
        for (let student of studentList);




    };

});