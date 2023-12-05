import { render, h } from "preact";
import { CodeEmbed } from "./component";
import { setup } from "./old";

setup();
const container = document.querySelector("#component-holder");
if (container)
  render(<CodeEmbed editable={true} previewable={false} />, container);
else console.error("no container found");
