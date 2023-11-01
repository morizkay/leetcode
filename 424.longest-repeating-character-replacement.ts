function characterReplacement(s: string, k: number): number {
  let maxCount = 0;
  let left = 0;
  let right = 0;
  const map = new Map<string, number>();

  while (right < s.length) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char) || 0);
    right++;

    if (right - left - maxCount > k) {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
  }

  return right - left;
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
