export default function ColorPicker({ $app, initialstate }) {
  this.state = initialstate;

  this.$bgSelectBtn = document.createElement("button");
  this.$bgSelectBtn.innerHTML = "배경색 선택";

  $app.appendChild(this.$bgSelectBtn);

  this.$target = document.createElement("div");
  this.$target.className = "modal";

  $app.appendChild(this.$target);
}
