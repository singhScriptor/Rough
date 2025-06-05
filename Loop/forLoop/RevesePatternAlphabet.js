function reverseAlphabetPattern(n){
    //n=n.split('').reverse().join('')
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<=i;j++){
            str+=String.fromCharCode(65+j)
        }
        console.log(str)
    }
}
reverseAlphabetPattern(5)