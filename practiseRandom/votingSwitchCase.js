function votingELigiblity(age){
    let ans;
    switch(true){
        case (age>= 18):
            ans=true
            break
        case age<18:
            ans=false
            break
        default:
            ans=false
            break        
    }
    return ans
}
console.log(votingELigiblity(17))