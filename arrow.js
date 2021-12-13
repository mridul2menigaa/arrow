//1. Print odd numbers in an array
var arr=[1,2,4,5,6,7,8,9,10]
n = arr.filter((array)=>{return array%2!==0 })
console.log(n)


//2. Sum of all numbers in an array
var arr=[1,2,4,5,6,7,8,9,10]
n = arr.reduce((pre,post)=>{return pre+post})
console.log(n)

//. Convert all the strings to title caps in a string array
var arr= ["hellO","worLd","gUvi"];
n = arr.map((val)=>{return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase()});
console.log(n)

//Return all the prime numbers in an array

var arr=[1,2,4,5,6,7,8,9,10,11,12];
n = arr.filter((array)=>{return array%2!==0 && array!=2});
console.log(n);


//Return all the palindromes in an array
let palindromes = ["pop","radar","hello"]
let palindromesArr = palindromes.filter(value=> value === value.split("").reverse().join(""))
console.log(palindromesArr);

