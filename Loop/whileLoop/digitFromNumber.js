function digitFromNumber(num){
    while(num){
        let temp=num % 10
        num= Math .floor(num /10)
        console.log(temp)
    }
}
digitFromNumber(153) // 3, 5, 1