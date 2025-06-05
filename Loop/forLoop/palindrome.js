function checkPalindrome(arr){
    for(let i=0;i<arr.length/2;i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return 'NO'
        }
    }
    return "YES"
}
let arr=[1,2,3,2,1]
console.log(checkPalindrome(arr))
/// here we all the do the code to check whether the digits of the an array is palindrome  or not by confirming yes or no
