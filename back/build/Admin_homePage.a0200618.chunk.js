"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[3981],{4031:(D,v,t)=>{t.r(v),t.d(v,{HomePageCE:()=>z,default:()=>Ze});var e=t(27279),s=t(52185),c=t(1296),g=t(796),m=t(90529),u=t(49899),r=t(61166),n=t(364),a=t(69394),d=t(26781),M=t(56746);function P(o,i){var l=o.values,p=(0,a._T)(o,["values"]),h=i.values,k=(0,a._T)(i,["values"]);return(0,M.wU)(h,l)&&(0,M.wU)(p,k)}function L(o){var i=(0,d.Z)(),l=i.formatMessage,p=i.textComponent,h=p===void 0?e.Fragment:p,k=o.id,H=o.description,W=o.defaultMessage,x=o.values,C=o.children,B=o.tagName,j=B===void 0?h:B,V=o.ignoreTag,Ae={id:k,description:H,defaultMessage:W},Z=l(Ae,x,{ignoreTag:V});return typeof C=="function"?C(Array.isArray(Z)?Z:[Z]):j?e.createElement(j,null,e.Children.toArray(Z)):e.createElement(e.Fragment,null,Z)}L.displayName="FormattedMessage";var $=e.memo(L,P);$.displayName="MemoizedFormattedMessage";const R=$;var S=t(51447),f=t(72450),y=t(85898),T=t(35557),O=t(51413),I=t(13931),Y=t(99571),w=t(70627),E=t.n(w),b=t(16334),Q=t(43234),J=t(2364);const G=({type:o,title:i,number:l,content:p,hasLine:h})=>{const{formatMessage:k}=(0,d.Z)();return e.createElement(s.x,null,e.createElement(y.k,null,e.createElement(s.x,{minWidth:(0,r.pxToRem)(30),marginRight:5},e.createElement(J.Z,{type:o,number:l})),e.createElement(T.Z,{variant:"delta",as:"h3"},k(i))),e.createElement(y.k,{alignItems:"flex-start"},e.createElement(y.k,{justifyContent:"center",minWidth:(0,r.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},h&&e.createElement(Q.Z,{type:o,minHeight:o===b.lW?(0,r.pxToRem)(85):(0,r.pxToRem)(65)})),e.createElement(s.x,{marginTop:2},o===b.lW&&p)))};G.defaultProps={content:void 0,number:void 0,type:b.VM,hasLine:!0},G.propTypes={content:E().node,number:E().number,title:E().shape({id:E().string,defaultMessage:E().string}).isRequired,type:E().oneOf([b.lW,b.hx,b.VM]),hasLine:E().bool};const X=G,_=(o,i)=>o===-1||i<o?b.hx:i>o?b.VM:b.lW,U=({sections:o,currentSectionKey:i})=>{const l=o.findIndex(p=>p.key===i);return e.createElement(s.x,null,o.map((p,h)=>e.createElement(X,{key:p.key,title:p.title,content:p.content,number:h+1,type:_(l,h),hasLine:h!==o.length-1})))};U.defaultProps={currentSectionKey:void 0},U.propTypes={sections:E().arrayOf(E().shape({key:E().string.isRequired,title:E().shape({id:E().string,defaultMessage:E().string}).isRequired,content:E().node})).isRequired,currentSectionKey:E().string};const q=U,ee=()=>{const{guidedTourState:o,setSkipped:i}=(0,r.useGuidedTour)(),{formatMessage:l}=(0,d.Z)(),{trackUsage:p}=(0,r.useTracking)(),h=Object.entries(Y.Z).map(([x,C])=>({key:x,title:C.home.title,content:e.createElement(r.LinkButton,{onClick:()=>p(C.home.trackingEvent),to:C.home.cta.target,endIcon:e.createElement(I.Z,null)},l(C.home.cta.title))})),H=h.map(x=>({isDone:Object.entries(o[x.key]).every(([,C])=>C),...x})).find(x=>!x.isDone)?.key,W=()=>{i(!0),p("didSkipGuidedtour")};return e.createElement(s.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(T.Z,{variant:"beta",as:"h2"},l({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(q,{sections:h,currentSectionKey:H})),e.createElement(y.k,{justifyContent:"flex-end"},e.createElement(O.z,{variant:"tertiary",onClick:W},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},te=o=>Object.entries(o).every(([,i])=>Object.entries(i).every(([,l])=>l));var oe=t(92686),ne=t(80902);const ae=t.p+"7e9af4fb7e723fcebf1f.svg";var re=t(8202),se=t(18969),le=t(19187),ie=t(12732);const ce=t.p+"27d16aefee06412db90a.png",de=t.p+"bb4d0d527bdfb161bc5a.svg",ue=t.p+"bb3108f7fd1e6179bde1.svg",pe=f.default.a`
  text-decoration: none;
