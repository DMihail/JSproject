document.addEventListener('DOMContentLoaded', () =>{
    function getDataName(id) {
        let URL = '/list/' + id;
        fetch(URL, {
            method: 'get',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            console.log(response.status);
            if (response.status === 500) {
                var event = new Event("500", {bubbles: true, cancelable: true});
                document.dispatchEvent(event)
            }
            if (response.status === 200) {
                console.log(200);
                //window.location.replace("/list");
                Addimg();
            }
        });
    }

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