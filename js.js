document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burg").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("test");
  });
});

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});