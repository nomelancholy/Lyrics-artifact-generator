import Modal from "./Modal.js";

export default function ColorPicker({
  $app,
  gradients,
  recentlyUsedGradients,
  onSelectBgColor,
  onClickRotateBtn,
}) {
  this.state = {
    gradients,
    recentlyUsedGradients,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.tate,
      ...nextState,
    };
    modal.setState({
      ...modal.state,
      ...this.state,
    });
    this.render();
  };
  // legend
  this.$bgLegand = document.createElement("legend");
  this.$bgLegand.innerText = "background control";

  // bg choice modal
  const $body = document.querySelector("body");
  const modal = new Modal({ $app: $body, gradients, onSelectBgColor });

  const $modal = document.querySelector(".modal");

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

  this.$bgSelectBtn = document.createElement("button");
  this.$bgSelectBtn.innerText = "배경색 선택";

  this.$bgSelectBtn.addEventListener("click", () => {
    $modal.style.display = "block";
  });

  // canvas rotate
  this.$rotateBtn = document.createElement("button");
  this.$rotateBtn.innerText = "오른쪽으로 회전";

  this.$rotateBtn.addEventListener("click", onClickRotateBtn);

  this.$recentlyColorPicker = document.createElement("div");
  this.$recentlyColorPicker.className = "recently_color_picker";

  this.render = () => {
    if (
      this.state.recentlyUsedGradients &&
      this.state.recentlyUsedGradients.length > 0
    ) {
      // 내부 엘리먼트 초기화
      this.$recentlyColorPicker.innerHTML = "";

      const $ul = document.createElement("ul");

      $ul.addEventListener("click", onSelectBgColor);

      $ul.innerHTML = `
        ${this.state.recentlyUsedGradients
          .map(
            (gradient) =>
              `<li data-colors= "${gradient}"
                   style="background : linear-gradient(to bottom right, ${gradient})"></li>`
          )
          .join("")}
      `;

      this.$recentlyColorPicker.appendChild($ul);
    } else {
      this.$recentlyColorPicker.innerHTML =
        "<p>최근 선택한 배경색이 없습니다</p>";
    }
  };

  $app.appendChild(this.$bgLegand);
  $app.appendChild(this.$bgSelectBtn);
  $app.appendChild(this.$rotateBtn);
  $app.appendChild(this.$recentlyColorPicker);
}
