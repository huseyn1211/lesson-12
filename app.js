// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age

//     }
//     celebrateBirthday(){
//         this.age +=1
//     }
// }
// let b = new Person("hesen",15)
// b.celebrateBirthday()

// console.log(b)
// let a = "salam menim cavanligimin ogrusu"
// function myFunc(a){
//     return a.split("").reverse().join("")

// }
// console.log(myFunc(a))
// let a = [1,2,3,4,5,6,7,8,9]
// function myFunc(a){
//     let sum = 0
//     for(i=0;i<a.length;i++){
//         if(a[i] % 2 ===1){
//             sum+=a[i]
//         }
        
//     }
//     return sum
// }

// console.log(myFunc(a))
class Person {
    constructor(surname,age,name){
        this.surname = surname;
        this.age = age;
        this.name = name
    }
    changeName(){
        this.name = "selim"
    }
}

class Admin extends Person{
    constructor(surname,age,name,role,salary){
        super(surname,age,name);
        this.role = role;
        this.salary = salary

    }
}
class Player extends Admin{
    constructor(surname,age,name,role,salary,id){
        super(surname,age,name,role,salary);
        this.id = id
    }

}

let a = new Person("quluzade",26,"huseyn")
a.changeName()
console.log(a)


let b = new Admin('quluzade',26,'huseyn',"salam","1600manat")
b.changeName()
console.log(b)



let c = new Player("hesimov",33,"aga","main","1300","1212")
c.changeName()
console.log(c)