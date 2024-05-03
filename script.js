
const noteTitleInput = document.getElementById('title');
const noteTextInput = document.getElementById('note');
const addNoteButton = document.querySelector('.addNote');
const notesContainer = document.querySelector('.notes-container');

let notes = [];


addNoteButton.addEventListener('click', () => {

  const title = noteTitleInput.value.trim();
  const note = noteTextInput.value.trim();


  if (title && note) {

    const newNote = {
      title,
      note
    };


    notes.push(newNote);

 
    noteTitleInput.value = '';
    noteTextInput.value = '';


    renderNotes();
  }
});


function renderNotes() {

  notesContainer.innerHTML = '';

 
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    const titleElement = document.createElement('h2');
    titleElement.textContent = note.title;

    const noteTextElement = document.createElement('p');
    noteTextElement.textContent = note.note;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', () => {

      notes.splice(index, 1);

      
      renderNotes();
    });

    noteElement.appendChild(titleElement);
    noteElement.appendChild(noteTextElement);
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
  });
}

renderNotes();

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
