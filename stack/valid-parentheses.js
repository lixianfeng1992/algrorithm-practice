var isValid = function(s) {
  if (!s) {
    return true;
  }

  const parenthesesMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const stack = [];
  const rawStack = s.split('');
  while (rawStack.length) {
    const current = rawStack.pop();
    if (current === stack[stack.length - 1]) {
      stack.pop();
    } else if (parenthesesMap[current]) {
      stack.push(parenthesesMap[current])
    } else {
      return false;
    }
  }
  return !stack.length;
};

console.log(isValid('{[]}'))