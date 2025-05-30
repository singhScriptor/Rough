function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
}
printPattern(5)


function whileLoopPattern(n){
    let i=0
    while(i<n){
        let str=''
        let j=0
        while(j<n-i){
            str+='*'
            j++
        }
        console.log(str)
        i++
    }
}
whileLoopPattern(5)