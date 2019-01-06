const  task = post => {
    return `
            <div class="card z-depth-4">
                <div class="card-content">
                    <span class="card-title">${post.task}</span>
                  <!--  <p>${post.podtask}</p>-->
            <small>${new Date(post.data).toLocaleDateString()}</small>
                </div>
                <div class="card-action">
                    <button class="btn btn-small red js-remove" data-id="${post._id}">
                        <i class="material-icons">delete</i>
                    </button>

                </div>
            </div>`
};
let notes = [];
let modal;
const  URL = '/api/notes';

class Api {
    static fetch() {
      return  fetch(URL, {method: 'get'}).then(res => res.json())
    }

    static create(note){
        return fetch(URL, {
            method: 'post',
            body: JSON.stringify(note),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    static remove(id){
        return fetch(`${URL}/${id}`, {
            method: 'delete'
        }).then(res => res.json())
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    Api.fetch().then(backendNotes =>{
        notes = backendNotes.concat();
        renderNotes(notes);
    });
    modal = M.Modal.init(document.querySelector('.modal'));
    document.querySelector('#create').addEventListener('click', newNote);
    document.querySelector('#note').addEventListener('click', deleteNote)
});

function deleteNote(event) {
if (event.target.classList.contains('js-remove')) {
const id = event.target.getAttribute('data-id');

Api.remove(id).then(() => {
    const  index = notes.findIndex(note => note._id === id);
    notes.splice(index, 1);
    renderNotes(notes);
})
}
}

function newNote() {
    const  $task = document.querySelector('#task');
    const  $data = document.querySelector('#data');
    console.log($data.value);

    if ($task.value && $data.value) {
        const  newNote = {
            task: $task.value,
            data: $data.value
        };
        Api.create(newNote).then(note =>{
            notes.push(note);
            renderNotes(notes)
        });
        modal.close();
        $task.value = '';
        $data.value = '';
      //  M.updateTextFields();
    }
}

function renderNotes(_notes = []) {
    const $notes = document.querySelector('#note');

    if (_notes.length > 0) {
        $notes.innerHTML = _notes.map(note => task(note)).join(' ');
    }
    else {
        $notes.innerHTML = `<div class="center"> Заметок нет   </div>`;
    }
}