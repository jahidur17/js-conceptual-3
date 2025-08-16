/*function signature/sample */
function calculateSleepTime(times) {
  let sum = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sum = sum + time;
  }
  let sleepSecond = sum;
  let hour = Math.floor(sleepSecond / 3600); // 2 hour
  sleepSecond = sleepSecond % 3600; // 100 second
  let minute = Math.floor(sleepSecond / 60); // 1 minute
  sleepSecond = sleepSecond % 60; //
  let result = {
    hour: hour,
    minute: minute,
    second: sleepSecond,
  };
  return result;
}
const result = calculateSleepTime([100, 3800, 90]);
console.log(result);
