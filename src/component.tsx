import { useEffect, useRef, useState } from "preact/hooks";
import { createEditor, PrismEditor } from "prism-code-editor";
// import { cursorPosition } from "prism-code-editor/cursor";
import { copyButton } from "prism-code-editor/copy-button";
import { matchBrackets } from "prism-code-editor/match-brackets";
import { indentGuides } from "prism-code-editor/guides";
import "prism-code-editor/grammars/javascript";

interface CodeEmbedProps {
  initialValue?: string;
  editable: boolean;
  previewable: boolean;
}

export const CodeEmbed = (props: CodeEmbedProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<PrismEditor>();

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
    <div>
      <h1>Usage with Preact</h1>
      <div ref={divRef} />
    </div>
  );
};

// css imports for bundling
import "prism-code-editor/layout.css";
import "prism-code-editor/scrollbar.css";
import "prism-code-editor/copy-button.css";
import "prism-code-editor/themes/prism.css";
