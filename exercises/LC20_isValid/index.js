const isValid = s => {
  let stack = [];
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      let open = stack.pop();
      if (pairs[open] !== char) return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;