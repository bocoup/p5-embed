import "../vend/bliss/bliss.shy.min";
import "../vend/prism/prism";
import "../vend/prism-live/prism-live";
import "../vend/prism-live/prism-live-javascript";

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
  let code = document.querySelector("#code").innerHTML;
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
    document.querySelector("#code").textContent = codeString;
  });
  console.log("hi");
}

setup();
