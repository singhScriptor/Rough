function multiply(n){
    for(let i=2;i<=n;i++){
        let str='',count=1
        for(let j=1;j<=10;j++){
            str+=(i*count)+' '
            count++
        }
        console.log(str)
    }
}
multiply(4)


function fibsSeries(n){
    let a=0,b=1
    for(let i=3;i<=n;i++){
        let temp=a+b
        a=b
        b=temp
    }
    return b
}
console.log(fibsSeries(6))