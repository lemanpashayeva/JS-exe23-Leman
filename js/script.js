'use strict';

//second exercise


const arr = [5, 2, 4, 1, 15, 8, 3];

const arr1 = arr.map(function(value){
    if (value<=2) {
        return value*2;
    } else {
        return (value*4)+16;
    }
});

const arr2 = arr1.reduce(function(acc, value){
    return acc+value;
}, 0);

console.log(arr);
console.log(arr1);
console.log(arr2/2);


/*
const arr = [16, 6, 10, 5, 6, 1, 4];

const arr1 = arr.map(function(value){
    if (value<=2) {
        return value*2;
    } else {
        return (value*4)+16;
    }
});

const arr2 = arr1.reduce(function(acc, value){
    return acc+value;
}, 0);

console.log(arr);
console.log(arr1);
console.log(arr2/2);
*/