function checkPalindrome(n){
    n=n.toString()
    // you can also use this inside the loop like (Math.floor(n/2))
    for(let i=0;i<=Math.floor(n.length/2);i++){
        if(n[i] !== n[n.length-1-i]){
            return false
        }
    }
    return true
}
let n=121
console.log(checkPalindrome(n))


function palindromeCheck(n){
    n=n.toString()
    for(let i=0;i<Math.floor(n/2);i++){
        if(n[i] !==  n[n.length-1-i]){
            return false
        }
    }
    return true
}
let v=141
console.log(palindromeCheck(v))
