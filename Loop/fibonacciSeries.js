function fibonacciSeries(n){
    let a=0,b=1
    for(let i=3;i<=n;i++){
        let temp=a+b
        a=b
        b=temp
    }
    return b
}
console.log(fibonacciSeries(9))