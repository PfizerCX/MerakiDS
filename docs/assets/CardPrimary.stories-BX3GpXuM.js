import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-DwQS_Y10.js";import{C as q}from"./ChevronRightWide-BGEbEegk.js";const a=L.forwardRef(({imageSrc:l,imageAlt:N="",headline:c,body:n,disclaimer:m,onAction:R,actionLabel:A="Learn more",className:S,children:P,...D},H)=>e.jsxs("div",{ref:H,className:["mds-card-primary",S].filter(Boolean).join(" "),...D,children:[l&&e.jsx("div",{className:"mds-card-primary__image",children:e.jsx("img",{src:l,alt:N})}),e.jsxs("div",{className:"mds-card-primary__content",children:[e.jsxs("div",{className:"mds-card-primary__copy",children:[c&&e.jsx("p",{className:"mds-card-primary__headline",children:c}),n&&e.jsx("p",{className:"mds-card-primary__body",children:n})]}),e.jsxs("div",{className:"mds-card-primary__actions",children:[e.jsx("div",{className:"mds-card-primary__cta-row",children:e.jsx("button",{type:"button",className:"mds-card-primary__cta",onClick:R,"aria-label":A,children:e.jsx(q,{size:20})})}),m&&e.jsx("p",{className:"mds-card-primary__disclaimer",children:m})]}),P]})]}));a.displayName="CardPrimary";a.__docgenInfo={description:"",methods:[],displayName:"CardPrimary",props:{imageSrc:{required:!1,tsType:{name:"string"},description:"URL for the card image"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the card image",defaultValue:{value:"''",computed:!1}},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Headline text displayed below the image"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body copy displayed below the headline"},disclaimer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Disclaimer text displayed below the CTA; pass falsy to hide"},onAction:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Click handler for the CTA icon button"},actionLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the CTA icon button",defaultValue:{value:"'Learn more'",computed:!1}}}};const d="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",B={title:"Components/CardPrimary",component:a,tags:["autodocs"],argTypes:{imageSrc:{control:"text"},imageAlt:{control:"text"},headline:{control:"text"},body:{control:"text"},disclaimer:{control:"text"},actionLabel:{control:"text"}},args:{imageSrc:d,imageAlt:"People enjoying a meal outdoors",headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",disclaimer:"*Disclaimer Text",actionLabel:"Learn more"}},r={},s={args:{disclaimer:void 0}},i={args:{imageSrc:void 0}},t={args:{style:{width:350}}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{imageSrc:d,imageAlt:"People enjoying a meal outdoors",headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",disclaimer:"*Disclaimer Text",style:{width:250}}),e.jsx(a,{imageSrc:d,imageAlt:"People enjoying a meal outdoors",headline:"Without Disclaimer",body:"This card has no disclaimer text beneath the action button.",style:{width:250}}),e.jsx(a,{imageSrc:d,imageAlt:"People enjoying a meal outdoors",headline:"Wider Card",body:"This card is rendered at a wider width to show responsive behavior.",disclaimer:"*Disclaimer Text",style:{width:400}})]})};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disclaimer: undefined
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,T,_;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    style: {
      width: 350
    }
  }
}`,...(_=(T=t.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var v,C,W;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <CardPrimary imageSrc={sampleImage} imageAlt="People enjoying a meal outdoors" headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." disclaimer="*Disclaimer Text" style={{
      width: 250
    }} />
      <CardPrimary imageSrc={sampleImage} imageAlt="People enjoying a meal outdoors" headline="Without Disclaimer" body="This card has no disclaimer text beneath the action button." style={{
      width: 250
    }} />
      <CardPrimary imageSrc={sampleImage} imageAlt="People enjoying a meal outdoors" headline="Wider Card" body="This card is rendered at a wider width to show responsive behavior." disclaimer="*Disclaimer Text" style={{
      width: 400
    }} />
    </div>
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const M=["Default","WithoutDisclaimer","WithoutImage","CustomWidth","AllVariants"];export{o as AllVariants,t as CustomWidth,r as Default,s as WithoutDisclaimer,i as WithoutImage,M as __namedExportsOrder,B as default};
