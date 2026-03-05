import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DwQS_Y10.js";const r=u.forwardRef(({totalSteps:m=3,currentStep:d=1,labels:c,showLabels:V=!0,className:q,...R},E)=>{const W=Array.from({length:m},(s,t)=>t+1);return e.jsx("div",{ref:E,className:["mds-progress-timeline",q].filter(Boolean).join(" "),role:"group","aria-label":"Progress",...R,children:W.map((s,t)=>e.jsxs(u.Fragment,{children:[e.jsxs("div",{className:"mds-progress-timeline__step",children:[e.jsx("div",{className:"mds-progress-timeline__circle","data-active":s<=d||void 0,"aria-current":s===d?"step":void 0,children:e.jsx("span",{className:"mds-progress-timeline__number",children:s})}),V&&e.jsx("span",{className:"mds-progress-timeline__label",children:(c==null?void 0:c[t])??`Step ${s}`})]}),t<m-1&&e.jsx("div",{className:"mds-progress-timeline__divider",children:e.jsx("div",{className:"mds-progress-timeline__divider-line"})})]},s))})});r.displayName="ProgressTimeline";r.__docgenInfo={description:"",methods:[],displayName:"ProgressTimeline",props:{totalSteps:{required:!1,tsType:{name:"number"},description:"Total number of steps to display (minimum 2)",defaultValue:{value:"3",computed:!1}},currentStep:{required:!1,tsType:{name:"number"},description:"The current active step (1-indexed). Steps up to and including this value are marked active.",defaultValue:{value:"1",computed:!1}},labels:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Labels for each step. If provided, the array length should match totalSteps."},showLabels:{required:!1,tsType:{name:"boolean"},description:"Whether to show description labels beneath each step circle",defaultValue:{value:"true",computed:!1}}}};const I={title:"Components/ProgressTimeline",component:r,tags:["autodocs"],argTypes:{totalSteps:{control:{type:"range",min:2,max:7,step:1},description:"Total number of steps"},currentStep:{control:{type:"range",min:1,max:7,step:1},description:"Current active step (1-indexed)"},showLabels:{control:"boolean",description:"Show step labels"}},args:{totalSteps:3,currentStep:1,showLabels:!0}},a={},o={args:{totalSteps:4}},n={args:{totalSteps:5}},i={args:{totalSteps:4,currentStep:2,labels:["Account","Profile","Review","Complete"]}},l={args:{totalSteps:3,showLabels:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx(r,{totalSteps:3,currentStep:1}),e.jsx(r,{totalSteps:4,currentStep:2}),e.jsx(r,{totalSteps:5,currentStep:3})]})};var g,S,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    totalSteps: 4
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,y,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    totalSteps: 5
  }
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var _,j,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    totalSteps: 4,
    currentStep: 2,
    labels: ['Account', 'Profile', 'Review', 'Complete']
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var L,P,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    totalSteps: 3,
    showLabels: false
  }
}`,...(N=(P=l.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var A,C,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <ProgressTimeline totalSteps={3} currentStep={1} />
      <ProgressTimeline totalSteps={4} currentStep={2} />
      <ProgressTimeline totalSteps={5} currentStep={3} />
    </div>
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const k=["ThreeSteps","FourSteps","FiveSteps","WithCustomLabels","HiddenLabels","AllVariants"];export{p as AllVariants,n as FiveSteps,o as FourSteps,l as HiddenLabels,a as ThreeSteps,i as WithCustomLabels,k as __namedExportsOrder,I as default};
