//Array map method

arr=[21,22,23,24];

let a=arr.map((value,index)=>{
    // console.log(value,index);
    return value +5
})

// console.log(a);

//Array filter method

let arr1=[5,6,54,63,24,7];

let a2=arr1.filter((a)=>{
    return a<10
})

// console.log(a2);

//Array reduce mathod

let arr3=[5,6,8,10,12,4];

let newarr=arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(newarr);