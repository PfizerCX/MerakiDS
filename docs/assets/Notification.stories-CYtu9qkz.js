import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ye}from"./index-DwQS_Y10.js";import{A as C}from"./Alerts-BKD22NSx.js";import{W as ve}from"./Warning-CloWfHdP.js";import{C as he}from"./CheckCircle-BEI1plWw.js";import{C as xe}from"./Close-Cd8AO0St.js";import{B as Ne}from"./Button-cuP-Pnvr.js";const we=32,o=ye.forwardRef(({type:y="informational",alignment:ne="horizontal",inverted:g=!1,showIcon:v=!0,showTitle:se=!0,showButton:ie=!0,showClose:le=!0,title:h="This is a Notification",content:ce="Lorem ipsum dolor sit amet. Qui optio dolores est animi deserunt non suscipit fuga. Et architecto eum dolorum praesentium ex et.",actionLabel:x="Button Label",onAction:N,onClose:w,className:ue,children:me,...de},pe)=>{const fe=me??ce,ge=()=>{if(!v)return null;const r={size:we,...g&&{style:{color:"var(--ref-color-white)"}}};switch(y){case"success":return e.jsx(he,{...r});case"warning":return e.jsx(ve,{...r});case"error":return e.jsx(C,{...r});case"informational":default:return e.jsx(C,{...r})}};return e.jsx("div",{ref:pe,role:"alert","aria-live":"polite",className:["mds-notification",ue].filter(Boolean).join(" "),"data-type":y,"data-alignment":ne,"data-inverted":g||void 0,...de,children:e.jsxs("div",{className:"mds-notification__inner",children:[v&&e.jsx("div",{className:"mds-notification__icon",children:ge()}),e.jsxs("div",{className:"mds-notification__content",children:[e.jsxs("div",{className:"mds-notification__text",children:[se&&h&&e.jsx("p",{className:"mds-notification__title",children:h}),e.jsx("p",{className:"mds-notification__body",children:fe})]}),ie&&(x||N)&&e.jsx(Ne,{variant:"primary",size:"sm",inverted:g,className:"mds-notification__action",onClick:N,children:x})]}),le&&w!=null&&e.jsx("button",{type:"button",className:"mds-notification__close",onClick:w,"aria-label":"Dismiss notification",children:e.jsx(xe,{size:20})})]})})});o.displayName="NotificationBanner";o.__docgenInfo={description:"",methods:[],displayName:"NotificationBanner",props:{type:{required:!1,tsType:{name:"union",raw:"'informational' | 'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'informational'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'informational'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},inverted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'This is a Notification'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Lorem ipsum dolor sit amet. Qui optio dolores est animi deserunt non suscipit fuga. Et architecto eum dolorum praesentium ex et.'",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button Label'",computed:!1}},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const Ie={title:"Components/Notification",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["informational","warning","error","success"]},alignment:{control:"select",options:["horizontal","vertical"]},inverted:{control:"boolean"},showIcon:{control:"boolean"},showTitle:{control:"boolean"},showButton:{control:"boolean"},showClose:{control:"boolean"}},args:{type:"informational",alignment:"horizontal",inverted:!1,showIcon:!0,showTitle:!0,showButton:!0,showClose:!0,title:"This is a Notification",content:"Lorem ipsum dolor sit amet. Qui optio dolores est animi deserunt non suscipit fuga. Et architecto eum dolorum praesentium ex et.",actionLabel:"Button Label",onClose:()=>{},onAction:()=>{}}},t={},a={args:{type:"warning"}},n={args:{type:"error"}},s={args:{type:"success"}},i={args:{type:"informational",inverted:!0}},l={args:{alignment:"vertical"}},c={args:{showButton:!1}},u={args:{showClose:!1}},m={args:{showIcon:!1}},d={args:{showTitle:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:600},children:[e.jsx(o,{type:"informational",onClose:()=>{},onAction:()=>{}}),e.jsx(o,{type:"warning",onClose:()=>{},onAction:()=>{}}),e.jsx(o,{type:"error",onClose:()=>{},onAction:()=>{}}),e.jsx(o,{type:"success",onClose:()=>{},onAction:()=>{}})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:600},children:[e.jsx(o,{type:"informational",inverted:!0,onClose:()=>{},onAction:()=>{}}),e.jsx(o,{type:"warning",inverted:!0,onClose:()=>{},onAction:()=>{}}),e.jsx(o,{type:"error",inverted:!0,onClose:()=>{},onAction:()=>{}}),e.jsx(o,{type:"success",inverted:!0,onClose:()=>{},onAction:()=>{}})]})};var T,j,A;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(A=(j=t.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var B,_,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var I,S,q;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,z,E;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var W,L,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'informational',
    inverted: true
  }
}`,...(D=(L=i.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var O,k,Q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    alignment: 'vertical'
  }
}`,...(Q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:Q.source}}};var R,F,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showButton: false
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var Z,$,G;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    showClose: false
  }
}`,...(G=($=u.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    showIcon: false
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,U,X;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showTitle: false
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,ee,oe;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 600
  }}>
      <NotificationBanner type="informational" onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="warning" onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="error" onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="success" onClose={() => {}} onAction={() => {}} />
    </div>
}`,...(oe=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,te,ae;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 600
  }}>
      <NotificationBanner type="informational" inverted onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="warning" inverted onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="error" inverted onClose={() => {}} onAction={() => {}} />
      <NotificationBanner type="success" inverted onClose={() => {}} onAction={() => {}} />
    </div>
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Se=["Informational","Warning","Error","Success","Inverted","Vertical","NoButton","NoClose","NoIcon","NoTitle","AllTypes","AllTypesInverted"];export{p as AllTypes,f as AllTypesInverted,n as Error,t as Informational,i as Inverted,c as NoButton,u as NoClose,m as NoIcon,d as NoTitle,s as Success,l as Vertical,a as Warning,Se as __namedExportsOrder,Ie as default};
