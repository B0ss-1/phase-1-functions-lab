// Code your solution in this file!

// returns driving blocks
function distanceFromHqInBlocks(end){
    if (end < 42) { 
        return 42 - end;
    } else{            
        return end - 42;
    }
    

}
function distanceFromHqInFeet(block) {
    const drivingBlocks = distanceFromHqInBlocks(block)
    return (drivingBlocks  * 264)
    
}

function distanceTravelledInFeet(a, b){

    if (a < b) {
        return (b - a) * 264;
    }else {
        return (a - b) * 264;
    }
    
    
}

const calculatesFarePrice = (start, destination) => {
    let travel = Math.abs((destination - start) * 264)

    if (travel <= 400) {
        return 0;
    } else if (travel > 400 && travel < 2000) {
        return (travel - 400) * 0.02;
    } else if (travel > 2000 && travel < 2500){
        return 25
    } else if (travel > 2500) {
        return "cannot travel that far"
    }
}
