import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DwQS_Y10.js";import{C as z}from"./Close-Cd8AO0St.js";import{B as s}from"./Button-cuP-Pnvr.js";import{I as D}from"./IconButton-OXKGdn_c.js";const a=i.forwardRef(({open:t=!0,onClose:n,className:r,children:W,onClick:p,...R},H)=>{const f=i.useCallback(o=>{o.key==="Escape"&&(n==null||n())},[n]);return i.useEffect(()=>{if(!t)return;document.addEventListener("keydown",f);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",f),document.body.style.overflow=o}},[t,f]),t?e.jsx("div",{ref:H,role:"dialog","aria-modal":"true",className:["mds-overlay",r].filter(Boolean).join(" "),onClick:o=>{p==null||p(o),o.target===o.currentTarget&&(n==null||n())},...R,children:W}):null});a.displayName="Overlay";a.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{open:{required:!1,tsType:{name:"boolean"},description:"Whether the overlay is visible",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the user requests to close (clicks scrim or presses Escape)"}}};const M={background:"var(--color-layer-1)",border:"1px solid var(--color-outline-variant)",borderRadius:"var(--radius-3)",overflow:"hidden",maxWidth:707,width:"100%",fontFamily:"var(--font-family-sans)",color:"var(--color-on-background)"},_={title:"Components/Overlay",component:a,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the overlay is visible"},onClose:{action:"close"}},args:{open:!0},parameters:{layout:"fullscreen"}};function m({onClose:t}){return e.jsxs("div",{style:{...M,maxWidth:335},children:[e.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:20,padding:20},children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",paddingTop:8},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-headline-s)",fontWeight:"var(--font-weight-medium)",lineHeight:1.2},children:"Headline Here"}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-body-lg)",fontWeight:"var(--font-weight-regular)",lineHeight:1.2,color:"var(--color-on-surface)"},children:"Write a helpful and concise body copy 3–4 lines of text maximum. We're in relentless pursuit of breakthroughs."})]})}),e.jsx(D,{variant:"text",size:"sm",icon:e.jsx(z,{size:20}),"aria-label":"Close",onClick:t,style:{position:"absolute",top:16,right:16}})]}),e.jsxs("div",{style:{display:"flex",gap:12,padding:20},children:[e.jsx(s,{variant:"primary",size:"md",children:"Button Label"}),e.jsx(s,{variant:"secondary",size:"md",children:"Button Label"})]})]})}function B({onClose:t}){const n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";return e.jsxs("div",{style:{...M,display:"flex",flexDirection:"column",gap:8,height:400,padding:"var(--component-inset-padding)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,position:"relative"},children:[e.jsx("p",{style:{margin:0,flex:1,fontSize:"var(--font-size-title-lg)",fontWeight:"var(--font-weight-medium)",lineHeight:1.2},children:"Modal Window Title"}),e.jsx(D,{variant:"text",size:"sm",icon:e.jsx(z,{size:20}),"aria-label":"Close",onClick:t})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,flex:1,minHeight:0},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,flex:1,overflowY:"auto",minHeight:0},children:[e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-body-lg)",lineHeight:1.2},children:n}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-body-lg)",lineHeight:1.2},children:n}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-body-m)",lineHeight:1.25,color:"var(--color-on-surface-variant)"},children:n}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-body-m)",lineHeight:1.25,color:"var(--color-on-surface-variant)"},children:n})]}),e.jsx(s,{variant:"secondary",size:"md",style:{alignSelf:"flex-start"},children:"Button Label"})]})]})}const l={render:function(){const[n,r]=i.useState(!1);return e.jsxs("div",{style:{padding:32},children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Overlay"}),e.jsx(a,{open:n,onClose:()=>r(!1),children:e.jsx(m,{onClose:()=>r(!1)})})]})}},d={render:function(){const[n,r]=i.useState(!1);return e.jsxs("div",{style:{padding:32},children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Stacked Modal"}),e.jsx(a,{open:n,onClose:()=>r(!1),children:e.jsx(m,{onClose:()=>r(!1)})})]})}},c={render:function(){const[n,r]=i.useState(!1);return e.jsxs("div",{style:{padding:32},children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Modal Container"}),e.jsx(a,{open:n,onClose:()=>r(!1),children:e.jsx(B,{onClose:()=>r(!1)})})]})}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:64},children:[e.jsx("div",{style:{position:"relative",height:600,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-scrim)",borderRadius:"var(--radius-1)",overflow:"hidden"},children:e.jsx(m,{})}),e.jsx("div",{style:{position:"relative",height:600,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--color-scrim)",borderRadius:"var(--radius-1)",overflow:"hidden"},children:e.jsx(B,{})})]})};var v,y,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 32
    }}>
        <Button onClick={() => setOpen(true)}>Open Overlay</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <StackedModalDemo onClose={() => setOpen(false)} />
        </Overlay>
      </div>;
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,x,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 32
    }}>
        <Button onClick={() => setOpen(true)}>Open Stacked Modal</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <StackedModalDemo onClose={() => setOpen(false)} />
        </Overlay>
      </div>;
  }
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,O,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 32
    }}>
        <Button onClick={() => setOpen(true)}>Open Modal Container</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <ModalContainerDemo onClose={() => setOpen(false)} />
        </Overlay>
      </div>;
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var S,k,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 64
  }}>
      <div style={{
      position: 'relative',
      height: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-scrim)',
      borderRadius: 'var(--radius-1)',
      overflow: 'hidden'
    }}>
        <StackedModalDemo />
      </div>
      <div style={{
      position: 'relative',
      height: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-scrim)',
      borderRadius: 'var(--radius-1)',
      overflow: 'hidden'
    }}>
        <ModalContainerDemo />
      </div>
    </div>
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const N=["Default","WithStackedModal","WithModalContainer","Preview"];export{l as Default,u as Preview,c as WithModalContainer,d as WithStackedModal,N as __namedExportsOrder,_ as default};
