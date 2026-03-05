import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-DwQS_Y10.js";const o=E.forwardRef(({title:r="References",items:b=[],className:A,children:D,..._},y)=>e.jsxs("div",{ref:y,className:["mds-references",A].filter(Boolean).join(" "),..._,children:[r&&e.jsx("p",{className:"mds-references__title",children:r}),D??b.map((i,T)=>e.jsxs("div",{className:"mds-references__item",children:[e.jsx("span",{className:"mds-references__number",children:i.number}),e.jsx("p",{className:"mds-references__text",children:i.text})]},T))]}));o.displayName="References";o.__docgenInfo={description:"",methods:[],displayName:"References",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Heading rendered above the list of references",defaultValue:{value:"'References'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"ReferenceItem"}],raw:"ReferenceItem[]"},description:"Ordered list of citation items",defaultValue:{value:"[]",computed:!1}}}};const c=[{number:1,text:"Anderson, Annaliesa Interview by The Beautiful Truth Group. March 4, 2022."},{number:2,text:"Hammond, Jennifer. Interviewed by Kate Silver. April 11, 2022."},{number:3,text:"Allerton, Charlotte. Interview by The Beautiful Truth Group. March 9, 2022."},{number:4,text:"Drugs, Devices, and the FDA: Part 1: An Overview of Approval Processes for Drugs. JACC: Basic to Translational Science. Accessed via ScienceDirect, April 13, 2022."}],M={title:"Components/References",component:o,tags:["autodocs"],argTypes:{title:{control:"text"}},args:{title:"References",items:c},decorators:[r=>e.jsx("div",{style:{maxWidth:767,minWidth:375},children:e.jsx(r,{})})]},s={},t={args:{items:[c[0]]}},a={args:{items:[...c,{number:5,text:"World Health Organization. Global Health Estimates 2020. Geneva: WHO; 2022."},{number:6,text:'Smith, J. et al. "Advances in Drug Development." Nature Reviews Drug Discovery, vol. 21, 2022, pp. 45–62.'}]}},n={args:{title:"Sources & Citations"}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [SAMPLE_ITEMS[0]]
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,g,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [...SAMPLE_ITEMS, {
      number: 5,
      text: 'World Health Organization. Global Health Estimates 2020. Geneva: WHO; 2022.'
    }, {
      number: 6,
      text: 'Smith, J. et al. "Advances in Drug Development." Nature Reviews Drug Discovery, vol. 21, 2022, pp. 45–62.'
    }]
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,R,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Sources & Citations'
  }
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const w=["Default","SingleReference","ManyReferences","CustomTitle"];export{n as CustomTitle,s as Default,a as ManyReferences,t as SingleReference,w as __namedExportsOrder,M as default};
