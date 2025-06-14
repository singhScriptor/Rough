function printSeries(n){
    for(let i=1;i<=n;i++){
        console.log(i)
    }
}
printSeries(5)

function sumOfX(n,x){
    let sum=0
    for(let i=0;i<n;i++){
        if(i%x === 0){
            sum+=i
        }
    }
    return sum
}
let n=20,x=4
console.log(sumOfX(n,x))


function multiply(n){
    for(let i=2;i<=4;i++){
        let str=''
        for(let j=1;j<=10;j++){
            str+=(i*j)+' '
        }
        console.log(str)
    }
}
multiply(4)

function findPerfectSquare(n){
    for(let i=1;i<=n;i++){
        if(i*i <= n){
            console.log(i*i)
        }
    }
}
findPerfectSquare(15)