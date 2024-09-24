"use strict";(self.webpackChunkmy_react_appo=self.webpackChunkmy_react_appo||[]).push([[48],{4048:(e,a,o)=>{o.r(a),o.d(a,{default:()=>$});var t=o(9950),r=o(6491),i=o(8168),n=o(8587),s=(o(6429),o(2004)),l=o(4061),c=o(9254),d=o(8283),p=o(863),u=o(8483);function v(e){return(0,u.Ay)("MuiBottomNavigation",e)}(0,p.A)("MuiBottomNavigation",["root"]);var h=o(4414);const m=["children","className","component","onChange","showLabels","value"],A=(0,c.Ay)("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,a)=>a.root})((e=>{let{theme:a}=e;return{display:"flex",justifyContent:"center",height:56,backgroundColor:(a.vars||a).palette.background.paper}})),b=t.forwardRef((function(e,a){const o=(0,d.A)({props:e,name:"MuiBottomNavigation"}),{children:r,className:c,component:p="div",onChange:u,showLabels:b=!1,value:x}=o,g=(0,n.A)(o,m),f=(0,i.A)({},o,{component:p,showLabels:b}),y=(e=>{const{classes:a}=e;return(0,l.A)({root:["root"]},v,a)})(f);return(0,h.jsx)(A,(0,i.A)({as:p,className:(0,s.A)(y.root,c),ref:a,ownerState:f},g,{children:t.Children.map(r,((e,a)=>{if(!t.isValidElement(e))return null;const o=void 0===e.props.value?a:e.props.value;return t.cloneElement(e,{selected:o===x,showLabel:void 0!==e.props.showLabel?e.props.showLabel:b,value:o,onChange:u})}))}))}));var x=o(9271);function g(e){return(0,u.Ay)("MuiBottomNavigationAction",e)}const f=(0,p.A)("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),y=["className","icon","label","onChange","onClick","selected","showLabel","value"],S=(0,c.Ay)(x.A,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,!o.showLabel&&!o.selected&&a.iconOnly]}})((e=>{let{theme:a,ownerState:o}=e;return(0,i.A)({transition:a.transitions.create(["color","padding-top"],{duration:a.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(a.vars||a).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},{["&.".concat(f.selected)]:{color:(a.vars||a).palette.primary.main}})})),j=(0,c.Ay)("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,a)=>a.label})((e=>{let{theme:a,ownerState:o}=e;return(0,i.A)({fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},{["&.".concat(f.selected)]:{fontSize:a.typography.pxToRem(14)}})})),C=t.forwardRef((function(e,a){const o=(0,d.A)({props:e,name:"MuiBottomNavigationAction"}),{className:t,icon:r,label:c,onChange:p,onClick:u,value:v}=o,m=(0,n.A)(o,y),A=o,b=(e=>{const{classes:a,showLabel:o,selected:t}=e,r={root:["root",!o&&!t&&"iconOnly",t&&"selected"],label:["label",!o&&!t&&"iconOnly",t&&"selected"]};return(0,l.A)(r,g,a)})(A);return(0,h.jsxs)(S,(0,i.A)({ref:a,className:(0,s.A)(b.root,t),focusRipple:!0,onClick:e=>{p&&p(e,v),u&&u(e)},ownerState:A},m,{children:[r,(0,h.jsx)(j,{className:b.label,ownerState:A,children:c})]}))}));var w=o(5433),D=o(2299),N=o(20),R=o(975),M=o(7873),k=o(2053),z=o(5277),L=o(226);const I=function(){const[e,a]=(0,t.useState)({name:"",departure:"",destination:"",departureDate:"",arrivalDate:"",availableSpace:"",acceptsSmallDevices:!1,price:"",phoneNumber:""}),[o,i]=(0,t.useState)(null),n=o=>{const{name:t,value:r,type:i,checked:n}=o.target;a({...e,[t]:"checkbox"===i?n:r})};return(0,h.jsxs)(r.A,{component:"form",onSubmit:a=>{a.preventDefault(),console.log("Informaci\xf3n del viajero enviada:",e,"Precio seleccionado:",o)},sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,h.jsx)(N.A,{label:"Salida",variant:"outlined",name:"departure",value:e.departure,onChange:n,required:!0}),(0,h.jsx)(N.A,{label:"Destino",variant:"outlined",name:"destination",value:e.destination,onChange:n,required:!0}),(0,h.jsx)(N.A,{label:"Fecha de salida",type:"date",variant:"outlined",name:"departureDate",value:e.departureDate,onChange:n,InputLabelProps:{shrink:!0},required:!0}),(0,h.jsx)(N.A,{label:"Fecha de llegada",type:"date",variant:"outlined",name:"arrivalDate",value:e.arrivalDate,onChange:n,InputLabelProps:{shrink:!0},required:!0}),(0,h.jsx)(N.A,{label:"N\xfamero de tel\xe9fono",variant:"outlined",name:"phoneNumber",value:e.phoneNumber,onChange:n,helperText:"El contacto es imprescindible para notificarle sobre posibles clientes y este debe estar activo en WhatsApp",required:!0}),(0,h.jsx)(R.A,{control:(0,h.jsx)(M.A,{checked:e.acceptsSmallDevices,onChange:n,name:"acceptsSmallDevices"}),label:"Acepta solo dispositivos peque\xf1os (por ejemplo, tel\xe9fonos m\xf3viles, AirPods)"}),!e.acceptsSmallDevices&&(0,h.jsx)(N.A,{label:"Espacio disponible",variant:"outlined",name:"availableSpace",value:e.availableSpace,onChange:n,required:!0}),(0,h.jsx)(k.A,{variant:"body1",component:"div",children:e.acceptsSmallDevices?"Elija su precio por dispositivo":"Elija su precio por kg"}),(0,h.jsx)(r.A,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[1e4,15e3,2e4].map((e=>(0,h.jsx)(z.A,{label:"".concat(e," XFAS"),onClick:()=>(e=>{i(e)})(e),color:o===e?"primary":"default",variant:o===e?"filled":"outlined"},e)))}),(0,h.jsx)(L.A,{variant:"contained",type:"submit",children:"Publicar"})]})};var B=o(8089),F=o(704);function W(e){return(0,u.Ay)("MuiCardActions",e)}(0,p.A)("MuiCardActions",["root","spacing"]);const V=["disableSpacing","className"],H=(0,c.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,!o.disableSpacing&&a.spacing]}})((e=>{let{ownerState:a}=e;return(0,i.A)({display:"flex",alignItems:"center",padding:8},!a.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),E=t.forwardRef((function(e,a){const o=(0,d.A)({props:e,name:"MuiCardActions"}),{disableSpacing:t=!1,className:r}=o,c=(0,n.A)(o,V),p=(0,i.A)({},o,{disableSpacing:t}),u=(e=>{const{classes:a,disableSpacing:o}=e,t={root:["root",!o&&"spacing"]};return(0,l.A)(t,W,a)})(p);return(0,h.jsx)(H,(0,i.A)({className:(0,s.A)(u.root,r),ownerState:p,ref:a},c))}));var q=o(1676);function P(e){return(0,u.Ay)("MuiFab",e)}const T=(0,p.A)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var O=o(9608);const U=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],_=(0,c.Ay)(x.A,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,O.A)(e)||"classes"===e,overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],a["size".concat((0,q.A)(o.size))],"inherit"===o.color&&a.colorInherit,a[(0,q.A)(o.size)],a[o.color]]}})((e=>{let{theme:a,ownerState:o}=e;var t,r;return(0,i.A)({},a.typography.button,{minHeight:36,transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(a.vars||a).zIndex.fab,boxShadow:(a.vars||a).shadows[6],"&:active":{boxShadow:(a.vars||a).shadows[12]},color:a.vars?a.vars.palette.text.primary:null==(t=(r=a.palette).getContrastText)?void 0:t.call(r,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],"&:hover":{backgroundColor:(a.vars||a).palette.grey.A100,"@media (hover: none)":{backgroundColor:(a.vars||a).palette.grey[300]},textDecoration:"none"},["&.".concat(T.focusVisible)]:{boxShadow:(a.vars||a).shadows[6]}},"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(e=>{let{theme:a,ownerState:o}=e;return(0,i.A)({},"inherit"!==o.color&&"default"!==o.color&&null!=(a.vars||a).palette[o.color]&&{color:(a.vars||a).palette[o.color].contrastText,backgroundColor:(a.vars||a).palette[o.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[o.color].main}}})}),(e=>{let{theme:a}=e;return{["&.".concat(T.disabled)]:{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}}})),X=t.forwardRef((function(e,a){const o=(0,d.A)({props:e,name:"MuiFab"}),{children:t,className:r,color:c="default",component:p="button",disabled:u=!1,disableFocusRipple:v=!1,focusVisibleClassName:m,size:A="large",variant:b="circular"}=o,x=(0,n.A)(o,U),g=(0,i.A)({},o,{color:c,component:p,disabled:u,disableFocusRipple:v,size:A,variant:b}),f=(e=>{const{color:a,variant:o,classes:t,size:r}=e,n={root:["root",o,"size".concat((0,q.A)(r)),"inherit"===a?"colorInherit":a]},s=(0,l.A)(n,P,t);return(0,i.A)({},t,s)})(g);return(0,h.jsx)(_,(0,i.A)({className:(0,s.A)(f.root,r),component:p,disabled:u,focusRipple:!v,focusVisibleClassName:(0,s.A)(f.focusVisible,m),ownerState:g,ref:a},x,{classes:f,children:t}))}));var G=o(3464),J=o(33),K=o(8170),Q=o(9739),Y=o(9532);const Z=function(e){let{travelers:a}=e;const[o,i]=(0,t.useState)(!1),[n,s]=(0,t.useState)({itemName:"",itemWeight:""}),l=()=>{i(!0)},c=()=>{i(!1)},d=e=>{const{name:a,value:o}=e.target;s((e=>({...e,[a]:o})))};return(0,h.jsxs)(r.A,{children:[(0,h.jsx)(k.A,{variant:"h4",gutterBottom:!0,children:"Viajeros Disponibles"}),(0,h.jsx)(r.A,{display:"flex",flexDirection:"column",gap:2,children:a.map(((e,a)=>(0,h.jsxs)(B.A,{variant:"outlined",children:[(0,h.jsxs)(F.A,{children:[(0,h.jsx)(k.A,{variant:"h6",component:"div",children:e.name}),(0,h.jsxs)(k.A,{variant:"body2",color:"text.secondary",children:["Salida: ",e.departure]}),(0,h.jsxs)(k.A,{variant:"body2",color:"text.secondary",children:["Destino: ",e.destination]}),(0,h.jsxs)(k.A,{variant:"body2",color:"text.secondary",children:["Fecha: ",e.date]}),e.acceptsSmallDevices?(0,h.jsx)(k.A,{variant:"body2",color:"text.secondary",children:"Acepta solo dispositivos peque\xf1os"}):(0,h.jsxs)(k.A,{variant:"body2",color:"text.secondary",children:["Espacio Disponible: ",e.availableSpace," kg"]}),(0,h.jsxs)(k.A,{variant:"body2",color:"text.secondary",children:["Precio: ",e.price," XFAS"," ",e.acceptsSmallDevices?"por dispositivo":"por kg"]})]}),(0,h.jsx)(E,{children:(0,h.jsx)(L.A,{size:"small",variant:"contained",color:"primary",onClick:l,children:"Aplicar"})})]},a)))}),(0,h.jsx)(X,{color:"primary","aria-label":"add",style:{position:"fixed",bottom:16,right:16},onClick:l,children:(0,h.jsx)(Y.A,{})}),(0,h.jsxs)(G.A,{open:o,onClose:c,children:[(0,h.jsx)(J.A,{children:"Detalles del Art\xedculo"}),(0,h.jsxs)(K.A,{children:[(0,h.jsx)(N.A,{autoFocus:!0,margin:"dense",label:"Nombre del Art\xedculo",name:"itemName",fullWidth:!0,value:n.itemName,onChange:d}),(0,h.jsx)(N.A,{margin:"dense",label:"Peso del Art\xedculo (kg)",name:"itemWeight",type:"number",fullWidth:!0,value:n.itemWeight,onChange:d})]}),(0,h.jsxs)(Q.A,{children:[(0,h.jsx)(L.A,{onClick:c,color:"primary",children:"Cancelar"}),(0,h.jsx)(L.A,{onClick:()=>{console.log("Item Details:",n),c()},color:"primary",children:"Enviar"})]})]})]})};const $=function(){const[e,a]=(0,t.useState)(0),[o,i]=(0,t.useState)([{departure:"bielo",destination:"",date:"",availableSpace:"4",acceptsSmallDevices:!1,price:1e4},{departure:"MADRID",destination:"DUBAI",date:"",availableSpace:"",acceptsSmallDevices:!0,price:1500},{departure:"bielo",destination:"",date:"",availableSpace:"4",acceptsSmallDevices:!1,price:1e4},{departure:"MADRID",destination:"DUBAI",date:"",availableSpace:"",acceptsSmallDevices:!0,price:1500},{departure:"bielo",destination:"",date:"",availableSpace:"4",acceptsSmallDevices:!1,price:1e4},{departure:"MADRID",destination:"DUBAI",date:"",availableSpace:"",acceptsSmallDevices:!0,price:1500},{departure:"bielo",destination:"",date:"",availableSpace:"4",acceptsSmallDevices:!1,price:1e4},{departure:"MADRID",destination:"DUBAI",date:"",availableSpace:"",acceptsSmallDevices:!0,price:1500}]);return(0,h.jsxs)(r.A,{sx:{width:"100%",minHeight:"100vh",paddingBottom:"56px"},children:[0===e&&(0,h.jsx)(r.A,{sx:{padding:"10px"},children:(0,h.jsx)(Z,{travelers:o})}),1===e&&(0,h.jsx)(r.A,{sx:{padding:"10px"},children:(0,h.jsx)(I,{onAddTraveler:e=>{i([...o,e])}})}),(0,h.jsxs)(b,{value:e,onChange:(e,o)=>{a(o)},showLabels:!0,sx:{position:"fixed",bottom:0,left:0,right:0,width:"100%",zIndex:1e3},children:[(0,h.jsx)(C,{label:"Lista",icon:(0,h.jsx)(D.A,{})}),(0,h.jsx)(C,{label:"Entrada",icon:(0,h.jsx)(w.A,{})})]})]})}},9532:(e,a,o)=>{var t=o(4994);a.A=void 0;var r=t(o(9526)),i=o(4414);a.A=(0,r.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},2299:(e,a,o)=>{var t=o(4994);a.A=void 0;var r=t(o(9526)),i=o(4414);a.A=(0,r.default)((0,i.jsx)("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"List")},5433:(e,a,o)=>{var t=o(4994);a.A=void 0;var r=t(o(9526)),i=o(4414);a.A=(0,r.default)((0,i.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"Restore")},8089:(e,a,o)=>{o.d(a,{A:()=>b});var t=o(8168),r=o(8587),i=o(9950),n=o(2004),s=o(4061),l=o(9254),c=o(8283),d=o(2235),p=o(863),u=o(8483);function v(e){return(0,u.Ay)("MuiCard",e)}(0,p.A)("MuiCard",["root"]);var h=o(4414);const m=["className","raised"],A=(0,l.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})((()=>({overflow:"hidden"}))),b=i.forwardRef((function(e,a){const o=(0,c.A)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=o,d=(0,r.A)(o,m),p=(0,t.A)({},o,{raised:l}),u=(e=>{const{classes:a}=e;return(0,s.A)({root:["root"]},v,a)})(p);return(0,h.jsx)(A,(0,t.A)({className:(0,n.A)(u.root,i),elevation:l?8:void 0,ref:a,ownerState:p},d))}))},704:(e,a,o)=>{o.d(a,{A:()=>A});var t=o(8168),r=o(8587),i=o(9950),n=o(2004),s=o(4061),l=o(9254),c=o(8283),d=o(863),p=o(8483);function u(e){return(0,p.Ay)("MuiCardContent",e)}(0,d.A)("MuiCardContent",["root"]);var v=o(4414);const h=["className","component"],m=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),A=i.forwardRef((function(e,a){const o=(0,c.A)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=o,d=(0,r.A)(o,h),p=(0,t.A)({},o,{component:l}),A=(e=>{const{classes:a}=e;return(0,s.A)({root:["root"]},u,a)})(p);return(0,v.jsx)(m,(0,t.A)({as:l,className:(0,n.A)(A.root,i),ownerState:p,ref:a},d))}))}}]);