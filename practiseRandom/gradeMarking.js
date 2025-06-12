function gradeMarking(n){
    let result;
    switch(true){
        case (n>= 90 && n<= 100):
            result="A"
            break
        case (n>=80 && n<90):
            result ="B"
            break
        case (n>=70 && n<80):
            result="C"
            break
        case (n>=60 && n<70):
            result="D"
            break
        case (n>=50 && n<60):
            result="E" 
            break
        case (n<50):
            result="F"
            break    

    }
    return result
}
console.log(gradeMarking(75))