var cnt = 1 ;
const intrval = setInterval(()=>{
    console.log("hello interval");
    cnt++;
    if(cnt>4){
        clearInterval(intrval);
    }
}, 2000)


var cn = 1 ; 
const interval = setInterval(()=>{
    console.log("2nd hello interval");
    if(cn > 10){
        clearInterval( interval);

    }
}, 1000)