function bruteForceSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return 'true'
        }
        return 'false'
    }
}
console.log(bruteForceSearch([1,2,3,4,5],3)) // Output: true