(self.webpackChunkmy_react_appo=self.webpackChunkmy_react_appo||[]).push([[499],{9499:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>b});var r=t(9950),n=t(4857),a=t(6589),i=t(899),c=t(6491),s=t(2053),d=t(226),l=t(7938),p=t(8429),u=t(2578),y=t(6639),m=t(294),x=t(2675),f=t(6641),h=t(1975),g=t(5189),C=t(2845),v=t(4414);const b=()=>{const[e,o]=(0,r.useState)(!0),[t,b]=(0,r.useState)(""),[j,E]=(0,r.useState)("Seguro que ya se envio ese producto?"),[A,R]=(0,r.useState)(!0),[S,w]=(0,r.useState)([]),[O,k]=(0,r.useState)(null),[I,P]=(0,r.useState)([]),[T,D]=(0,r.useState)(null),G=(0,n.A)(),M=(0,u.C3)(m.A),N=(0,a.A)(G.breakpoints.down("sm")),{codigo:B,contexto:F}=(0,p.g)(),[V,_]=(0,r.useState)(!1),U=()=>{const e="Buenas, se necesita verificacion para que Chekea envie su compra ".concat(A.CompraId," , basta con responder con un OK"),o="whatsapp://send?phone=".concat("+8613212074721","&text=").concat(encodeURIComponent(e));if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){const e=document.createElement("a");e.href=o,e.style.display="none",document.body.appendChild(e),e.click(),setTimeout((()=>{document.body.removeChild(e)}),500)}else alert("Please use a mobile device to send the WhatsApp message.")},L=(e,o)=>{_(!0),b(o),"Enviado"===o?k({...e,Estado:"Enviado",Envio:(new Date).getTime()}):(E("Seguro que el producto de codigo ".concat((0,h.o6)(String(A.CompraId))," ya fue retirado?\n\n PORFAVOR ASEGURESE!!!")),k({...e,Estado:"Retirado",Retiro:(new Date).getTime()}))},q=()=>{_(!1)},z=e=>{_(!0),I.forEach((o=>{((e,o)=>{switch(b(o),o){case"Comprado":E("Seguro que el producto de codigo ".concat((0,h.o6)(String(A.CompraId))," ya fue verificado?\n\n PORFAVOR ASEGURESE!!!")),k({...e,Estado:"Comprado"});break;case"Error":E("Seguro que el producto de codigo ".concat((0,h.o6)(String(A.CompraId))," tiene un error?\n\n PORFAVOR ASEGURESE!!!")),k({...O,Estado:"Error"});break;case"Enviado":E("Seguro que el producto de codigo ".concat((0,h.o6)(String(A.CompraId))," ya fue enviado?\n\n PORFAVOR ASEGURESE!!!")),k({...e,Estado:"Enviado",Envio:(new Date).getTime()});break;default:E("Seguro que el producto de codigo ".concat((0,h.o6)(String(A.CompraId))," ya fue retirado?\n\n PORFAVOR ASEGURESE!!!")),k({...e,Coment:!1,Estado:"Retirado",Retiro:(new Date).getTime()})}console.log("otro mas",O)})(o,e)}))};(0,r.useEffect)((()=>((()=>{o(!0);const e=(0,u.KR)(M,"GE/Compras/".concat(F,"/").concat(B));(0,u.Zy)(e,(e=>{R(e.val());const t=Object.values(e.val().Productos);w(t),o(!1)}))})(),()=>{})),[]);const[H,W]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!H&&0!==S.length){const e=(e,o)=>{console.log(A.Estado,"entar");let t="Comprado"===A.Estado||"Verificando..."===A.Estado?"Verificando":A.Estado;const r=(0,u.KR)(M,"GE/Comprador/".concat(e,"/MisCompras/").concat(t,"/").concat(o));(0,u.Jt)(r).then((e=>{e.exists()?(console.log(e.val(),"hold man"),P((o=>[...o,e.val()])),console.log(e.val()),W(!0)):console.log("No data available")})).catch((e=>{console.error("Error fetching data:",e)}))};S.forEach((o=>{const t=o.id,r=A.Comprador;e(r,t)}))}return()=>{}}),[S,H]);const[Z,K]=(0,r.useState)(""),[J,X]=(0,r.useState)(!1);(0,p.Zp)();return(0,v.jsxs)("div",{children:[e?(0,v.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,v.jsx)(y.A,{})}):(0,v.jsxs)("div",{style:{paddingTop:"10px"},children:[(0,v.jsx)(x.A,{open:V,message:j,onClose:q,onConfirm:async()=>{switch(t){case"Enviado":(0,f.Cy)("GE/Comprador/".concat(A.Comprador,"/MisCompras/Verificando/").concat(O.Codigo)).then((()=>{(0,f.C1)(O,"GE/Comprador/".concat(A.Comprador,"/MisCompras/Enviado/").concat(O.Codigo)).then((()=>{(0,f.A0)({Estado:"Enviado"},"GE/Compras/".concat(O.contexto,"/").concat(B)),(0,f.GR)({Id:A.Comprador,Mensaje:"Su producto ha sido enviado satisfactoriamente",Titulo:"Producto Enviado"},"GE/Notificaciones")}))})).catch((e=>{console.error("Error deleting node:",e)}));break;case"Comprado":(0,f.A0)({Estado:"Comprado"},"GE/Comprador/".concat(A.Comprador,"/MisCompras/Verificando/").concat(O.Codigo)).then((()=>{(0,f.A0)({Estado:"Comprado"},"GE/Compras/Exterior/".concat(B)),(0,f.GR)({Id:A.Comprador,Mensaje:"Su compra ha sido verificada y a esperas de ser enviado el producto",Titulo:"Compra Verificad"},"GE/Notificaciones")}));break;case"Error":(0,f.Cy)("GE/Comprador/".concat(A.Comprador,"/MisCompras/Verificando/").concat(O.Codigo)).then((()=>{(0,f.C1)(O,"GE/Comprador/".concat(A.Comprador,"/MisCompras/Error/").concat(O.Codigo)).then((()=>{(0,f.A0)({Estado:"Error"},"GE/Compras/Exterior/".concat(B)),(0,f.GR)({Id:A.Comprador,Mensaje:"Ha surgido un error en su compra,porfavor contacte a atencion al cliente",Titulo:"Error de Compra"},"GE/Notificaciones")}))})).catch((e=>{console.error("Error deleting node:",e)}));break;case"Retirado":(0,f.Cy)("GE/Comprador/".concat(A.Comprador,"/MisCompras/Enviado/").concat(O.Codigo)).then((()=>{(0,f.C1)(O,"GE/Comprador/".concat(A.Comprador,"/MisCompras/Retirado/").concat(O.Codigo)),(0,f.A0)({Estado:"Retirado"},"GE/Compras/".concat(O.contexto,"/").concat(B)),(0,f.A0)({Codigo:O.Producto,Vendedor:O.Vendedor,contexto:O.contexto,Cantidad:O.Cantidad,Id:O.Fecha,isTrue:!1,Comprador:A.Comprador,Fecha:O.Retiro},"GE/NotificacionReb/".concat(O.Fecha)),(0,f.GR)({Id:A.Comprador,Mensaje:"Su producto ha sido retirado satisfactoriamente",Titulo:"Producto Retirado"},"GE/Notificaciones")})).catch((e=>{console.error("Error deleting node:",e)}));break;default:console.log("ninguno")}q()}}),(0,v.jsx)(i.Ay,{container:!0,children:N?(0,v.jsxs)("div",{children:[(0,v.jsx)(C.A,{texto:"Detalles"}),(0,v.jsx)(c.A,{sx:{display:"flex",paddingTop:5,justifyContent:"center"},children:(0,v.jsxs)(i.Ay,{item:!0,xs:10,children:[(0,v.jsx)("h2",{children:"INFORMACION COMPRA \n\nCodigo:".concat(A.CompraId," ")}),(0,v.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,v.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Nombre"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Barrio"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Contacto"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Lugar de Retiro"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Intervalo"})]}),(0,v.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,v.jsx)(s.A,{variant:"body1",children:A.Nombre}),(0,v.jsx)(s.A,{variant:"body1",children:void 0===A.Barrio?"Sin Especificar":A.Barrio}),(0,v.jsx)(s.A,{variant:"body1",children:A.Contacto}),(0,v.jsx)(s.A,{variant:"body1",children:void 0===A.RetiroLugar?"Sin Especificar":A.RetiroLugar}),(0,v.jsx)(s.A,{variant:"body1",children:void 0===A.Intervalo?"Sin Especificar":A.Intervalo})]})]}),(0,v.jsx)(l.A,{data:I,enviado:L})]})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,v.jsx)("h2",{children:"INFORMACION COMPRA\n\nCodigo:".concat(A.CompraId," ")}),(0,v.jsx)(c.A,{sx:{p:1,display:"flex",justifyContent:"center"},children:(0,v.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,v.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Nombre"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Barrio"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Contacto"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Lugar de Retiro"}),(0,v.jsx)(s.A,{variant:"body1",sx:{color:"gray"},children:"Intervalo"})]}),(0,v.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,v.jsx)(s.A,{variant:"body1",children:A.Nombre}),(0,v.jsx)(s.A,{variant:"body1",children:void 0===A.Barrio?"Sin Especificar":A.Barrio}),(0,v.jsxs)("div",{style:{display:"flex"},children:[(0,v.jsx)(s.A,{variant:"body1",marginRight:3,children:A.Contacto}),(0,v.jsx)(g.CopyToClipboard,{text:A.Contacto,onCopy:()=>{X(!0),setTimeout((()=>X(!1)),2e3)},children:(0,v.jsx)("button",{children:"Copiar "})})]}),(0,v.jsx)(s.A,{variant:"body1",children:void 0===A.RetiroLugar?"Sin Especificar":A.RetiroLugar}),(0,v.jsx)(s.A,{variant:"body1",children:void 0===A.Intervalo?"Sin Especificar":A.Intervalo})]})]})}),null!==A.Imagen?(0,v.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"center",alignItems:"center"},children:(0,v.jsx)("div",{style:{width:"50%",height:"50%"},children:(0,v.jsx)("img",{src:null===A||void 0===A?void 0:A.Imagen,alt:"Image",style:{width:"100%",height:"50%",objectFit:"contain"}})})}):null,"Exterior"===A.Contexto?"Verificando..."===A.Estado?(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},children:[(0,v.jsx)(d.A,{onClick:()=>z("Comprado"),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Comprado"}),(0,v.jsx)(d.A,{onClick:()=>z("Error"),variant:"contained",color:"error",style:{borderRadius:"10px",marginRight:"14px"},children:"Error"})]}):"Comprado"===A.Estado?(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},children:(0,v.jsx)(d.A,{onClick:()=>z("Enviado"),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Enviado"})}):"Enviado"===A.Estado?(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},children:(0,v.jsx)(d.A,{onClick:()=>z("Retirado"),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Retirado"})}):null:null]}),""===t?(0,v.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,v.jsx)("h2",{children:"".concat(I.length," PRODUCTOS COMPRADOS ")}),(0,v.jsx)(c.A,{sx:{p:2,flexDirection:"row"},children:(0,v.jsx)(l.A,{data:I,enviado:L})})]}):null]})}),N?(0,v.jsxs)("div",{children:[null!==A.Imagen?(0,v.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"center",alignItems:"center"},children:(0,v.jsx)("div",{style:{width:"50%",height:"50%"},children:(0,v.jsx)("img",{src:A.Imagen,alt:"Image",style:{width:"100%",height:"50%",objectFit:"contain"}})})}):null,"Exterior"===A.Contexto?"Verificando..."===A.Estado?(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},children:[(0,v.jsx)(d.A,{onClick:()=>z("Comprado"),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Comprado"}),(0,v.jsx)(d.A,{onClick:()=>z("Error"),variant:"contained",color:"error",style:{borderRadius:"10px",marginRight:"14px"},children:"Error"})]}):"Comprado"===A.Estado?(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},children:(0,v.jsx)(d.A,{onClick:()=>z("Enviado"),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Enviado"})}):"Enviado"===A.Estado?(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",marginTop:"10px"},children:(0,v.jsx)(d.A,{onClick:()=>z("Retirado"),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Retirado"})}):null:null]}):null]}),"Nacional"===A.Contexto&&(0,v.jsx)("button",{onClick:U,children:"CONFIRMAR COMPRA "}),(0,v.jsxs)("button",{onClick:U,children:["PRE-DELIVERY NOTIFICATION // MENSAJE DIRECTO"," "]})]})}},2845:(e,o,t)=>{"use strict";t.d(o,{A:()=>p});var r=t(9950),n=t(8429),a=t(4857),i=t(6589),c=t(5333),s=t(3189),d=t(4414);const l=e=>{let{texto:o}=e;const t=(0,a.A)(),r=(0,i.A)(t.breakpoints.down("sm")),l=(0,n.Zp)();return(0,d.jsx)(d.Fragment,{children:r&&(0,d.jsxs)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:60,padding:t.spacing(1),backgroundColor:t.palette.background.paper,boxShadow:t.shadows[2],display:"flex",alignItems:"center",zIndex:1e3,boxSizing:"border-box"},children:[(0,d.jsx)(c.A,{onClick:()=>l(-1),"aria-label":"back",children:(0,d.jsx)(s.A,{})}),(0,d.jsx)("h2",{style:{marginLeft:t.spacing(2)},children:o})]})})},p=r.memo(l)},7938:(e,o,t)=>{"use strict";t.d(o,{A:()=>l});var r=t(899),n=t(6491),a=t(226),i=t(3464),c=t(9950),s=t(8429),d=t(4414);const l=function(e){let{data:o,enviado:t,isBuscar:l}=e;const[p,u]=(0,c.useState)(!1),[y,m]=(0,c.useState)(null),x=(0,s.Zp)(),f=e=>{m(e),u(!0)};return(0,d.jsxs)(d.Fragment,{children:[o.map(((e,o)=>(0,d.jsx)(r.Ay,{container:!0,justifyContent:"center",children:(0,d.jsx)(r.Ay,{item:!0,xs:12,sm:10,children:"Exterior"===e.contexto?(0,d.jsxs)(n.A,{display:"flex",alignItems:"center",p:1,borderRadius:8,boxShadow:3,width:"100%",children:[(0,d.jsx)("img",{src:e.Imagen,alt:"Sample",style:{borderRadius:"30%",width:"100%",maxWidth:"80px",marginRight:"16px"},onClick:()=>f(e.Imagen)}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:e.Titulo}),(0,d.jsx)("p",{children:e.Detalles})]})]}):(0,d.jsx)("div",{style:{marginTop:15},children:(0,d.jsxs)(n.A,{display:"flex",alignItems:"center",p:1,borderRadius:8,onClick:()=>(e=>{if(l){let o="Guinea Ecuatorial"!==e.Pais?"Exterior":"Nacional";x("/Buscar/Editar/".concat(e.Codigo,"/").concat(o))}})(e),boxShadow:3,width:"100%",children:[(0,d.jsx)("img",{src:e.Imagen,alt:"Sample",style:{borderRadius:"30%",width:"100%",maxWidth:"80px",marginRight:"16px"},onClick:()=>f(e.Imagen)}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:e.Titulo}),l?(0,d.jsx)("p",{children:"Cantidad:".concat(e.Cantidad,"     Stock:").concat(e.Stock,"\n")}):(0,d.jsx)("p",{children:e.Detalles})]}),l?null:"Retirado"!==e.Estado&&(0,d.jsx)("div",{style:{paddingLeft:"10px"},children:(0,d.jsx)(a.A,{onClick:()=>(e=>{"Enviado"===e.Estado?t(e,"Retirado"):t(e,"Enviado")})(e),variant:"contained",color:"primary",style:{borderRadius:"20px",marginRight:"14px"},children:"Comprado"===e.Estado?"Enviado":"Enviado"===e.Estado?"Retirado":null})})]})})})},o))),(0,d.jsx)(i.A,{open:p,onClose:()=>{u(!1),m(null)},maxWidth:"lg",children:(0,d.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:(0,d.jsx)("img",{src:y,alt:"Enlarged Sample",style:{width:"100%"}})})})]})}},3189:(e,o,t)=>{"use strict";var r=t(4994);o.A=void 0;var n=r(t(9526)),a=t(4414);o.A=(0,n.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},7243:(e,o,t)=>{"use strict";var r=t(9660),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,o){var t,a,i,c,s,d,l=!1;o||(o={}),t=o.debug||!1;try{if(i=r(),c=document.createRange(),s=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(r){if(r.stopPropagation(),o.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[o.format]||n.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(o.format,e);o.onCopy&&(r.preventDefault(),o.onCopy(r.clipboardData))})),document.body.appendChild(d),c.selectNodeContents(d),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(p){t&&console.error("unable to copy using execCommand: ",p),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(o.format||"text",e),o.onCopy&&o.onCopy(window.clipboardData),l=!0}catch(p){t&&console.error("unable to copy using clipboardData: ",p),t&&console.error("falling back to prompt"),a=function(e){var o=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,o)}("message"in o?o.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),d&&document.body.removeChild(d),i()}return l}},4702:(e,o,t)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.CopyToClipboard=void 0;var n=c(t(9950)),a=c(t(7243)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){f(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function p(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,o){return u=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},u(e,o)}function y(e){var o=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=x(e);if(o){var a=x(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return function(e,o){if(o&&("object"===r(o)||"function"===typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,t)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function f(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var h=function(e){!function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&u(e,o)}(s,e);var o,t,r,c=y(s);function s(){var e;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,s);for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return f(m(e=c.call.apply(c,[this].concat(t))),"onClick",(function(o){var t=e.props,r=t.text,i=t.onCopy,c=t.children,s=t.options,d=n.default.Children.only(c),l=(0,a.default)(r,s);i&&i(r,l),d&&d.props&&"function"===typeof d.props.onClick&&d.props.onClick(o)})),e}return o=s,(t=[{key:"render",value:function(){var e=this.props,o=(e.text,e.onCopy,e.options,e.children),t=l(e,i),r=n.default.Children.only(o);return n.default.cloneElement(r,d(d({},t),{},{onClick:this.onClick}))}}])&&p(o.prototype,t),r&&p(o,r),Object.defineProperty(o,"prototype",{writable:!1}),s}(n.default.PureComponent);o.CopyToClipboard=h,f(h,"defaultProps",{onCopy:void 0,options:void 0})},5189:(e,o,t)=>{"use strict";var r=t(4702).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},9660:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var o=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(o){e.addRange(o)})),o&&o.focus()}}}}]);