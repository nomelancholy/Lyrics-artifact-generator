export default function ColorPicker({ $app, initialstate }) {
  this.state = initialstate;

  const $bgSelectBtn = document.createElement("button");
  $bgSelectBtn.innerHTML = "배경색 선택";

  $app.appendChild($bgSelectBtn);

  this.$target = document.createElement("div");
  this.$target.className = "modal";

  $app.appendChild(this.$target);
  console.log($app);
  console.log("this.state :>> ", this.state);
}
