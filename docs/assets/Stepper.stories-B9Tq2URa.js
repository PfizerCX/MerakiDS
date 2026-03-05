import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DwQS_Y10.js";import{A as O}from"./Add-D5GwMnQe.js";import{S as R}from"./Subtract-Hv9Cv2Kx.js";const n=l.forwardRef(({value:a=0,min:s=0,max:t=1/0,step:o=1,label:b,helperText:f,required:D=!1,disabled:i=!1,className:k,onChange:r,...A},M)=>{const x=l.useId(),v=`${x}-label`,h=`${x}-helper`,W=l.useCallback(()=>{const d=a-o;d>=s&&(r==null||r(d))},[a,o,s,r]),z=l.useCallback(()=>{const d=a+o;d<=t&&(r==null||r(d))},[a,o,t,r]),E=a<=s,H=a>=t;return e.jsxs("div",{ref:M,className:["mds-stepper",k].filter(Boolean).join(" "),"data-disabled":i||void 0,role:"group","aria-labelledby":b?v:void 0,"aria-describedby":f?h:void 0,...A,children:[b&&e.jsxs("div",{className:"mds-stepper__label",id:v,children:[e.jsx("span",{children:b}),D&&e.jsx("span",{className:"mds-stepper__required",children:"*"})]}),e.jsxs("div",{className:"mds-stepper__controls",children:[e.jsx("button",{type:"button",className:"mds-stepper__btn",onClick:W,disabled:i||E,"aria-label":"Decrease value",tabIndex:i?-1:0,children:e.jsx(R,{size:24})}),e.jsx("output",{className:"mds-stepper__value",children:a}),e.jsx("button",{type:"button",className:"mds-stepper__btn",onClick:z,disabled:i||H,"aria-label":"Increase value",tabIndex:i?-1:0,children:e.jsx(O,{size:24})})]}),f&&e.jsx("p",{className:"mds-stepper__helper",id:h,children:f})]})});n.displayName="Stepper";n.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{value:{required:!1,tsType:{name:"number"},description:"Current numeric value",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"Minimum allowed value",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum allowed value",defaultValue:{value:"Infinity",computed:!0}},step:{required:!1,tsType:{name:"number"},description:"Increment/decrement step size",defaultValue:{value:"1",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the stepper"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the stepper"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required (shows asterisk)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the stepper is disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"}},composes:["Omit"]};const J={title:"Components/Stepper",component:n,tags:["autodocs"],argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},required:{control:"boolean"}},args:{label:"Input Label",value:1,min:0,max:10,step:1,required:!0}},w=a=>{const[s,t]=l.useState(a.value??1);return e.jsx(n,{...a,value:s,onChange:t})},p={render:a=>e.jsx(w,{...a})},u={render:a=>e.jsx(w,{...a}),args:{helperText:"Caption Label"}},c={args:{disabled:!0,value:1}},m={render:()=>{const[a,s]=l.useState(1),[t,o]=l.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx(n,{label:"Input Label",required:!0,value:a,min:0,max:10,onChange:s}),e.jsx(n,{label:"Input Label",required:!0,helperText:"Caption Label",value:t,min:0,max:10,onChange:o}),e.jsx(n,{label:"Input Label",required:!0,disabled:!0,value:1,min:0,max:10})]})}};var y,S,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <StepperControlled {...args} />
}`,...(j=(S=p.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var g,q,I;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <StepperControlled {...args} />,
  args: {
    helperText: 'Caption Label'
  }
}`,...(I=(q=u.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var _,T,V;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 1
  }
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var L,N,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [val1, setVal1] = useState(1);
    const [val2, setVal2] = useState(3);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }}>
        <Stepper label="Input Label" required value={val1} min={0} max={10} onChange={setVal1} />
        <Stepper label="Input Label" required helperText="Caption Label" value={val2} min={0} max={10} onChange={setVal2} />
        <Stepper label="Input Label" required disabled value={1} min={0} max={10} />
      </div>;
  }
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const K=["Default","WithHelperText","Disabled","AllStates"];export{m as AllStates,p as Default,c as Disabled,u as WithHelperText,K as __namedExportsOrder,J as default};
