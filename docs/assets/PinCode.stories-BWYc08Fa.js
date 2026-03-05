import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DwQS_Y10.js";const n=l.forwardRef(({label:c,fields:t=4,value:p,defaultValue:C="",onChange:f,onComplete:m,error:D=!1,errorText:de,warning:w=!1,warningText:ce,success:S=!1,successText:pe,helperText:fe,disabled:g=!1,autoFocus:me=!1,mask:ge=!1,className:be},ve)=>{const q=l.useId(),E=l.useRef([]),j=p!==void 0,[xe,ye]=l.useState(C),W=j?p:xe,i=l.useMemo(()=>{const a=W.split("").slice(0,t);for(;a.length<t;)a.push("");return a},[W,t]),[he,F]=l.useState(null),Pe=l.useMemo(()=>g?"disabled":D?"error":w?"warning":S?"success":"default",[g,D,w,S]),u=l.useCallback(a=>{const e=a.join("");j||ye(e),f==null||f(e),e.length===t&&a.every(r=>r!=="")&&(m==null||m(e))},[j,f,m,t]),o=l.useCallback(a=>{var e;(e=E.current[a])==null||e.focus()},[]),Ve=l.useCallback((a,e)=>{if(!/^\d$/.test(e))return;const r=[...i];r[a]=e,u(r),a<t-1&&o(a+1)},[i,t,u,o]),Ie=l.useCallback((a,e)=>{if(e.key==="Backspace"){e.preventDefault();const r=[...i];r[a]?(r[a]="",u(r)):a>0&&(r[a-1]="",u(r),o(a-1))}else e.key==="ArrowLeft"&&a>0?(e.preventDefault(),o(a-1)):e.key==="ArrowRight"&&a<t-1&&(e.preventDefault(),o(a+1))},[i,t,u,o]),Te=l.useCallback(a=>{a.preventDefault();const e=a.clipboardData.getData("text").replace(/\D/g,"").slice(0,t);if(!e)return;const r=[...i];for(let b=0;b<e.length;b++)r[b]=e[b];u(r);const d=Math.min(e.length,t-1);o(d)},[i,t,u,o]);l.useImperativeHandle(ve,()=>({focus:()=>o(0),clear:()=>{const a=Array(t).fill("");u(a),o(0)}}));const k=D?de:w?ce:S?pe:fe,$=`${q}-helper`;return s.jsxs("div",{className:["mds-pincode",be].filter(Boolean).join(" "),"data-state":Pe,"data-disabled":g||void 0,"data-fields":t,children:[c&&s.jsx("span",{className:"mds-pincode-label",children:c}),s.jsx("div",{className:"mds-pincode-group",role:"group","aria-label":c||"PIN code",children:i.map((a,e)=>s.jsx("div",{className:"mds-pincode-field","data-focused":he===e||void 0,"data-filled":a!==""||void 0,children:s.jsx("input",{ref:r=>{E.current[e]=r},id:`${q}-pin-${e}`,className:"mds-pincode-input",type:ge?"password":"text",inputMode:"numeric",pattern:"\\d{1}",maxLength:1,value:a,disabled:g,autoFocus:me&&e===0,autoComplete:"one-time-code","aria-label":`PIN digit ${e+1} of ${t}`,"aria-describedby":k?$:void 0,onFocus:()=>F(e),onBlur:()=>F(null),onChange:r=>{const d=r.target.value;d.length>0&&Ve(e,d[d.length-1])},onKeyDown:r=>Ie(e,r),onPaste:Te})},e))}),k&&s.jsx("p",{className:"mds-pincode-helper",id:$,children:k})]})});n.displayName="PinCode";n.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"clear",docblock:null,modifiers:[],params:[],returns:null}],displayName:"PinCode",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed above the pin inputs"},fields:{required:!1,tsType:{name:"union",raw:"4 | 6",elements:[{name:"literal",value:"4"},{name:"literal",value:"6"}]},description:"Number of PIN digit fields",defaultValue:{value:"4",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current PIN value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default PIN value (uncontrolled)",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the PIN value changes"},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when all fields are filled"},error:{required:!1,tsType:{name:"boolean"},description:"Show error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error helper text"},warning:{required:!1,tsType:{name:"boolean"},description:"Show warning state",defaultValue:{value:"false",computed:!1}},warningText:{required:!1,tsType:{name:"string"},description:"Warning helper text"},success:{required:!1,tsType:{name:"boolean"},description:"Show success state",defaultValue:{value:"false",computed:!1}},successText:{required:!1,tsType:{name:"string"},description:"Success helper text"},helperText:{required:!1,tsType:{name:"string"},description:"Default helper text"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all inputs",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus the first input on mount",defaultValue:{value:"false",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"Mask the entered digits",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the wrapper"}}};const De={title:"Components/PinCode",component:n,tags:["autodocs"],argTypes:{fields:{control:{type:"inline-radio"},options:[4,6]},error:{control:"boolean"},warning:{control:"boolean"},success:{control:"boolean"},disabled:{control:"boolean"},mask:{control:"boolean"},autoFocus:{control:"boolean"}},args:{label:"Label",fields:4}},v={},x={args:{fields:6}},y={args:{error:!0,errorText:"Incorrect PIN",defaultValue:"1234"}},h={args:{warning:!0,warningText:"PIN is about to expire",defaultValue:"1234"}},P={args:{success:!0,successText:"PIN verified",defaultValue:"1234"}},V={args:{disabled:!0,defaultValue:"0000"}},I={args:{mask:!0,defaultValue:"1234"}},T={render:function(){const[t,p]=l.useState("");return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[s.jsx(n,{label:"Enter PIN",value:t,onChange:p,onComplete:C=>alert(`PIN entered: ${C}`)}),s.jsxs("p",{style:{fontFamily:"var(--font-family-sans)",fontSize:14},children:["Current value: ",s.jsx("strong",{children:t||"(empty)"})]})]})}},N={render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[s.jsx(n,{label:"Default",defaultValue:"0000"}),s.jsx(n,{label:"Error",error:!0,errorText:"Incorrect PIN",defaultValue:"0000"}),s.jsx(n,{label:"Warning",warning:!0,warningText:"PIN is about to expire",defaultValue:"0000"}),s.jsx(n,{label:"Success",success:!0,successText:"PIN verified",defaultValue:"0000"}),s.jsx(n,{label:"Disabled",disabled:!0,defaultValue:"0000"}),s.jsx(n,{label:"Default (6 fields)",fields:6,defaultValue:"000000"}),s.jsx(n,{label:"Error (6 fields)",fields:6,error:!0,errorText:"Incorrect PIN",defaultValue:"000000"}),s.jsx(n,{label:"Disabled (6 fields)",fields:6,disabled:!0,defaultValue:"000000"})]})};var A,M,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(R=(M=v.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var _,B,L;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    fields: 6
  }
}`,...(L=(B=x.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var z,K,H;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    error: true,
    errorText: 'Incorrect PIN',
    defaultValue: '1234'
  }
}`,...(H=(K=y.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var O,G,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    warning: true,
    warningText: 'PIN is about to expire',
    defaultValue: '1234'
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    success: true,
    successText: 'PIN verified',
    defaultValue: '1234'
  }
}`,...(X=(U=P.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '0000'
  }
}`,...(ee=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    mask: true,
    defaultValue: '1234'
  }
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,le,ne;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: function ControlledPinCode() {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PinCode label="Enter PIN" value={value} onChange={setValue} onComplete={pin => alert(\`PIN entered: \${pin}\`)} />
        <p style={{
        fontFamily: 'var(--font-family-sans)',
        fontSize: 14
      }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </p>
      </div>;
  }
}`,...(ne=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,ue,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <PinCode label="Default" defaultValue="0000" />
      <PinCode label="Error" error errorText="Incorrect PIN" defaultValue="0000" />
      <PinCode label="Warning" warning warningText="PIN is about to expire" defaultValue="0000" />
      <PinCode label="Success" success successText="PIN verified" defaultValue="0000" />
      <PinCode label="Disabled" disabled defaultValue="0000" />
      <PinCode label="Default (6 fields)" fields={6} defaultValue="000000" />
      <PinCode label="Error (6 fields)" fields={6} error errorText="Incorrect PIN" defaultValue="000000" />
      <PinCode label="Disabled (6 fields)" fields={6} disabled defaultValue="000000" />
    </div>
}`,...(ie=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};const we=["Default","SixFields","WithError","WithWarning","WithSuccess","Disabled","Masked","Controlled","AllStates"];export{N as AllStates,T as Controlled,v as Default,V as Disabled,I as Masked,x as SixFields,y as WithError,P as WithSuccess,h as WithWarning,we as __namedExportsOrder,De as default};
