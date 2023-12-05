"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[2501],{84409:(D,d,e)=>{e.d(d,{p:()=>o});var t=e(27279),u=e(61166),E=e(40464);const o=(l={})=>{const{get:s}=(0,u.useFetchClient)(),{data:c,isLoading:a}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:v}=await s("/admin/providers");return v},l);return{providers:t.useMemo(()=>c??[],[c]),isLoading:a}}},21207:(D,d,e)=>{e.d(d,{Z:()=>f});var t=e(27279),u=e(85898),E=e(62750),o=e(35557),l=e(90529),s=e(49899),c=e(70627),a=e.n(c),p=e(26781),v=e(47533),g=e(72450);const h=g.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,g.default)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(E.u,{label:n.displayName},t.createElement(h,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.Z,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const P=({providers:n,displayAllProviders:M})=>{const{formatMessage:y}=(0,p.Z)();return M?t.createElement(l.r,{gap:4},n.map(r=>t.createElement(s.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):n.length>2&&!M?t.createElement(l.r,{gap:4},n.slice(0,2).map(r=>t.createElement(s.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(s.P,{col:4},t.createElement(E.u,{label:y({id:"global.see-more"})},t.createElement(h,{as:v.Link,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(r=>t.createElement(i,{key:r.uid,provider:r})))};P.defaultProps={displayAllProviders:!0},P.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const f=P},52501:(D,d,e)=>{e.r(d),e.d(d,{FORMS:()=>r});var t=e(27279),u=e(67393),E=e(796),o=e(52185),l=e(35557),s=e(85898),c=e(62475),a=e(51413),p=e(61166),v=e(26781),g=e(51447),h=e(72450),O=e(68890),i=e(50745),P=e(84409),f=e(21207);const n=(0,h.default)(u.i)`
  flex: 1;
`,r={providers:{Component:()=>{const{push:A}=(0,g.k6)(),{formatMessage:m}=(0,v.Z)(),{isLoading:C,providers:L}=(0,P.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),R=()=>{A("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!C&&L.length===0?t.createElement(g.l_,{to:"/auth/login"}):t.createElement(i.ZP,null,t.createElement(E.o,null,t.createElement(i.bU,null,t.createElement(i.sg,null,t.createElement(O.Z,null),t.createElement(o.x,{paddingTop:6,paddingBottom:1},t.createElement(l.Z,{as:"h1",variant:"alpha"},m({id:"Auth.form.welcome.title"}))),t.createElement(o.x,{paddingBottom:7},t.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},m({id:"Auth.login.sso.subtitle"})))),t.createElement(s.k,{direction:"column",alignItems:"stretch",gap:7},C?t.createElement(s.k,{justifyContent:"center"},t.createElement(c.a,null,m({id:"Auth.login.sso.loading"}))):t.createElement(f.Z,{providers:L}),t.createElement(s.k,null,t.createElement(n,null),t.createElement(o.x,{paddingLeft:3,paddingRight:3},t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},m({id:"or"}))),t.createElement(n,null)),t.createElement(a.z,{fullWidth:!0,size:"L",onClick:R},m({id:"Auth.form.button.login.strapi"})))),t.createElement(s.k,{justifyContent:"center"},t.createElement(o.x,{paddingTop:4},t.createElement(p.Link,{to:"/auth/forgot-password"},t.createElement(l.Z,{variant:"pi"},m({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
