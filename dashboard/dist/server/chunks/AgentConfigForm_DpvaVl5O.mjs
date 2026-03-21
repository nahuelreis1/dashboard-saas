import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Sparkles, Briefcase, MessageSquare, ChevronDown, Save } from 'lucide-react';

const AgentConfigForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    tone: "professional",
    objective: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving config...", formData);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium flex items-center gap-2 text-[var(--foreground)]/80", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-[var(--color-accent-base)]" }),
          "Nombre del Agente"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            placeholder: "Ej: Sofia de Soporte",
            className: "w-full px-4 py-2.5 rounded-xl border border-[var(--input)] bg-[var(--background)]/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all placeholder:text-[var(--muted-foreground)]/50"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium flex items-center gap-2 text-[var(--foreground)]/80", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-[var(--color-accent-base)]" }),
          "Empresa"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "company",
            value: formData.company,
            onChange: handleChange,
            placeholder: "Ej: NR Labs Tech",
            className: "w-full px-4 py-2.5 rounded-xl border border-[var(--input)] bg-[var(--background)]/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all placeholder:text-[var(--muted-foreground)]/50"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium flex items-center gap-2 text-[var(--foreground)]/80", children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 text-[var(--color-accent-base)]" }),
        "Tono de Voz"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "tone",
            value: formData.tone,
            onChange: handleChange,
            className: "w-full px-4 py-2.5 rounded-xl border border-[var(--input)] bg-[var(--background)]/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none appearance-none transition-all",
            children: [
              /* @__PURE__ */ jsx("option", { value: "professional", children: "Profesional y Ejecutivo" }),
              /* @__PURE__ */ jsx("option", { value: "friendly", children: "Amigable y Cercano" }),
              /* @__PURE__ */ jsx("option", { value: "humorous", children: "Humorístico (TikTok Style)" }),
              /* @__PURE__ */ jsx("option", { value: "technical", children: "Técnico y Preciso" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(ChevronDown, { className: "absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-[var(--foreground)]/80", children: "Rol y Objetivo Principal" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          name: "objective",
          value: formData.objective,
          onChange: handleChange,
          rows: 4,
          placeholder: "Describe detalladamente qué debe hacer el agente, cómo debe saludar y cuáles son sus límites...",
          className: "w-full px-4 py-3 rounded-xl border border-[var(--input)] bg-[var(--background)]/50 focus:ring-2 focus:ring-[var(--color-accent-base)]/20 focus:border-[var(--color-accent-base)]/50 outline-none transition-all resize-none placeholder:text-[var(--muted-foreground)]/50"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "submit",
        className: "flex items-center gap-2 px-8 py-3 bg-[var(--color-accent-base)] text-white font-semibold rounded-xl hover:opacity-90 shadow-lg shadow-[var(--color-accent-base)]/25 active:scale-[0.98] transition-all",
        children: [
          /* @__PURE__ */ jsx(Save, { className: "w-5 h-5" }),
          "Guardar Configuración"
        ]
      }
    ) })
  ] });
};

export { AgentConfigForm as A };
