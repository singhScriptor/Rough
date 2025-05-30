function findLargestDigit(n){
    let maxi=0
    n=Math.abs(n)
    while(n){
        let temp=n%10
        n=Math.floor(n/10)
        if(temp>maxi){
            maxi=temp
        }
    }
    return maxi

}
let n=-5673
console.log(findLargestDigit(n)) // 7