"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[1170],{11170:(y,n,e)=>{e.r(n),e.d(n,{FieldActionWrapper:()=>j,default:()=>M});var l=e(25074),s=e(66769),a=e(16897),c=e(81628),u=e.n(c),d=e(27279),g=e(26781),v=e(72450);const f={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const x=new Uint8Array(16);function S(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(x)}const t=[];for(let o=0;o<256;++o)t.push((o+256).toString(16).slice(1));function r(o,i=0){return t[o[i+0]]+t[o[i+1]]+t[o[i+2]]+t[o[i+3]]+"-"+t[o[i+4]]+t[o[i+5]]+"-"+t[o[i+6]]+t[o[i+7]]+"-"+t[o[i+8]]+t[o[i+9]]+"-"+t[o[i+10]]+t[o[i+11]]+t[o[i+12]]+t[o[i+13]]+t[o[i+14]]+t[o[i+15]]}function h(o,i=0){const F=r(o,i);if(!validate(F))throw TypeError("Stringified UUID is invalid");return F}const R=null;function E(o,i,F){if(f.randomUUID&&!i&&!o)return f.randomUUID();o=o||{};const b=o.random||(o.rng||S)();if(b[6]=b[6]&15|64,b[8]=b[8]&63|128,i){F=F||0;for(let I=0;I<16;++I)i[F+I]=b[I];return i}return r(b)}const $=E;var C=e(81355);const j=(0,v.default)(s.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;

    path {
      fill: ${({theme:o})=>o.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:o})=>o.colors.primary600};
    }
  }
`,T=({onClick:o,label:i})=>d.createElement(j,{onClick:o,label:i},d.createElement(u(),null)),M=({description:o,placeholder:i,disabled:F=!0,intlLabel:b,error:I,labelAction:B,name:A,required:H=!0,value:L,onChange:V})=>{const{formatMessage:U}=(0,g.Z)(),[D,W]=(0,d.useState)(L??$()),P=(0,d.useRef)(null);return(0,d.useEffect)(()=>{P?.current&&(P.current.value=D)},[D]),d.createElement(l.Box,null,d.createElement(s.Field,{id:A,name:A,hint:o&&U(o),error:I},d.createElement(a.Flex,{direction:"column",alignItems:"stretch",gap:1},d.createElement(s.FieldLabel,{action:B},U(b)),d.createElement(s.FieldInput,{ref:P,defaultValue:L,placeholder:i,disabled:F,requried:H,onChange:V,value:D,endAction:F?null:d.createElement(T,{onClick:()=>W($()),label:U({id:(0,C.Z)("form.field.generate"),defaultMessage:"Generate"})})}),d.createElement(s.FieldHint,null),d.createElement(s.FieldError,null))))}},59817:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(74081),s=e(27279),a=e(20565),c=e(54673),u=e(44747),d=s.forwardRef(({children:g,name:v,error:p,hint:f,id:m,required:x=!1,...S},t)=>{const r=c.useId(m),h=s.useMemo(()=>({name:v,id:r,error:p,hint:f,required:x}),[p,r,f,v,x]);return l.jsx(u.Box,{ref:t,...S,children:l.jsx(a.FieldContext.Provider,{value:h,children:g})})});n.Field=d},52427:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(74081),s=e(27279),a=e(72450),c=e(35725),u=e(70321),v=(f=>f&&f.__esModule?f:{default:f})(a).default(c.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,p=s.forwardRef(({label:f,children:m,...x},S)=>l.jsxs(v,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...x,as:"button",ref:S,children:[l.jsx(u.VisuallyHidden,{as:"span",children:f}),s.cloneElement(m,{"aria-hidden":!0,focusable:!1})]}));n.FieldAction=p},20565:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(27279),s=l.createContext({id:"",required:!1}),a=()=>l.useContext(s);n.FieldContext=s,n.useField=a},28518:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(74081),s=e(20565),a=e(11880),c=()=>{const{id:u,error:d}=s.useField();return!d||typeof d!="string"?null:l.jsx(a.Typography,{variant:"pi",as:"p",id:`${u}-error`,textColor:"danger600","data-strapi-field-error":!0,children:d})};n.FieldError=c},63391:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(74081),s=e(20565),a=e(11880),c=()=>{const{id:u,hint:d,error:g}=s.useField();return!d||g?null:l.jsx(a.Typography,{variant:"pi",as:"p",id:`${u}-hint`,textColor:"neutral600",children:d})};n.FieldHint=c},20601:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(74081),s=e(27279),a=e(72450),c=e(20565),u=e(5529),d=e(44747),g=e(35725),p=(t=>t&&t.__esModule?t:{default:t})(a),f={S:6.5,M:10.5},m=s.forwardRef(({endAction:t,startAction:r,disabled:h=!1,onChange:R,size:E="M",...$},C)=>{const{id:j,error:T,hint:O,name:M,required:o}=c.useField();let i;T?i=`${j}-error`:O&&(i=`${j}-hint`);const F=Boolean(T),b=I=>{!h&&R&&R(I)};return l.jsxs(S,{justifyContent:"space-between",hasError:F,disabled:h,children:[r?l.jsx(d.Box,{paddingLeft:3,paddingRight:2,children:r}):null,l.jsx(x,{id:j,name:M,ref:C,"aria-describedby":i,"aria-invalid":F,"aria-disabled":h,disabled:h,"data-disabled":h?"":void 0,hasLeftAction:Boolean(r),hasRightAction:Boolean(t),onChange:b,"aria-required":o,$size:E,...$}),t?l.jsx(d.Box,{paddingLeft:2,paddingRight:3,children:t}):null]})}),x=p.default.input`
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius};
  padding-bottom: ${({$size:t})=>`${f[t]/16}rem`};
  padding-left: ${({theme:t,hasLeftAction:r})=>r?0:t.spaces[4]};
  padding-right: ${({theme:t,hasRightAction:r})=>r?0:t.spaces[4]};
  padding-top: ${({$size:t})=>`${f[t]/16}rem`};
  cursor: ${t=>t["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:t})=>t.colors.neutral800};
  font-weight: 400;
  font-size: ${t=>t.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:t})=>t.colors.neutral500};
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
`,S=p.default(g.Flex)`
  border: 1px solid ${({theme:t,hasError:r})=>r?t.colors.danger600:t.colors.neutral200};
  border-radius: ${({theme:t})=>t.borderRadius};
  background: ${({theme:t})=>t.colors.neutral0};
  ${u.inputFocusStyle()}

  ${({theme:t,disabled:r})=>r?a.css`
          color: ${t.colors.neutral600};
          background: ${t.colors.neutral150};
        `:void 0}
