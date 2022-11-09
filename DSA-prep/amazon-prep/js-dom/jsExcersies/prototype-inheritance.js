
const arr = ['Aravind', 'Murugan']

const obj = {
    name: 'Aravind',
    hometown: 'Puducherry'
}

const obj2 = {
    area: 'white town'
}

Object.setPrototypeOf(obj2, obj)

console.log(obj2.name)


