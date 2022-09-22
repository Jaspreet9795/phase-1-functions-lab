const scuberHq = 42
function distanceFromHqInBlocks(pickUp){
    return  Math.abs(scuberHq-pickUp);
}


function distanceFromHqInFeet(pickUp){
    let distanceFeet = distanceFromHqInBlocks(pickUp)
    return distanceFeet*264
}


function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination )*264)
}


function calculatesFarePrice(start, destination){
    let feetTravel=distanceTravelledInFeet(start, destination)
    if (feetTravel<=400){return 0}
    else if (feetTravel<=2000){ return (feetTravel-400)*0.02}
    else if (feetTravel<=2500){return 25}
    else {return 'cannot travel that far'}
    }
