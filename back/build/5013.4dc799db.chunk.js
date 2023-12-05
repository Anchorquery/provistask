"use strict";(self.webpackChunkserver_provitask=self.webpackChunkserver_provitask||[]).push([[5013],{75021:(u,o,t)=>{t.d(o,{q:()=>r});var s=t(27279),m=t(61166),i=t(40464);function r({enabled:c}={enabled:!0}){const{get:M}=(0,m.useFetchClient)(),{data:l,isError:_,isLoading:E}=(0,i.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:n}}=await M("/admin/license-limit-information");return n},{enabled:c}),e=s.useMemo(()=>l??{},[l]),a=s.useCallback(n=>(e?.features??[]).find(d=>d.name===n)?.options??{},[e?.features]);return{license:e,getFeature:a,isError:_,isLoading:E}}},65013:(u,o,t)=>{t.r(o),t.d(o,{AdminSeatInfoEE:()=>p});var s=t(27279),m=t(49899),i=t(35557),r=t(85898),c=t(62750),M=t(57074),l=t(79213),_=t(61166),E=t(23634),e=t(34120),a=t(26781),n=t(49402),O=t(36364),d=t(75021);const D="https://cloud.strapi.io/profile/billing",P="https://strapi.io/billing/request-seats",p=()=>{const{formatMessage:L}=(0,a.Z)(),R=(0,n.v9)(O._),{isLoading:C,allowedActions:{canRead:I,canCreate:B,canUpdate:T,canDelete:f}}=(0,_.useRBAC)(R.settings.users),{license:{licenseLimitStatus:U,enforcementUserCount:v,permittedSeats:g,isHostedOnStrapiCloud:A},isError:W,isLoading:K}=(0,d.q)({enabled:!C&&I&&B&&T&&f});return W||(C||K)||!g?null:s.createElement(m.P,{col:6,s:12},s.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},L({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),s.createElement(r.k,{gap:2},s.createElement(r.k,null,s.createElement(i.Z,{as:"p"},L({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:g,enforcementUserCount:v,text:y=>s.createElement(i.Z,{fontWeight:"semiBold",textColor:v>g?"danger500":null},y)}))),U==="OVER_LIMIT"&&s.createElement(c.u,{description:L({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},s.createElement(M.J,{width:`${(0,_.pxToRem)(14)}rem`,height:`${(0,_.pxToRem)(14)}rem`,color:"danger500",as:E.Z}))),s.createElement(l.r,{href:A?D:P,isExternal:!0,endIcon:s.createElement(e.Z,null)},L({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:A})))}},79213:(u,o,t)=>{t.d(o,{r:()=>E});var s=t(74081),m=t(27279),i=t(34120),r=t(72450),c=t(61657),M=t(30413),l=t(32370);const _=(0,r.default)(M.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:a})=>e?a.colors.neutral600:a.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${c.BF};
`,E=m.forwardRef(({children:e,href:a,disabled:n=!1,startIcon:O,endIcon:d,isExternal:D=!0,...P},p)=>(0,s.jsxs)(_,{ref:p,href:a,disabled:n,isExternal:D,...P,children:[O,(0,s.jsx)(l.Z,{textColor:n?"neutral600":"primary600",children:e}),d,a&&!d&&D&&(0,s.jsx)(i.Z,{})]}));E.displayName="Link"}}]);
