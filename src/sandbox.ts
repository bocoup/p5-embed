export const wrapJsInMarkup = (jsCode: string) => `<!DOCTYPE html>
<meta charset="utf8" />
<body></body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
<script id="code" type="module">${jsCode}</script>
`;

// not used currently
export const iFrameListenerMarkup = `<!DOCTYPE html>
<meta charset="utf8" />
<body></body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
<!-- taken from https://github.com/codemirror/website/blob/master/site/try/sandbox.js -->
<script id="code" type="module"></script>
<script>
  (function () {
    "use strict";

    (() => {
      addEventListener("message", (e) => {
        if (e.data.type == "load") {
          console.log("received code");
          let tag = document.querySelector("#code");
          tag.textContent = e.data.code;
        }
      });
    })();
  })();
</script>`;
