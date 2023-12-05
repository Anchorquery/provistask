"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[2282],{1431:(R,b,s)=>{s.r(b),s.d(b,{ProvidersPage:()=>ie,default:()=>Le});var a=s(27279),d=s(1296),r=s(796),o=s(34041),g=s(49969),e=s(92712),t=s(7609),h=s(66016),f=s(9465),E=s(35557),T=s(17992),l=s(84428),x=s(2667),u=s(61166),m=s(9663),n=s(51943),W=s.n(n),D=s(26781),H=s(40464),ce=s(81565),me=s(37386),pe=s(23851),ge=s(85898),fe=s(90529),he=s(49899),ve=s(3785),_=s(51413),be=s(12692),$e=s(64360),ye=s(71563),Ee=s(70627),i=s.n(Ee),Pe=s(94707),xe=s(19098);const K=({description:$,disabled:A,intlLabel:B,error:C,name:L,onChange:j,placeholder:v,providerToEditName:z,type:Z,value:M})=>{const{formatMessage:P}=(0,D.Z)(),S=L==="noName"?`${window.strapi.backendURL}/api/connect/${z}/callback`:M,F=P({id:B.id,defaultMessage:B.defaultMessage},{provider:z,...B.values}),O=$?P({id:$.id,defaultMessage:$.defaultMessage},{provider:z,...$.values}):"";if(Z==="bool")return a.createElement(Pe.s,{"aria-label":L,checked:M,disabled:A,hint:O,label:F,name:L,offLabel:P({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:P({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:U=>{j({target:{name:L,value:U.target.checked}})}});const G=v?P({id:v.id,defaultMessage:v.defaultMessage},{...v.values}):"",J=C?P({id:C,defaultMessage:C}):"";return a.createElement(xe.o,{"aria-label":L,disabled:A,error:J,label:F,name:L,onChange:j,placeholder:G,type:Z,value:S})};K.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},K.propTypes={description:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired,values:i().object}),disabled:i().bool,error:i().string,intlLabel:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired,values:i().object}).isRequired,name:i().string.isRequired,onChange:i().func.isRequired,placeholder:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired,values:i().object}),providerToEditName:i().string.isRequired,type:i().string.isRequired,value:i().oneOfType([i().bool,i().string])};const Me=K,V=({headerBreadcrumbs:$,initialData:A,isSubmiting:B,layout:C,isOpen:L,onSubmit:j,onToggle:v,providerToEditName:z})=>{const{formatMessage:Z}=(0,D.Z)();return L?a.createElement(ce.P,{onClose:v,labelledBy:"title"},a.createElement(me.x,null,a.createElement(be.O,{label:$.join(", ")},$.map((M,P,S)=>a.createElement($e.$,{isCurrent:P===S.length-1,key:M},M)))),a.createElement(ye.J9,{onSubmit:M=>j(M),initialValues:A,validationSchema:C.schema,validateOnChange:!1},({errors:M,handleChange:P,values:S})=>a.createElement(u.Form,null,a.createElement(pe.f,null,a.createElement(ge.k,{direction:"column",alignItems:"stretch",gap:1},a.createElement(fe.r,{gap:5},C.form.map(F=>F.map(O=>a.createElement(he.P,{key:O.name,col:O.size,xs:12},a.createElement(Me,{...O,error:M[O.name],onChange:P,value:S[O.name],providerToEditName:z}))))))),a.createElement(ve.m,{startActions:a.createElement(_.z,{variant:"tertiary",onClick:v,type:"button"},Z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:a.createElement(_.z,{type:"submit",loading:B},Z({id:"global.save",defaultMessage:"Save"}))})))):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:i().arrayOf(i().string).isRequired,initialData:i().object,layout:i().shape({form:i().arrayOf(i().array),schema:i().object}).isRequired,isOpen:i().bool.isRequired,isSubmiting:i().bool.isRequired,onSubmit:i().func.isRequired,onToggle:i().func.isRequired,providerToEditName:i().string};const Te=V;var ee=s(84419),y=s(99688),c=s(47853);const te={id:(0,y.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},se={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},k={id:(0,y.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},Q={id:(0,y.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ae={id:(0,y.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},re={id:(0,y.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},w={id:(0,y.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ne={id:(0,y.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},X={email:{form:[[{intlLabel:Q,name:"enabled",type:"bool",description:k,size:6}]],schema:c.Ry().shape({enabled:c.Xg().required(u.translatedErrors.required)})},providers:{form:[[{intlLabel:Q,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:ne,name:"secret",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:re,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:c.Ry().shape({enabled:c.Xg().required(u.translatedErrors.required),key:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()}),secret:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()}),callback:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:Q,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:ne,name:"secret",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,y.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:w,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,y.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,y.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:re,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:c.Ry().shape({enabled:c.Xg().required(u.translatedErrors.required),key:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()}),secret:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()}),subdomain:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()}),callback:c.Z_().when("enabled",{is:!0,then:c.Z_().required(u.translatedErrors.required),otherwise:c.Z_()})})}},ie=()=>{const{formatMessage:$,locale:A}=(0,D.Z)(),B=(0,H.useQueryClient)(),{trackUsage:C}=(0,u.useTracking)(),[L,j]=a.useState(!1),[v,z]=a.useState(null),Z=(0,u.useNotification)(),{lockApp:M,unlockApp:P}=(0,u.useOverlayBlocker)(),{get:S,put:F}=(0,u.useFetchClient)(),{formatAPIError:O}=(0,u.useAPIErrorHandler)(),G=(0,u.useCollator)(A,{sensitivity:"base"});(0,u.useFocusWhenNavigate)();const{isLoading:J,allowedActions:{canUpdate:U}}=(0,u.useRBAC)({update:ee._.updateProviders}),{isLoading:Ce,data:Y}=(0,H.useQuery)(["users-permissions","get-providers"],async()=>{const{data:p}=await S("/users-permissions/providers");return p},{initialData:{}}),oe=(0,H.useMutation)(p=>F("/users-permissions/providers",p),{async onSuccess(){await B.invalidateQueries(["users-permissions","providers"]),Z({type:"success",message:{id:(0,y.OB)("notification.success.submit")}}),C("didEditAuthenticationProvider"),q(),P()},onError(p){Z({type:"warning",message:O(p)}),P()},refetchActive:!1}),N=Object.entries(Y).reduce((p,[I,Be])=>{const{icon:ue,enabled:ze,subdomain:Se}=Be;return p.push({name:I,icon:ue==="envelope"?["fas","envelope"]:["fab",ue],enabled:ze,subdomain:Se}),p},[]).sort((p,I)=>G.compare(p.name,I.name)),Oe=Ce||J,le=a.useMemo(()=>v?!!N.find(I=>I.name===v)?.subdomain:!1,[N,v]),Ze=a.useMemo(()=>v==="email"?X.email:le?X.providersWithSubdomain:X.providers,[v,le]),q=()=>{j(p=>!p)},de=p=>{U&&(z(p.name),q())},Re=async p=>{M(),C("willEditAuthenticationProvider"),oe.mutate({providers:{...Y,[v]:p}})};return a.createElement(d.A,null,a.createElement(u.SettingsPageTitle,{name:$({id:(0,y.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),a.createElement(r.o,null,a.createElement(o.T,{title:$({id:(0,y.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Oe?a.createElement(u.LoadingIndicatorPage,null):a.createElement(g.D,null,a.createElement(e.i,{colCount:3,rowCount:N.length+1},a.createElement(t.h,null,a.createElement(h.Tr,null,a.createElement(f.Th,null,a.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},$({id:"global.name",defaultMessage:"Name"}))),a.createElement(f.Th,null,a.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},$({id:(0,y.OB)("Providers.status"),defaultMessage:"Status"}))),a.createElement(f.Th,null,a.createElement(E.Z,{variant:"sigma"},a.createElement(T.T,null,$({id:"global.settings",defaultMessage:"Settings"})))))),a.createElement(l.p,null,N.map(p=>a.createElement(h.Tr,{key:p.name,...(0,u.onRowClick)({fn:()=>de(p),condition:U})},a.createElement(f.Td,{width:"45%"},a.createElement(E.Z,{fontWeight:"semiBold",textColor:"neutral800"},p.name)),a.createElement(f.Td,{width:"65%"},a.createElement(E.Z,{textColor:p.enabled?"success600":"danger600","data-testid":`enable-${p.name}`},p.enabled?$({id:"global.enabled",defaultMessage:"Enabled"}):$({id:"global.disabled",defaultMessage:"Disabled"}))),a.createElement(f.Td,{...u.stopPropagation},U&&a.createElement(x.h,{onClick:()=>de(p),noBorder:!0,icon:a.createElement(m.Z,null),label:"Edit"})))))))),a.createElement(Te,{initialData:Y[v],isOpen:L,isSubmiting:oe.isLoading,layout:Ze,headerBreadcrumbs:[$({id:(0,y.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),W()(v)],onToggle:q,onSubmit:Re,providerToEditName:v}))},Le=()=>a.createElement(u.CheckPagePermissions,{permissions:ee._.readProviders},a.createElement(ie,null))},99688:(R,b,s)=>{s.d(b,{YX:()=>o,OB:()=>g.Z});var a=s(10124),d=s.n(a);const o=e=>Object.keys(e).reduce((t,h)=>{const f=e[h].controllers,E=Object.keys(f).reduce((T,l)=>(d()(f[l])||(T[l]=f[l]),T),{});return d()(E)||(t[h]={controllers:E}),t},{});var g=s(58655)},77919:(R,b,s)=>{s.d(b,{x:()=>g});var a=s(72450),d=s(52529),r=s(812);const o={color:!0,cursor:!0,height:!0,width:!0},g=a.default.div.withConfig({shouldForwardProp:(e,t)=>!o[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,r.$)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,r.$)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,r.$)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,d.Z)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,d.Z)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,d.Z)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,d.Z)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,d.Z)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,d.Z)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,d.Z)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,d.Z)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,d.Z)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:h})=>t?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,r.$)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:h,borderWidth:f})=>{if(t&&!h&&typeof f>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,r.$)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,r.$)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,r.$)(t.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:t})=>(0,r.$)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},41101:(R,b,s)=>{s.d(b,{Z:()=>u});var a=s(72450);const d="alpha",r="beta",o="delta",g="epsilon",e="omega",t="pi",h="sigma",f=[d,r,o,g,e,t,h],E=({ellipsis:m=!1})=>m&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,T=({variant:m=e,theme:n})=>{switch(m){case d:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case r:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case g:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case t:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case h:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var l=s(812);const x={fontSize:!0,fontWeight:!0},u=a.default.span.withConfig({shouldForwardProp:(m,n)=>!x[m]&&n(m)})`
  ${T}
  ${E}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:m,fontWeight:n})=>(0,l.$)(m.fontWeights,n,void 0)};
  font-size: ${({theme:m,fontSize:n})=>(0,l.$)(m.fontSizes,n,void 0)};
  line-height: ${({theme:m,lineHeight:n})=>(0,l.$)(m.lineHeights,n,n)};
  color: ${({theme:m,textColor:n})=>m.colors[n||"neutral800"]};
  text-align: ${({textAlign:m})=>m};
  text-decoration: ${({textDecoration:m})=>m};
  text-transform: ${({textTransform:m})=>m};
