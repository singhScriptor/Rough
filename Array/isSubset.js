function isSubSet(arr1,n,arr2,m){
    let set1 =new Set()
    for(let i=0;i<n;i++){
        set1.add(arr1[i])
    }
    for(let j=0;j<m;j++){
        if(!set1.has(arr2[i])){
            return false
        }
    }
    return true
}