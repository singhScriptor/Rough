function gcd(a,b){
    a=Math.abs(a)
    b=Math.abs(b)
    while(b>0){
        let temp=b
        b=a%b
        a=temp
    }
    return a
}
console.log(gcd(12,15))
