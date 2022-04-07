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
    console.log("this.state :>> ", this.state);
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
    console.log(
      "this.state.recentlyUsedGradients :>> ",
      this.state.recentlyUsedGradients
    );

    if (this.state.recentlyUsedGradients.length > 0) {
      console.log(
        "this.state.recentlyUsedGradients :>> ",
        this.state.recentlyUsedGradients
      );
      this.$recentlyColorPicker.innerHTML = `
      <ul>
        ${this.state.recentlyUsedGradients
          .map(
            (gradient) =>
              `<li style="background : linear-gradient(to bottom right, ${gradient})"></li>`
          )
          .join("")}
      </ul>
      `;
    } else {
      console.log("this.$recentlyColorPicker :>> ", this.$recentlyColorPicker);
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
