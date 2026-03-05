import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-DwQS_Y10.js";const i=w.forwardRef(({variant:t="inset",title:o,thumbnailSrc:j,thumbnailAlt:V="",onPlay:T,className:S,..._},W)=>e.jsx("div",{ref:W,className:["mds-video",S].filter(Boolean).join(" "),"data-variant":t,..._,children:e.jsxs("div",{className:"mds-video__embed",children:[e.jsx("div",{className:"mds-video__media",children:e.jsx("img",{className:"mds-video__thumbnail",src:j,alt:V})}),e.jsx("button",{className:"mds-video__play-button",onClick:T,"aria-label":"Play video",type:"button",children:e.jsxs("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("circle",{cx:"44",cy:"44",r:"44",fill:"black",fillOpacity:"0.5"}),e.jsx("path",{d:"M36 28L62 44L36 60V28Z",fill:"white"})]})}),o&&e.jsx("div",{className:"mds-video__title-bar",children:e.jsx("p",{className:"mds-video__title",children:o})})]})}));i.displayName="Video";i.__docgenInfo={description:"",methods:[],displayName:"Video",props:{variant:{required:!1,tsType:{name:"union",raw:"'inset' | 'full'",elements:[{name:"literal",value:"'inset'"},{name:"literal",value:"'full'"}]},description:"Whether the video fills edge-to-edge or is inset with layout margins",defaultValue:{value:"'inset'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Title displayed over the gradient overlay"},thumbnailSrc:{required:!0,tsType:{name:"string"},description:"Thumbnail image source URL"},thumbnailAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the thumbnail image",defaultValue:{value:"''",computed:!1}},onPlay:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the play button is clicked"}}};const n="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",q={title:"Components/Video",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["inset","full"]},title:{control:"text"},thumbnailSrc:{control:"text"},thumbnailAlt:{control:"text"},onPlay:{action:"play"}},args:{thumbnailSrc:n,thumbnailAlt:"Video thumbnail",title:"Video Title"}},a={args:{variant:"inset"},decorators:[t=>e.jsx("div",{style:{maxWidth:767},children:e.jsx(t,{})})]},l={args:{variant:"full"},decorators:[t=>e.jsx("div",{style:{maxWidth:767},children:e.jsx(t,{})})]},s={args:{variant:"inset",title:void 0},decorators:[t=>e.jsx("div",{style:{maxWidth:767},children:e.jsx(t,{})})]},r={decorators:[()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx("h3",{style:{margin:0},children:"Inset"}),e.jsx("div",{style:{maxWidth:767},children:e.jsx(i,{variant:"inset",title:"Video Title",thumbnailSrc:n,thumbnailAlt:"Video thumbnail"})}),e.jsx("h3",{style:{margin:0},children:"Full"}),e.jsx("div",{style:{maxWidth:767},children:e.jsx(i,{variant:"full",title:"Video Title",thumbnailSrc:n,thumbnailAlt:"Video thumbnail"})}),e.jsx("h3",{style:{margin:0},children:"Without Title"}),e.jsx("div",{style:{maxWidth:767},children:e.jsx(i,{variant:"inset",thumbnailSrc:n,thumbnailAlt:"Video thumbnail"})})]})]};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'inset'
  },
  decorators: [Story => <div style={{
    maxWidth: 767
  }}>
        <Story />
      </div>]
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,h,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'full'
  },
  decorators: [Story => <div style={{
    maxWidth: 767
  }}>
        <Story />
      </div>]
}`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'inset',
    title: undefined
  },
  decorators: [Story => <div style={{
    maxWidth: 767
  }}>
        <Story />
      </div>]
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
        <h3 style={{
      margin: 0
    }}>Inset</h3>
        <div style={{
      maxWidth: 767
    }}>
          <Video variant="inset" title="Video Title" thumbnailSrc={sampleThumbnail} thumbnailAlt="Video thumbnail" />
        </div>

        <h3 style={{
      margin: 0
    }}>Full</h3>
        <div style={{
      maxWidth: 767
    }}>
          <Video variant="full" title="Video Title" thumbnailSrc={sampleThumbnail} thumbnailAlt="Video thumbnail" />
        </div>

        <h3 style={{
      margin: 0
    }}>Without Title</h3>
        <div style={{
      maxWidth: 767
    }}>
          <Video variant="inset" thumbnailSrc={sampleThumbnail} thumbnailAlt="Video thumbnail" />
        </div>
      </div>]
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const k=["Default","Full","NoTitle","AllVariants"];export{r as AllVariants,a as Default,l as Full,s as NoTitle,k as __namedExportsOrder,q as default};
