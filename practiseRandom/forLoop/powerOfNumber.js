function powerOfNumber(base,expo){
    let sum=1
    for(let i=0;i<expo;i++){
        sum*=base
     }
    return sum
}
let a=5,b=4
console.log(powerOfNumber(a,b))