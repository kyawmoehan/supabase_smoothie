import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { TINYMCE_KEY } from "../../services/tinymce_key";
import {
  TinymceContentStyle,
  TinymceLineHigh,
  TinymcePlugins,
  TinymceToolbar,
} from "../../utils/TinymcePlugins";

const TextEditor = ({
  refData,
  content,
}: {
  refData: React.MutableRefObject<TinyMCEEditor | null>;
  content: string;
}) => {
  return (
    <div className="my-10">
      <Editor
        apiKey={TINYMCE_KEY}
        onInit={(evt, editor) => (refData.current = editor)}
        initialValue={content}
        init={{
          height: 350,
          menubar: false,
          plugins: TinymcePlugins,
          toolbar: TinymceToolbar,
          line_height_formats: TinymceLineHigh,
          content_style: TinymceContentStyle,
        }}
      />
    </div>
  );
};

export default TextEditor;
