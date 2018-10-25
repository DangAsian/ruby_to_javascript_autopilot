
function getNewCar() {
var newCar =  {
                city: 'Toronto',
                passengers: 0,
                gas: 100,
              }
return newCar
}

cars = []


function addCar(cars, new_car){
   cars.push(new_car)
   return `Adding new car to fleet. Fleet size is now ${cars.length}.`;
}

// console.log(addCar(cars, getNewCar()))

//
function pickUpPassenger(car){
  car.passengers += 1
  car.gas -= 10
  return `Picked up passenger. Car now has ${car.passengers} passengers.`;
}

function getDestination(car){
  if (car.city === 'Toronto'){
    return 'Mississauga';
  } else if (car.city === 'Mississauga'){
    return 'London';
  } else if (car.city === 'London'){
    return 'Toronto';
  }
}

function fillUpGas(car){
  var old_gas = car.gas
  car.gas = 100
  return `Filled up to ${car.gas} on gas from ${old_gas}%`;
}

function getGasDisplay(gas_amount){
  return `${gas_amount}%`;
}

function drive(car, city_distance){
  if (car.gas < city_distance){
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= city_distance;
  return `Drove to ${car.city}. Remaining gas: ${getGasDisplay(car.gas)}.`;
}


function commandFleet(cars){
  for(var i = 0; i < cars.length; i++) {
    var car = cars[i];
    var action = act(car);
    console.log(`Car ${i + 1}: ${action}`);
  }
    console.log('---');
}

function dropOffPassengers(car){
  var previous_passengers = car.passengers
  car.passengers = 0
  return `Dropped off ${previous_passengers} passengers.`;
}

function act(car){
  var distance_between_cities = 50

  if (car.gas < 20){
     return fillUpGas(car);
  } else if (car.passengers < 3) {
     return pickUpPassenger(car);
  } else {
      if (car.gas < distance_between_cities){
        return fillUpGas(car);
      }
    var drove_to = drive(car, distance_between_cities);
    var passengers_dropped = dropOffPassengers(car);
    return `${drove_to} ${passengers_dropped}`;
  }
}


function addOneCarPerDay(cars, num_days){
  for(var i = 0; i < 10; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}



addOneCarPerDay(cars, 10);
