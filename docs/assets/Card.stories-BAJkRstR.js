import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-DwQS_Y10.js";import{B as T}from"./Button-cuP-Pnvr.js";const a=E.forwardRef(({variant:y="elevated",padding:C="md",className:j,children:w,...S},z)=>e.jsx("div",{ref:z,className:["mds-card",j].filter(Boolean).join(" "),"data-variant":y,"data-padding":C,...S,children:w}));a.displayName="Card";a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'elevated' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'elevated'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'elevated'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const B={title:"Components/Card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","filled","outlined"]},padding:{control:"select",options:["none","sm","md","lg"]}},args:{variant:"elevated",padding:"md"}},r=e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("h3",{style:{margin:0,fontSize:"var(--font-size-title-m)",fontWeight:500,color:"var(--color-on-surface)"},children:"Card Title"}),e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-body-m)",color:"var(--color-on-surface-variant)"},children:"This is a card component from the Meraki Design System. It supports elevated, filled, and outlined variants."}),e.jsx("div",{children:e.jsx(T,{size:"sm",children:"Action"})})]}),t={args:{children:r}},l={args:{variant:"filled",children:r}},n={args:{variant:"outlined",children:r}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"elevated",style:{width:280},children:r}),e.jsx(a,{variant:"filled",style:{width:280},children:r}),e.jsx(a,{variant:"outlined",style:{width:280},children:r})]})};var d,i,o;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: sampleContent
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    children: sampleContent
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,v,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: sampleContent
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <Card variant="elevated" style={{
      width: 280
    }}>{sampleContent}</Card>
      <Card variant="filled" style={{
      width: 280
    }}>{sampleContent}</Card>
      <Card variant="outlined" style={{
      width: 280
    }}>{sampleContent}</Card>
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const N=["Elevated","Filled","Outlined","AllVariants"];export{s as AllVariants,t as Elevated,l as Filled,n as Outlined,N as __namedExportsOrder,B as default};
