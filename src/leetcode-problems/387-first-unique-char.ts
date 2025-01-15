/**
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
    1 <= s.length <= 105
    s consists of only lowercase English letters.
 */

export function firstUniqChar(s: string): number {
  if (s.length < 2) return 0;
  const dupes = new Set();
  for (let i = 0; i < s.length; i++) {
    if (dupes.has(s[i])) continue;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dupes.add(s[i]);
        break;
      }
      if (j === s.length - 1) {
        return i;
      }
    }

    if (i + 1 === s.length) return i;
  }
  return -1;
}
