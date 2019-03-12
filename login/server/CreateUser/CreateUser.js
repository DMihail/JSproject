var UserData = {};
let URL = '/create_user';
function getData() {
    UserData.login =  document.getElementById('Login').value;
    UserData.name =  document.getElementById('Name').value;
    UserData.LastName =  document.getElementById('LastName').value;
    UserData.mail =  document.getElementById('Mail').value;
    UserData.password = document.getElementById('Password').value;
    send(UserData);
    console.log(UserData)
}


function send(data) {
    return fetch(URL, {
        method: 'post',
        body: JSON.stringify(data),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.status)
}

