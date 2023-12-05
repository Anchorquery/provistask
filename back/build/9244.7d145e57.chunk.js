"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[9244],{8976:(F,E,t)=>{t.d(E,{G:()=>l,Y:()=>p});var o=t(74081),n=t(27279),x=t(72450),s=t(61657),d=t(10701);const l=(0,x.default)(d.k)`
  > svg {
    height: ${({theme:c})=>c.spaces[3]};
    width: ${({theme:c})=>c.spaces[3]};

    > g,
    path {
      fill: ${({theme:c})=>c.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.BF}
`,p=n.forwardRef(({disabled:c,children:h,background:i="neutral0",...g},D)=>(0,o.jsx)(l,{ref:D,"aria-disabled":c,as:"button",type:"button",disabled:c,padding:2,hasRadius:!0,background:i,borderColor:"neutral200",cursor:"pointer",...g,children:h}));p.displayName="BaseButton"},61657:(F,E,t)=>{t.d(E,{BF:()=>s,k3:()=>x});var o=t(72450);const n=d=>({theme:l,size:p})=>l.sizes[d][p],x=(d="&")=>({theme:l,hasError:p=!1})=>(0,o.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${d}:focus-within {
      border: 1px solid ${p?l.colors.danger600:l.colors.primary600};
      box-shadow: ${p?l.colors.danger600:l.colors.primary600} 0px 0px 0px 2px;
    }
  `,s=({theme:d})=>(0,o.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${d.colors.primary600};
    }
  }
`},86720:(F,E,t)=>{t.d(E,{m:()=>h});var o=t(74081),n=t(72450),x=t(30977),s=t(93415);const d=(0,n.default)(s.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:i})=>i}, 1fr);
  ${({theme:i,gap:g})=>(0,x.Z)("gap",g,i)}
`,l=i=>{const{gap:g="0",gridCols:D=12,...u}=i;return(0,o.jsx)(d,{gap:g,gridCols:D,...u})},p=`${232/16}rem`,c=(0,n.default)(l)`
  width: ${p};
  background: ${({theme:i})=>i.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:i})=>i.colors.neutral200};
  z-index: 1;
`,h=({ariaLabel:i,...g})=>(0,o.jsx)(c,{"aria-label":i,as:"nav",...g})},14365:(F,E,t)=>{t.d(E,{p:()=>fr});var o=t(74081),n=t(27279),x=t(89577),s=t(72450);const d={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var l=t(74513);const p=r=>{const e=(0,n.useRef)();return(0,n.useEffect)(()=>{e.current=r}),e.current};var c=t(84366),h=t(93415);const i=r=>(0,o.jsx)("form",{...r,role:"search"});var g=t(85305);function D(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function u(...r){return e=>r.forEach(a=>D(a,e))}function M(...r){return React.useCallback(u(...r),r)}var v=t(61657);const P=(0,n.createContext)({id:"",required:!1}),B=()=>(0,n.useContext)(P);var b=t(10701);const I={S:6.5,M:10.5},_=(0,n.forwardRef)(({endAction:r,startAction:e,disabled:a=!1,onChange:f,size:C="M",...y},$)=>{const{id:m,error:R,hint:j,name:T,required:S}=B();let O;R?O=`${m}-error`:j&&(O=`${m}-hint`);const A=Boolean(R),L=k=>{!a&&f&&f(k)};return(0,o.jsxs)(U,{justifyContent:"space-between",hasError:A,disabled:a,children:[e?(0,o.jsx)(h.x,{paddingLeft:3,paddingRight:2,children:e}):null,(0,o.jsx)(Z,{id:m,name:T,ref:$,"aria-describedby":O,"aria-invalid":A,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(e),hasRightAction:Boolean(r),onChange:L,"aria-required":S,$size:C,...y}),r?(0,o.jsx)(h.x,{paddingLeft:2,paddingRight:3,children:r}):null]})}),Z=s.default.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${I[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:e})=>e?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:e})=>e?0:r.spaces[4]};
  padding-top: ${({$size:r})=>`${I[r]/16}rem`};
  cursor: ${r=>r["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:r})=>r.colors.neutral800};
  font-weight: 400;
  font-size: ${r=>r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:r})=>r.colors.neutral500};
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
`,U=(0,s.default)(b.k)`
  border: 1px solid ${({theme:r,hasError:e})=>e?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,v.k3)()}

  ${({theme:r,disabled:e})=>e?(0,s.css)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`;var K=t(10989);const w=(0,s.default)(b.k)`
  font-size: 1.6rem;
  padding: 0;
`,z=(0,n.forwardRef)(({label:r,children:e,...a},f)=>(0,o.jsxs)(w,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:f,children:[(0,o.jsx)(K.T,{as:"span",children:r}),(0,n.cloneElement)(e,{"aria-hidden":!0,focusable:!1})]})),X=(0,n.forwardRef)(({children:r,name:e,error:a,hint:f,id:C,required:y=!1,...$},m)=>{const R=(0,l.M)(C),j=(0,n.useMemo)(()=>({name:e,id:R,error:a,hint:f,required:y}),[a,R,f,e,y]);return(0,o.jsx)(h.x,{ref:m,...$,children:(0,o.jsx)(P.Provider,{value:j,children:r})})}),J="[@strapi/design-system]:",Q=r=>{const e=r;let a=!1;if(typeof e!="function")throw new TypeError(`${J} once requires a function parameter`);return(...f)=>{a||(e(...f),a=!0)}};var G=t(32370);const q=Q(console.warn),rr=(0,n.forwardRef)(({children:r,action:e,required:a,...f},C)=>{const{id:y,required:$}=B(),m=$||a;return a!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,o.jsxs)(or,{ref:C,variant:"pi",textColor:"neutral800",htmlFor:y,fontWeight:"bold",as:"label",...f,children:[r,m&&(0,o.jsx)(tr,{textColor:"danger600",children:"*"}),e&&(0,o.jsx)(er,{marginLeft:1,children:e})]})}),or=(0,s.default)(G.Z)`
  display: flex;
  align-items: center;
`,tr=(0,s.default)(G.Z)`
  line-height: 0;
`,er=(0,s.default)(b.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,nr=(0,s.default)(g.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,V=(0,s.default)(x.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,sr=s.default.div`
  border-radius: ${({theme:r})=>r.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};

  &:focus-within {
    ${V} {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }

  ${U} {
    border: 1px solid transparent;
  }

  ${(0,v.k3)(U)}
`,ar=(0,n.forwardRef)(({name:r,size:e="M",children:a,value:f="",onClear:C,clearLabel:y,...$},m)=>{const R=(0,n.useRef)(null),j=f.length>0,T=O=>{C(O),R.current.focus()},S=u(m,R);return(0,o.jsx)(sr,{children:(0,o.jsxs)(X,{name:r,children:[(0,o.jsx)(K.T,{children:(0,o.jsx)(rr,{children:a})}),(0,o.jsx)(_,{ref:S,value:f,startAction:(0,o.jsx)(V,{"aria-hidden":!0}),size:e,endAction:j?(0,o.jsx)(z,{label:y,onClick:T,children:(0,o.jsx)(nr,{})}):void 0,...$})]})})});var lr=t(42332),ir=t(8976);const dr="tertiary",N="secondary",cr=["S","M","L"],ur=[dr,N],pr=n.forwardRef(({label:r,background:e,borderWidth:a,noBorder:f=!1,children:C,icon:y,disabled:$=!1,onClick:m,size:R=cr[0],"aria-label":j,variant:T=ur[0],...S},O)=>{const A=k=>{!$&&m&&m(k)},L=(0,o.jsxs)(H,{"aria-disabled":$,background:$?"neutral150":e,borderWidth:f?0:a,justifyContent:"center",...S,ref:O,size:R,onClick:A,variant:T,children:[(0,o.jsx)(K.T,{as:"span",children:r??j}),n.cloneElement(y||C,{"aria-hidden":!0,focusable:!1})]});return r?(0,o.jsx)(lr.u,{label:r,children:L}):L}),H=(0,s.default)(ir.Y)`
  background-color: ${({theme:r,variant:e})=>{if(e===N)return r.colors.primary100}};
  border-color: ${({theme:r,variant:e})=>e===N?r.colors.primary200:r.colors.neutral200};
  height: ${({theme:r,size:e})=>r.sizes.button[e]};
  width: ${({theme:r,size:e})=>r.sizes.button[e]};

  svg {
    g,
    path {
      fill: ${({theme:r,variant:e})=>e===N?r.colors.primary500:r.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:r,variant:e})=>e===N?r.colors.primary600:r.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }
`,vr=(0,s.default)(b.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>`${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:r})=>`0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${H} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:r})=>r.colors.neutral100};

      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:r})=>r.colors.neutral150};
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral600};
        }
      }
    }
  }
`,Y=(0,s.default)(c.i)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,fr=({as:r="h2",label:e,searchLabel:a="",searchable:f=!1,onChange:C=()=>{},value:y="",onClear:$=()=>{},onSubmit:m=()=>{},id:R})=>{const[j,T]=(0,n.useState)(!1),S=p(j),O=(0,l.M)(R),A=(0,n.useRef)(void 0),L=(0,n.useRef)(void 0);(0,n.useEffect)(()=>{j&&A.current&&A.current.focus(),S&&!j&&L.current&&L.current.focus()},[j,S]);const k=()=>{T(W=>!W)},hr=W=>{$(W),A.current.focus()},xr=W=>{W.relatedTarget?.id!==O&&T(!1)},gr=W=>{W.key===d.ESCAPE&&T(!1)};return j?(0,o.jsxs)(h.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,o.jsx)(i,{children:(0,o.jsx)(ar,{name:"searchbar",value:y,onChange:C,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:gr,ref:A,onBlur:xr,onClear:hr,onSubmit:m,clearLabel:"Clear",size:"S",children:a})}),(0,o.jsx)(h.x,{paddingLeft:2,paddingTop:4,children:(0,o.jsx)(Y,{})})]}):(0,o.jsxs)(h.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,o.jsxs)(b.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,o.jsx)(G.Z,{variant:"beta",as:r,children:e}),f&&(0,o.jsx)(pr,{ref:L,onClick:k,label:a,icon:(0,o.jsx)(x.Z,{})})]}),(0,o.jsx)(h.x,{paddingTop:4,children:(0,o.jsx)(Y,{})})]})}},49370:(F,E,t)=>{t.d(E,{E:()=>D});var o=t(74081),n=t(27279),x=t(1939),s=t(72450),d=t(93415),l=t(32370),p=t(10701),c=t(30413);const h=(0,s.default)(d.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:u})=>u.colors.neutral800};
  svg > * {
    fill: ${({theme:u})=>u.colors.neutral600};
  }

  &.active {
    ${({theme:u})=>`
      background-color: ${u.colors.primary100};
      border-right: 2px solid ${u.colors.primary600};
      svg > * {
        fill: ${u.colors.primary700};
      }
      ${l.Z} {
        color: ${u.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,i=(0,s.default)(x.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:u,$active:M})=>M?u.colors.primary600:u.colors.neutral600};
  }
`,g=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,D=n.forwardRef(({children:u,icon:M=null,withBullet:v=!1,as:P=c.f,isSubSectionChild:B=!1,...b},I)=>(0,o.jsxs)(h,{as:P,icon:M,background:"neutral100",paddingLeft:B?9:7,paddingBottom:2,paddingTop:2,ref:I,...b,children:[(0,o.jsxs)(p.k,{children:[M?(0,o.jsx)(g,{children:M}):(0,o.jsx)(i,{}),(0,o.jsx)(d.x,{paddingLeft:2,children:(0,o.jsx)(l.Z,{as:"span",children:u})})]}),v&&(0,o.jsx)(d.x,{as:p.k,paddingRight:4,children:(0,o.jsx)(i,{$active:!0})})]}))},20534:(F,E,t)=>{t.d(E,{D:()=>M});var o=t(74081),n=t(27279),x=t(72450),s=t(3494),d=t(10701),l=t(93415),p=t(32370);const c=(0,x.default)(d.k)`
  border: none;
  padding: 0;
  background: transparent;
`,h=x.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:v})=>v?"0deg":"180deg"});
`,i=({collapsable:v=!1,label:P,onClick:B=()=>{},ariaExpanded:b,ariaControls:I})=>v?(0,o.jsxs)(c,{as:"button",onClick:B,"aria-expanded":b,"aria-controls":I,textAlign:"left",children:[(0,o.jsx)(l.x,{paddingRight:1,children:(0,o.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:P})}),v&&(0,o.jsx)(h,{rotated:b,children:(0,o.jsx)(s.Z,{"aria-hidden":!0})})]}):(0,o.jsx)(c,{children:(0,o.jsx)(l.x,{paddingRight:1,children:(0,o.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:P})})});var g=t(74513),D=t(4963);const u=(0,x.default)(l.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:v})=>v.colors.neutral500};
    }
  }
`,M=({collapsable:v=!1,label:P,badgeLabel:B,children:b,id:I})=>{const[_,Z]=(0,n.useState)(!0),U=(0,g.M)(I),K=()=>{Z(w=>!w)};return(0,o.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,o.jsx)(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,o.jsxs)(l.x,{position:"relative",paddingRight:B?6:0,children:[(0,o.jsx)(i,{onClick:K,ariaExpanded:_,ariaControls:U,collapsable:v,label:P}),B&&(0,o.jsx)(D.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:B})]})}),(!v||_)&&(0,o.jsx)("ol",{id:U,children:n.Children.map(b,(w,z)=>(0,o.jsx)("li",{children:w},z))})]})}},96220:(F,E,t)=>{t.d(E,{Z:()=>d});var o=t(74081),n=t(27279),x=t(93415),s=t(10701);const d=({children:l,spacing:p=2,horizontal:c=!1,...h})=>(0,o.jsx)(x.x,{paddingTop:2,paddingBottom:4,children:(0,o.jsx)(s.k,{as:"ol",gap:p,direction:c?"row":"column",alignItems:c?"center":"stretch",...h,children:n.Children.map(l,(i,g)=>(0,o.jsx)("li",{children:i},g))})})}}]);
