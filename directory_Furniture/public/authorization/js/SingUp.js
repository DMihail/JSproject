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
        mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorMail" role="alert"> &#10008;
         Invalid @mail</div>`) ;
    }
    else{
        let mail =  document.getElementById('mail');
        mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-success" id="errorMail" role="alert">&#10004;</div>`);
        validate.push(true);
    }
};
document.getElementById('Password').onblur = function () {
    let pass = document.getElementById('Password').value;
    if (pass === ''){
        let password =  document.getElementById('pass');
        password.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorPass" role="alert"> &#10008;
         Invalid password</div>`) ;
    }
    else{
        let password =  document.getElementById('pass');
        password.insertAdjacentHTML('afterEnd', `<div class="alert alert-success" id="errorPass" role="alert">&#10004;</div>`);
        validate.push(true);
    }
};

document.getElementById('RepPassword').onblur = function () {
    let repass = document.getElementById('RepPassword').value;
    let pass = document.getElementById('Password').value;
    if (repass !== pass || pass === ''){
        let password =  document.getElementById('repitpassword');
        password.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorPass" role="alert"> &#10008;
         Invalid password</div>`) ;
    }
    else{
        let password =  document.getElementById('pass');
        password.insertAdjacentHTML('afterEnd', `<div class="alert alert-success" id="errorPass" role="alert">&#10004;</div>`);
        validate.push(true);
    }
};

document.getElementById('Email').onfocus = function () {
    let mail =  document.getElementById('mail');
    if (document.getElementById( 'errorMail')) {
        console.log(true);
        mail.parentNode.removeChild(document.getElementById( 'errorMail'));
    }
};
document.getElementById('Password').onfocus = function () {
    let pass =  document.getElementById('pass');
    if (document.getElementById( 'errorPass')) {
        console.log(true);
        pass.parentNode.removeChild(document.getElementById( 'errorPass'));
    }
};
document.getElementById('RepPassword').onfocus = function () {
    let pass =  document.getElementById('repitpassword');
    if (document.getElementById( 'errorPass')) {
        console.log(true);
        pass.parentNode.removeChild(document.getElementById( 'errorPass'));
    }
};

document.addEventListener("501", function(event) {
    let error =  document.getElementById('error');
    error.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorMail" role="alert">
        User with such @mail already exists!</div>`);
}, false);

