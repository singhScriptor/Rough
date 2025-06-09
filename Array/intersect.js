function findInterSection(a,b){
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(b.indexOf(a[i]) !== -1 && arr.indexOf(a[i]) === -1){
            arr.push(a[i])
        }
    }
    return arr
}
let a=[1,2,2,3,4]
let b=[2,3,3,5]
console.log(findInterSection(a,b))