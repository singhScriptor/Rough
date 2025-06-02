function checkPerfectSqaure(n){
    let sum=0
    for(let i=1;i<=n/2;i++){
        if(n%i===0){
            sum+=i
        }
    }
    return sum==n
}
let n =6
console.log(checkPerfectSqaure(n))