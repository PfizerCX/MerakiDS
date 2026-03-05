import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-DwQS_Y10.js";import{B as a}from"./Button-cuP-Pnvr.js";const i=G.forwardRef(({imageSrc:r,imageAlt:g="",imageVariant:p="base",emphasized:R=!1,headline:h,body:y,actions:x,disclaimer:b,className:O,...U},F)=>{const u=p==="overlap";return e.jsxs("div",{ref:F,className:["mds-card-image",O].filter(Boolean).join(" "),"data-image-variant":p,"data-emphasized":R||void 0,...U,children:[u&&e.jsx("div",{className:"mds-card-image__image mds-card-image__image--overlap",children:e.jsx("img",{src:r,alt:g})}),e.jsxs("div",{className:"mds-card-image__container",children:[!u&&e.jsxs("div",{className:"mds-card-image__content",children:[e.jsx("div",{className:"mds-card-image__image",children:e.jsx("img",{src:r,alt:g})}),e.jsxs("div",{className:"mds-card-image__copy",children:[e.jsx("p",{className:"mds-card-image__headline",children:h}),y&&p==="base"&&e.jsx("p",{className:"mds-card-image__body",children:y})]})]}),u&&e.jsx("div",{className:"mds-card-image__copy",children:e.jsx("p",{className:"mds-card-image__headline",children:h})}),e.jsxs("div",{className:"mds-card-image__footer",children:[x&&e.jsx("div",{className:"mds-card-image__actions",children:x}),b&&e.jsx("div",{className:"mds-card-image__disclaimer",children:e.jsx("p",{children:b})})]})]})]})});i.displayName="CardImage";i.__docgenInfo={description:"",methods:[],displayName:"CardImage",props:{imageSrc:{required:!0,tsType:{name:"string"},description:"Image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Image alt text for accessibility",defaultValue:{value:"''",computed:!1}},imageVariant:{required:!1,tsType:{name:"union",raw:"'base' | 'large' | 'overlap'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'large'"},{name:"literal",value:"'overlap'"}]},description:"Card layout variant",defaultValue:{value:"'base'",computed:!1}},emphasized:{required:!1,tsType:{name:"boolean"},description:"Uses primary background for an emphasized appearance",defaultValue:{value:"false",computed:!1}},headline:{required:!0,tsType:{name:"string"},description:"Headline text"},body:{required:!1,tsType:{name:"string"},description:"Body copy text (visible in the base variant only)"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons rendered below the copy"},disclaimer:{required:!1,tsType:{name:"string"},description:"Disclaimer text displayed beneath the actions"}}};const t="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",P={title:"Components/CardImage",component:i,tags:["autodocs"],argTypes:{imageVariant:{control:"select",options:["base","large","overlap"]},emphasized:{control:"boolean"},headline:{control:"text"},body:{control:"text"},disclaimer:{control:"text"},actions:{control:!1},imageSrc:{control:"text"},imageAlt:{control:"text"}},args:{imageSrc:t,imageAlt:"Sample image",headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum. We're in relentless pursuit of breakthroughs.",disclaimer:"*Disclaimer Text"},decorators:[r=>e.jsx("div",{style:{maxWidth:325},children:e.jsx(r,{})})]},s={args:{imageVariant:"base",actions:e.jsx(a,{variant:"secondary",children:"Button Label"})}},o={args:{imageVariant:"base",emphasized:!0,actions:e.jsx(a,{variant:"secondary",inverted:!0,children:"Button Label"})}},n={args:{imageVariant:"large",headline:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this here",body:void 0,actions:e.jsx(a,{variant:"secondary",children:"Button Label"})}},l={args:{imageVariant:"large",emphasized:!0,headline:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this here",body:void 0,actions:e.jsx(a,{variant:"secondary",inverted:!0,children:"Button Label"})}},d={args:{imageVariant:"overlap",headline:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this",body:void 0,actions:e.jsx(a,{variant:"secondary",children:"Button Label"})}},c={args:{imageVariant:"overlap",emphasized:!0,headline:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this",body:void 0,actions:e.jsx(a,{variant:"secondary",inverted:!0,children:"Button Label"})}},m={decorators:[()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsx(i,{imageSrc:t,imageAlt:"Sample",imageVariant:"base",headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum.",actions:e.jsx(a,{variant:"secondary",children:"Button Label"}),disclaimer:"*Disclaimer Text",style:{width:325}}),e.jsx(i,{imageSrc:t,imageAlt:"Sample",imageVariant:"base",emphasized:!0,headline:"Headline Here",body:"Write a helpful and concise body copy 3-4 lines of text maximum.",actions:e.jsx(a,{variant:"secondary",inverted:!0,children:"Button Label"}),disclaimer:"*Disclaimer Text",style:{width:325}}),e.jsx(i,{imageSrc:t,imageAlt:"Sample",imageVariant:"large",headline:"Write a helpful and concise body copy with 4 lines of text maximum.",actions:e.jsx(a,{variant:"secondary",children:"Button Label"}),disclaimer:"*Disclaimer Text",style:{width:325}}),e.jsx(i,{imageSrc:t,imageAlt:"Sample",imageVariant:"overlap",headline:"Write a helpful and concise body copy with 4 lines of text maximum.",actions:e.jsx(a,{variant:"secondary",children:"Button Label"}),disclaimer:"*Disclaimer Text",style:{width:325}})]})]};var v,f,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageVariant: 'base',
    actions: <Button variant="secondary">Button Label</Button>
  }
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var j,w,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    imageVariant: 'base',
    emphasized: true,
    actions: <Button variant="secondary" inverted>
        Button Label
      </Button>
  }
}`,...(_=(w=o.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var I,S,L;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    imageVariant: 'large',
    headline: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this here',
    body: undefined,
    actions: <Button variant="secondary">Button Label</Button>
  }
}`,...(L=(S=n.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var V,W,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    imageVariant: 'large',
    emphasized: true,
    headline: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this here',
    body: undefined,
    actions: <Button variant="secondary" inverted>
        Button Label
      </Button>
  }
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var T,N,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    imageVariant: 'overlap',
    headline: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this',
    body: undefined,
    actions: <Button variant="secondary">Button Label</Button>
  }
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var H,k,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    imageVariant: 'overlap',
    emphasized: true,
    headline: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will be truncated like this',
    body: undefined,
    actions: <Button variant="secondary" inverted>
        Button Label
      </Button>
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var D,q,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
        <CardImage imageSrc={sampleImage} imageAlt="Sample" imageVariant="base" headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum." actions={<Button variant="secondary">Button Label</Button>} disclaimer="*Disclaimer Text" style={{
      width: 325
    }} />
        <CardImage imageSrc={sampleImage} imageAlt="Sample" imageVariant="base" emphasized headline="Headline Here" body="Write a helpful and concise body copy 3-4 lines of text maximum." actions={<Button variant="secondary" inverted>
              Button Label
            </Button>} disclaimer="*Disclaimer Text" style={{
      width: 325
    }} />
        <CardImage imageSrc={sampleImage} imageAlt="Sample" imageVariant="large" headline="Write a helpful and concise body copy with 4 lines of text maximum." actions={<Button variant="secondary">Button Label</Button>} disclaimer="*Disclaimer Text" style={{
      width: 325
    }} />
        <CardImage imageSrc={sampleImage} imageAlt="Sample" imageVariant="overlap" headline="Write a helpful and concise body copy with 4 lines of text maximum." actions={<Button variant="secondary">Button Label</Button>} disclaimer="*Disclaimer Text" style={{
      width: 325
    }} />
      </div>]
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Q=["Base","BaseEmphasized","Large","LargeEmphasized","Overlap","OverlapEmphasized","AllVariants"];export{m as AllVariants,s as Base,o as BaseEmphasized,n as Large,l as LargeEmphasized,d as Overlap,c as OverlapEmphasized,Q as __namedExportsOrder,P as default};
