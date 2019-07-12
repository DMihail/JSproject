
//<div><button onClick="Out()">Out</button></div>

function setList(data){
    document.getElementById('root').innerHTML += `
 <div id="card" class="col-xs-12 col-sm-12 col-md-8 col-lg-4 col-xl-4">
            <div id=`+data.id+` onclick = "getData(event)">
                        <div class="card"  >
             <img src=`+data.img+` class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">`+data.name+`</h5> 
                </div>
             </div> 
        </div>
             </div>
`;
}

document.addEventListener('DOMContentLoaded', () =>{
fetch('/getlist', {method: 'get'}).then(function(response) {
    return response.json();
})
    .then(function(myJson) {
        for (let key in myJson) {
            console.log(myJson[key]);
            setList(myJson[key]);
        }
    });
    setList(null);
});



function Out() {
    window.location.replace('/')
}


function getData(event) {
    console.log(event.target.id);
     let target = event.target.id;
    let URL = '/list/'+ event.target.id;
    fetch(URL, {
        method: 'get',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
     }).then(function(response) {
        console.log(response.status);
        // if (response.status === 500) {
        //     var event = new Event("500", {bubbles: true, cancelable: true});
        //     document.dispatchEvent(event)
        // }
        if (response.status === 200) {
            console.log(200);
            window.location.replace( '/list/' + target + '?' + target) ;
         //   window.location.replace( '/list/' + target) ;
        }
    });
}
