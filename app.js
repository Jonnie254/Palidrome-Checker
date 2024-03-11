document.getElementById("check-btn").addEventListener("click", function () {
  let text = document.getElementById("input-text").value;
  checkPalindrome(text);
});
function checkPalindrome(text) {
  let text_new = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  console.log(text, text_new);
}
