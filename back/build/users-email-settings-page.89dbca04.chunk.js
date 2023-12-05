"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[8418],{38977:(O,f,s)=>{s.r(f),s.d(f,{default:()=>ie});var t=s(27279),m=s(86042),n=s(796),i=s(34041),c=s(49969),e=s(61166),a=s(26781),p=s(40464),u=s(84419),o=s(99688),T=s(81565),r=s(37386),y=s(23851),A=s(90529),d=s(49899),l=s(87549),R=s(3785),S=s(51413),V=s(12692),F=s(64360),J=s(71563),X=s(70627),E=s.n(X),x=s(47853);const Y=x.Ry().shape({options:x.Ry().shape({from:x.Ry().shape({name:x.Z_().required(e.translatedErrors.required),email:x.Z_().email(e.translatedErrors.email).required(e.translatedErrors.required)}).required(),response_email:x.Z_().email(e.translatedErrors.email),object:x.Z_().required(e.translatedErrors.required),message:x.Z_().required(e.translatedErrors.required)}).required(e.translatedErrors.required)}),I=({template:g,onToggle:M,onSubmit:$})=>{const{formatMessage:v}=(0,a.Z)();return t.createElement(T.P,{onClose:M,labelledBy:`${v({id:(0,o.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${v({id:(0,o.OB)(g.display),defaultMessage:g.display})}`},t.createElement(r.x,null,t.createElement(V.O,{label:`${v({id:(0,o.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${v({id:(0,o.OB)(g.display),defaultMessage:g.display})}`},t.createElement(F.$,null,v({id:(0,o.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(F.$,{isCurrent:!0},v({id:(0,o.OB)(g.display),defaultMessage:g.display})))),t.createElement(J.J9,{onSubmit:$,initialValues:g,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:b,values:B,handleChange:C,isSubmitting:L})=>t.createElement(e.Form,null,t.createElement(y.f,null,t.createElement(A.r,{gap:5},t.createElement(d.P,{col:6,s:12},t.createElement(e.GenericInput,{intlLabel:{id:(0,o.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:B.options.from.name,error:b?.options?.from?.name,type:"text"})),t.createElement(d.P,{col:6,s:12},t.createElement(e.GenericInput,{intlLabel:{id:(0,o.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:B.options.from.email,error:b?.options?.from?.email,type:"text"})),t.createElement(d.P,{col:6,s:12},t.createElement(e.GenericInput,{intlLabel:{id:(0,o.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:B.options.response_email,error:b?.options?.response_email,type:"text"})),t.createElement(d.P,{col:6,s:12},t.createElement(e.GenericInput,{intlLabel:{id:(0,o.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:B.options.object,error:b?.options?.object,type:"text"})),t.createElement(d.P,{col:12,s:12},t.createElement(l.g,{label:v({id:(0,o.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:C,value:B.options.message,error:b?.options?.message&&v({id:b.options.message,defaultMessage:b.options.message})})))),t.createElement(R.m,{startActions:t.createElement(S.z,{onClick:M,variant:"tertiary"},"Cancel"),endActions:t.createElement(S.z,{loading:L,type:"submit"},"Finish")}))))};I.propTypes={template:E().shape({display:E().string,icon:E().string,options:E().shape({from:E().shape({name:E().string,email:E().string}),message:E().string,object:E().string,response_email:E().string})}).isRequired,onSubmit:E().func.isRequired,onToggle:E().func.isRequired};const k=I;var q=s(92712),_=s(7609),Z=s(66016),P=s(9465),D=s(17992),j=s(35557),ee=s(84428),U=s(57074),H=s(2667),te=s(69),N=s(9663),ae=s(82943);const W=({canUpdate:g,onEditClick:M})=>{const{formatMessage:$}=(0,a.Z)();return t.createElement(q.i,{colCount:3,rowCount:3},t.createElement(_.h,null,t.createElement(Z.Tr,null,t.createElement(P.Th,{width:"1%"},t.createElement(D.T,null,$({id:(0,o.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(P.Th,null,t.createElement(j.Z,{variant:"sigma",textColor:"neutral600"},$({id:(0,o.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(P.Th,{width:"1%"},t.createElement(D.T,null,$({id:(0,o.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(ee.p,null,t.createElement(Z.Tr,{...(0,e.onRowClick)({fn:()=>M("reset_password")})},t.createElement(P.Td,null,t.createElement(U.J,null,t.createElement(te.Z,{"aria-label":$({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(P.Td,null,t.createElement(j.Z,null,$({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(P.Td,{...e.stopPropagation},t.createElement(H.h,{onClick:()=>M("reset_password"),label:$({id:(0,o.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&t.createElement(N.Z,null)}))),t.createElement(Z.Tr,{...(0,e.onRowClick)({fn:()=>M("email_confirmation")})},t.createElement(P.Td,null,t.createElement(U.J,null,t.createElement(ae.Z,{"aria-label":$({id:(0,o.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(P.Td,null,t.createElement(j.Z,null,$({id:(0,o.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(P.Td,{...e.stopPropagation},t.createElement(H.h,{onClick:()=>M("email_confirmation"),label:$({id:(0,o.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&t.createElement(N.Z,null)})))))};W.propTypes={canUpdate:E().bool.isRequired,onEditClick:E().func.isRequired};const se=W,ne=()=>t.createElement(e.CheckPagePermissions,{permissions:u._.readEmailTemplates},t.createElement(le,null)),le=()=>{const{formatMessage:g}=(0,a.Z)(),{trackUsage:M}=(0,e.useTracking)(),{notifyStatus:$}=(0,m.G)(),v=(0,e.useNotification)(),{lockApp:b,unlockApp:B}=(0,e.useOverlayBlocker)(),C=(0,p.useQueryClient)(),{get:L,put:oe}=(0,e.useFetchClient)(),{formatAPIError:w}=(0,e.useAPIErrorHandler)();(0,e.useFocusWhenNavigate)();const[re,de]=t.useState(!1),[G,me]=t.useState(null),{isLoading:ce,allowedActions:{canUpdate:pe}}=(0,e.useRBAC)({update:u._.updateEmailTemplates}),{isLoading:ue,data:K}=(0,p.useQuery)(["users-permissions","email-templates"],async()=>{const{data:h}=await L("/users-permissions/email-templates");return h},{onSuccess(){$(g({id:(0,o.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(h){v({type:"warning",message:w(h)})}}),fe=ce||ue,z=()=>{de(h=>!h)},ge=h=>{me(h),z()},Q=(0,p.useMutation)(h=>oe("/users-permissions/email-templates",{"email-templates":h}),{async onSuccess(){await C.invalidateQueries(["users-permissions","email-templates"]),v({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),M("didEditEmailTemplates"),B(),z()},onError(h){v({type:"warning",message:w(h)}),B()},refetchActive:!0}),Ee=h=>{b(),M("willEditEmailTemplates");const $e={...K,[G]:h};Q.mutate($e)};return fe?t.createElement(n.o,{"aria-busy":"true"},t.createElement(e.SettingsPageTitle,{name:g({id:(0,o.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(i.T,{title:g({id:(0,o.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(c.D,null,t.createElement(e.LoadingIndicatorPage,null))):t.createElement(n.o,{"aria-busy":Q.isLoading},t.createElement(e.SettingsPageTitle,{name:g({id:(0,o.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(i.T,{title:g({id:(0,o.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(c.D,null,t.createElement(se,{onEditClick:ge,canUpdate:pe}),re&&t.createElement(k,{template:K[G],onToggle:z,onSubmit:Ee})))},ie=ne},99688:(O,f,s)=>{s.d(f,{YX:()=>i,OB:()=>c.Z});var t=s(10124),m=s.n(t);const i=e=>Object.keys(e).reduce((a,p)=>{const u=e[p].controllers,o=Object.keys(u).reduce((T,r)=>(m()(u[r])||(T[r]=u[r]),T),{});return m()(o)||(a[p]={controllers:o}),a},{});var c=s(58655)},77919:(O,f,s)=>{s.d(f,{x:()=>c});var t=s(72450),m=s(52529),n=s(812);const i={color:!0,cursor:!0,height:!0,width:!0},c=t.default.div.withConfig({shouldForwardProp:(e,a)=>!i[e]&&a(e)})`
  // Font
  font-size: ${({fontSize:e,theme:a})=>(0,n.$)(a.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:a})=>(0,n.$)(e.colors,a,a)};
  color: ${({theme:e,color:a})=>(0,n.$)(e.colors,a,void 0)};

  // Spaces
  ${({theme:e,padding:a})=>(0,m.Z)("padding",a,e)}
  ${({theme:e,paddingTop:a})=>(0,m.Z)("padding-top",a,e)}
  ${({theme:e,paddingRight:a})=>(0,m.Z)("padding-right",a,e)}
  ${({theme:e,paddingBottom:a})=>(0,m.Z)("padding-bottom",a,e)}
  ${({theme:e,paddingLeft:a})=>(0,m.Z)("padding-left",a,e)}
  ${({theme:e,marginLeft:a})=>(0,m.Z)("margin-left",a,e)}
  ${({theme:e,marginRight:a})=>(0,m.Z)("margin-right",a,e)}
  ${({theme:e,marginTop:a})=>(0,m.Z)("margin-top",a,e)}
  ${({theme:e,marginBottom:a})=>(0,m.Z)("margin-bottom",a,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:a})=>a?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:a})=>a?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:a,borderRadius:p})=>a?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:a})=>(0,n.$)(a.colors,e,void 0)};
  border: ${({theme:e,borderColor:a,borderStyle:p,borderWidth:u})=>{if(a&&!p&&typeof u>"u")return`1px solid ${e.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:a})=>(0,n.$)(e.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:a})=>e?e(a):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  right: ${({right:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  top: ${({top:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  bottom: ${({bottom:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  min-width: ${({minWidth:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  height: ${({height:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:a})=>(0,n.$)(a.spaces,e,e)};
  min-height: ${({minHeight:e,theme:a})=>(0,n.$)(a.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:a})=>(0,n.$)(e.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},41101:(O,f,s)=>{s.d(f,{Z:()=>A});var t=s(72450);const m="alpha",n="beta",i="delta",c="epsilon",e="omega",a="pi",p="sigma",u=[m,n,i,c,e,a,p],o=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,T=({variant:d=e,theme:l})=>{switch(d){case m:return`
        font-weight: ${l.fontWeights.bold};
        font-size: ${l.fontSizes[5]};
        line-height: ${l.lineHeights[2]};
      `;case n:return`
        font-weight: ${l.fontWeights.bold};
        font-size: ${l.fontSizes[4]};
        line-height: ${l.lineHeights[1]};
      `;case i:return`
        font-weight: ${l.fontWeights.semiBold};
        font-size: ${l.fontSizes[3]};
        line-height: ${l.lineHeights[2]};
      `;case c:return`
        font-size: ${l.fontSizes[3]};
        line-height: ${l.lineHeights[6]};
      `;case e:return`
        font-size: ${l.fontSizes[2]};
        line-height: ${l.lineHeights[4]};
      `;case a:return`
        font-size: ${l.fontSizes[1]};
        line-height: ${l.lineHeights[3]};
      `;case p:return`
        font-weight: ${l.fontWeights.bold};
        font-size: ${l.fontSizes[0]};
        line-height: ${l.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${l.fontSizes[2]};
      `}};var r=s(812);const y={fontSize:!0,fontWeight:!0},A=t.default.span.withConfig({shouldForwardProp:(d,l)=>!y[d]&&l(d)})`
  ${T}
  ${o}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:l})=>(0,r.$)(d.fontWeights,l,void 0)};
  font-size: ${({theme:d,fontSize:l})=>(0,r.$)(d.fontSizes,l,void 0)};
  line-height: ${({theme:d,lineHeight:l})=>(0,r.$)(d.lineHeights,l,l)};
  color: ${({theme:d,textColor:l})=>d.colors[l||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},52529:(O,f,s)=>{s.d(f,{Z:()=>t});const t=(m,n,i)=>{if(!n)return;let c=Array.isArray(n)?n:[];if(!Array.isArray(n)&&typeof n=="object"&&(c=[n?.desktop,n?.tablet,n?.mobile]),c.length>0)return c.reduce((p,u,o)=>{if(u)switch(o){case 0:return`${p}${m}: ${i.spaces[u]};`;case 1:return`${p}${i.mediaQueries.tablet}{${m}: ${i.spaces[u]};}`;case 2:return`${p}${i.mediaQueries.mobile}{${m}: ${i.spaces[u]};}`;default:return p}return p},"");const e=i.spaces[n]||n;return`${m}: ${e};`}},812:(O,f,s)=>{s.d(f,{$:()=>n});function t(i,c){return typeof i=="string"?!1:c in i}function m(i){return i&&typeof i=="object"&&!Array.isArray(i)}function n(i,c,e){return c&&t(i,c)?i[c]:e}},12692:(O,f,s)=>{s.d(f,{O:()=>T});var t=s(74081),m=s(27279),n=s(72450),i=s(77919),c=s(41101);const e=()=>(0,t.jsx)(i.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(c.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var a=s(52529);const p={direction:!0},u=(0,n.default)(i.x).withConfig({shouldForwardProp:(r,y)=>!p[r]&&y(r)})`
  align-items: ${({alignItems:r="center"})=>r};
  display: ${({display:r="flex",inline:y})=>y?"inline-flex":r};
  flex-direction: ${({direction:r="row"})=>r};
  flex-shrink: ${({shrink:r})=>r};
  flex-wrap: ${({wrap:r})=>r};
  ${({gap:r,theme:y})=>(0,a.Z)("gap",r,y)};
  justify-content: ${({justifyContent:r})=>r};
`,o=(0,n.default)(u)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:r})=>`calc(-1*${r.spaces[2]})`};
  }
`,T=({label:r,children:y,...A})=>{const d=m.Children.toArray(y);return(0,t.jsx)(i.x,{"aria-label":r,...A,children:(0,t.jsx)(o,{as:"ol",children:m.Children.map(d,(l,R)=>{const S=d.length>1&&R+1<d.length;return(0,t.jsxs)(u,{inline:!0,as:"li",children:[l,S&&(0,t.jsx)(e,{})]})})})})};T.displayName="Breadcrumbs"},64360:(O,f,s)=>{s.d(f,{$:()=>i});var t=s(74081),m=s(77919),n=s(41101);const i=({children:c,isCurrent:e=!1,...a})=>(0,t.jsx)(m.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(n.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...a,children:c})});i.displayName="Crumb"}}]);
