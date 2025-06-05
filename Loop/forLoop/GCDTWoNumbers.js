function GCD(a,b){
    //gcd stands for "Greatest common Divisor"
    let min=a<b ? a :b ,result=1
    for(let i=min;i>=0;i--){
        if(a%i ===0 && b%i ===0){
            result=i
            break
        }
    }
    return result
}
let a = 12, b=15
console.log(GCD(a,b))



