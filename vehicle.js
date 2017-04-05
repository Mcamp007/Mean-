function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;
}
