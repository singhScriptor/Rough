function halfGasGlass(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
    for(let k=0;k<n;k++){
        let jr=''
        for(let l =0;l<k+1;l++){
            jr+='*'
        }
        console.log(jr)
    }
}
halfGasGlass(5)