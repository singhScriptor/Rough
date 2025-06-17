function alternteCase(str){
    let ans=''
    let flag =true
    for(let i  of str){
        if(/[a-zA-Z]/.test(i)){
            if(flag){
                ans+=i.toUpperCase()
            }
            else{
                ans+=i.toLowerCase()
            }
            flag=!flag
        }
        else{
            ans+=i
        }
    }
    return ans
}
let str='hello world '
console.log(alternteCase(str))