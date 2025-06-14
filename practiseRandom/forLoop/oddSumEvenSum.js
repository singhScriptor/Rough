function oddSUmEvenSUm(n){
    let oddSum=0,evenSUm=0
    for(let i=0;i<=n;i++){
        if(i%2 === 0){
            evenSUm+=i
        }
        if(i%2 !== 0){
            oddSum+=i
        }
    }
    return {evenSUm,oddSum}
}
let n=6
console.log(oddSUmEvenSUm(n))