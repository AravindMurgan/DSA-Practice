function getValues(id) {
    debugger
    let element = document.querySelector(`#${id}`);
    let inputs = element.querySelectorAll('input[type="text"]');
    let obj = {};

    for (let input of inputs) {
        let inputValue = input.value;
        let names = input.name.split('.');
        let tmpObject = obj;

        for (let i = 0; i < names.length; i++) {
            tmpObject[names[i]] = { ...tmpObject[names[i]] };
            if (i === names.length - 1) {
                tmpObject[names[i]] = inputValue;
            } else {
                tmpObject = tmpObject[names[i]];
            }
        }
    }

    return obj;
}



const callMe = () => {
    console.log(getValues('parent'));
}

const input = document.addEventListener('keyup', callMe)