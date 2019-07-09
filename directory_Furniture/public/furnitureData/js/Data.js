document.addEventListener('DOMContentLoaded', () =>{
    // fetch('/getlist', {method: 'get'}).then(function(response) {
    //     return response.json();
    // })
    //     .then(function(myJson) {
    //         //console.log(JSON.stringify(myJson)
    //         for (let key in myJson) {
    //             console.log(myJson[key]);
    //             setList(myJson[key]);
    //         }
    //     });
    Addimg();
});


function Addimg() {
    document.getElementById('root').innerHTML += ` <div class="carousel-item active">
            <img class="d-block w-100" src="http://images.zakupka.com/i3/firms/27/91/91094/gostinaya-alfa-mdf-prosto-mebli_35ee6dcf209fe25_300x300_1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDvNOGf_a4AJJGNOpEwDh3IzSG-cq4H9arxl9uI58C12t9qd8" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEcpRBf4p318O5bUkWBsH2qBZ0NE4bWYBAePzxXux76IOsQw4EQ" alt="Third slide">
        </div>`
}