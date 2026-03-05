import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as M}from"./index-DwQS_Y10.js";import{A as _}from"./Add-D5GwMnQe.js";import{C as w,N as G,H as J,B as K}from"./Notifications-CZksneil.js";import{P as s,a as R,S as Q,D as U}from"./Share-Df-fa0Mv.js";import{E as V}from"./Email-ChLKyF9C.js";import{S as W}from"./Search-DeXFEy0F.js";const i=M.forwardRef(({variant:e="primary",size:m="md",icon:k,className:O,disabled:q,...H},L)=>a.jsx("button",{ref:L,type:"button",className:["mds-fab",O].filter(Boolean).join(" "),"data-variant":e,"data-size":m,disabled:q,...H,children:a.jsx("span",{className:"mds-fab__state-layer",children:a.jsx("span",{className:"mds-fab__icon",children:k})})}));i.displayName="FloatingActionButton";i.__docgenInfo={description:"",methods:[],displayName:"FloatingActionButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'tonal'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'tonal'"}]},description:"Visual style: `primary` (filled) or `tonal` (subtle)",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Button size — maps to 32 px / 40 px / 48 px",defaultValue:{value:"'md'",computed:!1}},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to render inside the FAB"}}};const p={PhoneCall:e=>a.jsx(s,{size:e}),Add:e=>a.jsx(_,{size:e}),Bookmark:e=>a.jsx(K,{size:e}),Compose:e=>a.jsx(w,{size:e}),Download:e=>a.jsx(U,{size:e}),Email:e=>a.jsx(V,{size:e}),Home:e=>a.jsx(J,{size:e}),Notifications:e=>a.jsx(G,{size:e}),Search:e=>a.jsx(W,{size:e}),Settings:e=>a.jsx(R,{size:e}),Share:e=>a.jsx(Q,{size:e})},sa={title:"Components/FloatingActionButton",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","tonal"],description:"Visual style of the FAB"},size:{control:"select",options:["sm","md","lg"],description:"FAB size — maps to 32 px / 40 px / 48 px"},disabled:{control:"boolean"},icon:{control:"select",options:Object.keys(p),mapping:Object.fromEntries(Object.entries(p).map(([e,m])=>[e,m(24)])),description:"Icon displayed inside the FAB"}},args:{variant:"primary",size:"md",disabled:!1,icon:"PhoneCall","aria-label":"Call"}},l={},t={args:{variant:"tonal"}},n={args:{size:"sm"}},o={args:{size:"lg",icon:a.jsx(s,{size:36})}},r={args:{disabled:!0}},c={args:{variant:"tonal",disabled:!0}},d={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[a.jsxs("div",{children:[a.jsx("p",{style:{margin:"0 0 12px",fontWeight:600},children:"Primary"}),a.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[a.jsx(i,{size:"sm",icon:a.jsx(s,{size:24}),"aria-label":"Call"}),a.jsx(i,{size:"md",icon:a.jsx(s,{size:24}),"aria-label":"Call"}),a.jsx(i,{size:"lg",icon:a.jsx(s,{size:36}),"aria-label":"Call"}),a.jsx(i,{size:"md",icon:a.jsx(s,{size:24}),"aria-label":"Call",disabled:!0})]})]}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:"0 0 12px",fontWeight:600},children:"Tonal"}),a.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[a.jsx(i,{variant:"tonal",size:"sm",icon:a.jsx(s,{size:24}),"aria-label":"Call"}),a.jsx(i,{variant:"tonal",size:"md",icon:a.jsx(s,{size:24}),"aria-label":"Call"}),a.jsx(i,{variant:"tonal",size:"lg",icon:a.jsx(s,{size:36}),"aria-label":"Call"}),a.jsx(i,{variant:"tonal",size:"md",icon:a.jsx(s,{size:24}),"aria-label":"Call",disabled:!0})]})]}),a.jsxs("div",{children:[a.jsx("p",{style:{margin:"0 0 12px",fontWeight:600},children:"Icon examples"}),a.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[a.jsx(i,{icon:a.jsx(_,{size:24}),"aria-label":"Add"}),a.jsx(i,{icon:a.jsx(w,{size:24}),"aria-label":"Compose"}),a.jsx(i,{icon:a.jsx(W,{size:24}),"aria-label":"Search"}),a.jsx(i,{variant:"tonal",icon:a.jsx(V,{size:24}),"aria-label":"Email"}),a.jsx(i,{variant:"tonal",icon:a.jsx(R,{size:24}),"aria-label":"Settings"})]})]})]})};var g,x,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(u=(x=l.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var z,j,b;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'tonal'
  }
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,C,A;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    icon: <PhoneCall size={36} />
  }
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var B,S,F;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var P,I,T;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'tonal',
    disabled: true
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,E,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {/* Primary */}
      <div>
        <p style={{
        margin: '0 0 12px',
        fontWeight: 600
      }}>Primary</p>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <FloatingActionButton size="sm" icon={<PhoneCall size={24} />} aria-label="Call" />
          <FloatingActionButton size="md" icon={<PhoneCall size={24} />} aria-label="Call" />
          <FloatingActionButton size="lg" icon={<PhoneCall size={36} />} aria-label="Call" />
          <FloatingActionButton size="md" icon={<PhoneCall size={24} />} aria-label="Call" disabled />
        </div>
      </div>

      {/* Tonal */}
      <div>
        <p style={{
        margin: '0 0 12px',
        fontWeight: 600
      }}>Tonal</p>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <FloatingActionButton variant="tonal" size="sm" icon={<PhoneCall size={24} />} aria-label="Call" />
          <FloatingActionButton variant="tonal" size="md" icon={<PhoneCall size={24} />} aria-label="Call" />
          <FloatingActionButton variant="tonal" size="lg" icon={<PhoneCall size={36} />} aria-label="Call" />
          <FloatingActionButton variant="tonal" size="md" icon={<PhoneCall size={24} />} aria-label="Call" disabled />
        </div>
      </div>

      {/* Different Icons */}
      <div>
        <p style={{
        margin: '0 0 12px',
        fontWeight: 600
      }}>Icon examples</p>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <FloatingActionButton icon={<Add size={24} />} aria-label="Add" />
          <FloatingActionButton icon={<Compose size={24} />} aria-label="Compose" />
          <FloatingActionButton icon={<Search size={24} />} aria-label="Search" />
          <FloatingActionButton variant="tonal" icon={<Email size={24} />} aria-label="Email" />
          <FloatingActionButton variant="tonal" icon={<Settings size={24} />} aria-label="Settings" />
        </div>
      </div>
    </div>
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const la=["Primary","Tonal","Small","Large","Disabled","DisabledTonal","AllVariants"];export{d as AllVariants,r as Disabled,c as DisabledTonal,o as Large,l as Primary,n as Small,t as Tonal,la as __namedExportsOrder,sa as default};
