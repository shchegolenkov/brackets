module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  const pairBrackets = {};
  const stack = [];

  bracketsConfig.forEach(function (array) {
    openBrackets.push(array[0]);
    closeBrackets.push(array[1]);
    pairBrackets[array[1]] = array[0];
  });

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {
      if (stack.length > 0 && stack[stack.length - 1] == pairBrackets[str[i]]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (!stack.length) {
        return false;
      }
      if (stack[stack.length - 1] == pairBrackets[str[i]]) {
        stack.pop();
      }
    }
  }
  return stack == 0;
};
