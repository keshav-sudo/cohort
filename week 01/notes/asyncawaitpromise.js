//1. callback

const { resolve } = require("path");

function callbackdata (url , callback) {
    fetch(url)
    .then(raw => raw.json())
    .then(result =>{
        callback(result);
    })
}
callbackdata('https://randomuser.me/api' , (data) =>{
    console.log(data.results);
})

//2. promises

function promiseData(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(raw => raw.json())
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            })
    })
}
promiseData('https://randomuser.me/api')
    .then(data => {
        console.log(data.results[0].name);
    })
    .catch(error => {
        console.log(error);
    });

//3. Async/await

async function asyncdata(url){
    try {
        const raw = await fetch(url);
        const result = await raw.json();
    } catch (error) {
        console.log(error);
    }
}

asyncdata('https://randomuser.me/api');