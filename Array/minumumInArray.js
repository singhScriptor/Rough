function miniMumInArray(arr){
    let mini=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] < mini){
            mini=arr[i]
        }
    }
    return mini
}
let arr=[5,6,9,2,-2]
console.log(miniMumInArray(arr))    // -2