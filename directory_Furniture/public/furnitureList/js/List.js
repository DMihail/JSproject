
//<div><button onClick="Out()">Out</button></div>

function setList(data){
    document.getElementById('root').innerHTML += `
 <div class="row" id="`+data.name+`" onclick="console.log(event.target)">
    <div class="col s12 m7" >
      <div class="card" id="`+data.name+`" >
        <div class="card-image">
          <img src=`+data.img+`>
          <span class="card-title">`+data.name+`</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
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
        //console.log(JSON.stringify(myJson)
        for (let key in myJson) {
            console.log(myJson[key]);
            setList(myJson[key]);
        }
    });
    });



// function Out() {
//     let URL = '/out';
//     fetch(URL, {
//         method: 'post',
//         // body: JSON.stringify(User),
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }).then(function(response) {
//         // console.log(response.status);
//         // if (response.status === 500) {
//         //     var event = new Event("500", {bubbles: true, cancelable: true});
//         //     document.dispatchEvent(event)
//         // }
//         // if (response.status === 200) {
//         //     console.log(200)
//         //     window.location.replace("/list");
//         //}
//     });
// }