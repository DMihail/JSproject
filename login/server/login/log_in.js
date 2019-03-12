var UserData = {};
let URL = '/login';
function getData() {
    UserData.login =  document.getElementById('login').value;
    UserData.password = document.getElementById('password').value;
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


