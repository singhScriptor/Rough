function maximumOf3digit(a, b, c) {
  let ans = a>b && a>c ? a : b>a && b>c ? b : c;
  return ans
}
console.log(maximumOf3digit(10,20,30))
