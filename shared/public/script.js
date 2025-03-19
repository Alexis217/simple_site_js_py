const textInput = document.getElementById("textInput");
const colorButton = document.getElementById("colorButton");
const modal = document.getElementById("customModal");
const modalContent = document.getElementById("modalContent");
const modalText = document.getElementById("modalText");
const span = document.getElementsByClassName("close")[0];
let colorState = 0;

// Cerrar modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Evento Enter modificado
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    showModal(textInput.value);
    textInput.value = ""; // Limpiar input después de mostrar
  }
});

// 2. Cambio de colores
colorButton.addEventListener("click", () => {
  colorState = (colorState + 1) % 3;

  switch (colorState) {
    case 0:
      textInput.style.backgroundColor = "white";
      textInput.style.color = "black";
      break;
    case 1:
      textInput.style.backgroundColor = "black";
      textInput.style.color = "white";
      break;
    case 2:
      textInput.style.backgroundColor = "lightblue";
      textInput.style.color = "red";
      break;
  }

  if (modal.style.display === "block") {
    showModal(modalText.textContent);
  }
});

// Función para mostrar el modal
function showModal(text) {
  const inputStyle = window.getComputedStyle(textInput);

  // Aplicar estilos dinámicos
  modalContent.style.backgroundColor = inputStyle.backgroundColor;
  modalContent.style.color = inputStyle.color;
  modalText.textContent = text;

  modal.style.display = "block";
}
