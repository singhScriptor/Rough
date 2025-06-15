function findLargestDigit(n){
    n=Math.abs(n)
    let maxi=0
    while(n){
        let temp=n%10
        n=Math.floor(n/10)
        if(temp > maxi){
            maxi=temp
        }
    }
    return maxi
}
let n=-5673
console.log(findLargestDigit(n))