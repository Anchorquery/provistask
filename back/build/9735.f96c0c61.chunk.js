(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[9735],{79194:(S,g,e)=>{"use strict";e.d(g,{v:()=>n});var t=e(27279),l=e(49402);function n(i,d){const s=(0,l.oR)();(0,t.useEffect)(()=>{s.injectReducer(i,d)},[s,i,d])}},75021:(S,g,e)=>{"use strict";e.d(g,{q:()=>i});var t=e(27279),l=e(61166),n=e(40464);function i({enabled:d}={enabled:!0}){const{get:s}=(0,l.useFetchClient)(),{data:u,isError:o,isLoading:a}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:m}}=await s("/admin/license-limit-information");return m},{enabled:d}),r=t.useMemo(()=>u??{},[u]),f=t.useCallback(m=>(r?.features??[]).find(E=>E.name===m)?.options??{},[r?.features]);return{license:r,getFeature:f,isError:o,isLoading:a}}},11984:(S,g,e)=>{"use strict";e.d(g,{CI:()=>i,FP:()=>s,Js:()=>o,_V:()=>n,fC:()=>l,rI:()=>u,xn:()=>d});var t=e(86978);function l({status:a,data:r}){return{type:t.qZ,payload:{status:a,workflow:r}}}function n(a){return{type:t.x4,payload:{stageId:a}}}function i(a={}){return{type:t.Ot,payload:a}}function d(a,r){return{type:t.Nj,payload:{stageId:a,...r}}}function s(a,r){return{type:t.$k,payload:{newIndex:r,oldIndex:a}}}function u(a){return{type:t.VS,payload:a}}function o(){return{type:t.gu}}},43390:(S,g,e)=>{"use strict";e.d(g,{eJ:()=>M,lx:()=>W,h4:()=>w,fC:()=>P});var t=e(27279),l=e(1296),n=e(796),i=e(49969),d=e(34041),s=e(61166),u=e(98447),o=e(26781),a=e(52713),r=e(86978),f=e(85898),m=e(35557),c=e(3494),E=e(70627),h=e.n(E),O=e(72450);const D=(0,O.default)(f.k)`
  svg path {
    fill: ${({theme:y})=>y.colors.neutral600};
  }
`;function C({name:y}){return t.createElement(f.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,s.pxToRem)(300)},t.createElement(D,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(c.Z,{width:`${8/16}rem`})),t.createElement(m.Z,{fontWeight:"bold"},y))}C.propTypes={name:h().string.isRequired};function R({type:y,item:k}){switch(y){case r.uL.STAGE:return t.createElement(C,{...k});default:return null}}function W(){return t.createElement(a.r,{renderItem:R})}function P({children:y}){return t.createElement(l.A,null,t.createElement(n.o,{tabIndex:-1},t.createElement(i.D,null,y)))}function M({href:y}){const{formatMessage:k}=(0,o.Z)();return t.createElement(s.Link,{startIcon:t.createElement(u.Z,null),to:y},k({id:"global.back",defaultMessage:"Back"}))}function w({title:y,subtitle:k,navigationAction:b,primaryAction:B}){return t.createElement(t.Fragment,null,t.createElement(s.SettingsPageTitle,{name:y}),t.createElement(d.T,{navigationAction:b,primaryAction:B,title:y,subtitle:k}))}},38705:(S,g,e)=>{"use strict";e.d(g,{uT:()=>R,fC:()=>M,Dx:()=>C});var t=e(27279),l=e(35557),n=e(85898),i=e(81565),d=e(23851),s=e(52185),u=e(2667),o=e(37370),a=e(85305),r=e(70627),f=e.n(r),m=e(26781),c=e(72450);const E=e.p+"0cd5f8915b265d5b1856.png",h="limits-title",O="https://strapi.io/pricing-cloud",D="https://strapi.io/contact-sales";function C({children:w}){return t.createElement(l.Z,{variant:"alpha",id:h},w)}C.propTypes={children:f().node.isRequired};function R({children:w}){return t.createElement(l.Z,{variant:"omega"},w)}R.propTypes={children:f().node.isRequired};function W(){const{formatMessage:w}=(0,m.Z)();return t.createElement(n.k,{gap:2,paddingTop:4},t.createElement(o.Q,{variant:"default",isExternal:!0,href:O},w({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(o.Q,{variant:"tertiary",isExternal:!0,href:D},w({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const P=c.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:w})=>`-${w.spaces[7]}`};
  margin-top: ${({theme:w})=>`-${w.spaces[7]}`};
  width: 360px;
`;function M({children:w,isOpen:y,onClose:k}){const{formatMessage:b}=(0,m.Z)();return y?t.createElement(i.P,{labelledBy:h},t.createElement(d.f,null,t.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},w,t.createElement(W,null)),t.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(P,{src:E,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(s.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(u.h,{icon:t.createElement(a.Z,null),"aria-label":b({id:"global.close",defaultMessage:"Close"}),onClick:k})))))):null}M.defaultProps={isOpen:!1},M.propTypes={children:f().node.isRequired,isOpen:f().bool,onClose:f().func.isRequired}},68997:(S,g,e)=>{"use strict";e.d(g,{U:()=>A});var t=e(27279),l=e(52185),n=e(85898),i=e(61166),d=e(70627),s=e.n(d),u=e(26781),o=e(49402),a=e(72450),r=e(11984),f=e(35557),m=e(73576);const c=(0,a.default)(m.Z)`
  > circle {
    fill: ${({theme:p})=>p.colors.neutral150};
  }
  > path {
    fill: ${({theme:p})=>p.colors.neutral600};
  }
`,E=(0,a.default)(l.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:p})=>p.spaces[6]};
    width: ${({theme:p})=>p.spaces[6]};

    > path {
      fill: ${({theme:p})=>p.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:p})=>p.colors.primary600} !important;
    ${f.Z} {
      color: ${({theme:p})=>p.colors.primary600} !important;
    }

    ${c} {
      > circle {
        fill: ${({theme:p})=>p.colors.primary600};
      }
      > path {
        fill: ${({theme:p})=>p.colors.neutral100};
      }
    }
  }

  &:active {
    ${f.Z} {
      color: ${({theme:p})=>p.colors.primary600};
    }

    ${c} {
      > circle {
        fill: ${({theme:p})=>p.colors.primary600};
      }
      > path {
        fill: ${({theme:p})=>p.colors.neutral100};
      }
    }
  }
`;function h({children:p,...I}){return t.createElement(E,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...I},t.createElement(n.k,{gap:2},t.createElement(c,{"aria-hidden":!0}),t.createElement(f.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},p)))}h.propTypes={children:s().node.isRequired};var O=e(17992),D=e(83337),C=e(3408),R=e(2667),W=e(82336),P=e(90529),M=e(49899),w=e(19098),y=e(73105),k=e(18076),b=e(67216),B=e(71563),Q=e(92241),z=e(21440),j=e(21892),J=e(86978),K=e(5318);const q=(0,K.s)();function v(){return t.createElement(l.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function $({id:p,index:I,canDelete:N,canReorder:ee,canUpdate:U,isOpen:te=!1,stagesCount:G}){const F=T=>`${T+1} of ${G}`,V=T=>{H(L({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:x.value,position:F(T)}))},ie=T=>{H(L({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:x.value,position:F(T)}))},de=()=>{H(L({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:x.value}))},ce=(T,Z)=>{H(L({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:x.value,position:F(T)})),X((0,r.FP)(Z,T))},[ae,H]=t.useState(null),{formatMessage:L}=(0,u.Z)(),{trackUsage:ue}=(0,i.useTracking)(),X=(0,o.I0)(),[oe,ge]=t.useState(te),[x,re,fe]=(0,B.U$)(`stages.${I}.name`),[Y,ne,me]=(0,B.U$)(`stages.${I}.color`),[{handlerId:pe,isDragging:Ee,handleKeyDown:ve},ye,Te,Se,se]=(0,z.Y9)(ee,{index:I,item:{name:x.value},onGrabItem:V,onDropItem:ie,onMoveItem:ce,onCancel:de,type:J.uL.STAGE}),he=(0,j.FE)(ye,Te),we=q.map(({hex:T,name:Z})=>({value:T,label:L({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:Z}),color:T}));t.useEffect(()=>{se((0,Q.rX)(),{captureDraggingState:!1})},[se,I]);const{themeColorName:Oe}=(0,K.k)(Y.value)??{};return t.createElement(l.x,{ref:he},ae&&t.createElement(O.T,{"aria-live":"assertive"},ae),Ee?t.createElement(v,null):t.createElement(D.U,{size:"S",variant:"primary",onToggle:()=>{ge(!oe),oe||ue("willEditStage")},expanded:oe,shadow:"tableShadow",error:re.error??ne?.error??!1,hasErrorMessage:!1},t.createElement(C.B,{title:x.value,togglePosition:"left",action:(N||U)&&t.createElement(n.k,null,N&&t.createElement(R.h,{background:"transparent",icon:t.createElement(k.Z,null),label:L({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>X((0,r._V)(p))}),U&&t.createElement(R.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":pe,ref:Se,label:L({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:T=>T.stopPropagation(),onKeyDown:ve},t.createElement(b.Z,null)))}),t.createElement(W.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(P.r,{gap:4},t.createElement(M.P,{col:6},t.createElement(w.o,{...x,id:x.name,disabled:!U,label:L({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:re.error??!1,onChange:T=>{fe.setValue(T.target.value),X((0,r.xn)(p,{name:T.target.value}))},required:!0})),t.createElement(M.P,{col:6},t.createElement(y.q4,{disabled:!U,error:ne?.error??!1,id:Y.name,required:!0,label:L({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:T=>{me.setValue(T),X((0,r.xn)(p,{color:T}))},value:Y.value.toUpperCase(),startIcon:t.createElement(n.k,{as:"span",height:2,background:Y.value,borderColor:Oe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},we.map(({value:T,label:Z,color:le})=>{const{themeColorName:Re}=(0,K.k)(le);return t.createElement(y.ag,{value:T,key:T,startIcon:t.createElement(n.k,{as:"span",height:2,background:le,borderColor:Re==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Z)})))))))}$.propTypes=s().shape({id:s().number.isRequired,color:s().string.isRequired,canDelete:s().bool.isRequired,canReorder:s().bool.isRequired,canUpdate:s().bool.isRequired,stagesCount:s().number.isRequired}).isRequired;const _=(0,a.default)(l.x)`
  transform: translateX(-50%);
`;function A({canDelete:p,canUpdate:I,stages:N}){const{formatMessage:ee}=(0,u.Z)(),U=(0,o.I0)(),{trackUsage:te}=(0,i.useTracking)();return t.createElement(n.k,{direction:"column",gap:6,width:"100%"},t.createElement(l.x,{position:"relative",spacing:4,width:"100%"},t.createElement(_,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(n.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},N.map((G,F)=>{const V=G?.id??G.__temp_key__;return t.createElement(l.x,{key:`stage-${V}`,as:"li"},t.createElement($,{id:V,index:F,isOpen:!G.id,canDelete:N.length>1&&p,canReorder:N.length>1,canUpdate:I,stagesCount:N.length}))}))),I&&t.createElement(h,{type:"button",onClick:()=>{U((0,r.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}A.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},A.propTypes={canDelete:s().bool,canUpdate:s().bool,stages:s().arrayOf(s().shape({id:s().number,__temp_key__:s().number,name:s().string.isRequired}))}},85230:(S,g,e)=>{"use strict";e.d(g,{Y:()=>D});var t=e(27279),l=e(35632),n=e(35557),i=e(90529),d=e(49899),s=e(19098),u=e(61166),o=e(71563),a=e(70627),r=e.n(a),f=e(26781),m=e(49402),c=e(72450),E=e(11984);const h=(0,c.default)(l.ML)`
  padding-left: ${({theme:R})=>R.spaces[7]};
`,O=(0,c.default)(n.Z)`
  font-style: italic;
`;function D({canUpdate:R,contentTypes:{collectionTypes:W,singleTypes:P},currentWorkflow:M,workflows:w}){const{formatMessage:y,locale:k}=(0,f.Z)(),b=(0,m.I0)(),[B,Q,z]=(0,o.U$)("name"),[j,J,K]=(0,o.U$)("contentTypes"),q=(0,u.useCollator)(k,{sensitivity:"base"});return t.createElement(i.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(d.P,{col:6},t.createElement(s.o,{...B,id:B.name,disabled:!R,label:y({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:Q.error??!1,onChange:v=>{b((0,E.rI)({name:v.target.value})),z.setValue(v.target.value)},required:!0})),t.createElement(d.P,{col:6},t.createElement(l.NU,{...j,customizeContent:v=>y({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:v.length}),disabled:!R,error:J.error??!1,id:j.name,label:y({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:v=>{b((0,E.rI)({contentTypes:v})),K.setValue(v)},placeholder:y({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...W.length>0?[{label:y({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:W.sort((v,$)=>q.compare(v.info.displayName,$.info.displayName)).map(v=>({label:v.info.displayName,value:v.uid}))}]:[],...P.length>0?[{label:y({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:P.map(v=>({label:v.info.displayName,value:v.uid}))}]:[]].map(v=>"children"in v?t.createElement(l.Ab,{key:v.label,label:v.label,values:v.children.map($=>$.value.toString())},v.children.map($=>{const{name:_}=w.find(A=>(M&&A.id!==M.id||!M)&&A.contentTypes.includes($.value))??{};return t.createElement(h,{key:$.value,value:$.value},y({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:$.label,name:_,em:(...A)=>t.createElement(n.Z,{as:"em",fontWeight:"bold"},A),i:(...A)=>t.createElement(O,null,A)}))})):t.createElement(l.ML,{key:v.value,value:v.value},v.label)))))}const C=r().shape({uid:r().string.isRequired,info:r().shape({displayName:r().string.isRequired}).isRequired});D.defaultProps={canUpdate:!0,currentWorkflow:void 0},D.propTypes={canUpdate:r().bool,contentTypes:r().shape({collectionTypes:r().arrayOf(C).isRequired,singleTypes:r().arrayOf(C).isRequired}).isRequired,currentWorkflow:r().object,workflows:r().array.isRequired}},86978:(S,g,e)=>{"use strict";e.d(g,{$k:()=>o,Ef:()=>c,FT:()=>f,Nj:()=>u,Ot:()=>s,VS:()=>a,_X:()=>E,gu:()=>n,lv:()=>r,qZ:()=>i,sN:()=>l,uL:()=>m,x4:()=>d});var t=e(20640);const l="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOW",d="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",s="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",a="Settings/Review_Workflows/WORKFLOW_UPDATE",r={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},f=t.W.colors.primary600,m={STAGE:"stage"},c="numberOfWorkflows",E="stagesPerWorkflow"},52258:(S,g,e)=>{"use strict";e.d(g,{n:()=>n});var t=e(61166),l=e(40464);function n(i={}){const{get:d}=(0,t.useFetchClient)(),{id:s="",...u}=i,o={populate:"stages"},{data:a,isLoading:r,status:f,refetch:m}=(0,l.useQuery)(["review-workflows","workflows",s],async()=>(await d(`/admin/review-workflows/workflows/${s}`,{params:{...o,...u}})).data);let c=[];return s&&a?.data?c=[a.data]:Array.isArray(a?.data)&&(c=a.data),{meta:a?.meta??{},workflows:c,isLoading:r,status:f,refetch:m}}},3848:(S,g,e)=>{"use strict";e.d(g,{E:()=>d,I:()=>s});var t=e(61815),l=e(6078),n=e.n(l),i=e(86978);const d={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function s(o=d,a){return(0,t.Uy)(o,r=>{const{payload:f}=a;switch(a.type){case i.qZ:{const{status:m,workflow:c}=f;r.status=m,c&&(r.serverState.workflow=c,r.clientState.currentWorkflow.data={...c,stages:c.stages.map(E=>({...E,color:E?.color??i.FT}))}),r.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case i.gu:{r.clientState.currentWorkflow.data=d.clientState.currentWorkflow.data,r.serverState=d.serverState;break}case i.x4:{const{stageId:m}=f,{currentWorkflow:c}=o.clientState;r.clientState.currentWorkflow.data.stages=c.data.stages.filter(E=>(E?.id??E.__temp_key__)!==m),c.hasDeletedServerStages||(r.clientState.currentWorkflow.hasDeletedServerStages=!!(o.serverState.workflow?.stages??[]).find(E=>E.id===m));break}case i.Ot:{const{currentWorkflow:m}=o.clientState;m.data||(r.clientState.currentWorkflow.data={stages:[]});const c=u(r.clientState.currentWorkflow.data.stages);r.clientState.currentWorkflow.data.stages.push({...f,color:f?.color??i.FT,__temp_key__:c});break}case i.Nj:{const{currentWorkflow:m}=o.clientState,{stageId:c,...E}=f;r.clientState.currentWorkflow.data.stages=m.data.stages.map(h=>(h.id??h.__temp_key__)===c?{...h,...E}:h);break}case i.$k:{const{currentWorkflow:{data:{stages:m}}}=o.clientState,{newIndex:c,oldIndex:E}=f;if(c>=0&&c<m.length){const h=m[E];let O=[...m];O.splice(E,1),O.splice(c,0,h),r.clientState.currentWorkflow.data.stages=O}break}case i.VS:{r.clientState.currentWorkflow.data={...r.clientState.currentWorkflow.data,...f};break}default:break}o.clientState.currentWorkflow.data&&r.serverState.workflow?r.clientState.currentWorkflow.isDirty=!n()((0,t.Vk)(r.clientState.currentWorkflow).data,r.serverState.workflow):r.clientState.currentWorkflow.isDirty=!0})}const u=(o=[])=>{const a=o.map(r=>r.id??r.__temp_key__);return Math.max(...a,-1)+1}},5318:(S,g,e)=>{"use strict";e.d(g,{k:()=>n,s:()=>i});var t=e(20640),l=e(86978);function n(d){if(!d)return null;const u=Object.entries(t.W.colors).filter(([,o])=>o.toUpperCase()===d.toUpperCase()).reduce((o,[a])=>(l.lv?.[a]&&(o=a),o),null);return u?{themeColorName:u,name:l.lv[u]}:null}function i(){return Object.entries(l.lv).map(([d,s])=>({hex:t.W.colors[d].toUpperCase(),name:s}))}},66578:(S,g,e)=>{"use strict";e.d(g,{V:()=>i});var t=e(43433),l=e.n(t),n=e(47853);async function i({values:d,formatMessage:s}){const u=n.Ry({contentTypes:n.IX().of(n.Z_()),name:n.Z_().max(255,s({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:n.IX().of(n.Ry().shape({name:n.Z_().required(s({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,s({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",s({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(o){const{options:{context:a}}=this;return a.stages.filter(r=>r.name===o).length===1}),color:n.Z_().required(s({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await u.validate(d,{abortEarly:!1,context:d}),!0}catch(o){let a={};return o instanceof n.p8&&o.inner.forEach(r=>{l()(a,r.path,r.message)}),a}}},86961:(S,g,e)=>{var t=e(13578),l=e(27138),n="[object Boolean]";function i(d){return d===!0||d===!1||l(d)&&t(d)==n}S.exports=i},92249:(S,g,e)=>{var t=e(37997);function l(n){return t(n)&&n!=+n}S.exports=l},37997:(S,g,e)=>{var t=e(13578),l=e(27138),n="[object Number]";function i(d){return typeof d=="number"||l(d)&&t(d)==n}S.exports=i},80187:(S,g,e)=>{"use strict";e.d(g,{G$:()=>l,Gt:()=>f,MG:()=>t,MR:()=>u,T:()=>s,TP:()=>n,Vb:()=>d,Vv:()=>a,ZC:()=>r,gK:()=>i,wG:()=>o});const t="success-light",l="danger-light",n="default",i="tertiary",d="secondary",s="danger",u="success",o="ghost",a=[t,l],r=[n,i,d,s,u,o,...a],f=["S","M","L"]},62629:(S,g,e)=>{"use strict";e.d(g,{PD:()=>u,sg:()=>i,tB:()=>s,yP:()=>d});var t=e(80187),l=e(32370);const n=o=>o===t.MG||o===t.G$?`${o.substring(0,o.lastIndexOf("-"))}`:o===t.gK?"neutral":o===t.TP||o===t.Vb||t.ZC.every(a=>a!==o)?"primary":`${o}`,i=({theme:o})=>`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${l.Z} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `,d=({theme:o,variant:a})=>[...t.Vv,t.Vb].includes(a)?`
      background-color: ${o.colors.neutral0};
    `:a===t.gK?`
      background-color: ${o.colors.neutral100};
    `:a===t.wG?`
      background-color: ${o.colors.neutral100};
    `:a===t.TP?`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:`
    border: 1px solid ${o.colors[`${n(a)}500`]};
    background: ${o.colors[`${n(a)}500`]};
  `,s=({theme:o,variant:a})=>[...t.Vv,t.Vb].includes(a)?`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${n(a)}600`]};
      ${l.Z} {
        color: ${o.colors[`${n(a)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${n(a)}600`]};
        }
      }
    `:a===t.gK?`
      background-color: ${o.colors.neutral150};
    `:`
    border: 1px solid ${o.colors[`${n(a)}600`]};
    background: ${o.colors[`${n(a)}600`]};
  `,u=({theme:o,variant:a})=>{switch(a){case t.G$:case t.MG:case t.Vb:return`
          border: 1px solid ${o.colors[`${n(a)}200`]};
          background: ${o.colors[`${n(a)}100`]};
          ${l.Z} {
            color: ${o.colors[`${n(a)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${n(a)}700`]};
            }
          }
        `;case t.gK:return`
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${l.Z} {
            color: ${o.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${o.colors.neutral800};
            }
          }
        `;case t.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${l.Z} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;case t.MR:case t.T:return`
          border: 1px solid ${o.colors[`${n(a)}600`]};
          background: ${o.colors[`${n(a)}600`]};
          ${l.Z} {
            color: ${o.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `}}},37370:(S,g,e)=>{"use strict";e.d(g,{Q:()=>r});var t=e(74081),l=e(27279),n=e(72450),i=e(62629),d=e(8976),s=e(30413),u=e(10701),o=e(32370);const a=(0,n.default)(d.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${i.sg}
    &:active {
      ${i.sg}
    }
  }

  &:hover {
    ${i.yP}
  }

  &:active {
    ${i.tB}
  }

  ${i.PD}
`,r=l.forwardRef(({variant:f="default",startIcon:m,endIcon:c,disabled:E=!1,children:h,size:O="S",as:D=s.f,...C},R)=>{const W=O==="S"?2:"10px",P=4;return(0,t.jsxs)(a,{ref:R,"aria-disabled":E,size:O,variant:f,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:W,paddingLeft:P,paddingRight:P,paddingTop:W,pointerEvents:E?"none":void 0,...C,as:D||s.f,children:[m&&(0,t.jsx)(u.k,{"aria-hidden":!0,children:m}),(0,t.jsx)(o.Z,{variant:O==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:h}),c&&(0,t.jsx)(u.k,{"aria-hidden":!0,children:c})]})});r.displayName="LinkButton"}}]);
