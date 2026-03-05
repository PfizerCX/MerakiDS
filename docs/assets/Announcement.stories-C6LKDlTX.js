import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DwQS_Y10.js";import{E}from"./ErrorCircle-CwiKfN0G.js";const V=32,t=_.forwardRef(({layout:b="vertical",showIcon:A=!0,className:j,children:w,...D},L)=>e.jsxs("div",{ref:L,role:"status",className:["mds-announcement",j].filter(Boolean).join(" "),"data-layout":b,...D,children:[A&&e.jsx("span",{className:"mds-announcement__icon","aria-hidden":"true",children:e.jsx(E,{size:V})}),e.jsx("div",{className:"mds-announcement__body",children:w})]}));t.displayName="Announcement";t.__docgenInfo={description:"",methods:[],displayName:"Announcement",props:{layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout direction — vertical stacks icon above text, horizontal places them side by side",defaultValue:{value:"'vertical'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to display the announcement icon",defaultValue:{value:"true",computed:!1}}}};const q={title:"Components/Announcement",component:t,tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal"],description:"Layout direction — vertical stacks icon above text, horizontal places them side by side"},showIcon:{control:"boolean",description:"Whether to display the announcement icon"}},args:{layout:"vertical",showIcon:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin nibh, vitae sagittis mauris turpis a lorem. Etiam eu pulvinar mauris. Donec enim libero, sodales sed vulputate vitae, euismod a ligula. Vivamus ut mattis tellus. Aenean dui lacus, finibus nec eros in, pretium volutpat leo. Duis consequat massa quis nunc pellentesque, vel mattis felis vehicula."}},s={},i={args:{layout:"horizontal"}},o={args:{showIcon:!1}},a={args:{layout:"horizontal",showIcon:!1}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(t,{layout:"vertical",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin nibh, vitae sagittis mauris turpis a lorem."}),e.jsx(t,{layout:"horizontal",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin nibh, vitae sagittis mauris turpis a lorem."}),e.jsx(t,{showIcon:!1,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})};var r,c,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal'
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showIcon: false
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,v,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    showIcon: false
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,z,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Announcement layout="vertical">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin
        nibh, vitae sagittis mauris turpis a lorem.
      </Announcement>
      <Announcement layout="horizontal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        dignissim, lectus ac egestas efficitur, ligula lectus sollicitudin
        nibh, vitae sagittis mauris turpis a lorem.
      </Announcement>
      <Announcement showIcon={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Announcement>
    </div>
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const H=["Vertical","Horizontal","WithoutIcon","HorizontalWithoutIcon","AllVariants"];export{n as AllVariants,i as Horizontal,a as HorizontalWithoutIcon,s as Vertical,o as WithoutIcon,H as __namedExportsOrder,q as default};
