function getuser (url , callback){
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result.results[0]);
    });
}

getuser('https://randomuser.me/api', function(user){

    console.log(user.name.first , user.name.last);
    console.log(user.email);
    console.log(user.gender);

});