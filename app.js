document.getElementById("check-btn").addEventListener("click", function () {
  let text = document.getElementById("input-text").value;
  checkPalindrome(text);
});

function checkPalindrome(text) {
  let text_new = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  console.log(text, text_new);
  let len = text_new.length;
  let half_len = Math.floor(len / 2);
  let result = document.getElementById("result");
  for (let i = 0; i < half_len; i++) {
    if (text_new[i] !== text_new[len - 1 - i]) {
      result.textContent = "Not a Palindrome";
      return;
    }
  }
  result.textContent = "Palindrome";
}
