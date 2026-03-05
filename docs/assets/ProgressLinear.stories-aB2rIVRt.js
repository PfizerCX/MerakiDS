import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./index-DwQS_Y10.js";const G=(b,a,s)=>Math.min(Math.max(b,a),s),r=z.forwardRef(({value:b=0,indeterminate:a=!1,complete:s=!1,progressLabel:L,contextLabel:u,className:H,...Z},$)=>{const g=G(b,0,100);return e.jsxs("div",{ref:$,className:["mds-progress-linear",H].filter(Boolean).join(" "),role:"progressbar","aria-valuenow":a?void 0:g,"aria-valuemin":0,"aria-valuemax":100,"data-indeterminate":a||void 0,"data-complete":s||void 0,...Z,children:[L&&e.jsx("span",{className:"mds-progress-linear__label",children:L}),e.jsxs("div",{className:"mds-progress-linear__track",children:[e.jsx("div",{className:"mds-progress-linear__base"}),e.jsx("div",{className:"mds-progress-linear__bar",style:a?void 0:{width:`${s?100:g}%`}})]}),u&&e.jsx("span",{className:"mds-progress-linear__context",children:u})]})});r.displayName="ProgressLinear";r.__docgenInfo={description:"",methods:[],displayName:"ProgressLinear",props:{value:{required:!1,tsType:{name:"number"},description:"Current progress value (0–100). Ignored when `indeterminate` is true.",defaultValue:{value:"0",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Renders the indeterminate (looping) animation instead of a fixed bar.",defaultValue:{value:"false",computed:!1}},complete:{required:!1,tsType:{name:"boolean"},description:"Whether the task has completed successfully. Overrides the bar color to positive.",defaultValue:{value:"false",computed:!1}},progressLabel:{required:!1,tsType:{name:"string"},description:"Top label displayed above the progress bar."},contextLabel:{required:!1,tsType:{name:"string"},description:"Bottom label displayed below the progress bar."}}};const Q={title:"Components/ProgressLinear",component:r,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0–100)"},indeterminate:{control:"boolean",description:"Use indeterminate (looping) animation"},complete:{control:"boolean",description:"Mark as complete (positive color)"},progressLabel:{control:"text",description:"Label above the bar"},contextLabel:{control:"text",description:"Label below the bar"}},args:{value:50,progressLabel:"Uploading…",contextLabel:"50% complete"}},o={},t={args:{value:0,progressLabel:"Progress Label",contextLabel:"Context Label"}},l={args:{value:25,progressLabel:"Progress Label",contextLabel:"25% complete"}},n={args:{value:75,progressLabel:"Progress Label",contextLabel:"75% complete"}},c={args:{value:100,progressLabel:"Progress Label",contextLabel:"100% complete"}},i={args:{value:100,complete:!0,progressLabel:"Upload complete",contextLabel:"File saved"}},p={args:{indeterminate:!0,progressLabel:"Loading…",contextLabel:"Please wait"}},d={args:{value:60,progressLabel:void 0,contextLabel:void 0}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:400},children:[e.jsx(r,{value:0,progressLabel:"0%",contextLabel:"Context Label"}),e.jsx(r,{value:25,progressLabel:"25%",contextLabel:"Context Label"}),e.jsx(r,{value:50,progressLabel:"50%",contextLabel:"Context Label"}),e.jsx(r,{value:75,progressLabel:"75%",contextLabel:"Context Label"}),e.jsx(r,{value:100,progressLabel:"100%",contextLabel:"Context Label"}),e.jsx(r,{value:100,complete:!0,progressLabel:"Complete",contextLabel:"Context Label"}),e.jsx(r,{indeterminate:!0,progressLabel:"Indeterminate",contextLabel:"Context Label"})]})};var x,v,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var P,h,C;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 0,
    progressLabel: 'Progress Label',
    contextLabel: 'Context Label'
  }
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var y,j,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 25,
    progressLabel: 'Progress Label',
    contextLabel: '25% complete'
  }
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var S,w,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 75,
    progressLabel: 'Progress Label',
    contextLabel: '75% complete'
  }
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var T,F,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 100,
    progressLabel: 'Progress Label',
    contextLabel: '100% complete'
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var q,D,O;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 100,
    complete: true,
    progressLabel: 'Upload complete',
    contextLabel: 'File saved'
  }
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var U,k,E;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    progressLabel: 'Loading…',
    contextLabel: 'Please wait'
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var M,R,V;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 60,
    progressLabel: undefined,
    contextLabel: undefined
  }
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,A,B;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    maxWidth: 400
  }}>
      <ProgressLinear value={0} progressLabel="0%" contextLabel="Context Label" />
      <ProgressLinear value={25} progressLabel="25%" contextLabel="Context Label" />
      <ProgressLinear value={50} progressLabel="50%" contextLabel="Context Label" />
      <ProgressLinear value={75} progressLabel="75%" contextLabel="Context Label" />
      <ProgressLinear value={100} progressLabel="100%" contextLabel="Context Label" />
      <ProgressLinear value={100} complete progressLabel="Complete" contextLabel="Context Label" />
      <ProgressLinear indeterminate progressLabel="Indeterminate" contextLabel="Context Label" />
    </div>
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const X=["Default","ZeroPercent","TwentyFivePercent","SeventyFivePercent","OneHundredPercent","Complete","Indeterminate","NoLabels","AllStates"];export{m as AllStates,i as Complete,o as Default,p as Indeterminate,d as NoLabels,c as OneHundredPercent,n as SeventyFivePercent,l as TwentyFivePercent,t as ZeroPercent,X as __namedExportsOrder,Q as default};
