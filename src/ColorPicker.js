import Modal from "./Modal.js";

export default function ColorPicker({
  $app,
  gradients,
  selectedGradient,
  onSelectBgColor,
}) {
  this.state = {
    gradients,
    recentlyUsedGradients: [],
    selectedGradient,
  };

  const $body = document.querySelector("body");
  new Modal({ $app: $body, gradients, onSelectBgColor });

  this.$bgSelectBtn = document.createElement("button");
  this.$bgSelectBtn.innerHTML = "배경색 선택";

  const $modal = document.querySelector(".modal");

  this.$bgSelectBtn.addEventListener("click", () => {
    $modal.style.display = "block";
  });

  window.onclick = (e) => {
    if (e.target == $modal) {
      $modal.style.display = "none";
    }
  };

  window.onkeyup = (e) => {
    if (e.key == "Escape") {
      $modal.style.display = "none";
    }
  };

  $app.appendChild(this.$bgSelectBtn);

  const getRecentlyUsedGradients = () => {
    console.log("최근 사용 색들");
    // TO-DO : local storage에서 가져오기
  };
  getRecentlyUsedGradients();
}
