let tableBody = document.querySelector('#table-body');
let table = document.querySelector('#table');
let input = document.querySelector('#my-input');
let caretUpClassName = 'fa fa-caret-up'
let caretDownClassName = 'fa fa-caret-down'

let tableData = [
    {
        name: 'Apple',
        quantity: 29,
        price: 500,
        expiry: '2021-09-22'
    },
    {
        name: 'Orange',
        quantity: 35,
        price: 1500,
        expiry: '2021-09-08'
    },
    {
        name: 'Mosambi',
        quantity: 55,
        price: 2500,
        expiry: '2021-09-15'
    },
    {
        name: 'Banana',
        quantity: 10,
        price: 150,
        expiry: '2021-09-12'
    }
]



function populateTable() {
    tableBody.innerHTML = ''

    tableData.forEach(data => {
        let row = tableBody.insertRow();

        let name = row.insertCell(0);
        name.innerHTML = data.name;

        let quantity = row.insertCell(1);
        quantity.innerHTML = data.quantity;

        let price = row.insertCell(2);
        price.innerHTML = data.price;

        let expiry = row.insertCell(3);
        expiry.innerHTML = data.expiry;
    })
}

populateTable()

let tableColumns = document.querySelectorAll('.table-column');


function clearArrow() {
    let carets = table.getElementsByClassName('caret');
    for (let caret of carets) {
        caret.className = 'caret'
    }
}

function sort_by(field, reverse) {
    console.log(field, reverse);
    let key = function (x) {
        return x[field]
    }

    reverse = !reverse ? 1 : -1

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a))
    }
}

function toggleArrow(e) {
    let element = e.target;
    let field, reverse, caret;

    if (element.tagName == 'SPAN') {
        caret = element.getElementsByClassName('caret')[0]
        field = element.id
    } else {
        caret = element;
        field = element.parentElement.id
    }

    console.log('caret::', caret)
    console.log('field', field)

    let iconClassName = caret.className;
    clearArrow();

    if (iconClassName.includes(caretUpClassName)) {
        caret.className = `caret ${caretDownClassName}`
        reverse = false
    } else {
        caret.className = `caret ${caretUpClassName}`
        reverse = true
    }

    tableData.sort(sort_by(field, reverse));
    populateTable();
}

tableColumns.forEach(column => {
    column.addEventListener('click', toggleArrow)
})

function filterTable(e) {
    let value = e.target.value.toLowerCase();
    let rows = tableBody.getElementsByTagName('TR')
    let flag = false
    for (let row of rows) {
        let cells = row.getElementsByTagName('TD')

        for (let cell of cells) {
            if (cell.textContent.toLowerCase().includes(value)) {
                flag = true
            }
        }

        if (flag) {
            row.style.display = ''
        } else {
            row.style.display = 'none'
        }

        flag = false;
    }
}

input.addEventListener('keyup', filterTable)