function sumOfMultiple(n,x){
    let sum=0
    for(let i=1;i<n;i++){
        if(i%x === 0){
            sum+=i
        }
    }
    return sum
}
let n=10,x=3
console.log(sumOfMultiple(n,x))