`},52529:(R,b,s)=>{s.d(b,{Z:()=>a});const a=(d,r,o)=>{if(!r)return;let g=Array.isArray(r)?r:[];if(!Array.isArray(r)&&typeof r=="object"&&(g=[r?.desktop,r?.tablet,r?.mobile]),g.length>0)return g.reduce((h,f,E)=>{if(f)switch(E){case 0:return`${h}${d}: ${o.spaces[f]};`;case 1:return`${h}${o.mediaQueries.tablet}{${d}: ${o.spaces[f]};}`;case 2:return`${h}${o.mediaQueries.mobile}{${d}: ${o.spaces[f]};}`;default:return h}return h},"");const e=o.spaces[r]||r;return`${d}: ${e};`}},812:(R,b,s)=>{s.d(b,{$:()=>r});function a(o,g){return typeof o=="string"?!1:g in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function r(o,g,e){return g&&a(o,g)?o[g]:e}},12692:(R,b,s)=>{s.d(b,{O:()=>T});var a=s(74081),d=s(27279),r=s(72450),o=s(77919),g=s(41101);const e=()=>(0,a.jsx)(o.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,a.jsx)(g.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=s(52529);const h={direction:!0},f=(0,r.default)(o.x).withConfig({shouldForwardProp:(l,x)=>!h[l]&&x(l)})`
  align-items: ${({alignItems:l="center"})=>l};
  display: ${({display:l="flex",inline:x})=>x?"inline-flex":l};
  flex-direction: ${({direction:l="row"})=>l};
  flex-shrink: ${({shrink:l})=>l};
  flex-wrap: ${({wrap:l})=>l};
  ${({gap:l,theme:x})=>(0,t.Z)("gap",l,x)};
  justify-content: ${({justifyContent:l})=>l};
`,E=(0,r.default)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:l})=>`calc(-1*${l.spaces[2]})`};
  }
`,T=({label:l,children:x,...u})=>{const m=d.Children.toArray(x);return(0,a.jsx)(o.x,{"aria-label":l,...u,children:(0,a.jsx)(E,{as:"ol",children:d.Children.map(m,(n,W)=>{const D=m.length>1&&W+1<m.length;return(0,a.jsxs)(f,{inline:!0,as:"li",children:[n,D&&(0,a.jsx)(e,{})]})})})})};T.displayName="Breadcrumbs"},64360:(R,b,s)=>{s.d(b,{$:()=>o});var a=s(74081),d=s(77919),r=s(41101);const o=({children:g,isCurrent:e=!1,...t})=>(0,a.jsx)(d.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,a.jsx)(r.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:g})});o.displayName="Crumb"}}]);
