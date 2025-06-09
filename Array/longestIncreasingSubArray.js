function longestIncreasingSubArray(nums){
    if(nums.length === 0) return []
    let maxi=1,current=1,start=0
    for(let i=1;i<=nums.length;i++){
        if(nums[i] > nums[i-1]){
            current++
            if(current >maxi){
                maxi=current
                start=i-current+1
            }
        }
        else{
            current =1
        }
    }
    return nums.slice(start,start+maxi)
}
let nums=[1,2,3,1,2,3,4]
console.log(longestIncreasingSubArray(nums))