function moveZero(arr){
    let nonZero=0
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            [arr[i] ,arr[nonZero]]=
            [arr[nonZero],arr[i]]
            // or you can write like this
            //let temp=arr[i]
            // arr[i] = arr[nonZero]
            // arr[nonZero] =temp

            nonZero++
        }
    }
    return arr
}
let arr=[0,1,0,3,2,12]
console.log(moveZero(arr))