function printPattern(){
    let i=1
    while(i<=5){
        let j=1,str=''
        while(j<=2*i-1){
            str+=i+''
            j++
        }
        i++
        console.log(str)
    }
}
printPattern(5)