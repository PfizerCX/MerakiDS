import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-DwQS_Y10.js";const a=I.forwardRef(({size:D="sm",mode:_="light",className:B,...N},W)=>e.jsx("div",{ref:W,className:["mds-loading-spinner",B].filter(Boolean).join(" "),role:"status","aria-label":"Loading","data-size":D,"data-mode":_,...N,children:e.jsxs("svg",{className:"mds-loading-spinner__svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"mds-loading-spinner__track",cx:"12",cy:"12",r:"10",strokeWidth:"3"}),e.jsx("circle",{className:"mds-loading-spinner__arc",cx:"12",cy:"12",r:"10",strokeWidth:"3",strokeDasharray:"62.83",strokeDashoffset:"47.12",strokeLinecap:"round"})]})}));a.displayName="LoadingSpinner";a.__docgenInfo={description:"",methods:[],displayName:"LoadingSpinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Size variant.",defaultValue:{value:"'sm'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color mode — light for light backgrounds, dark for dark backgrounds.",defaultValue:{value:"'light'",computed:!1}}}};const V={title:"Components/LoadingSpinner",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","lg"],description:"Spinner size"},mode:{control:"select",options:["light","dark"],description:"Color mode (light or dark background)"}},args:{size:"sm",mode:"light"}},r={},s={args:{size:"sm",mode:"light"}},o={args:{size:"lg",mode:"light"}},i={args:{size:"sm",mode:"dark"},parameters:{backgrounds:{default:"dark"}}},n={args:{size:"lg",mode:"dark"},parameters:{backgrounds:{default:"dark"}}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12,fontWeight:500},children:"Light mode"}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{size:"sm",mode:"light"}),e.jsx(a,{size:"lg",mode:"light"})]})]}),e.jsxs("div",{style:{background:"#00003a",padding:24,borderRadius:8},children:[e.jsx("p",{style:{marginBottom:12,fontWeight:500,color:"#fff"},children:"Dark mode"}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{size:"sm",mode:"dark"}),e.jsx(a,{size:"lg",mode:"dark"})]})]})]})};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,g,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    mode: 'light'
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,f,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    mode: 'light'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,x,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    mode: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,z,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    mode: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var S,j,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        marginBottom: 12,
        fontWeight: 500
      }}>Light mode</p>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          <LoadingSpinner size="sm" mode="light" />
          <LoadingSpinner size="lg" mode="light" />
        </div>
      </div>
      <div style={{
      background: '#00003a',
      padding: 24,
      borderRadius: 8
    }}>
        <p style={{
        marginBottom: 12,
        fontWeight: 500,
        color: '#fff'
      }}>Dark mode</p>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          <LoadingSpinner size="sm" mode="dark" />
          <LoadingSpinner size="lg" mode="dark" />
        </div>
      </div>
    </div>
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const C=["Default","SmallLight","LargeLight","SmallDark","LargeDark","AllVariants"];export{t as AllVariants,r as Default,n as LargeDark,o as LargeLight,i as SmallDark,s as SmallLight,C as __namedExportsOrder,V as default};
