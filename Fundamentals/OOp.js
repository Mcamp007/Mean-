var Todd = {
 name:"Todd",
sayName : function(){
  console.log("Todd");
 }
}
Todd.sayName();

function Student(name,age){
    console.log(this);
    this.name= name;
    this.age= age;
  }


var jay = new Student("jay",23);
var Sara = new Student("Sara",24);
// jay.sayName();
// Sara.sayName();
console.log(Sara.age)
function Person(name){
console.log(this);
this.name = name;
this.sayname = function(){
  console.log(name);
   }
}

var jimmy = new Person("Jimmy");
 jimmy.sayname();
