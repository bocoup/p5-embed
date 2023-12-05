import iFrameHtml from "./sandbox";
import { createEditor } from "prism-code-editor";
import { cursorPosition } from "prism-code-editor/cursor";
import { copyButton } from "prism-code-editor/copy-button";
import "prism-code-editor/grammars/javascript";
// import "prism-code-editor/grammars/js-extras";

import "prism-code-editor/layout.css";
import "prism-code-editor/scrollbar.css";
import "prism-code-editor/themes/github-dark.css";

const codeString = `
let sketch = function (p) {
  let x = 100;
  let y = 100;

  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

let myp5 = new p5(sketch);
`;

const editor = createEditor(
  "#editor",
  { language: "javascript", value: codeString, theme: "github-dark" },
  copyButton(),
  cursorPosition()
);

// taken from https://github.com/codemirror/website/blob/master/site/try/try.ts
function run() {
  const currentIframe = document.querySelector("iframe");
  if (currentIframe) currentIframe.remove();
  console.log("running");
  let frame = document.createElement("iframe");
  frame.setAttribute(
    "sandbox",
    "allow-scripts allow-popups allow-modals allow-forms"
  );
  frame.srcdoc = iFrameHtml;
  let code = editor.value;
  frame.onload = () => {
    frame.contentWindow?.postMessage({ type: "load", code: code }, "*");
  };
  document.body.appendChild(frame);
  return true;
}

export function setup() {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    document.querySelector("#run")?.addEventListener("click", run);
  });
  console.log("hi");
}
