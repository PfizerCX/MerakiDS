import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-DwQS_Y10.js";import{B as J}from"./Button-cuP-Pnvr.js";const t=G.forwardRef(({layout:q="vertical",variant:R="full-bleed",imagePosition:c="start",imageSrc:A,imageAlt:E="",headline:m,body:y,actionLabel:F="Button Label",onAction:D,attribution:i,className:C,children:M,...O},U)=>{const p=e.jsxs("div",{className:"mds-page-break-legacy__image",children:[e.jsx("img",{src:A,alt:E}),i&&e.jsxs("div",{className:"mds-page-break-legacy__attribution",children:[e.jsx("p",{className:"mds-page-break-legacy__attribution-title",children:i.title}),i.subtitle&&e.jsx("p",{className:"mds-page-break-legacy__attribution-subtitle",children:i.subtitle})]})]});return e.jsxs("div",{ref:U,className:["mds-page-break-legacy",C].filter(Boolean).join(" "),"data-layout":q,"data-variant":R,"data-image-position":c,...O,children:[c==="start"&&p,e.jsxs("div",{className:"mds-page-break-legacy__content",children:[e.jsxs("div",{className:"mds-page-break-legacy__copy",children:[m&&e.jsx("h2",{className:"mds-page-break-legacy__headline",children:m}),y&&e.jsx("p",{className:"mds-page-break-legacy__body",children:y})]}),e.jsx("div",{className:"mds-page-break-legacy__actions",children:e.jsx(J,{onClick:D,children:F})}),M]}),c==="end"&&p]})});t.displayName="PageBreakLegacy";t.__docgenInfo={description:"",methods:[],displayName:"PageBreakLegacy",props:{layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout direction: vertical (stacked) or horizontal (side-by-side)",defaultValue:{value:"'vertical'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'full-bleed' | 'inset'",elements:[{name:"literal",value:"'full-bleed'"},{name:"literal",value:"'inset'"}]},description:"Visual variant: full-bleed (edge-to-edge) or inset (rounded corners)",defaultValue:{value:"'full-bleed'",computed:!1}},imagePosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"Position of the image relative to the content slot",defaultValue:{value:"'start'",computed:!1}},imageSrc:{required:!0,tsType:{name:"string"},description:"Image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the image",defaultValue:{value:"''",computed:!1}},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Primary headline text"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body copy displayed below the headline"},actionLabel:{required:!1,tsType:{name:"string"},description:"CTA button label",defaultValue:{value:"'Button Label'",computed:!1}},onAction:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Click handler for the CTA button"},attribution:{required:!1,tsType:{name:"signature",type:"object",raw:"{ title: string; subtitle?: string }",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"subtitle",value:{name:"string",required:!1}}]}},description:"Optional image attribution overlay with title and subtitle"}}};const a="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",Y={title:"Components/PageBreakLegacy",component:t,tags:["autodocs"],argTypes:{layout:{control:"radio",options:["vertical","horizontal"]},variant:{control:"radio",options:["full-bleed","inset"]},imagePosition:{control:"radio",options:["start","end"]},imageSrc:{control:"text"},imageAlt:{control:"text"},headline:{control:"text"},body:{control:"text"},actionLabel:{control:"text"}},args:{imageSrc:a,imageAlt:"Healthcare professional",headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",actionLabel:"Button Label",attribution:{title:"Title",subtitle:"Subtitle"}}},l={args:{layout:"vertical",variant:"full-bleed",imagePosition:"start",style:{maxWidth:375}}},r={args:{layout:"vertical",variant:"inset",imagePosition:"start",style:{maxWidth:335}}},s={args:{layout:"horizontal",variant:"full-bleed",imagePosition:"start",style:{maxWidth:767}}},n={args:{layout:"horizontal",variant:"inset",imagePosition:"start",style:{maxWidth:712}}},o={args:{layout:"horizontal",variant:"full-bleed",imagePosition:"end",style:{maxWidth:767}}},d={args:{layout:"vertical",variant:"full-bleed",imagePosition:"start",attribution:void 0,style:{maxWidth:375}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Vertical — Full Bleed"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(t,{layout:"vertical",variant:"full-bleed",imagePosition:"start",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:375}}),e.jsx(t,{layout:"vertical",variant:"full-bleed",imagePosition:"end",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:375}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Vertical — Inset"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(t,{layout:"vertical",variant:"inset",imagePosition:"start",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:335}}),e.jsx(t,{layout:"vertical",variant:"inset",imagePosition:"end",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:335}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Horizontal — Full Bleed"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{layout:"horizontal",variant:"full-bleed",imagePosition:"start",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:767}}),e.jsx(t,{layout:"horizontal",variant:"full-bleed",imagePosition:"end",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:767}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Horizontal — Inset"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{layout:"horizontal",variant:"inset",imagePosition:"start",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:712}}),e.jsx(t,{layout:"horizontal",variant:"inset",imagePosition:"end",imageSrc:a,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",attribution:{title:"Title",subtitle:"Subtitle"},style:{maxWidth:712}})]})]})]})};var g,h,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    variant: 'full-bleed',
    imagePosition: 'start',
    style: {
      maxWidth: 375
    }
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,f,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    variant: 'inset',
    imagePosition: 'start',
    style: {
      maxWidth: 335
    }
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var W,H,k;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    variant: 'full-bleed',
    imagePosition: 'start',
    style: {
      maxWidth: 767
    }
  }
}`,...(k=(H=s.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var S,P,B;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    variant: 'inset',
    imagePosition: 'start',
    style: {
      maxWidth: 712
    }
  }
}`,...(B=(P=n.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var j,T,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    variant: 'full-bleed',
    imagePosition: 'end',
    style: {
      maxWidth: 767
    }
  }
}`,...(z=(T=o.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var L,_,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    variant: 'full-bleed',
    imagePosition: 'start',
    attribution: undefined,
    style: {
      maxWidth: 375
    }
  }
}`,...(I=(_=d.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var N,V,w;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <div>
        <h3 style={{
        marginBottom: 16
      }}>Vertical — Full Bleed</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <PageBreakLegacy layout="vertical" variant="full-bleed" imagePosition="start" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 375
        }} />
          <PageBreakLegacy layout="vertical" variant="full-bleed" imagePosition="end" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 375
        }} />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: 16
      }}>Vertical — Inset</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <PageBreakLegacy layout="vertical" variant="inset" imagePosition="start" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 335
        }} />
          <PageBreakLegacy layout="vertical" variant="inset" imagePosition="end" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 335
        }} />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: 16
      }}>Horizontal — Full Bleed</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <PageBreakLegacy layout="horizontal" variant="full-bleed" imagePosition="start" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 767
        }} />
          <PageBreakLegacy layout="horizontal" variant="full-bleed" imagePosition="end" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 767
        }} />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: 16
      }}>Horizontal — Inset</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <PageBreakLegacy layout="horizontal" variant="inset" imagePosition="start" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 712
        }} />
          <PageBreakLegacy layout="horizontal" variant="inset" imagePosition="end" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." attribution={{
          title: 'Title',
          subtitle: 'Subtitle'
        }} style={{
          maxWidth: 712
        }} />
        </div>
      </div>
    </div>
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const Z=["VerticalFullBleed","VerticalInset","HorizontalFullBleed","HorizontalInset","ImageEnd","WithoutAttribution","AllVariants"];export{u as AllVariants,s as HorizontalFullBleed,n as HorizontalInset,o as ImageEnd,l as VerticalFullBleed,r as VerticalInset,d as WithoutAttribution,Z as __namedExportsOrder,Y as default};
