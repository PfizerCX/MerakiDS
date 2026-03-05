import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-DwQS_Y10.js";import{I as X}from"./Info-8DflMMe0.js";const r=I.forwardRef(({label:h,helperText:c,error:p=!1,errorText:g,size:G="md",leftIcon:x,rightIcon:f,className:J,disabled:b,id:K,...M},Q)=>{const U=I.useId(),m=K||U,T=`${m}-helper`,u=p&&g;return e.jsxs("div",{className:["mds-input-wrapper",J].filter(Boolean).join(" "),"data-size":G,"data-error":p||void 0,"data-disabled":b||void 0,children:[h&&e.jsx("label",{className:"mds-input-label",htmlFor:m,children:h}),e.jsxs("div",{className:"mds-input-field",children:[x&&e.jsx("span",{className:"mds-input-icon mds-input-icon--left",children:x}),e.jsx("input",{ref:Q,id:m,className:"mds-input",disabled:b,"aria-invalid":p||void 0,"aria-describedby":c||u?T:void 0,...M}),f&&e.jsx("span",{className:"mds-input-icon mds-input-icon--right",children:f})]}),(c||u)&&e.jsx("p",{className:"mds-input-helper",id:T,children:u?g:c})]})});r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const re={title:"Components/Input",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},error:{control:"boolean"},disabled:{control:"boolean"}},args:{label:"Label",placeholder:"Placeholder text",size:"md"}},s={},a={args:{helperText:"This is a helper message"}},t={args:{error:!0,errorText:"This field is required",value:""}},l={args:{rightIcon:e.jsx(X,{size:20})}},o={args:{size:"sm"}},i={args:{size:"lg"}},n={args:{disabled:!0,value:"Disabled input"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:360},children:[e.jsx(r,{label:"Default",placeholder:"Enter text"}),e.jsx(r,{label:"With helper",placeholder:"Enter text",helperText:"Optional helper text"}),e.jsx(r,{label:"Error",placeholder:"Enter text",error:!0,errorText:"This field is required"}),e.jsx(r,{label:"Disabled",placeholder:"Disabled",disabled:!0})]})};var v,j,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,E,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    helperText: 'This is a helper message'
  }
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var N,q,z;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    error: true,
    errorText: 'This field is required',
    value: ''
  }
}`,...(z=(q=t.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var R,W,w;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rightIcon: <Info size={20} />
  }
}`,...(w=(W=l.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var O,_,L;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(L=(_=o.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var A,H,V;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(V=(H=i.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var B,C,F;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var P,$,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 360
  }}>
      <Input label="Default" placeholder="Enter text" />
      <Input label="With helper" placeholder="Enter text" helperText="Optional helper text" />
      <Input label="Error" placeholder="Enter text" error errorText="This field is required" />
      <Input label="Disabled" placeholder="Disabled" disabled />
    </div>
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const se=["Default","WithHelperText","ErrorState","WithIcon","Small","Large","Disabled","AllStates"];export{d as AllStates,s as Default,n as Disabled,t as ErrorState,i as Large,o as Small,a as WithHelperText,l as WithIcon,se as __namedExportsOrder,re as default};
