function findMajority(arr){
    arr.sort((a,b)=>a-b )
    let elements=arr[Math.floor(arr.length/2)]
    let count=0
    for(let i =0 ;i < arr.length;i++){
        if(arr[i] === elements){
            count++
        }
    }
    return count > Math.floor(arr.length/2) ? elements : -1
}
let arr=[3,3,4,2,3]
console.log(findMajority(arr))