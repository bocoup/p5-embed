import { render, h } from "preact";
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

const container = document.querySelector("#component-holder");
if (container)
  render(
    <CodeEmbed editable={true} previewable={true} initialValue={codeString} />,
    container
  );
else console.error("no container found");
