import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DwQS_Y10.js";import{M as be,L as we}from"./Launch-C1vCrhlx.js";import{C as _e}from"./Close-Cd8AO0St.js";import{C as Ne}from"./ChevronDown-DuL3N5CD.js";import{B as m}from"./Button-cuP-Pnvr.js";import{I as D}from"./IconButton-OXKGdn_c.js";import{G as ke,L as Ce}from"./Link-B9u-AwZE.js";import{E as Se}from"./Email-ChLKyF9C.js";const B=({item:a,className:n})=>{const p=a.href?"a":"button",l=a.href?{href:a.href,...a.external?{target:"_blank",rel:"noopener noreferrer"}:{}}:{type:"button"};return e.jsxs(p,{className:["mds-nav__item",n].filter(Boolean).join(" "),onClick:a.onClick,...l,children:[e.jsx("span",{className:"mds-nav__item-label",children:a.label}),a.external&&e.jsx(we,{size:24,className:"mds-nav__item-external","aria-hidden":!0})]})},Re=({category:a,isExpanded:n,onToggle:p,triggerId:l,panelId:g})=>e.jsxs("div",{className:"mds-nav__category","data-expanded":n||void 0,children:[e.jsxs("button",{type:"button",className:"mds-nav__category-trigger",id:l,"aria-expanded":n,"aria-controls":g,onClick:p,children:[e.jsx("span",{className:"mds-nav__category-title",children:a.title}),e.jsx(Ne,{size:24,className:"mds-nav__category-chevron","aria-hidden":!0})]}),e.jsx("div",{id:g,role:"region","aria-labelledby":l,className:"mds-nav__category-panel",hidden:!n,children:e.jsx("div",{className:"mds-nav__category-items",children:a.items.map((i,r)=>e.jsx(B,{item:i},r))})}),e.jsxs("div",{className:"mds-nav__category-static",children:[e.jsx("span",{className:"mds-nav__category-heading",children:a.title}),a.items.map((i,r)=>e.jsx(B,{item:i},r))]})]}),d=c.forwardRef(({colorway:a="default",logo:n,categories:p,hvaCta:l,hvaAction:g,languageSelect:i,regulatoryLinks:r,socialIcons:v,footerLogo:y,open:z,defaultOpen:de=!1,onOpenChange:x,className:me,...pe},ge)=>{const H=c.useId(),[ue,he]=c.useState(de),T=z!==void 0,t=T?z:ue,[fe,ve]=c.useState(new Set),ye=c.useCallback(()=>{const s=!t;T||he(s),x==null||x(s)},[t,T,x]),xe=c.useCallback(s=>{ve(o=>{const j=new Set(o);return j.has(s)?j.delete(s):j.add(s),j})},[]),je=(r==null?void 0:r.length)||v||y;return e.jsxs("nav",{ref:ge,className:["mds-nav",me].filter(Boolean).join(" "),"data-colorway":a,"data-open":t||void 0,...pe,children:[e.jsxs("div",{className:"mds-nav__header",children:[e.jsx("div",{className:"mds-nav__logo",children:n}),e.jsxs("div",{className:"mds-nav__ctas",children:[l&&e.jsx("div",{className:"mds-nav__header-cta",children:l}),i&&e.jsx("div",{className:"mds-nav__language-select",children:i}),e.jsx("button",{type:"button",className:"mds-nav__toggle","aria-expanded":t,"aria-label":t?"Close navigation":"Open navigation",onClick:ye,children:e.jsx("span",{className:"mds-nav__toggle-layer",children:t?e.jsx(_e,{size:24,"aria-hidden":!0}):e.jsx(be,{size:24,"aria-hidden":!0})})})]})]}),e.jsxs("div",{className:"mds-nav__panel","aria-hidden":!t,hidden:!t,children:[e.jsx("div",{className:"mds-nav__categories",children:p.map((s,o)=>e.jsx(Re,{category:s,isExpanded:fe.has(o),onToggle:()=>xe(o),triggerId:`${H}-cat-trigger-${o}`,panelId:`${H}-cat-panel-${o}`},o))}),g&&e.jsx("div",{className:"mds-nav__hva",children:g}),je&&e.jsxs("div",{className:"mds-nav__footer",children:[r&&r.length>0&&e.jsx("div",{className:"mds-nav__regulatory",children:r.map((s,o)=>e.jsx(B,{item:s,className:"mds-nav__regulatory-link"},o))}),(y||v)&&e.jsxs("div",{className:"mds-nav__footer-row",children:[y&&e.jsx("div",{className:"mds-nav__footer-logo",children:y}),v&&e.jsx("div",{className:"mds-nav__socials",children:v})]})]})]})]})});d.displayName="Navigation";d.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{colorway:{required:!1,tsType:{name:"union",raw:"'default' | 'dark' | 'transparent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'transparent'"}]},description:"Color scheme of the navigation",defaultValue:{value:"'default'",computed:!1}},logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Logo element displayed in the header"},categories:{required:!0,tsType:{name:"Array",elements:[{name:"NavCategoryData"}],raw:"NavCategoryData[]"},description:"Navigation categories with their items"},hvaCta:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional CTA button rendered in the header"},hvaAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Primary action button rendered inside the expanded panel"},languageSelect:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional language selector element"},regulatoryLinks:{required:!1,tsType:{name:"Array",elements:[{name:"NavItemData"}],raw:"NavItemData[]"},description:"Regulatory/legal links shown in the panel footer"},socialIcons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Social media icons group"},footerLogo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Smaller logo shown in the panel footer"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Initial open state for uncontrolled usage",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes"}}};const I=[{title:"Products",items:[{label:"Product Overview",href:"#"},{label:"Clinical Trials",href:"#"},{label:"Safety Data",href:"#"},{label:"Dosing Guide",href:"#"},{label:"Resources",href:"#"}]},{title:"Patients",items:[{label:"Getting Started",href:"#"},{label:"Support Programs",href:"#"},{label:"FAQs",href:"#"},{label:"Find a Doctor",href:"#"},{label:"Stories",href:"#"}]},{title:"Healthcare Providers",items:[{label:"Efficacy Data",href:"#"},{label:"Mechanism of Action",href:"#"},{label:"Prescribing Info",href:"#"},{label:"Peer Resources",href:"#"},{label:"Webinars",href:"#"}]},{title:"About",items:[{label:"Our Mission",href:"#"},{label:"Leadership",href:"#"},{label:"Newsroom",href:"#"},{label:"Careers",href:"#"},{label:"Contact Us",href:"#"}]}],u=[{label:"Prescribing Information",href:"#",external:!0},{label:"Patient Information",href:"#",external:!0},{label:"Use(s)",href:"#"},{label:"Important Safety Information",href:"#"},{label:"Healthcare Professionals",href:"#"}],A=()=>e.jsx("div",{style:{width:112,height:48,display:"flex",alignItems:"center",fontFamily:"var(--font-family-sans)",fontWeight:"var(--font-weight-bold)",fontSize:20,color:"var(--color-primary)",letterSpacing:"-0.5px"},children:"Meraki"}),h=()=>e.jsx("div",{style:{width:88,height:38,display:"flex",alignItems:"center",fontFamily:"var(--font-family-sans)",fontWeight:"var(--font-weight-bold)",fontSize:16,color:"var(--color-primary)",letterSpacing:"-0.5px"},children:"Meraki"}),f=({inverted:a=!1})=>e.jsxs(e.Fragment,{children:[e.jsx(D,{variant:"secondary",size:"sm",inverted:a,icon:e.jsx(ke,{size:20}),"aria-label":"Facebook"}),e.jsx(D,{variant:"secondary",size:"sm",inverted:a,icon:e.jsx(Ce,{size:20}),"aria-label":"Instagram"}),e.jsx(D,{variant:"secondary",size:"sm",inverted:a,icon:e.jsx(Se,{size:20}),"aria-label":"X"})]}),Fe={title:"Components/Navigation",component:d,tags:["autodocs"],argTypes:{colorway:{control:"select",options:["default","dark","transparent"],description:"Color scheme of the navigation"},open:{control:"boolean",description:"Controlled open state of the navigation panel"}},args:{colorway:"default",logo:e.jsx(A,{}),categories:I},parameters:{layout:"fullscreen"}},b={args:{open:!1}},w={args:{open:!0,hvaAction:e.jsx(m,{variant:"primary",style:{width:"100%"},children:"High Value Action"}),regulatoryLinks:u,footerLogo:e.jsx(h,{}),socialIcons:e.jsx(f,{})}},_={args:{open:!0,hvaCta:e.jsx(m,{variant:"secondary",size:"md",children:"HVA Button"}),hvaAction:e.jsx(m,{variant:"primary",style:{width:"100%"},children:"High Value Action"}),regulatoryLinks:u,footerLogo:e.jsx(h,{}),socialIcons:e.jsx(f,{})}},N={args:{colorway:"dark",open:!1},parameters:{backgrounds:{default:"dark"}}},k={args:{colorway:"dark",open:!0,hvaAction:e.jsx(m,{variant:"primary",style:{width:"100%"},children:"High Value Action"}),regulatoryLinks:u,footerLogo:e.jsx(h,{}),socialIcons:e.jsx(f,{inverted:!0})},parameters:{backgrounds:{default:"dark"}}},C={args:{colorway:"transparent",open:!1}},S={args:{colorway:"transparent",open:!0,hvaAction:e.jsx(m,{variant:"primary",style:{width:"100%"},children:"High Value Action"}),regulatoryLinks:u,footerLogo:e.jsx(h,{}),socialIcons:e.jsx(f,{})}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{padding:"16px 24px",margin:0,fontFamily:"var(--font-family-sans)"},children:"Default (Closed)"}),e.jsx(d,{colorway:"default",logo:e.jsx(A,{}),categories:I})]}),e.jsxs("div",{style:{background:"#000"},children:[e.jsx("h3",{style:{padding:"16px 24px",margin:0,color:"#fff",fontFamily:"var(--font-family-sans)"},children:"Dark (Closed)"}),e.jsx(d,{colorway:"dark",logo:e.jsx(A,{}),categories:I})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{padding:"16px 24px",margin:0,fontFamily:"var(--font-family-sans)"},children:"Transparent (Closed)"}),e.jsx(d,{colorway:"transparent",logo:e.jsx(A,{}),categories:I})]})]})},L={args:{open:!0,hvaAction:e.jsx(m,{variant:"primary",style:{width:"100%"},children:"High Value Action"}),regulatoryLinks:u,footerLogo:e.jsx(h,{}),socialIcons:e.jsx(f,{})},parameters:{docs:{description:{story:"Resize the browser window to see the navigation switch between vertical (mobile/tablet, < 1024px) and horizontal (desktop, >= 1024px) layouts."}}}};var V,F,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var P,O,E;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    open: true,
    hvaAction: <Button variant="primary" style={{
      width: '100%'
    }}>
        High Value Action
      </Button>,
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />
  }
}`,...(E=(O=w.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var M,W,G;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    open: true,
    hvaCta: <Button variant="secondary" size="md">
        HVA Button
      </Button>,
    hvaAction: <Button variant="primary" style={{
      width: '100%'
    }}>
        High Value Action
      </Button>,
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />
  }
}`,...(G=(W=_.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var $,U,Q;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    colorway: 'dark',
    open: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Q=(U=N.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var X,J,K;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    colorway: 'dark',
    open: true,
    hvaAction: <Button variant="primary" style={{
      width: '100%'
    }}>
        High Value Action
      </Button>,
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons inverted />
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    colorway: 'transparent',
    open: false
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    colorway: 'transparent',
    open: true,
    hvaAction: <Button variant="primary" style={{
      width: '100%'
    }}>
        High Value Action
      </Button>,
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />
  }
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,te,ne;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <div>
        <h3 style={{
        padding: '16px 24px',
        margin: 0,
        fontFamily: 'var(--font-family-sans)'
      }}>
          Default (Closed)
        </h3>
        <Navigation colorway="default" logo={<SampleLogo />} categories={sampleCategories} />
      </div>
      <div style={{
      background: '#000'
    }}>
        <h3 style={{
        padding: '16px 24px',
        margin: 0,
        color: '#fff',
        fontFamily: 'var(--font-family-sans)'
      }}>
          Dark (Closed)
        </h3>
        <Navigation colorway="dark" logo={<SampleLogo />} categories={sampleCategories} />
      </div>
      <div>
        <h3 style={{
        padding: '16px 24px',
        margin: 0,
        fontFamily: 'var(--font-family-sans)'
      }}>
          Transparent (Closed)
        </h3>
        <Navigation colorway="transparent" logo={<SampleLogo />} categories={sampleCategories} />
      </div>
    </div>
}`,...(ne=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ie,ce;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    open: true,
    hvaAction: <Button variant="primary" style={{
      width: '100%'
    }}>
        High Value Action
      </Button>,
    regulatoryLinks: sampleRegulatoryLinks,
    footerLogo: <SmallLogo />,
    socialIcons: <SocialIcons />
  },
  parameters: {
    docs: {
      description: {
        story: 'Resize the browser window to see the navigation switch between vertical (mobile/tablet, < 1024px) and horizontal (desktop, >= 1024px) layouts.'
      }
    }
  }
}`,...(ce=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const qe=["DefaultClosed","DefaultOpen","WithHeaderCta","DarkClosed","DarkOpen","TransparentClosed","TransparentOpen","AllColorways","Responsive"];export{R as AllColorways,N as DarkClosed,k as DarkOpen,b as DefaultClosed,w as DefaultOpen,L as Responsive,C as TransparentClosed,S as TransparentOpen,_ as WithHeaderCta,qe as __namedExportsOrder,Fe as default};
