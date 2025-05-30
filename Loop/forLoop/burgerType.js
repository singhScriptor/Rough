function typesOfBurger(x,y,n,r){
    let premium=Math.min(Math.floor(r/y),n)
    while(premium >= 0){
        let remain= r-premium*y
        let normal=n-premium
        if(normal*x <= remain){
            return [normal,premium]
        }

    }
    return -1

}
