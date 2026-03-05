import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./index-DwQS_Y10.js";import{B as t}from"./Button-cuP-Pnvr.js";const i=ce.forwardRef(({layout:a="vertical",imagePosition:y="before",imageDirection:te="left",imageSrc:ie,imageAlt:re="",imageCaption:f,headline:oe,body:x,actions:b,disclaimer:B,className:se,...ne},le)=>{const v=e.jsxs("div",{className:"mds-page-break__image-block",children:[e.jsx("div",{className:"mds-page-break__image",children:e.jsx("img",{src:ie,alt:re})}),f&&e.jsx("div",{className:"mds-page-break__image-caption",children:e.jsx("p",{children:f})})]}),j=e.jsxs("div",{className:"mds-page-break__content",children:[e.jsxs("div",{className:"mds-page-break__copy",children:[e.jsx("p",{className:"mds-page-break__headline",children:oe}),x&&e.jsx("p",{className:"mds-page-break__body",children:x})]}),e.jsxs("div",{className:"mds-page-break__footer",children:[b&&e.jsx("div",{className:"mds-page-break__actions",children:b}),B&&e.jsx("div",{className:"mds-page-break__disclaimer",children:e.jsx("p",{children:B})})]})]});return e.jsx("div",{ref:le,className:["mds-page-break",se].filter(Boolean).join(" "),"data-layout":a,"data-image-position":y,"data-image-direction":te,...ne,children:y==="before"?e.jsxs(e.Fragment,{children:[v,j]}):e.jsxs(e.Fragment,{children:[j,v]})})});i.displayName="PageBreak";i.__docgenInfo={description:"",methods:[],displayName:"PageBreak",props:{layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout direction: side-by-side or stacked",defaultValue:{value:"'vertical'",computed:!1}},imagePosition:{required:!1,tsType:{name:"union",raw:"'before' | 'after'",elements:[{name:"literal",value:"'before'"},{name:"literal",value:"'after'"}]},description:"Where the image appears relative to the text content",defaultValue:{value:"'before'",computed:!1}},imageDirection:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Which side of the component the image's rounded corners face",defaultValue:{value:"'left'",computed:!1}},imageSrc:{required:!0,tsType:{name:"string"},description:"Image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the image",defaultValue:{value:"''",computed:!1}},imageCaption:{required:!1,tsType:{name:"string"},description:"Caption text displayed on or below the image"},headline:{required:!0,tsType:{name:"string"},description:"Headline text"},body:{required:!1,tsType:{name:"string"},description:"Body copy below the headline"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons rendered in the footer"},disclaimer:{required:!1,tsType:{name:"string"},description:"Disclaimer text displayed beneath the actions"}}};const r="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",ge={title:"Components/PageBreak",component:i,tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal"]},imagePosition:{control:"select",options:["before","after"]},imageDirection:{control:"select",options:["left","right"]},headline:{control:"text"},body:{control:"text"},disclaimer:{control:"text"},imageCaption:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},actions:{control:!1}},args:{imageSrc:r,imageAlt:"Page break image",headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We’re in relentless pursuit of breakthroughs.",disclaimer:"Optional disclaimer goes here.",imageCaption:"Maria is a real patient who uses ABRYSVO™"}},o={args:{layout:"vertical",imagePosition:"before",imageDirection:"left",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},s={args:{layout:"vertical",imagePosition:"before",imageDirection:"right",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},n={args:{layout:"vertical",imagePosition:"after",imageDirection:"left",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},l={args:{layout:"vertical",imagePosition:"after",imageDirection:"right",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},c={args:{layout:"horizontal",imagePosition:"before",imageDirection:"left",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})}},m={args:{layout:"horizontal",imagePosition:"before",imageDirection:"right",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})}},d={args:{layout:"horizontal",imagePosition:"after",imageDirection:"left",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})}},u={args:{layout:"horizontal",imagePosition:"after",imageDirection:"right",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})}},g={args:{layout:"vertical",imagePosition:"before",imageDirection:"left",disclaimer:void 0,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},h={args:{layout:"vertical",imagePosition:"before",imageDirection:"left",imageCaption:void 0,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]})},decorators:[a=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(a,{})})]},p={decorators:[()=>{const a=e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Button Label"}),e.jsx(t,{variant:"secondary",children:"Button Label"})]});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx("h3",{style:{margin:0},children:"Vertical — Before Text, Left"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{layout:"vertical",imagePosition:"before",imageDirection:"left",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."})}),e.jsx("h3",{style:{margin:0},children:"Vertical — Before Text, Right"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{layout:"vertical",imagePosition:"before",imageDirection:"right",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."})}),e.jsx("h3",{style:{margin:0},children:"Vertical — After Text, Left"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{layout:"vertical",imagePosition:"after",imageDirection:"left",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."})}),e.jsx("h3",{style:{margin:0},children:"Vertical — After Text, Right"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{layout:"vertical",imagePosition:"after",imageDirection:"right",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."})}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Before Text, Left"}),e.jsx(i,{layout:"horizontal",imagePosition:"before",imageDirection:"left",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Before Text, Right"}),e.jsx(i,{layout:"horizontal",imagePosition:"before",imageDirection:"right",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."}),e.jsx("h3",{style:{margin:0},children:"Horizontal — After Text, Left"}),e.jsx(i,{layout:"horizontal",imagePosition:"after",imageDirection:"left",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."}),e.jsx("h3",{style:{margin:0},children:"Horizontal — After Text, Right"}),e.jsx(i,{layout:"horizontal",imagePosition:"after",imageDirection:"right",imageSrc:r,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",imageCaption:"Maria is a real patient who uses ABRYSVO™",actions:a,disclaimer:"Optional disclaimer goes here."})]})}]};var L,S,W;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'left',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var H,P,k;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'right',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(k=(P=s.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var D,A,R;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    imagePosition: 'after',
    imageDirection: 'left',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var V,z,O;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    imagePosition: 'after',
    imageDirection: 'right',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var T,w,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
    imageDirection: 'left',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var _,M,Y;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
    imageDirection: 'right',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  }
}`,...(Y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var N,F,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imagePosition: 'after',
    imageDirection: 'left',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var q,E,U;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imagePosition: 'after',
    imageDirection: 'right',
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  }
}`,...(U=(E=u.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'left',
    disclaimer: undefined,
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    imagePosition: 'before',
    imageDirection: 'left',
    imageCaption: undefined,
    actions: <>
        <Button variant="primary">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: [() => {
    const actions = <>
          <Button variant="primary">Button Label</Button>
          <Button variant="secondary">Button Label</Button>
        </>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }}>
          <h3 style={{
        margin: 0
      }}>Vertical — Before Text, Left</h3>
          <div style={{
        maxWidth: 375
      }}>
            <PageBreak layout="vertical" imagePosition="before" imageDirection="left" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />
          </div>

          <h3 style={{
        margin: 0
      }}>Vertical — Before Text, Right</h3>
          <div style={{
        maxWidth: 375
      }}>
            <PageBreak layout="vertical" imagePosition="before" imageDirection="right" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />
          </div>

          <h3 style={{
        margin: 0
      }}>Vertical — After Text, Left</h3>
          <div style={{
        maxWidth: 375
      }}>
            <PageBreak layout="vertical" imagePosition="after" imageDirection="left" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />
          </div>

          <h3 style={{
        margin: 0
      }}>Vertical — After Text, Right</h3>
          <div style={{
        maxWidth: 375
      }}>
            <PageBreak layout="vertical" imagePosition="after" imageDirection="right" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />
          </div>

          <h3 style={{
        margin: 0
      }}>Horizontal — Before Text, Left</h3>
          <PageBreak layout="horizontal" imagePosition="before" imageDirection="left" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />

          <h3 style={{
        margin: 0
      }}>Horizontal — Before Text, Right</h3>
          <PageBreak layout="horizontal" imagePosition="before" imageDirection="right" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />

          <h3 style={{
        margin: 0
      }}>Horizontal — After Text, Left</h3>
          <PageBreak layout="horizontal" imagePosition="after" imageDirection="left" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />

          <h3 style={{
        margin: 0
      }}>Horizontal — After Text, Right</h3>
          <PageBreak layout="horizontal" imagePosition="after" imageDirection="right" imageSrc={sampleImage} headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs." imageCaption="Maria is a real patient who uses ABRYSVO™" actions={actions} disclaimer="Optional disclaimer goes here." />
        </div>;
  }]
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const he=["VerticalBeforeLeft","VerticalBeforeRight","VerticalAfterLeft","VerticalAfterRight","HorizontalBeforeLeft","HorizontalBeforeRight","HorizontalAfterLeft","HorizontalAfterRight","WithoutDisclaimer","WithoutImageCaption","AllVariants"];export{p as AllVariants,d as HorizontalAfterLeft,u as HorizontalAfterRight,c as HorizontalBeforeLeft,m as HorizontalBeforeRight,n as VerticalAfterLeft,l as VerticalAfterRight,o as VerticalBeforeLeft,s as VerticalBeforeRight,g as WithoutDisclaimer,h as WithoutImageCaption,he as __namedExportsOrder,ge as default};
