import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as me}from"./index-DwQS_Y10.js";import{I as he}from"./InformationCircle-u1hXaM8f.js";const a=me.forwardRef(({variant:n="base",number:v,headline:x,body:f,footnote:y,headlineLead:se=!1,showTooltip:de=!0,onTooltipClick:le,className:ce,...pe},ue)=>{const g=x?e.jsxs("div",{className:"mds-card-number__headline-row",children:[e.jsx("p",{className:"mds-card-number__headline",children:x}),de&&e.jsx("button",{type:"button",className:"mds-card-number__tooltip",onClick:le,"aria-label":"More information",children:e.jsx(he,{size:20,style:{color:"inherit"}})})]}):null,L=v!=null?e.jsx("p",{className:"mds-card-number__number",children:v}):null;return e.jsxs("div",{ref:ue,className:["mds-card-number",ce].filter(Boolean).join(" "),"data-variant":n,...pe,children:[e.jsx("div",{className:"mds-card-number__top",children:se?e.jsxs(e.Fragment,{children:[g,L]}):e.jsxs(e.Fragment,{children:[L,g]})}),(f||y)&&e.jsxs("div",{className:"mds-card-number__copy",children:[f&&e.jsx("p",{className:"mds-card-number__body",children:f}),y&&e.jsx("p",{className:"mds-card-number__footnote",children:y})]})]})});a.displayName="CardNumber";a.__docgenInfo={description:"",methods:[],displayName:"CardNumber",props:{variant:{required:!1,tsType:{name:"union",raw:"'base' | 'solid' | 'outline' | 'outline-inverse'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'outline-inverse'"}]},description:"Visual style variant",defaultValue:{value:"'base'",computed:!1}},number:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Large number / stat displayed prominently"},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Headline text shown alongside the tooltip icon"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional body text (e.g. units or description)"},footnote:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional footnote text"},headlineLead:{required:!1,tsType:{name:"boolean"},description:"When true, headline appears above the number instead of below",defaultValue:{value:"false",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Whether to show the info tooltip icon next to the headline",defaultValue:{value:"true",computed:!1}},onTooltipClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Click handler for the tooltip icon"}}};const ve={title:"Components/CardNumber",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["base","solid","outline","outline-inverse"]},headlineLead:{control:"boolean"},showTooltip:{control:"boolean"}},args:{variant:"base",number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote",headlineLead:!1,showTooltip:!0,style:{width:250}}},o={},t={args:{headlineLead:!0}},r={args:{variant:"solid"}},i={args:{variant:"solid",headlineLead:!0}},s={args:{variant:"outline"}},d={args:{variant:"outline",headlineLead:!0}},l={args:{variant:"outline-inverse"},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#2e29ff",padding:32,borderRadius:16},children:e.jsx(n,{})})]},c={args:{variant:"outline-inverse",headlineLead:!0},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#2e29ff",padding:32,borderRadius:16},children:e.jsx(n,{})})]},p={args:{showTooltip:!1}},u={args:{body:void 0}},m={args:{footnote:void 0}},h={args:{number:"1,234",headline:"Total Patients",body:"Active enrollments",footnote:"Updated daily"}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote"}),e.jsx(a,{style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote",headlineLead:!0})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"solid",style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote"}),e.jsx(a,{variant:"solid",style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote",headlineLead:!0})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"outline",style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote"}),e.jsx(a,{variant:"outline",style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote",headlineLead:!0})]}),e.jsxs("div",{style:{backgroundColor:"#2e29ff",padding:32,borderRadius:16,display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"outline-inverse",style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote"}),e.jsx(a,{variant:"outline-inverse",style:{width:250},number:"1",headline:"Headline Max 2 Lines",body:"Optional Units / Description",footnote:"Optional Footnote",headlineLead:!0})]})]})};var O,w,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var j,H,R;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    headlineLead: true
  }
}`,...(R=(H=t.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var C,M,D;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'solid'
  }
}`,...(D=(M=r.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,S,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    headlineLead: true
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,U,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(W=(U=s.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var k,q,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    headlineLead: true
  }
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var I,V,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'outline-inverse'
  },
  decorators: [Story => <div style={{
    backgroundColor: '#2e29ff',
    padding: 32,
    borderRadius: 16
  }}>
        <Story />
      </div>]
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var A,P,z;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'outline-inverse',
    headlineLead: true
  },
  decorators: [Story => <div style={{
    backgroundColor: '#2e29ff',
    padding: 32,
    borderRadius: 16
  }}>
        <Story />
      </div>]
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    showTooltip: false
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    body: undefined
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    footnote: undefined
  }
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,ne,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    number: '1,234',
    headline: 'Total Patients',
    body: 'Active enrollments',
    footnote: 'Updated daily'
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,re,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardNumber style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" />
        <CardNumber style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" headlineLead />
      </div>

      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardNumber variant="solid" style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" />
        <CardNumber variant="solid" style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" headlineLead />
      </div>

      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardNumber variant="outline" style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" />
        <CardNumber variant="outline" style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" headlineLead />
      </div>

      <div style={{
      backgroundColor: '#2e29ff',
      padding: 32,
      borderRadius: 16,
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardNumber variant="outline-inverse" style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" />
        <CardNumber variant="outline-inverse" style={{
        width: 250
      }} number="1" headline="Headline Max 2 Lines" body="Optional Units / Description" footnote="Optional Footnote" headlineLead />
      </div>
    </div>
}`,...(ie=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const xe=["Default","HeadlineLead","Solid","SolidHeadlineLead","Outline","OutlineHeadlineLead","OutlineInverse","OutlineInverseHeadlineLead","WithoutTooltip","WithoutBody","WithoutFootnote","LargeNumber","AllVariants"];export{b as AllVariants,o as Default,t as HeadlineLead,h as LargeNumber,s as Outline,d as OutlineHeadlineLead,l as OutlineInverse,c as OutlineInverseHeadlineLead,r as Solid,i as SolidHeadlineLead,u as WithoutBody,m as WithoutFootnote,p as WithoutTooltip,xe as __namedExportsOrder,ve as default};
