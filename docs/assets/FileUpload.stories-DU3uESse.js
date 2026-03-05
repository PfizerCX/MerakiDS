import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DwQS_Y10.js";import{C as te,a as ne}from"./CloudDone-Yku9vI1M.js";import{E as ie}from"./ErrorCircle-CwiKfN0G.js";import{C as de}from"./Close-Cd8AO0St.js";const o=r.forwardRef(({accept:i=".jpg,.gif,.pdf",acceptLabel:u="jpg, gif, pdf accepted, 1GB max",maxSize:D=1073741824,heading:m="Drag & Drop files here",description:_,browseLabel:d="Browse Files Instead",file:f=null,loading:s=!1,error:t=!1,errorMessage:g="File size exceeds allowable maximum",onFileSelect:l,onFileRemove:J,disabled:n=!1,className:K,...P},Q)=>{const Z=r.useId(),z=r.useRef(null),[ee,F]=r.useState(!1),c=!!f&&!s&&!t,ae=r.useCallback(a=>{a.preventDefault(),!n&&!s&&F(!0)},[n,s]),re=r.useCallback(a=>{a.preventDefault(),F(!1)},[]),se=r.useCallback(a=>{if(a.preventDefault(),F(!1),n||s)return;const p=a.dataTransfer.files[0];p&&(l==null||l(p))},[n,s,l]),oe=r.useCallback(()=>{var a;(a=z.current)==null||a.click()},[]),le=r.useCallback(a=>{var S;const p=(S=a.target.files)==null?void 0:S[0];p&&(l==null||l(p)),a.target.value=""},[l]);return e.jsxs("div",{ref:Q,className:["mds-file-upload",K].filter(Boolean).join(" "),"data-drag-over":ee||void 0,"data-error":t||void 0,"data-success":c||void 0,"data-loading":s||void 0,"data-disabled":n||void 0,onDragOver:ae,onDragLeave:re,onDrop:se,...P,children:[t&&e.jsxs("div",{className:"mds-file-upload__error-banner",children:[e.jsx(ie,{size:24,style:{color:"var(--color-negative)"}}),e.jsx("span",{className:"mds-file-upload__error-text",children:g})]}),e.jsx("div",{className:"mds-file-upload__icon","data-hidden":t||void 0,children:c?e.jsx(te,{size:48,style:{color:"var(--color-primary)"}}):e.jsx(ne,{size:48,style:{color:"var(--color-primary)"}})}),e.jsxs("div",{className:"mds-file-upload__content",children:[e.jsx("p",{className:"mds-file-upload__heading",children:c?"Success!":m}),e.jsx("p",{className:"mds-file-upload__description",children:c?"Your file uploaded successfully":_||u})]}),!s&&e.jsx("div",{className:"mds-file-upload__actions",children:c?e.jsxs("div",{className:"mds-file-upload__file-row",children:[e.jsx("span",{className:"mds-file-upload__filename",children:f.name}),e.jsx("button",{type:"button",className:"mds-file-upload__remove",onClick:J,"aria-label":"Remove file",children:e.jsx(de,{size:24})})]}):e.jsx("button",{type:"button",className:"mds-file-upload__browse",onClick:oe,disabled:n,children:d})}),s&&e.jsx("div",{className:"mds-file-upload__loader",children:e.jsx("svg",{className:"mds-file-upload__spinner",viewBox:"0 0 40 40",width:"40",height:"40","aria-label":"Uploading",children:e.jsx("circle",{cx:"20",cy:"20",r:"17",fill:"none",stroke:"var(--color-primary)",strokeWidth:"3",strokeDasharray:"80 107",strokeLinecap:"round"})})}),e.jsx("input",{ref:z,id:`${Z}-input`,type:"file",accept:i,className:"mds-file-upload__input",onChange:le,tabIndex:-1,"aria-hidden":"true"})]})});o.displayName="FileUpload";o.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:'Accepted file types (e.g. ".jpg,.gif,.pdf")',defaultValue:{value:"'.jpg,.gif,.pdf'",computed:!1}},acceptLabel:{required:!1,tsType:{name:"string"},description:"Description of accepted file types shown to the user",defaultValue:{value:"'jpg, gif, pdf accepted, 1GB max'",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in bytes",defaultValue:{value:"1_073_741_824",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:"Custom heading text",defaultValue:{value:"'Drag & Drop files here'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Custom body text shown below the heading"},browseLabel:{required:!1,tsType:{name:"string"},description:"Label for the browse button",defaultValue:{value:"'Browse Files Instead'",computed:!1}},file:{required:!1,tsType:{name:"union",raw:"File | { name: string } | null",elements:[{name:"File"},{name:"signature",type:"object",raw:"{ name: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}},{name:"null"}]},description:"Currently uploaded file (controlled)",defaultValue:{value:"null",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in a loading state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in an error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message displayed in the error banner",defaultValue:{value:"'File size exceeds allowable maximum'",computed:!1}},onFileSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:"Callback when a file is selected via drag-and-drop or browse"},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the uploaded file is removed"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ge={title:"Components/FileUpload",component:o,tags:["autodocs"],argTypes:{accept:{control:"text",description:"Accepted file types (MIME or extension)"},acceptLabel:{control:"text",description:"Human-readable accepted file description"},maxSize:{control:"number",description:"Maximum file size in bytes"},heading:{control:"text",description:"Heading text in the drop zone"},browseLabel:{control:"text",description:"Label for the browse button"},loading:{control:"boolean",description:"Show loading spinner"},error:{control:"boolean",description:"Show error state"},errorMessage:{control:"text",description:"Error banner message"},disabled:{control:"boolean",description:"Disable the component"}},args:{accept:".jpg,.gif,.pdf",acceptLabel:"jpg, gif, pdf accepted, 1GB max",heading:"Drag & Drop files here",browseLabel:"Browse Files Instead",loading:!1,error:!1,disabled:!1}},h={},x={name:"Drag Over",render:i=>e.jsx(o,{...i,"data-drag-over":""}),parameters:{docs:{description:{story:"Shown when a file is dragged over the drop zone."}}}},v={args:{loading:!0}},b={args:{error:!0,errorMessage:"File size exceeds allowable maximum"}},y={args:{file:{name:"Filename.jpeg"}}},j={render:()=>{const[i,u]=r.useState(null),[D,m]=r.useState(!1),[_,d]=r.useState(!1),f=1073741824,s=g=>{if(g.size>f){d(!0);return}d(!1),m(!0),setTimeout(()=>{m(!1),u(g)},2e3)},t=()=>{u(null),d(!1)};return e.jsx(o,{file:i,loading:D,error:_,errorMessage:"File size exceeds allowable maximum",onFileSelect:s,onFileRemove:t})}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(o,{}),e.jsx(o,{loading:!0}),e.jsx(o,{error:!0,errorMessage:"File size exceeds allowable maximum"}),e.jsx(o,{file:{name:"Filename.jpeg"}})]})};var C,L,N;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var T,k,E;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Drag Over',
  render: args => <FileUpload {...args} data-drag-over="" />,
  parameters: {
    docs: {
      description: {
        story: 'Shown when a file is dragged over the drop zone.'
      }
    }
  }
}`,...(E=(k=x.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var M,q,U;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(U=(q=v.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var R,I,V;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: 'File size exceeds allowable maximum'
  }
}`,...(V=(I=b.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var B,O,A;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'Filename.jpeg'
    }
  }
}`,...(A=(O=y.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var H,W,G;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const MAX = 1_073_741_824;
    const handleSelect = (f: File) => {
      if (f.size > MAX) {
        setError(true);
        return;
      }
      setError(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFile(f);
      }, 2000);
    };
    const handleRemove = () => {
      setFile(null);
      setError(false);
    };
    return <FileUpload file={file} loading={loading} error={error} errorMessage="File size exceeds allowable maximum" onFileSelect={handleSelect} onFileRemove={handleRemove} />;
  }
}`,...(G=(W=j.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var X,Y,$;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <FileUpload />
      <FileUpload loading />
      <FileUpload error errorMessage="File size exceeds allowable maximum" />
      <FileUpload file={{
      name: 'Filename.jpeg'
    }} />
    </div>
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const he=["Default","Hovered","Loading","Error","Success","Interactive","AllStates"];export{w as AllStates,h as Default,b as Error,x as Hovered,j as Interactive,v as Loading,y as Success,he as __namedExportsOrder,ge as default};
