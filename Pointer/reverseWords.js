// 0151
// 151. Reverse Words in a String M 双指针
var reverseWords = function(s) {
    let newS = s.trim().split(' ');
    let left = 0;
    let right = newS.length-1;

    while(left < right) {
        [newS[left], newS[right]] =  [newS[right], newS[left]];
        left++;
        right--;
    }
    return newS.filter(item => item.length !== 0).join(' ')
}

console.log(reverseWords("a good   example"))