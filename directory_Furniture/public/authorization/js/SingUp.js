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
        if (response.status === 501) {
            var event = new Event("501", {bubbles: true, cancelable: true});
            document.dispatchEvent(event)
        }
    });
}


document.getElementById('exampleInputName').onblur = function () {
    let email = document.getElementById('exampleInputName').value;
    if (email === '' ){
        let mail =  document.getElementById('name');
        mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorMail" role="alert"> &#10008;
         Invalid mail</div>`) ;
    }
    else{
        let mail =  document.getElementById('name');
        mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-success" id="errorMail" role="alert">&#10004;</div>`);
        validate.push(true);
    }
};


document.getElementById('exampleInputEmail1').onblur = function () {
    let email = document.getElementById('exampleInputEmail1').value;
    if (email === '' ){
        let mail =  document.getElementById('mail');
        mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorMail" role="alert"> &#10008;
         Invalid mail</div>`) ;
    }
    else{
        let mail =  document.getElementById('mail');
        mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-success" id="errorMail" role="alert">&#10004;</div>`);
        validate.push(true);
    }
};
document.getElementById('exampleInputPassword1').onblur = function () {
    let pass = document.getElementById('exampleInputPassword1').value;
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

document.getElementById('exampleInputRepPassword1').onblur = function () {
    let repass = document.getElementById('exampleInputRepPassword1').value;
    let pass = document.getElementById('exampleInputPassword1').value;
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

document.getElementById('exampleInputEmail1').onfocus = function () {
    let mail =  document.getElementById('mail');
    if (document.getElementById( 'errorMail')) {
        console.log(true);
        mail.parentNode.removeChild(document.getElementById( 'errorMail'));
    }
};
document.getElementById('exampleInputPassword1').onfocus = function () {
    let pass =  document.getElementById('pass');
    if (document.getElementById( 'errorPass')) {
        console.log(true);
        pass.parentNode.removeChild(document.getElementById( 'errorPass'));
    }
};
document.getElementById('exampleInputRepPassword1').onfocus = function () {
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
//
// <form>
//     <div className="form-group" id='mail'>
//         <label htmlFor="exampleInputEmail1">Email address</label>
//         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                placeholder="Enter email">
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
//             </small>
//     </div>
//     <div className="form-group" id='pass'>
//         <label htmlFor="exampleInputPassword1">Password</label>
//         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
//     </div>
//     <div className="form-group" id='repitpassword'>
//         <label htmlFor="exampleInputRepPassword1">Rapid Password</label>
//         <input type="password" className="form-control" id="exampleInputRepPassword1" placeholder="Password">
//     </div>
//     <button type="button" onClick="Send()" className="btn btn-primary">Submit</button>
//     <div className="form-group" id='error'>
//     </div>
//     <p><a href="/SingIn">SingIn</a></p>
// </form>

