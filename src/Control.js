import Geneate from "./Generate.js";
import TextInput from "./TextInput.js";

export default function Control({
  $app,
  onKeyUp,
  onSelectColor,
  onSelectFontSize,
}) {
  this.$textInputSection = document.createElement("div");
  this.$textInputSection.className = "textInputSection";

  new TextInput({
    $app: this.$textInputSection,
    onKeyUp,
    onSelectColor,
    onSelectFontSize,
  });

  this.$generateSection = document.createElement("div");
  this.$generateSection.className = "generateSection";

  new Geneate({ $app: this.$generateSection });

  this.$controlSection = document.createElement("div");
  this.$controlSection.className = "controlSection";
  this.$controlSection.appendChild(this.$textInputSection);
  this.$controlSection.appendChild(this.$generateSection);

  $app.appendChild(this.$controlSection);
}
