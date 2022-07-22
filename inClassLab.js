let arr =[];
arr[0] = "String 0";
arr[1] = "String 1";
arr[2] = "String 2";
arr[3] = "String 3";
arr[4] = "String 4";

//console.log(arr.splice(2,2,"String 5"), arr);

function sum(a, b){
    return a+b;
}
function myFun(fn, a, b){
    //console.log(fn);
    console.log(fn(a, b));
}
myFun(sum, 3, 4);
