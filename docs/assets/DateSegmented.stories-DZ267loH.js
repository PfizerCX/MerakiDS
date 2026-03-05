import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./index-DwQS_Y10.js";import{C as G}from"./ChevronDown-DuL3N5CD.js";const Ge=["January","February","March","April","May","June","July","August","September","October","November","December"];function E(r,o){return r==null||o==null?31:new Date(o,r,0).getDate()}function Be(r,o){const l=[];for(let m=r;m<=o;m++)l.push(m);return l}const _=B.forwardRef(({groupLabel:r,format:o="MDY",showMonth:l=!0,showDate:m=!0,showYear:ye=!0,value:a,onChange:j,monthLabel:xe="Month",dateLabel:Me="Date",yearLabel:Ye="Year",monthPlaceholder:Se="",datePlaceholder:_e="",yearPlaceholder:je="",minYear:Le=1900,maxYear:we=new Date().getFullYear(),required:L,disabled:i,error:c=!1,errorText:F,helperText:w,className:qe,...ve},Ne)=>{const d=B.useId(),P=`${d}-helper`,q=c&&F,Te=E(a==null?void 0:a.month,a==null?void 0:a.year),Ce=Be(Le,we),v=(t,n)=>{const V=n===""?void 0:Number(n),u={...a,[t]:V};if(t==="month"||t==="year"){const A=E(t==="month"?V:a==null?void 0:a.month,t==="year"?V:a==null?void 0:a.year);u.date!=null&&u.date>A&&(u.date=A)}j==null||j(u)},N=l&&e.jsxs("div",{className:"mds-date-segmented__field",children:[e.jsxs("label",{className:"mds-date-segmented__label",htmlFor:`${d}-month`,children:[xe,L&&e.jsx("span",{className:"mds-date-segmented__required",children:"*"})]}),e.jsxs("div",{className:"mds-date-segmented__select-wrapper",children:[e.jsxs("select",{id:`${d}-month`,className:"mds-date-segmented__select",value:(a==null?void 0:a.month)??"",onChange:t=>v("month",t.target.value),disabled:i,"aria-invalid":c||void 0,children:[e.jsx("option",{value:"",children:Se}),Ge.map((t,n)=>e.jsx("option",{value:n+1,children:t},n+1))]}),e.jsx(G,{size:20,className:"mds-date-segmented__chevron","aria-hidden":"true"})]})]},"month"),T=m&&e.jsxs("div",{className:"mds-date-segmented__field",children:[e.jsxs("label",{className:"mds-date-segmented__label",htmlFor:`${d}-date`,children:[Me,L&&e.jsx("span",{className:"mds-date-segmented__required",children:"*"})]}),e.jsxs("div",{className:"mds-date-segmented__select-wrapper",children:[e.jsxs("select",{id:`${d}-date`,className:"mds-date-segmented__select",value:(a==null?void 0:a.date)??"",onChange:t=>v("date",t.target.value),disabled:i,"aria-invalid":c||void 0,children:[e.jsx("option",{value:"",children:_e}),Array.from({length:Te},(t,n)=>e.jsx("option",{value:n+1,children:n+1},n+1))]}),e.jsx(G,{size:20,className:"mds-date-segmented__chevron","aria-hidden":"true"})]})]},"date"),C=ye&&e.jsxs("div",{className:"mds-date-segmented__field",children:[e.jsxs("label",{className:"mds-date-segmented__label",htmlFor:`${d}-year`,children:[Ye,L&&e.jsx("span",{className:"mds-date-segmented__required",children:"*"})]}),e.jsxs("div",{className:"mds-date-segmented__select-wrapper",children:[e.jsxs("select",{id:`${d}-year`,className:"mds-date-segmented__select",value:(a==null?void 0:a.year)??"",onChange:t=>v("year",t.target.value),disabled:i,"aria-invalid":c||void 0,children:[e.jsx("option",{value:"",children:je}),Ce.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsx(G,{size:20,className:"mds-date-segmented__chevron","aria-hidden":"true"})]})]},"year"),Ve={MDY:[N,T,C],DMY:[T,N,C],YMD:[C,N,T]};return e.jsxs("fieldset",{ref:Ne,className:["mds-date-segmented",qe].filter(Boolean).join(" "),"data-format":o,"data-error":c||void 0,"data-disabled":i||void 0,disabled:i,"aria-describedby":w||q?P:void 0,...ve,children:[r&&e.jsx("legend",{className:"mds-date-segmented__legend",children:r}),e.jsx("div",{className:"mds-date-segmented__fields",children:Ve[o]}),(w||q)&&e.jsx("p",{className:"mds-date-segmented__helper",id:P,children:q?F:w})]})});_.displayName="DateSegmented";_.__docgenInfo={description:"",methods:[],displayName:"DateSegmented",props:{groupLabel:{required:!1,tsType:{name:"string"},description:"Label displayed above the date segments"},format:{required:!1,tsType:{name:"union",raw:"'MDY' | 'DMY' | 'YMD'",elements:[{name:"literal",value:"'MDY'"},{name:"literal",value:"'DMY'"},{name:"literal",value:"'YMD'"}]},description:"Segment ordering format",defaultValue:{value:"'MDY'",computed:!1}},showMonth:{required:!1,tsType:{name:"boolean"},description:"Show the month selector",defaultValue:{value:"true",computed:!1}},showDate:{required:!1,tsType:{name:"boolean"},description:"Show the date selector",defaultValue:{value:"true",computed:!1}},showYear:{required:!1,tsType:{name:"boolean"},description:"Show the year selector",defaultValue:{value:"true",computed:!1}},value:{required:!1,tsType:{name:"DateSegmentedValue"},description:"Controlled value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateSegmentedValue) => void",signature:{arguments:[{type:{name:"DateSegmentedValue"},name:"value"}],return:{name:"void"}}},description:"Called when any segment changes"},monthLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the month field",defaultValue:{value:"'Month'",computed:!1}},dateLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the date field",defaultValue:{value:"'Date'",computed:!1}},yearLabel:{required:!1,tsType:{name:"string"},description:"Custom label for the year field",defaultValue:{value:"'Year'",computed:!1}},monthPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for unselected month",defaultValue:{value:"''",computed:!1}},datePlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for unselected date",defaultValue:{value:"''",computed:!1}},yearPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for unselected year",defaultValue:{value:"''",computed:!1}},minYear:{required:!1,tsType:{name:"number"},description:"Minimum year in the year dropdown",defaultValue:{value:"1900",computed:!1}},maxYear:{required:!1,tsType:{name:"number"},description:"Maximum year in the year dropdown",defaultValue:{value:"new Date().getFullYear()",computed:!0}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field group is required"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the field group is disabled"},error:{required:!1,tsType:{name:"boolean"},description:"Whether the field group is in an error state",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:"Error message displayed below the segments"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the segments"}},composes:["Omit"]};const Ee={title:"Components/DateSegmented",component:_,tags:["autodocs"],argTypes:{format:{control:"select",options:["MDY","DMY","YMD"]},showMonth:{control:"boolean"},showDate:{control:"boolean"},showYear:{control:"boolean"},required:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{groupLabel:"Group Label",format:"MDY",showMonth:!0,showDate:!0,showYear:!0}};function s(r){const[o,l]=B.useState({month:3,date:23,year:1996});return e.jsx(_,{...r,value:o,onChange:l})}const p={render:r=>e.jsx(s,{...r})},g={args:{format:"MDY",groupLabel:"Group Label"},render:r=>e.jsx(s,{...r})},h={args:{format:"DMY",groupLabel:"Group Label"},render:r=>e.jsx(s,{...r})},f={args:{format:"YMD",groupLabel:"Group Label"},render:r=>e.jsx(s,{...r})},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48},children:[e.jsx(s,{groupLabel:"Group Label",format:"MDY"}),e.jsx(s,{groupLabel:"Group Label",format:"DMY"}),e.jsx(s,{groupLabel:"Group Label",format:"YMD"})]})},b={args:{required:!0,groupLabel:"Date of Birth"},render:r=>e.jsx(s,{...r})},y={args:{groupLabel:"Date of Birth",helperText:"Select your date of birth"},render:r=>e.jsx(s,{...r})},x={args:{groupLabel:"Date of Birth",error:!0,errorText:"Please select a valid date"},render:r=>e.jsx(s,{...r})},M={args:{groupLabel:"Date of Birth",disabled:!0},render:r=>e.jsx(s,{...r})},Y={args:{groupLabel:"Select Month",showDate:!1,showYear:!1},render:r=>e.jsx(s,{...r})},S={args:{groupLabel:"Month & Year",showDate:!1},render:r=>e.jsx(s,{...r})};var O,$,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <DateSegmentedControlled {...args} />
}`,...(I=($=p.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var R,W,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    format: 'MDY',
    groupLabel: 'Group Label'
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(H=(W=g.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var z,J,k;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    format: 'DMY',
    groupLabel: 'Group Label'
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(k=(J=h.parameters)==null?void 0:J.docs)==null?void 0:k.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    format: 'YMD',
    groupLabel: 'Group Label'
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <DateSegmentedControlled groupLabel="Group Label" format="MDY" />
      <DateSegmentedControlled groupLabel="Group Label" format="DMY" />
      <DateSegmentedControlled groupLabel="Group Label" format="YMD" />
    </div>
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    required: true,
    groupLabel: 'Date of Birth'
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ne;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    groupLabel: 'Date of Birth',
    helperText: 'Select your date of birth'
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,le,me;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    groupLabel: 'Date of Birth',
    error: true,
    errorText: 'Please select a valid date'
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(me=(le=x.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ie,ce,ue;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    groupLabel: 'Date of Birth',
    disabled: true
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(ue=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,ge,he;Y.parameters={...Y.parameters,docs:{...(pe=Y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    groupLabel: 'Select Month',
    showDate: false,
    showYear: false
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(he=(ge=Y.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,De,be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    groupLabel: 'Month & Year',
    showDate: false
  },
  render: args => <DateSegmentedControlled {...args} />
}`,...(be=(De=S.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};const Oe=["Default","MonthDateYear","DateMonthYear","YearMonthDate","AllFormats","Required","WithHelperText","ErrorState","Disabled","MonthOnly","MonthAndYear"];export{D as AllFormats,h as DateMonthYear,p as Default,M as Disabled,x as ErrorState,S as MonthAndYear,g as MonthDateYear,Y as MonthOnly,b as Required,y as WithHelperText,f as YearMonthDate,Oe as __namedExportsOrder,Ee as default};
