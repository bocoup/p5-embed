import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

let view = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.body,
});
view.dispatch({
  changes: {
    from: 0,
    insert: `
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
    `,
  },
});

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
  frame.src = "sandbox.html";
  let code = view.state.doc.toString();
  frame.onload = () => {
    frame.contentWindow.postMessage({ type: "load", code: code }, "*");
  };
  document.body.appendChild(frame);
  return true;
}

function setup() {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    document.querySelector("#run").addEventListener("click", run);
  });
  console.log("hi");
}

setup();
