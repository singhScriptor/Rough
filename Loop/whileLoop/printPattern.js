function printPattern(){
    let i=1
    while(i<=4){
        let j=1,str=''
        while(j<=i){
            str+=j+''
            j++
        }
        i++
        console.log(str)
    }
}
printPattern(4)