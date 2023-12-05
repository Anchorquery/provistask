"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[349],{52713:(L,E,t)=>{t.d(E,{r:()=>d});var e=t(27279),s=t(52185),l=t(70627),i=t.n(l),g=t(67621);function c(n,o,u){if(!n||!o)return{display:"none"};const{x:r,y:a}=u;return{transform:`translate(${r}px, ${a}px)`}}function d({renderItem:n}){const{itemType:o,isDragging:u,item:r,initialOffset:a,currentOffset:T,mouseOffset:y}=(0,g.useDragLayer)(w=>({item:w.getItem(),itemType:w.getItemType(),initialOffset:w.getInitialSourceClientOffset(),currentOffset:w.getSourceClientOffset(),isDragging:w.isDragging(),mouseOffset:w.getClientOffset()}));return u?e.createElement(s.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},e.createElement(s.x,{style:c(a,T,y)},n({type:o,item:r}))):null}d.propTypes={renderItem:i().func.isRequired}},75021:(L,E,t)=>{t.d(E,{q:()=>i});var e=t(27279),s=t(61166),l=t(40464);function i({enabled:g}={enabled:!0}){const{get:c}=(0,s.useFetchClient)(),{data:d,isError:n,isLoading:o}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await c("/admin/license-limit-information");return a},{enabled:g}),u=e.useMemo(()=>d??{},[d]),r=e.useCallback(a=>(u?.features??[]).find(y=>y.name===a)?.options??{},[u?.features]);return{license:u,getFeature:r,isError:n,isLoading:o}}},43390:(L,E,t)=>{t.d(E,{eJ:()=>A,lx:()=>R,h4:()=>v,fC:()=>$});var e=t(27279),s=t(1296),l=t(796),i=t(49969),g=t(34041),c=t(61166),d=t(98447),n=t(26781),o=t(52713),u=t(86978),r=t(85898),a=t(35557),T=t(3494),y=t(70627),w=t.n(y),C=t(72450);const M=(0,C.default)(r.k)`
  svg path {
    fill: ${({theme:p})=>p.colors.neutral600};
  }
