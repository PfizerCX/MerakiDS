import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DwQS_Y10.js";const a=f.forwardRef(({label:s,contextLabel:t,leftLabel:r,rightLabel:b,className:$,id:ee,disabled:x,...ae},se)=>{const te=f.useId(),L=ee||te;return e.jsxs("div",{className:["mds-toggle",$].filter(Boolean).join(" "),"data-disabled":x||void 0,children:[(s||t)&&e.jsxs("div",{className:"mds-toggle__label-container",children:[s&&e.jsx("label",{className:"mds-toggle__label",htmlFor:L,children:s}),t&&e.jsx("span",{className:"mds-toggle__context-label",children:t})]}),e.jsxs("div",{className:"mds-toggle__control",children:[r&&e.jsx("span",{className:"mds-toggle__switch-label mds-toggle__switch-label--left",children:r}),e.jsxs("div",{className:"mds-toggle__switch",children:[e.jsx("input",{ref:se,id:L,type:"checkbox",role:"switch",className:"mds-toggle__input",disabled:x,...ae}),e.jsx("span",{className:"mds-toggle__track",children:e.jsx("span",{className:"mds-toggle__handle"})})]}),b&&e.jsx("span",{className:"mds-toggle__switch-label mds-toggle__switch-label--right",children:b})]})]})});a.displayName="Toggle";a.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:"Primary label text"},contextLabel:{required:!1,tsType:{name:"string"},description:"Secondary descriptive text below the primary label"},leftLabel:{required:!1,tsType:{name:"string"},description:'Text shown to the left of the switch (e.g. "Off")'},rightLabel:{required:!1,tsType:{name:"string"},description:'Text shown to the right of the switch (e.g. "On")'}},composes:["Omit"]};const le={title:"Components/Toggle",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},label:{control:"text"},contextLabel:{control:"text"},leftLabel:{control:"text"},rightLabel:{control:"text"}},args:{label:"Switch label"}},o={},l={args:{defaultChecked:!0}},n={args:{label:"Camera Access",contextLabel:"Grants permission to turn on your phones camera"}},c={args:{label:"Camera Access",leftLabel:"Off",rightLabel:"On",defaultChecked:!0}},d={args:{label:"Camera Access",contextLabel:"Grants permission to turn on your phones camera",leftLabel:"Off",rightLabel:"On",defaultChecked:!0}},i={args:{disabled:!0}},m={args:{disabled:!0,defaultChecked:!0}},g={args:{label:void 0}},u={render:()=>{const[s,t]=f.useState(!1);return e.jsx(a,{label:"Dark Mode",leftLabel:"Off",rightLabel:"On",checked:s,onChange:r=>t(r.target.checked)})}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:480},children:[e.jsx(a,{label:"Camera Access",contextLabel:"Grants permission to turn on your phones camera",leftLabel:"Off",rightLabel:"On",defaultChecked:!0}),e.jsx(a,{label:"Notification Sound",contextLabel:"Play a sound when you receive a notification",leftLabel:"Off",rightLabel:"On"}),e.jsx(a,{label:"Use Face ID",leftLabel:"Off",rightLabel:"On",defaultChecked:!0})]})},p={render:()=>e.jsx(a,{label:"Show my position on the map",defaultChecked:!0})};var C,O,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var y,S,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,j,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Camera Access',
    contextLabel: 'Grants permission to turn on your phones camera'
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var N,v,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Camera Access',
    leftLabel: 'Off',
    rightLabel: 'On',
    defaultChecked: true
  }
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var A,G,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Camera Access',
    contextLabel: 'Grants permission to turn on your phones camera',
    leftLabel: 'Off',
    rightLabel: 'On',
    defaultChecked: true
  }
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var W,q,E;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,P,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var R,U,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(B=(U=g.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var z,H,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Toggle label="Dark Mode" leftLabel="Off" rightLabel="On" checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,V;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 480
  }}>
      <Toggle label="Camera Access" contextLabel="Grants permission to turn on your phones camera" leftLabel="Off" rightLabel="On" defaultChecked />
      <Toggle label="Notification Sound" contextLabel="Play a sound when you receive a notification" leftLabel="Off" rightLabel="On" />
      <Toggle label="Use Face ID" leftLabel="Off" rightLabel="On" defaultChecked />
    </div>
}`,...(V=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Toggle label="Show my position on the map" defaultChecked />
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ne=["Default","Checked","WithContextLabel","WithSwitchLabels","WithAllLabels","Disabled","DisabledChecked","SwitchOnly","Controlled","ListOfSettings","SingleSetting"];export{l as Checked,u as Controlled,o as Default,i as Disabled,m as DisabledChecked,h as ListOfSettings,p as SingleSetting,g as SwitchOnly,d as WithAllLabels,n as WithContextLabel,c as WithSwitchLabels,ne as __namedExportsOrder,le as default};
