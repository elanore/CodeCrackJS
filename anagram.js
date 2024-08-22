function anagram(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  if (sortedStr1=== sortedStr2) {
    console.log("str1 and str2 are angram");
  } else {
    console.log("not anagram");
  }
}
anagram("listen", "silent");
