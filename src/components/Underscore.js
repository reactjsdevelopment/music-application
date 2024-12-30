// JavaScript library Underscore.js. This library used for functional programming. It provides functional utilities for a variety of use cases that we as developers, may come across when handling a web project. We can use this with collections, arrays, object, functions. There is another library that we can use which is Lodash. it also provides Utility Functions. it has different methods like map, pluck, chain, find, extend, bind.

// These functions will help a lot in programming. It will optimize your code. It makes code simpler to read.

// >npm i underscore

// You could consider rolling the underscore library into your environment. It's useful for many things, including its memoize function. Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hash function, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hash function just uses the first argument to the memoized function as the key.

import * as _ from 'underscore';

var employeesCollection = [
     {
       "id": 1,
       "name": "Soni",
       "designation": "SE",
       "salary": 25000
     },
     {
       "id": 2,
       "name": "Rohit",
       "designation": "SSE",
       "salary": 35000
     },
     {
       "id": 3,
       "name": "Akanksha",
       "designation": "Manager",
       "salary": 45000
     },
     {
       "id": 4,
       "name": "Mohan",
       "designation": "Accountant",
       "salary": 30000
     },
     {
       "id": 5,
       "name": "Gita",
       "designation": "SSE",
       "salary": 35000
     }
   ];

   function nameAndDesignation() {
     return _.map(employeesCollection, function (employee) {
       return {  
name: employee.name, designation: employee.designation
};
     });
   }

   function onlyNames() {
     return _.pluck(employeesCollection, "name");
   }

   function getByDesignation(designation) {
     return _.chain(employeesCollection)
       .filter(function (employee) {
         return employee.designation === designation;
       })
       .map(function (employee) {
         return { name: employee.name, id: employee.id };
       })
       .value();
   }

   function calculateBonus(id) {
   var emp = _.find(employeesCollection,  
        function (employee) {
       return employee.id === id;
     });
     return _.extend(emp, { bonus: emp.salary * 0.1 });
   }

   function employeeStatement(id){
       function getStatement(){
           var message = this.name + " is at "  +  this.designation + " at XYZ Company.";
           return message;
       }

       var employee = _.find(employeesCollection,  
       function (e) {
           return e.id === id;
       });
   //  getStatement = _.bind(getStatement, employee);
       return getStatement();
   }
 

 var fibonacci = _.memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   });