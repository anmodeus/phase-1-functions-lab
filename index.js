// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let n = someValue - 42;
    return Math.abs(n);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination){
    let d = (start - destination)*264;
    return Math.abs(d);
}

function calculatesFarePrice(start, destination){
    let feetCharged = distanceTravelledInFeet(start, destination);

        let fareMessage;
    
        if (feetCharged >= 400 && feetCharged<= 2000){
            fareMessage = (feetCharged - 400)* 0.02;
        }
        else if (feetCharged >2000 && feetCharged <=2500){
            fareMessage = 25;
        }
        else if (feetCharged > 2500){
            fareMessage = 'cannot travel that far';
        }
        else {
            fareMessage = 0;
        }
        return fareMessage;
    }