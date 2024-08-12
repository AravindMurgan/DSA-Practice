// ////call Apply Bind
// let name = {
//     firstName:'Aravind',
//     lastName:'Murugan'
// }

// function printFullName(place,dob){
//     console.log(`${this.firstName} ${this.lastName} lives in ${place} and his dob is ${dob}`);
// }

// // printFullName.call(name,"Puducherry","26/12/1996")
// ///printFullName.apply(name,["Puducherry","26/12/1996"])
// const copy =print
//FullName.bind(name,["Puducherry","26/12/1996"]);
// console.log(name)

///Prototype
function Dog(name,breed,color){
    this.name =name
    this.breed=breed
    this.color=color
    this.bark=function(){
        return "Woof"
    }
}

const dog1= new Dog('Jack','Labour','gold-brown')
const dog2 = new Dog('Rob','Chippi Paarai','Black')