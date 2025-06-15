function sumOfOddEven(n){
    let oddSum=0,EvenSum=0
    for(let i=1;i<=n;i++){
        if(i%2 === 0){
            EvenSum+=i
        }
        else if(i % 2 !== 0){
            oddSum+=i
        }
    }
    return {oddSum,EvenSum}
}
let n=6
console.log(sumOfOddEven(n))