import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DwQS_Y10.js";import{B as s}from"./Button-cuP-Pnvr.js";const n=b.forwardRef(({imageSrc:o,imageAlt:v="",headline:i="Write a clear and eye-catching headline.",subheadline:c="Write a helpful and concise subheadline. 1-2 lines of text maximum.",actions:d,className:j,..._},B)=>e.jsxs("div",{ref:B,className:["mds-hero-corporate",j].filter(Boolean).join(" "),..._,children:[e.jsxs("div",{className:"mds-hero-corporate__image","aria-hidden":"true",children:[e.jsx("img",{src:o,alt:v}),e.jsx("div",{className:"mds-hero-corporate__scrim"})]}),e.jsxs("div",{className:"mds-hero-corporate__body",children:[e.jsxs("div",{className:"mds-hero-corporate__copy",children:[i&&e.jsx("h1",{className:"mds-hero-corporate__headline",children:i}),c&&e.jsx("p",{className:"mds-hero-corporate__subheadline",children:c})]}),d&&e.jsx("div",{className:"mds-hero-corporate__actions",children:d})]})]}));n.displayName="HeroCorporate";n.__docgenInfo={description:"",methods:[],displayName:"HeroCorporate",props:{imageSrc:{required:!0,tsType:{name:"string"},description:"Background image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the background image",defaultValue:{value:"''",computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"Primary headline text",defaultValue:{value:"'Write a clear and eye-catching headline.'",computed:!1}},subheadline:{required:!1,tsType:{name:"string"},description:"Supporting subheadline text",defaultValue:{value:"'Write a helpful and concise subheadline. 1-2 lines of text maximum.'",computed:!1}},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action content (typically a Button) rendered below the copy"}}};const N="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",R={title:"Components/HeroCorporate",component:n,tags:["autodocs"],argTypes:{headline:{control:"text"},subheadline:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},actions:{control:!1}},args:{imageSrc:N,imageAlt:"Hero background",headline:"Write a clear and eye-catching headline.",subheadline:"Write a helpful and concise subheadline. 1-2 lines of text maximum."},decorators:[o=>e.jsx("div",{style:{margin:"-1rem"},children:e.jsx(o,{})})]},r={args:{actions:e.jsx(s,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"})}},a={args:{actions:void 0}},t={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",size:"lg",inverted:!0,children:"Primary Action"}),e.jsx(s,{variant:"secondary",size:"lg",inverted:!0,children:"Secondary Action"})]})}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="primary" size="lg" inverted>
        Button Label
      </Button>
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    actions: undefined
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button variant="primary" size="lg" inverted>
          Primary Action
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Secondary Action
        </Button>
      </>
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const q=["Default","WithoutButton","WithMultipleActions"];export{r as Default,t as WithMultipleActions,a as WithoutButton,q as __namedExportsOrder,R as default};
