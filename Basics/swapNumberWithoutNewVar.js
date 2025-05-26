// swap the two number without using new variable
function swapNumber(a,b){
    a=a+b
    b=a-b
    a=a-b
    return [a,b]
}
console.log(swapNumber(10,20)) // [20, 10]