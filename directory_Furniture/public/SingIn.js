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
            mail: document.getElementById('exampleInputEmail1').value,
            password: document.getElementById('exampleInputPassword1').value
        };
        console.log(User);
        let URL = '/singin';
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


    document.getElementById('exampleInputEmail1').onblur = function () {
        let email = document.getElementById('exampleInputEmail1').value;
        if (email === ''){
            let mail =  document.getElementById('mail');
            mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-danger" id="errorMail" role="alert"> &#10008;
         Invalid mail</div>`) ;
        }
        else{
            let mail =  document.getElementById('mail');
            mail.insertAdjacentHTML('afterEnd', `<div class="alert alert-success" id="errorMail" role="alert">&#10004;</div>`);
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
        let mail =  document.getElementById('pass');
        if (document.getElementById( 'errorPass')) {
            console.log(true);
            mail.parentNode.removeChild(document.getElementById( 'errorPass'));
        }
    };
    // function validate() {
    //
    //
    // }
