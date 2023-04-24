//your code here
let val = document.getElementById("evaluatedText");
val.addEventListener("input", () => {
     var textLn = val.value;
     document.getElementById("letterCount").innerText = getWordCount(textLn);
});
function getWordCount(str) {
   return str.length;
 }