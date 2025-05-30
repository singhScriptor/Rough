function armStrong(n){
    let num=n
    let sum=0
    while(num){
        let temp=num%10
        sum+=temp**3
        num=Math.floor(num/10)
    }
    return   n === sum
}
let n=153
console.log(armStrong(n)) // true