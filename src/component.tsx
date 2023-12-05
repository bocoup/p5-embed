import { useEffect, useRef, useState } from "preact/hooks";
// @ts-expect-error
import { createEditor, PrismEditor } from "prism-code-editor";
// @ts-expect-error
import { copyButton } from "prism-code-editor/copy-button";
// @ts-expect-error
import { matchBrackets } from "prism-code-editor/match-brackets";
// @ts-expect-error
import { indentGuides } from "prism-code-editor/guides";
import "prism-code-editor/grammars/javascript";

import { wrapJsInMarkup } from "./sandbox";

const CodeFrame = (props: { code: string }) => (
  <iframe
    srcDoc={wrapJsInMarkup(props.code)}
    sandbox="allow-scripts allow-popups allow-modals allow-forms"
  />
);

interface CodeEmbedProps {
  initialValue?: string;
  editable: boolean;
  previewable: boolean;
}

export const CodeEmbed = (props: CodeEmbedProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<PrismEditor>(null);
  const [codeString, setCodeString] = useState(props.initialValue ?? "");

  useEffect(() => {
    const editor = (editorRef.current = createEditor(
      divRef.current!,
      {
        language: "javascript",
        value: props.initialValue ?? "",
        theme: "prism",
        insertSpaces: true,
        tabSize: 2,
        readOnly: !props.editable,
        wordWrap: true,
      },
      copyButton(),
      matchBrackets(),
      indentGuides()
    ));

    return editor.remove;
  }, []);

  return (
    <>
      <div ref={divRef} />
      {props.previewable ? (
        <>
          <button
            onClick={() => {
              console.log("updating code");
              setCodeString(editorRef.current!.value);
            }}
          >
            Run Code
          </button>
          <CodeFrame code={codeString} />
        </>
      ) : null}
    </>
  );
};

// css imports for bundling
import "prism-code-editor/layout.css";
import "prism-code-editor/scrollbar.css";
import "prism-code-editor/copy-button.css";
import "prism-code-editor/themes/prism.css";
