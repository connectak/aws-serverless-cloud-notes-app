const API_URL =
"https://3bem16mzzi.execute-api.us-east-1.amazonaws.com";
async function loadNotes() {

const notesContainer =
document.getElementById(
"notes"
);

notesContainer.innerHTML =
"<p>Loading notes...</p>";

try {

const response =
await fetch(
`${API_URL}/notes`
);

const data =
await response.json();

notesContainer.innerHTML =
"";

if (
!data.notes ||
data.notes.length === 0
) {

notesContainer.innerHTML =
"<p>No notes yet. Create your first note!</p>";

return;

}

data.notes.forEach(
note => {

const card =
document.createElement(
"div"
);

card.className =
"note";

card.innerHTML = `

<h3>
${escapeHTML(
note.title
)}
</h3>

<p>
${escapeHTML(
note.content
)}
</p>

<p class="date">

Created:

${new Date(
note.createdAt
).toLocaleString()}

</p>

<button
class="edit"
onclick='editNote(
${JSON.stringify(
note
)}
)'>

Edit

</button>

<button
class="delete"
onclick="deleteNote(
'${note.noteId}'
)">

Delete

</button>

`;

notesContainer.appendChild(
card
);

});

}

catch (error) {

notesContainer.innerHTML =

"<p>Unable to load notes.</p>";

console.error(
error
);

}

}


async function saveNote() {

const noteId =
document.getElementById(
"noteId"
).value;

const title =
document.getElementById(
"title"
).value.trim();

const content =
document.getElementById(
"content"
).value.trim();

if (
!title ||
!content
) {

showMessage(
"Please enter a title and note.",
"red"
);

return;

}

const method =
noteId
? "PUT"
: "POST";

const url =
noteId

? `${API_URL}/notes/${noteId}`

: `${API_URL}/notes`;

try {

const response =
await fetch(
url,
{

method:

method,

headers:
{

"Content-Type":
"application/json"

},

body:
JSON.stringify(
{

title:
title,

content:
content

}
)

}
);

const data =
await response.json();

if (
!response.ok
) {

throw new Error(
data.message
);

}

showMessage(
data.message,
"green"
);

clearForm();

loadNotes();

}

catch (error) {

showMessage(
error.message,
"red"
);

}

}


function editNote(
note
) {

document.getElementById(
"noteId"
).value =
note.noteId;

document.getElementById(
"title"
).value =
note.title;

document.getElementById(
"content"
).value =
note.content;

document.getElementById(
"saveButton"
).innerText =
"Update Note";

document.getElementById(
"cancelButton"
).style.display =
"inline-block";

window.scrollTo(
{

top:
0,

behavior:
"smooth"

}
);

}


async function deleteNote(
noteId
) {

const confirmed =
confirm(
"Are you sure you want to delete this note?"
);

if (
!confirmed
) {

return;

}

try {

const response =
await fetch(

`${API_URL}/notes/${noteId}`,

{

method:
"DELETE"

}

);

const data =
await response.json();

if (
!response.ok
) {

throw new Error(
data.message
);

}

loadNotes();

}

catch (
error
) {

alert(
error.message
);

}

}


function cancelEdit() {

clearForm();

}


function clearForm() {

document.getElementById(
"noteId"
).value =
"";

document.getElementById(
"title"
).value =
"";

document.getElementById(
"content"
).value =
"";

document.getElementById(
"saveButton"
).innerText =
"Save Note";

document.getElementById(
"cancelButton"
).style.display =
"none";

}


function showMessage(
text,
color
) {

const message =
document.getElementById(
"message"
);

message.innerText =
text;

message.style.color =
color;

setTimeout(
() => {

message.innerText =
"";

},
3000
);

}


function escapeHTML(
text
) {

const div =
document.createElement(
"div"
);

div.textContent =
text;

return div.innerHTML;

}


loadNotes();