var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapS.has(charS) && mapS.get(charS) !== charT) {
      return false;
    }

    if (mapT.has(charT) && mapT.get(charT) !== charS) {
      return false;
    }

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  return true;
};
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
