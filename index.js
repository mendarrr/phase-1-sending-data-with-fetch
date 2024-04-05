// Add your code here
function submitData(username, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    })
    .then(function (response) {
         return response.json();
     })
     .then(function (object) {
        document.body.innerHTML = object["id"]
     })
     .catch(function (error) {
        document.body.innerHTML = error.message
         console.log(error);
     });
  
}
