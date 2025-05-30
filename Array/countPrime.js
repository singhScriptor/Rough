function isPrime(n){
    if(n < 2)return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
function countPrime(n){
    let count=0
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            count++
        }
        
    }
    return count
}
console.log(countPrime(10)) // 4 (2, 3, 5, 7)


