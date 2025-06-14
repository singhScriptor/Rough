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
    return [-1]

}
let X=2,Y=10,N=4,R=12
console.log(burgerType(X,Y,N,R))
