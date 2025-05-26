function checkDivisiblity(num){
    let ans = num% 3 === 0 || num% 5 === 0 ? "Divisible" : "Not Divisible"
    return ans
}
let num =15
console.log(checkDivisiblity(num)) // Divisible