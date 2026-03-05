import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DwQS_Y10.js";const Ie=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.3 14.6L7.7 10L12.3 5.4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),De=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.7 5.4L12.3 10L7.7 14.6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),i=l.forwardRef(({layout:ke="vertical",imageStyle:V="side-by-side",variant:Be="33-66",imagePosition:k="after",slides:r,activeIndex:H,onSlideChange:n,className:Ve,...He},Ne)=>{const[Fe,Le]=l.useState(0),B=H!==void 0,t=B?H:Fe,c=l.useCallback(o=>{B||Le(o),n==null||n(o)},[B,n]),Te=l.useCallback(()=>{const o=t<=0?r.length-1:t-1;c(o)},[t,r.length,c]),Ce=l.useCallback(()=>{const o=t>=r.length-1?0:t+1;c(o)},[t,r.length,c]);if(!r.length)return null;const a=r[t]??r[0],d=V==="full",N=e.jsxs("div",{className:"mds-slideshow__image-container",children:[e.jsx("img",{src:a.imageSrc,alt:a.imageAlt??""}),a.imageDescription&&e.jsx("div",{className:"mds-slideshow__image-desc",children:e.jsx("p",{children:a.imageDescription})})]});return e.jsxs("div",{ref:Ne,className:["mds-slideshow",Ve].filter(Boolean).join(" "),"data-layout":ke,"data-image-style":V,"data-variant":Be,"data-image-position":k,role:"region","aria-roledescription":"carousel","aria-label":"Slideshow",...He,children:[d&&e.jsx("img",{className:"mds-slideshow__bg",src:a.imageSrc,alt:"","aria-hidden":"true"}),k==="before"&&!d&&N,e.jsxs("div",{className:"mds-slideshow__content",role:"group","aria-roledescription":"slide","aria-label":`Slide ${t+1} of ${r.length}`,children:[e.jsxs("div",{className:"mds-slideshow__copy",children:[e.jsxs("div",{className:"mds-slideshow__text",children:[a.kicker&&e.jsx("span",{className:"mds-slideshow__kicker",children:a.kicker}),e.jsx("p",{className:"mds-slideshow__headline",children:a.headline})]}),a.buttonLabel&&e.jsx("div",{className:"mds-slideshow__actions",children:e.jsx("button",{type:"button",className:"mds-slideshow__cta",onClick:a.onButtonClick,children:a.buttonLabel})})]}),e.jsxs("div",{className:"mds-slideshow__nav",children:[e.jsxs("div",{className:"mds-slideshow__nav-buttons",children:[e.jsx("button",{type:"button",className:"mds-slideshow__nav-btn",onClick:Te,"aria-label":"Previous slide",children:e.jsx(Ie,{})}),e.jsx("button",{type:"button",className:"mds-slideshow__nav-btn",onClick:Ce,"aria-label":"Next slide",children:e.jsx(De,{})})]}),e.jsxs("span",{className:"mds-slideshow__pagination",children:[t+1,"/",r.length]})]}),d&&a.imageDescription&&e.jsx("div",{className:"mds-slideshow__image-desc mds-slideshow__image-desc--inline",children:e.jsx("p",{children:a.imageDescription})})]}),k==="after"&&!d&&N]})});i.displayName="Slideshow";i.__docgenInfo={description:"",methods:[],displayName:"Slideshow",props:{layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout direction",defaultValue:{value:"'vertical'",computed:!1}},imageStyle:{required:!1,tsType:{name:"union",raw:"'side-by-side' | 'full'",elements:[{name:"literal",value:"'side-by-side'"},{name:"literal",value:"'full'"}]},description:"How the image is displayed relative to the content",defaultValue:{value:"'side-by-side'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'33-66' | '50-50'",elements:[{name:"literal",value:"'33-66'"},{name:"literal",value:"'50-50'"}]},description:"Size ratio between content and image areas",defaultValue:{value:"'33-66'",computed:!1}},imagePosition:{required:!1,tsType:{name:"union",raw:"'after' | 'before'",elements:[{name:"literal",value:"'after'"},{name:"literal",value:"'before'"}]},description:"Whether the image appears before or after the text content",defaultValue:{value:"'after'",computed:!1}},slides:{required:!0,tsType:{name:"Array",elements:[{name:"SlideshowSlide"}],raw:"SlideshowSlide[]"},description:"Array of slides to display"},activeIndex:{required:!1,tsType:{name:"number"},description:"Controlled current slide index (0-based)"},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when the active slide changes"}}};const F="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",Ae="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",qe="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",s=[{kicker:"KICKER",headline:"Write a clear and eye-catching slideshow headline here with up to 4 lines of text maximum.",buttonLabel:"Button Label",imageSrc:F,imageAlt:"Healthcare professional",imageDescription:"Maria is a real patient"},{kicker:"INNOVATION",headline:"A second slide with a different headline showcasing another key message.",buttonLabel:"Learn More",imageSrc:Ae,imageAlt:"Medical research",imageDescription:"Real patient testimonial"},{kicker:"SCIENCE",headline:"Third slide demonstrating the full capability of the slideshow component.",buttonLabel:"Explore",imageSrc:qe,imageAlt:"Scientific research"},{kicker:"RESULTS",headline:"Fourth slide to show pagination at full capacity.",buttonLabel:"View Results",imageSrc:F,imageAlt:"Results overview",imageDescription:"Data from 2024 clinical trials"}],Me={title:"Components/Slideshow",component:i,tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal"]},imageStyle:{control:"select",options:["side-by-side","full"]},variant:{control:"select",options:["33-66","50-50"]},imagePosition:{control:"select",options:["after","before"]},slides:{control:!1},activeIndex:{control:"number"},onSlideChange:{action:"slideChange"}},args:{slides:s,layout:"vertical",imageStyle:"side-by-side",variant:"33-66",imagePosition:"after"}},m={},u={args:{variant:"50-50"}},g={args:{imagePosition:"before"}},h={args:{imagePosition:"before",variant:"50-50"}},p={args:{imageStyle:"full",variant:"33-66"}},y={args:{imageStyle:"full",variant:"50-50"}},f={args:{imageStyle:"full",imagePosition:"before"}},S={args:{layout:"horizontal"}},v={args:{layout:"horizontal",variant:"50-50"}},b={args:{layout:"horizontal",imagePosition:"before"}},x={args:{layout:"horizontal",imagePosition:"before",variant:"50-50"}},w={args:{layout:"horizontal",imageStyle:"full"}},z={args:{layout:"horizontal",imageStyle:"full",variant:"50-50"}},j={args:{layout:"horizontal",imageStyle:"full",imagePosition:"before"}},_={args:{layout:"horizontal",imageStyle:"full",imagePosition:"before",variant:"50-50"}},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx("h3",{style:{margin:0},children:"Vertical — Side-by-Side 33/66"}),e.jsx(i,{slides:s,layout:"vertical",imageStyle:"side-by-side",variant:"33-66",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Vertical — Side-by-Side 50/50"}),e.jsx(i,{slides:s,layout:"vertical",imageStyle:"side-by-side",variant:"50-50",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Vertical — Full 33/66"}),e.jsx(i,{slides:s,layout:"vertical",imageStyle:"full",variant:"33-66",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Vertical — Full 50/50"}),e.jsx(i,{slides:s,layout:"vertical",imageStyle:"full",variant:"50-50",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Side-by-Side 33/66"}),e.jsx(i,{slides:s,layout:"horizontal",imageStyle:"side-by-side",variant:"33-66",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Side-by-Side 50/50"}),e.jsx(i,{slides:s,layout:"horizontal",imageStyle:"side-by-side",variant:"50-50",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Full 33/66"}),e.jsx(i,{slides:s,layout:"horizontal",imageStyle:"full",variant:"33-66",imagePosition:"after"}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Full 50/50"}),e.jsx(i,{slides:s,layout:"horizontal",imageStyle:"full",variant:"50-50",imagePosition:"after"})]})};var L,T,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,D,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: '50-50'
  }
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var q,E,R;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    imagePosition: 'before'
  }
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var M,W,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    imagePosition: 'before',
    variant: '50-50'
  }
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var K,$,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    imageStyle: 'full',
    variant: '33-66'
  }
}`,...(U=($=p.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var G,J,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    imageStyle: 'full',
    variant: '50-50'
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    imageStyle: 'full',
    imagePosition: 'before'
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ie;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal'
  }
}`,...(ie=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,te,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    variant: '50-50'
  }
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,le,ne;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imagePosition: 'before'
  }
}`,...(ne=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ce,de,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imagePosition: 'before',
    variant: '50-50'
  }
}`,...(me=(de=x.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ge,he;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imageStyle: 'full'
  }
}`,...(he=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var pe,ye,fe;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
    variant: '50-50'
  }
}`,...(fe=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Se,ve,be;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
    imagePosition: 'before'
  }
}`,...(be=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var xe,we,ze;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imageStyle: 'full',
    imagePosition: 'before',
    variant: '50-50'
  }
}`,...(ze=(we=_.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var je,_e,Pe;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <h3 style={{
      margin: 0
    }}>Vertical — Side-by-Side 33/66</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="side-by-side" variant="33-66" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Vertical — Side-by-Side 50/50</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="side-by-side" variant="50-50" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Vertical — Full 33/66</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="full" variant="33-66" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Vertical — Full 50/50</h3>
      <Slideshow slides={slides} layout="vertical" imageStyle="full" variant="50-50" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Horizontal — Side-by-Side 33/66</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="side-by-side" variant="33-66" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Horizontal — Side-by-Side 50/50</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="side-by-side" variant="50-50" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Horizontal — Full 33/66</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="full" variant="33-66" imagePosition="after" />

      <h3 style={{
      margin: 0
    }}>Horizontal — Full 50/50</h3>
      <Slideshow slides={slides} layout="horizontal" imageStyle="full" variant="50-50" imagePosition="after" />
    </div>
}`,...(Pe=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Pe.source}}};const We=["Default","Vertical5050","VerticalBeforeText","VerticalBeforeText5050","VerticalFull3366","VerticalFull5050","VerticalFullBeforeText","HorizontalSideBySide","HorizontalSideBySide5050","HorizontalSideBySideBefore","HorizontalSideBySideBefore5050","HorizontalFull3366","HorizontalFull5050","HorizontalFullBefore","HorizontalFullBefore5050","AllVariants"];export{P as AllVariants,m as Default,w as HorizontalFull3366,z as HorizontalFull5050,j as HorizontalFullBefore,_ as HorizontalFullBefore5050,S as HorizontalSideBySide,v as HorizontalSideBySide5050,b as HorizontalSideBySideBefore,x as HorizontalSideBySideBefore5050,u as Vertical5050,g as VerticalBeforeText,h as VerticalBeforeText5050,p as VerticalFull3366,y as VerticalFull5050,f as VerticalFullBeforeText,We as __namedExportsOrder,Me as default};
