import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./index-DwQS_Y10.js";import{C as W}from"./Close-Cd8AO0St.js";const d=U.forwardRef(({beakPosition:e="top-left",title:o="Tooltip Title",content:I="Tooltip caption that is only 1 or 2 lines long.",showClose:F=!0,showContent:G=!0,onClose:H,className:J,children:K,...M},Q)=>t.jsxs("div",{ref:Q,role:"tooltip",className:["mds-tooltip",J].filter(Boolean).join(" "),"data-beak":e,...M,children:[t.jsxs("div",{className:"mds-tooltip__header",children:[t.jsx("p",{className:"mds-tooltip__title",children:o}),F&&t.jsx("button",{type:"button",className:"mds-tooltip__close",onClick:H,"aria-label":"Dismiss tooltip",children:t.jsx(W,{size:20,style:{color:"var(--ref-color-white)"}})})]}),G&&t.jsx("p",{className:"mds-tooltip__content",children:K??I}),t.jsx("span",{className:"mds-tooltip__beak","aria-hidden":"true"})]}));d.displayName="Tooltip";d.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{beakPosition:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'right-top'
| 'right-center'
| 'right-bottom'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'
| 'left-top'
| 'left-center'
| 'left-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"}]},description:"Beak position relative to the tooltip body",defaultValue:{value:"'top-left'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Title text",defaultValue:{value:"'Tooltip Title'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:"Body text content",defaultValue:{value:"'Tooltip caption that is only 1 or 2 lines long.'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"Show the close button",defaultValue:{value:"true",computed:!1}},showContent:{required:!1,tsType:{name:"boolean"},description:"Show the body text",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"}}};const $={title:"Components/Tooltip",component:d,tags:["autodocs"],argTypes:{beakPosition:{control:"select",options:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"],description:"Beak position relative to the tooltip body"},showClose:{control:"boolean"},showContent:{control:"boolean"}},args:{beakPosition:"top-left",title:"Tooltip Title",content:"Tooltip caption that is only 1 or 2 lines long.",showClose:!0,showContent:!0,onClose:()=>{}},decorators:[e=>t.jsx("div",{style:{padding:40},children:t.jsx(e,{})})]},r={},s={args:{beakPosition:"top-center"}},a={args:{beakPosition:"top-right"}},n={args:{beakPosition:"right-center"}},i={args:{beakPosition:"bottom-center"}},l={args:{beakPosition:"left-center"}},p={args:{showClose:!1}},c={args:{showContent:!1}},m={render:()=>{const e=["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"];return t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48,padding:32},children:e.map(o=>t.jsx(d,{beakPosition:o,title:"Tooltip Title",content:"Tooltip caption that is only 1 or 2 lines long.",onClose:()=>{}},o))})}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    beakPosition: 'top-center'
  }
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var C,y,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    beakPosition: 'top-right'
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,x,w;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    beakPosition: 'right-center'
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var P,j,_;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    beakPosition: 'bottom-center'
  }
}`,...(_=(j=i.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var S,N,q;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    beakPosition: 'left-center'
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var B,R,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    showClose: false
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var D,E,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showContent: false
  }
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var A,L,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const positions = ['top-left', 'top-center', 'top-right', 'right-top', 'right-center', 'right-bottom', 'bottom-left', 'bottom-center', 'bottom-right', 'left-top', 'left-center', 'left-bottom'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 48,
      padding: 32
    }}>
        {positions.map(pos => <Tooltip key={pos} beakPosition={pos} title="Tooltip Title" content="Tooltip caption that is only 1 or 2 lines long." onClose={() => {}} />)}
      </div>;
  }
}`,...(z=(L=m.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const tt=["Default","TopCenter","TopRight","RightCenter","BottomCenter","LeftCenter","NoClose","TitleOnly","AllPositions"];export{m as AllPositions,i as BottomCenter,r as Default,l as LeftCenter,p as NoClose,n as RightCenter,c as TitleOnly,s as TopCenter,a as TopRight,tt as __namedExportsOrder,$ as default};
