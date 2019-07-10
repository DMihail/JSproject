document.addEventListener('DOMContentLoaded', () =>{
    fetch('/gdata/0001', {method: 'get'})
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson["img"]);
         Addimg(myJson['img']);
         AddTable(myJson['specifications']);
        });
});


function Addimg(img) {
    console.log(img);
        document.getElementById('root').innerHTML += ` <div class="carousel-item active">
            <img class="d-block w-100" src=`+img[0]+` alt="">
        </div>`;
    for (let i = 0; i < img.length; i++){
        document.getElementById('root').innerHTML += ` <div class="carousel-item">
            <img class="d-block w-100" src=`+img[i]+` alt=`+i+`>
            </div>`
    }
}
{/*<tr>*/}
{/*    <td>John</td>*/}
{/*    <td>Doe</td>*/}
{/*    <td>john@example.com</td>*/}
{/*</tr>*/}
{/*<tr>*/}
{/*<td>Mary</td>*/}
{/*<td>Moe</td>*/}
{/*<td>mary@example.com</td>*/}
{/*</tr>*/}
{/*<tr>*/}
{/*<td>July</td>*/}
{/*<td>Dooley</td>*/}
{/*<td>july@example.com</td>*/}
{/*</tr>*/}

function AddTable(data) {
   // console.log(data);
    let mass = [];
    for (let key in data) {
     //   console.log(key,  data[key]);
        mass.push(`<tr>
            <td>
                `+key+`
            </td>
            <td>
                `+data[key]+`
            </td>
        </tr>`)

    }
    document.getElementById('table').innerHTML += ` 
    <h2>Характеристики: </h2>
    <table class="table">
        <thead>
        </thead>
        <tbody>
       `+ mass+`
        </tbody>
    </table>`
}