function alphabetPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<=i;j++){
            str+=String.fromCharCode(65+j)
        }
        console.log(str)
    }
}

alphabetPattern(5)