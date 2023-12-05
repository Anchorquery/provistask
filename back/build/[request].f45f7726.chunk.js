"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[6750],{2225:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(59254),d=t(72450),u=t(96476),g=t(5529),r=t(44747),a=t(35725),l=t(11880),f=(v=>v&&v.__esModule?v:{default:v})(d),x=f.default(r.Box)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${({theme:v})=>v.colors.neutral700};
    }
  }

  ${g.buttonFocusStyle};
`,T=f.default(a.Flex)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${u.handleIconColor};
    }
  }
`,M=({variant:v,...b})=>v==="success"?e.jsx(n.CheckCircle,{...b}):v==="danger"||v==="warning"?e.jsx(n.ExclamationMarkCircle,{...b}):e.jsx(n.Information,{...b}),m=f.default(r.Box)`
  & a > span {
    color: ${u.handleIconColor};
  }

  svg path {
    fill: ${u.handleIconColor};
  }
`,c=({title:v,children:b,variant:E="default",onClose:C,closeLabel:s,titleAs:h="p",action:p,...j})=>e.jsxs(a.Flex,{alignItems:"flex-start",background:u.handleBackgroundColor(E),borderColor:u.handleBorderColor(E),boxShadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,variant:E,...j,children:[e.jsx(T,{height:`${20/16}rem`,shrink:0,variant:E,width:`${20/16}rem`,children:e.jsx(M,{"aria-hidden":!0,variant:E})}),e.jsxs(a.Flex,{alignItems:"start",gap:p?2:1,wrap:"wrap",role:E==="danger"?"alert":"status",width:"100%",children:[v&&e.jsx(l.Typography,{fontWeight:"bold",textColor:"neutral800",as:h,children:v}),e.jsx(l.Typography,{as:"p",textColor:"neutral800",children:b}),p&&e.jsx(m,{variant:E,children:p})]}),e.jsx(x,{as:"button",background:"transparent",borderColor:void 0,height:`${12/16}rem`,marginTop:1,onClick:C,width:`${12/16}rem`,"aria-label":s,children:e.jsx(n.Cross,{"aria-hidden":!0})})]});o.Alert=c},79532:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(2225);o.Alert=e.Alert},96476:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=d=>{switch(d){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},e=d=>t(d).replace("100","200"),n=({theme:d,variant:u})=>u==="danger"?d.colors.danger700:u==="success"?d.colors.success700:u==="warning"?d.colors.warning700:d.colors.primary700;o.handleBackgroundColor=t,o.handleBorderColor=e,o.handleIconColor=n},23455:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(43680),g=t(73648),r=t(96087),a=t(12416),l=t(44747),i=c=>c&&c.__esModule?c:{default:c};function f(c){if(c&&c.__esModule)return c;const v=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(c){for(const b in c)if(b!=="default"){const E=Object.getOwnPropertyDescriptor(c,b);Object.defineProperty(v,b,E.get?E:{enumerable:!0,get:()=>c[b]})}}return v.default=c,Object.freeze(v)}const x=f(n),M=i(d).default.input`
  height: ${r.getCheckboxSize};
  min-width: ${r.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:c})=>c.borderRadius};
  border: 1px solid ${({theme:c})=>c.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:c})=>c.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:c})=>c.colors.primary600};
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${g}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${u}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:c})=>c.colors.neutral200};
    border: 1px solid ${({theme:c})=>c.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:c})=>c.colors.primary600};
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:c})=>c.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:c})=>c.colors.neutral200};
      border: 1px solid ${({theme:c})=>c.colors.neutral300};
      &:after {
        background-color: ${({theme:c})=>c.colors.neutral500};
      }
    }
  }
`,m=x.forwardRef(({indeterminate:c=!1,size:v="M",name:b,value:E=!1,onValueChange:C,...s},h)=>{const p=x.useRef(null),j=a.useComposedRefs(p,h);x.useEffect(()=>{p.current&&c?p.current.indeterminate=c:p.current.indeterminate=!1},[c]);const P=()=>{C&&C(!E)};return e.jsx(l.Box,{children:e.jsx(M,{size:v,checked:E,onChange:P,type:"checkbox",ref:j,name:b,...s})})});m.displayName="BaseCheckbox",o.BaseCheckbox=m},43680:y=>{const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";y.exports=o},73648:y=>{const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=";y.exports=o},96087:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=({size:e})=>e==="M"?"18px":"20px";o.getCheckboxSize=t},45099:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(54673),g=t(20565),r=t(11880),a=t(23455),l=t(59817),i=t(35725),f=t(44747),x=t(63391),T=t(28518),M=s=>s&&s.__esModule?s:{default:s};function m(s){if(s&&s.__esModule)return s;const h=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(s){for(const p in s)if(p!=="default"){const j=Object.getOwnPropertyDescriptor(s,p);Object.defineProperty(h,p,j.get?j:{enumerable:!0,get:()=>s[p]})}}return h.default=s,Object.freeze(h)}const c=m(n),b=M(d).default(r.Typography)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};
  }
