function checkDivisiblity(num){
    //here we have to check number 3 and 5 are divisble by num or not

    if(num % 3 !== 0 && num % 5 !== 0){
        return "Not Divisible"
    }
    return "Divisible"
}
let num=10
console.log(checkDivisiblity(num))