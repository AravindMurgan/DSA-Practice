// const userCardTemplate = document.querySelector('[data-template-card-container]');
// const userCardContainer = document.querySelector('[data-user-card-container]');
// const inputSearch = document.querySelector('#search')

// let users = []

// const onChangeInput = (e) => {
//     console.log('im called')
//     const value = e.target.value.toLowerCase()
//     console.log(value)
//     users.forEach(user => {
//         const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);

//         user.element.classList.toggle('hide', !isVisible)
//     })
// }

// const debounce = (func, delay) => {
//     let timer;
//     return function () {
//         let context = this
//         let args = arguments
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             func.apply(context, args)

//         }, delay)
//     }
// }

// const betterFunction = debounce(onChangeInput, 1000)
// // i

// inputSearch.addEventListener('input', betterFunction)

// fetch('https://jsonplaceholder.typicode.com/users').
//     then(res => res.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = userCardTemplate.content.cloneNode(true).children[0]
//             const header = card.querySelector('[data-header]')
//             const body = card.querySelector('[data-body]')
//             header.textContent = user.name
//             body.textContent = user.email
//             userCardContainer.append(card)
//             return { name: user.name, email: user.email, element: card }
//         })
//     })

const userCardTemplate = document.querySelector('[data-user-card-template]')
const userCard = document.querySelector('[data-user-card-container]')

const input = document.querySelector('#search');

let users = []

fetch('https://jsonplaceholder.typicode.com/users').
    then(res => res.json()).
    then(data => {
        users = data.map(item => {
            console.log(item)
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector('[data-email]')
            const body = card.querySelector('[data-name]')
            header.textContent = user.name
            body.textContent = user.email
            userCard.append(card)
        })
    })