`,E=c.forwardRef((s,h)=>{const{id:p}=g.useField();return e.jsx(a.BaseCheckbox,{ref:h,id:p,...s})}),C=c.forwardRef(({children:s,disabled:h=!1,id:p,hint:j,error:P,...N},R)=>{const w=u.useId(p);let F;return P?F=`${w}-error`:j&&(F=`${w}-hint`),e.jsx(l.Field,{id:w,hint:j,error:P,children:e.jsxs(i.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsxs(b,{as:"label",textColor:"neutral800",disabled:h,children:[e.jsx(E,{ref:R,disabled:h,"aria-describedby":F,...N}),e.jsx(f.Box,{paddingLeft:2,children:s})]}),e.jsx(x.FieldHint,{}),e.jsx(T.FieldError,{})]})})});o.Checkbox=C},67989:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(45099);o.Checkbox=e.Checkbox},19658:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(44747),r=(l=>l&&l.__esModule?l:{default:l})(n).default(d.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:l})=>l?"margin: 0;":""}
`,a=({unsetMargin:l=!0,...i})=>e.jsx(r,{...i,background:"neutral150",as:"hr",unsetMargin:l});o.Divider=a},59817:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(20565),u=t(54673),g=t(44747),r=n.forwardRef(({children:a,name:l,error:i,hint:f,id:x,required:T=!1,...M},m)=>{const c=u.useId(x),v=n.useMemo(()=>({name:l,id:c,error:i,hint:f,required:T}),[i,c,f,l,T]);return e.jsx(g.Box,{ref:m,...M,children:e.jsx(d.FieldContext.Provider,{value:v,children:a})})});o.Field=r},20565:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),n=e.createContext({id:"",required:!1}),d=()=>e.useContext(n);o.FieldContext=n,o.useField=d},28518:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(20565),d=t(11880),u=()=>{const{id:g,error:r}=n.useField();return!r||typeof r!="string"?null:e.jsx(d.Typography,{variant:"pi",as:"p",id:`${g}-error`,textColor:"danger600","data-strapi-field-error":!0,children:r})};o.FieldError=u},63391:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(20565),d=t(11880),u=()=>{const{id:g,hint:r,error:a}=n.useField();return!r||a?null:e.jsx(d.Typography,{variant:"pi",as:"p",id:`${g}-hint`,textColor:"neutral600",children:r})};o.FieldHint=u},20601:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(20565),g=t(5529),r=t(44747),a=t(35725),i=(m=>m&&m.__esModule?m:{default:m})(d),f={S:6.5,M:10.5},x=n.forwardRef(({endAction:m,startAction:c,disabled:v=!1,onChange:b,size:E="M",...C},s)=>{const{id:h,error:p,hint:j,name:P,required:N}=u.useField();let R;p?R=`${h}-error`:j&&(R=`${h}-hint`);const w=Boolean(p),F=G=>{!v&&b&&b(G)};return e.jsxs(M,{justifyContent:"space-between",hasError:w,disabled:v,children:[c?e.jsx(r.Box,{paddingLeft:3,paddingRight:2,children:c}):null,e.jsx(T,{id:h,name:P,ref:s,"aria-describedby":R,"aria-invalid":w,"aria-disabled":v,disabled:v,"data-disabled":v?"":void 0,hasLeftAction:Boolean(c),hasRightAction:Boolean(m),onChange:F,"aria-required":N,$size:E,...C}),m?e.jsx(r.Box,{paddingLeft:2,paddingRight:3,children:m}):null]})}),T=i.default.input`
  border: none;
  border-radius: ${({theme:m})=>m.borderRadius};
  padding-bottom: ${({$size:m})=>`${f[m]/16}rem`};
  padding-left: ${({theme:m,hasLeftAction:c})=>c?0:m.spaces[4]};
  padding-right: ${({theme:m,hasRightAction:c})=>c?0:m.spaces[4]};
  padding-top: ${({$size:m})=>`${f[m]/16}rem`};
  cursor: ${m=>m["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:m})=>m.colors.neutral800};
  font-weight: 400;
  font-size: ${m=>m.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:m})=>m.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,M=i.default(a.Flex)`
  border: 1px solid ${({theme:m,hasError:c})=>c?m.colors.danger600:m.colors.neutral200};
  border-radius: ${({theme:m})=>m.borderRadius};
  background: ${({theme:m})=>m.colors.neutral0};
  ${g.inputFocusStyle()}

  ${({theme:m,disabled:c})=>c?d.css`
          color: ${m.colors.neutral600};
          background: ${m.colors.neutral150};
        `:void 0}
`;o.FieldInput=x,o.InputWrapper=M},69803:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(20565),g=t(63832),r=t(11880),a=t(35725),i=(c=>c&&c.__esModule?c:{default:c})(d),f=g.once(console.warn),x=n.forwardRef(({children:c,action:v,required:b,...E},C)=>{const{id:s,required:h}=u.useField(),p=h||b;return b!==void 0&&f('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),e.jsxs(T,{ref:C,variant:"pi",textColor:"neutral800",htmlFor:s,fontWeight:"bold",as:"label",...E,children:[c,p&&e.jsx(M,{textColor:"danger600",children:"*"}),v&&e.jsx(m,{marginLeft:1,children:v})]})}),T=i.default(r.Typography)`
  display: flex;
  align-items: center;
`,M=i.default(r.Typography)`
  line-height: 0;
`,m=i.default(a.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:c})=>c.colors.neutral500};
  }
`;o.FieldLabel=x},44076:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(83315),u=t(44747),a=(i=>i&&i.__esModule?i:{default:i})(n).default(u.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:i})=>i}, 1fr);
  ${({theme:i,gap:f})=>d("gap",f,i)}
`,l=i=>{const{gap:f="0",gridCols:x=12,...T}=i;return e.jsx(a,{gap:f,gridCols:x,...T})};o.Grid=l},3528:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),n=t(44747),g=(r=>r&&r.__esModule?r:{default:r})(e).default(n.Box)`
  grid-column: span ${({col:r})=>r};
  max-width: 100%;

  ${({theme:r})=>r.mediaQueries.tablet} {
    grid-column: span ${({s:r})=>r};
  }

  ${({theme:r})=>r.mediaQueries.mobile} {
    grid-column: span ${({xs:r})=>r};
  }
