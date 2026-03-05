import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DwQS_Y10.js";function g(e,s,a){return Math.min(Math.max(e,s),a)}function pe(e,s,a){const m=Math.round((e-s)/a);return s+m*a}function K(e,s,a){return a===s?0:(e-s)/(a-s)*100}const c=n.forwardRef(({value:e=0,min:s=0,max:a=100,step:m=1,label:y,disabled:p=!1,showFlag:j=!0,showRange:$=!0,orientation:S="horizontal",className:q,onChange:r,...z},A)=>{const V=`${n.useId()}-label`,o=Array.isArray(e),f=S==="vertical",H=o?e[0]:e,d=o?e[1]:e,E=n.useRef(null),h=n.useRef(null),R=n.useCallback((l,b)=>{const i=E.current;if(!i)return s;const v=i.getBoundingClientRect();let u;f?u=1-(b-v.top)/v.height:u=(l-v.left)/v.width,u=g(u,0,1);const x=s+u*(a-s);return g(pe(x,s,m),s,a)},[s,a,m,f]),L=n.useCallback((l,b)=>{p||(l.preventDefault(),l.target.setPointerCapture(l.pointerId),h.current=b)},[p]),ue=n.useCallback(l=>{if(!h.current||p)return;const b=R(l.clientX,l.clientY);if(o){const i=e;h.current==="low"?r==null||r([Math.min(b,i[1]),i[1]]):r==null||r([i[0],Math.max(b,i[0])])}else r==null||r(b)},[p,R,o,e,r]),de=n.useCallback(()=>{h.current=null},[]),ce=n.useCallback(l=>{if(p||l.target.closest(".mds-slider__handle"))return;const i=R(l.clientX,l.clientY);if(o){const v=e,u=Math.abs(i-v[0]),x=Math.abs(i-v[1]);u<=x?r==null||r([Math.min(i,v[1]),v[1]]):r==null||r([v[0],Math.max(i,v[0])])}else r==null||r(i)},[p,R,o,e,r]),U=n.useCallback((l,b)=>{if(p)return;let i=0;const v=m*10;switch(l.key){case"ArrowRight":case"ArrowUp":i=m;break;case"ArrowLeft":case"ArrowDown":i=-m;break;case"PageUp":i=v;break;case"PageDown":i=-v;break;case"Home":if(o){const u=e;r==null||r(b==="low"?[s,u[1]]:[u[0],s])}else r==null||r(s);l.preventDefault();return;case"End":if(o){const u=e;r==null||r(b==="low"?[a,u[1]]:[u[0],a])}else r==null||r(a);l.preventDefault();return;default:return}if(l.preventDefault(),o){const u=e;if(b==="low"){const x=g(u[0]+i,s,u[1]);r==null||r([x,u[1]])}else{const x=g(u[1]+i,u[0],a);r==null||r([u[0],x])}}else r==null||r(g(e+i,s,a))},[p,m,s,a,o,e,r]);n.useEffect(()=>{const l=()=>{h.current=null};return window.addEventListener("pointerup",l),()=>window.removeEventListener("pointerup",l)},[]);const w=K(H,s,a),D=K(d,s,a),me=f?o?{bottom:`${w}%`,top:`${100-D}%`}:{bottom:"0%",top:`${100-w}%`}:o?{left:`${w}%`,right:`${100-D}%`}:{left:"0%",right:`${100-w}%`},F=f?{bottom:`${w}%`}:{left:`${w}%`},ve=f?{bottom:`${D}%`}:{left:`${D}%`};return t.jsxs("div",{ref:A,className:["mds-slider",q].filter(Boolean).join(" "),"data-disabled":p||void 0,"data-orientation":S,role:"group","aria-labelledby":y?V:void 0,...z,children:[y&&t.jsx("span",{className:"mds-slider__label",id:V,children:y}),t.jsxs("div",{ref:E,className:"mds-slider__track-container",onPointerMove:ue,onPointerUp:de,onClick:ce,children:[t.jsx("div",{className:"mds-slider__track-inactive"}),t.jsx("div",{className:"mds-slider__track-active",style:me}),o&&t.jsx("div",{className:"mds-slider__handle",role:"slider",tabIndex:p?-1:0,"aria-valuemin":s,"aria-valuemax":e[1],"aria-valuenow":e[0],"aria-orientation":S,"aria-label":"Range start",style:F,onPointerDown:l=>L(l,"low"),onKeyDown:l=>U(l,"low"),children:j&&t.jsx("span",{className:"mds-slider__flag",children:e[0]})}),t.jsx("div",{className:"mds-slider__handle",role:"slider",tabIndex:p?-1:0,"aria-valuemin":o?e[0]:s,"aria-valuemax":a,"aria-valuenow":o?e[1]:e,"aria-orientation":S,"aria-label":o?"Range end":"Value",style:o?ve:F,onPointerDown:l=>L(l,o?"high":"low"),onKeyDown:l=>U(l,o?"high":"low"),children:j&&t.jsx("span",{className:"mds-slider__flag",children:o?e[1]:e})})]}),$&&t.jsxs("div",{className:"mds-slider__range",children:[t.jsx("span",{children:s}),t.jsx("span",{children:a})]})]})});c.displayName="Slider";c.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Current value — pass a number for continuous mode, or [number, number] for range mode",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"Minimum allowed value",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum allowed value",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step increment for keyboard and click interactions",defaultValue:{value:"1",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the slider"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled",defaultValue:{value:"false",computed:!1}},showFlag:{required:!1,tsType:{name:"boolean"},description:"Show value flag tooltip above the handle(s)",defaultValue:{value:"true",computed:!1}},showRange:{required:!1,tsType:{name:"boolean"},description:"Show min/max labels below the track",defaultValue:{value:"true",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Slider orientation",defaultValue:{value:"'horizontal'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"}},composes:["Omit"]};const Se={title:"Components/Slider",component:c,tags:["autodocs"],argTypes:{value:{control:!1},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},showFlag:{control:"boolean"},showRange:{control:"boolean"},orientation:{control:"radio",options:["horizontal","vertical"]}},args:{min:0,max:100,step:1,showFlag:!0,showRange:!0,orientation:"horizontal"}},ie=e=>{const[s,a]=n.useState(e.value??50);return t.jsx("div",{style:{width:400},children:t.jsx(c,{...e,value:s,onChange:m=>a(m)})})},be=e=>{const[s,a]=n.useState(e.value??[20,80]);return t.jsx("div",{style:{width:400},children:t.jsx(c,{...e,value:s,onChange:m=>a(m)})})},_={render:e=>t.jsx(ie,{...e}),args:{value:50}},k={render:e=>t.jsx(ie,{...e}),args:{value:50,label:"Slider label"}},M={render:e=>t.jsx(be,{...e}),args:{value:[20,80],label:"Range slider"}},P={render:e=>{const[s,a]=n.useState(50);return t.jsx("div",{style:{height:400},children:t.jsx(c,{...e,orientation:"vertical",value:s,onChange:m=>a(m)})})},args:{label:"Vertical slider"}},T={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,width:400},children:[t.jsx(c,{label:"Disabled continuous",value:50,disabled:!0}),t.jsx(c,{label:"Disabled range",value:[20,80],disabled:!0})]})},N={render:()=>{const[e,s]=n.useState(0),[a,m]=n.useState(25),[y,p]=n.useState(50),[j,$]=n.useState(75),[S,q]=n.useState(100),[r,z]=n.useState([0,30]),[A,I]=n.useState([10,60]),[V,o]=n.useState([40,60]),[f,H]=n.useState([50,100]);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[t.jsx("h3",{style:{margin:0},children:"Continuous Horizontal"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[t.jsx(c,{value:e,onChange:d=>s(d)}),t.jsx(c,{value:a,onChange:d=>m(d)}),t.jsx(c,{value:y,onChange:d=>p(d)}),t.jsx(c,{value:j,onChange:d=>$(d)}),t.jsx(c,{value:S,onChange:d=>q(d)}),t.jsx(c,{value:50,disabled:!0})]}),t.jsx("h3",{style:{margin:0},children:"Range Horizontal"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[t.jsx(c,{value:r,onChange:d=>z(d)}),t.jsx(c,{value:A,onChange:d=>I(d)}),t.jsx(c,{value:V,onChange:d=>o(d)}),t.jsx(c,{value:f,onChange:d=>H(d)}),t.jsx(c,{value:[20,80],disabled:!0})]})]})}};var W,B,O;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <ContinuousControlled {...args} />,
  args: {
    value: 50
  }
}`,...(O=(B=_.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var X,Y,G;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ContinuousControlled {...args} />,
  args: {
    value: 50,
    label: 'Slider label'
  }
}`,...(G=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,Z;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <RangeControlled {...args} />,
  args: {
    value: [20, 80],
    label: 'Range slider'
  }
}`,...(Z=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var C,ee,re;P.parameters={...P.parameters,docs:{...(C=P.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number>(50);
    return <div style={{
      height: 400
    }}>
        <Slider {...args} orientation="vertical" value={value} onChange={v => setValue(v as number)} />
      </div>;
  },
  args: {
    label: 'Vertical slider'
  }
}`,...(re=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    width: 400
  }}>
      <Slider label="Disabled continuous" value={50} disabled />
      <Slider label="Disabled range" value={[20, 80]} disabled />
    </div>
}`,...(ae=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,ne,oe;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(25);
    const [v3, setV3] = useState(50);
    const [v4, setV4] = useState(75);
    const [v5, setV5] = useState(100);
    const [r1, setR1] = useState<[number, number]>([0, 30]);
    const [r2, setR2] = useState<[number, number]>([10, 60]);
    const [r3, setR3] = useState<[number, number]>([40, 60]);
    const [r4, setR4] = useState<[number, number]>([50, 100]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        <h3 style={{
        margin: 0
      }}>Continuous Horizontal</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        width: 400
      }}>
          <Slider value={v1} onChange={v => setV1(v as number)} />
          <Slider value={v2} onChange={v => setV2(v as number)} />
          <Slider value={v3} onChange={v => setV3(v as number)} />
          <Slider value={v4} onChange={v => setV4(v as number)} />
          <Slider value={v5} onChange={v => setV5(v as number)} />
          <Slider value={50} disabled />
        </div>

        <h3 style={{
        margin: 0
      }}>Range Horizontal</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        width: 400
      }}>
          <Slider value={r1} onChange={v => setR1(v as [number, number])} />
          <Slider value={r2} onChange={v => setR2(v as [number, number])} />
          <Slider value={r3} onChange={v => setR3(v as [number, number])} />
          <Slider value={r4} onChange={v => setR4(v as [number, number])} />
          <Slider value={[20, 80] as [number, number]} disabled />
        </div>
      </div>;
  }
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const we=["Default","WithLabel","RangeSlider","Vertical","Disabled","AllStates"];export{N as AllStates,_ as Default,T as Disabled,M as RangeSlider,P as Vertical,k as WithLabel,we as __namedExportsOrder,Se as default};
