function scoreReward(arr){
    let jrr=[]
    for(let i=0;i<arr.length;i++){
        let [name,score]=arr[i].split(': ')
        let res = parseInt(score);
        if(res >= 90){
            name+='🏆'

        }
        if(res <= 60){
            name+='❌'
        }
        jrr.push(`${name}: ${res}`)

    }
    return jrr
}
let arr=["Alice: 91", "Bob: 54", "Eve: 78"]
console.log(scoreReward(arr))