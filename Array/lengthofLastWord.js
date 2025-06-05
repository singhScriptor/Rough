function lengthOfLastWord(str){
    //str.trim()
    let count=0,flag=false
    for(let i=str.length-1;i>=0;i--){
        if(str[i] !== ' '){
            count++
            flag=true
        }
        else if(flag){
            break
        }
    }
    return count
}
console.log(lengthOfLastWord("   fly me   to   the moon   "))