import { render } from "preact";
import { CodeEmbed } from "./component";

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

const App = (
  <>
    <h1>p5.js Code Embed Preact Component</h1>
    <h2>Readonly</h2>
    <CodeEmbed editable={false} previewable={false} initialValue={codeString} />
    <h2>Readonly And Previewable</h2>
    <CodeEmbed editable={false} previewable={true} initialValue={codeString} />
    <h2>Editable</h2>
    <CodeEmbed editable={true} previewable={false} initialValue={codeString} />
    <h2>Editable And Previewable</h2>
    <CodeEmbed editable={true} previewable={true} initialValue={codeString} />
  </>
);

const container = document.querySelector("#component-holder");
if (container) render(App, container);
else console.error("no container found");
