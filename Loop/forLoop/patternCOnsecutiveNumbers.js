function consecutiveNumberPattern(n){
    let num=1
    for(let i=1;i<=n;i++){
        let str=[]
        for(let j=1;j<=i;j++){
            str.push(num++)
        }
        console.log(str.join(' '))

    }
}
consecutiveNumberPattern(5)