import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-DwQS_Y10.js";const H={sm:{dimension:56,strokeWidth:4,radius:24,fontSize:"button-s"},lg:{dimension:96,strokeWidth:6,radius:41,fontSize:"button-m"}},J=(p,a,i)=>Math.min(Math.max(p,a),i),s=G.forwardRef(({value:p=0,indeterminate:a=!1,complete:i=!1,size:h="sm",showPercentage:R=!0,className:$,...A},O)=>{const v=J(p,0,100),r=H[h],t=2*Math.PI*r.radius,F=t-t*(i?100:v)/100;return e.jsxs("div",{ref:O,className:["mds-progress-circular",$].filter(Boolean).join(" "),role:"progressbar","aria-valuenow":a?void 0:v,"aria-valuemin":0,"aria-valuemax":100,"data-size":h,"data-indeterminate":a||void 0,"data-complete":i||void 0,style:{"--_dimension":`${r.dimension}px`},...A,children:[e.jsxs("svg",{className:"mds-progress-circular__svg",viewBox:`0 0 ${r.dimension} ${r.dimension}`,width:r.dimension,height:r.dimension,children:[e.jsx("circle",{className:"mds-progress-circular__track",cx:r.dimension/2,cy:r.dimension/2,r:r.radius,strokeWidth:r.strokeWidth}),e.jsx("circle",{className:"mds-progress-circular__indicator",cx:r.dimension/2,cy:r.dimension/2,r:r.radius,strokeWidth:r.strokeWidth,strokeDasharray:t,strokeDashoffset:a?t*.75:F})]}),e.jsx("div",{className:"mds-progress-circular__center",children:i?e.jsx("svg",{className:"mds-progress-circular__check",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9.55 17.575L4.225 12.25L5.65 10.825L9.55 14.725L18.35 5.925L19.775 7.35L9.55 17.575Z",fill:"currentColor"})}):R&&!a&&e.jsxs("span",{className:"mds-progress-circular__text",children:[Math.round(v),"%"]})})]})});s.displayName="ProgressCircular";s.__docgenInfo={description:"",methods:[],displayName:"ProgressCircular",props:{value:{required:!1,tsType:{name:"number"},description:"Current progress value (0–100). Ignored when `indeterminate` is true.",defaultValue:{value:"0",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Renders the indeterminate (spinning) animation.",defaultValue:{value:"false",computed:!1}},complete:{required:!1,tsType:{name:"boolean"},description:"Marks the task as complete — ring turns positive and a check icon appears.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Size variant.",defaultValue:{value:"'sm'",computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"Whether to show the percentage text in the center. Ignored when `complete`.",defaultValue:{value:"true",computed:!1}}}};const U={title:"Components/ProgressCircular",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0–100)"},size:{control:"select",options:["sm","lg"],description:"Size of the circular indicator"},indeterminate:{control:"boolean",description:"Indeterminate spinning animation"},complete:{control:"boolean",description:"Complete state with check icon"},showPercentage:{control:"boolean",description:"Show percentage text in center"}},args:{value:50,size:"lg",showPercentage:!0}},o={},l={args:{size:"sm",value:50}},n={args:{size:"lg",value:75}},c={args:{value:0,size:"lg"}},m={args:{value:100,complete:!0,size:"lg"}},d={args:{indeterminate:!0,size:"lg"}},u={args:{value:60,showPercentage:!1,size:"lg"}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12,fontWeight:500},children:"Small"}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(s,{size:"sm",value:0}),e.jsx(s,{size:"sm",value:25}),e.jsx(s,{size:"sm",value:50}),e.jsx(s,{size:"sm",value:75}),e.jsx(s,{size:"sm",value:100}),e.jsx(s,{size:"sm",value:100,complete:!0}),e.jsx(s,{size:"sm",indeterminate:!0})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:12,fontWeight:500},children:"Large"}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(s,{size:"lg",value:0}),e.jsx(s,{size:"lg",value:25}),e.jsx(s,{size:"lg",value:50}),e.jsx(s,{size:"lg",value:75}),e.jsx(s,{size:"lg",value:100}),e.jsx(s,{size:"lg",value:100,complete:!0}),e.jsx(s,{size:"lg",indeterminate:!0})]})]})]})};var f,x,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var j,y,P;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    value: 50
  }
}`,...(P=(y=l.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var C,S,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    value: 75
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,k,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 0,
    size: 'lg'
  }
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var N,W,b;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 100,
    complete: true,
    size: 'lg'
  }
}`,...(b=(W=m.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var L,B,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    size: 'lg'
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var M,T,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 60,
    showPercentage: false,
    size: 'lg'
  }
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var V,E,Z;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        marginBottom: 12,
        fontWeight: 500
      }}>Small</p>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          <ProgressCircular size="sm" value={0} />
          <ProgressCircular size="sm" value={25} />
          <ProgressCircular size="sm" value={50} />
          <ProgressCircular size="sm" value={75} />
          <ProgressCircular size="sm" value={100} />
          <ProgressCircular size="sm" value={100} complete />
          <ProgressCircular size="sm" indeterminate />
        </div>
      </div>
      <div>
        <p style={{
        marginBottom: 12,
        fontWeight: 500
      }}>Large</p>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          <ProgressCircular size="lg" value={0} />
          <ProgressCircular size="lg" value={25} />
          <ProgressCircular size="lg" value={50} />
          <ProgressCircular size="lg" value={75} />
          <ProgressCircular size="lg" value={100} />
          <ProgressCircular size="lg" value={100} complete />
          <ProgressCircular size="lg" indeterminate />
        </div>
      </div>
    </div>
}`,...(Z=(E=g.parameters)==null?void 0:E.docs)==null?void 0:Z.source}}};const X=["Default","Small","Large","ZeroPercent","Complete","Indeterminate","NoPercentage","AllStates"];export{g as AllStates,m as Complete,o as Default,d as Indeterminate,n as Large,u as NoPercentage,l as Small,c as ZeroPercent,X as __namedExportsOrder,U as default};
