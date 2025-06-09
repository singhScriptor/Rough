function swapNumber(a,b){
    [a,b] = [b,a]
    return {a,b}
}
let a=3,b=4
console.log(swapNumber(a,b))
