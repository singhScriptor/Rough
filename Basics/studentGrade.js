function studentGrade(grade){
    switch(true){
        case (grade <= 50):
            console.log("D")
            break
        case (grade > 50 && grade < 60):
            console.log("C")
            break
        case (grade >= 60 && grade <= 75):
            console.log("B")
            break
        case (grade > 75):
            console.log("A")
            break
        default:
            console.log("invalid")
            break                
    }

}
studentGrade(45) // D
studentGrade(58) // C
studentGrade(70)   // B
studentGrade(80) // A