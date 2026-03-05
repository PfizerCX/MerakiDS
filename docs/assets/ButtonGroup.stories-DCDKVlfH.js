import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-DwQS_Y10.js";import{B as o}from"./Button-cuP-Pnvr.js";const n=A.forwardRef(({orientation:e="horizontal",fill:w=!1,className:S,children:W,...F},q)=>t.jsx("div",{ref:q,role:"group",className:["mds-btn-group",S].filter(Boolean).join(" "),"data-orientation":e,"data-fill":w||void 0,...F,children:W}));n.displayName="ButtonGroup";n.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction of the buttons",defaultValue:{value:"'horizontal'",computed:!1}},fill:{required:!1,tsType:{name:"boolean"},description:"When true, child buttons stretch to fill the available width equally",defaultValue:{value:"false",computed:!1}}}};const O={title:"Components/ButtonGroup",component:n,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Layout direction of the buttons"},fill:{control:"boolean",description:"When true, child buttons stretch to fill the available width equally"}},args:{orientation:"horizontal",fill:!1}},r={render:e=>t.jsxs(n,{...e,children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})},a={args:{fill:!0},render:e=>t.jsx("div",{style:{width:"100%"},children:t.jsxs(n,{...e,children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})})},i={args:{orientation:"vertical"},render:e=>t.jsxs(n,{...e,children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})},l={args:{orientation:"vertical",fill:!0},render:e=>t.jsx("div",{style:{width:400},children:t.jsxs(n,{...e,children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})})},s={render:e=>t.jsxs(n,{...e,children:[t.jsx(o,{variant:"primary",children:"Primary"}),t.jsx(o,{variant:"secondary",children:"Secondary"})]})},u={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:8,fontWeight:600},children:"Horizontal — Hug"}),t.jsxs(n,{orientation:"horizontal",children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:8,fontWeight:600},children:"Horizontal — Fill"}),t.jsxs(n,{orientation:"horizontal",fill:!0,children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:8,fontWeight:600},children:"Vertical — Hug"}),t.jsxs(n,{orientation:"vertical",children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})]}),t.jsxs("div",{style:{width:400},children:[t.jsx("p",{style:{marginBottom:8,fontWeight:600},children:"Vertical — Fill"}),t.jsxs(n,{orientation:"vertical",fill:!0,children:[t.jsx(o,{children:"Button Label"}),t.jsx(o,{children:"Button Label"})]})]})]})};var d,c,B;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button>Button Label</Button>
      <Button>Button Label</Button>
    </ButtonGroup>
}`,...(B=(c=r.parameters)==null?void 0:c.docs)==null?void 0:B.source}}};var p,h,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fill: true
  },
  render: args => <div style={{
    width: '100%'
  }}>
      <ButtonGroup {...args}>
        <Button>Button Label</Button>
        <Button>Button Label</Button>
      </ButtonGroup>
    </div>
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,x,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <ButtonGroup {...args}>
      <Button>Button Label</Button>
      <Button>Button Label</Button>
    </ButtonGroup>
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,j,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    fill: true
  },
  render: args => <div style={{
    width: 400
  }}>
      <ButtonGroup {...args}>
        <Button>Button Label</Button>
        <Button>Button Label</Button>
      </ButtonGroup>
    </div>
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,L,G;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </ButtonGroup>
}`,...(G=(L=s.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var z,H,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 600
      }}>
          Horizontal — Hug
        </p>
        <ButtonGroup orientation="horizontal">
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 600
      }}>
          Horizontal — Fill
        </p>
        <ButtonGroup orientation="horizontal" fill>
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontWeight: 600
      }}>
          Vertical — Hug
        </p>
        <ButtonGroup orientation="vertical">
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
      <div style={{
      width: 400
    }}>
        <p style={{
        marginBottom: 8,
        fontWeight: 600
      }}>
          Vertical — Fill
        </p>
        <ButtonGroup orientation="vertical" fill>
          <Button>Button Label</Button>
          <Button>Button Label</Button>
        </ButtonGroup>
      </div>
    </div>
}`,...(V=(H=u.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const T=["Horizontal","HorizontalFill","Vertical","VerticalFill","MixedVariants","AllOrientationsAndSizes"];export{u as AllOrientationsAndSizes,r as Horizontal,a as HorizontalFill,s as MixedVariants,i as Vertical,l as VerticalFill,T as __namedExportsOrder,O as default};
