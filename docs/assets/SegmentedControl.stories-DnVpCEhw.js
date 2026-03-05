import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DwQS_Y10.js";import{C as G}from"./CheckCircle-BEI1plWw.js";const y=t=>t===void 0?[]:Array.isArray(t)?t:[t],s=f.forwardRef(({label:t,options:q,mode:g="single",value:v,defaultValue:M,onChange:r,disabled:i,className:k,...E},z)=>{const b=v!==void 0,[I,R]=f.useState(y(M)),n=b?y(v):I,$=f.useCallback(l=>{if(i)return;let a;g==="single"?a=[l]:a=n.includes(l)?n.filter(F=>F!==l):[...n,l],b||R(a),r==null||r(g==="single"?a[0]:a)},[i,g,n,b,r]);return e.jsxs("div",{ref:z,className:["mds-segmented-control",k].filter(Boolean).join(" "),"data-disabled":i||void 0,...E,children:[t&&e.jsx("span",{className:"mds-segmented-control__label",children:t}),e.jsx("div",{className:"mds-segmented-control__controls",role:"group","aria-label":t,children:q.map(l=>{const a=n.includes(l.value);return e.jsx("button",{type:"button",className:"mds-segmented-control__segment","data-selected":a||void 0,disabled:i,"aria-pressed":a,onClick:()=>$(l.value),children:e.jsxs("span",{className:"mds-segmented-control__state-layer",children:[a&&e.jsx(G,{size:24,className:"mds-segmented-control__icon",style:{color:"inherit"},"aria-hidden":"true"}),e.jsx("span",{className:"mds-segmented-control__text",children:l.label})]})},l.value)})})]})});s.displayName="SegmentedControl";s.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{label:{required:!1,tsType:{name:"string"},description:"Label displayed above the control"},options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedControlOption"}],raw:"SegmentedControlOption[]"},description:"Array of selectable options"},mode:{required:!1,tsType:{name:"union",raw:"'single' | 'multi'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"}]},description:"Selection mode: single allows one item, multi allows multiple",defaultValue:{value:"'single'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected value(s) — controlled mode"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Default selected value(s) — uncontrolled mode"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the selection changes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the entire control"}},composes:["Omit"]};const P={title:"Components/SegmentedControl",component:s,tags:["autodocs"],argTypes:{mode:{control:"select",options:["single","multi"],description:"Selection mode — single allows one item, multi allows many"},label:{control:"text",description:"Optional label displayed above the control"},disabled:{control:"boolean"}}},o=[{value:"opt1",label:"Label"},{value:"opt2",label:"Label"},{value:"opt3",label:"Label"},{value:"opt4",label:"Label"},{value:"opt5",label:"Label"}],d={args:{label:"Single-Select Label",options:o,mode:"single",defaultValue:"opt1"}},m={args:{label:"Multi-Select Label",options:o,mode:"multi",defaultValue:["opt1","opt2"]}},u={args:{label:"Boolean Label",options:[{value:"yes",label:"Label"},{value:"no",label:"Label"}],mode:"single",defaultValue:"yes"}},c={args:{label:"Disabled",options:o,mode:"single",defaultValue:"opt1",disabled:!0}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(s,{label:"Single-Select Label",options:o,mode:"single",defaultValue:"opt1"}),e.jsx(s,{label:"Multi-Select Label",options:o,mode:"multi",defaultValue:["opt1","opt2"]}),e.jsx(s,{label:"Boolean Label",options:[{value:"yes",label:"Label"},{value:"no",label:"Label"}],mode:"single",defaultValue:"yes"})]})};var S,L,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Single-Select Label',
    options: fiveOptions,
    mode: 'single',
    defaultValue: 'opt1'
  }
}`,...(x=(L=d.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var V,_,w;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Multi-Select Label',
    options: fiveOptions,
    mode: 'multi',
    defaultValue: ['opt1', 'opt2']
  }
}`,...(w=(_=m.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var h,j,C;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Boolean Label',
    options: [{
      value: 'yes',
      label: 'Label'
    }, {
      value: 'no',
      label: 'Label'
    }],
    mode: 'single',
    defaultValue: 'yes'
  }
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var O,A,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    options: fiveOptions,
    mode: 'single',
    defaultValue: 'opt1',
    disabled: true
  }
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var B,D,T;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <SegmentedControl label="Single-Select Label" options={fiveOptions} mode="single" defaultValue="opt1" />
      <SegmentedControl label="Multi-Select Label" options={fiveOptions} mode="multi" defaultValue={['opt1', 'opt2']} />
      <SegmentedControl label="Boolean Label" options={[{
      value: 'yes',
      label: 'Label'
    }, {
      value: 'no',
      label: 'Label'
    }]} mode="single" defaultValue="yes" />
    </div>
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const Q=["SingleSelect","MultiSelect","Boolean","Disabled","AllVariants"];export{p as AllVariants,u as Boolean,c as Disabled,m as MultiSelect,d as SingleSelect,Q as __namedExportsOrder,P as default};
