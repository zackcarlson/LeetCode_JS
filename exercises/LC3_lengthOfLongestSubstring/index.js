// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let hash = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    if (hash[endChar] >= start) {
      start = hash[endChar] + 1;
    }

    hash[endChar] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

module.exports = lengthOfLongestSubstring;