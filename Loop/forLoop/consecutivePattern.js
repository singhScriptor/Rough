function consecutivePattern(n){
    let count=1
    for(let i=1;i<=n;i++){
        let str=[]
        for(let j=1;j<=i;j++){
            str.push(count++)
        }
        console.log(str.join(' '))
    }
}
consecutivePattern(5)