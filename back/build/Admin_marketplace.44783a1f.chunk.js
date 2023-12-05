"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[5516],{63109:(I,T,t)=>{t.d(T,{Z:()=>f});var e=t(27279);const f=(M,b)=>{const[c,v]=(0,e.useState)(M);return(0,e.useEffect)(()=>{const n=setTimeout(()=>{v(M)},b);return()=>{clearTimeout(n)}},[M,b]),c}},91278:(I,T,t)=>{t.r(T),t.d(T,{MarketPlacePage:()=>be,default:()=>vt});var e=t(27279),k=t(1296),f=t(796),M=t(49969),b=t(12826),c=t(85898),v=t(87161),n=t(52185),u=t(92856),S=t(33832),g=t(61166),N=t(364),R=t(26781),U=t(49402),H=t(63109);const Q=()=>{const s=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[r,l]=(0,e.useState)(s),i=()=>l(!0),o=()=>l(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",i),window.addEventListener("offline",o),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}),[]),r};var Y=t(36364),D=t(57074),V=t(78191),j=t(34120);const Ce=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,g.useTracking)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>r("didMissMarketplacePlugin")},e.createElement(g.ContentBox,{title:s({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:s({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(V.Z,null),iconBackground:"alternative100",endAction:e.createElement(D.J,{as:j.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var xe=t(64481),J=t(51413),Se=t(85305),$e=t(22905),De=t(70627),a=t.n(De),A=t(72450),Oe=t(5578),oe=t(52870),le=t(33699);const ie=({message:s,value:r,onChange:l,possibleFilters:i,onClear:o,customizeContent:m})=>{const d=(p,E)=>`${p} (${E})`;return e.createElement(oe.P,{"data-testid":`${s}-button`,label:s,placeholder:s,size:"M",onChange:l,onClear:o,value:r,customizeContent:m,multi:!0},Object.entries(i).map(([p,E])=>e.createElement(le.W,{"data-testid":`${p}-${E}`,key:p,value:p},d(p,E))))};ie.propTypes={message:a().string.isRequired,value:a().array.isRequired,onChange:a().func.isRequired,possibleFilters:a().object.isRequired,onClear:a().func.isRequired,customizeContent:a().func.isRequired};const ce=ie,de=({source:s,onToggle:r,query:l,npmPackageType:i,possibleCategories:o,possibleCollections:m,handleSelectChange:d,handleSelectClear:p})=>{const{formatMessage:E}=(0,R.Z)();return e.createElement(Oe.J2,{source:s,onDismiss:r,padding:3,spacing:4},e.createElement(Le,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ce,{message:E({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:l?.collections||[],onChange:h=>{d({collections:h})},onClear:()=>p("collections"),possibleFilters:m,customizeContent:h=>E({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:h.length})}),i==="plugin"&&e.createElement(ce,{message:E({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:l?.categories||[],onChange:h=>{d({categories:h})},onClear:()=>p("categories"),possibleFilters:o,customizeContent:h=>E({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:h.length}),name:"categories"})))};de.propTypes={onToggle:a().func.isRequired,source:a().shape({current:a().instanceOf(Element)}).isRequired,query:a().object.isRequired,npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const Be=de,Le=(0,A.default)(c.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,X=({name:s,handleRemove:r})=>e.createElement(n.x,{padding:1},e.createElement(xe.V,{icon:e.createElement(Se.Z,null),onClick:r},s)),Ie=(0,A.default)(J.z)`
  height: ${({theme:s})=>s.sizes.input.S};
`,ue=({possibleCollections:s,possibleCategories:r,npmPackageType:l,query:i,handleSelectClear:o,handleSelectChange:m})=>{const[d,p]=(0,e.useState)(!1),E=(0,e.useRef)(),{formatMessage:h}=(0,R.Z)(),y=()=>p(P=>!P),C=(P,x)=>{const B={[x]:i[x].filter(Z=>Z!==P)};m(B)};return e.createElement(e.Fragment,null,e.createElement(n.x,{paddingTop:1,paddingBottom:1},e.createElement(Ie,{variant:"tertiary",ref:E,"data-testid":"filters-button",startIcon:e.createElement($e.Z,null),onClick:y,size:"S"},h({id:"app.utils.filters",defaultMessage:"Filters"})),d&&e.createElement(Be,{onToggle:y,source:E,query:i,handleSelectClear:o,handleSelectChange:m,possibleCollections:s,possibleCategories:r,npmPackageType:l})),i.collections?.map(P=>e.createElement(X,{name:P,key:P,handleRemove:()=>C(P,"collections")})),l==="plugin"&&i.categories?.map(P=>e.createElement(X,{name:P,key:P,handleRemove:()=>C(P,"categories")})))};X.propTypes={name:a().string.isRequired,handleRemove:a().func.isRequired},ue.propTypes={npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,query:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const Ne=ue;var Ae=t(62475),Ze=t(90529),je=t(49899),O=t(35557),Ue=t(64417),Fe=t(72630);const Ve=(0,A.default)(n.x)`
  background: ${({theme:s})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${s.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Ge=()=>e.createElement(Fe.M,null,Array(12).fill(null).map((s,r)=>e.createElement(Ve,{key:`empty-plugin-card-${r}`,height:"234px",hasRadius:!0}))),ge=({content:s})=>e.createElement(n.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(Ge,null),e.createElement(n.x,{position:"absolute",top:11,width:"100%"},e.createElement(c.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(D.J,{as:Ue.Z,color:"",width:"160px",height:"88px"}),e.createElement(n.x,{paddingTop:6},e.createElement(O.Z,{variant:"delta",as:"p",textColor:"neutral600"},s)))));ge.propTypes={content:a().string.isRequired};const we=ge;var q=t(62750),pe=t(37370),We=t(76088),Ke=t(6699),ze=t.n(Ke),He=t(61473),Qe=t(82943),me=t(20049),Ye=t(96487),fe=t.n(Ye);const G=({description:s,installMessage:r,disabled:l,handleCopy:i,pluginName:o})=>e.createElement(q.u,{"data-testid":`tooltip-${o}`,description:s},e.createElement(n.x,null,e.createElement(J.z,{size:"S",startIcon:e.createElement(me.Z,null),variant:"secondary",disabled:l,onClick:i},r))),_=({strapiPeerDepVersion:s,strapiAppVersion:r,handleCopy:l,pluginName:i})=>{const{formatMessage:o}=(0,R.Z)(),m=fe().validRange(s),d=fe().satisfies(r,m),p=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(r){if(!m)return e.createElement(G,{installMessage:p,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:r}),handleCopy:l});if(!d)return e.createElement(G,{installMessage:p,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:r,versionRange:m}),disabled:!0})}return e.createElement(J.z,{size:"S",startIcon:e.createElement(me.Z,null),variant:"secondary",onClick:l},p)};G.defaultProps={disabled:!1,handleCopy:null},G.propTypes={description:a().string.isRequired,installMessage:a().string.isRequired,disabled:a().bool,handleCopy:a().func,pluginName:a().string.isRequired},_.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},_.propTypes={strapiAppVersion:a().string,strapiPeerDepVersion:a().string,handleCopy:a().func.isRequired,pluginName:a().string.isRequired};const Je=_,ee=({isInstalled:s,isInDevelopmentMode:r,commandToCopy:l,strapiAppVersion:i,strapiPeerDepVersion:o,pluginName:m})=>{const d=(0,g.useNotification)(),{formatMessage:p}=(0,R.Z)(),{trackUsage:E}=(0,g.useTracking)(),{copy:h}=(0,g.useClipboard)(),y=async()=>{await h(l)&&(E("willInstallPlugin"),d({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return s?e.createElement(n.x,{paddingLeft:4},e.createElement(D.J,{as:Qe.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(O.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},p({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):r?e.createElement(Je,{strapiAppVersion:i,strapiPeerDepVersion:o,handleCopy:y,pluginName:m}):null};ee.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},ee.propTypes={isInstalled:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,commandToCopy:a().string.isRequired,strapiAppVersion:a().string,strapiPeerDepVersion:a().string,pluginName:a().string.isRequired};const Xe=ee;var qe=t(67393),_e=t(33539),et=t(43498),tt=t(32324);const at=(0,A.default)(qe.i)`
  width: ${(0,g.pxToRem)(12)};
  transform: rotate(90deg);
`,te=({githubStars:s,npmDownloads:r,npmPackageType:l})=>{const{formatMessage:i}=(0,R.Z)();return e.createElement(c.k,{gap:1},!!s&&e.createElement(e.Fragment,null,e.createElement(D.J,{as:_e.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement(D.J,{as:et.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:s,package:l})},e.createElement(O.Z,{variant:"pi",textColor:"neutral800"},s)),e.createElement(at,{unsetMargin:!1,background:"neutral200"})),e.createElement(D.J,{as:tt.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:r,package:l})},e.createElement(O.Z,{variant:"pi",textColor:"neutral800"},r)))};te.defaultProps={githubStars:0,npmDownloads:0},te.propTypes={githubStars:a().number,npmDownloads:a().number,npmPackageType:a().string.isRequired};const nt=te,st=(0,A.default)(O.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,ae=({npmPackage:s,isInstalled:r,useYarn:l,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:m})=>{const{attributes:d}=s,{formatMessage:p}=(0,R.Z)(),{trackUsage:E}=(0,g.useTracking)(),h=l?`yarn add ${d.npmPackageName}`:`npm install ${d.npmPackageName}`,y=p({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),C=`https://market.strapi.io/${ze().plural(o)}/${d.slug}`;return e.createElement(c.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(n.x,null,e.createElement(c.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(n.x,{as:"img",src:d.logo.url,alt:`${d.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(nt,{githubStars:d.githubStars,npmDownloads:d.npmDownloads,npmPackageType:o})),e.createElement(n.x,{paddingTop:4},e.createElement(O.Z,{as:"h3",variant:"delta"},e.createElement(c.k,{alignItems:"center"},d.name,d.validated&&!d.madeByStrapi&&e.createElement(q.u,{description:p({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(c.k,null,e.createElement(D.J,{as:We.Z,marginLeft:2,color:"success600"}))),d.madeByStrapi&&e.createElement(q.u,{description:y},e.createElement(c.k,null,e.createElement(n.x,{as:"img",src:He,alt:y,marginLeft:1,width:6,height:"auto"})))))),e.createElement(n.x,{paddingTop:2},e.createElement(st,{as:"p",variant:"omega",textColor:"neutral600"},d.description))),e.createElement(c.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(pe.Q,{size:"S",href:C,isExternal:!0,endIcon:e.createElement(j.Z,null),"aria-label":p({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:d.name}),variant:"tertiary",onClick:()=>E("didPluginLearnMore")},p({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Xe,{isInstalled:r,isInDevelopmentMode:i,commandToCopy:h,strapiAppVersion:m,strapiPeerDepVersion:d.strapiVersion,pluginName:d.name})))};ae.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},ae.propTypes={npmPackage:a().shape({id:a().string.isRequired,attributes:a().shape({name:a().string.isRequired,description:a().string.isRequired,slug:a().string.isRequired,npmPackageName:a().string.isRequired,npmPackageUrl:a().string.isRequired,repositoryUrl:a().string.isRequired,logo:a().object.isRequired,developerName:a().string.isRequired,validated:a().bool.isRequired,madeByStrapi:a().bool.isRequired,strapiCompatibility:a().oneOf(["v3","v4"]),strapiVersion:a().string,githubStars:a().number,npmDownloads:a().number}).isRequired}).isRequired,isInstalled:a().bool.isRequired,useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const rt=ae,ne=({status:s,npmPackages:r,installedPackageNames:l,useYarn:i,isInDevelopmentMode:o,npmPackageType:m,strapiAppVersion:d,debouncedSearch:p})=>{const{formatMessage:E}=(0,R.Z)();if(s==="error")return e.createElement(c.k,{paddingTop:8},e.createElement(g.AnErrorOccurred,null));if(s==="loading")return e.createElement(c.k,{justifyContent:"center",paddingTop:8},e.createElement(Ae.a,null,"Loading content..."));const h=E({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:p});return r.length===0?e.createElement(we,{content:h}):e.createElement(Ze.r,{gap:4,"data-testid":"marketplace-results"},r.map(y=>e.createElement(je.P,{col:4,s:6,xs:12,style:{height:"100%"},key:y.id},e.createElement(rt,{npmPackage:y,isInstalled:l.includes(y.attributes.npmPackageName),useYarn:i,isInDevelopmentMode:o,npmPackageType:m,strapiAppVersion:d}))))};ne.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},ne.propTypes={status:a().string.isRequired,npmPackages:a().array,installedPackageNames:a().arrayOf(a().string),useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,npmPackageType:a().string.isRequired,strapiAppVersion:a().string,debouncedSearch:a().string};const Pe=ne,Ee=({pagination:s})=>e.createElement(n.x,{paddingTop:4},e.createElement(c.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.PageSizeURLQuery,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.PaginationURLQuery,{pagination:s})));Ee.propTypes={pagination:a().shape({page:a().number.isRequired,pageCount:a().number.isRequired,pageSize:a().number.isRequired,total:a().number.isRequired}).isRequired};const ot=Ee,lt=t.p+"9d5d788027e86620c234.svg";var it=t(34041),ct=t(53785);const se=({isOnline:s,npmPackageType:r})=>{const{formatMessage:l}=(0,R.Z)(),{trackUsage:i}=(0,g.useTracking)(),o=r==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(it.T,{title:l({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:l({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:s&&e.createElement(pe.Q,{startIcon:e.createElement(ct.Z,null),variant:"tertiary",href:`https://market.strapi.io/submit-${r}`,onClick:()=>i(o),isExternal:!0},l({id:`admin.pages.MarketPlacePage.submit.${r}.link`,defaultMessage:`Submit ${r}`}))})},he=se;se.defaultProps={npmPackageType:"plugin"},se.propTypes={isOnline:a().bool.isRequired,npmPackageType:a().string};const dt=()=>{const{formatMessage:s}=(0,R.Z)();return e.createElement(k.A,null,e.createElement(f.o,null,e.createElement(he,{isOnline:!1}),e.createElement(c.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.pxToRem)(120)},e.createElement(n.x,{paddingBottom:2},e.createElement(O.Z,{textColor:"neutral700",variant:"alpha"},s({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(n.x,{paddingBottom:6},e.createElement(O.Z,{textColor:"neutral700",variant:"epsilon"},s({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:lt,alt:"offline",style:{width:"88px",height:"88px"}}))))},ut=(0,A.default)(n.x)`
  font-weight: ${({theme:s})=>s.fontWeights.semiBold};

  span {
    font-size: ${({theme:s})=>s.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,ve=({sortQuery:s,handleSelectChange:r})=>{const{formatMessage:l}=(0,R.Z)(),i={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(ut,null,e.createElement(oe.P,{size:"S",id:"sort-by-select",value:s,customizeContent:()=>l(i[s].selected),onChange:o=>{r({sort:o})},label:l({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(i).map(([o,m])=>e.createElement(le.W,{key:o,value:o},l(m.option)))))};ve.propTypes={sortQuery:a().string.isRequired,handleSelectChange:a().func.isRequired};const gt=ve;var pt=t(86042),mt=t(29206),w=t.n(mt),Me=t(40464);const ye="https://market-api.strapi.io",ft=(s,r={})=>{const l=(0,g.useNotification)();return(0,Me.useQuery)(["marketplace","plugins",r],async()=>{try{const i=w().stringify(w().parse(r)),o=await fetch(`${ye}/plugins?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace plugins.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Pt=(s,r={})=>{const l=(0,g.useNotification)();return(0,Me.useQuery)(["marketplace","providers",r],async()=>{try{const i=w().stringify(w().parse(r)),o=await fetch(`${ye}/providers?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace providers.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Et({npmPackageType:s,debouncedSearch:r,query:l,tabQuery:i}){const{notifyStatus:o}=(0,pt.G)(),{formatMessage:m}=(0,R.Z)(),d=m({id:"global.marketplace",defaultMessage:"Marketplace"}),p=()=>{o(m({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:d}))},E={page:l?.page||1,pageSize:l?.pageSize||24},{data:h,status:y}=ft(p,{...i.plugin,pagination:E,search:r}),{data:C,status:P}=Pt(p,{...i.provider,pagination:E,search:r}),x=s==="plugin"?h:C,B=s==="plugin"?y:P,[Z,W]=(0,e.useState)({}),[K,z]=(0,e.useState)({});(0,e.useEffect)(()=>{B==="success"&&W(x.meta.collections),y==="success"&&z(h.meta.categories)},[h?.meta.categories,y,x?.meta.collections,B]);const{pagination:re}=B==="success"?x.meta:{};return{pluginsResponse:h,providersResponse:C,pluginsStatus:y,providersStatus:P,possibleCollections:Z,possibleCategories:K,pagination:re}}const ht=Et,be=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,g.useTracking)(),l=(0,e.useRef)(r),i=(0,g.useNotification)(),[{query:o},m]=(0,g.useQueryParams)(),d=(0,H.Z)(o?.search,500)||"",{autoReload:p,dependencies:E,useYarn:h,strapiVersion:y}=(0,g.useAppInfo)(),C=Q(),P=o?.npmPackageType||"plugin",[x,B]=(0,e.useState)({plugin:P==="plugin"?{...o}:{},provider:P==="provider"?{...o}:{}});(0,g.useFocusWhenNavigate)(),(0,e.useEffect)(()=>{l.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{p||i({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[i,p]);const{pluginsResponse:Z,providersResponse:W,pluginsStatus:K,providersStatus:z,possibleCollections:re,possibleCategories:Mt,pagination:ke}=ht({npmPackageType:P,debouncedSearch:d,query:o,tabQuery:x});if(!C)return e.createElement(dt,null);const yt=L=>{const $=L===0?"plugin":"provider",kt=x[$]&&Object.keys(x[$]).length;m(kt?{...x[$],search:o?.search||"",npmPackageType:$,page:1}:{npmPackageType:$,collections:[],categories:[],sort:"name:asc",page:1,search:o?.search||""})},Re=L=>{m({...L,page:1}),B($=>({...$,[P]:{...$[P],...L}}))},bt=L=>{m({[L]:[],page:null},"remove"),B($=>({...$,[P]:{}}))},Te=Object.keys(E);return e.createElement(k.A,null,e.createElement(f.o,null,e.createElement(N.q,{title:s({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(he,{isOnline:C,npmPackageType:P}),e.createElement(M.D,null,e.createElement(b.v,{label:s({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(P),onTabChange:yt},e.createElement(c.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(v.m,null,e.createElement(v.O,null,s({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",K==="success"?`(${Z.meta.pagination.total})`:"..."),e.createElement(v.O,null,s({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",z==="success"?`(${W.meta.pagination.total})`:"...")),e.createElement(n.x,{width:"25%"},e.createElement(u.w,{name:"searchbar",onClear:()=>m({search:"",page:1}),value:o?.search,onChange:L=>m({search:L.target.value,page:1}),clearLabel:s({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(c.k,{paddingBottom:4,gap:2},e.createElement(gt,{sortQuery:o?.sort||"name:asc",handleSelectChange:Re}),e.createElement(Ne,{npmPackageType:P,possibleCollections:re,possibleCategories:Mt,query:o||{},handleSelectChange:Re,handleSelectClear:bt})),e.createElement(S.n,null,e.createElement(S.x,null,e.createElement(Pe,{npmPackages:Z?.data,status:K,installedPackageNames:Te,useYarn:h,isInDevelopmentMode:p,npmPackageType:"plugin",strapiAppVersion:y,debouncedSearch:d})),e.createElement(S.x,null,e.createElement(Pe,{npmPackages:W?.data,status:z,installedPackageNames:Te,useYarn:h,isInDevelopmentMode:p,npmPackageType:"provider",debouncedSearch:d})))),ke&&e.createElement(ot,{pagination:ke}),e.createElement(n.x,{paddingTop:8},e.createElement(Ce,null)))))},vt=()=>{const s=(0,U.v9)(Y._);return e.createElement(g.CheckPagePermissions,{permissions:s.marketplace.main},e.createElement(be,null))}},8976:(I,T,t)=>{t.d(T,{G:()=>c,Y:()=>v});var e=t(74081),k=t(27279),f=t(72450),M=t(61657),b=t(10701);const c=(0,f.default)(b.k)`
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

  ${M.BF}
`,v=k.forwardRef(({disabled:n,children:u,background:S="neutral0",...g},N)=>(0,e.jsx)(c,{ref:N,"aria-disabled":n,as:"button",type:"button",disabled:n,padding:2,hasRadius:!0,background:S,borderColor:"neutral200",cursor:"pointer",...g,children:u}));v.displayName="BaseButton"},80187:(I,T,t)=>{t.d(T,{G$:()=>k,Gt:()=>g,MG:()=>e,MR:()=>v,T:()=>c,TP:()=>f,Vb:()=>b,Vv:()=>u,ZC:()=>S,gK:()=>M,wG:()=>n});const e="success-light",k="danger-light",f="default",M="tertiary",b="secondary",c="danger",v="success",n="ghost",u=[e,k],S=[f,M,b,c,v,n,...u],g=["S","M","L"]},62629:(I,T,t)=>{t.d(T,{PD:()=>v,sg:()=>M,tB:()=>c,yP:()=>b});var e=t(80187),k=t(32370);const f=n=>n===e.MG||n===e.G$?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.gK?"neutral":n===e.TP||n===e.Vb||e.ZC.every(u=>u!==n)?"primary":`${n}`,M=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${k.Z} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,b=({theme:n,variant:u})=>[...e.Vv,e.Vb].includes(u)?`
      background-color: ${n.colors.neutral0};
    `:u===e.gK?`
      background-color: ${n.colors.neutral100};
    `:u===e.wG?`
      background-color: ${n.colors.neutral100};
    `:u===e.TP?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${f(u)}500`]};
    background: ${n.colors[`${f(u)}500`]};
  `,c=({theme:n,variant:u})=>[...e.Vv,e.Vb].includes(u)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${f(u)}600`]};
      ${k.Z} {
        color: ${n.colors[`${f(u)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${f(u)}600`]};
        }
      }
    `:u===e.gK?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${f(u)}600`]};
    background: ${n.colors[`${f(u)}600`]};
  `,v=({theme:n,variant:u})=>{switch(u){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${n.colors[`${f(u)}200`]};
          background: ${n.colors[`${f(u)}100`]};
          ${k.Z} {
            color: ${n.colors[`${f(u)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${f(u)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${k.Z} {
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

        ${k.Z} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${n.colors[`${f(u)}600`]};
          background: ${n.colors[`${f(u)}600`]};
          ${k.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}}},61657:(I,T,t)=>{t.d(T,{BF:()=>M,k3:()=>f});var e=t(72450);const k=b=>({theme:c,size:v})=>c.sizes[b][v],f=(b="&")=>({theme:c,hasError:v=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${b}:focus-within {
      border: 1px solid ${v?c.colors.danger600:c.colors.primary600};
      box-shadow: ${v?c.colors.danger600:c.colors.primary600} 0px 0px 0px 2px;
    }
  `,M=({theme:b})=>(0,e.css)`
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
      border: 2px solid ${b.colors.primary600};
    }
  }
`},37370:(I,T,t)=>{t.d(T,{Q:()=>S});var e=t(74081),k=t(27279),f=t(72450),M=t(62629),b=t(8976),c=t(30413),v=t(10701),n=t(32370);const u=(0,f.default)(b.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${M.sg}
    &:active {
      ${M.sg}
    }
  }

  &:hover {
    ${M.yP}
  }

  &:active {
    ${M.tB}
  }

  ${M.PD}
`,S=k.forwardRef(({variant:g="default",startIcon:N,endIcon:R,disabled:U=!1,children:H,size:F="S",as:Q=c.f,...Y},D)=>{const V=F==="S"?2:"10px",j=4;return(0,e.jsxs)(u,{ref:D,"aria-disabled":U,size:F,variant:g,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:V,paddingLeft:j,paddingRight:j,paddingTop:V,pointerEvents:U?"none":void 0,...Y,as:Q||c.f,children:[N&&(0,e.jsx)(v.k,{"aria-hidden":!0,children:N}),(0,e.jsx)(n.Z,{variant:F==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:H}),R&&(0,e.jsx)(v.k,{"aria-hidden":!0,children:R})]})});S.displayName="LinkButton"}}]);