`;o.GridItem=g},96053:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(44076),n=t(3528);o.Grid=e.Grid,o.GridItem=n.GridItem},12219:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(8876),u=t(44747),g=t(35725);function r(i){if(i&&i.__esModule)return i;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(i){for(const x in i)if(x!=="default"){const T=Object.getOwnPropertyDescriptor(i,x);Object.defineProperty(f,x,T.get?T:{enumerable:!0,get:()=>i[x]})}}return f.default=i,Object.freeze(f)}const a=r(n),l=({children:i,label:f="Pagination",activePage:x,pageCount:T})=>{const M=a.useMemo(()=>({activePage:x,pageCount:T}),[x,T]);return e.jsx(d.PaginationContext.Provider,{value:M,children:e.jsx(u.Box,{"aria-label":f,as:"nav",children:e.jsx(g.Flex,{as:"ol",gap:1,children:a.Children.map(i,(m,c)=>e.jsx("li",{children:m},c))})})})};o.Pagination=l},8876:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),n=e.createContext({activePage:1,pageCount:1}),d=()=>e.useContext(n);o.PaginationContext=n,o.usePagination=d},80247:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(59254),d=t(47533),u=t(72450),g=t(8876),r=t(5529),a=t(70321),l=t(11880),i=t(44747),x=(s=>s&&s.__esModule?s:{default:s})(u),T={active:!0},M=x.default(d.NavLink).withConfig({shouldForwardProp:(s,h)=>!T[s]&&h(s)})`
  padding: ${({theme:s})=>s.spaces[3]};
  border-radius: ${({theme:s})=>s.borderRadius};
  box-shadow: ${({active:s,theme:h})=>s?h.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${r.buttonFocusStyle}
`,m=x.default(M)`
  color: ${({theme:s,active:h})=>h?s.colors.primary700:s.colors.neutral800};
  background: ${({theme:s,active:h})=>h?s.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:s})=>s.shadows.filterShadow};
  }
