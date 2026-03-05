import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DwQS_Y10.js";import{C as fe}from"./ChevronDownWide-DlasZ6Gr.js";import{P as d,a as be,S as ve,D as he}from"./Share-Df-fa0Mv.js";import{E as xe}from"./Email-ChLKyF9C.js";const n=r.forwardRef(({children:oe,size:re="md",inverted:le=!1,disabled:g=!1,leftIcon:w,options:f=[],onClick:ie,onOptionSelect:c,className:de,...ce},pe)=>{const[l,L]=r.useState(!1),[b,i]=r.useState(-1),R=r.useRef(null),p=r.useRef(null),C=r.useRef([]),u=r.useCallback(()=>{L(!1),i(-1)},[]),ue=r.useCallback(()=>{g||L(t=>(t||i(0),!t))},[g]);r.useEffect(()=>{if(!l)return;const t=o=>{var v,m;const s=o.target;!((v=R.current)!=null&&v.contains(s))&&!((m=p.current)!=null&&m.contains(s))&&u()};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[l,u]),r.useEffect(()=>{var t;l&&b>=0&&((t=C.current[b])==null||t.focus())},[l,b]);const me=t=>{var o;switch(t.key){case"Enter":case" ":case"ArrowDown":t.preventDefault(),l||(L(!0),i(0));break;case"Escape":l&&(t.preventDefault(),u(),(o=p.current)==null||o.focus());break}},ge=(t,o)=>{var s,v;switch(t.key){case"ArrowDown":t.preventDefault(),i(m=>Math.min(m+1,f.length-1));break;case"ArrowUp":t.preventDefault(),i(m=>Math.max(m-1,0));break;case"Enter":case" ":t.preventDefault(),c==null||c(f[o]),u(),(s=p.current)==null||s.focus();break;case"Escape":t.preventDefault(),u(),(v=p.current)==null||v.focus();break;case"Home":t.preventDefault(),i(0);break;case"End":t.preventDefault(),i(f.length-1);break}};return e.jsxs("div",{ref:pe,className:["mds-split-btn",de].filter(Boolean).join(" "),"data-size":re,"data-inverted":le||void 0,"data-disabled":g||void 0,...ce,children:[e.jsx("button",{type:"button",className:"mds-split-btn__action",disabled:g,onClick:ie,children:e.jsxs("span",{className:"mds-split-btn__state-layer",children:[w&&e.jsx("span",{className:"mds-split-btn__icon",children:w}),e.jsx("span",{className:"mds-split-btn__label",children:oe})]})}),e.jsx("button",{ref:p,type:"button",className:"mds-split-btn__toggle",disabled:g,"aria-haspopup":"listbox","aria-expanded":l,onClick:ue,onKeyDown:me,children:e.jsx("span",{className:"mds-split-btn__toggle-layer",children:e.jsx(fe,{size:24,style:{color:"inherit"}})})}),l&&f.length>0&&e.jsx("div",{ref:R,className:"mds-split-btn__menu",role:"listbox",children:f.map((t,o)=>e.jsx("button",{ref:s=>{C.current[o]=s},type:"button",role:"option",className:"mds-split-btn__option","aria-selected":o===b,"data-highlighted":o===b||void 0,onClick:()=>{var s;c==null||c(t),u(),(s=p.current)==null||s.focus()},onKeyDown:s=>ge(s,o),children:t.label??t.value},t.value))})]})});n.displayName="SplitButton";n.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button label text"},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant — maps to 40 px (md) or 52 px (lg) height",defaultValue:{value:"'md'",computed:!1}},inverted:{required:!1,tsType:{name:"boolean"},description:"Inverted color scheme for use on dark backgrounds",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the entire component",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon displayed before the label"},options:{required:!1,tsType:{name:"Array",elements:[{name:"SplitButtonOption"}],raw:"SplitButtonOption[]"},description:"Dropdown options shown when the toggle is activated",defaultValue:{value:"[]",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Called when the main action button is clicked"},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SplitButtonOption) => void",signature:{arguments:[{type:{name:"SplitButtonOption"},name:"option"}],return:{name:"void"}}},description:"Called when a dropdown option is selected"}},composes:["Omit"]};const D={None:void 0,PhoneCall:e.jsx(d,{size:24}),Download:e.jsx(he,{size:24}),Email:e.jsx(xe,{size:24}),Share:e.jsx(ve,{size:24}),Settings:e.jsx(be,{size:24})},a=[{value:"action-1",label:"Secondary Action 1"},{value:"action-2",label:"Secondary Action 2"},{value:"action-3",label:"Secondary Action 3"},{value:"action-4",label:"Secondary Action 4"},{value:"action-5",label:"Secondary Action 5"}],ke={title:"Components/SplitButton",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","lg"],description:"Button size — maps to 40 px / 52 px height"},inverted:{control:"boolean",description:"Inverted color scheme for use on dark backgrounds"},disabled:{control:"boolean"},children:{control:"text"},leftIcon:{control:"select",options:Object.keys(D),mapping:D,description:"Icon displayed before the label"}},args:{children:"Button Label",size:"md",inverted:!1,disabled:!1,options:a}},h={},x={args:{leftIcon:"PhoneCall",children:"Button Label"}},B={args:{size:"lg"}},y={args:{size:"lg",leftIcon:"PhoneCall"}},I={args:{disabled:!0}},S={args:{inverted:!0},parameters:{backgrounds:{default:"dark"}}},j={args:{inverted:!0,leftIcon:"PhoneCall"},parameters:{backgrounds:{default:"dark"}}},k={args:{inverted:!0,disabled:!0},parameters:{backgrounds:{default:"dark"}}},z={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{options:a,children:"Button Label"}),e.jsx(n,{options:a,leftIcon:e.jsx(d,{size:24}),children:"Button Label"})]}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{size:"lg",options:a,children:"Button Label"}),e.jsx(n,{size:"lg",options:a,leftIcon:e.jsx(d,{size:24}),children:"Button Label"})]}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{disabled:!0,options:a,children:"Button Label"}),e.jsx(n,{disabled:!0,options:a,leftIcon:e.jsx(d,{size:24}),children:"Button Label"})]}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",backgroundColor:"#00003a",padding:24,borderRadius:8},children:[e.jsx(n,{inverted:!0,options:a,children:"Button Label"}),e.jsx(n,{inverted:!0,options:a,leftIcon:e.jsx(d,{size:24}),children:"Button Label"})]}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",backgroundColor:"#00003a",padding:24,borderRadius:8},children:[e.jsx(n,{inverted:!0,size:"lg",options:a,children:"Button Label"}),e.jsx(n,{inverted:!0,size:"lg",options:a,leftIcon:e.jsx(d,{size:24}),children:"Button Label"})]}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",backgroundColor:"#00003a",padding:24,borderRadius:8},children:[e.jsx(n,{inverted:!0,disabled:!0,options:a,children:"Button Label"}),e.jsx(n,{inverted:!0,disabled:!0,options:a,leftIcon:e.jsx(d,{size:24}),children:"Button Label"})]})]})};var E,_,N;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(N=(_=h.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var O,P,T;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    leftIcon: 'PhoneCall' as unknown as React.ReactNode,
    children: 'Button Label'
  }
}`,...(T=(P=x.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var A,M,q;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(q=(M=B.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var W,V,H;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    leftIcon: 'PhoneCall' as unknown as React.ReactNode
  }
}`,...(H=(V=y.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var K,U,F;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(F=(U=I.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var G,J,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    inverted: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    inverted: true,
    leftIcon: 'PhoneCall' as unknown as React.ReactNode
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    inverted: true,
    disabled: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
        <SplitButton options={sampleOptions}>Button Label</SplitButton>
        <SplitButton options={sampleOptions} leftIcon={<PhoneCall size={24} />}>
          Button Label
        </SplitButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
        <SplitButton size="lg" options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton size="lg" options={sampleOptions} leftIcon={<PhoneCall size={24} />}>
          Button Label
        </SplitButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
        <SplitButton disabled options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton disabled options={sampleOptions} leftIcon={<PhoneCall size={24} />}>
          Button Label
        </SplitButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      backgroundColor: '#00003a',
      padding: 24,
      borderRadius: 8
    }}>
        <SplitButton inverted options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton inverted options={sampleOptions} leftIcon={<PhoneCall size={24} />}>
          Button Label
        </SplitButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      backgroundColor: '#00003a',
      padding: 24,
      borderRadius: 8
    }}>
        <SplitButton inverted size="lg" options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton inverted size="lg" options={sampleOptions} leftIcon={<PhoneCall size={24} />}>
          Button Label
        </SplitButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      backgroundColor: '#00003a',
      padding: 24,
      borderRadius: 8
    }}>
        <SplitButton inverted disabled options={sampleOptions}>
          Button Label
        </SplitButton>
        <SplitButton inverted disabled options={sampleOptions} leftIcon={<PhoneCall size={24} />}>
          Button Label
        </SplitButton>
      </div>
    </div>
}`,...(se=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const ze=["Default","WithIcon","Large","LargeWithIcon","Disabled","Inverted","InvertedWithIcon","InvertedDisabled","AllVariants"];export{z as AllVariants,h as Default,I as Disabled,S as Inverted,k as InvertedDisabled,j as InvertedWithIcon,B as Large,y as LargeWithIcon,x as WithIcon,ze as __namedExportsOrder,ke as default};
