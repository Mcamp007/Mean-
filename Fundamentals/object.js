function vehicleConstructor(name, wheels, passengers){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,whels,passengerNumber, speed);

  }
    var vehicle = {};
var distanceTraveled = 0;
var self = this;
function updateDistancetraveled(){}
  distancetraveled += self.speed;
 console.log(distanceTraveled);

 vehicle.makeNoise = function( ){
 console.log("making noise");
 }

return vehicle;
}





var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise()
Bike.makeNoise = function(){
  console.log("ring ring")
}
