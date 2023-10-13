//Write a program to sort a string according to the frequency of character and return the final string.
//samples input 'hello world' output 'lloohe wrd'
//samples input 'tree' output 'eetr'

function sortString(str) {
  let strArr = str.split("");
  let charMap = {};
  let finalStr = "";
  for (let char of strArr) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  let sortedArr = Object.entries(charMap).sort((a, b) => b[1] - a[1]);
  for (let char of sortedArr) {
    finalStr += char[0].repeat(char[1]);
  }
  return finalStr;
}


//run the samples for sortString
console.log(sortString('hello world'));
console.log(sortString('tree'));
