
//<div><button onClick="Out()">Out</button></div>

function setList(data){
    document.getElementById('root').innerHTML += `
    <li id=`+data.name+` onclick="getData()"> 
 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card" >
             
             <img src=`+data.img+` class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">`+data.name+`</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
                  </div>
    </div>
  </li>

`;
}

document.addEventListener('DOMContentLoaded', () =>{
fetch('/getlist', {method: 'get'}).then(function(response) {
    return response.json();
})
    .then(function(myJson) {
        //console.log(JSON.stringify(myJson)
        for (let key in myJson) {
            console.log(myJson[key]);
            setList(myJson[key]);
        }
    });
    setList(null);
});



function Out() {
    console.log('out')
    // let URL = '/out';
    // fetch(URL, {
    //     method: 'post',
    //     // body: JSON.stringify(User),
    //     headers:{
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    // }).then(function(response) {
    //     // console.log(response.status);
    //     // if (response.status === 500) {
    //     //     var event = new Event("500", {bubbles: true, cancelable: true});
    //     //     document.dispatchEvent(event)
    //     // }
    //     // if (response.status === 200) {
    //     //     console.log(200)
    //     //     window.location.replace("/list");
    //     //}
    // });
}


function getData() {
    console.log(event.target.id);

    let URL = '/list/'+ event.target.id;
    fetch(URL, {
        method: 'get',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    // }).then(function(response) {
    //     console.log(response.status);
    //     if (response.status === 500) {
    //         var event = new Event("500", {bubbles: true, cancelable: true});
    //         document.dispatchEvent(event)
    //     }
    //     if (response.status === 200) {
    //         console.log(200);
    //
    //     }
     });
        window.location.replace( '/id/TATI');
}
