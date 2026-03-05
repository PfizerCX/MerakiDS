import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DwQS_Y10.js";import{r as F}from"./index-BrB0Fkit.js";import{B as b}from"./Button-cuP-Pnvr.js";import{I as G}from"./IconButton-OXKGdn_c.js";import{C as J}from"./Close-Cd8AO0St.js";import{O as X}from"./OpenInNew-DvG6WFKd.js";import"./index-Bls5tne7.js";const f=r.forwardRef(({open:t=!1,headline:o="You are now leaving this site",body:a,continueLabel:P="Continue",cancelLabel:R="Cancel",onContinue:V,onCancel:Y,onClose:l,links:h,showScrim:z=!0,container:v,className:M,...K},Q)=>{const x=r.useRef(null),i=r.useCallback(()=>{l==null||l()},[l]),U=r.useCallback(n=>{n.target===n.currentTarget&&i()},[i]);if(r.useEffect(()=>{if(!t)return;const n=y=>{y.key==="Escape"&&i()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t,i]),r.useEffect(()=>{var n;t&&((n=x.current)==null||n.focus())},[t]),!t)return null;const k=e.jsx("div",{className:["mds-overlay-exit",z&&"mds-overlay-exit--scrim"].filter(Boolean).join(" "),onClick:U,"aria-hidden":!t,children:e.jsxs("div",{ref:Q??x,role:"dialog","aria-modal":"true","aria-label":o,tabIndex:-1,className:["mds-overlay-exit__dialog",M].filter(Boolean).join(" "),...K,children:[e.jsx("div",{className:"mds-overlay-exit__close",children:e.jsx(G,{variant:"text",size:"lg",icon:e.jsx(J,{size:24}),"aria-label":"Close dialog",onClick:i})}),e.jsxs("div",{className:"mds-overlay-exit__content",children:[e.jsxs("div",{className:"mds-overlay-exit__title-group",children:[e.jsx("p",{className:"mds-overlay-exit__headline",children:o}),e.jsxs("div",{className:"mds-overlay-exit__actions",children:[e.jsx(b,{variant:"primary",onClick:V,children:P}),e.jsx(b,{variant:"secondary",onClick:Y,children:R})]})]}),a&&e.jsx("p",{className:"mds-overlay-exit__body",children:a})]}),h&&h.length>0&&e.jsx("div",{className:"mds-overlay-exit__links",children:h.map((n,y)=>e.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"mds-overlay-exit__link",children:[e.jsx("span",{className:"mds-overlay-exit__link-label",children:n.label}),e.jsx(X,{size:24,"aria-hidden":"true"})]},y))})]})});return v===null?k:F.createPortal(k,v??document.body)});f.displayName="OverlayExitInterstitial";f.__docgenInfo={description:"",methods:[],displayName:"OverlayExitInterstitial",props:{open:{required:!1,tsType:{name:"boolean"},description:"Whether the overlay is visible",defaultValue:{value:"false",computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"Headline text displayed at the top of the dialog",defaultValue:{value:"'You are now leaving this site'",computed:!1}},body:{required:!1,tsType:{name:"ReactNode"},description:"Body content below the buttons"},continueLabel:{required:!1,tsType:{name:"string"},description:"Label for the primary continue button",defaultValue:{value:"'Continue'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Label for the secondary cancel button",defaultValue:{value:"'Cancel'",computed:!1}},onContinue:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the continue button is clicked"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the cancel button is clicked or when the overlay is dismissed"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the close icon button is clicked"},links:{required:!1,tsType:{name:"Array",elements:[{name:"OverlayExitInterstitialLink"}],raw:"OverlayExitInterstitialLink[]"},description:"Document links rendered below the body text"},showScrim:{required:!1,tsType:{name:"boolean"},description:"Whether to display the scrim backdrop",defaultValue:{value:"true",computed:!1}},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Portal target — pass `null` to render inline instead of using a portal"}}};const oe={title:"Components/OverlayExitInterstitial",component:f,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the overlay is visible"},headline:{control:"text",description:"Headline text displayed at the top of the dialog"},body:{control:"text",description:"Body content below the buttons"},continueLabel:{control:"text",description:"Label for the primary continue button"},cancelLabel:{control:"text",description:"Label for the secondary cancel button"},showScrim:{control:"boolean",description:"Whether to display the scrim backdrop"}},args:{open:!0,headline:"You are now leaving lorem ipsum dolor sit amet consectetur. Massa in blandit sapien viverra a facilisi.",body:"Lorem ipsum dolor sit amet consectetur. Elit tincidunt nisl fermentum eu. Egestas ut fermentum morbi aenean lorem ac netus mollis sapien. Ultrices nibh orci nulla nibh vestibulum ultrices eu. Elit in arcu eu netus justo tellus a orci tempor. Quis quis velit blandit rhoncus. Sapien fermentum pulvinar sagittis elementum feugiat a venenatis. Ac consequat et auctor egestas hendrerit a pharetra.",continueLabel:"Continue",cancelLabel:"Cancel",showScrim:!0,container:null},parameters:{layout:"fullscreen"}},s={},c={args:{showScrim:!1}},u={args:{links:[{label:"Example of a Document Selection Link",href:"#link-1"},{label:"Example of a Document Selection Link",href:"#link-2"},{label:"Example of a Document Selection Link",href:"#link-3"}]}},d={args:{links:[{label:"Example of a Document Selection Link",href:"#link-1"},{label:"Example of a Document Selection Link",href:"#link-2"},{label:"Example of a Document Selection Link",href:"#link-3"},{label:"Example of a Document Selection Link",href:"#link-4"},{label:"Example of a Document Selection Link",href:"#link-5"}]}},m={render:function(){const[o,a]=r.useState(!1);return e.jsxs("div",{style:{padding:64},children:[e.jsx(b,{variant:"primary",onClick:()=>a(!0),children:"Open Exit Interstitial"}),e.jsx(f,{open:o,headline:"You are now leaving this site. Are you sure you want to continue?",body:"By clicking continue, you will be redirected to an external website that is not operated by us. We are not responsible for the content or privacy practices of external sites.",continueLabel:"Continue",cancelLabel:"Cancel",onContinue:()=>{a(!1)},onCancel:()=>a(!1),onClose:()=>a(!1),links:[{label:"Privacy Policy",href:"#privacy"},{label:"Terms of Service",href:"#terms"}]})]})}},p={args:{showScrim:!1},decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"#f0f0f0"},children:e.jsx(t,{})})]};var g,L,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var E,w,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    showScrim: false
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,D,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    links: [{
      label: 'Example of a Document Selection Link',
      href: '#link-1'
    }, {
      label: 'Example of a Document Selection Link',
      href: '#link-2'
    }, {
      label: 'Example of a Document Selection Link',
      href: '#link-3'
    }]
  }
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var I,O,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    links: [{
      label: 'Example of a Document Selection Link',
      href: '#link-1'
    }, {
      label: 'Example of a Document Selection Link',
      href: '#link-2'
    }, {
      label: 'Example of a Document Selection Link',
      href: '#link-3'
    }, {
      label: 'Example of a Document Selection Link',
      href: '#link-4'
    }, {
      label: 'Example of a Document Selection Link',
      href: '#link-5'
    }]
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var N,q,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 64
    }}>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Exit Interstitial
        </Button>
        <OverlayExitInterstitial open={open} headline="You are now leaving this site. Are you sure you want to continue?" body="By clicking continue, you will be redirected to an external website that is not operated by us. We are not responsible for the content or privacy practices of external sites." continueLabel="Continue" cancelLabel="Cancel" onContinue={() => {
        setOpen(false);
      }} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} links={[{
        label: 'Privacy Policy',
        href: '#privacy'
      }, {
        label: 'Terms of Service',
        href: '#terms'
      }]} />
      </div>;
  }
}`,...(W=(q=m.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var B,A,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    showScrim: false
  },
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0'
  }}>
        <Story />
      </div>]
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const le=["Default","WithoutScrim","WithDocumentLinks","WithAllLinks","Interactive","DialogOnly"];export{s as Default,p as DialogOnly,m as Interactive,d as WithAllLinks,u as WithDocumentLinks,c as WithoutScrim,le as __namedExportsOrder,oe as default};
