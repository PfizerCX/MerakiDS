import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as xe}from"./index-DwQS_Y10.js";import{C as Te}from"./Close-Cd8AO0St.js";import{A as Ne}from"./ArrowRight-pOkf7B7I.js";import{B as S}from"./Button-cuP-Pnvr.js";const h=xe.forwardRef(({position:t="top-left",title:o="Callout Title",caption:ie="Callout caption that is only 1 or 2 lines long.",image:y,showImage:ce=!0,showSteps:b=!0,currentStep:pe=1,totalSteps:me=3,primaryLabel:ue="Next",secondaryLabel:de="Back",showPrimary:w=!0,showSecondary:v=!0,showClose:ge=!0,onPrimary:fe,onSecondary:he,onClose:ye,className:be,children:we,...ve},Ce)=>{const C=w||v,Se=b||C;return e.jsxs("div",{ref:Ce,role:"dialog","aria-label":o,className:["mds-callout",be].filter(Boolean).join(" "),"data-position":t,...ve,children:[ce&&y&&e.jsx("div",{className:"mds-callout__image",children:y}),e.jsxs("div",{className:"mds-callout__content",children:[e.jsxs("div",{className:"mds-callout__header",children:[e.jsxs("div",{className:"mds-callout__title-row",children:[e.jsx("p",{className:"mds-callout__title",children:o}),ge&&e.jsx("button",{type:"button",className:"mds-callout__close",onClick:ye,"aria-label":"Dismiss callout",children:e.jsx(Te,{size:20,style:{color:"var(--ref-color-white)"}})})]}),e.jsx("p",{className:"mds-callout__caption",children:we??ie})]}),Se&&e.jsxs("div",{className:"mds-callout__footer",children:[b&&e.jsxs("span",{className:"mds-callout__steps",children:[pe," of ",me]}),C&&e.jsxs("div",{className:"mds-callout__actions",children:[v&&e.jsx(S,{variant:"text",size:"sm",inverted:!0,onClick:he,children:de}),w&&e.jsx(S,{variant:"primary",size:"sm",inverted:!0,rightIcon:e.jsx(Ne,{size:24,style:{color:"inherit"}}),onClick:fe,children:ue})]})]})]}),e.jsx("span",{className:"mds-callout__beak","aria-hidden":"true"})]})});h.displayName="Callout";h.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{position:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'right-top'
| 'right-center'
| 'right-bottom'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'
| 'left-top'
| 'left-center'
| 'left-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"}]},description:"Beak position relative to the callout body",defaultValue:{value:"'top-left'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Title text",defaultValue:{value:"'Callout Title'",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Caption / description text",defaultValue:{value:"'Callout caption that is only 1 or 2 lines long.'",computed:!1}},image:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional image element rendered above the content"},showImage:{required:!1,tsType:{name:"boolean"},description:"Show the image slot",defaultValue:{value:"true",computed:!1}},showSteps:{required:!1,tsType:{name:"boolean"},description:"Show the step counter",defaultValue:{value:"true",computed:!1}},currentStep:{required:!1,tsType:{name:"number"},description:"Current step number (1-based)",defaultValue:{value:"1",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:"Total number of steps",defaultValue:{value:"3",computed:!1}},primaryLabel:{required:!1,tsType:{name:"string"},description:"Label for the primary (Next) action button",defaultValue:{value:"'Next'",computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"Label for the secondary (Back) action button",defaultValue:{value:"'Back'",computed:!1}},showPrimary:{required:!1,tsType:{name:"boolean"},description:"Show the primary action button",defaultValue:{value:"true",computed:!1}},showSecondary:{required:!1,tsType:{name:"boolean"},description:"Show the secondary action button",defaultValue:{value:"true",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"Show the close button",defaultValue:{value:"true",computed:!1}},onPrimary:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when primary action is clicked"},onSecondary:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when secondary action is clicked"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"}}};const Ie={title:"Components/Callout",component:h,tags:["autodocs"],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"],description:"Beak position relative to the callout body"},showImage:{control:"boolean"},showSteps:{control:"boolean"},showPrimary:{control:"boolean"},showSecondary:{control:"boolean"},showClose:{control:"boolean"},currentStep:{control:{type:"number",min:1}},totalSteps:{control:{type:"number",min:1}}},args:{position:"top-left",title:"Callout Title",caption:"Callout caption that is only 1 or 2 lines long.",showImage:!0,showSteps:!0,showPrimary:!0,showSecondary:!0,showClose:!0,currentStep:1,totalSteps:3,primaryLabel:"Next",secondaryLabel:"Back",onPrimary:()=>{},onSecondary:()=>{},onClose:()=>{},image:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=320&fit=crop",alt:"Placeholder"})},decorators:[t=>e.jsx("div",{style:{padding:40},children:e.jsx(t,{})})]},a={},r={args:{position:"top-center"}},s={args:{position:"top-right"}},n={args:{position:"right-top"}},l={args:{position:"right-center"}},i={args:{position:"bottom-left"}},c={args:{position:"bottom-center"}},p={args:{position:"left-center"}},m={args:{showImage:!1}},u={args:{showSteps:!1}},d={args:{showPrimary:!1,showSecondary:!1}},g={args:{showImage:!1,showSteps:!1,showPrimary:!1,showSecondary:!1,showClose:!1}},f={render:()=>{const t=["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48,padding:32},children:t.map(o=>e.jsx(h,{position:o,title:"Callout Title",caption:"Callout caption that is only 1 or 2 lines long.",showImage:!1,onClose:()=>{},onPrimary:()=>{},onSecondary:()=>{}},o))})}};var x,T,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(N=(T=a.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var _,j,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    position: 'top-center'
  }
}`,...(k=(j=r.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,B,I;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var P,R,V;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    position: 'right-top'
  }
}`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var L,A,z;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    position: 'right-center'
  }
}`,...(z=(A=l.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var D,E,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    position: 'bottom-left'
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,F,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    position: 'bottom-center'
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: 'left-center'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    showImage: false
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    showSteps: false
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    showPrimary: false,
    showSecondary: false
  }
}`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,re;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    showImage: false,
    showSteps: false,
    showPrimary: false,
    showSecondary: false,
    showClose: false
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,le;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const positions = ['top-left', 'top-center', 'top-right', 'right-top', 'right-center', 'right-bottom', 'bottom-left', 'bottom-center', 'bottom-right', 'left-top', 'left-center', 'left-bottom'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 48,
      padding: 32
    }}>
        {positions.map(pos => <Callout key={pos} position={pos} title="Callout Title" caption="Callout caption that is only 1 or 2 lines long." showImage={false} onClose={() => {}} onPrimary={() => {}} onSecondary={() => {}} />)}
      </div>;
  }
}`,...(le=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const Pe=["Default","TopCenter","TopRight","RightTop","RightCenter","BottomLeft","BottomCenter","LeftCenter","NoImage","NoSteps","NoActions","MinimalCallout","AllPositions"];export{f as AllPositions,c as BottomCenter,i as BottomLeft,a as Default,p as LeftCenter,g as MinimalCallout,d as NoActions,m as NoImage,u as NoSteps,l as RightCenter,n as RightTop,r as TopCenter,s as TopRight,Pe as __namedExportsOrder,Ie as default};
