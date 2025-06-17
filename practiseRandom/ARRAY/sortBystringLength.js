function sortArrayByStringLength(arr){
    return arr.sort((a,b)=>a.length-b.length)
}
console.log(sortArrayByStringLength(['GeeksforGeeks', 'I', 'from', 'am']))
