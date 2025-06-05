function pascalFind(n){
    for(let i=0;i<n;i++){
        let str=[1]
        for(let j=1;j<=i;j++){
            str[j]=str[j-1]*[i-j+1]/j
        }
        console.log(str.join(' '))
    }
}
pascalFind(5)

