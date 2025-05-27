function sumofMultipleRange(n,x){
    let sum=0,i=1
    while(i<=n){
        if(i % x === 0){
            sum+=i
            
        }
        i++
        

    }
    return sum
}
let n=10,x=3
console.log(sumofMultipleRange(n,x)) // Output: 4