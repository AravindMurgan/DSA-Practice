
function main(input){
    process.stdout.write("Hello"+input)
}
process.stdin.resume()
process.stdin.setEncoding("utf-8")
var stdin_input = ""

process.stdin.on("data",function(input){
    stdin_input +=input  //READ INPUT from STDIN
})

process.stdin.on("end",function(){
    main(stdin_input)
})