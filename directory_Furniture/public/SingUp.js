function Send() {
    const  User = {
        name: document.getElementById('exampleInputName').value,
        lastname: document.getElementById('exampleInputLastName').value,
        age: document.getElementById('exampleInputAge').value,
        mail: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value
    };
    console.log(User);
    let URL = '/singup';
    return fetch(URL, {
        method: 'post',
        body: JSON.stringify(User),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        console.log(response.status);
    });
}

function validate() {
    
}