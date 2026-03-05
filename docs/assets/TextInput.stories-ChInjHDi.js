import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DwQS_Y10.js";import{E as ze}from"./ErrorCircle-CwiKfN0G.js";import{W as Ne}from"./Warning-CloWfHdP.js";import{C as Oe}from"./CheckCircle-BEI1plWw.js";import{F as s}from"./Fpo-D-APNklj.js";const a=l.forwardRef(({label:t,caption:n,error:i=!1,warning:_=!1,success:he=!1,icon:z,required:C,disabled:N,className:je,value:q,defaultValue:O,id:ve,onFocus:S,onBlur:T,...u},Ie)=>{const _e=l.useId(),y=ve||_e,w=`${y}-caption`,[W,F]=l.useState(!1),[Ce,qe]=l.useState(O??""),c=q!==void 0,E=c?q:Ce,Se=E!==""&&E!=null,d=W||Se,o=i?"error":_?"warning":he?"success":void 0,Te=r=>{F(!0),S==null||S(r)},ye=r=>{F(!1),T==null||T(r)};return e.jsxs("div",{className:["mds-text-input",je].filter(Boolean).join(" "),"data-focused":W||void 0,"data-validation":o||void 0,"data-disabled":N||void 0,"data-floating":d||void 0,children:[d&&t&&e.jsxs("label",{className:"mds-text-input__label",htmlFor:y,children:[C&&e.jsx("span",{className:"mds-text-input__required",children:"*"}),t]}),e.jsxs("div",{className:"mds-text-input__field",children:[e.jsx("input",{ref:Ie,id:y,className:"mds-text-input__input",disabled:N,required:C,value:c?q:void 0,defaultValue:c?void 0:O,placeholder:d?void 0:t,"aria-invalid":i||void 0,"aria-describedby":n?w:void 0,onFocus:Te,onBlur:ye,onChange:r=>{var D;c||qe(r.target.value),(D=u.onChange)==null||D.call(u,r)},...u}),!d&&C&&e.jsx("span",{className:"mds-text-input__required mds-text-input__required--inline",children:"*"}),o==="error"&&e.jsx("span",{className:"mds-text-input__status-icon mds-text-input__status-icon--error",children:e.jsx(ze,{size:24})}),o==="warning"&&e.jsx("span",{className:"mds-text-input__status-icon mds-text-input__status-icon--warning",children:e.jsx(Ne,{size:24})}),o==="success"&&e.jsx("span",{className:"mds-text-input__status-icon mds-text-input__status-icon--success",children:e.jsx(Oe,{size:24})}),!o&&z&&e.jsx("span",{className:"mds-text-input__icon",children:z})]}),n&&e.jsx("p",{className:"mds-text-input__caption",id:w,children:n})]})});a.displayName="TextInput";a.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed above or inside the input"},caption:{required:!1,tsType:{name:"string"},description:"Optional caption text displayed below the input"},error:{required:!1,tsType:{name:"boolean"},description:"Shows error validation state",defaultValue:{value:"false",computed:!1}},warning:{required:!1,tsType:{name:"boolean"},description:"Shows warning validation state",defaultValue:{value:"false",computed:!1}},success:{required:!1,tsType:{name:"boolean"},description:"Shows success validation state",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon element on the right side of the input"}},composes:["Omit"]};const Ae={title:"Components/TextInput",component:a,tags:["autodocs"],argTypes:{error:{control:"boolean"},warning:{control:"boolean"},success:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"}},args:{label:"Input Label",caption:"Optional Caption Label",required:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:496},children:e.jsx(t,{})})]},p={},m={args:{icon:e.jsx(s,{size:24})}},b={args:{defaultValue:"Value Label",icon:e.jsx(s,{size:24})}},x={args:{defaultValue:"Value Label",error:!0}},f={args:{defaultValue:"Value Label",warning:!0}},g={args:{defaultValue:"Value Label",success:!0}},V={args:{disabled:!0,icon:e.jsx(s,{size:24})}},L={args:{defaultValue:"Value Label",disabled:!0,icon:e.jsx(s,{size:24})}},h={args:{caption:void 0}},j={args:{required:!1}},v={render:t=>{const[n,i]=l.useState("");return e.jsx(a,{...t,value:n,onChange:_=>i(_.target.value)})}},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,maxWidth:496},children:[e.jsx(a,{label:"Input Label",caption:"Optional Caption Label",required:!0,icon:e.jsx(s,{size:24})}),e.jsx(a,{label:"Input Label",caption:"Optional Caption Label",required:!0,defaultValue:"Value Label",icon:e.jsx(s,{size:24})}),e.jsx(a,{label:"Input Label",caption:"Optional Caption Label",required:!0,disabled:!0,icon:e.jsx(s,{size:24})}),e.jsx(a,{label:"Input Label",caption:"Optional Caption Label",required:!0,defaultValue:"Value Label",error:!0}),e.jsx(a,{label:"Input Label",caption:"Optional Caption Label",required:!0,defaultValue:"Value Label",warning:!0}),e.jsx(a,{label:"Input Label",caption:"Optional Caption Label",required:!0,defaultValue:"Value Label",success:!0})]})};var R,A,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...($=(A=p.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var k,G,H;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: <Fpo size={24} />
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value Label',
    icon: <Fpo size={24} />
  }
}`,...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var P,Q,U;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value Label',
    error: true
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value Label',
    warning: true
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var B,ee,ae;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value Label',
    success: true
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    disabled: true,
    icon: <Fpo size={24} />
  }
}`,...(re=(se=V.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,oe,le;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value Label',
    disabled: true,
    icon: <Fpo size={24} />
  }
}`,...(le=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ue,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    caption: undefined
  }
}`,...(ce=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    required: false
  }
}`,...(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,xe,fe;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <TextInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(fe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,Ve,Le;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    maxWidth: 496
  }}>
      <TextInput label="Input Label" caption="Optional Caption Label" required icon={<Fpo size={24} />} />
      <TextInput label="Input Label" caption="Optional Caption Label" required defaultValue="Value Label" icon={<Fpo size={24} />} />
      <TextInput label="Input Label" caption="Optional Caption Label" required disabled icon={<Fpo size={24} />} />
      <TextInput label="Input Label" caption="Optional Caption Label" required defaultValue="Value Label" error />
      <TextInput label="Input Label" caption="Optional Caption Label" required defaultValue="Value Label" warning />
      <TextInput label="Input Label" caption="Optional Caption Label" required defaultValue="Value Label" success />
    </div>
}`,...(Le=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};const $e=["Default","WithIcon","Entered","Error","Warning","Success","Disabled","DisabledWithValue","WithoutCaption","NotRequired","Controlled","AllStates"];export{I as AllStates,v as Controlled,p as Default,V as Disabled,L as DisabledWithValue,b as Entered,x as Error,j as NotRequired,g as Success,f as Warning,m as WithIcon,h as WithoutCaption,$e as __namedExportsOrder,Ae as default};
