// Code your solution in this file!
     

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const hqblock = 42;
    return Math.abs(someValue - hqblock);
  }

  function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue) ;
    const hqblock = 42;
    const feetblock = 264
    return Math.abs(someValue - hqblock)* feetblock;
  }

  function distanceTravelledInFeet(start, destination){
    const feetDistance = 264
    return Math.abs(start - destination)* feetDistance;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    let distance = Math.abs(destination - start) * feetPerBlock; 
  
    if (distance <= 400) {
      return 0; 
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  