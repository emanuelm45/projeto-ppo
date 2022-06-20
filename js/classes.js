import "../src/PlusSignal/plusSignal"
import "../src/ModalCoin/modalCoin"

var toggler = document.querySelectorAll(".caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down")
  });
}

const userIcon = document.querySelector(".user-icon")

userIcon.addEventListener("click", () => {
  location.href = "./logged.html"
})

const plusSignals = document.querySelectorAll("e-plus-signal")

plusSignals.forEach(plusSignal => {
  plusSignal.addEventListener("containerclick", showModal)
})

function showModal() {
  const modal = document.createElement("e-modal-coin")
  const main = document.querySelector("main")
  const containerModal = document.querySelector(".container-modal")
  containerModal.appendChild(modal)
  main.classList.add("main-disabled")
  modal.addEventListener("btncloseclick", () => {
    modal.remove()
    main.classList.remove("main-disabled")
  })
}
