function fibonacciSereis(n){
    if(n === 0 || n === 1){
        console.log(0)
        return;
    }
    if(n === 2){
        console.log(1)
        return ;
    }
    let a=0, b=1,count=3
    while(count <= n){
        let temp= a+b
        a=b
        b=temp
        count++
    }
    console.log(b)
}
fibonacciSereis(9)