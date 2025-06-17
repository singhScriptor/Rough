function printPattern(n){
    let str='',pattern=''
    for(let i=1;i<=n;i++){
        str+=i
        pattern+=str+'\n'
    }
    console.log(pattern)

}
printPattern(5)


function print(n){
    let patt='',st='',i=1
    while(i<=n){
        st+=i
        patt+=st+'\n'
        i++
    }
    console.log(patt)

}
print(5)
