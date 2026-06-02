"use client";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
  }
);

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],

    ["bold", "italic", "underline"],

    [{ list: "ordered" }],

    [{ list: "bullet" }],

    ["link", "image"],

    ["clean"],
  ],
};

const Editor = ({
  value,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">

      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="min-h-[300px]"
      />
    </div>
  );
};

export default Editor;