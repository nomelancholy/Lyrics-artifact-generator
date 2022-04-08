import TextInput from "./TextInput.js";

export default function TextControl({
  $app,
  onKeyUp,
  onSelectFontColor,
  onSelectFontSize,
}) {
  this.$textControl = document.createElement("div");
  this.$textControl.className = "textControl";

  this.$textFieldset = document.createElement("fieldset");
  this.$textFieldset.className = "textFieldset";

  this.$textControl.appendChild(this.$textFieldset);

  new TextInput({
    $app: this.$textFieldset,
    onKeyUp,
    onSelectFontColor,
    onSelectFontSize,
  });

  $app.appendChild(this.$textControl);
}
