function semiHourGlass(n){
    let i=0
    while(i<n){
        let j=0,str=''
        while(j<n-i){
            str+='*'
            j++
        }
        i++
        console.log(str)
    }
    let l=0
    while(l<n){
        let m=0;str=''
        while(m<l+1){
            str+='*'
            m++
        }
        l++
        console.log(str)
    }
}
semiHourGlass(5)