function compareStr(str1, str2) {
  let obj1 = {};
  let arr1 = str1.split('')
  let obj2 = {};
  let arr2 = str2.split('')
  if (str1.length !== str2.length) return false;
  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }
  for (let value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(compareStr('ab', 'ba'));