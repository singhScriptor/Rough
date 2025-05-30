function largestDigit(n){
    let maxi=0
    n=Math.abs(n)
    while(n){
        let temp=n%10
        if(temp>maxi){
            maxi=temp
        }
        n=Math.floor(n/10)
    }
    return maxi
}
let n=-5673
console.log(largestDigit(n))