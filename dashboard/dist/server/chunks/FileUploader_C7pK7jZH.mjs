import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle2, X } from 'lucide-react';

const FileUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([
    { id: "1", name: "manual-procedimientos.pdf", size: "2.4 MB", type: "application/pdf", status: "completed" },
    { id: "2", name: "lista-precios-q1.csv", size: "1.1 MB", type: "text/csv", status: "completed" }
  ]);
  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const onDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);
  const handleFiles = (newFiles) => {
    const fileItems = newFiles.map((f) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(1) + " MB",
      type: f.type,
      status: "completed"
      // In a real app, this would start as 'uploading'
    }));
    setFiles((prev) => [...prev, ...fileItems]);
  };
  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragOver,
        onDragLeave,
        onDrop,
        className: `
          relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all duration-300
          ${isDragging ? "border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/5 scale-[0.99] shadow-inner" : "border-muted-foreground/20 hover:border-[var(--color-accent-base)]/50 hover:bg-slate-50 dark:hover:bg-slate-800/50"}
        `,
        children: [
          /* @__PURE__ */ jsx("div", { className: `p-4 rounded-full mb-4 transition-colors ${isDragging ? "bg-[var(--color-accent-base)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)]"}`, children: /* @__PURE__ */ jsx(Upload, { className: `w-8 h-8 ${isDragging ? "animate-bounce" : ""}` }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", children: "Arrastra tus archivos aquí" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--muted-foreground)] mt-1", children: "Soporta PDF, DOCX, CSV y TXT (Max 50MB)" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              multiple: true,
              className: "absolute inset-0 opacity-0 cursor-pointer",
              onChange: (e) => e.target.files && handleFiles(Array.from(e.target.files))
            }
          )
        ]
      }
    ),
    files.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-4", children: [
        "Archivos Cargados (",
        files.length,
        ")"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: files.map((file) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex items-center gap-4 p-4 bg-[var(--background)]/50 border border-[var(--border)] rounded-xl hover:shadow-md transition-all animate-in fade-in slide-in-from-left-2",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-[var(--color-accent-base)]/10 flex items-center justify-center text-[var(--color-accent-base)] group-hover:bg-[var(--color-accent-base)] group-hover:text-white transition-colors", children: /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: file.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-[var(--muted-foreground)]", children: [
                file.size,
                " • Vectorizado"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              file.status === "completed" && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-500" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => removeFile(file.id),
                  className: "p-2 text-[var(--muted-foreground)] hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors",
                  children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
                }
              )
            ] })
          ]
        },
        file.id
      )) })
    ] })
  ] });
};

export { FileUploader as F };
