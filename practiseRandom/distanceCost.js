function distanceCost(distance){
    switch(true){
        case (distance >0 && distance<= 100):
            return 5
        case (distance <= 500):
            return 8
        case (distance <= 1000):
            return 10
        case (distance > 1000):
            return 12
        // default:
        //     return 'Invalid'                

    }
}
let d=700
console.log(distanceCost(d))

function costOfDistance(d){
    if(d>0 && d <= 100){
        return 5
    }
    else if(d <= 500){
        return 8
    }
    else if(d <= 1000){
        return 10
    }
    else if(d > 1000){
        return 12
    }
    else{
        return 'Invalid'
    }
}
let de=700
console.log(costOfDistance(de))
