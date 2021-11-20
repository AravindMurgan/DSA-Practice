console.log('hello world')

function reverseInt(num){
    debugger
    let data = num.toString().split('');
    for (let num of data){
        data = num + data;
    }
    data = parseInt(data)
    if(num < 0) data = data * -1
    return data

}
console.log(reverseInt(-12345))
