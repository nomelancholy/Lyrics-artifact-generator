export default function Modal({ $app, gradients = [], onSelectBgColor }) {
  this.state = {
    gradients,
  };

  this.setState = (params) => {
    this.state = params;
    this.render();
  };

  this.$target = document.createElement("div");
  this.$target.className = "modal";

  this.$palette = document.createElement("ul");
  this.$palette.className = "palette";

  this.$target.appendChild(this.$palette);

  this.$target.addEventListener("click", onSelectBgColor);

  $app.appendChild(this.$target);

  this.render = () => {
    this.$palette.innerHTML = this.state.gradients
      ? this.state.gradients
          .map(
            (gradient) => `
      <li data-color-name="${
        gradient.name
      }" data-colors="${gradient.colors.join(",")}" 
        style="background : linear-gradient(to bottom right, ${gradient.colors.join(
          ","
        )})">
        <span>${gradient.name}</span>
      </li>
    `
          )
          .join("")
      : "";
  };

  this.render();
}
