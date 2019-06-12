//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let startIdx = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIdx = left;
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    // accounts for even length strings
    expandAroundMiddle(i, i + 1); 
  }

  return s.slice(startIdx, startIdx + maxLength);
}

module.exports = longestPalindrome;
