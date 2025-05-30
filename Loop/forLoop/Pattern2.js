function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
    for(let l=0;l<n;l++){
        let str=''
        for(let m=0;m<l+1;m++){
            str+='*'
        }
        console.log(str)
    }
}
printPattern(5)