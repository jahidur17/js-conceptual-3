/*function signature/sample */
function willSuccess(marks) {
    if(!Array.isArray(marks)){
        return "Invalid"
    }
  // You have to write your code here
  let pass = 0;
  let fail = 0;
  for (let mark of marks) {
    if (mark >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  return pass > fail;
}
const result = willSuccess([90]);
console.log(result);
