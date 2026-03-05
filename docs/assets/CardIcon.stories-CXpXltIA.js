import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DwQS_Y10.js";import{B as r}from"./Button-cuP-Pnvr.js";import{M as C,D as R}from"./Doctor-DVqd2EJl.js";import{C as S}from"./Calendar-BnVuUUuN.js";const a=v.forwardRef(({icon:i,headline:c,className:I,children:d,..._},N)=>e.jsxs("div",{ref:N,className:["mds-card-icon",I].filter(Boolean).join(" "),..._,children:[e.jsxs("div",{className:"mds-card-icon__header",children:[i&&e.jsx("div",{className:"mds-card-icon__icon",children:i}),c&&e.jsx("p",{className:"mds-card-icon__headline",children:c})]}),d&&e.jsx("div",{className:"mds-card-icon__actions",children:d})]}));a.displayName="CardIcon";a.__docgenInfo={description:"",methods:[],displayName:"CardIcon",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element rendered at the top of the card (48x48 container)"},headline:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Headline text displayed below the icon"}}};const b={title:"Components/CardIcon",component:a,tags:["autodocs"],args:{icon:e.jsx(C,{size:48}),headline:"Headline Here"}},n={args:{children:e.jsx(r,{children:"Button Label"})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Primary Action"}),e.jsx(r,{variant:"secondary",children:"Secondary Action"})]})}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{icon:e.jsx(C,{size:48}),headline:"Medications",style:{width:250},children:e.jsx(r,{children:"View All"})}),e.jsx(a,{icon:e.jsx(R,{size:48}),headline:"Find a Doctor",style:{width:250},children:e.jsx(r,{children:"Search"})}),e.jsx(a,{icon:e.jsx(S,{size:48}),headline:"Appointments",style:{width:250},children:e.jsx(r,{children:"Schedule"})})]})},s={args:{children:void 0}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Button>Button Label</Button>
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button>Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
      </>
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,j,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <CardIcon icon={<Medication size={48} />} headline="Medications" style={{
      width: 250
    }}>
        <Button>View All</Button>
      </CardIcon>
      <CardIcon icon={<Doctor size={48} />} headline="Find a Doctor" style={{
      width: 250
    }}>
        <Button>Search</Button>
      </CardIcon>
      <CardIcon icon={<Calendar size={48} />} headline="Appointments" style={{
      width: 250
    }}>
        <Button>Schedule</Button>
      </CardIcon>
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,g,w;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: undefined
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const E=["Default","WithMultipleButtons","DifferentIcons","WithoutButton"];export{n as Default,o as DifferentIcons,t as WithMultipleButtons,s as WithoutButton,E as __namedExportsOrder,b as default};
