function factorialSum(n){
    let sum=1,i=1
    while(i <= n){
         sum*=i
         i++
    }
    return sum
}
let n=5
console.log(factorialSum(n))