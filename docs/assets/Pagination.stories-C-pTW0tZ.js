import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DwQS_Y10.js";import{C as K}from"./ChevronLeftWide-BZ1_oH46.js";import{C as Q}from"./ChevronRightWide-BGEbEegk.js";const c="…";function U(o,s,r){if(s<=0)return[];if(s<=(r==="normal"?7:5))return Array.from({length:s},(n,m)=>m+1);const e=[];if(r==="normal")if(o<=4){for(let n=1;n<=5;n++)e.push(n);e.push(c,s)}else if(o>=s-3){e.push(1,c);for(let n=s-4;n<=s;n++)e.push(n)}else e.push(1,c,o-1,o,o+1,c,s);else if(o<=3){for(let n=1;n<=3;n++)e.push(n);e.push(c,s)}else if(o>=s-2){e.push(1,c);for(let n=s-2;n<=s;n++)e.push(n)}else e.push(1,c,o,c,s);return e}const d=l.forwardRef(({variant:o="normal",totalPages:s,currentPage:r,onPageChange:t,disabled:e=!1,className:n,...m},O)=>{const x=r<=1,h=r>=s,W=l.useCallback(()=>{!x&&!e&&(t==null||t(r-1))},[r,x,e,t]),$=l.useCallback(()=>{!h&&!e&&(t==null||t(r+1))},[r,h,e,t]),G=l.useCallback(i=>{!e&&i!==r&&(t==null||t(i))},[r,e,t]),H=l.useMemo(()=>o!=="condensed"?U(r,s,o):[],[r,s,o]);return a.jsxs("nav",{ref:O,"aria-label":"Pagination",className:["mds-pagination",n].filter(Boolean).join(" "),"data-variant":o,"data-disabled":e||void 0,...m,children:[a.jsx("button",{type:"button",className:"mds-pagination__arrow","aria-label":"Previous page",disabled:e||x,onClick:W,children:a.jsx("span",{className:"mds-pagination__arrow-layer",children:a.jsx(K,{size:20,style:{color:"currentColor"}})})}),o!=="condensed"?a.jsx("div",{className:"mds-pagination__pages",role:"list",children:H.map((i,J)=>typeof i=="string"?a.jsx("span",{className:"mds-pagination__page",role:"listitem","aria-hidden":!0,children:i},`ellipsis-${J}`):a.jsx("button",{type:"button",role:"listitem",className:"mds-pagination__page","data-active":i===r||void 0,"aria-current":i===r?"page":void 0,"aria-label":`Page ${i}`,disabled:e,onClick:()=>G(i),children:i},i))}):a.jsxs("span",{className:"mds-pagination__condensed-label",children:[r,"/",s]}),a.jsx("button",{type:"button",className:"mds-pagination__arrow","aria-label":"Next page",disabled:e||h,onClick:$,children:a.jsx("span",{className:"mds-pagination__arrow-layer",children:a.jsx(Q,{size:20,style:{color:"currentColor"}})})})]})});d.displayName="Pagination";d.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{variant:{required:!1,tsType:{name:"union",raw:"'normal' | 'mid' | 'condensed'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'mid'"},{name:"literal",value:"'condensed'"}]},description:"Display variant — normal shows most pages, mid fewer, condensed shows only current/total",defaultValue:{value:"'normal'",computed:!1}},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},currentPage:{required:!0,tsType:{name:"number"},description:"Currently active page (1-indexed)"},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback fired when a page is selected"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables all interaction",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ae={title:"Components/Pagination",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["normal","mid","condensed"],description:"Display variant — normal shows most pages, mid fewer, condensed only current/total"},totalPages:{control:{type:"number",min:1},description:"Total number of pages"},currentPage:{control:{type:"number",min:1},description:"Currently active page (1-indexed)"},disabled:{control:"boolean",description:"Disables all interaction"}},args:{variant:"normal",totalPages:11,currentPage:2,disabled:!1}},p={},u={args:{variant:"mid"}},g={args:{variant:"condensed",totalPages:3,currentPage:2}},f={args:{disabled:!0}},v={args:{totalPages:4,currentPage:1}},y={render:function(){const[s,r]=l.useState(2);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsx(d,{variant:"normal",totalPages:11,currentPage:s,onPageChange:r}),a.jsxs("p",{style:{fontFamily:"var(--font-family-sans)",fontSize:14,color:"var(--color-on-surface)"},children:["Current page: ",s]})]})}},P={render:function(){const[s,r]=l.useState(2),[t,e]=l.useState(2),[n,m]=l.useState(2);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--font-family-sans)",fontSize:14,color:"var(--color-on-surface)",marginBottom:8},children:"Normal"}),a.jsx(d,{variant:"normal",totalPages:11,currentPage:s,onPageChange:r})]}),a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--font-family-sans)",fontSize:14,color:"var(--color-on-surface)",marginBottom:8},children:"Mid"}),a.jsx(d,{variant:"mid",totalPages:11,currentPage:t,onPageChange:e})]}),a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--font-family-sans)",fontSize:14,color:"var(--color-on-surface)",marginBottom:8},children:"Condensed"}),a.jsx(d,{variant:"condensed",totalPages:3,currentPage:n,onPageChange:m})]})]})}};var b,j,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,N,C;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'mid'
  }
}`,...(C=(N=u.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var w,F,z;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'condensed',
    totalPages: 3,
    currentPage: 2
  }
}`,...(z=(F=g.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var D,M,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(M=f.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var V,k,B;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    totalPages: 4,
    currentPage: 1
  }
}`,...(B=(k=v.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var I,R,q;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function InteractivePagination() {
    const [page, setPage] = useState(2);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Pagination variant="normal" totalPages={11} currentPage={page} onPageChange={setPage} />
        <p style={{
        fontFamily: 'var(--font-family-sans)',
        fontSize: 14,
        color: 'var(--color-on-surface)'
      }}>
          Current page: {page}
        </p>
      </div>;
  }
}`,...(q=(R=y.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,E,L;P.parameters={...P.parameters,docs:{...(A=P.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function AllVariantsRender() {
    const [normalPage, setNormalPage] = useState(2);
    const [midPage, setMidPage] = useState(2);
    const [condensedPage, setCondensedPage] = useState(2);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <div>
          <p style={{
          fontFamily: 'var(--font-family-sans)',
          fontSize: 14,
          color: 'var(--color-on-surface)',
          marginBottom: 8
        }}>
            Normal
          </p>
          <Pagination variant="normal" totalPages={11} currentPage={normalPage} onPageChange={setNormalPage} />
        </div>
        <div>
          <p style={{
          fontFamily: 'var(--font-family-sans)',
          fontSize: 14,
          color: 'var(--color-on-surface)',
          marginBottom: 8
        }}>
            Mid
          </p>
          <Pagination variant="mid" totalPages={11} currentPage={midPage} onPageChange={setMidPage} />
        </div>
        <div>
          <p style={{
          fontFamily: 'var(--font-family-sans)',
          fontSize: 14,
          color: 'var(--color-on-surface)',
          marginBottom: 8
        }}>
            Condensed
          </p>
          <Pagination variant="condensed" totalPages={3} currentPage={condensedPage} onPageChange={setCondensedPage} />
        </div>
      </div>;
  }
}`,...(L=(E=P.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const se=["Normal","Mid","Condensed","Disabled","FewPages","Interactive","AllVariants"];export{P as AllVariants,g as Condensed,f as Disabled,v as FewPages,y as Interactive,u as Mid,p as Normal,se as __namedExportsOrder,ae as default};
