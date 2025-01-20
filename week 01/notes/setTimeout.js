console.log("before");
setTimeout(() =>{
    console.log("hello timeout");

}, 2000);
console.log("after");

//example

console.log("2nd before");

setTimeout(()=>{
  console.log("2nd interval");

}  , 3000);

console.log("2nd after");