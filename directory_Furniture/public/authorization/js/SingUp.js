function Send() {
    const  User = {
        mail: document.getElementById('Email').value,
        password: document.getElementById('Password').value
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
        if (response.status === 200) {
            window.location.replace('/')
        }
        if (response.status === 501) {
            var event = new Event("501", {bubbles: true, cancelable: true});
            document.dispatchEvent(event)
        }
    });
}

document.getElementById('Email').onblur = function () {
    let email = document.getElementById('Email').value;
    if (email === '' ){
        let mail =  document.getElementById('mail');
        mail.insertAdjacentHTML('afterEnd', `<div  id="serror" role="alert"> &#10008;
         </div>`) ;
    }
    else{
        let mail =  document.getElementById('mail');
        mail.insertAdjacentHTML('afterEnd', `<div  id="serror" role="alert">&#10004;</div>`);
    }
};
document.getElementById('Password').onblur = function () {
    let pass = document.getElementById('Password').value;
    if (pass === ''){
        let password =  document.getElementById('pass');
        password.insertAdjacentHTML('afterEnd', `<div  id="serror" role="alert"> &#10008;
         Invalid password</div>`) ;
    }
    else{
        let password =  document.getElementById('pass');
        password.insertAdjacentHTML('afterEnd', `<div  id="serror" role="alert">&#10004;</div>`);
    }
};

document.getElementById('RepPassword').onblur = function () {
    let repass = document.getElementById('RepPassword').value;
    let pass = document.getElementById('Password').value;
    if (repass !== pass || pass === ''){
        let password =  document.getElementById('repitpassword');
        password.insertAdjacentHTML('afterEnd', `<div  id="serror" role="alert"> &#10008;
         </div>`) ;
    }
    else{
        let password =  document.getElementById('pass');
        password.insertAdjacentHTML('afterEnd', `<div  id="serror" role="alert">&#10004;</div>`);
    }
};

document.getElementById('Email').onfocus = function () {
    let mail =  document.getElementById('mail');
    if (document.getElementById( 'serror')) {
        console.log(true);
        mail.parentNode.removeChild(document.getElementById( 'serror'));
    }
};
document.getElementById('Password').onfocus = function () {
    let pass =  document.getElementById('pass');
    if (document.getElementById( 'error')) {
        console.log(true);
        pass.parentNode.removeChild(document.getElementById( 'serror'));
    }
};
document.getElementById('RepPassword').onfocus = function () {
    let pass =  document.getElementById('repitpassword');
    if (document.getElementById( 'serror')) {
        console.log(true);
        pass.parentNode.removeChild(document.getElementById( 'serror'));
    }
};

document.addEventListener("501", function(event) {
    let error = document.getElementById('error');
    error.parentNode.removeChild(document.getElementById('serror'));
    error.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="error" role="alert">
        User with such @mail already exists!</div>`);
}, false);

