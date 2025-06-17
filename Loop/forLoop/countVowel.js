function countVowel(str){
    str=str.toLowerCase()
    let count=0
    let vowel=['a','e','i','o','u']
    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
            count++
        }

    }
    return count
}
let str='hello'
console.log(countVowel(str))

//2nd method
function countVowels(str){
    let count=0
    for(let i of str.toLowerCase()){
        switch(i){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++
                //break    
        }

    }
    return count
}
let s="Hello"
console.log(countVowels(s))