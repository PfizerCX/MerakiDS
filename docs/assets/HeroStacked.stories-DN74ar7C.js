import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as X}from"./index-DwQS_Y10.js";import{B as t}from"./Button-cuP-Pnvr.js";import{P as F,V as O}from"./Volume-Y35r4cTh.js";const i=X.forwardRef(({orientation:o="horizontal",textPosition:Q="right",imageSrc:E,imageAlt:M="",headline:U,body:p,actions:v,disclaimer:x,videoControls:g,className:G,...J},K)=>e.jsxs("div",{ref:K,className:["mds-hero-stacked",G].filter(Boolean).join(" "),"data-orientation":o,"data-text-position":Q,...J,children:[e.jsxs("div",{className:"mds-hero-stacked__image",children:[e.jsx("img",{src:E,alt:M}),g&&e.jsx("div",{className:"mds-hero-stacked__video-controls",children:g})]}),e.jsxs("div",{className:"mds-hero-stacked__content",children:[e.jsxs("div",{className:"mds-hero-stacked__copy",children:[e.jsx("p",{className:"mds-hero-stacked__headline",children:U}),p&&e.jsx("p",{className:"mds-hero-stacked__body",children:p})]}),e.jsxs("div",{className:"mds-hero-stacked__footer",children:[v&&e.jsx("div",{className:"mds-hero-stacked__actions",children:v}),x&&e.jsx("div",{className:"mds-hero-stacked__disclaimer",children:e.jsx("p",{children:x})})]})]})]}));i.displayName="HeroStacked";i.__docgenInfo={description:"",methods:[],displayName:"HeroStacked",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction: side-by-side content or fully stacked",defaultValue:{value:"'horizontal'",computed:!1}},textPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Where the text content block appears relative to the image",defaultValue:{value:"'right'",computed:!1}},imageSrc:{required:!0,tsType:{name:"string"},description:"Hero image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the hero image",defaultValue:{value:"''",computed:!1}},headline:{required:!0,tsType:{name:"string"},description:"Hero headline text"},body:{required:!1,tsType:{name:"string"},description:"Body copy below the headline"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons rendered in the footer"},disclaimer:{required:!1,tsType:{name:"string"},description:"Disclaimer text displayed beneath the actions"},videoControls:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Video control elements overlaid on the image"}}};const r="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",y={appearance:"none",border:"none",padding:0,margin:0,display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"var(--radius-7)",backgroundColor:"var(--color-scrim)",color:"white",cursor:"pointer"},f={...y,width:40,height:40},a=e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",style:y,"aria-label":"Pause",children:e.jsx(F,{size:24,style:{color:"white"}})}),e.jsx("button",{type:"button",style:y,"aria-label":"Mute",children:e.jsx(O,{size:24,style:{color:"white"}})})]}),h=e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",style:f,"aria-label":"Pause",children:e.jsx(F,{size:24,style:{color:"white"}})}),e.jsx("button",{type:"button",style:f,"aria-label":"Mute",children:e.jsx(O,{size:24,style:{color:"white"}})})]}),te={title:"Components/HeroStacked",component:i,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},textPosition:{control:"select",options:["left","right"]},headline:{control:"text"},body:{control:"text"},disclaimer:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},actions:{control:!1},videoControls:{control:!1}},args:{imageSrc:r,imageAlt:"Hero image",headline:"Hero headline text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",disclaimer:"*Disclaimer Text"}},n={args:{orientation:"horizontal",textPosition:"right",videoControls:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})}},s={args:{orientation:"horizontal",textPosition:"left",videoControls:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})}},l={args:{orientation:"vertical",textPosition:"right",headline:"Hero display text here",body:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...",videoControls:h,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})},decorators:[o=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(o,{})})]},d={args:{orientation:"vertical",textPosition:"left",headline:"Hero display text here",body:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...",videoControls:h,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})},decorators:[o=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(o,{})})]},c={args:{orientation:"horizontal",textPosition:"right",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})}},u={args:{orientation:"horizontal",textPosition:"right",disclaimer:void 0,videoControls:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})}},m={decorators:[()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx("h3",{style:{margin:0},children:"Horizontal — Text Right"}),e.jsx(i,{orientation:"horizontal",textPosition:"right",imageSrc:r,imageAlt:"Hero",headline:"Hero headline text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",videoControls:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Text Left"}),e.jsx(i,{orientation:"horizontal",textPosition:"left",imageSrc:r,imageAlt:"Hero",headline:"Hero headline text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",videoControls:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"}),e.jsx("h3",{style:{margin:0},children:"Vertical — Text Right"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{orientation:"vertical",textPosition:"right",imageSrc:r,imageAlt:"Hero",headline:"Hero display text here",body:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...",videoControls:h,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"})}),e.jsx("h3",{style:{margin:0},children:"Vertical — Text Left"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{orientation:"vertical",textPosition:"left",imageSrc:r,imageAlt:"Hero",headline:"Hero display text here",body:"Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...",videoControls:h,actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"})})]})]};var B,b,j;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    textPosition: 'right',
    videoControls: videoControlsHorizontal,
    actions: <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var L,H,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    textPosition: 'left',
    videoControls: videoControlsHorizontal,
    actions: <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(w=(H=s.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var C,z,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    textPosition: 'right',
    headline: 'Hero display text here',
    body: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...',
    videoControls: videoControlsVertical,
    actions: <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var R,T,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    textPosition: 'left',
    headline: 'Hero display text here',
    body: 'Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ...',
    videoControls: videoControlsVertical,
    actions: <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}>
        <Story />
      </div>]
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var V,_,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    textPosition: 'right',
    actions: <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var W,N,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    textPosition: 'right',
    disclaimer: undefined,
    videoControls: videoControlsHorizontal,
    actions: <>
        <Button variant="primary" inverted>
          Button Label
        </Button>
        <Button variant="secondary" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var A,I,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
        <h3 style={{
      margin: 0
    }}>Horizontal — Text Right</h3>
        <HeroStacked orientation="horizontal" textPosition="right" imageSrc={sampleImage} imageAlt="Hero" headline="Hero headline text here" body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis." videoControls={videoControlsHorizontal} actions={<>
              <Button variant="primary" inverted>
                Button Label
              </Button>
              <Button variant="secondary" inverted>
                Button Label
              </Button>
            </>} disclaimer="*Disclaimer Text" />

        <h3 style={{
      margin: 0
    }}>Horizontal — Text Left</h3>
        <HeroStacked orientation="horizontal" textPosition="left" imageSrc={sampleImage} imageAlt="Hero" headline="Hero headline text here" body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis." videoControls={videoControlsHorizontal} actions={<>
              <Button variant="primary" inverted>
                Button Label
              </Button>
              <Button variant="secondary" inverted>
                Button Label
              </Button>
            </>} disclaimer="*Disclaimer Text" />

        <h3 style={{
      margin: 0
    }}>Vertical — Text Right</h3>
        <div style={{
      maxWidth: 375
    }}>
          <HeroStacked orientation="vertical" textPosition="right" imageSrc={sampleImage} imageAlt="Hero" headline="Hero display text here" body="Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ..." videoControls={videoControlsVertical} actions={<>
                <Button variant="primary" inverted>
                  Button Label
                </Button>
                <Button variant="secondary" inverted>
                  Button Label
                </Button>
              </>} disclaimer="*Disclaimer Text" />
        </div>

        <h3 style={{
      margin: 0
    }}>Vertical — Text Left</h3>
        <div style={{
      maxWidth: 375
    }}>
          <HeroStacked orientation="vertical" textPosition="left" imageSrc={sampleImage} imageAlt="Hero" headline="Hero display text here" body="Write a helpful and concise body copy with 4 lines of text maximum. If you go over 4 lines it will truncate your copy so that if you try and type in 5 or 6 lines then it will cut it off at 4 and add ..." videoControls={videoControlsVertical} actions={<>
                <Button variant="primary" inverted>
                  Button Label
                </Button>
                <Button variant="secondary" inverted>
                  Button Label
                </Button>
              </>} disclaimer="*Disclaimer Text" />
        </div>
      </div>]
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const ie=["HorizontalRight","HorizontalLeft","VerticalRight","VerticalLeft","WithoutVideoControls","WithoutDisclaimer","AllVariants"];export{m as AllVariants,s as HorizontalLeft,n as HorizontalRight,d as VerticalLeft,l as VerticalRight,u as WithoutDisclaimer,c as WithoutVideoControls,ie as __namedExportsOrder,te as default};
