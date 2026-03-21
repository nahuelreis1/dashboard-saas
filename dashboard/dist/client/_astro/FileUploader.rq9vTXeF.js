import{c as o,j as e}from"./createLucideIcon.DsP3NtnO.js";import{r}from"./index.DiEladB3.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],v=o("CircleCheck",h);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],b=o("FileText",g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],y=o("Upload",f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N=o("X",j),w=()=>{const[c,n]=r.useState(!1),[l,d]=r.useState([{id:"1",name:"manual-procedimientos.pdf",size:"2.4 MB",type:"application/pdf",status:"completed"},{id:"2",name:"lista-precios-q1.csv",size:"1.1 MB",type:"text/csv",status:"completed"}]),m=r.useCallback(t=>{t.preventDefault(),n(!0)},[]),p=r.useCallback(t=>{t.preventDefault(),n(!1)},[]),u=r.useCallback(t=>{t.preventDefault(),n(!1);const s=Array.from(t.dataTransfer.files);i(s)},[]),i=t=>{const s=t.map(a=>({id:Math.random().toString(36).substr(2,9),name:a.name,size:(a.size/1048576).toFixed(1)+" MB",type:a.type,status:"completed"}));d(a=>[...a,...s])},x=t=>{d(s=>s.filter(a=>a.id!==t))};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{onDragOver:m,onDragLeave:p,onDrop:u,className:`
          relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all duration-300
          ${c?"border-[var(--color-accent-base)] bg-[var(--color-accent-base)]/5 scale-[0.99] shadow-inner":"border-muted-foreground/20 hover:border-[var(--color-accent-base)]/50 hover:bg-slate-50 dark:hover:bg-slate-800/50"}
        `,children:[e.jsx("div",{className:`p-4 rounded-full mb-4 transition-colors ${c?"bg-[var(--color-accent-base)] text-white":"bg-[var(--muted)] text-[var(--muted-foreground)]"}`,children:e.jsx(y,{className:`w-8 h-8 ${c?"animate-bounce":""}`})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold",children:"Arrastra tus archivos aquí"}),e.jsx("p",{className:"text-sm text-[var(--muted-foreground)] mt-1",children:"Soporta PDF, DOCX, CSV y TXT (Max 50MB)"})]}),e.jsx("input",{type:"file",multiple:!0,className:"absolute inset-0 opacity-0 cursor-pointer",onChange:t=>t.target.files&&i(Array.from(t.target.files))})]}),l.length>0&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-4",children:["Archivos Cargados (",l.length,")"]}),e.jsx("div",{className:"grid gap-3",children:l.map(t=>e.jsxs("div",{className:"group flex items-center gap-4 p-4 bg-[var(--background)]/50 border border-[var(--border)] rounded-xl hover:shadow-md transition-all animate-in fade-in slide-in-from-left-2",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-[var(--color-accent-base)]/10 flex items-center justify-center text-[var(--color-accent-base)] group-hover:bg-[var(--color-accent-base)] group-hover:text-white transition-colors",children:e.jsx(b,{className:"w-5 h-5"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium truncate",children:t.name}),e.jsxs("p",{className:"text-xs text-[var(--muted-foreground)]",children:[t.size," • Vectorizado"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[t.status==="completed"&&e.jsx(v,{className:"w-4 h-4 text-emerald-500"}),e.jsx("button",{onClick:()=>x(t.id),className:"p-2 text-[var(--muted-foreground)] hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors",children:e.jsx(N,{className:"w-4 h-4"})})]})]},t.id))})]})]})};export{w as default};
