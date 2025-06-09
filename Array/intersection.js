function intersection(arr1,arr2){
    let result=[]
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i]) !== -1 && result.indexOf(arr1[i]) === -1){
            result.push(arr1[i])
        }
    }
    return result
}
let arr1=[1,2,2,3,4]
let arr2=[2,3,3,5]
console.log(intersection(arr1,arr2))
