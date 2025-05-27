function printTable(){
    let multiply =2
    while(multiply <= 4){
        let count=1,str=''
        while(count <= 10){
            str+=(multiply * count)+ " "
            count++
        }
        multiply++
        console.log(str)
    }
}
printTable(4)