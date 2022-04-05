import Preview from "./Preview.js";
import Control from "./Control.js";

export default function App({ $app }) {
  const $h1 = document.createElement("h1");
  $h1.innerText = "Lyrics artifact generator";

  $app.appendChild($h1);

  this.state = {
    text: "",
  };

  new Preview({ $app });
  new Control({ $app });
}
