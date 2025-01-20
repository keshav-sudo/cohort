fetch('https://randomuser.me/api').then(response => {
    return response.json();
})
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('error', error);
    });

    //sb sahiii hh yha bhi