`;function D({name:p}){return e.createElement(r.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,c.pxToRem)(300)},e.createElement(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(T.Z,{width:`${8/16}rem`})),e.createElement(a.Z,{fontWeight:"bold"},p))}D.propTypes={name:w().string.isRequired};function S({type:p,item:O}){switch(p){case u.uL.STAGE:return e.createElement(D,{...O});default:return null}}function R(){return e.createElement(o.r,{renderItem:S})}function $({children:p}){return e.createElement(s.A,null,e.createElement(l.o,{tabIndex:-1},e.createElement(i.D,null,p)))}function A({href:p}){const{formatMessage:O}=(0,n.Z)();return e.createElement(c.Link,{startIcon:e.createElement(d.Z,null),to:p},O({id:"global.back",defaultMessage:"Back"}))}function v({title:p,subtitle:O,navigationAction:P,primaryAction:h}){return e.createElement(e.Fragment,null,e.createElement(c.SettingsPageTitle,{name:p}),e.createElement(g.T,{navigationAction:P,primaryAction:h,title:p,subtitle:O}))}},38705:(L,E,t)=>{t.d(E,{uT:()=>S,fC:()=>A,Dx:()=>D});var e=t(27279),s=t(35557),l=t(85898),i=t(81565),g=t(23851),c=t(52185),d=t(2667),n=t(37370),o=t(85305),u=t(70627),r=t.n(u),a=t(26781),T=t(72450);const y=t.p+"0cd5f8915b265d5b1856.png",w="limits-title",C="https://strapi.io/pricing-cloud",M="https://strapi.io/contact-sales";function D({children:v}){return e.createElement(s.Z,{variant:"alpha",id:w},v)}D.propTypes={children:r().node.isRequired};function S({children:v}){return e.createElement(s.Z,{variant:"omega"},v)}S.propTypes={children:r().node.isRequired};function R(){const{formatMessage:v}=(0,a.Z)();return e.createElement(l.k,{gap:2,paddingTop:4},e.createElement(n.Q,{variant:"default",isExternal:!0,href:C},v({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(n.Q,{variant:"tertiary",isExternal:!0,href:M},v({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const $=T.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:v})=>`-${v.spaces[7]}`};
  margin-top: ${({theme:v})=>`-${v.spaces[7]}`};
  width: 360px;
`;function A({children:v,isOpen:p,onClose:O}){const{formatMessage:P}=(0,a.Z)();return p?e.createElement(i.P,{labelledBy:w},e.createElement(g.f,null,e.createElement(l.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(l.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},v,e.createElement(R,null)),e.createElement(l.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement($,{src:y,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(c.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(d.h,{icon:e.createElement(o.Z,null),"aria-label":P({id:"global.close",defaultMessage:"Close"}),onClick:O})))))):null}A.defaultProps={isOpen:!1},A.propTypes={children:r().node.isRequired,isOpen:r().bool,onClose:r().func.isRequired}},86978:(L,E,t)=>{t.d(E,{$k:()=>n,Ef:()=>T,FT:()=>r,Nj:()=>d,Ot:()=>c,VS:()=>o,_X:()=>y,gu:()=>l,lv:()=>u,qZ:()=>i,sN:()=>s,uL:()=>a,x4:()=>g});var e=t(20640);const s="settings_review-workflows",l="Settings/Review_Workflows/RESET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOW",g="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",c="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",n="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",u={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},r=e.W.colors.primary600,a={STAGE:"stage"},T="numberOfWorkflows",y="stagesPerWorkflow"},52258:(L,E,t)=>{t.d(E,{n:()=>l});var e=t(61166),s=t(40464);function l(i={}){const{get:g}=(0,e.useFetchClient)(),{id:c="",...d}=i,n={populate:"stages"},{data:o,isLoading:u,status:r,refetch:a}=(0,s.useQuery)(["review-workflows","workflows",c],async()=>(await g(`/admin/review-workflows/workflows/${c}`,{params:{...n,...d}})).data);let T=[];return c&&o?.data?T=[o.data]:Array.isArray(o?.data)&&(T=o.data),{meta:o?.meta??{},workflows:T,isLoading:u,status:r,refetch:a}}},26259:(L,E,t)=>{t.r(E),t.d(E,{default:()=>X});var e=t(27279),s=t(61166),l=t(49402),i=t(36364),g=t(85898),c=t(62475),d=t(92712),n=t(89630),o=t(7609),u=t(66016),r=t(9465),a=t(35557),T=t(17992),y=t(84428),w=t(2667),C=t(25659),M=t(9663),D=t(18076),S=t(26781),R=t(40464),$=t(51447),A=t(72450),v=t(92686),p=t(75021),O=t(43390),P=t(38705),h=t(86978),H=t(52258);const Q=(0,A.default)(s.Link)`
  align-items: center;
  height: ${(0,s.pxToRem)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:f})=>`${f.spaces[2]}}`};
  width: ${(0,s.pxToRem)(32)};

  svg {
    height: ${(0,s.pxToRem)(12)};
    width: ${(0,s.pxToRem)(12)};

    path {
      fill: ${({theme:f})=>f.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:f})=>f.colors.neutral800};
      }
    }
  }
`;function Y(){const{formatMessage:f}=(0,S.Z)(),{push:K}=(0,$.k6)(),{collectionTypes:z,singleTypes:J,isLoading:q}=(0,v.G)(),{meta:I,workflows:Z,isLoading:k,refetch:_}=(0,H.n)(),[F,G]=e.useState(null),[ee,x]=e.useState(!1),{del:te}=(0,s.useFetchClient)(),{formatAPIError:ne}=(0,s.useAPIErrorHandler)(),U=(0,s.useNotification)(),{getFeature:oe,isLoading:j}=(0,p.q)(),{trackUsage:V}=(0,s.useTracking)(),se=(0,l.v9)(i._),{allowedActions:{canCreate:b,canDelete:le}}=(0,s.useRBAC)(se.settings["review-workflows"]),W=oe("review-workflows"),{mutateAsync:re,isLoading:ae}=(0,R.useMutation)(async({workflowId:m,stages:B})=>{const{data:{data:N}}=await te(`/admin/review-workflows/workflows/${m}`,{data:B});return N},{onSuccess(){U({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=m=>[...z,...J].find(N=>N.uid===m).info.displayName,ce=m=>{G(m)},de=()=>{G(null)},ue=async()=>{try{const m=await re({workflowId:F});return await _(),G(null),m}catch(m){return U({type:"warning",message:ne(m)}),null}};return e.useEffect(()=>{!k&&!j&&W?.[h.Ef]&&I?.workflowCount>parseInt(W[h.Ef],10)&&x(!0)},[j,k,W,I?.workflowCount,I.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(O.h4,{primaryAction:b&&e.createElement(s.LinkButton,{startIcon:e.createElement(C.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:m=>{W?.[h.Ef]&&I?.workflowCount>=parseInt(W[h.Ef],10)?(m.preventDefault(),x(!0)):V("willCreateWorkflow")}},f({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:f({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:f({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(O.fC,null,k||q?e.createElement(g.k,{justifyContent:"center"},e.createElement(c.a,null,f({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(d.i,{colCount:3,footer:b&&e.createElement(n.c,{icon:e.createElement(C.Z,null),onClick:()=>{W?.[h.Ef]&&I?.workflowCount>=parseInt(W[h.Ef],10)?x(!0):(K("/settings/review-workflows/create"),V("willCreateWorkflow"))}},f({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(o.h,null,e.createElement(u.Tr,null,e.createElement(r.Th,null,e.createElement(a.Z,{variant:"sigma"},f({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(r.Th,null,e.createElement(a.Z,{variant:"sigma"},f({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(r.Th,null,e.createElement(a.Z,{variant:"sigma"},f({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(r.Th,null,e.createElement(T.T,null,f({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(y.p,null,Z.map(m=>e.createElement(u.Tr,{...(0,s.onRowClick)({fn(B){B.target.nodeName!=="BUTTON"&&K(`/settings/review-workflows/${m.id}`)}}),key:`workflow-${m.id}`},e.createElement(r.Td,{width:(0,s.pxToRem)(250)},e.createElement(a.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},m.name)),e.createElement(r.Td,null,e.createElement(a.Z,{textColor:"neutral800"},m.stages.length)),e.createElement(r.Td,null,e.createElement(a.Z,{textColor:"neutral800"},(m?.contentTypes??[]).map(ie).join(", "))),e.createElement(r.Td,null,e.createElement(g.k,{alignItems:"center",justifyContent:"end"},e.createElement(Q,{to:`/settings/review-workflows/${m.id}`,"aria-label":f({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:m.name})},e.createElement(M.Z,null)),Z.length>1&&le&&e.createElement(w.h,{"aria-label":f({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(D.Z,null),noBorder:!0,onClick:()=>{ce(m.id)}}))))))),e.createElement(s.ConfirmDialog,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ae,isOpen:!!F,onToggleDialog:de,onConfirm:ue}),e.createElement(P.fC,{isOpen:ee,onClose:()=>x(!1)},e.createElement(P.Dx,null,f({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(P.uT,null,f({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function X(){const f=(0,l.v9)(i._);return e.createElement(s.CheckPagePermissions,{permissions:f.settings["review-workflows"].main},e.createElement(Y,null))}},80187:(L,E,t)=>{t.d(E,{G$:()=>s,Gt:()=>r,MG:()=>e,MR:()=>d,T:()=>c,TP:()=>l,Vb:()=>g,Vv:()=>o,ZC:()=>u,gK:()=>i,wG:()=>n});const e="success-light",s="danger-light",l="default",i="tertiary",g="secondary",c="danger",d="success",n="ghost",o=[e,s],u=[l,i,g,c,d,n,...o],r=["S","M","L"]},62629:(L,E,t)=>{t.d(E,{PD:()=>d,sg:()=>i,tB:()=>c,yP:()=>g});var e=t(80187),s=t(32370);const l=n=>n===e.MG||n===e.G$?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.gK?"neutral":n===e.TP||n===e.Vb||e.ZC.every(o=>o!==n)?"primary":`${n}`,i=({theme:n})=>`
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
  `,g=({theme:n,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${n.colors.neutral0};
    `:o===e.gK?`
      background-color: ${n.colors.neutral100};
    `:o===e.wG?`
      background-color: ${n.colors.neutral100};
    `:o===e.TP?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${l(o)}500`]};
    background: ${n.colors[`${l(o)}500`]};
  `,c=({theme:n,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${l(o)}600`]};
      ${s.Z} {
        color: ${n.colors[`${l(o)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${l(o)}600`]};
        }
      }
    `:o===e.gK?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${l(o)}600`]};
    background: ${n.colors[`${l(o)}600`]};
  `,d=({theme:n,variant:o})=>{switch(o){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${n.colors[`${l(o)}200`]};
          background: ${n.colors[`${l(o)}100`]};
          ${s.Z} {
            color: ${n.colors[`${l(o)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${l(o)}700`]};
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
          border: 1px solid ${n.colors[`${l(o)}600`]};
          background: ${n.colors[`${l(o)}600`]};
          ${s.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}}},37370:(L,E,t)=>{t.d(E,{Q:()=>u});var e=t(74081),s=t(27279),l=t(72450),i=t(62629),g=t(8976),c=t(30413),d=t(10701),n=t(32370);const o=(0,l.default)(g.G)`
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
`,u=s.forwardRef(({variant:r="default",startIcon:a,endIcon:T,disabled:y=!1,children:w,size:C="S",as:M=c.f,...D},S)=>{const R=C==="S"?2:"10px",$=4;return(0,e.jsxs)(o,{ref:S,"aria-disabled":y,size:C,variant:r,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:R,paddingLeft:$,paddingRight:$,paddingTop:R,pointerEvents:y?"none":void 0,...D,as:M||c.f,children:[a&&(0,e.jsx)(d.k,{"aria-hidden":!0,children:a}),(0,e.jsx)(n.Z,{variant:C==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:w}),T&&(0,e.jsx)(d.k,{"aria-hidden":!0,children:T})]})});u.displayName="LinkButton"}}]);
