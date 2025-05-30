// function findPalindrome(n){
//     if(n<0)return false
//     for(let i=0;i<n/2;i++){
//         if(n[i] !== n[n.length-1-i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(findPalindrome(121)) // true


function palindrome(n){
    if(n<0)return false
    n=n.toString()
    let i=0
    while(i<n/2){
        if(n[i] !== n[n.length-1-i]){
            return false
        }
        i++
    }
    return true
}
console.log(palindrome(121)) // true

