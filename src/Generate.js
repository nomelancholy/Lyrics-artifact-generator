export default function Geneate({ $app }) {
  this.$generateButton = document.createElement("button");
  this.$generateButton.innerText = "생성";
  this.$generateButton.className = "generateButton";

  this.$generateButton.addEventListener("click", (e) => {
    const link = document.createElement("a");
    link.download = "artifact.png";
    link.href = document.querySelector("canvas").toDataURL();
    link.click();
  });

  $app.appendChild(this.$generateButton);
}
