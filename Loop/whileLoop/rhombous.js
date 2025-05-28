function rhombusPattern(n){
    let  i=1
    while(i <= n){
        let j=1,str=''
        while(j<=n-i){
            str+=' '
            j++
        }
        let l=1
        while(l <= n){
            str+='*'
            l++

        }
        i++
        console.log(str)
    }
}
let n=4
rhombusPattern(n)