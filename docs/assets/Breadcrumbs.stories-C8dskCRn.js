import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DwQS_Y10.js";import{C as j}from"./ChevronLeft-DWpeAgZy.js";const a=v.forwardRef(({items:s=[],maxItems:x=4,showBack:M=!1,backLabel:L="Back",onBack:z,backHref:g,className:D,...U},W)=>{const[G,H]=v.useState(!1),J=v.useCallback(()=>{H(!0)},[]),u=r=>r.href?e.jsx("a",{className:"mds-breadcrumbs__link",href:r.href,children:r.label}):r.onClick?e.jsx("button",{type:"button",className:"mds-breadcrumbs__link",onClick:r.onClick,children:r.label}):e.jsx("span",{className:"mds-breadcrumbs__link",children:r.label}),n=r=>e.jsx("span",{className:"mds-breadcrumbs__separator","aria-hidden":"true",children:"/"},r),K=()=>{if(s.length===0)return null;const r=s.slice(0,-1),k=s[s.length-1];if(!G&&x>0&&s.length>x){const p=r[0],l=r.slice(-1),t=[];return t.push(e.jsx("li",{children:u(p)},"first"),e.jsx("li",{children:n("s-first")},"sep-first"),e.jsx("li",{children:e.jsx("button",{type:"button",className:"mds-breadcrumbs__ellipsis",onClick:J,"aria-label":"Show all breadcrumbs",children:"…"})},"ellipsis"),e.jsx("li",{children:n("s-ellipsis")},"sep-ellipsis")),l.forEach((X,f)=>{t.push(e.jsx("li",{children:u(X)},`tail-${f}`),e.jsx("li",{children:n(`s-tail-${f}`)},`sep-tail-${f}`))}),t.push(e.jsx("li",{"aria-current":"page",children:e.jsx("span",{className:"mds-breadcrumbs__current",children:k.label})},"current")),t}const h=[];return r.forEach((p,l)=>{h.push(e.jsx("li",{children:u(p)},`item-${l}`),e.jsx("li",{children:n(`s-${l}`)},`sep-${l}`))}),h.push(e.jsx("li",{"aria-current":"page",children:e.jsx("span",{className:"mds-breadcrumbs__current",children:k.label})},"current")),h},Q=g?e.jsxs("a",{className:"mds-breadcrumbs__back",href:g,children:[e.jsx("span",{className:"mds-breadcrumbs__back-icon",children:e.jsx(j,{size:24})}),e.jsx("span",{className:"mds-breadcrumbs__back-label",children:e.jsx("span",{className:"mds-breadcrumbs__back-text",children:L})})]}):e.jsxs("button",{type:"button",className:"mds-breadcrumbs__back",onClick:z,children:[e.jsx("span",{className:"mds-breadcrumbs__back-icon",children:e.jsx(j,{size:24})}),e.jsx("span",{className:"mds-breadcrumbs__back-label",children:e.jsx("span",{className:"mds-breadcrumbs__back-text",children:L})})]});return e.jsx("nav",{ref:W,"aria-label":"Breadcrumb",className:["mds-breadcrumbs",D].filter(Boolean).join(" "),...U,children:M?Q:e.jsx("ol",{style:{display:"contents",listStyle:"none",margin:0,padding:0},children:K()})})});a.displayName="Breadcrumbs";a.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Ordered list of breadcrumb items; the last item is treated as the current page",defaultValue:{value:"[]",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:`Maximum visible items before the middle levels are collapsed behind "…".
Set to 0 to disable collapsing. Minimum effective value is 2
(first + current page).
@default 4`,defaultValue:{value:"4",computed:!1}},showBack:{required:!1,tsType:{name:"boolean"},description:'When true, renders a "Back" return link instead of the full path',defaultValue:{value:"false",computed:!1}},backLabel:{required:!1,tsType:{name:"string"},description:"Label for the back button",defaultValue:{value:"'Back'",computed:!1}},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the back button"},backHref:{required:!1,tsType:{name:"string"},description:"Back link URL — rendered as an <a> when provided"}}};const ae={title:"Components/Breadcrumbs",component:a,tags:["autodocs"],argTypes:{showBack:{control:"boolean",description:'Render a "Back" return link instead of the full path'},backLabel:{control:"text",description:"Label for the back button"},maxItems:{control:{type:"number",min:0,max:10},description:'Maximum visible items before collapsing behind "…". Set 0 to disable.'}},args:{showBack:!1,maxItems:4}},c={args:{showBack:!0,backLabel:"Back"}},i={args:{items:[{label:"First Level",href:"#"},{label:"Current Page"}]}},d={args:{items:[{label:"First Level",href:"#"},{label:"Second Level",href:"#"},{label:"Current Page"}]}},o={args:{items:[{label:"First Level",href:"#"},{label:"Second Level",href:"#"},{label:"Third Level",href:"#"},{label:"Current Page"}]}},m={name:"3+ Levels (collapsed)",args:{items:[{label:"First Level",href:"#"},{label:"Second Level",href:"#"},{label:"Third Level",href:"#"},{label:"Fourth Level",href:"#"},{label:"Current Page"}],maxItems:4}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(a,{showBack:!0,backLabel:"Back"}),e.jsx(a,{items:[{label:"First Level",href:"#"},{label:"Current Page"}]}),e.jsx(a,{items:[{label:"First Level",href:"#"},{label:"Second Level",href:"#"},{label:"Current Page"}]}),e.jsx(a,{items:[{label:"First Level",href:"#"},{label:"Second Level",href:"#"},{label:"Third Level",href:"#"},{label:"Current Page"}]}),e.jsx(a,{items:[{label:"First Level",href:"#"},{label:"Second Level",href:"#"},{label:"Third Level",href:"#"},{label:"Fourth Level",href:"#"},{label:"Current Page"}],maxItems:4})]})};var _,B,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showBack: true,
    backLabel: 'Back'
  }
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var S,y,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]
  }
}`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var T,N,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Second Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var w,I,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Second Level',
      href: '#'
    }, {
      label: 'Third Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]
  }
}`,...(E=(I=o.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var q,R,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '3+ Levels (collapsed)',
  args: {
    items: [{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Second Level',
      href: '#'
    }, {
      label: 'Third Level',
      href: '#'
    }, {
      label: 'Fourth Level',
      href: '#'
    }, {
      label: 'Current Page'
    }],
    maxItems: 4
  }
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var $,O,A;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}>
      <Breadcrumbs showBack backLabel="Back" />
      <Breadcrumbs items={[{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]} />
      <Breadcrumbs items={[{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Second Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]} />
      <Breadcrumbs items={[{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Second Level',
      href: '#'
    }, {
      label: 'Third Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]} />
      <Breadcrumbs items={[{
      label: 'First Level',
      href: '#'
    }, {
      label: 'Second Level',
      href: '#'
    }, {
      label: 'Third Level',
      href: '#'
    }, {
      label: 'Fourth Level',
      href: '#'
    }, {
      label: 'Current Page'
    }]} maxItems={4} />
    </div>
}`,...(A=(O=b.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const se=["Return","OneLevel","TwoLevel","ThreeLevel","Collapsed","AllVariants"];export{b as AllVariants,m as Collapsed,i as OneLevel,c as Return,o as ThreeLevel,d as TwoLevel,se as __namedExportsOrder,ae as default};
