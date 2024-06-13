//dichiarazioni costanti pagina di benvenuto
const checkbox = document.getElementById("checkbox");
const btnwelcome = document.getElementById("btnwelcome");

//azione alla pressione del button
btnwelcome.addEventListener("click", startTest);

//funzione che permette il cambio pagina
function goToPage() {
  window.location.href = "http://127.0.0.1:5500/BW2QUIZ/test.html";
}

//funzione per iniziare il test solo al checked
function startTest() {
  if (checkbox.checked) {
    goToPage();
  } else {
    alert("devi prima accettare la condizione");
  }
}
//fine prima azioni prima pagina
