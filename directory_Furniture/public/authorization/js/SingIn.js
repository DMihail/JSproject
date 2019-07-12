const emailValidate =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const passValidate  =  /^[0-9a-zA-Z]+$/;
 document.getElementById('submit').disabled = true;
let validate = [];
document.innerHTML  = `<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
        </form>`;


    function Send() {
        const  User = {
            mail: document.getElementById('Email').value,
            password: document.getElementById('Password').value
        };
        console.log(User);
        let URL = '/singin';
        fetch(URL, {
            method: 'post',
            body: JSON.stringify(User),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
         })
           .then(function(response) {
            console.log(response.status);
           if (response.status === 500) {
               var event = new Event("500", {bubbles: true, cancelable: true});
               document.dispatchEvent(event)
           }
            if (response.status === 200) {
                console.log(200);
                 window.location.replace("/list");
            }
         });
    }


    document.getElementById('Email').onblur = function () {
        let email = document.getElementById('Email').value;
        if (email === '' || !emailValidate.test(email) ){
        //     let mail =  document.getElementById('Email');
        //     mail.insertAdjacentHTML('afterEnd', `<div  id="error" role="alert"> &#10008;
        // </div>`) ;
        }
        else{
            validate.push(true);
            // let mail =  document.getElementById('mail');
            // mail.insertAdjacentHTML('afterEnd', `<div  id="error" role="alert">&#10004;</div>`);
            On();
        }
    };

    document.getElementById('Password').onblur = function () {
        let pass = document.getElementById('Password').value;
        if (pass === '' || !passValidate.test(pass) ){
        //     let password =  document.getElementById('pass');
        //     password.insertAdjacentHTML('afterEnd', `<div id="error" role="alert"> &#10008;
        // </div>`) ;
        }
        else{
            validate.push(true);
            // let password =  document.getElementById('pass');
            // password.insertAdjacentHTML('afterEnd', `<div  id="error" role="alert">&#10004;</div>`);
            On();
        }
    };
    document.getElementById('Email').onfocus = function () {
        let mail =  document.getElementById('mail');
        if (document.getElementById( 'error')) {
            // console.log(true);
            // mail.parentNode.removeChild(document.getElementById( 'error'));
        }
    };
    document.getElementById('Password').onfocus = function () {
        let pass =  document.getElementById('pass');
        if (document.getElementById( 'error')) {
            // pass.parentNode.removeChild(document.getElementById( 'error'));
        }
    };

document.addEventListener("500", function(event) {
    let error =  document.getElementById('adderror');
    error.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="adderror" role="alert">
        This user does not exist!</div>`);
    if (error.parentNode) {
        error.parentNode.removeChild(document.getElementById('adderror'));
    }
}, false);



function On() {
    if (validate.length > 1){
        document.getElementById('submit').disabled = false;
    }
}