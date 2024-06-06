// 0189. Rotate Array M
// 双指针 空间复度  o(1) queue
var rotate = function(nums, k) {
    let n = nums.length;

    // let movesHeader = n - k % n;

    // while(movesHeader > 0) {
    //     const head = nums.shift();
    //     nums.push(head);
    //     movesHeader--;
    // }
    // return nums;
    k = k % n;
    if(k===0) return;
    const header = nums.slice(0, n-k);
    const tail = nums.slice(n-k);
    nums.splice(0, n, ...tail, ...header)
    return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3));
