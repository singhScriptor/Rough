function reverseString(str){
    let rev='',i=0
    while(i<str.length){
        rev=str[i]+rev
        i++
    }
    return rev
}
let n="abcde"
console.log(reverseString(n))