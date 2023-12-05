export default `<!DOCTYPE html>
<meta charset="utf8" />
<body></body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
<!-- taken from https://github.com/codemirror/website/blob/master/site/try/sandbox.js -->
<script>
  (function () {
    "use strict";

    (() => {
      addEventListener("message", (e) => {
        if (e.origin != document.location.origin) return;
        if (e.data.type == "load") {
          let tag = document.createElement("script");
          tag.type = "module";
          tag.textContent = e.data.code;
          document.body.appendChild(tag);
        }
      });
    })();
  })();
</script>`;
