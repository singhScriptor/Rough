function reversePant(n){
    let i=0;
    while(i<n){
        let j=0,str='';
        while(j<n-i){
            str+='*'
            j++
        }
        console.log(str)
        i++
    }
    let k=1
    while(k<=n){
        let l=0,atr=''
        while(l<k){
            atr+='*'
            l++
        }
        console.log(atr)
        k++
    }
}
reversePant(5)