`,c=x.default(M)`
  font-size: ${11/16}rem;

  svg path {
    fill: ${s=>s["aria-disabled"]?s.theme.colors.neutral300:s.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${s=>s["aria-disabled"]?s.theme.colors.neutral300:s.theme.colors.neutral700};
    }
  }

  ${s=>s["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,v=({children:s,to:h,...p})=>{const{activePage:j}=g.usePagination(),P=j===1;return e.jsxs(c,{to:P?"#":h,"aria-disabled":P,tabIndex:P?-1:void 0,...p,children:[e.jsx(a.VisuallyHidden,{children:s}),e.jsx(n.ChevronLeft,{"aria-hidden":!0})]})};v.displayName="PreviousLink";const b=({children:s,to:h,...p})=>{const{activePage:j,pageCount:P}=g.usePagination(),N=j===P;return e.jsxs(c,{to:N?"#":h,"aria-disabled":N,tabIndex:N?-1:void 0,...p,children:[e.jsx(a.VisuallyHidden,{children:s}),e.jsx(n.ChevronRight,{"aria-hidden":!0})]})};b.displayName="NextLink";const E=({number:s,children:h,...p})=>{const{activePage:j}=g.usePagination(),P=j===s;return e.jsxs(m,{...p,active:P,children:[e.jsx(a.VisuallyHidden,{children:h}),e.jsx(l.Typography,{"aria-hidden":!0,fontWeight:P?"bold":void 0,lineHeight:"revert",variant:"pi",children:s})]})};E.displayName="PageLink";const C=({children:s,...h})=>e.jsxs(i.Box,{...h,children:[e.jsx(a.VisuallyHidden,{children:s}),e.jsx(l.Typography,{"aria-hidden":!0,lineHeight:"revert",textColor:"neutral800",variant:"pi",children:"\u2026"})]});o.Dots=C,o.NextLink=b,o.PageLink=E,o.PreviousLink=v},28211:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(12219),n=t(80247);o.Pagination=e.Pagination,o.Dots=n.Dots,o.NextLink=n.NextLink,o.PageLink=n.PageLink,o.PreviousLink=n.PreviousLink},36145:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(69530),u=t(44747);function g(l){if(l&&l.__esModule)return l;const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(l){for(const f in l)if(f!=="default"){const x=Object.getOwnPropertyDescriptor(l,f);Object.defineProperty(i,f,x.get?x:{enumerable:!0,get:()=>l[f]})}}return i.default=l,Object.freeze(i)}const a=g(n).forwardRef(({container:l=globalThis?.document?.body,...i},f)=>l?d.createPortal(e.jsx(u.Box,{ref:f,...i}),l):null);a.displayName="Portal",o.Portal=a},24986:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(29935),u=t(70598),g=t(77547),r=t(44747),a=i=>e.jsx(l,{...i,as:"th"}),l=({coords:i={col:0,row:0},as:f="td",...x})=>{const T=n.useRef(null),{rowIndex:M,colIndex:m,setTableValues:c}=d.useTable(),[v,b]=n.useState(!1),E=h=>{const p=u.getFocusableNodes(T.current,!0);if(p.length===0||p.length===1&&u.getFocusableNodesWithKeyboardNav(p).length===0)return;if(p.length>1&&!p.find(P=>P.tagName!=="BUTTON")){h.preventDefault();const P=p.findIndex(N=>N===document.activeElement);if(h.key===g.KeyboardKeys.RIGHT){const N=p[P+1];N&&(h.stopPropagation(),N.focus())}else if(h.key===g.KeyboardKeys.LEFT){const N=p[P-1];N&&(h.stopPropagation(),N.focus())}return}const j=h.key===g.KeyboardKeys.ENTER;if(j&&!v)b(!0);else if((h.key===g.KeyboardKeys.ESCAPE||j)&&v){if(j&&document.activeElement?.tagName==="A")return;b(!1),T.current.focus()}else v&&h.stopPropagation()},C=M===i.row-1&&m===i.col-1;n.useLayoutEffect(()=>{const h=u.getFocusableNodes(T.current,!0);h.length===0||h.length===1&&u.getFocusableNodesWithKeyboardNav(h).length!==0||h.length>1&&Boolean(h.find(p=>p.tagName!=="BUTTON"))?(T.current.setAttribute("tabIndex",!v&&C?"0":"-1"),h.forEach((p,j)=>{p.setAttribute("tabIndex",v?"0":"-1"),v&&j===0&&p.focus()})):h.forEach(p=>{p.setAttribute("tabIndex",C?"0":"-1")})},[v,C]);const s=n.useCallback(()=>{const h=u.getFocusableNodes(T.current,!0);h.length>=1&&(u.getFocusableNodesWithKeyboardNav(h).length!==0||!h.find(p=>p.tagName!=="BUTTON"))&&b(!0),c({rowIndex:i.row-1,colIndex:i.col-1})},[i,c]);return n.useLayoutEffect(()=>{const h=T.current;return u.getFocusableNodes(h,!0).forEach(j=>{j.addEventListener("focus",s)}),()=>{u.getFocusableNodes(h,!0).forEach(P=>{P.removeEventListener("focus",s)})}},[s]),e.jsx(r.Box,{role:"gridcell",as:f,ref:T,onKeyDown:E,...x})};o.RawTd=l,o.RawTh=a},56094:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(9609),u=t(29935),g=t(77547),r=({colCount:a,rowCount:l,jumpStep:i=3,initialCol:f=0,initialRow:x=0,...T})=>{const M=n.useRef(null),m=n.useRef(!1),[c,v]=n.useState(x),[b,E]=n.useState(f),C=n.useCallback(({colIndex:p,rowIndex:j})=>{E(p),v(j)},[]);n.useEffect(()=>{m.current&&d.focusFocusable(M.current),m.current||(m.current=!0)},[b,c]);const s=p=>{switch(p.key){case g.KeyboardKeys.RIGHT:{p.preventDefault(),E(j=>j<a-1?j+1:j);break}case g.KeyboardKeys.LEFT:{p.preventDefault(),E(j=>j>0?j-1:j);break}case g.KeyboardKeys.UP:{p.preventDefault(),v(j=>j>0?j-1:j);break}case g.KeyboardKeys.DOWN:{p.preventDefault(),v(j=>j<l-1?j+1:j);break}case g.KeyboardKeys.HOME:{p.preventDefault(),p.ctrlKey&&v(0),E(0);break}case g.KeyboardKeys.END:{p.preventDefault(),p.ctrlKey&&v(l-1),E(a-1);break}case g.KeyboardKeys.PAGE_DOWN:{p.preventDefault(),v(j=>j+i<l?j+i:l-1);break}case g.KeyboardKeys.PAGE_UP:{p.preventDefault(),v(j=>j-i>0?j-i:0);break}}},h=n.useMemo(()=>({rowIndex:c,colIndex:b,setTableValues:C}),[b,c,C]);return e.jsx(u.RawTableContext.Provider,{value:h,children:e.jsx("table",{role:"grid",ref:M,"aria-rowcount":l,"aria-colcount":a,onKeyDown:s,...T})})};o.RawTable=r},29935:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),n=e.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),d=()=>e.useContext(n);o.RawTableContext=n,o.useTable=d},6890:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=({children:u,...g})=>{const r=n.Children.toArray(u).map((a,l)=>n.isValidElement(a)?n.cloneElement(a,{"aria-rowindex":l+2}):a);return e.jsx("tbody",{...g,children:r})};o.RawTbody=d},41179:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=({children:u,...g})=>{const r=n.Children.toArray(u).map(a=>n.isValidElement(a)?n.cloneElement(a,{"aria-rowindex":1}):a);return e.jsx("thead",{...g,children:r})};o.RawThead=d},26014:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(44747),u=({children:g,...r})=>{const a=n.Children.toArray(g).map((l,i)=>n.isValidElement(l)?n.cloneElement(l,{"aria-colindex":i+1,coords:{col:i+1,row:r["aria-rowindex"]}}):l);return e.jsx(d.Box,{as:"tr",...r,children:a})};o.RawTr=u},9609:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=e=>{const n=e.querySelector('[tabindex="0"]');n&&n.focus()};o.focusFocusable=t},34922:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(24986),u=t(35725),r=(x=>x&&x.__esModule?x:{default:x})(n),a=r.default(d.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:x})=>x.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,l=r.default.span`
  svg {
    height: ${4/16}rem;
  }
`,i=({children:x,action:T,...M})=>e.jsx(a,{as:d.RawTh,...M,children:e.jsxs(u.Flex,{children:[x,e.jsx(l,{children:T})]})}),f=({children:x,...T})=>e.jsx(a,{...T,children:x});o.Td=f,o.Th=i},82079:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(44747),u=t(19658),g=t(35725),r=t(11880),l=(T=>T&&T.__esModule?T:{default:T})(n),i=l.default(d.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:T})=>T.colors.primary600};
  }
`,f=l.default(d.Box)`
  border-radius: 0 0 ${({theme:T})=>T.borderRadius} ${({theme:T})=>T.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,x=({children:T,icon:M,...m})=>e.jsxs("div",{children:[e.jsx(u.Divider,{}),e.jsx(f,{as:"button",background:"primary100",padding:5,...m,children:e.jsxs(g.Flex,{children:[e.jsx(i,{"aria-hidden":!0,background:"primary200",children:M}),e.jsx(d.Box,{paddingLeft:3,children:e.jsx(r.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:T})})]})})]});o.TFooter=x},31661:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(56094),g=t(44747),a=(M=>M&&M.__esModule?M:{default:M})(d),l=a.default(g.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:M})=>M.colors.neutral150};
`,i=a.default(u.RawTable)`
  width: 100%;
  white-space: nowrap;
`,f=a.default(g.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:M})=>M==="both"||M==="left"?"''":void 0};
    box-shadow: ${({theme:M})=>M.shadows.tableShadow};
    width: ${({theme:M})=>M.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:M})=>M==="both"||M==="right"?"''":void 0};
    box-shadow: ${({theme:M})=>M.shadows.tableShadow};
    width: ${({theme:M})=>M.spaces[2]};
    right: 0;
    top: 0;
  }
