import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./index-DwQS_Y10.js";import{S as C}from"./Search-DeXFEy0F.js";import{C as me}from"./Close-Cd8AO0St.js";import{F as pe}from"./Filter-CSVY8_Oi.js";import{M as he}from"./MicNone-DlVdKOB3.js";const fe={small:16,base:24,large:24},ge={small:16,base:20,large:24},a=re.forwardRef(({variant:v="search",size:r="base",showSearchIcon:o=!0,showMicrophoneButton:t=!1,showFilterButton:S=!1,showCloseButton:w=!1,onClear:oe,onMicrophoneClick:te,onFilterClick:ne,onSearchClick:ie,className:z,disabled:s=!1,placeholder:le="Search",...ce},ue)=>{const x=fe[r],b=ge[r];if(v==="icon")return e.jsx("button",{type:"button",className:["mds-search-field-icon",`mds-search-field-icon--${r}`,z].filter(Boolean).join(" "),disabled:s,onClick:ie,"aria-label":"Search","data-disabled":s||void 0,children:e.jsx(C,{size:x})});const de=t||S||w;return e.jsxs("div",{className:["mds-search-field",`mds-search-field--${r}`,z].filter(Boolean).join(" "),"data-disabled":s||void 0,children:[o&&e.jsx("span",{className:"mds-search-field__icon",children:e.jsx(C,{size:x})}),e.jsx("input",{ref:ue,type:"search",className:"mds-search-field__input",placeholder:le,disabled:s,...ce}),de&&e.jsxs("div",{className:"mds-search-field__actions",children:[t&&e.jsx("button",{type:"button",className:"mds-search-field__action-btn",onClick:te,disabled:s,"aria-label":"Voice search",children:e.jsx(he,{size:b})}),S&&e.jsx("button",{type:"button",className:"mds-search-field__action-btn",onClick:ne,disabled:s,"aria-label":"Filter",children:e.jsx(pe,{size:b})}),w&&e.jsx("button",{type:"button",className:"mds-search-field__action-btn",onClick:oe,disabled:s,"aria-label":"Clear search",children:e.jsx(me,{size:b})})]})]})});a.displayName="SearchField";a.__docgenInfo={description:'SearchField provides a pill-shaped search input (`variant="search"`) or a\ncompact circular search button (`variant="icon"`).',methods:[],displayName:"SearchField",props:{variant:{required:!1,tsType:{name:"union",raw:"'search' | 'icon'",elements:[{name:"literal",value:"'search'"},{name:"literal",value:"'icon'"}]},description:'Visual variant — `"search"` renders a full input bar, `"icon"` renders a circular button',defaultValue:{value:"'search'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'base' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'base'"},{name:"literal",value:"'large'"}]},description:"Component size",defaultValue:{value:"'base'",computed:!1}},showSearchIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading search icon (search variant)",defaultValue:{value:"true",computed:!1}},showMicrophoneButton:{required:!1,tsType:{name:"boolean"},description:"Show the microphone action button",defaultValue:{value:"false",computed:!1}},showFilterButton:{required:!1,tsType:{name:"boolean"},description:"Show the filter action button",defaultValue:{value:"false",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show the close / clear action button",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the close / clear button is clicked"},onMicrophoneClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the microphone button is clicked"},onFilterClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the filter button is clicked"},onSearchClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the icon button is clicked (icon variant only)"},disabled:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Search'",computed:!1},required:!1}},composes:["Omit"]};const Ce={title:"Components/SearchField",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["search","icon"]},size:{control:"select",options:["small","base","large"]},disabled:{control:"boolean"},showSearchIcon:{control:"boolean"},showMicrophoneButton:{control:"boolean"},showFilterButton:{control:"boolean"},showCloseButton:{control:"boolean"}},args:{variant:"search",size:"base",placeholder:"Search",showSearchIcon:!0,showMicrophoneButton:!0,showFilterButton:!0,showCloseButton:!0}},n={},i={args:{size:"large"}},l={args:{size:"small",showMicrophoneButton:!1,showFilterButton:!1,showCloseButton:!1}},c={args:{disabled:!0}},u={args:{variant:"icon",size:"base"}},d={args:{variant:"icon",size:"large"}},m={args:{variant:"icon",size:"small"}},p={args:{variant:"icon",size:"base",disabled:!0}},h={render:v=>{const[r,o]=re.useState("");return e.jsx(a,{...v,value:r,onChange:t=>o(t.target.value),onClear:()=>o("")})}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:650},children:[e.jsx(a,{size:"large",showMicrophoneButton:!0,showFilterButton:!0,showCloseButton:!0}),e.jsx(a,{size:"base",showMicrophoneButton:!0,showFilterButton:!0,showCloseButton:!0}),e.jsx(a,{size:"small"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{variant:"icon",size:"large"}),e.jsx(a,{variant:"icon",size:"base"}),e.jsx(a,{variant:"icon",size:"small"})]})};var y,j,B;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var F,I,V;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(V=(I=i.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,N,q;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    showMicrophoneButton: false,
    showFilterButton: false,
    showCloseButton: false
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var T,k,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var D,A,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'base'
  }
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var O,L,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'large'
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var W,Z,$;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'small'
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var H,G,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'base',
    disabled: true
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,P,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <SearchField {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    maxWidth: 650
  }}>
      <SearchField size="large" showMicrophoneButton showFilterButton showCloseButton />
      <SearchField size="base" showMicrophoneButton showFilterButton showCloseButton />
      <SearchField size="small" />
    </div>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ae,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <SearchField variant="icon" size="large" />
      <SearchField variant="icon" size="base" />
      <SearchField variant="icon" size="small" />
    </div>
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const ye=["Default","Large","Small","Disabled","IconVariant","IconVariantLarge","IconVariantSmall","IconVariantDisabled","Controlled","AllSizes","AllIconSizes"];export{g as AllIconSizes,f as AllSizes,h as Controlled,n as Default,c as Disabled,u as IconVariant,p as IconVariantDisabled,d as IconVariantLarge,m as IconVariantSmall,i as Large,l as Small,ye as __namedExportsOrder,Ce as default};
