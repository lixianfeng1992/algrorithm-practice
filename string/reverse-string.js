/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (s.length < 2) {
    return s;
  }

  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    const temp = s[tail];
    s[tail] = s[head];
    s[head] = temp;
    tail--;
    head++;
  }

  return s;
};

console.log(reverseString(["H"]))