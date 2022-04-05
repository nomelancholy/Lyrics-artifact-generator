export default function Modal({ $app, initialState = [] }) {
  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.className = "modal";

  this.setState = (params) => {
    this.state = params;
    this.render();
  };

  this.render = () => {
    const $palette = document.createElement("ul");
    $palette.className = "palette";

    $palette.innerHTML =
      this.state && this.state.length > 0
        ? this.state
            .map(
              (gradient) => `
    <li data-color-name="${gradient.name}" 
        style="background : linear-gradient(to bottom right, ${gradient.colors.join(
          ","
        )})">
        <span>${gradient.name}</span>
      </li>
    `
            )
            .join("")
        : ``;

    this.$target.appendChild($palette);
  };

  $palette.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { colorName } = $li.dataset;
    alert(colorName);
  });

  this.render();
}
