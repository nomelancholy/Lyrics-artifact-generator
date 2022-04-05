export default function Geneate({ $app }) {
  const $generateButton = document.createElement("button");
  $generateButton.className = "generateBtn";
  $generateButton.innerText = "생성";

  const clickGenerate = () => {};

  $app.appendChild($generateButton);
}
