import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-DwQS_Y10.js";import{A as Q}from"./ArrowRight-pOkf7B7I.js";import{A as U}from"./ArrowLeft-BxvKb5RN.js";const a=P.forwardRef(({variant:i="base",headline:y,body:m,showBody:u=!0,leftIcon:p,rightIcon:f,showRightIcon:x=!0,className:F,...G},J)=>{const K=i==="solid"||i==="outline-inverse"?"var(--color-on-primary)":"var(--color-primary)",h=f===void 0?e.jsx(Q,{size:36,style:{color:K}}):f,M=p||u&&m||x&&h;return e.jsxs("div",{ref:J,className:["mds-card-simple",F].filter(Boolean).join(" "),"data-variant":i,...G,children:[y&&e.jsx("p",{className:"mds-card-simple__headline",children:y}),M&&e.jsxs("div",{className:"mds-card-simple__content",children:[p&&e.jsx("div",{className:"mds-card-simple__icon",children:p}),u&&m&&e.jsx("p",{className:"mds-card-simple__body",children:m}),x&&h&&e.jsx("div",{className:"mds-card-simple__icon",children:h})]})]})});a.displayName="CardSimple";a.__docgenInfo={description:"",methods:[],displayName:"CardSimple",props:{variant:{required:!1,tsType:{name:"union",raw:"'base' | 'solid' | 'outline' | 'outline-inverse'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'outline-inverse'"}]},description:"Visual style variant",defaultValue:{value:"'base'",computed:!1}},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Headline text displayed prominently"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional body text shown beside the icons"},showBody:{required:!1,tsType:{name:"boolean"},description:"Whether to show the body text",defaultValue:{value:"true",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom element rendered in the left icon slot"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom element rendered in the right icon slot. Defaults to an ArrowRight icon. Set to `null` to hide."},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the right icon (defaults to true)",defaultValue:{value:"true",computed:!1}}}};const ae={title:"Components/CardSimple",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["base","solid","outline","outline-inverse"]},showBody:{control:"boolean"},showRightIcon:{control:"boolean"}},args:{variant:"base",headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.",showBody:!0,showRightIcon:!0,style:{width:464}}},s={},o={args:{variant:"solid"}},r={args:{variant:"outline"}},t={args:{variant:"outline-inverse"},decorators:[i=>e.jsx("div",{style:{backgroundColor:"#2e29ff",padding:32,borderRadius:16},children:e.jsx(i,{})})]},l={args:{leftIcon:e.jsx(U,{size:36,style:{color:"var(--color-primary)"}})}},n={args:{showBody:!1}},d={args:{showRightIcon:!1}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."}),e.jsx(a,{style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.",showBody:!1})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"solid",style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."}),e.jsx(a,{variant:"solid",style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.",showBody:!1})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"outline",style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."}),e.jsx(a,{variant:"outline",style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.",showBody:!1})]}),e.jsxs("div",{style:{backgroundColor:"#2e29ff",padding:32,borderRadius:16,display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{variant:"outline-inverse",style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more."}),e.jsx(a,{variant:"outline-inverse",style:{width:464},headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. Less is more.",showBody:!1})]})]})};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,W,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'solid'
  }
}`,...(R=(W=o.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var j,S,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var L,N,B;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(N=t.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var I,_,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    leftIcon: <ArrowLeft size={36} style={{
      color: 'var(--color-primary)'
    }} />
  }
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var T,q,O;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showBody: false
  }
}`,...(O=(q=n.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var V,D,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showRightIcon: false
  }
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var z,E,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        <CardSimple style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." />
        <CardSimple style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." showBody={false} />
      </div>

      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardSimple variant="solid" style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." />
        <CardSimple variant="solid" style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." showBody={false} />
      </div>

      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardSimple variant="outline" style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." />
        <CardSimple variant="outline" style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." showBody={false} />
      </div>

      <div style={{
      backgroundColor: '#2e29ff',
      padding: 32,
      borderRadius: 16,
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        <CardSimple variant="outline-inverse" style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." />
        <CardSimple variant="outline-inverse" style={{
        width: 464
      }} headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 3-4 lines of text maximum. Less is more." showBody={false} />
      </div>
    </div>
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const ie=["Default","Solid","Outline","OutlineInverse","WithLeftIcon","WithoutBody","WithoutRightIcon","AllVariants"];export{c as AllVariants,s as Default,r as Outline,t as OutlineInverse,o as Solid,l as WithLeftIcon,n as WithoutBody,d as WithoutRightIcon,ie as __namedExportsOrder,ae as default};
