function sumOfOdd(n){
    let sum=0
    for(let i=1;i<=n;i++){
        if(i%2 !== 0){
            sum+=i
        }
    }
    return sum
}
console.log(sumOfOdd(6)) // Output: 9 (1 + 3 + 5)


function sumOfEVen(n){
    let sum=0
    for(let i=1;i<=n;i++){
        if(i%2 === 0){
            sum+=i
        }
    }
    return sum
}
console.log(sumOfEVen(6)) // Output: 12 (2 + 4 + 6)