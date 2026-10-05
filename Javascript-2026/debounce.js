

const btn = document.querySelector('.button__clickme')

function handleClick(e) {
    console.log(e)
}

function debounce(func, wait) {

    let timerId;
    return function debounceTrigger(...args) {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, wait);

    }
}

btn.addEventListener('click', debounce(handleClick, 300))