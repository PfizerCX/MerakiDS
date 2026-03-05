import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-DwQS_Y10.js";function I(){return e.jsxs("svg",{className:"mds-recaptcha__logo",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:"M32 2a30 30 0 0 1 21.2 8.8L42.8 21.2A16 16 0 0 0 32 17v-8.5",fill:"#1c3aa9"}),e.jsx("path",{d:"M53.2 10.8A30 30 0 0 1 62 32H53.5a16 16 0 0 0-4.2-10.8",fill:"#4285f4"}),e.jsx("path",{d:"M62 32a30 30 0 0 1-8.8 21.2L42.8 42.8A16 16 0 0 0 47.5 32",fill:"#4285f4"}),e.jsx("path",{d:"M53.2 53.2A30 30 0 0 1 32 62v-8.5a16 16 0 0 0 10.8-4.2",fill:"#4285f4"}),e.jsx("path",{d:"M32 62A30 30 0 0 1 10.8 53.2l10.4-10.4A16 16 0 0 0 32 47.5",fill:"#ababab"}),e.jsx("path",{d:"M10.8 53.2A30 30 0 0 1 2 32h14.5a16 16 0 0 0 4.2 10.8",fill:"#ababab"}),e.jsx("path",{d:"M2 32a30 30 0 0 1 8.8-21.2l10.4 10.4A16 16 0 0 0 16.5 32",fill:"#ababab"}),e.jsx("path",{d:"M10.8 10.8A30 30 0 0 1 32 2v15a16 16 0 0 0-10.8 4.2",fill:"#ababab"})]})}function P(){return e.jsx("svg",{className:"mds-recaptcha__checkmark",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M4 14.5L11 21.5L24 6.5",fill:"none",stroke:"#00a847",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"})})}const a=D.forwardRef(({state:r="default",className:E,...T},H)=>{const n=r==="default"||r==="hover";return e.jsxs("div",{ref:H,className:["mds-recaptcha",E].filter(Boolean).join(" "),"data-state":r,...T,children:[r==="expired"&&e.jsx("div",{className:"mds-recaptcha__expired-message",children:"Verification expired. Check the checkbox again."}),e.jsxs("div",{className:"mds-recaptcha__checkbox-area",role:n?"checkbox":void 0,"aria-checked":r==="ticked",tabIndex:n?0:void 0,children:[e.jsx("div",{className:"mds-recaptcha__checkbox",children:r==="loading"?e.jsx("div",{className:"mds-recaptcha__spinner"}):r==="ticked"?e.jsx(P,{}):e.jsx("div",{className:"mds-recaptcha__checkbox-box"})}),e.jsx("span",{className:"mds-recaptcha__label",children:"I'm not a robot"})]}),e.jsxs("div",{className:"mds-recaptcha__branding",children:[e.jsx(I,{}),e.jsx("span",{className:"mds-recaptcha__logo-text",children:"reCAPTCHA"}),e.jsxs("div",{className:"mds-recaptcha__links",children:[e.jsx("span",{className:"mds-recaptcha__link",children:"Privacy"}),e.jsx("span",{className:"mds-recaptcha__link-separator",children:"-"}),e.jsx("span",{className:"mds-recaptcha__link",children:"Terms"})]})]}),r==="error"&&e.jsx("div",{className:"mds-recaptcha__error-text",children:"Please verify that you are not a robot."})]})});a.displayName="Recaptcha";a.__docgenInfo={description:"",methods:[],displayName:"Recaptcha",props:{state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'loading' | 'ticked' | 'error' | 'expired'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'ticked'"},{name:"literal",value:"'error'"},{name:"literal",value:"'expired'"}]},description:"Visual state of the reCAPTCHA widget",defaultValue:{value:"'default'",computed:!1}}}};const q={title:"Components/Recaptcha",component:a,tags:["autodocs"],argTypes:{state:{control:"select",options:["default","hover","loading","ticked","error","expired"]}},args:{state:"default"}},s={},t={args:{state:"hover"}},c={args:{state:"loading"}},o={args:{state:"ticked"}},d={args:{state:"error"}},i={args:{state:"expired"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(a,{state:"default"}),e.jsx(a,{state:"hover"}),e.jsx(a,{state:"loading"}),e.jsx(a,{state:"ticked"}),e.jsx(a,{state:"error"}),e.jsx(a,{state:"expired"})]})};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,u,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'hover'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: 'loading'
  }
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var _,k,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: 'ticked'
  }
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var N,A,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var R,y,S;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: 'expired'
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var L,M,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <Recaptcha state="default" />
      <Recaptcha state="hover" />
      <Recaptcha state="loading" />
      <Recaptcha state="ticked" />
      <Recaptcha state="error" />
      <Recaptcha state="expired" />
    </div>
}`,...(C=(M=l.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const O=["Default","Hover","Loading","Ticked","ErrorState","Expired","AllStates"];export{l as AllStates,s as Default,d as ErrorState,i as Expired,t as Hover,c as Loading,o as Ticked,O as __namedExportsOrder,q as default};
