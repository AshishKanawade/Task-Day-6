// Problem 1
// Fix the code to get the largest of three.
aa = (f, s, t) => {
    if (f > s && f > t) {
        console.log(f)
    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);



// Problem 2
// Fix the code to Sum of the digits present in the number
let n = "123";
console.log(add(n));
function add(n) {
    let sum = 10;
    for (var i = 0; i < n.length; i++) {
        sum += +n[i]
    }
    return sum;
}



// Problem 3
// Fix the code to Sum of all numbers using IIFE function
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})();



// Problem 4
// Fix the code to gen Title caps.
var arro = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}
ano(arro);



// Problem 5
// Fix the code to return the Prime numbers
const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return num;
        }
    }
    return num === 2;
});
console.log(myPrime);



// Problem 6
// Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const sum = (a, b) =>
    a + b;
const sum1 = num.reduce(sum)
console.log(sum1);



// Problem 7
// Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr1 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr1.length % k;
(function () {
    out = arr1.slice(k + 1, arr1.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr1[i];
        count += 1;
    }
    console.log(out);
})();



// Problem 8
// Fix the code to gen Title caps.
var arr2 = ["guvi", "geek", "zen", "fullstack"];
(function () {
    for (var i = 0; i < arr2.length; i++) {
        console.log(arr2[i][0].toUpperCase() + arr2[i].substr(1));
    }
})();



// Problem 9
// print all odd numbers in an array using IIFE function
var arr3 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i] % 2 === 1) {
            console.log(arr3[i]);
        }
    }
})();



// Problem 10
// Fix the code to reverse.
(function (str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd")



// Problem 11
// Fix the code to remove duplicates.
var res = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}
res(["guvi", "geek", "guvi", "duplicate", "geeK"])



// Problem 12
// Fix the code to give the below output:
var array = [[["firstname", "vasanth"], ["lastname", "Raje"], ["age", 24], ["role", "JSWizard"]], [["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]]];
var final = []
while (array.length !== 0) {
    var outer_remove = array.shift();
    var new_object = {};
    while (outer_remove.length !== 0) {
        var inner_remove = outer_remove.shift()
        var key = inner_remove[0]
        var value = inner_remove[1]
        new_object[key] = value
    }
    final.push(new_object)
}
console.log(final);



// Problem 13
// Sum of odd numbers in an array
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
    if (c % 2 !== 0) {
        return a + c;
    }
    return a;
}, 0);
console.log(s);



// Problem 14
// Swap the odd and even digits
aa = data => {
    var a = data;
    var l ='';
    for (i = 0; i < a.length - 1; i++) {
        var s = a[i + 1]
        var b = a[i]
        l += s
        l += b
        i = i + 1
    }
    if ((a.length % 2) !== 0) {
        l += a[a.length - 1]
    }
    console.log(l);
}
aa("1234");



// Problem 15
