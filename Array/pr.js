// // let arr=[]
// // arr.push(12)
// // arr.push(2)
// // arr.push(4)
// // arr.push(13)
// // console.log(arr)
// // arr.shift()// will remove from the beginning 
// // console.log(arr)
// // arr.unshift(12)
// // console.log(arr)
// // arr.splice(2,1)
// // console.log(arr)


// let stack=[]
// stack.push(1)
// stack.push(4)
// stack.push(5)
// stack.push(8)
// stack.push(12)
// console.log(stack)
// console.log(stack[stack.length-1])//display the last element of an array
// console.log(stack[0])//will dispaly first element of the stack


// let ab=[]
// if(ab.length === 0 ){
//     console.log('true')
// }
// else{
//     console.log( 'false')

// }

// console.log(stack.length)


class stack{
    constructor(){
        this.stack=[]
    }
    pushELe(item){
        this.stack.push(item)
    }
    popItem(){
        if(! this.isEmpty()){
            return this.stack
        }
    }
}    