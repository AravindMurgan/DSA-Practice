const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = ['Jeff Bezos', 'Bill Gates', 'Warren Buffet',
    'Bernard Arnault', 'Carlos Slim Helu', 'Amancio Ortega', 'Larry Ellison', 'Mark Zuckerberg', 'Micheal Bloomberg', 'Larry Page'];

const listItems = [];

const draggableIndex = 0;

//renderList//
createList();

function createList() {
    [...richestPeople].forEach((person, idx) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-idx', idx);

        listItem.innerHTML = `
        <span class='numbers' >${idx + 1}</span>
        <div class='draggable' draggable=true >
        <p class='person-name' >${person}</p>
        <i class='fas fa-grip-lines' ></i>
        </div>
        `
        listItems.push(listItem);
        draggableList.appendChild(listItem)
    })
}