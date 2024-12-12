let person = {
    age:20,
   setAge(){
    return this.age += 5
   },

   newAge(){
    return 65 -this.age


   }
}
 person.setAge()
console.log(person.age),


person.newAge()
console.log(person.newAge())

