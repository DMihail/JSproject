document.addEventListener('DOMContentLoaded', () =>{
    let str = window.location.href;
    let id = str.substring(str.indexOf('?')+1);
    console.log(id);
    fetch('/gdata/' + id , {method: 'get'})
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
         Addimg(myJson['img']);
         AddTable(myJson['specifications'], myJson['name'] );
        });
});


function Addimg(img) {
    console.log(img);
        document.getElementById('root').innerHTML += ` <div class="carousel-item active">
            <img class="d-block w-50 h-50" style="margin: 0 auto" src=${img[0]} alt="">
        </div>`;
    for (let i = 0; i < img.length; i++){
        document.getElementById('root').innerHTML += ` <div class="carousel-item">
            <img class="d-block w-50 h-50" style="margin: 0 auto" src=${img[i]} alt= ${i}>
            </div>`
    }
}
function AddTable(data, name) {
    let mass = [];
    for (let key in data) {
        mass.push(`<tr>
            <td>
                ${key}
            </td>
            <td>
                ${data[key]}
            </td>
        </tr>`)

    }
    document.getElementById('table').innerHTML += ` 
    <h2>Характеристики: </h2>
    <table class="table">
        <thead>
        <tr><h3>${name}</h3></tr>
        </thead>
        <tbody>
        ${mass}
        </tbody>
    </table>`
}