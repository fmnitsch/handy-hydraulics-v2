(this.webpackJsonphandyhydraulics_v2=this.webpackJsonphandyhydraulics_v2||[]).push([[0],{17:function(e,c,t){},21:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(1),s=t.n(n),r=t(10),l=t.n(r),i=t(4),u=(t(17),t.p+"static/media/x-symbol.f5457199.svg");var o=function(e){var c=e.selector,t=e.calcDisplay,n=e.setCalcDisplay,s=e.setSelector,r=function(e){n("".concat(e.target.id))};return Object(a.jsxs)("section",{className:"calc-selector ".concat(c?"show":"hide"),children:[Object(a.jsx)("div",{className:"close-wrapper",children:Object(a.jsx)("img",{src:u,alt:"",onClick:function(){s(!c)}})}),Object(a.jsxs)("ul",{className:"calc-list",children:[Object(a.jsx)("li",{className:"selector ".concat("elev-press"===t||null===t?"active":""),onClick:r,id:"elev-press",children:"Elevation Pressure"}),Object(a.jsx)("li",{className:"selector ".concat("orif-dis"===t?"active":""),onClick:r,id:"orif-dis",children:"Orifice Discharge"}),Object(a.jsx)("li",{className:"selector ".concat("pipe-vol"===t?"active":""),onClick:r,id:"pipe-vol",children:"Pipe Volume"}),Object(a.jsx)("li",{className:"selector ".concat("sprink-dis"===t?"active":""),onClick:r,id:"sprink-dis",children:"Sprinkler Discharge"}),Object(a.jsx)("li",{className:"selector ".concat("press-loss"===t?"active":""),onClick:r,id:"press-loss",children:"Pressure Loss"})]})]})},j=t(3),d=t(2);var v=function(e){var c=e.clear,t=e.calcScreenRef,s=e.calcTextRef,r=e.ready,l=e.setReady,i=e.calcButtonRef,u=e.saveButtonRef,o=e.savedCalcs,v=e.setSavedCalcs,b=Object(n.useRef)(null),p=[b];return Object(a.jsxs)("section",{className:"calculator",children:[Object(a.jsx)("h2",{children:"Elevation Pressure (psi)"}),Object(a.jsxs)("div",{className:"calc-screen",ref:t,children:[Object(a.jsx)("span",{ref:s}),Object(a.jsx)("button",{className:"save-button",ref:u,onClick:function(){var e={calculation:"Elevation Pressure",inputs:["Height (ft): ".concat(b.current.value)],output:"".concat(s.current.innerText," psi"),id:Object(d.v4)()};v([].concat(Object(j.a)(o),[e]))},children:"Save"})]}),Object(a.jsx)("div",{className:"inputs-container",children:Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"height",children:"Height (ft):"}),Object(a.jsx)("input",{type:"number",ref:b,name:"height",className:"input",onChange:function(e){e.target.value?l(!0):l(!1)}})]})}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{className:"calc-button ".concat(r?"":"inactive"),onClick:function(){if(r){var e=.433*+b.current.value;t.current.classList.add("active"),s.current.innerText="".concat(e.toFixed(3)),u.current.classList.add("save-active")}},ref:i,children:"Calculate"}),Object(a.jsx)("button",{onClick:function(){return c(p)},className:"clear ".concat(r?"":"clear-inactive"),children:"Clear"})]})]})};var b=function(e){var c=e.clear,t=e.calcScreenRef,s=e.calcTextRef,r=e.ready,l=e.setReady,i=e.calcButtonRef,u=e.saveButtonRef,o=e.savedCalcs,v=e.setSavedCalcs,b=Object(n.useRef)(null),p=Object(n.useRef)(null),f=Object(n.useRef)(null),O=[b,p,f],h=function(){b.current.value&&p.current.value&&f.current.value?l(!0):l(!1)};return Object(a.jsxs)("section",{className:"calculator",children:[Object(a.jsx)("h2",{children:"Orifice Discharge (gpm)"}),Object(a.jsxs)("div",{className:"calc-screen",ref:t,children:[Object(a.jsx)("span",{ref:s}),Object(a.jsx)("button",{className:"save-button",ref:u,onClick:function(){var e={calculation:"Orifice Discharge",inputs:["Orifice (in): ".concat(b.current.value),"C-fact.: ".concat(p.current.value),"PSI: ".concat(f.current.value)],output:"".concat(s.current.innerText," gpm"),id:Object(d.v4)()};v([].concat(Object(j.a)(o),[e]))},children:"Save"})]}),Object(a.jsxs)("div",{className:"inputs-container",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"orifice",children:"Orifice (in):"}),Object(a.jsx)("input",{type:"number",ref:b,name:"orifice",className:"input",onChange:h})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"cfact",children:"C-fact.:"}),Object(a.jsx)("input",{type:"number",ref:p,name:"cfact",className:"input",onChange:h})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"psi",children:"PSI:"}),Object(a.jsx)("input",{type:"number",ref:f,name:"psi",className:"input",onChange:h})]})]}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{className:"calc-button ".concat(r?"":"inactive"),onClick:function(){if(r){var e,c,a,n=(e=+b.current.value,c=+p.current.value,a=+f.current.value,Math.round(29.83*c*(e*e)*Math.sqrt(a)));t.current.classList.add("active"),s.current.innerText="".concat(n),u.current.classList.add("save-active")}},ref:i,children:"Calculate"}),Object(a.jsx)("button",{onClick:function(){return c(O)},className:"clear ".concat(r?"":"clear-inactive"),children:"Clear"})]})]})};var p=function(e){var c=e.clear,t=e.calcScreenRef,s=e.calcTextRef,r=e.ready,l=e.setReady,i=e.calcButtonRef,u=e.saveButtonRef,o=e.savedCalcs,v=e.setSavedCalcs,b=Object(n.useRef)(null),p=Object(n.useRef)(null),f=[b,p],O=function(){b.current.value&&p.current.value?l(!0):l(!1)};return Object(a.jsxs)("section",{className:"calculator",children:[Object(a.jsx)("h2",{children:"Pipe Volume (US gal)"}),Object(a.jsxs)("div",{className:"calc-screen",ref:t,children:[Object(a.jsx)("span",{ref:s}),Object(a.jsx)("button",{className:"save-button",ref:u,onClick:function(){var e={calculation:"Pipe Volume",inputs:["Diameter (in): ".concat(b.current.value),"Length (ft): ".concat(p.current.value)],output:"".concat(s.current.innerText," US gal"),id:Object(d.v4)()};v([].concat(Object(j.a)(o),[e]))},children:"Save"})]}),Object(a.jsxs)("div",{className:"inputs-container",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"PV-diam",children:"Diameter (in):"}),Object(a.jsx)("input",{type:"number",ref:b,name:"PV-diam",className:"input",onChange:O})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"PV-length",children:"Length (ft):"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",ref:p,name:"PV-length",className:"input",onChange:O})]})]}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{className:"calc-button ".concat(r?"":"inactive"),onClick:function(){if(r){var e,c,a=(e=+b.current.value,c=p.current.value,.040799*Math.pow(e,2)*c);t.current.classList.add("active"),s.current.innerText="".concat(a.toFixed(3)),u.current.classList.add("save-active")}},ref:i,children:"Calculate"}),Object(a.jsx)("button",{onClick:function(){return c(f)},className:"clear ".concat(r?"":"clear-inactive"),children:"Clear"})]})]})};var f=function(e){var c=e.calcDisplay,t=e.clear,s=e.calcScreenRef,r=e.calcTextRef,l=e.calcTextRef2,u=e.ready,o=e.setReady,v=e.calcScreen2Ref,b=e.calcButtonRef,p=e.calcButton2Ref,f=e.saveButtonRef,O=e.saveButton2Ref,h=e.savedCalcs,x=e.setSavedCalcs,m=Object(n.useState)(!1),R=Object(i.a)(m,2),N=R[0],C=R[1],g=Object(n.useRef)(null),S=Object(n.useRef)(null),y=Object(n.useRef)(null),k=Object(n.useRef)(null),B=Object(n.useRef)(null),T=Object(n.useRef)(null),L=[g,S,y,k],w=[B,T],P=function(e,c,t,a){return 4.52*Math.pow(e,1.85)/(Math.pow(a,1.85)*Math.pow(t,4.87))*c},F=function(){g.current.value&&S.current.value&&y.current.value&&k.current.value&&!B.current.value&&!T.current.value?(o(!0),C(!1)):g.current.value&&S.current.value&&y.current.value&&k.current.value&&B.current.value&&T.current.value?(o(!0),C(!0)):(o(!1),C(!1))};return Object(a.jsxs)("section",{className:"calculator ".concat("press-loss"===c?"double":""),children:[Object(a.jsx)("h2",{children:"Pressure Loss (psi)"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{id:"double-calc-container",children:[Object(a.jsxs)("div",{id:"fric-loss-calc",children:[Object(a.jsx)("h2",{children:"Friction Loss"}),Object(a.jsxs)("div",{className:"calc-screen",ref:s,children:[Object(a.jsx)("span",{ref:r}),Object(a.jsx)("button",{className:"save-button",ref:f,onClick:function(){var e={calculation:"Pipe Volume",inputs:["Q-discharge (gpm): ".concat(g.current.value),"Length (ft): ".concat(S.current.value),"Diameter (in): ".concat(y.current.value),"C: ".concat(k.current.value)],output:"".concat(r.current.innerText," psi"),id:Object(d.v4)()};x([].concat(Object(j.a)(h),[e]))},children:"Save"})]}),Object(a.jsxs)("div",{className:"inputs-container",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"q-discharge",children:"Q-discharge (gpm):"}),Object(a.jsx)("input",{type:"number",ref:g,name:"q-discharge",className:"input",onChange:F})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"PL-length",children:"Length (ft):"}),Object(a.jsx)("input",{type:"number",ref:S,name:"PL-length",className:"input",onChange:F})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"PL-diam",children:"Diameter (in):"}),Object(a.jsx)("input",{type:"number",ref:y,name:"PL-diam",className:"input",onChange:F})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"c",children:"C:"}),Object(a.jsx)("input",{type:"number",ref:k,name:"c",className:"input",onChange:F})]})]}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{type:"button",className:"calc-button ".concat(u?"":"inactive"),id:"calc-friction-loss",onClick:function(){if(u){var e=P(+g.current.value,+S.current.value,+y.current.value,+k.current.value);s.current.classList.add("active"),r.current.innerText="".concat(e.toFixed(4)),f.current.classList.add("save-active")}},ref:b,children:"Calculate"}),Object(a.jsx)("button",{onClick:function(){return t(L)},className:"clear ".concat(u?"":"clear-inactive"),children:"Clear"})]})]}),Object(a.jsx)("div",{className:"vl"}),Object(a.jsxs)("div",{id:"p-supp-calc",children:[Object(a.jsx)("h2",{children:"P-Supply (psi)"}),Object(a.jsxs)("div",{className:"calc-screen",ref:v,children:[Object(a.jsx)("span",{ref:l}),Object(a.jsx)("button",{className:"save-button",ref:O,onClick:function(){var e=P(+g.current.value,+S.current.value,+y.current.value,+k.current.value),c={calculation:"Pressure Loss",inputs:["Friction Loss (psi): ".concat(e.toFixed(4)),"P-discharge (psi): ".concat(B.current.value),"Elevation add (ft): ".concat(T.current.value)],output:"".concat(v.current.innerText," psi"),id:Object(d.v4)()};x([].concat(Object(j.a)(h),[c]))},children:"Save"})]}),Object(a.jsxs)("div",{className:"inputs-container",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"p-discharge",children:"P-discharge (psi):"}),Object(a.jsx)("input",{type:"number",ref:B,name:"p-discharge",className:"input",onChange:F})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"elev-add",children:"Elevation add (ft):"}),Object(a.jsx)("input",{type:"number",ref:T,name:"elev-add",className:"input",onChange:F})]})]}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{type:"button",className:"calc-button ".concat(N?"":"inactive"),id:"calc-pSupp-psi",onClick:function(){if(N){var e=function(e,c,t){return c+e+.433*t}(+P(+g.current.value,+S.current.value,+y.current.value,+k.current.value),+B.current.value,+T.current.value);v.current.classList.add("active"),l.current.innerText="".concat(e.toFixed(3)),O.current.classList.add("save-active")}},ref:p,children:"Calculate"}),Object(a.jsx)("button",{onClick:function(){return w.forEach((function(e){return e.current.value=""})),v.current.classList.remove("active"),l.current.innerText="",O.current.classList.remove("save-active"),void C(!1)},className:"clear ".concat(N?"":"clear-inactive"),children:"Clear"})]})]})]})]})};var O=function(e){var c=e.clear,t=e.calcScreenRef,s=e.calcTextRef,r=e.ready,l=e.setReady,i=e.calcButtonRef,u=e.saveButtonRef,o=e.savedCalcs,v=e.setSavedCalcs,b=Object(n.useRef)(null),p=Object(n.useRef)(null),f=[b,p],O=function(){b.current.value&&p.current.value?l(!0):l(!1)};return Object(a.jsxs)("section",{className:"calculator",children:[Object(a.jsx)("h2",{children:"Sprinkler Discharge (gpm)"}),Object(a.jsxs)("div",{className:"calc-screen",ref:t,children:[Object(a.jsx)("span",{ref:s}),Object(a.jsx)("button",{className:"save-button",ref:u,onClick:function(){var e={calculation:"Sprinkler Discharge",inputs:["K: ".concat(b.current.value),"Pressure (psi): ".concat(p.current.value)],output:"".concat(s.current.innerText," gpm"),id:Object(d.v4)()};v([].concat(Object(j.a)(o),[e]))},children:"Save"})]}),Object(a.jsxs)("div",{className:"inputs-container",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"k",children:"K:"}),Object(a.jsx)("input",{type:"number",ref:b,name:"k",className:"input",onChange:O})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{htmlFor:"pressure-psi",children:"Pressure (psi):"}),Object(a.jsx)("input",{type:"number",ref:p,name:"pressure-psi",className:"input",onChange:O})]})]}),Object(a.jsxs)("div",{className:"buttons-container",children:[Object(a.jsx)("button",{className:"calc-button ".concat(r?"":"inactive"),onClick:function(){if(r){var e,c,a=(e=+b.current.value,c=+p.current.value,Math.sqrt(c)*e);t.current.classList.add("active"),s.current.innerText="".concat(a.toFixed(1)),u.current.classList.add("save-active")}},ref:i,children:"Calculate"}),Object(a.jsx)("button",{onClick:function(){return c(f)},className:"clear ".concat(r?"":"clear-inactive"),children:"Clear"})]})]})};var h=function(e){var c=e.calcDisplay,t=e.calcScreenRef,s=e.calcScreen2Ref,r=e.calcTextRef,l=e.calcTextRef2,u=e.selector,o=e.setSelector,j=e.calcButtonRef,d=e.calcButton2Ref,h=e.saveButtonRef,x=e.saveButton2Ref,m=e.savedCalcs,R=e.setSavedCalcs,N=Object(n.useState)(!1),C=Object(i.a)(N,2),g=C[0],S=C[1],y=function(e){e.forEach((function(e){return e.current.value=""})),t.current.classList.remove("active"),r.current.innerText="",h.current.classList.remove("save-active"),S(!1)};return Object(n.useEffect)((function(){S(!1)}),[c]),Object(a.jsxs)("div",{className:"calc-container",children:[Object(a.jsx)("button",{className:"toggle-calcs",onClick:function(){o(!u)},children:"See all calculators"}),"elev-press"===c&&Object(a.jsx)(v,{clear:y,calcScreenRef:t,calcTextRef:r,ready:g,setReady:S,calcButtonRef:j,saveButtonRef:h,savedCalcs:m,setSavedCalcs:R}),"orif-dis"===c&&Object(a.jsx)(b,{clear:y,calcScreenRef:t,calcTextRef:r,ready:g,setReady:S,calcButtonRef:j,saveButtonRef:h,savedCalcs:m,setSavedCalcs:R}),"pipe-vol"===c&&Object(a.jsx)(p,{clear:y,calcScreenRef:t,calcTextRef:r,ready:g,setReady:S,calcButtonRef:j,saveButtonRef:h,savedCalcs:m,setSavedCalcs:R}),"sprink-dis"===c&&Object(a.jsx)(O,{clear:y,calcScreenRef:t,calcTextRef:r,ready:g,setReady:S,calcButtonRef:j,saveButtonRef:h,savedCalcs:m,setSavedCalcs:R}),"press-loss"===c&&Object(a.jsx)(f,{calcDisplay:c,clear:y,calcScreenRef:t,calcTextRef:r,ready:g,setReady:S,calcScreen2Ref:s,calcTextRef2:l,calcButtonRef:j,calcButton2Ref:d,saveButtonRef:h,saveButton2Ref:x,savedCalcs:m,setSavedCalcs:R}),null===c&&Object(a.jsx)(v,{clear:y,calcScreenRef:t,calcTextRef:r,ready:g,setReady:S,calcButtonRef:j,saveButtonRef:h,savedCalcs:m,setSavedCalcs:R})]})},x=t(11),m=t.p+"static/media/Edit.24f06236.svg";var R=function(e){var c=e.savedCalcs,t=e.setSavedCalcs,s=Object(n.useRef)(null),r=function(e){t(c.filter((function(c){return c.id!==e.target.id})))};return Object(a.jsxs)("div",{className:"saved-calcs-container",children:[Object(a.jsxs)("div",{className:"saved-options-wrapper",children:[Object(a.jsx)("p",{children:"My saved calculations"}),Object(a.jsx)("button",{className:"saved-calcs-button ".concat(c[0]?"visible":""),onClick:function(){var e=s.current.innerText,c=new Blob([e],{type:"text/plain;charset=utf-8"});Object(x.saveAs)(c,"hh-calcs.txt")},children:Object(a.jsx)("img",{className:"print",src:m,alt:""})})]}),Object(a.jsx)("div",{className:"current-saved-calcs",ref:s,children:c.map((function(e){return Object(a.jsxs)("div",{className:"calc-card",children:[Object(a.jsxs)("div",{className:"title-wrapper",children:[Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:e.calculation})}),Object(a.jsx)("div",{className:"close",children:Object(a.jsx)("img",{src:u,alt:"",id:e.id,onClick:r})})]}),Object(a.jsxs)("div",{className:"calculation-wrapper",children:[Object(a.jsxs)("div",{className:"input-display-wrapper",children:[Object(a.jsx)("p",{}),e.inputs.map((function(e){return Object(a.jsx)("p",{children:e},e.toString())}))]}),Object(a.jsxs)("div",{className:"output-display-wrapper",children:[Object(a.jsx)("p",{}),Object(a.jsxs)("p",{className:"answer",children:["= ",e.output]})]})]})]},e.id)}))})]})};var N=function(){var e=Object(n.useState)(null),c=Object(i.a)(e,2),t=c[0],s=c[1],r=Object(n.useState)(!1),l=Object(i.a)(r,2),u=l[0],j=l[1],d=Object(n.useState)([]),v=Object(i.a)(d,2),b=v[0],p=v[1],f=Object(n.useRef)(null),O=Object(n.useRef)(null),x=Object(n.useRef)(null),m=Object(n.useRef)(null),N=Object(n.useRef)(null),C=Object(n.useRef)(null),g=Object(n.useRef)(null),S=Object(n.useRef)(null);return Object(a.jsxs)("div",{id:"App",children:[Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h1",{children:"Handy Hydraulics"}),Object(a.jsx)("div",{className:"tagline",children:Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"The go-to resource for fire protection engineers"})})})]}),Object(a.jsxs)("div",{className:"calculators",children:[Object(a.jsx)(o,{selector:u,setSelector:j,calcDisplay:t,setCalcDisplay:s}),Object(a.jsxs)("div",{className:"calcs-wrapper ".concat(u?"selector-active":""),children:[Object(a.jsx)(h,{calcDisplay:t,calcScreenRef:x,calcScreen2Ref:m,calcTextRef:f,calcTextRef2:O,selector:u,setSelector:j,calcButtonRef:N,calcButton2Ref:C,saveButtonRef:g,saveButton2Ref:S,savedCalcs:b,setSavedCalcs:p}),Object(a.jsx)(R,{savedCalcs:b,setSavedCalcs:p})]})]})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),a(e),n(e),s(e),r(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),C()}},[[21,1,2]]]);
//# sourceMappingURL=main.101d8913.chunk.js.map