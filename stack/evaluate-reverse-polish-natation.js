var evalRPN = function(tokens) {
  const stack = [];

  for (let i of tokens) {
    if (i === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (i === '-') {
      stack.push(-stack.pop() + stack.pop());
    } else if (i === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (i === '/') {
      const num1 = stack.pop();
      stack.push((stack.pop() / num1) | 0);
    } else {
      stack.push(parseInt(i, 10));
    }
  }
  return stack[0];
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))