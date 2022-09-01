function   distanceFromHqInBlocks(num1){
    if (num1>42){
        return num1 - 42;
    }
    else{
        return 42 - num1;
    }
}


function   distanceFromHqInFeet(num2){
    return distanceFromHqInBlocks(num2) * 264;
}

function distanceTravelledInFeet( num3, num4){
 if (num3 >num4){
     return (num3- num4) * 264;
 }
 else {
     return (num4 - num3) * 264;
 }
}


 function calculatesFarePrice(start, destination){
     let distanceFeet = distanceTravelledInFeet(start,  destination)
      if (distanceFeet < 400){
          return 0;
      }
    else if( distanceFeet >= 400 &&  distanceFeet < 2000){
    return (distanceFeet - 400 ) * 0.02;
    }

    else if ( distanceFeet > 2000 && distanceFeet <= 2500){
    return 25;
    }

    else {
    return "cannot travel that far";
      }

 }


function wrapAdjective(flair = "*"){

    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
    
}