function SalaryTax(salary){
    if(salary >=15){
        return  30
    }
    else if(salary>=10){
        return 20
    }
    else if(salary >= 5){
        return 10
        
    }
    else{
        return 0
    }
}
console.log(SalaryTax(20))  // 30
