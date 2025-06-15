// // SHADOWING
// let x=23
// function abc(){
//     let x=24
//     console.log(x)
// }
// abc()
// console.log(x)// this is legal shadowing


// // legal SHadowing
// let a=25
// function foo(){
//     var a = 43
//     console.log(a)
// }
// foo()
// console.log(a)

// //illegal Shadowing
// // let m=23
// // let m=24
// // console.log(m)

// let j=2
// if(j){
//     let j=43 // this will be legal
//     console.log(j)
// }
// console.log(j)


// function woof(){
   
//     var a=43
//     let a=23
//     console.log(a)
// }
// woof()

function hollowPyramide(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<=n-i-1;j++){
            str+=' '
        }
        if(i===n-1){
            for(let k=0;k<2*n;k++){
                str+='*'
            }
        }
        else{
            str+='*'
            for(let l=0;l<2*i;l++){
                str+=' '
            }
            if(i>0){
                str+='*'
            }
        }
        console.log(str)
    }
}
hollowPyramide(4)


function burgerType(X,Y,N,R){
    let premium= Math.min(Math.floor(R/Y),N)
    while(premium >= 0){
        let remaining=R-premium*Y
        let normal=N-premium
        if(normal * X <= remaining){
            return [normal,premium]
        }
        premium--
    }
    return [-1]
}
console.log(burgerType(2,10,4,12))