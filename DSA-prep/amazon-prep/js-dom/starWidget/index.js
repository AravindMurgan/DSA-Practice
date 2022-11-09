const stars = document.querySelectorAll('.star');
let rating = document.querySelector('.rating');

document.querySelector('.star-container').addEventListener('click', starRating)

function starRating(e) {
    console.log('click')
    stars.forEach(star => {
        star.classList.remove('star__checked');
        debugger
        const i = [...stars].indexOf(e.target);
        console.log('im idx', i)
        if (i > -1) {
            console.log('im tr')
            stars[i].classList.add('star__checked');
            rating.textContent = `${stars.length - i}/5`
        } else {
            rating.textContent = `0/5`;
        }
    })
}               