`,x=a.default(g.Box)`
  overflow-x: auto;
`,T=({footer:M,...m})=>{const c=n.useRef(null),[v,b]=n.useState(),E=C=>{const s=C.target.scrollWidth-C.target.clientWidth;if(C.target.scrollLeft===0){b("right");return}if(C.target.scrollLeft===s){b("left");return}C.target.scrollLeft>0&&b("both")};return n.useEffect(()=>{c.current.scrollWidth>c.current.clientWidth&&b("right")},[]),e.jsxs(l,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(f,{overflowing:v,position:"relative",children:e.jsx(x,{ref:c,onScroll:E,paddingLeft:6,paddingRight:6,children:e.jsx(i,{...m})})}),M]})};o.Table=T},73314:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(6890),r=(l=>l&&l.__esModule?l:{default:l})(n).default(d.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,a=({children:l,...i})=>e.jsx(r,{...i,children:l});o.Tbody=a},79821:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(41179),r=(l=>l&&l.__esModule?l:{default:l})(n).default(d.RawThead)`
  border-bottom: 1px solid ${({theme:l})=>l.colors.neutral150};
`,a=({children:l,...i})=>e.jsx(r,{...i,children:l});o.Thead=a},45286:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(72450),d=t(26014),r=(l=>l&&l.__esModule?l:{default:l})(n).default(d.RawTr)`
  border-bottom: 1px solid ${({theme:l})=>l.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:l})=>l.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:l})=>l.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,a=l=>e.jsx(r,{...l});o.Tr=a},22493:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(31661),n=t(73314),d=t(79821),u=t(45286),g=t(34922),r=t(82079);o.Table=e.Table,o.Tbody=n.Tbody,o.Thead=d.Thead,o.Tr=u.Tr,o.Td=g.Td,o.Th=g.Th,o.TFooter=r.TFooter},15901:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(54673),u=t(59817),g=t(35725),r=t(69803),a=t(20601),l=t(63391),i=t(28518),f=n.forwardRef(({name:x,hint:T,error:M,label:m,labelAction:c,id:v,required:b,...E},C)=>{const s=d.useId(v),h=n.useRef(null),p=n.useRef(null);if(!m&&!E["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return n.useImperativeHandle(C,()=>({input:p,inputWrapperRef:h}),[]),e.jsx("div",{ref:h,children:e.jsx(u.Field,{name:x,hint:T,error:M,id:s,required:b,children:e.jsxs(g.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[m&&e.jsx(r.FieldLabel,{action:c,children:m}),e.jsx(a.FieldInput,{ref:p,...E}),e.jsx(l.FieldHint,{}),e.jsx(i.FieldError,{})]})})})});f.displayName="TextInput",o.TextInput=f},83067:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(15901);o.TextInput=e.TextInput},70328:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(54673),g=t(5529),r=t(44747),a=t(20565),l=t(59817),i=t(35725),f=t(69803),x=t(63391),T=t(28518),M=s=>s&&s.__esModule?s:{default:s},m=M(n),c=M(d),v=c.default(r.Box)`
  ${g.inputFocusStyle()}
`,b=c.default(r.Box)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({theme:s})=>s.colors.neutral500};
    font-size: ${({theme:s})=>s.fontSizes[2]};
    color: ${({theme:s})=>s.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,E=m.default.forwardRef(({disabled:s,...h},p)=>{const{id:j,error:P,hint:N,required:R}=a.useField(),w=Boolean(P);let F=N?`${j}-hint`:void 0;return P&&(F=`${j}-error`),e.jsx(v,{borderColor:w?"danger600":"neutral200",hasError:w,hasRadius:!0,children:e.jsx(b,{"aria-describedby":F,"aria-invalid":w,"aria-required":R,as:"textarea",background:s?"neutral150":"neutral0",color:s?"neutral600":"neutral800",disabled:s,fontSize:2,hasRadius:!0,height:`${105/16}rem`,id:j,ref:p,lineHeight:4,padding:4,width:"100%",...h})})}),C=m.default.forwardRef(({name:s,hint:h,error:p,label:j,labelAction:P,id:N,required:R=!1,children:w,value:F,...G},Y)=>{const ee=u.useId(N);return e.jsx(l.Field,{name:s,hint:h,error:p,id:ee,required:R,children:e.jsxs(i.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[j&&e.jsx(f.FieldLabel,{action:P,children:j}),e.jsx(E,{ref:Y,value:w??F,...G}),e.jsx(x.FieldHint,{}),e.jsx(T.FieldError,{})]})})});o.Textarea=C},44980:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(70328);o.Textarea=e.Textarea},23555:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),n=t(27279),d=t(72450),u=t(71102),g=t(52597),r=t(54673),a=t(36145),l=t(44747),i=t(70321),f=t(11880),x=b=>b&&b.__esModule?b:{default:b};function T(b){if(b&&b.__esModule)return b;const E=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(b){for(const C in b)if(C!=="default"){const s=Object.getOwnPropertyDescriptor(b,C);Object.defineProperty(E,C,s.get?s:{enumerable:!0,get:()=>b[C]})}}return E.default=b,Object.freeze(E)}const M=T(n),c=x(d).default(l.Box)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:b})=>b?"revert":"none"};
`,v=({children:b,label:E,description:C,delay:s=500,position:h="top",id:p,...j})=>{const P=r.useId(p),N=r.useId(),{visible:R,...w}=u.useTooltipHandlers(s),{tooltipWrapperRef:F,toggleSourceRef:G}=g.useTooltipLayout(R,h),Y=M.cloneElement(b,{tabIndex:0,"aria-labelledby":E?P:void 0,"aria-describedby":C?P:void 0,...w});return e.jsxs(e.Fragment,{children:[e.jsx(a.Portal,{children:e.jsxs(c,{id:P,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:F,visible:R,position:"absolute",...j,children:[R&&e.jsx(i.VisuallyHidden,{id:N,children:C}),e.jsx(f.Typography,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:E||C})]})}),e.jsx("span",{ref:G,children:Y})]})};o.Tooltip=v},71102:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),n=d=>{const[u,g]=e.useState(!1),r=e.useRef(null),a=()=>{typeof r.current=="number"&&(clearTimeout(r.current),r.current=null)};return e.useEffect(()=>()=>{a()},[]),{visible:u,onFocus:()=>{g(!0)},onBlur:()=>{g(!1)},onMouseEnter:()=>{r.current=setTimeout(()=>{g(!0)},d)},onMouseLeave:()=>{a(),g(!1)}}};o.useTooltipHandlers=n},52597:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),n=t(3955),d=(u,g)=>{const r=e.useRef(null),a=e.useRef(null);return e.useLayoutEffect(()=>{if(u){const l=r.current,i=a.current;if(l&&i){const f=n.positionTooltip(l,i,g);l.style.left=`${f.left}px`,l.style.top=`${f.top}px`}}},[g,u]),{tooltipWrapperRef:r,toggleSourceRef:a}};o.useTooltipLayout=d},17028:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(23555);o.Tooltip=e.Tooltip},3955:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=8,e=(r,a)=>{const l=(r.width-a.width)/2,i=a.left-l,f=a.top+a.height+t+window.pageYOffset;return{left:i,top:f}},n=(r,a)=>{const l=(r.height-a.height)/2,i=a.left+a.width+t,f=a.top-l+window.pageYOffset;return{left:i,top:f}},d=(r,a)=>{const l=(r.height-a.height)/2,i=a.left-r.width-t,f=a.top-l+window.pageYOffset;return{left:i,top:f}},u=(r,a)=>{const l=(r.width-a.width)/2;let i=a.left-l,f=a.top-r.height-t+window.pageYOffset;const x=window.innerWidth-a.right;return a.left+r.width-x>window.innerWidth?(i=a.left-r.width-t,f=a.top+window.scrollY-a.height/2):i<0?(i=a.width+a.left+t,f=a.top+window.scrollY-r.height/2+t):f<0&&i>0&&(f=a.top+a.height+t),{left:i,top:f}},g=(r,a,l)=>{const i=r.getBoundingClientRect(),f=a.getBoundingClientRect();return l==="bottom"?e(i,f):l==="right"?n(i,f):l==="left"?d(i,f):u(i,f)};o.positionTooltip=g},70321:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),u=(g=>g&&g.__esModule?g:{default:g})(e).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;o.VisuallyHidden=u},63832:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="[@strapi/design-system]:",e=n=>{const d=n;let u=!1;if(typeof d!="function")throw new TypeError(`${t} once requires a function parameter`);return(...g)=>{u||(d(...g),u=!0)}};o.PREFIX=t,o.once=e},70598:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=(n,d)=>[...n.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(r=>r.hasAttribute("disabled")?!1:d?!0:r.getAttribute("tabindex")!=="-1"),e=n=>n.filter(d=>d.tagName==="INPUT"?d.type!=="checkbox"&&d.type!=="radio":!1);o.getFocusableNodes=t,o.getFocusableNodesWithKeyboardNav=e},77547:(y,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};o.KeyboardKeys=t},12416:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279);function n(a){if(a&&a.__esModule)return a;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const i in a)if(i!=="default"){const f=Object.getOwnPropertyDescriptor(a,i);Object.defineProperty(l,i,f.get?f:{enumerable:!0,get:()=>a[i]})}}return l.default=a,Object.freeze(l)}const d=n(e);function u(a,l){typeof a=="function"?a(l):a!=null&&(a.current=l)}function g(...a){return l=>a.forEach(i=>u(i,l))}function r(...a){return d.useCallback(g(...a),a)}o.composeRefs=g,o.useComposedRefs=r},54673:(y,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),u=(a=>a&&a.__esModule?a:{default:a})(e).default["useId".toString()]||(()=>{});let g=0;const r=a=>{const[l,i]=e.useState(u());return e.useLayoutEffect(()=>{a||i(f=>f??String(g++))},[a]),a?.toString()??(l||"")};o.useId=r},29533:(y,o,t)=>{const e=t(74081),n=u=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:e.jsx("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),d=n;y.exports=d},30877:(y,o,t)=>{const e=t(74081),n=u=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:e.jsx("path",{fill:"#212134",d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 4.92a1.56 1.56 0 1 1 0 3.12 1.56 1.56 0 0 1 0-3.12Zm3.84 13.06a.5.5 0 0 1-.5.5h-6.2a.5.5 0 0 1-.5-.5v-.92a.5.5 0 0 1 .5-.5h2.14v-5.28H9.86a.5.5 0 0 1-.5-.5v-.92a.5.5 0 0 1 .5-.5h2.84a.5.5 0 0 1 .5.5v6.7h2.14a.5.5 0 0 1 .5.5v.92Z"})}),d=n;y.exports=d},73107:(y,o,t)=>{const e=t(74081),n=u=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:e.jsx("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),d=n;y.exports=d},89867:(y,o,t)=>{const e=t(74081),n=u=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:e.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),d=n;y.exports=d},83585:(y,o,t)=>{t.r(o),t.d(o,{default:()=>ie});var e=t(27279),n=t(51447),d=t(61166),u=t(99425),g=t.n(u),r=t(30877),a=t.n(r),l=t(29533),i=t.n(l),f=t(96053),x=t(97487),T=t(17028),M=t(83067),m=t(44980);const c=()=>{const O=(0,n.$B)(),H=(0,n.k6)(),[L,Z]=(0,e.useState)(""),[z,te]=(0,e.useState)(""),[k,oe]=(0,e.useState)(""),[U,J]=(0,e.useState)(""),ne=A=>{if(A.preventDefault(),console.log("You have submitted the form."),L.trim().length!==0){const W={title:L,body:z,payload:k,image:U};localStorage.setItem("fcmLastNotification",JSON.stringify(W)),H.push({pathname:O.url+"/targets",state:W})}else alert("Please enter a title")};return e.createElement("form",{onSubmit:ne},e.createElement(f.Grid,{gap:{desktop:4,tablet:2,mobile:1}},e.createElement(f.GridItem,{padding:1,col:6,s:12},e.createElement("fieldset",null,e.createElement(M.TextInput,{placeholder:"Enter notification title",label:"Title",name:"title",hint:"e.g: Hello World!",error:L.length<1?"Title is a required field.":void 0,onChange:A=>Z(A.target.value),value:L,labelAction:e.createElement(T.Tooltip,{description:"Shown to end users as the notification title"},e.createElement("button",{type:"button","aria-label":"Information about the title",style:{border:"none",padding:0,background:"transparent"}},e.createElement(a(),{"aria-hidden":!0})))}))),e.createElement(f.GridItem,{padding:1,col:6,s:12},e.createElement("fieldset",null,e.createElement(m.Textarea,{placeholder:"Enter notification text",label:"Body (optional)",name:"body",hint:"e.g: Notification text",onChange:A=>te(A.target.value),labelAction:e.createElement(T.Tooltip,{description:"Optionally provide a notification body text",position:"right"},e.createElement("button",{type:"button","aria-label":"Information about the body",style:{border:"none",padding:0,background:"transparent"}},e.createElement(a(),{"aria-hidden":!0})))},z))),e.createElement(f.GridItem,{padding:1,col:12},e.createElement("fieldset",null,e.createElement(M.TextInput,{placeholder:"Enter notification image url",label:"Image (optional)",name:"image",onChange:A=>J(A.target.value),value:U,hint:"https://example.com/image.png",labelAction:e.createElement(T.Tooltip,{description:"Optionally provide a valid HTTPS image URL"},e.createElement("button",{type:"button","aria-label":"Information about the image",style:{border:"none",padding:0,background:"transparent"}},e.createElement(a(),{"aria-hidden":!0})))}))),e.createElement(f.GridItem,{paddingTop:2,padding:1,col:6,s:12},e.createElement("details",null,e.createElement("summary",{style:{cursor:"pointer",paddingBottom:"1em"}},"Extra payload"),e.createElement("fieldset",null,e.createElement(m.Textarea,{placeholder:"Enter extra payload json",label:"Extra Payload (optional)",name:"payload",hint:'{"notification", "data"}',onChange:A=>oe(A.target.value),labelAction:e.createElement(T.Tooltip,{description:"Optionally provide an extra payload json",position:"right"},e.createElement("button",{type:"button","aria-label":"Information about the payload",style:{border:"none",padding:0,background:"transparent"}},e.createElement(a(),{"aria-hidden":!0})))},k)))),e.createElement(f.GridItem,{padding:1,col:12},e.createElement(x.Button,{type:"submit",variant:"default",endIcon:e.createElement(i(),null)},"Next"))))},v=(0,e.memo)(c);var b=t(25074),E=t(50568),C=t(67989),s=t(22493),h=t(28211),p=t(73107),j=t.n(p),P=t(79532),N=t(62926);const R=N.default.create({baseURL:"/"+g()});R.interceptors.request.use(async O=>(O.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},O),O=>{Promise.reject(O)}),R.interceptors.response.use(O=>O,O=>{throw O.response?.status===401&&(d.auth.clearAppStorage(),window.location.reload()),O});const w=R,F={getTargets:async(O,H=20)=>{const{data:L}=await w.request({url:"/fcm-targets",method:"get",params:{pagination:{page:O,pageSize:H},populate:"*"}});return L},sendFCMs:async O=>{const{data:H}=await w.request({url:"/fcm-notifications",method:"post",data:{data:O}});return H}},G=O=>{const H=(0,n.k6)();let L=O?.location?.state;L||(L=JSON.parse(localStorage.getItem("fcmLastNotification"))),L||H.goBack();const Z=20,[z,te]=(0,e.useState)(1),[k,oe]=(0,e.useState)(null),[U,J]=(0,e.useState)(null),[ne,A]=(0,e.useState)(!0),[W,ae]=(0,e.useState)(null),[de,Q]=(0,e.useState)({unchecked:!0}),[V,ce]=(0,e.useState)(null),[X,q]=(0,e.useState)(null),ue=async(S,I=Z)=>{A(!0);let D=me(S,I);if(D&&D.length>0)console.log("targets",D),J(D),A(!1);else{const B=await F.getTargets(S,I);D=B.data,console.log("items",D),!V&&B.pagination&&B.pagination.pageCount>0&&(console.log("res.pagination",B.pagination),ce(B.pagination)),D&&D.length>0&&(pe(D,(S-1)*I),J(D),A(!1),te(S+1))}};(0,e.useEffect)(()=>{ue(1)},[]);const ge=S=>{let I=W||[];const D=I.indexOf(S);D>=0?I.splice(D,1):I.push(S),I.length>=k.length&&I.length!==0?Q({checked:!0}):I.length===0?Q({unchecked:!0}):Q({indeterminate:!0}),ae(I)},fe=()=>{(W||[]).length>0?(ae([]),Q({unchecked:!0})):(ae(k?[...k]:[]),Q({checked:!0}))},he=S=>(W||[]).indexOf(S)>-1,me=(S,I=Z)=>(k||[]).slice((S-1)*I,S*I),pe=(S,I)=>{const D=k?[...k]:[];D.splice(I,S.length,...S),oe(D)},_=(S,I=0)=>[...Array(S).keys()].map(D=>D+I),ye=()=>{const S=V?.pageCount||1;return S<7?_(S):z<=2?_(4):[0]},le=()=>{const S=V?.pageCount||1;if(S>=7&&z>=3&&z<S-3)return _(3,z-1)},se=()=>{const S=V?.pageCount||1;if(S>5)return z>3&&z>=S-3?_(4,S-4):[S-1]},be=async()=>{const S=W||[];if(S.length<1){q({title:"Error",message:"One or more targets should be selected to send the fcm message.",variant:"danger"});return}console.log("selected",S);const I=S.reduce(($,K)=>(console.log("p",$,"n",K,K.type==="token",K.type==="topic"),K.type==="token"?($.tokens=$.tokens||[],$.tokens.push(K.value)):K.type==="topic"&&($.topics=$.topics||[],$.topics.push(K.value)),$),{});console.log("typesValues",I);const D={title:L.title,body:L.body,image:L.image,payload:L.payload},B=[];I.tokens?.length>0&&B.push({...D,targetType:"tokens",target:I.tokens.join(",")}),I.topics?.length>0&&B.push({...D,targetType:"topics",target:I.topics.join(",")}),console.log("entries",B);try{const $=await F.sendFCMs(B);console.log("response",$),q({title:"Sent",message:"FCM sent successfully.",variant:"success"})}catch($){q({title:"Error",message:"Failed to send to FCM. "+JSON.stringify($||{}),variant:"danger"})}};return e.createElement(e.Fragment,null,ne&&e.createElement("div",null,e.createElement(E.Typography,{variant:"sigma"},"Loading...")),U&&U.length>0?e.createElement(e.Fragment,null,e.createElement(s.Table,{colCount:5,rowCount:20},e.createElement(s.Thead,null,e.createElement(s.Tr,null,e.createElement(s.Th,null,e.createElement(C.Checkbox,{onClick:()=>fe(),...de})),e.createElement(s.Th,null,e.createElement(E.Typography,{variant:"sigma"},"#")),e.createElement(s.Th,null,e.createElement(E.Typography,{variant:"sigma"},"Label")),e.createElement(s.Th,null,e.createElement(E.Typography,{variant:"sigma"},"Type")),e.createElement(s.Th,null,e.createElement(E.Typography,{variant:"sigma"},"Target")))),e.createElement(s.Tbody,null,U.map((S,I)=>e.createElement(s.Tr,{key:S.value},e.createElement(s.Td,null,e.createElement(C.Checkbox,{onClick:()=>ge(S),checked:he(S)})),e.createElement(s.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},I+1)),e.createElement(s.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},S.label)),e.createElement(s.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},S.type)),e.createElement(s.Td,{style:{position:"relative"}},e.createElement(E.Typography,{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",maxWidth:"250px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},textColor:"neutral800"},S.value)))))),e.createElement(b.Box,{marginTop:2},e.createElement(h.Pagination,{activePage:z>0?z-1:1,pageCount:V?.pageCount||1},e.createElement(h.PreviousLink,{to:"#"},"Go to previous page"),ye().map(S=>e.createElement(h.PageLink,{key:S,number:S+1,to:"#"},"Go to page ",S+1)),le()&&e.createElement(h.Dots,null,"Other pages"),le()&&le().map(S=>e.createElement(h.PageLink,{key:S,number:S+1,to:"#"},"Go to page ",S+1)),se()&&e.createElement(h.Dots,null,"Other pages"),se()&&se().map(S=>e.createElement(h.PageLink,{key:S,number:S+1,to:"#"},"Go to page ",S+1)),e.createElement(h.NextLink,{to:"#"},"Go to next page")))):e.createElement("div",null,e.createElement(E.Typography,{variant:"sigma",paddingBottom:1},"No targets found."),e.createElement("p",null,e.createElement(E.Typography,{variant:"omega",fontWeight:"semiBold"},"Add topics to 'FCM Topic' Collection, and optionally configure which collection contains the devices tokens."))),e.createElement(f.Grid,null,e.createElement(f.GridItem,{col:12,padding:1,marginTop:4},e.createElement(E.Typography,{variant:"sigma"},"Targets Selected: ",(W||[]).length)),X&&e.createElement(f.GridItem,{col:12},e.createElement(P.Alert,{onClose:()=>q(null),closeLabel:"Close alert",title:X.title,variant:X.variant},X.message)),e.createElement(f.GridItem,{col:12,padding:1,marginTop:2},e.createElement(x.Button,{onClick:()=>be(),variant:"default",endIcon:e.createElement(j(),null)},"Send"))))},Y=(0,e.memo)(G);var ee=t(89867),re=t.n(ee);const ie=()=>{const O=(0,n.k6)();return e.createElement(b.Box,{background:"neutral100",padding:8},e.createElement(b.Box,{padding:4,background:"neutral0",hasRadius:!0,shadow:"tableShadow"},e.createElement(b.Box,{background:"neutral0",paddingBottom:4},e.createElement(x.Button,{style:{margin:"0 0 0 auto"},variant:"secondary",endIcon:e.createElement(re(),null),onClick:()=>O.push("/content-manager/singleType/plugin::strapi-plugin-fcm.fcm-plugin-configuration")},"Configuration")),e.createElement(n.rs,null,e.createElement(n.AW,{path:`/plugins/${g()}`,component:v,exact:!0}),e.createElement(n.AW,{path:`/plugins/${g()}/targets`,component:Y,exact:!0}),e.createElement(n.AW,{component:d.NotFound}))))}}}]);
