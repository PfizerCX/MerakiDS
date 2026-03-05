import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as Z}from"./index-DwQS_Y10.js";import{P as $}from"./Person-T_fTu4ig.js";const a=Z.forwardRef(({src:f,alt:H="",initials:h,showStatus:J=!1,status:K="online",className:Q,...X},Y)=>{const e=f?"image":h?"initials":"profile";return s.jsxs("div",{ref:Y,className:["mds-avatar",Q].filter(Boolean).join(" "),"data-profile-form":e,...X,children:[s.jsxs("div",{className:"mds-avatar__container",children:[e==="image"&&s.jsx("img",{className:"mds-avatar__image",src:f,alt:H}),e==="initials"&&s.jsx("span",{className:"mds-avatar__initials",children:h}),e==="profile"&&s.jsx($,{size:24,className:"mds-avatar__icon"})]}),J&&s.jsx("span",{className:"mds-avatar__status","data-status":K})]})});a.displayName="Avatar";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image source URL"},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the avatar image",defaultValue:{value:"''",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"Initials to display when no image is provided (1–2 characters)"},showStatus:{required:!1,tsType:{name:"boolean"},description:"Whether to show the status indicator",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'away' | 'do-not-disturb' | 'offline'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'away'"},{name:"literal",value:"'do-not-disturb'"},{name:"literal",value:"'offline'"}]},description:"Status of the user",defaultValue:{value:"'online'",computed:!1}}}};const t="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",es={title:"Components/Avatar",component:a,tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alt text for the avatar image"},initials:{control:"text",description:"Initials to display when no image is provided (1–2 characters)"},showStatus:{control:"boolean",description:"Whether to show the status indicator"},status:{control:"select",options:["online","away","do-not-disturb","offline"],description:"Status of the user"}},args:{src:t,alt:"User avatar",showStatus:!0,status:"online"}},r={},o={args:{src:void 0,initials:"WW"}},i={args:{src:void 0}},n={args:{showStatus:!0,status:"online"}},c={args:{showStatus:!0,status:"away"}},l={args:{showStatus:!0,status:"do-not-disturb"}},u={args:{showStatus:!0,status:"offline"}},d={args:{showStatus:!1}},m={render:()=>s.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[s.jsx(a,{src:t,alt:"Image avatar"}),s.jsx(a,{initials:"WW"}),s.jsx(a,{})]})},p={render:()=>s.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[s.jsx(a,{src:t,showStatus:!0,status:"online"}),s.jsx(a,{src:t,showStatus:!0,status:"away"}),s.jsx(a,{src:t,showStatus:!0,status:"do-not-disturb"}),s.jsx(a,{src:t,showStatus:!0,status:"offline"})]})};var g,S,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,A,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: undefined,
    initials: 'WW'
  }
}`,...(x=(A=o.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var y,I,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: undefined
  }
}`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var j,W,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showStatus: true,
    status: 'online'
  }
}`,...(E=(W=n.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var b,M,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showStatus: true,
    status: 'away'
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,L,G;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    showStatus: true,
    status: 'do-not-disturb'
  }
}`,...(G=(L=l.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var T,q,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showStatus: true,
    status: 'offline'
  }
}`,...(O=(q=u.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var D,R,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showStatus: false
  }
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var U,V,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Avatar src={SAMPLE_IMAGE} alt="Image avatar" />
      <Avatar initials="WW" />
      <Avatar />
    </div>
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,C,k;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Avatar src={SAMPLE_IMAGE} showStatus status="online" />
      <Avatar src={SAMPLE_IMAGE} showStatus status="away" />
      <Avatar src={SAMPLE_IMAGE} showStatus status="do-not-disturb" />
      <Avatar src={SAMPLE_IMAGE} showStatus status="offline" />
    </div>
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const rs=["Image","Initials","Profile","WithOnlineStatus","WithAwayStatus","WithDoNotDisturbStatus","WithOfflineStatus","NoStatus","AllProfileForms","AllStatuses"];export{m as AllProfileForms,p as AllStatuses,r as Image,o as Initials,d as NoStatus,i as Profile,c as WithAwayStatus,l as WithDoNotDisturbStatus,u as WithOfflineStatus,n as WithOnlineStatus,rs as __namedExportsOrder,es as default};
