import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignCenter,
} from "react-icons/fa";

const MAX_LENGTH = 1000;

function AboutEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: `
      <p>Hi! I'm Jessica, a passionate nail technician with over 6 years of experience.</p>

      <p>I specialize in gel manicures, acrylics, and custom nail art. I love creating beautiful,
      high-quality nails that make my clients feel confident and amazing.</p>

      <p>I use top quality products and always focus on cleanliness, detail, and customer
      satisfaction. I can't wait to pamper you! 💕</p>
    `,

    editorProps: {
      attributes: {
        class:
          "min-h-[160px] px-4 py-3 outline-none text-sm text-slate-700 leading-6",
      },
    },

    onUpdate: ({ editor }) => {
      const text = editor.getText();

      if (text.length > MAX_LENGTH) {
        console.log("Maximum characters reached");
      }
    },
  });

  if (!editor) return null;

  const characterCount = editor.getText().length;

  return (
    <div className="w-full">
      <label className="mb-2 block font-semibold text-slate-700">
        About Me
      </label>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* TOOLBAR */}
        <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 px-3 py-2">
          {/* Paragraph */}
          <select
            className="rounded-md border-none bg-transparent px-2 py-1 text-sm outline-none"
            onChange={(e) => {
              const value = e.target.value;

              if (value === "paragraph") {
                editor.chain().focus().setParagraph().run();
              }

              if (value === "heading2") {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              }

              if (value === "heading3") {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
              }
            }}
          >
            <option value="paragraph">Paragraph</option>
            <option value="heading2">Heading 2</option>
            <option value="heading3">Heading 3</option>
          </select>

          <div className="mx-1 h-5 w-px bg-slate-200" />

          {/* Bold */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`rounded-md p-2 hover:bg-slate-100 ${
              editor.isActive("bold") ? "bg-pink-100 text-pink-600" : ""
            }`}
          >
            <FaBold size={14} />
          </button>

          {/* Italic */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`rounded-md p-2 hover:bg-slate-100 ${
              editor.isActive("italic") ? "bg-pink-100 text-pink-600" : ""
            }`}
          >
            <FaItalic size={14} />
          </button>

          {/* Underline */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`rounded-md p-2 hover:bg-slate-100 ${
              editor.isActive("underline") ? "bg-pink-100 text-pink-600" : ""
            }`}
          >
            <FaUnderline size={14} />
          </button>

          <div className="mx-1 h-5 w-px bg-slate-200" />

          {/* Left Align */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className="rounded-md p-2 hover:bg-slate-100"
          >
            <FaAlignLeft size={14} />
          </button>

          {/* Center Align */}
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className="rounded-md p-2 hover:bg-slate-100"
          >
            <FaAlignCenter size={14} />
          </button>

          <div className="mx-1 h-5 w-px bg-slate-200" />

          {/* Bullet List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`rounded-md p-2 hover:bg-slate-100 ${
              editor.isActive("bulletList") ? "bg-pink-100 text-pink-600" : ""
            }`}
          >
            <FaListUl size={14} />
          </button>

          {/* Ordered List */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`rounded-md p-2 hover:bg-slate-100 ${
              editor.isActive("orderedList") ? "bg-pink-100 text-pink-600" : ""
            }`}
          >
            <FaListOl size={14} />
          </button>
        </div>

        {/* EDITOR */}
        <EditorContent editor={editor} />

        {/* CHARACTER COUNTER */}
        <div className="flex justify-end px-4 pb-3">
          <span
            className={`text-xs ${
              characterCount > MAX_LENGTH ? "text-red-500" : "text-slate-400"
            }`}
          >
            {characterCount} / {MAX_LENGTH}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutEditor;
