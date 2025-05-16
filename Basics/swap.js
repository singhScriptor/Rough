function swapNumber(a,v){
    let temp=a
    a=v
    v=temp
    return [a,v]
}
console.log(swapNumber(5,10)) // [10,5]