// function printPattern(n){
//     for(let i=1;i<=n;i++){
//         let str=''
//         for(let j=1;j<=i;j++){
//             str+=j
//         }
//         console.log(str)
//     }
// }
// let n=4
// printPattern(n)


function printPattern(n){
    for(let i=1;i<=n;i++){
        let str=''
        for(let j=1;j<=2*i-1;j++){
            str+=i
        }
        console.log(str)
    }
}
printPattern(5)