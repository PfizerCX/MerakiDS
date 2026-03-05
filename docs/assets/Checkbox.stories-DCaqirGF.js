import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./index-DwQS_Y10.js";const r=q.forwardRef(({label:l,className:f,id:s,disabled:a,...c},j)=>{const T=q.useId(),b=s||T;return e.jsxs("label",{className:["mds-checkbox",f].filter(Boolean).join(" "),htmlFor:b,"data-disabled":a||void 0,children:[e.jsx("input",{ref:j,id:b,type:"checkbox",className:"mds-checkbox-input",disabled:a,...c}),l&&e.jsx("span",{className:"mds-checkbox-label",children:l})]})});r.displayName="Checkbox";const o=q.forwardRef(({label:l,required:f=!1,helperText:s,error:a=!1,errorText:c,className:j,children:T,...b},le)=>{const g=a&&c;return e.jsxs("div",{ref:le,className:["mds-checkbox-group",j].filter(Boolean).join(" "),role:"group","aria-label":l,"data-error":a||void 0,...b,children:[l&&e.jsxs("div",{className:"mds-checkbox-group-label",children:[f&&e.jsx("span",{className:"mds-checkbox-group-required",children:"*"}),e.jsx("span",{children:l})]}),e.jsx("div",{className:"mds-checkbox-group-options",children:T}),(s||g)&&e.jsx("p",{className:"mds-checkbox-group-helper",children:g?c:s})]})});o.displayName="CheckboxGroup";r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed next to the checkbox"}},composes:["Omit"]};o.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label displayed above the checkboxes"},required:{required:!1,tsType:{name:"boolean"},description:"Show a required indicator (*) next to the label",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper or caption text below the options"},error:{required:!1,tsType:{name:"boolean"},description:"Toggle error styling",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error message (shown in place of helperText when error is true)"}}};const ce={title:"Components/Checkbox",component:r,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"}},args:{label:"Checkbox"}},h={},d={args:{defaultChecked:!0}},x={args:{disabled:!0}},t={args:{disabled:!0,defaultChecked:!0}},i={render:()=>e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]})},u={render:()=>e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"})]})},k={render:()=>e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]})},n={render:()=>e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]})},C={render:()=>e.jsxs(o,{label:"Checkbox Label",required:!0,error:!0,errorText:"Please select at least one option.",children:[e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]})},p={render:()=>e.jsx(o,{helperText:"This field is required.",children:e.jsx(r,{label:"Checkbox",defaultChecked:!0})})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,maxWidth:420},children:[e.jsx(o,{label:"Checkbox Label",helperText:"This field is required.",children:e.jsx(r,{label:"Checkbox",defaultChecked:!0})}),e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"})]}),e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]}),e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]}),e.jsxs(o,{label:"Checkbox Label",required:!0,helperText:"This field is required.",children:[e.jsx(r,{label:"Checkbox",defaultChecked:!0}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"}),e.jsx(r,{label:"Checkbox"})]})]})};var G,L,y;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(y=(L=h.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var v,N,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var w,D,O;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(O=(D=x.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var E,_,F;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(F=(_=t.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var I,V,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var R,A,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var P,H,M;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
}`,...(M=(H=k.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var z,J,K;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Checkbox Label" required error errorText="Please select at least one option.">
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
    </CheckboxGroup>
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <CheckboxGroup helperText="This field is required.">
      <Checkbox label="Checkbox" defaultChecked />
    </CheckboxGroup>
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,oe;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    maxWidth: 420
  }}>
      <CheckboxGroup label="Checkbox Label" helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>

      <CheckboxGroup label="Checkbox Label" required helperText="This field is required.">
        <Checkbox label="Checkbox" defaultChecked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" />
      </CheckboxGroup>
    </div>
}`,...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const be=["Default","Checked","Disabled","DisabledChecked","Group","GroupTwoOptions","GroupFourOptions","GroupFiveOptions","GroupError","GroupWithoutLabel","AllVariants"];export{m as AllVariants,d as Checked,h as Default,x as Disabled,t as DisabledChecked,i as Group,C as GroupError,n as GroupFiveOptions,k as GroupFourOptions,u as GroupTwoOptions,p as GroupWithoutLabel,be as __namedExportsOrder,ce as default};
