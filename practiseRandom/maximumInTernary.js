function maximumOfThreeNumber(a,b,c){
    return (a>b && a>c) ? a : (b>a && b>c) ? b : c

}
console.log(maximumOfThreeNumber(10,20,30))