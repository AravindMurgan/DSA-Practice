const getValues = (id) => {
    debugger
    const element = document.querySelector(`#${id}`);
    const inputs = element.querySelectorAll('.input');
    let obj = {}
    for (let input of inputs) {
        let inputValue = input.value;
        let names = input.name.split('.');
        let tempObj = obj

        for (let i = 0; i < names.length; ++i) {
            tempObj[names[i]] = { ...tempObj[names[i]] }

            if (i == names.length - 1) {
                tempObj[names[i]] = inputValue
            } else {
                tempObj = tempObj[names[i]]
            }
        }
    }

    return obj
}

const callMe = () => {
    console.log(getValues('parent'));
}

const input = document.addEventListener('keyup', callMe)