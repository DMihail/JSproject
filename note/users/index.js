const  task = post => {
    return `
            <div class="card z-depth-4">
                <div class="card-content">
                    <span class="card-title">${post.task}</span>
                    <p>${post.podtask}</p>
            <small>${post.data}</small>
                </div>
                <div class="card-action">
                    <button class="btn btn-small red">
                        <i class="material-icons">delete</i>
                    </button>

                </div>
            </div>`
};
let notes = [];
const  URL = '/api/notes';

class Api {
    static fetch() {
      return  fetch(URL, {method: 'get'}).then(res => res.json())
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    Api.fetch().then(backendNotes =>{
        notes = backendNotes.concat();
        renderNotes(notes);
    })
});

function renderNotes(_notes = []) {
    const $notes = document.querySelector('#note');

    if (_notes.length > 0) {
        $notes.innerHTML = _notes.map(note => task(note)).join(' ');
    }
    else {
        $notes.innerHTML = `<div class="center"> Заметок нет   </div>`;
    }
}