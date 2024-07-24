const arr = [1,2,3,4,5,6,7,8];

const evenNo = arr.filter(checkingEven)

 function checkingEven(arr) {
    return arr%2===0
    
}

// console.log(evenNo);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result=words.filter((word)=>word.length >6);

// console.log(result);

// The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.

const value=[21,23,5,8,10,56,80];

function isBig(v1){
    return v1 >=10
}

const filtered=value.filter(isBig);

console.log(filtered);

