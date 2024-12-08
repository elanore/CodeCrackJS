const moveCharsForward = (str) => {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

console.log("chars shifted", moveCharsForward("abcd"));
