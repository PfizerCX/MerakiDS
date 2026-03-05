import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-DwQS_Y10.js";const a=D.forwardRef(({variant:T="primary",size:q="md",className:A,children:b,...O},k)=>e.jsx("span",{ref:k,className:["mds-badge",A].filter(Boolean).join(" "),"data-variant":T,"data-size":q,...O,children:b}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'positive' | 'negative' | 'cautionary' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'cautionary'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const H={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","positive","negative","cautionary","neutral"]},size:{control:"select",options:["sm","md"]}},args:{children:"Badge",variant:"primary",size:"md"}},r={},n={args:{variant:"secondary"}},s={args:{variant:"positive",children:"Recommended"}},t={args:{variant:"negative",children:"Error"}},i={args:{variant:"cautionary",children:"Warning"}},o={args:{variant:"neutral",children:"Info"}},c={args:{size:"sm",children:"Small"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"positive",children:"Positive"}),e.jsx(a,{variant:"negative",children:"Negative"}),e.jsx(a,{variant:"cautionary",children:"Cautionary"}),e.jsx(a,{variant:"neutral",children:"Neutral"})]})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,v,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,f,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    children: 'Recommended'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var B,x,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    children: 'Error'
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,N,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'cautionary',
    children: 'Warning'
  }
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var z,w,C;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    children: 'Info'
  }
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,I,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,W,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="positive">Positive</Badge>
      <Badge variant="negative">Negative</Badge>
      <Badge variant="cautionary">Cautionary</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const J=["Primary","Secondary","Positive","Negative","Cautionary","Neutral","Small","AllVariants"];export{d as AllVariants,i as Cautionary,t as Negative,o as Neutral,s as Positive,r as Primary,n as Secondary,c as Small,J as __namedExportsOrder,H as default};