`,me=(0,f.default)(s.x)`
  background-image: url(${({backgroundImage:o})=>o});
`,ge=(0,f.default)(y.k)`
  background: rgba(255, 255, 255, 0.3);
`,fe=()=>{const{formatMessage:o}=(0,d.Z)(),{trackUsage:i}=(0,r.useTracking)();return e.createElement(pe,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{i("didClickOnTryStrapiCloudSection")}},e.createElement(y.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(me,{backgroundImage:ce,hasRadius:!0,padding:3},e.createElement(ge,{width:(0,r.pxToRem)(32),height:(0,r.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ue,alt:o({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(y.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(y.k,null,e.createElement(T.Z,{fontWeight:"semiBold",variant:"pi"},o({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(T.Z,{textColor:"neutral600"},o({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(s.x,{src:de,position:"absolute",top:0,right:0,as:"img"}))))},A=f.default.a`
  text-decoration: none;
`,Ee=()=>{const{formatMessage:o}=(0,d.Z)(),{trackUsage:i}=(0,r.useTracking)(),l=p=>{i(p)};return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(fe,null),e.createElement(A,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonReadTheDocumentationSection")},e.createElement(r.ContentBox,{title:o({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:o({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(re.Z,null),iconBackground:"primary100"})),e.createElement(A,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonCodeExampleSection")},e.createElement(r.ContentBox,{title:o({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:o({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(se.Z,null),iconBackground:"warning100"})),e.createElement(A,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonTutorialSection")},e.createElement(r.ContentBox,{title:o({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:o({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(le.Z,null),iconBackground:"secondary100"})),e.createElement(A,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>l("didClickonBlogSection")},e.createElement(r.ContentBox,{title:o({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:o({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ie.Z,null),iconBackground:"alternative100"})))};var N=t(79213);const he=(0,f.default)(T.Z)`
  word-break: break-word;
`,K=({hasCreatedContentType:o,onCreateCT:i})=>{const{formatMessage:l}=(0,d.Z)();return e.createElement("div",null,e.createElement(s.x,{paddingLeft:6,paddingBottom:10},e.createElement(y.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(T.Z,{as:"h1",variant:"alpha"},l(o?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(he,{textColor:"neutral600",variant:"epsilon"},l(o?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),o?e.createElement(N.r,{isExternal:!0,href:"https://strapi.io/blog"},l({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(O.z,{size:"L",onClick:i,endIcon:e.createElement(I.Z,null)},l({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};K.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},K.propTypes={hasCreatedContentType:E().bool,onCreateCT:E().func};const ye=K;var ve=t(37370),Me=t(28839),ke=t(56620),Ce=t(86375),Te=t(3297),be=t(54780),xe=t(33539),Pe=t(34120);const Be=(0,f.default)(Me.Z)`
  path {
    fill: #7289da !important;
  }
`,$e=(0,f.default)(ke.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,F=(0,f.default)(Ce.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Le=(0,f.default)(Te.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Se=(0,f.default)(be.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,De=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(xe.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(Be,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement($e,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Le,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Se,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(F,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(F,null),alt:"career"}],Re=(0,f.default)(ve.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:o})=>o.spaces[6]};
    height: ${({theme:o})=>o.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Oe=(0,f.default)(m.r)`
  row-gap: ${({theme:o})=>o.spaces[2]};
  column-gap: ${({theme:o})=>o.spaces[4]};
