export default function TextInput({
  $app,
  onKeyUp,
  onSelectColor,
  onSelectFontSize,
}) {
  this.$fontColorLabel = document.createElement("label");
  this.$fontColorLabel.innerText = "글자 색";
  this.$fontColorLabel.htmlFor = "fontColor";

  this.$fontColor = document.createElement("input");
  this.$fontColor.type = "color";
  this.$fontColor.id = "fontColor";
  this.$fontColor.value = "#ffffff";

  this.$fontColor.addEventListener("change", onSelectColor);

  this.$fontSizeLabel = document.createElement("label");
  this.$fontSizeLabel.innerText = "글자 크기";
  this.$fontSizeLabel.htmlFor = "fontSizeSelect";

  this.$fontSizeSelect = document.createElement("select");
  this.$fontSizeSelect.id = "fontSizeSelect";
  this.$fontSizeSelect.name = "fontSizeSelect";

  for (let i = 1; i <= 10; i++) {
    const $fontSizeOption = document.createElement("option");
    $fontSizeOption.text = `${i} rem`;
    $fontSizeOption.value = i;

    this.$fontSizeSelect.options.add($fontSizeOption);
  }

  this.$fontSizeSelect.addEventListener("change", onSelectFontSize);

  this.$textArea = document.createElement("textarea");
  this.$textArea.addEventListener("keyup", onKeyUp);

  $app.appendChild(this.$textArea);

  $app.appendChild(this.$fontColorLabel);
  $app.appendChild(this.$fontColor);

  $app.appendChild(this.$fontSizeLabel);
  $app.appendChild(this.$fontSizeSelect);
}
