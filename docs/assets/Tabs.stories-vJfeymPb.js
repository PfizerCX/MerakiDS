import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DwQS_Y10.js";import{C as Q}from"./ChevronLeft-DWpeAgZy.js";import{C as X}from"./ChevronRight-DDWBTVFz.js";const d=c.forwardRef(({selected:t=!1,className:l,children:a,...r},n)=>s.jsxs("button",{ref:n,role:"tab",type:"button","aria-selected":t,tabIndex:t?0:-1,className:["mds-tab",l].filter(Boolean).join(" "),"data-selected":t||void 0,...r,children:[s.jsx("span",{className:"mds-tab__label",children:a}),t&&s.jsx("span",{className:"mds-tab__underline"})]}));d.displayName="Tab";const i=c.forwardRef(({showNavigation:t=!0,className:l,children:a,...r},n)=>{const e=c.useRef(null),[V,$]=c.useState(!1),[G,H]=c.useState(!1),[J,K]=c.useState(!1),u=c.useCallback(()=>{const o=e.current;if(!o)return;const b=o.scrollWidth>o.clientWidth;K(b),$(o.scrollLeft>1),H(o.scrollLeft+o.clientWidth<o.scrollWidth-1)},[]);c.useEffect(()=>{const o=e.current;if(!o)return;u(),o.addEventListener("scroll",u,{passive:!0});const b=new ResizeObserver(u);return b.observe(o),()=>{o.removeEventListener("scroll",u),b.disconnect()}},[u]),c.useEffect(()=>{u()},[c.Children.count(a),u]);const f=o=>{const b=e.current;if(!b)return;const y=b.clientWidth*.6;b.scrollBy({left:o==="left"?-y:y,behavior:"smooth"})},x=t&&J;return s.jsxs("div",{ref:n,className:["mds-tabs",l].filter(Boolean).join(" "),...r,children:[x&&s.jsxs("div",{className:"mds-tabs__nav mds-tabs__nav--prev",children:[s.jsx("div",{className:"mds-tabs__gradient mds-tabs__gradient--left"}),s.jsx("button",{type:"button",className:"mds-tabs__nav-btn","aria-label":"Scroll tabs left",disabled:!V,onClick:()=>f("left"),children:s.jsx(Q,{size:24})})]}),s.jsx("div",{ref:e,role:"tablist",className:"mds-tabs__list",children:a}),x&&s.jsxs("div",{className:"mds-tabs__nav mds-tabs__nav--next",children:[s.jsx("div",{className:"mds-tabs__gradient mds-tabs__gradient--right"}),s.jsx("button",{type:"button",className:"mds-tabs__nav-btn","aria-label":"Scroll tabs right",disabled:!G,onClick:()=>f("right"),children:s.jsx(X,{size:24})})]})]})});i.displayName="Tabs";d.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{selected:{required:!1,tsType:{name:"boolean"},description:"Whether this tab is currently selected",defaultValue:{value:"false",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{showNavigation:{required:!1,tsType:{name:"boolean"},description:"Show prev/next navigation buttons when tabs overflow",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const te={title:"Components/Tabs",component:i,tags:["autodocs"],argTypes:{showNavigation:{control:"boolean",description:"Show prev/next navigation buttons when tabs overflow"}},args:{showNavigation:!0}},m={render:t=>{const[l,a]=c.useState(0),r=["Tab Label","Tab Label","Tab Label","Tab Label","Tab Label"];return s.jsx("div",{style:{width:600},children:s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,onClick:()=>a(e),children:n},e))})})}},p={render:t=>{const[l,a]=c.useState(0),r=["Overview","Features","Pricing","Documentation","Support","Resources","Blog","Contact"];return s.jsx("div",{style:{width:600},children:s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,onClick:()=>a(e),children:n},e))})})}},h={args:{showNavigation:!1},render:t=>{const[l,a]=c.useState(0),r=["Tab One","Tab Two","Tab Three"];return s.jsx("div",{style:{width:600},children:s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,onClick:()=>a(e),children:n},e))})})}},v={render:t=>{const[l,a]=c.useState(0),r=["First","Second"];return s.jsx("div",{style:{width:600},children:s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,onClick:()=>a(e),children:n},e))})})}},T={render:t=>{const[l,a]=c.useState(0),r=Array.from({length:15},(n,e)=>`Tab ${e+1}`);return s.jsx("div",{style:{width:600},children:s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,onClick:()=>a(e),children:n},e))})})}},g={render:t=>{const[l,a]=c.useState(0),r=["Dashboard","Analytics","Reports","Settings","Users","Billing","Integrations","Logs"];return s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,onClick:()=>a(e),children:n},e))})}},S={render:t=>{const[l,a]=c.useState(0),r=["Active","Also Active","Disabled","Active Too"];return s.jsx("div",{style:{width:600},children:s.jsx(i,{...t,children:r.map((n,e)=>s.jsx(d,{selected:l===e,disabled:e===2,onClick:()=>a(e),children:n},e))})})}};var j,w,_;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = ['Tab Label', 'Tab Label', 'Tab Label', 'Tab Label', 'Tab Label'];
    return <div style={{
      width: 600
    }}>
        <Tabs {...args}>
          {labels.map((label, i) => <Tab key={i} selected={selected === i} onClick={() => setSelected(i)}>
              {label}
            </Tab>)}
        </Tabs>
      </div>;
  }
}`,...(_=(w=m.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var C,N,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = ['Overview', 'Features', 'Pricing', 'Documentation', 'Support', 'Resources', 'Blog', 'Contact'];
    return <div style={{
      width: 600
    }}>
        <Tabs {...args}>
          {labels.map((label, i) => <Tab key={i} selected={selected === i} onClick={() => setSelected(i)}>
              {label}
            </Tab>)}
        </Tabs>
      </div>;
  }
}`,...(k=(N=p.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var L,R,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showNavigation: false
  },
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = ['Tab One', 'Tab Two', 'Tab Three'];
    return <div style={{
      width: 600
    }}>
        <Tabs {...args}>
          {labels.map((label, i) => <Tab key={i} selected={selected === i} onClick={() => setSelected(i)}>
              {label}
            </Tab>)}
        </Tabs>
      </div>;
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,D,F;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = ['First', 'Second'];
    return <div style={{
      width: 600
    }}>
        <Tabs {...args}>
          {labels.map((label, i) => <Tab key={i} selected={selected === i} onClick={() => setSelected(i)}>
              {label}
            </Tab>)}
        </Tabs>
      </div>;
  }
}`,...(F=(D=v.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var O,B,E;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = Array.from({
      length: 15
    }, (_, i) => \`Tab \${i + 1}\`);
    return <div style={{
      width: 600
    }}>
        <Tabs {...args}>
          {labels.map((label, i) => <Tab key={i} selected={selected === i} onClick={() => setSelected(i)}>
              {label}
            </Tab>)}
        </Tabs>
      </div>;
  }
}`,...(E=(B=T.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,q,z;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = ['Dashboard', 'Analytics', 'Reports', 'Settings', 'Users', 'Billing', 'Integrations', 'Logs'];
    return <Tabs {...args}>
        {labels.map((label, i) => <Tab key={i} selected={selected === i} onClick={() => setSelected(i)}>
            {label}
          </Tab>)}
      </Tabs>;
  }
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var M,P,U;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(0);
    const labels = ['Active', 'Also Active', 'Disabled', 'Active Too'];
    return <div style={{
      width: 600
    }}>
        <Tabs {...args}>
          {labels.map((label, i) => <Tab key={i} selected={selected === i} disabled={i === 2} onClick={() => setSelected(i)}>
              {label}
            </Tab>)}
        </Tabs>
      </div>;
  }
}`,...(U=(P=S.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const ae=["Default","WithNavigation","WithoutNavigation","FewTabs","ManyTabs","FullWidth","WithDisabledTab"];export{m as Default,v as FewTabs,g as FullWidth,T as ManyTabs,S as WithDisabledTab,p as WithNavigation,h as WithoutNavigation,ae as __namedExportsOrder,te as default};
