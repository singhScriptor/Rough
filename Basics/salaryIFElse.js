function findSalary(salary){
    if(salary>=15){
        console.log(30)
    }
    else if(salary >= 10 && salary < 15){
        console.log(20)
    }
    else if(salary >= 5 && salary < 10){
        console.log(10)
    }
    else{
        console.log(0)
    }
}
findSalary(20) // 30