import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-DwQS_Y10.js";const a=w.forwardRef(({layout:r="vertical",imageSrc:N,imageAlt:z="",headline:c,body:d,sidebar:m,className:_,children:H,...R},T)=>e.jsxs("div",{ref:T,className:["mds-hero-legacy-image",_].filter(Boolean).join(" "),"data-layout":r,...R,children:[e.jsx("div",{className:"mds-hero-legacy-image__image","aria-hidden":"true",children:e.jsx("img",{src:N,alt:z})}),e.jsxs("div",{className:"mds-hero-legacy-image__container",children:[e.jsx("div",{className:"mds-hero-legacy-image__content",children:e.jsxs("div",{className:"mds-hero-legacy-image__copy",children:[c&&e.jsx("h1",{className:"mds-hero-legacy-image__headline",children:c}),d&&e.jsx("p",{className:"mds-hero-legacy-image__body",children:d})]})}),m&&e.jsx("div",{className:"mds-hero-legacy-image__sidebar",children:m}),H]})]}));a.displayName="HeroLegacyImage";a.__docgenInfo={description:"",methods:[],displayName:"HeroLegacyImage",props:{layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout direction: horizontal (content + sidebar side-by-side) or vertical (stacked)",defaultValue:{value:"'vertical'",computed:!1}},imageSrc:{required:!0,tsType:{name:"string"},description:"Hero image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the hero image",defaultValue:{value:"''",computed:!1}},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Primary headline text"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body copy below the headline"},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Optional sidebar content (e.g. "On This Page" navigation)'}}};const n="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1200&q=80",l=({collapsed:r})=>e.jsxs("nav",{style:{display:"flex",flexDirection:"column",gap:r?4:8,width:"100%",lineHeight:1.2},children:[e.jsx("p",{style:{margin:0,fontSize:"var(--font-size-title-s)",fontWeight:"var(--font-weight-medium)",color:"var(--color-on-surface)",letterSpacing:"var(--letter-spacing-regular)"},children:"On This Page:"}),!r&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,fontSize:"var(--font-size-body-lg)",fontWeight:"var(--font-weight-regular)",color:"var(--ref-color-blue-80)"},children:[e.jsx("p",{style:{margin:0},children:"Section Title 1"}),e.jsx("p",{style:{margin:0},children:"Section Title 2"}),e.jsx("p",{style:{margin:0},children:"Section Title 3"})]})]}),L={title:"Components/HeroLegacyImage",component:a,tags:["autodocs"],argTypes:{layout:{control:"radio",options:["vertical","horizontal"]},imageSrc:{control:"text"},imageAlt:{control:"text"},headline:{control:"text"},body:{control:"text"}},args:{imageSrc:n,imageAlt:"Hero image",headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of breakthroughs."}},t={args:{layout:"vertical",sidebar:e.jsx(l,{collapsed:!0}),style:{maxWidth:375}}},i={args:{layout:"horizontal",sidebar:e.jsx(l,{}),style:{maxWidth:767}}},o={args:{layout:"horizontal",style:{maxWidth:767}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Vertical (mobile)"}),e.jsx(a,{layout:"vertical",imageSrc:n,imageAlt:"Hero image",headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of.",sidebar:e.jsx(l,{collapsed:!0}),style:{maxWidth:375}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Horizontal (desktop)"}),e.jsx(a,{layout:"horizontal",imageSrc:n,imageAlt:"Hero image",headline:"Write a clear and eye-catching headline.",body:"Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of breakthroughs.",sidebar:e.jsx(l,{}),style:{maxWidth:767}})]})]})};var g,h,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    sidebar: <SidebarNav collapsed />,
    style: {
      maxWidth: 375
    }
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var p,u,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    sidebar: <SidebarNav />,
    style: {
      maxWidth: 767
    }
  }
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,v,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    style: {
      maxWidth: 767
    }
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,W,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <div>
        <h3 style={{
        marginBottom: 16
      }}>Vertical (mobile)</h3>
        <HeroLegacyImage layout="vertical" imageSrc={sampleImage} imageAlt="Hero image" headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of." sidebar={<SidebarNav collapsed />} style={{
        maxWidth: 375
      }} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 16
      }}>Horizontal (desktop)</h3>
        <HeroLegacyImage layout="horizontal" imageSrc={sampleImage} imageAlt="Hero image" headline="Write a clear and eye-catching headline." body="Write a helpful and concise body copy 2-3 lines of text maximum. We're in relentless pursuit of breakthroughs." sidebar={<SidebarNav />} style={{
        maxWidth: 767
      }} />
      </div>
    </div>
}`,...(S=(W=s.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const V=["Vertical","Horizontal","WithoutSidebar","AllVariants"];export{s as AllVariants,i as Horizontal,t as Vertical,o as WithoutSidebar,V as __namedExportsOrder,L as default};
