import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as K}from"./index-DwQS_Y10.js";import{B as n}from"./Button-cuP-Pnvr.js";const t=K.forwardRef(({layout:a="vertical",graphic:L=!0,sidebar:k=!0,imageSrc:G,imageAlt:R="",headline:h="Write a clear and eye-catching headline.",body:u="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",graphicIndicator:I="#1",graphicSubheadline:D="Write a clear and eye-catching subheadline.",graphicDescription:P="*Write a helpful and concise subheadline 1-3 lines maximum.",attributionTitle:C="Title",attributionSubtitle:E="Actual [BRAND] Patient",actions:p,className:F,...O},U)=>{const J=a==="horizontal",m=e.jsxs("div",{className:"mds-hero-legacy-graphic__attribution",children:[e.jsx("p",{className:"mds-hero-legacy-graphic__attribution-title",children:C}),e.jsx("p",{className:"mds-hero-legacy-graphic__attribution-subtitle",children:E})]}),g=e.jsxs("div",{className:"mds-hero-legacy-graphic__graphic-container",children:[e.jsx("div",{className:"mds-hero-legacy-graphic__indicator",children:e.jsx("p",{className:"mds-hero-legacy-graphic__indicator-text",children:I})}),e.jsxs("div",{className:"mds-hero-legacy-graphic__graphic-copy",children:[e.jsx("p",{className:"mds-hero-legacy-graphic__graphic-subheadline",children:D}),e.jsx("p",{className:"mds-hero-legacy-graphic__graphic-description",children:P})]})]});return e.jsxs("div",{ref:U,className:["mds-hero-legacy-graphic",F].filter(Boolean).join(" "),"data-layout":a,...O,children:[e.jsxs("div",{className:"mds-hero-legacy-graphic__image",children:[e.jsx("img",{src:G,alt:R}),L&&e.jsx("div",{className:"mds-hero-legacy-graphic__graphic",children:J?e.jsxs(e.Fragment,{children:[g,m]}):e.jsxs(e.Fragment,{children:[m,g]})})]}),e.jsxs("div",{className:"mds-hero-legacy-graphic__body",children:[h&&e.jsx("h2",{className:"mds-hero-legacy-graphic__headline",children:h}),e.jsxs("div",{className:"mds-hero-legacy-graphic__content",children:[u&&e.jsx("p",{className:"mds-hero-legacy-graphic__text",children:u}),k&&p&&e.jsx("div",{className:"mds-hero-legacy-graphic__actions",children:p})]})]})]})});t.displayName="HeroLegacyGraphic";t.__docgenInfo={description:"",methods:[],displayName:"HeroLegacyGraphic",props:{layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout direction: vertical (narrow) or horizontal (wide)",defaultValue:{value:"'vertical'",computed:!1}},graphic:{required:!1,tsType:{name:"boolean"},description:"Whether to show the graphic indicator overlay on the image",defaultValue:{value:"true",computed:!1}},sidebar:{required:!1,tsType:{name:"boolean"},description:"Whether to show the CTA actions below the body",defaultValue:{value:"true",computed:!1}},imageSrc:{required:!0,tsType:{name:"string"},description:"Background image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the background image",defaultValue:{value:"''",computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"Primary headline text",defaultValue:{value:"'Write a clear and eye-catching headline.'",computed:!1}},body:{required:!1,tsType:{name:"string"},description:"Body copy below the headline",defaultValue:{value:`"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs."`,computed:!1}},graphicIndicator:{required:!1,tsType:{name:"string"},description:'Text inside the graphic indicator circle (e.g. "#1")',defaultValue:{value:"'#1'",computed:!1}},graphicSubheadline:{required:!1,tsType:{name:"string"},description:"Subheadline in the graphic container",defaultValue:{value:"'Write a clear and eye-catching subheadline.'",computed:!1}},graphicDescription:{required:!1,tsType:{name:"string"},description:"Description text in the graphic container",defaultValue:{value:"'*Write a helpful and concise subheadline 1-3 lines maximum.'",computed:!1}},attributionTitle:{required:!1,tsType:{name:"string"},description:"Attribution title shown over the image",defaultValue:{value:"'Title'",computed:!1}},attributionSubtitle:{required:!1,tsType:{name:"string"},description:"Attribution subtitle shown over the image",defaultValue:{value:"'Actual [BRAND] Patient'",computed:!1}},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action content (typically a Button) rendered in the sidebar/actions area"}}};const d="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",Y={title:"Components/HeroLegacyGraphic",component:t,tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal"]},graphic:{control:"boolean"},sidebar:{control:"boolean"},headline:{control:"text"},body:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},graphicIndicator:{control:"text"},graphicSubheadline:{control:"text"},graphicDescription:{control:"text"},attributionTitle:{control:"text"},attributionSubtitle:{control:"text"},actions:{control:!1}},args:{imageSrc:d,imageAlt:"Hero background",headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",graphicIndicator:"#1",graphicSubheadline:"Write a clear and eye-catching subheadline.",graphicDescription:"*Write a helpful and concise subheadline 1-3 lines maximum.",attributionTitle:"Title",attributionSubtitle:"Actual [BRAND] Patient",actions:e.jsx(n,{children:"Button Label"})}},r={args:{layout:"vertical"},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},i={args:{layout:"horizontal"},decorators:[a=>e.jsx("div",{style:{maxWidth:767},children:e.jsx(a,{})})]},o={args:{layout:"vertical",graphic:!1},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},s={args:{layout:"horizontal",graphic:!1},decorators:[a=>e.jsx("div",{style:{maxWidth:767},children:e.jsx(a,{})})]},c={args:{layout:"vertical",sidebar:!1},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},l={decorators:[()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsx(t,{imageSrc:d,imageAlt:"Hero background",layout:"vertical",actions:e.jsx(n,{children:"Button Label"}),style:{width:375}}),e.jsx(t,{imageSrc:d,imageAlt:"Hero background",layout:"horizontal",actions:e.jsx(n,{children:"Button Label"}),style:{width:767}})]})]};var y,x,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    layout: 'vertical'
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,v,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal'
  },
  decorators: [Story => <div style={{
    maxWidth: 767
  }}>
        <Story />
      </div>]
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var _,S,N;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    graphic: false
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var W,T,A;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    graphic: false
  },
  decorators: [Story => <div style={{
    maxWidth: 767
  }}>
        <Story />
      </div>]
}`,...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,V,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    sidebar: false
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var z,H,q;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
        <HeroLegacyGraphic imageSrc={sampleImage} imageAlt="Hero background" layout="vertical" actions={<Button>Button Label</Button>} style={{
      width: 375
    }} />
        <HeroLegacyGraphic imageSrc={sampleImage} imageAlt="Hero background" layout="horizontal" actions={<Button>Button Label</Button>} style={{
      width: 767
    }} />
      </div>]
}`,...(q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const Z=["Vertical","Horizontal","VerticalNoGraphic","HorizontalNoGraphic","VerticalNoSidebar","AllVariants"];export{l as AllVariants,i as Horizontal,s as HorizontalNoGraphic,r as Vertical,o as VerticalNoGraphic,c as VerticalNoSidebar,Z as __namedExportsOrder,Y as default};
