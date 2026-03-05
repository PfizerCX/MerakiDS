import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-DwQS_Y10.js";const a=j.forwardRef(({orientation:W="horizontal",imagePosition:_="last",headline:l,body:c,imageSrc:m,imageAlt:B="",className:E,children:A,...H},R)=>{const S=A??e.jsxs("div",{className:"mds-basic-block__content",children:[l&&e.jsx("h2",{className:"mds-basic-block__headline",children:l}),c&&e.jsx("p",{className:"mds-basic-block__body",children:c})]});return e.jsxs("div",{ref:R,className:["mds-basic-block",E].filter(Boolean).join(" "),"data-orientation":W,"data-image-position":_,...H,children:[S,m&&e.jsx("div",{className:"mds-basic-block__image-wrapper",children:e.jsx("img",{className:"mds-basic-block__image",src:m,alt:B})})]})});a.displayName="BasicBlock";a.__docgenInfo={description:"",methods:[],displayName:"BasicBlock",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction: side-by-side or stacked",defaultValue:{value:"'horizontal'",computed:!1}},imagePosition:{required:!1,tsType:{name:"union",raw:"'first' | 'last'",elements:[{name:"literal",value:"'first'"},{name:"literal",value:"'last'"}]},description:"Whether the image appears before or after the text content",defaultValue:{value:"'last'",computed:!1}},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Headline text rendered above the body copy"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body copy rendered below the headline"},imageSrc:{required:!1,tsType:{name:"string"},description:"Image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the image",defaultValue:{value:"''",computed:!1}}}};const t="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=800&h=600&fit=crop",w={title:"Components/BasicBlock",component:a,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},imagePosition:{control:"select",options:["first","last"]},headline:{control:"text"},body:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"}},args:{headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageSrc:t,imageAlt:"Placeholder image"}},i={args:{orientation:"horizontal",imagePosition:"last"}},o={args:{orientation:"horizontal",imagePosition:"first"}},r={args:{orientation:"vertical",imagePosition:"last"}},s={args:{orientation:"vertical",imagePosition:"first"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:56},children:[e.jsx(a,{orientation:"horizontal",imagePosition:"last",headline:"Horizontal — Image Last",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageSrc:t}),e.jsx(a,{orientation:"horizontal",imagePosition:"first",headline:"Horizontal — Image First",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageSrc:t}),e.jsx(a,{orientation:"vertical",imagePosition:"last",headline:"Vertical — Image Last",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageSrc:t}),e.jsx(a,{orientation:"vertical",imagePosition:"first",headline:"Vertical — Image First",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageSrc:t})]})};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    imagePosition: 'last'
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    imagePosition: 'first'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,b,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    imagePosition: 'last'
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,k,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    imagePosition: 'first'
  }
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var I,z,L;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 56
  }}>
      <BasicBlock orientation="horizontal" imagePosition="last" headline="Horizontal — Image Last" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageSrc={PLACEHOLDER_IMAGE} />
      <BasicBlock orientation="horizontal" imagePosition="first" headline="Horizontal — Image First" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageSrc={PLACEHOLDER_IMAGE} />
      <BasicBlock orientation="vertical" imagePosition="last" headline="Vertical — Image Last" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageSrc={PLACEHOLDER_IMAGE} />
      <BasicBlock orientation="vertical" imagePosition="first" headline="Vertical — Image First" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageSrc={PLACEHOLDER_IMAGE} />
    </div>
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const F=["HorizontalImageLast","HorizontalImageFirst","VerticalImageLast","VerticalImageFirst","AllVariants"];export{n as AllVariants,o as HorizontalImageFirst,i as HorizontalImageLast,s as VerticalImageFirst,r as VerticalImageLast,F as __namedExportsOrder,w as default};
