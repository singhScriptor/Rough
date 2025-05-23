function printCost(distance){
    switch(true){
        case (distance <= 100):
            console.log(5)
            break
        case (distance > 100 && distance <=500):
            console.log(8)
            break
        case (distance > 500 && distance <1000):
            console.log(10)
            break
        case (distance >= 1000):
            console.log(12)
            break
        default:
            console.log("Invalid distance")
            break            
    }
}
let distance=700
printCost(distance) // 10




function distanceCost(dist){
    if(dist <=100){
        return 5
    }
    else if(dist > 100 && dist <= 500){
        return 8
    }
    else if(dist > 500 && dist < 1000){
        return 10
    }
    else if(dist >= 1000){
        return 12
    }
    else{
        return "Invalid distance"
    }
}
console.log(distanceCost(700)) // 10