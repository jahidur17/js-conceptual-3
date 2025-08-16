function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let count = 0;
  // str =str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
let result = countVowels("jahid");
console.log(result);



// again solve this vowel check //
function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let count = 0;
  let vowels = "aeiouAEIOU"; 

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Jahid")); // Output: 2
console.log(countVowels("Ovi"));   // Output: 2

