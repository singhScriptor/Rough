function avoidDivisibleBy4(n){
    for(let i=0;i<=n;i++){
        if(i% 4 === 0){
            continue;
        }
        if(i%2 === 0){
            console.log(i)
        }
    }
}
avoidDivisibleBy4(10) // 2 6 10