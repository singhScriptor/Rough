function reverseArray(arr){
    let revArr=[]
    for(let i=arr.length-1;i>=0;i--){
        revArr.push(arr[i])
    }
    return revArr
}
let arr=[17,32,9,5,21,14]
console.log(reverseArray(arr))