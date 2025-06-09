function largestNumber(a,b){
    if(a>b){
        return a
    }
    return b
}
let a=3,b=5
console.log(largestNumber(a,b))

function findLargest(a,b,c){
    if(a>b && a>c){
        return {a}
    }
    else if(b>a && b>c){
        return {b}
    }
    else{
        return {c}
    }
}
let j=3,d=5,e=1
console.log(findLargest(j,d,e))


function largestUsingTernary(a,b){
    return (a>b) ? a : b
}
let n=7,p=2
console.log(largestNumber(n,p))
