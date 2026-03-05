import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DwQS_Y10.js";import{E as te}from"./ErrorCircle-CwiKfN0G.js";const a=l.forwardRef(({label:v,caption:T,error:t=!1,errorText:p,required:L=!1,className:U,disabled:y,id:X,value:m,defaultValue:Y,onFocus:b,onBlur:x,onChange:f,...Z},F)=>{const B=l.useId(),h=X||B,q=`${h}-caption`,[ee,V]=l.useState(!1),[j,ae]=l.useState(Y??""),g=m!==void 0,re=String(g?m:j).length>0,C=T||t&&p;return e.jsxs("div",{className:["mds-textarea-wrapper",U].filter(Boolean).join(" "),"data-error":t||void 0,"data-disabled":y||void 0,"data-focused":ee||void 0,"data-filled":re||void 0,children:[v&&e.jsxs("label",{className:"mds-textarea-label",htmlFor:h,children:[L&&e.jsx("span",{className:"mds-textarea-required",children:"*"}),v]}),e.jsxs("div",{className:"mds-textarea-field",children:[e.jsx("textarea",{ref:F,id:h,className:"mds-textarea",disabled:y,required:L,value:g?m:j,"aria-invalid":t||void 0,"aria-describedby":C?q:void 0,onFocus:r=>{V(!0),b==null||b(r)},onBlur:r=>{V(!1),x==null||x(r)},onChange:r=>{g||ae(r.target.value),f==null||f(r)},...Z}),t&&e.jsx("span",{className:"mds-textarea-error-icon",children:e.jsx(te,{size:24})})]}),C&&e.jsx("p",{className:"mds-textarea-caption",id:q,children:t&&p?p:T})]})});a.displayName="TextArea";a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Label displayed above or inside the textarea field"},caption:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the textarea"},error:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is in an error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error message shown below the field when error is true"},required:{defaultValue:{value:"false",computed:!1},required:!1}}};const ne={title:"Components/TextArea",component:a,tags:["autodocs"],argTypes:{error:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"}},args:{label:"Textarea Label",caption:"Optional Caption Label",required:!0}},s={},i={args:{defaultValue:"This value label has a 4 line limit. If you go over 4 lines it will be truncated."}},o={args:{error:!0,errorText:"Optional Caption Label",defaultValue:"This value label has a 4 line limit. If you go over 4 lines it will be truncated."}},n={args:{disabled:!0}},d={args:{required:!1}},u={args:{caption:void 0}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,maxWidth:496,padding:24},children:[e.jsx(a,{label:"Textarea Label",caption:"Optional Caption Label",required:!0}),e.jsx(a,{label:"Textarea Label",caption:"Optional Caption Label",required:!0,defaultValue:"This value label has a 4 line limit. If you go over 4 lines it will be truncated."}),e.jsx(a,{label:"Textarea Label",caption:"Optional Caption Label",required:!0,disabled:!0}),e.jsx(a,{label:"Textarea Label",caption:"Optional Caption Label",required:!0,error:!0,errorText:"Optional Caption Label",defaultValue:"This value label has a 4 line limit. If you go over 4 lines it will be truncated."})]})};var w,I,O;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var S,N,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This value label has a 4 line limit. If you go over 4 lines it will be truncated.'
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var E,W,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: true,
    errorText: 'Optional Caption Label',
    defaultValue: 'This value label has a 4 line limit. If you go over 4 lines it will be truncated.'
  }
}`,...(D=(W=o.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var R,_,z;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(_=n.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var H,$,k;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    required: false
  }
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    caption: undefined
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,P,Q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    maxWidth: 496,
    padding: 24
  }}>
      <TextArea label="Textarea Label" caption="Optional Caption Label" required />
      <TextArea label="Textarea Label" caption="Optional Caption Label" required defaultValue="This value label has a 4 line limit. If you go over 4 lines it will be truncated." />
      <TextArea label="Textarea Label" caption="Optional Caption Label" required disabled />
      <TextArea label="Textarea Label" caption="Optional Caption Label" required error errorText="Optional Caption Label" defaultValue="This value label has a 4 line limit. If you go over 4 lines it will be truncated." />
    </div>
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const de=["Default","WithValue","ErrorState","Disabled","NotRequired","WithoutCaption","AllStates"];export{c as AllStates,s as Default,n as Disabled,o as ErrorState,d as NotRequired,i as WithValue,u as WithoutCaption,de as __namedExportsOrder,ne as default};
