import Geneate from "./Generate.js";
import TextInput from "./TextInput.js";

export default function Control({ $app, text }) {
  const $controlSection = document.createElement("div");
  $controlSection.className = "controlSection";

  const $textInputSection = document.createElement("div");
  $textInputSection.className = "textInputSection";

  new TextInput({ $app: $textInputSection });

  const $generateSection = document.createElement("div");
  $generateSection.className = "generateSection";

  new Geneate({ $app: $generateSection });

  $controlSection.appendChild($textInputSection);
  $controlSection.appendChild($generateSection);

  $app.appendChild($controlSection);
}