`;n.FieldInput=m,n.InputWrapper=S},69803:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(74081),s=e(27279),a=e(72450),c=e(20565),u=e(63832),d=e(11880),g=e(35725),p=(r=>r&&r.__esModule?r:{default:r})(a),f=u.once(console.warn),m=s.forwardRef(({children:r,action:h,required:R,...E},$)=>{const{id:C,required:j}=c.useField(),T=j||R;return R!==void 0&&f('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),l.jsxs(x,{ref:$,variant:"pi",textColor:"neutral800",htmlFor:C,fontWeight:"bold",as:"label",...E,children:[r,T&&l.jsx(S,{textColor:"danger600",children:"*"}),h&&l.jsx(t,{marginLeft:1,children:h})]})}),x=p.default(d.Typography)`
  display: flex;
  align-items: center;
`,S=p.default(d.Typography)`
  line-height: 0;
`,t=p.default(g.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`;n.FieldLabel=m},66769:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(59817),s=e(69803),a=e(20601),c=e(63391),u=e(28518),d=e(20565),g=e(52427);n.Field=l.Field,n.FieldLabel=s.FieldLabel,n.FieldInput=a.FieldInput,n.InputWrapper=a.InputWrapper,n.FieldHint=c.FieldHint,n.FieldError=u.FieldError,n.FieldContext=d.FieldContext,n.useField=d.useField,n.FieldAction=g.FieldAction},16897:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(35725);n.Flex=l.Flex},70321:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(72450),c=(u=>u&&u.__esModule?u:{default:u})(l).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;n.VisuallyHidden=c},63832:(y,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="[@strapi/design-system]:",l=s=>{const a=s;let c=!1;if(typeof a!="function")throw new TypeError(`${e} once requires a function parameter`);return(...u)=>{c||(a(...u),c=!0)}};n.PREFIX=e,n.once=l},54673:(y,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const l=e(27279),c=(g=>g&&g.__esModule?g:{default:g})(l).default["useId".toString()]||(()=>{});let u=0;const d=g=>{const[v,p]=l.useState(c());return l.useLayoutEffect(()=>{g||p(f=>f??String(u++))},[g]),g?.toString()??(v||"")};n.useId=d}}]);
