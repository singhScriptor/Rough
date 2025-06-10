function findGrades(marks){
    let grade;
    switch(true){
        case marks <= 50 :
            grade="D"
            break;
        case marks <60 :
            grade ="C"
            break; 
        case marks <=75:
            grade ="B"
            break;
        case marks > 75:
            grade ="A"
            break
        default:
            grade="Invalid"
            break              

    }
    return grade
}
let marks=51
console.log(findGrades(marks))


function gradesResult(marks){
    if(marks <= 50){
        return "D"
    }
    else if(marks < 60){
        return "C"
    }
    else if(marks <= 75){
        return "B"
    }
    else if(marks > 75){
        return 'A'
    }
    else{
        return 'Invalid'
    }
}
let m=58
console.log(gradesResult(m))

