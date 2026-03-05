import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as $}from"./index-DwQS_Y10.js";import{B as t}from"./Button-cuP-Pnvr.js";const o=$.forwardRef(({orientation:i="vertical",imagePosition:U="after",contentAlign:G="top",headline:J,body:g,imageSrc:K,imageAlt:M="",actions:h,disclaimer:v,videoControls:y,className:X,...Y},Z)=>e.jsxs("div",{ref:Z,className:["mds-hero",X].filter(Boolean).join(" "),"data-orientation":i,"data-image-position":U,"data-content-align":G,...Y,children:[e.jsxs("div",{className:"mds-hero__content",children:[e.jsxs("div",{className:"mds-hero__copy",children:[e.jsx("p",{className:"mds-hero__headline",children:J}),g&&e.jsx("p",{className:"mds-hero__body",children:g})]}),e.jsxs("div",{className:"mds-hero__footer",children:[h&&e.jsx("div",{className:"mds-hero__actions",children:h}),v&&e.jsx("div",{className:"mds-hero__disclaimer",children:e.jsx("p",{children:v})})]})]}),e.jsx("div",{className:"mds-hero__image-container",children:e.jsxs("div",{className:"mds-hero__image",children:[e.jsx("img",{src:K,alt:M}),y&&e.jsx("div",{className:"mds-hero__video-controls",children:y})]})})]}));o.displayName="Hero";o.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction: side-by-side or stacked",defaultValue:{value:"'vertical'",computed:!1}},imagePosition:{required:!1,tsType:{name:"union",raw:"'after' | 'before'",elements:[{name:"literal",value:"'after'"},{name:"literal",value:"'before'"}]},description:"Whether the image appears before or after the text content",defaultValue:{value:"'after'",computed:!1}},contentAlign:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Vertical alignment of the content block (horizontal: top/bottom offset; vertical: stack order)",defaultValue:{value:"'top'",computed:!1}},headline:{required:!0,tsType:{name:"string"},description:"Hero display headline text"},body:{required:!1,tsType:{name:"string"},description:"Body copy below the headline"},imageSrc:{required:!0,tsType:{name:"string"},description:"Hero image source URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the hero image",defaultValue:{value:"''",computed:!1}},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons rendered below the copy"},disclaimer:{required:!1,tsType:{name:"string"},description:"Disclaimer text displayed beneath the actions"},videoControls:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Video control elements overlaid on the image"}}};const a="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",oe={title:"Components/Hero",component:o,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},imagePosition:{control:"select",options:["after","before"]},contentAlign:{control:"select",options:["top","bottom"]},headline:{control:"text"},body:{control:"text"},disclaimer:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},actions:{control:!1},videoControls:{control:!1}},args:{imageSrc:a,imageAlt:"Hero image",headline:"Hero display text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt.",disclaimer:"*Disclaimer Text"}},r={args:{orientation:"vertical",imagePosition:"after",contentAlign:"top",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})},decorators:[i=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{})})]},n={args:{orientation:"vertical",imagePosition:"before",contentAlign:"top",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})},decorators:[i=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{})})]},s={args:{orientation:"vertical",imagePosition:"after",contentAlign:"bottom",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})},decorators:[i=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{})})]},l={args:{orientation:"vertical",imagePosition:"before",contentAlign:"bottom",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]})},decorators:[i=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(i,{})})]},c={args:{orientation:"horizontal",imagePosition:"after",contentAlign:"top",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",size:"lg",inverted:!0,children:"Button Label"})]})}},d={args:{orientation:"horizontal",imagePosition:"after",contentAlign:"bottom",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",size:"lg",inverted:!0,children:"Button Label"})]})}},m={args:{orientation:"horizontal",imagePosition:"before",contentAlign:"top",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",size:"lg",inverted:!0,children:"Button Label"})]})}},u={args:{orientation:"horizontal",imagePosition:"before",contentAlign:"bottom",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",size:"lg",inverted:!0,children:"Button Label"})]})}},p={decorators:[()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx("h3",{style:{margin:0},children:"Vertical — Image After, Content Top"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(o,{orientation:"vertical",imagePosition:"after",contentAlign:"top",imageSrc:a,imageAlt:"Hero",headline:"Hero display text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"})}),e.jsx("h3",{style:{margin:0},children:"Vertical — Image Before, Content Bottom"}),e.jsx("div",{style:{maxWidth:375},children:e.jsx(o,{orientation:"vertical",imagePosition:"before",contentAlign:"bottom",imageSrc:a,imageAlt:"Hero",headline:"Hero display text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"})}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Image After, Content Top"}),e.jsx(o,{orientation:"horizontal",imagePosition:"after",contentAlign:"top",imageSrc:a,imageAlt:"Hero",headline:"Hero display text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",size:"lg",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"}),e.jsx("h3",{style:{margin:0},children:"Horizontal — Image Before, Content Bottom"}),e.jsx(o,{orientation:"horizontal",imagePosition:"before",contentAlign:"bottom",imageSrc:a,imageAlt:"Hero",headline:"Hero display text here",body:"Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.",actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"lg",inverted:!0,children:"Button Label"}),e.jsx(t,{variant:"secondary",size:"lg",inverted:!0,children:"Button Label"})]}),disclaimer:"*Disclaimer Text"})]})]};var f,B,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    imagePosition: 'after',
    contentAlign: 'top',
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
}`,...(x=(B=r.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var b,j,z;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    imagePosition: 'before',
    contentAlign: 'top',
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
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,L,H;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    imagePosition: 'after',
    contentAlign: 'bottom',
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
}`,...(H=(L=s.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var R,T,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    imagePosition: 'before',
    contentAlign: 'bottom',
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
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var S,P,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    imagePosition: 'after',
    contentAlign: 'top',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var O,V,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    imagePosition: 'after',
    contentAlign: 'bottom',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var Q,D,I;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
    contentAlign: 'top',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var W,F,C;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    imagePosition: 'before',
    contentAlign: 'bottom',
    body: 'Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis.',
    actions: <>
        <Button variant="primary" size="lg" inverted>
          Button Label
        </Button>
        <Button variant="secondary" size="lg" inverted>
          Button Label
        </Button>
      </>
  }
}`,...(C=(F=u.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var w,k,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [() => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
        <h3 style={{
      margin: 0
    }}>Vertical — Image After, Content Top</h3>
        <div style={{
      maxWidth: 375
    }}>
          <Hero orientation="vertical" imagePosition="after" contentAlign="top" imageSrc={sampleImage} imageAlt="Hero" headline="Hero display text here" body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium." actions={<>
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
    }}>Vertical — Image Before, Content Bottom</h3>
        <div style={{
      maxWidth: 375
    }}>
          <Hero orientation="vertical" imagePosition="before" contentAlign="bottom" imageSrc={sampleImage} imageAlt="Hero" headline="Hero display text here" body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium." actions={<>
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
    }}>Horizontal — Image After, Content Top</h3>
        <Hero orientation="horizontal" imagePosition="after" contentAlign="top" imageSrc={sampleImage} imageAlt="Hero" headline="Hero display text here" body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis." actions={<>
              <Button variant="primary" size="lg" inverted>
                Button Label
              </Button>
              <Button variant="secondary" size="lg" inverted>
                Button Label
              </Button>
            </>} disclaimer="*Disclaimer Text" />

        <h3 style={{
      margin: 0
    }}>Horizontal — Image Before, Content Bottom</h3>
        <Hero orientation="horizontal" imagePosition="before" contentAlign="bottom" imageSrc={sampleImage} imageAlt="Hero" headline="Hero display text here" body="Body copy goes here. Quidem occaecati nostrum qui modi alias vel. Officia eos dignissimos eum ea praesentium. Rem suscipit ea amet sunt. Reprehenderit nulla officiis." actions={<>
              <Button variant="primary" size="lg" inverted>
                Button Label
              </Button>
              <Button variant="secondary" size="lg" inverted>
                Button Label
              </Button>
            </>} disclaimer="*Disclaimer Text" />
      </div>]
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const ae=["Default","VerticalBeforeTop","VerticalAfterBottom","VerticalBeforeBottom","HorizontalAfterTop","HorizontalAfterBottom","HorizontalBeforeTop","HorizontalBeforeBottom","AllVariants"];export{p as AllVariants,r as Default,d as HorizontalAfterBottom,c as HorizontalAfterTop,u as HorizontalBeforeBottom,m as HorizontalBeforeTop,s as VerticalAfterBottom,l as VerticalBeforeBottom,n as VerticalBeforeTop,ae as __namedExportsOrder,oe as default};