`,Ie=()=>{const{formatMessage:o}=(0,d.Z)(),{communityEdition:i}=(0,r.useAppInfo)(),l=[...De,{icon:e.createElement(F,null),link:i?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(s.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(s.x,{paddingBottom:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(T.Z,{variant:"delta",as:"h2",id:"join-the-community"},o({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(T.Z,{textColor:"neutral600"},o({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(N.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Pe.Z,null)},o({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Oe,null,l.map(({icon:p,link:h,name:k})=>e.createElement(u.P,{col:6,s:12,key:k.id},e.createElement(Re,{size:"L",startIcon:p,variant:"tertiary",href:h,isExternal:!0},o(k))))))},He=(0,f.default)(s.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,z=()=>{const{collectionTypes:o,singleTypes:i,isLoading:l}=(0,oe.G)(),{guidedTourState:p,isGuidedTourVisible:h,isSkipped:k}=(0,r.useGuidedTour)(),H=!te(p)&&h&&!k,{push:W}=(0,S.k6)(),x=B=>{B.preventDefault(),W("/plugins/content-type-builder/content-types/create-content-type")},C=(0,e.useMemo)(()=>{const B=j=>j.filter(V=>V.isDisplayed);return B(o).length>1||B(i).length>0},[o,i]);return l?e.createElement(r.LoadingIndicatorPage,null):e.createElement(c.A,null,e.createElement(R,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},B=>e.createElement(n.q,{title:B[0]})),e.createElement(g.o,null,e.createElement(He,null,e.createElement("img",{alt:"","aria-hidden":!0,src:ae})),e.createElement(s.x,{padding:10},e.createElement(m.r,null,e.createElement(u.P,{col:8,s:12},e.createElement(ye,{onCreateCT:x,hasCreatedContentType:C}))),e.createElement(m.r,{gap:6},e.createElement(u.P,{col:8,s:12},H?e.createElement(ee,null):e.createElement(Ee,null)),e.createElement(u.P,{col:4,s:12},e.createElement(Ie,null))))))};function We(){const o=(0,ne.c)(z,async()=>(await t.e(8296).then(t.bind(t,66831))).HomePageEE);return o?e.createElement(o,null):null}const Ze=We},8976:(D,v,t)=>{t.d(v,{G:()=>u,Y:()=>r});var e=t(74081),s=t(27279),c=t(72450),g=t(61657),m=t(10701);const u=(0,c.default)(m.k)`
  > svg {
    height: ${({theme:n})=>n.spaces[3]};
    width: ${({theme:n})=>n.spaces[3]};

    > g,
    path {
      fill: ${({theme:n})=>n.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${g.BF}
`,r=s.forwardRef(({disabled:n,children:a,background:d="neutral0",...M},P)=>(0,e.jsx)(u,{ref:P,"aria-disabled":n,as:"button",type:"button",disabled:n,padding:2,hasRadius:!0,background:d,borderColor:"neutral200",cursor:"pointer",...M,children:a}));r.displayName="BaseButton"},80187:(D,v,t)=>{t.d(v,{G$:()=>s,Gt:()=>M,MG:()=>e,MR:()=>r,T:()=>u,TP:()=>c,Vb:()=>m,Vv:()=>a,ZC:()=>d,gK:()=>g,wG:()=>n});const e="success-light",s="danger-light",c="default",g="tertiary",m="secondary",u="danger",r="success",n="ghost",a=[e,s],d=[c,g,m,u,r,n,...a],M=["S","M","L"]},62629:(D,v,t)=>{t.d(v,{PD:()=>r,sg:()=>g,tB:()=>u,yP:()=>m});var e=t(80187),s=t(32370);const c=n=>n===e.MG||n===e.G$?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.gK?"neutral":n===e.TP||n===e.Vb||e.ZC.every(a=>a!==n)?"primary":`${n}`,g=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${s.Z} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,m=({theme:n,variant:a})=>[...e.Vv,e.Vb].includes(a)?`
      background-color: ${n.colors.neutral0};
    `:a===e.gK?`
      background-color: ${n.colors.neutral100};
    `:a===e.wG?`
      background-color: ${n.colors.neutral100};
    `:a===e.TP?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${c(a)}500`]};
    background: ${n.colors[`${c(a)}500`]};
  `,u=({theme:n,variant:a})=>[...e.Vv,e.Vb].includes(a)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${c(a)}600`]};
      ${s.Z} {
        color: ${n.colors[`${c(a)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${c(a)}600`]};
        }
      }
    `:a===e.gK?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${c(a)}600`]};
    background: ${n.colors[`${c(a)}600`]};
  `,r=({theme:n,variant:a})=>{switch(a){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${n.colors[`${c(a)}200`]};
          background: ${n.colors[`${c(a)}100`]};
          ${s.Z} {
            color: ${n.colors[`${c(a)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${c(a)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${s.Z} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Z} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${n.colors[`${c(a)}600`]};
          background: ${n.colors[`${c(a)}600`]};
          ${s.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}}},61657:(D,v,t)=>{t.d(v,{BF:()=>g,k3:()=>c});var e=t(72450);const s=m=>({theme:u,size:r})=>u.sizes[m][r],c=(m="&")=>({theme:u,hasError:r=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${m}:focus-within {
      border: 1px solid ${r?u.colors.danger600:u.colors.primary600};
      box-shadow: ${r?u.colors.danger600:u.colors.primary600} 0px 0px 0px 2px;
    }
  `,g=({theme:m})=>(0,e.css)`
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
      border: 2px solid ${m.colors.primary600};
    }
  }
`},37370:(D,v,t)=>{t.d(v,{Q:()=>d});var e=t(74081),s=t(27279),c=t(72450),g=t(62629),m=t(8976),u=t(30413),r=t(10701),n=t(32370);const a=(0,c.default)(m.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${g.sg}
    &:active {
      ${g.sg}
    }
  }

  &:hover {
    ${g.yP}
  }

  &:active {
    ${g.tB}
  }

  ${g.PD}
`,d=s.forwardRef(({variant:M="default",startIcon:P,endIcon:L,disabled:$=!1,children:R,size:S="S",as:f=u.f,...y},T)=>{const O=S==="S"?2:"10px",I=4;return(0,e.jsxs)(a,{ref:T,"aria-disabled":$,size:S,variant:M,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:O,paddingLeft:I,paddingRight:I,paddingTop:O,pointerEvents:$?"none":void 0,...y,as:f||u.f,children:[P&&(0,e.jsx)(r.k,{"aria-hidden":!0,children:P}),(0,e.jsx)(n.Z,{variant:S==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:R}),L&&(0,e.jsx)(r.k,{"aria-hidden":!0,children:L})]})});d.displayName="LinkButton"},79213:(D,v,t)=>{t.d(v,{r:()=>a});var e=t(74081),s=t(27279),c=t(34120),g=t(72450),m=t(61657),u=t(30413),r=t(32370);const n=(0,g.default)(u.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:d})=>d.spaces[2]};
  pointer-events: ${({disabled:d})=>d?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:d,theme:M})=>d?M.colors.neutral600:M.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:d})=>d.colors.primary500};
  }

  &:active {
    color: ${({theme:d})=>d.colors.primary700};
  }

  ${m.BF};
`,a=s.forwardRef(({children:d,href:M,disabled:P=!1,startIcon:L,endIcon:$,isExternal:R=!0,...S},f)=>(0,e.jsxs)(n,{ref:f,href:M,disabled:P,isExternal:R,...S,children:[L,(0,e.jsx)(r.Z,{textColor:P?"neutral600":"primary600",children:d}),$,M&&!$&&R&&(0,e.jsx)(c.Z,{})]}));a.displayName="Link"}}]);
