function printPattern(n){
    let i=0
    while(i<n){
        let j=0,str=''
        while(j<n-i){
            str+='*'
            j++
        }
        console.log(str)
        i++

    }
}
let n=5
printPattern(n)