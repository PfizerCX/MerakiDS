import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-DwQS_Y10.js";const a=C.forwardRef(({label:l,className:h,id:d,disabled:o,...i},g)=>{const j=C.useId(),s=d||j;return e.jsxs("label",{className:["mds-radio",h].filter(Boolean).join(" "),htmlFor:s,"data-disabled":o||void 0,children:[e.jsx("input",{ref:g,id:s,type:"radio",className:"mds-radio-input",disabled:o,...i}),l&&e.jsx("span",{className:"mds-radio-label",children:l})]})});a.displayName="Radio";const r=C.forwardRef(({label:l,required:h=!1,helperText:d,error:o=!1,errorText:i,className:g,children:j,...s},le)=>{const L=o&&i;return e.jsxs("div",{ref:le,className:["mds-radio-group",g].filter(Boolean).join(" "),role:"radiogroup","aria-label":l,"data-error":o||void 0,...s,children:[l&&e.jsxs("div",{className:"mds-radio-group-label",children:[h&&e.jsx("span",{className:"mds-radio-group-required",children:"*"}),e.jsx("span",{children:l})]}),e.jsx("div",{className:"mds-radio-group-options",children:j}),(d||L)&&e.jsx("p",{className:"mds-radio-group-helper",children:L?i:d})]})});r.displayName="RadioGroup";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed next to the radio button"}},composes:["Omit"]};r.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label displayed above the radio buttons"},required:{required:!1,tsType:{name:"boolean"},description:"Show a required indicator (*) next to the label",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper or caption text below the options"},error:{required:!1,tsType:{name:"boolean"},description:"Toggle error styling",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error message (shown in place of helperText when error is true)"}}};const ie={title:"Components/Radio",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"}},args:{label:"Radio"}},u={},t={args:{defaultChecked:!0}},n={args:{disabled:!0}},p={args:{disabled:!0,defaultChecked:!0}},c={render:()=>e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"group-default",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"group-default",value:"2",label:"Radio"}),e.jsx(a,{name:"group-default",value:"3",label:"Radio"})]})},m={render:()=>e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"group-two",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"group-two",value:"2",label:"Radio"})]})},b={render:()=>e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"group-four",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"group-four",value:"2",label:"Radio"}),e.jsx(a,{name:"group-four",value:"3",label:"Radio"}),e.jsx(a,{name:"group-four",value:"4",label:"Radio"})]})},R={render:()=>e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"group-five",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"group-five",value:"2",label:"Radio"}),e.jsx(a,{name:"group-five",value:"3",label:"Radio"}),e.jsx(a,{name:"group-five",value:"4",label:"Radio"}),e.jsx(a,{name:"group-five",value:"5",label:"Radio"})]})},v={render:()=>e.jsxs(r,{label:"Radio Label",required:!0,error:!0,errorText:"Please select an option.",children:[e.jsx(a,{name:"group-error",value:"1",label:"Radio"}),e.jsx(a,{name:"group-error",value:"2",label:"Radio"}),e.jsx(a,{name:"group-error",value:"3",label:"Radio"})]})},f={render:()=>e.jsx(r,{helperText:"Caption Label",children:e.jsx(a,{name:"group-no-label",value:"1",label:"Radio",defaultChecked:!0})})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,maxWidth:420},children:[e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"all-two",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"all-two",value:"2",label:"Radio"})]}),e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"all-three",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"all-three",value:"2",label:"Radio"}),e.jsx(a,{name:"all-three",value:"3",label:"Radio"})]}),e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"all-four",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"all-four",value:"2",label:"Radio"}),e.jsx(a,{name:"all-four",value:"3",label:"Radio"}),e.jsx(a,{name:"all-four",value:"4",label:"Radio"})]}),e.jsxs(r,{label:"Radio Label",required:!0,helperText:"Caption Label",children:[e.jsx(a,{name:"all-five",value:"1",label:"Radio",defaultChecked:!0}),e.jsx(a,{name:"all-five",value:"2",label:"Radio"}),e.jsx(a,{name:"all-five",value:"3",label:"Radio"}),e.jsx(a,{name:"all-five",value:"4",label:"Radio"}),e.jsx(a,{name:"all-five",value:"5",label:"Radio"})]})]})};var G,T,q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var k,y,w;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,N,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(N=n.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var O,E,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,I,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-default" value="1" label="Radio" defaultChecked />
      <Radio name="group-default" value="2" label="Radio" />
      <Radio name="group-default" value="3" label="Radio" />
    </RadioGroup>
}`,...(V=(I=c.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var W,A,B;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-two" value="1" label="Radio" defaultChecked />
      <Radio name="group-two" value="2" label="Radio" />
    </RadioGroup>
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var P,H,M;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-four" value="1" label="Radio" defaultChecked />
      <Radio name="group-four" value="2" label="Radio" />
      <Radio name="group-four" value="3" label="Radio" />
      <Radio name="group-four" value="4" label="Radio" />
    </RadioGroup>
}`,...(M=(H=b.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var z,J,K;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Label" required helperText="Caption Label">
      <Radio name="group-five" value="1" label="Radio" defaultChecked />
      <Radio name="group-five" value="2" label="Radio" />
      <Radio name="group-five" value="3" label="Radio" />
      <Radio name="group-five" value="4" label="Radio" />
      <Radio name="group-five" value="5" label="Radio" />
    </RadioGroup>
}`,...(K=(J=R.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Label" required error errorText="Please select an option.">
      <Radio name="group-error" value="1" label="Radio" />
      <Radio name="group-error" value="2" label="Radio" />
      <Radio name="group-error" value="3" label="Radio" />
    </RadioGroup>
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <RadioGroup helperText="Caption Label">
      <Radio name="group-no-label" value="1" label="Radio" defaultChecked />
    </RadioGroup>
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    maxWidth: 420
  }}>
      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-two" value="1" label="Radio" defaultChecked />
        <Radio name="all-two" value="2" label="Radio" />
      </RadioGroup>

      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-three" value="1" label="Radio" defaultChecked />
        <Radio name="all-three" value="2" label="Radio" />
        <Radio name="all-three" value="3" label="Radio" />
      </RadioGroup>

      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-four" value="1" label="Radio" defaultChecked />
        <Radio name="all-four" value="2" label="Radio" />
        <Radio name="all-four" value="3" label="Radio" />
        <Radio name="all-four" value="4" label="Radio" />
      </RadioGroup>

      <RadioGroup label="Radio Label" required helperText="Caption Label">
        <Radio name="all-five" value="1" label="Radio" defaultChecked />
        <Radio name="all-five" value="2" label="Radio" />
        <Radio name="all-five" value="3" label="Radio" />
        <Radio name="all-five" value="4" label="Radio" />
        <Radio name="all-five" value="5" label="Radio" />
      </RadioGroup>
    </div>
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const se=["Default","Selected","Disabled","DisabledSelected","Group","GroupTwoOptions","GroupFourOptions","GroupFiveOptions","GroupError","GroupWithoutLabel","AllVariants"];export{x as AllVariants,u as Default,n as Disabled,p as DisabledSelected,c as Group,v as GroupError,R as GroupFiveOptions,b as GroupFourOptions,m as GroupTwoOptions,f as GroupWithoutLabel,t as Selected,se as __namedExportsOrder,ie as default};
