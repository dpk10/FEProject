/*ES5.............*/

var printer=function(){
    // console.log("Hello Deepak!");
}
printer()

function add(a,b){
    return a+b; 
}
// add()

// console.log(add(4,5));


/*ES6..............*/

var sigma=()=>{
    // console.log("Hello Deepak!");
}
sigma()

let Mul=(a,b)=> {
    return a*b;
}
// console.log(Mul(6,6));

var getSum=(var1,var2)=>{
    var result=var1+var2;
    return result;
}

// console.log(getSum(10,20));

// var getMul=(var1,var2)=>{return var1*var2}
// console.log(getMul(10,50));

var getMul=(var1,var2)=> var1*var2
// console.log(getMul(10,50));

const user={
    name:'Deepak',
    email:'dpk6760@gmail.com'
}
var getUser=({name,email})=>{
    console.log(`${name} :${email}`);
}

getUser(user);