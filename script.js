
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


// Sample list of items
const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon'];

// Create search input field
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('id', 'searchInput');
searchInput.setAttribute('placeholder', 'Search...');
searchInput.style.padding = '8px';
searchInput.style.width = '300px';
searchInput.style.fontSize = '16px';

// Create result container
const searchResults = document.createElement('ul');
searchResults.setAttribute('id', 'searchResults');

// Append search input and result container to the body
document.body.appendChild(searchInput);
document.body.appendChild(searchResults);

// Function to perform search
function searchFunction() {
    // Clear previous results
    searchResults.innerHTML = '';

    // Get the user input and convert it to lowercase
    const input = searchInput.value.toLowerCase();

    // Filter items based on input
    const filteredItems = items.filter(item => item.toLowerCase().includes(input));

    // Display filtered results
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchResults.appendChild(li);
    });
}

// Attach event listener to the input field to trigger search on input change
searchInput.addEventListener('input', searchFunction);

