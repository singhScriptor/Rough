function burgerType(X,Y,N,R){
    let premium=Math.min(Math.floor(R/Y),N)
    while(premium >= 0){
        let remain= R-premium*Y
        let normal=N-premium
        if(normal*X <= remain){
            return [normal,premium]
        }
        premium--
    }
    return -1
}
console.log(burgerType(2,10,4,12))