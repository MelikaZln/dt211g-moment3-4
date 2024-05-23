
const knapp = document.getElementById("knapp");
const btn= document.getElementById('button');
const ceck= document.getElementById("check");
// resultat applikation
  function result(){
    alert("Bra jobbat");
    knapp.style.color = "red";
  }
  // animationsknapp 
  function btnAnimation(){
    btn.classList.add("btnAnimation");
    check.classList.add("checkAnimation");

    setTimeout(function(){
      btn.classList.remove("btnAnimation");
      btn.classList.remove("checkAnimation");
    });
  }
btn.addEventListener("click", btnAnimation)
knapp.addEventListener("click", result);