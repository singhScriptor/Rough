function vowelCheck(word){
    word=word.toLowerCase()
    switch(word){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true
        default:
            return false          
    }
}
let word= 'E'
console.log(vowelCheck(word))