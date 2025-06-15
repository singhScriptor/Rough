function countDigit(n){
    //n=Math.abs(Math.floor(n/10))
    if(n===0)return 1
    n=Math.abs(n)
    let count=0
    while(n){
        n=Math.floor(n/10)
        count++
    }
    return count
    
}
console.log(countDigit(12345))