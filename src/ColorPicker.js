import Modal from "./Modal.js";

export default function ColorPicker({
  $app,
  gradients,
  selectedGradient,
  recentlyUsedGradients,
  onSelectBgColor,
}) {
  this.state = {
    gradients,
    recentlyUsedGradients,
    selectedGradient,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $body = document.querySelector("body");
  const modal = new Modal({ $app: $body, gradients, onSelectBgColor });

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

  this.$recentlyColorPicker = document.createElement("div");
  this.$recentlyColorPicker.className = "recently_color_picker";

  this.render = () => {
    if (this.state.recentlyUsedGradients.length > 0) {
      // 내부 엘리먼트 초기화
      this.$recentlyColorPicker.innerHTML = "";

      const $ul = document.createElement("ul");

      $ul.addEventListener("click", onSelectBgColor);

      $ul.innerHTML = `
        ${this.state.recentlyUsedGradients
          .map(
            (gradient) =>
              `<li data-colors="${gradient}" onClick="${() => onSelectBgColor}"
                   style="background : linear-gradient(to bottom right, ${gradient})"></li>`
          )
          .join("")}
      `;

      this.$recentlyColorPicker.appendChild($ul);
    } else {
      this.$recentlyColorPicker.innerHTML =
        "<p>최근 선택한 색깔이 없습니다</p>";
    }

    if (this.state.gradients) {
      modal.setState({ ...modal.state, gradients: this.state.gradients });
    }
  };

  $app.appendChild(this.$bgSelectBtn);
  $app.appendChild(this.$recentlyColorPicker);
}
