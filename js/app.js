//Boton1
var Boton1 = document.querySelector("#Boton1");

Boton1.addEventListener("click", function () {
  var elementosBgDanger = document.querySelectorAll(".bg-danger");
  var elementosBgPrimary = document.querySelectorAll(".bg-primary");
  var elementosBgCustom = document.querySelectorAll(".bg-custom");
  var elementosBgSecondary = document.querySelectorAll(".bg-secondary");

  for (var i = 0; i < elementosBgDanger.length; i++) {
    elementosBgDanger[i].classList.replace("bg-danger", "bg-primary");
  }

  for (var i = 0; i < elementosBgPrimary.length; i++) {
    elementosBgPrimary[i].classList.replace("bg-primary", "bg-danger");
  }

  for (var i = 0; i < elementosBgCustom.length; i++) {
    elementosBgCustom[i].classList.replace("bg-custom", "bg-secondary");
  }

  for (var i = 0; i < elementosBgSecondary.length; i++) {
    elementosBgSecondary[i].classList.replace("bg-secondary", "bg-custom");
  }
});

//Boton 2
var Boton2 = document.querySelector("#Boton2");

Boton2.addEventListener("click", function () {
  var elementosBgDanger = document.querySelectorAll(".bg-danger");
  var elementosBgDark = document.querySelectorAll(".bg-dark");
  var elementosBgCustom = document.querySelectorAll(".bg-custom");
  var elementosBgInfo = document.querySelectorAll(".bg-info");
  var elementosDarkText = document.querySelectorAll(".text-dark");
  var elementosDangerText = document.querySelectorAll(".text-danger");

  for (var i = 0; i < elementosBgDanger.length; i++) {
    elementosBgDanger[i].classList.replace("bg-danger", "bg-dark");
  }

  for (var i = 0; i < elementosBgDark.length; i++) {
    elementosBgDark[i].classList.replace("bg-dark", "bg-danger");
  }

  for (var i = 0; i < elementosBgCustom.length; i++) {
    elementosBgCustom[i].classList.replace("bg-custom", "bg-info");
  }

  for (var i = 0; i < elementosBgInfo.length; i++) {
    elementosBgInfo[i].classList.replace("bg-info", "bg-custom");
  }

  for (var i = 0; i < elementosDarkText.length; i++) {
    elementosDarkText[i].classList.replace("text-dark", "text-danger");
  }

  for (var i = 0; i < elementosDangerText.length; i++) {
    elementosDangerText[i].classList.replace("text-danger", "text-dark");
  }
});

//Boton3
var Boton3 = document.querySelector("#Boton3");

Boton3.addEventListener("click", function () {
  var elementosBgDanger = document.querySelectorAll(".bg-danger");
  var elementosBgSuccess = document.querySelectorAll(".bg-success");
  var elementosBgCustom = document.querySelectorAll(".bg-custom");
  var elementosBgWarning = document.querySelectorAll(".bg-warning");

  for (var i = 0; i < elementosBgDanger.length; i++) {
    elementosBgDanger[i].classList.replace("bg-danger", "bg-success");
  }

  for (var i = 0; i < elementosBgSuccess.length; i++) {
    elementosBgSuccess[i].classList.replace("bg-success", "bg-danger");
  }

  for (var i = 0; i < elementosBgCustom.length; i++) {
    elementosBgCustom[i].classList.replace("bg-custom", "bg-warning");
  }

  for (var i = 0; i < elementosBgWarning.length; i++) {
    elementosBgWarning[i].classList.replace("bg-warning", "bg-custom");
  }
});

//OnChange

const select = document.querySelector("#form-select select");
const cards = document.querySelectorAll("#Contenedor_Cartas .card");

select.addEventListener("change", function () {
  const selectedClass = this.value;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const spans = card.querySelectorAll("span");
    let isVisible = false;

    for (let j = 0; j < spans.length; j++) {
      const span = spans[j];
      if (span.classList.contains(selectedClass)) {
        isVisible = true;
        break;
      }
    }

    if (isVisible) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});

//Focus Input

const form = document.querySelector("form");
const inputAsunto = document.getElementById("subject");
const inputCc = document.getElementById("cc");
const inputCuerpo = document.getElementById("bodytext");
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  validarAsunto();
  validarCc();
  validarCuerpo();
  form.classList.add("was-validated");
});

inputAsunto.addEventListener("blur", validarAsunto);
inputCc.addEventListener("blur", validarCc);
inputCuerpo.addEventListener("blur", validarCuerpo);

function validarAsunto() {
  const valor = inputAsunto.value.trim();
  const errorElement = inputAsunto.nextElementSibling;

  if (valor === "") {
    inputAsunto.classList.add("is-invalid");
    errorElement.innerText = "El asunto no puede estar vacío.";
  } else {
    inputAsunto.classList.remove("is-invalid");
    errorElement.innerText = "";
  }
}

function validarCc() {
  const valor = inputCc.value.trim();
  const errorElement = inputCc.nextElementSibling;

  if (!valor.match(correoRegex)) {
    inputCc.classList.add("is-invalid");
    errorElement.innerText = "El correo no es válido.";
  } else {
    inputCc.classList.remove("is-invalid");
    errorElement.innerText = "";
  }
}

function validarCuerpo() {
  const valor = inputCuerpo.value.trim();
  const errorElement = inputCuerpo.nextElementSibling;

  if (valor === "") {
    inputCuerpo.classList.add("is-invalid");
    errorElement.innerText = "El cuerpo del mensaje no puede estar vacío.";
  } else {
    inputCuerpo.classList.remove("is-invalid");
    errorElement.innerText = "";
  }
}
