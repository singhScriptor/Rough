function printPattern(n){
    let i=1
    while(i<=n){
        let j=1,str=''
        while(j<=n-i+1){
            str+='*'
            j++
        }
        console.log(str)
        i++
    }
}
printPattern(4)