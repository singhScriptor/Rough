// function checkPrime(n){
//     if(n <= 1)return false
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// function nPrime(n){
//     let x=2,i=0
//     while(i<n){
//         if(checkPrime(x)){
//             console.log(x)
//             i++
//         }
//         x++
//     }
// }
// nPrime(5)


function firstPrime(n){
    let x=2,count=0,arr=[]
    while(arr.length < n){
        let flag =true
        for(let i=2;i<x;i++){
            if(x%i===0){
                flag =false
                break
            }
        }
        if(flag){
            arr.push(x)
            count++
        }
        if(count === n){
            break
        }
        x++
    }
    return arr
}
console.log(firstPrime(5))