export function boldString(str, substrs) {
  let newString = str;
  substrs.map((substr) => {
    let strRegExp = new RegExp(substr, "g");
    newString = str.replace(strRegExp, "<b>" + substr + "</b>");
    console.log("newString ", newString);
  });
  return newString;
}

export const boldString2 = (str, substr) =>
  str.replace(RegExp(substr, "g"), `<b>${substr}</b>`);
