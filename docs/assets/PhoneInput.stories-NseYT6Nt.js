import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DwQS_Y10.js";import{C as qe}from"./ChevronDown-DuL3N5CD.js";import{C as De}from"./ChevronUp-flsGy-H-.js";import{E as Re}from"./ErrorCircle-CwiKfN0G.js";const ke=[{code:"US",dialCode:"+1",flag:"🇺🇸",name:"United States"},{code:"CA",dialCode:"+1",flag:"🇨🇦",name:"Canada"},{code:"GB",dialCode:"+44",flag:"🇬🇧",name:"United Kingdom"},{code:"AU",dialCode:"+61",flag:"🇦🇺",name:"Australia"},{code:"DE",dialCode:"+49",flag:"🇩🇪",name:"Germany"},{code:"FR",dialCode:"+33",flag:"🇫🇷",name:"France"},{code:"IT",dialCode:"+39",flag:"🇮🇹",name:"Italy"},{code:"ES",dialCode:"+34",flag:"🇪🇸",name:"Spain"},{code:"NL",dialCode:"+31",flag:"🇳🇱",name:"Netherlands"},{code:"BE",dialCode:"+32",flag:"🇧🇪",name:"Belgium"},{code:"PT",dialCode:"+351",flag:"🇵🇹",name:"Portugal"},{code:"CH",dialCode:"+41",flag:"🇨🇭",name:"Switzerland"},{code:"AT",dialCode:"+43",flag:"🇦🇹",name:"Austria"},{code:"IE",dialCode:"+353",flag:"🇮🇪",name:"Ireland"},{code:"SE",dialCode:"+46",flag:"🇸🇪",name:"Sweden"},{code:"NO",dialCode:"+47",flag:"🇳🇴",name:"Norway"},{code:"DK",dialCode:"+45",flag:"🇩🇰",name:"Denmark"},{code:"FI",dialCode:"+358",flag:"🇫🇮",name:"Finland"},{code:"PL",dialCode:"+48",flag:"🇵🇱",name:"Poland"},{code:"GR",dialCode:"+30",flag:"🇬🇷",name:"Greece"},{code:"BR",dialCode:"+55",flag:"🇧🇷",name:"Brazil"},{code:"MX",dialCode:"+52",flag:"🇲🇽",name:"Mexico"},{code:"AR",dialCode:"+54",flag:"🇦🇷",name:"Argentina"},{code:"CL",dialCode:"+56",flag:"🇨🇱",name:"Chile"},{code:"CO",dialCode:"+57",flag:"🇨🇴",name:"Colombia"},{code:"IN",dialCode:"+91",flag:"🇮🇳",name:"India"},{code:"CN",dialCode:"+86",flag:"🇨🇳",name:"China"},{code:"JP",dialCode:"+81",flag:"🇯🇵",name:"Japan"},{code:"KR",dialCode:"+82",flag:"🇰🇷",name:"South Korea"},{code:"SG",dialCode:"+65",flag:"🇸🇬",name:"Singapore"},{code:"TH",dialCode:"+66",flag:"🇹🇭",name:"Thailand"},{code:"PH",dialCode:"+63",flag:"🇵🇭",name:"Philippines"},{code:"RU",dialCode:"+7",flag:"🇷🇺",name:"Russia"},{code:"KZ",dialCode:"+7",flag:"🇰🇿",name:"Kazakhstan"},{code:"ZA",dialCode:"+27",flag:"🇿🇦",name:"South Africa"},{code:"EG",dialCode:"+20",flag:"🇪🇬",name:"Egypt"},{code:"AE",dialCode:"+971",flag:"🇦🇪",name:"United Arab Emirates"},{code:"SA",dialCode:"+966",flag:"🇸🇦",name:"Saudi Arabia"},{code:"IL",dialCode:"+972",flag:"🇮🇱",name:"Israel"},{code:"NZ",dialCode:"+64",flag:"🇳🇿",name:"New Zealand"}],l=n.forwardRef(({label:f="Phone Number",placeholder:h="Enter phone number",required:w=!1,disabled:t=!1,error:u=!1,errorText:g,helperText:V,value:L,defaultValue:fe="",onChange:C,country:K,defaultCountry:he="US",onCountryChange:b,countries:m=ke,className:ge,id:Ce,name:be},ye)=>{const ve=n.useId(),j=Ce||ve,G=`${j}-helper`,y=`${j}-listbox`,A=L!==void 0,[xe,Se]=n.useState(fe),Ne=A?L:xe,q=K!==void 0,[Ie,Pe]=n.useState(he),v=q?K:Ie,p=n.useMemo(()=>m.find(e=>e.code===v)??m[0],[m,v]),[d,H]=n.useState(!1),[x,D]=n.useState(""),[r,i]=n.useState(-1),R=n.useRef(null),O=n.useRef(null),B=n.useRef(null),Te=n.useRef(null),M=n.useRef([]),z=u&&g,F=V||z,c=n.useMemo(()=>{if(!x)return m;const e=x.toLowerCase();return m.filter(o=>o.name.toLowerCase().includes(e)||o.code.toLowerCase().includes(e)||o.dialCode.includes(e))},[m,x]),k=n.useCallback(()=>{t||(H(!0),D(""),i(-1))},[t]),s=n.useCallback(()=>{var e;H(!1),D(""),i(-1),(e=O.current)==null||e.focus()},[]),U=n.useCallback(e=>{q||Pe(e.code),b==null||b(e),s()},[q,b,s]);n.useEffect(()=>{if(!d)return;const e=o=>{R.current&&!R.current.contains(o.target)&&s()};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d,s]),n.useEffect(()=>{d&&requestAnimationFrame(()=>{var e;return(e=B.current)==null?void 0:e.focus()})},[d]),n.useEffect(()=>{var e;d&&r>=0&&((e=M.current[r])==null||e.scrollIntoView({block:"nearest"}))},[d,r]);const _e=n.useCallback(e=>{const o=e.target.value;A||Se(o),C==null||C(o)},[A,C]),Ee=n.useCallback(e=>{D(e.target.value),i(0)},[]),we=n.useCallback(e=>{switch(e.key){case"ArrowDown":e.preventDefault(),i(o=>Math.min(o+1,c.length-1));break;case"ArrowUp":e.preventDefault(),i(o=>Math.max(o-1,0));break;case"Enter":e.preventDefault(),r>=0&&c[r]&&U(c[r]);break;case"Escape":e.preventDefault(),s();break;case"Home":e.preventDefault(),i(0);break;case"End":e.preventDefault(),i(c.length-1);break}},[c,r,U,s]),je=n.useCallback(e=>{(e.key==="Enter"||e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),k())},[k]);return a.jsxs("div",{ref:R,className:["mds-phone-input",ge].filter(Boolean).join(" "),"data-error":u||void 0,"data-disabled":t||void 0,children:[f&&a.jsxs("div",{className:"mds-phone-input__label",children:[w&&a.jsx("span",{className:"mds-phone-input__required",children:"*"}),a.jsx("span",{children:f})]}),a.jsxs("div",{className:"mds-phone-input__fields",children:[a.jsxs("div",{className:"mds-phone-input__country",children:[a.jsxs("button",{ref:O,type:"button",className:"mds-phone-input__country-trigger","aria-haspopup":"listbox","aria-expanded":d,"aria-label":`Country code: ${p.name} ${p.dialCode}`,disabled:t,onClick:()=>d?s():k(),onKeyDown:je,children:[a.jsx("span",{className:"mds-phone-input__country-flag",children:p.flag}),a.jsx("span",{className:"mds-phone-input__country-code",children:p.dialCode}),a.jsx("span",{className:"mds-phone-input__country-chevron",children:a.jsx(qe,{size:24})}),u&&a.jsx("span",{className:"mds-phone-input__error-icon",children:a.jsx(Re,{size:24,style:{color:"var(--color-negative)"}})})]}),d&&a.jsxs("div",{ref:Te,className:"mds-phone-input__country-panel",role:"presentation",children:[a.jsxs("div",{className:"mds-phone-input__country-search",children:[a.jsx("input",{ref:B,type:"text",className:"mds-phone-input__country-search-input",value:x,onChange:Ee,onKeyDown:we,placeholder:p.dialCode,"aria-label":"Search countries","aria-controls":y,"aria-activedescendant":r>=0?`${y}-option-${r}`:void 0}),a.jsx("button",{type:"button",className:"mds-phone-input__country-close",tabIndex:-1,onClick:s,"aria-label":"Close dropdown",children:a.jsx(De,{size:24})})]}),a.jsxs("ul",{id:y,className:"mds-phone-input__country-options",role:"listbox",children:[c.map((e,o)=>a.jsx("li",{role:"presentation",children:a.jsxs("button",{ref:Ae=>{M.current[o]=Ae},id:`${y}-option-${o}`,type:"button",role:"option",className:"mds-phone-input__country-option","aria-selected":e.code===v,"data-selected":e.code===v||void 0,"data-highlighted":o===r||void 0,onClick:()=>U(e),children:[e.dialCode," ",e.code]})},e.code)),c.length===0&&a.jsx("li",{className:"mds-phone-input__country-empty",children:"No results"})]})]})]}),a.jsx("div",{className:"mds-phone-input__input-wrapper",children:a.jsx("input",{ref:ye,id:j,name:be,type:"tel",className:"mds-phone-input__input",value:Ne,onChange:_e,placeholder:h,disabled:t,"aria-invalid":u||void 0,"aria-describedby":F?G:void 0})})]}),F&&a.jsx("p",{className:"mds-phone-input__helper",id:G,children:z?g:V})]})});l.displayName="PhoneInput";l.__docgenInfo={description:"",methods:[],displayName:"PhoneInput",props:{label:{required:!1,tsType:{name:"string"},description:"Label text displayed above the input",defaultValue:{value:"'Phone Number'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder for the phone number field",defaultValue:{value:"'Enter phone number'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the field is disabled",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Show error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error message text"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the field"},value:{required:!1,tsType:{name:"string"},description:"Phone number value (controlled)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default phone number value (uncontrolled)",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(phoneNumber: string) => void",signature:{arguments:[{type:{name:"string"},name:"phoneNumber"}],return:{name:"void"}}},description:"Called when the phone number changes"},country:{required:!1,tsType:{name:"string"},description:"Selected country ISO code (controlled)"},defaultCountry:{required:!1,tsType:{name:"string"},description:"Default country ISO code",defaultValue:{value:"'US'",computed:!1}},onCountryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(country: CountryOption) => void",signature:{arguments:[{type:{name:"CountryOption"},name:"country"}],return:{name:"void"}}},description:"Called when the country selection changes"},countries:{required:!1,tsType:{name:"Array",elements:[{name:"CountryOption"}],raw:"CountryOption[]"},description:"Available country options",defaultValue:{value:`[
  { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dialCode: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'IT', dialCode: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: 'ES', dialCode: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: 'NL', dialCode: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'BE', dialCode: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: 'PT', dialCode: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: 'CH', dialCode: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: 'AT', dialCode: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: 'IE', dialCode: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: 'SE', dialCode: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: 'NO', dialCode: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: 'DK', dialCode: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: 'FI', dialCode: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: 'PL', dialCode: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: 'GR', dialCode: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: 'BR', dialCode: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'MX', dialCode: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'AR', dialCode: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: 'CL', dialCode: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: 'CO', dialCode: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'CN', dialCode: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'JP', dialCode: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'KR', dialCode: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: 'SG', dialCode: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: 'TH', dialCode: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: 'PH', dialCode: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'RU', dialCode: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: 'KZ', dialCode: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
  { code: 'ZA', dialCode: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: 'EG', dialCode: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: 'SA', dialCode: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'IL', dialCode: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: 'NZ', dialCode: '+64', flag: '🇳🇿', name: 'New Zealand' },
]`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},id:{required:!1,tsType:{name:"string"},description:"HTML id attribute"},name:{required:!1,tsType:{name:"string"},description:"HTML name attribute for form submission"}}};const He={title:"Components/PhoneInput",component:l,tags:["autodocs"],argTypes:{error:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"}},args:{label:"Phone Number",placeholder:"Enter phone number",required:!0}},S={},N={args:{defaultCountry:"GB",defaultValue:"7911123456"}},I={args:{helperText:"Include area code"}},P={args:{error:!0,errorText:"Please enter a valid phone number"}},T={args:{disabled:!0,defaultValue:"5551234567"}},_={render:f=>{const[h,w]=n.useState(""),[t,u]=n.useState("US");return a.jsxs("div",{children:[a.jsx(l,{...f,value:h,onChange:w,country:t,onCountryChange:g=>u(g.code)}),a.jsxs("p",{style:{marginTop:16,fontSize:14,color:"#666"},children:["Country: ",t," · Number: ",h]})]})}},E={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,maxWidth:496},children:[a.jsx(l,{label:"Phone Number",required:!0}),a.jsx(l,{label:"Phone Number",required:!0,defaultValue:"5551234567"}),a.jsx(l,{label:"Phone Number",required:!0,helperText:"Include area code"}),a.jsx(l,{label:"Phone Number",required:!0,error:!0,errorText:"Please enter a valid phone number"}),a.jsx(l,{label:"Phone Number",required:!0,disabled:!0,defaultValue:"5551234567"})]})};var W,Z,$;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var J,X,Q;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultCountry: 'GB',
    defaultValue: '7911123456'
  }
}`,...(Q=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,ee,ae;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    helperText: 'Include area code'
  }
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,oe,re;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    error: true,
    errorText: 'Please enter a valid phone number'
  }
}`,...(re=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var de,le,te;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '5551234567'
  }
}`,...(te=(le=T.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ie,ce;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => {
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('US');
    return <div>
        <PhoneInput {...args} value={phone} onChange={setPhone} country={country} onCountryChange={(c: CountryOption) => setCountry(c.code)} />
        <p style={{
        marginTop: 16,
        fontSize: 14,
        color: '#666'
      }}>
          Country: {country} · Number: {phone}
        </p>
      </div>;
  }
}`,...(ce=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,me,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    maxWidth: 496
  }}>
      <PhoneInput label="Phone Number" required />
      <PhoneInput label="Phone Number" required defaultValue="5551234567" />
      <PhoneInput label="Phone Number" required helperText="Include area code" />
      <PhoneInput label="Phone Number" required error errorText="Please enter a valid phone number" />
      <PhoneInput label="Phone Number" required disabled defaultValue="5551234567" />
    </div>
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Oe=["Default","WithDefaultCountry","WithHelperText","ErrorState","Disabled","Controlled","AllStates"];export{E as AllStates,_ as Controlled,S as Default,T as Disabled,P as ErrorState,N as WithDefaultCountry,I as WithHelperText,Oe as __namedExportsOrder,He as default};
