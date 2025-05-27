// while loop for print even number 
function evenNumber(n){
    let i=1
    while(i<=n){
        if(i% 2 === 0){
            console.log(i)
        }
        i++
    }
}
evenNumber(10) // 2, 4, 6, 8, 10