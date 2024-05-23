"use strict";

var knapp = document.getElementById("knapp"),
  btn = document.getElementById("button"),
  ceck = document.getElementById("check");
function result() {
  alert("Bra jobbat"), knapp.style.color = "red";
}
function btnAnimation() {
  btn.classList.add("btnAnimation"), check.classList.add("checkAnimation"), setTimeout(function () {
    btn.classList.remove("btnAnimation"), btn.classList.remove("checkAnimation");
  });
}
btn.addEventListener("click", btnAnimation), knapp.addEventListener("click", result);