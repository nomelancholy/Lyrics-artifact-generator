export default function TextInput({ $app }) {
  const $fontColorLabel = document.createElement("label");
  $fontColorLabel.htmlFor = "fontColor";

  const $fontColor = document.createElement("input");
  $fontColor.type = "color";
  $fontColor.id = "fontColor";

  const $fontSizeLabel = document.createElement("label");
  $fontSizeLabel.htmlFor = "fontSizeSelect";

  const $fontSizeSelect = document.createElement("select");
  $fontSizeSelect.id = "fontSizeSelect";
  $fontSizeSelect.name = "fontSizeSelect";

  for (let i = 8; i <= 32; i++) {
    const $fontSizeOption = document.createElement("option");
    $fontSizeOption.text = `${i} px`;
    $fontSizeOption.value = i;

    $fontSizeSelect.options.add($fontSizeOption);
  }

  const $textArea = document.createElement("textarea");

  $app.appendChild($textArea);

  $app.appendChild($fontColorLabel);
  $app.appendChild($fontColor);

  $app.appendChild($fontSizeLabel);
  $app.appendChild($fontSizeSelect);
}
