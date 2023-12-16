const passwordBox = document.getElementById("password");
let button = document.getElementById("btn");
let img = document.getElementById("copy");
const length = 8;

const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnoprstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

button.addEventListener("click", function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;

  img.addEventListener("click", function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
  });
});
