import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

let view = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.body,
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
