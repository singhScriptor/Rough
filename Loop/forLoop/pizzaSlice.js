function totalPizza(n,k){
    
    for(let i=0;i<=k;i++){
        let small=k-i
        if(3*small + 5 * i === n){
            return {small,i}
        }
    }
    return -1
}
console.log(totalPizza(16,4))