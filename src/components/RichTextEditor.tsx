"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [isHtmlMode, setIsHtmlMode] = useState(false);
    const isFocused = useRef(false);

    const execCommand = useCallback((command: string, value?: string) => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    }, [onChange]);

    const handleInput = useCallback(() => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    }, [onChange]);

    const handlePaste = useCallback((e: React.ClipboardEvent) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    }, []);

    const insertLink = useCallback(() => {
        const url = prompt("Enter URL:");
        if (url) {
            execCommand("createLink", url);
        }
    }, [execCommand]);

    // Sync external value changes to editor, but avoid cursor jumps during typing
    useEffect(() => {
        if (editorRef.current) {
            // Initial load
            if (editorRef.current.innerHTML === "" && value) {
                editorRef.current.innerHTML = value;
            }
            // Update if value changes externally (and we're not focused to avoid cursor jump)
            else if (value !== editorRef.current.innerHTML) {
                if (document.activeElement !== editorRef.current) {
                    editorRef.current.innerHTML = value;
                }
            }
        }
    }, [value]);

    const toolbarButtons = [
        { icon: "format_bold", command: "bold", title: "Bold" },
        { icon: "format_italic", command: "italic", title: "Italic" },
        { icon: "format_underlined", command: "underline", title: "Underline" },
        { icon: "strikethrough_s", command: "strikeThrough", title: "Strikethrough" },
        { divider: true },
        { icon: "format_list_bulleted", command: "insertUnorderedList", title: "Bullet List" },
        { icon: "format_list_numbered", command: "insertOrderedList", title: "Numbered List" },
        { divider: true },
        { icon: "format_align_left", command: "justifyLeft", title: "Align Left" },
        { icon: "format_align_center", command: "justifyCenter", title: "Align Center" },
        { icon: "format_align_right", command: "justifyRight", title: "Align Right" },
        { divider: true },
        { icon: "title", command: "formatBlock", value: "h3", title: "Heading" },
        { icon: "format_paragraph", command: "formatBlock", value: "p", title: "Paragraph" },
        { icon: "format_quote", command: "formatBlock", value: "blockquote", title: "Quote" },
        { divider: true },
        { icon: "link", command: "link", title: "Insert Link", onClick: insertLink },
        { icon: "link_off", command: "unlink", title: "Remove Link" },
        { divider: true },
        { icon: "code", title: "Toggle HTML Source", onClick: () => setIsHtmlMode(!isHtmlMode) },
    ];

    return (
        <div className="border border-[#e6e2db] rounded-xl overflow-hidden">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 bg-[#f8f7f6] border-b border-[#e6e2db]">
                {toolbarButtons.map((btn, i) => {
                    if ('divider' in btn && btn.divider) {
                        return <div key={i} className="w-px h-6 bg-[#e6e2db] mx-1" />;
                    }
                    return (
                        <button
                            key={i}
                            type="button"
                            onClick={() => {
                                if ('onClick' in btn && btn.onClick) {
                                    btn.onClick();
                                } else if ('command' in btn) {
                                    execCommand(btn.command as string, 'value' in btn ? btn.value : undefined);
                                }
                            }}
                            className="p-1.5 rounded hover:bg-[#e6e2db] text-[#555] hover:text-[#181611] transition-colors"
                            title={'title' in btn ? btn.title : ''}
                        >
                            <span className="material-symbols-outlined text-lg">{'icon' in btn ? btn.icon : ''}</span>
                        </button>
                    );
                })}
            </div>

            {/* Editor Area */}
            {isHtmlMode ? (
                <textarea
                    ref={textAreaRef}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full min-h-[300px] p-4 outline-none font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4] resize-y"
                    placeholder="Enter raw HTML here..."
                />
            ) : (
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleInput}
                    onPaste={handlePaste}
                    className="min-h-[300px] p-4 outline-none prose prose-sm max-w-none
                        [&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-3
                        [&_p]:my-2
                        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2
                        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2
                        [&_blockquote]:border-l-4 [&_blockquote]:border-[#eeb32b] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#555]
                        [&_a]:text-[#eeb32b] [&_a]:underline"
                    suppressContentEditableWarning
                />
            )}

            {/* Help Text */}
            <div className="p-2 bg-[#f8f7f6] border-t border-[#e6e2db] text-xs text-[#897d61] flex justify-between">
                <span>Tip: Select text and use toolbar buttons to format. Works like Word!</span>
                {isHtmlMode && <span className="font-bold text-[#eeb32b]">Editing in HTML Mode</span>}
            </div>
        </div>
    );
}
