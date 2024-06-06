// 0443  String Compression M

var compress = function(chars) {
  let count = 1;
  let compressedIndex = 0;
  for(let i =0; i<chars.length; i++) {
    if(chars[i] === chars[i+1]) {
        count++;
    } else {
        chars[compressedIndex] = chars[i];
        if(count > 1) {
            const countStr = count.toString();
            for(let j =0; j<countStr.length; j++) {
                chars[compressedIndex++] = countStr[j];
            }
        }
        count = 1;
    }
  }
  return compressedIndex;
};

console.log(compress(["a"]));