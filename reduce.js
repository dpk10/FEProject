let arr = [1,2,3,4,5,6,7,8];

const mul = arr.reduce((acc, curr) => {
        return acc * curr;
})

console.log(mul);
