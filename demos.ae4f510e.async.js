"use strict";(self.webpackChunkq_hooks=self.webpackChunkq_hooks||[]).push([[433],{72530:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(42212),n=e(11527);s.default=function(){var r=(0,a.Z)(!0),t=d()(r,2),l=t[0],_=t[1],o=_.toggle,u=_.setTrue,c=_.setFalse;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Effects\uFF1A",JSON.stringify(l)]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("button",{type:"button",onClick:o,children:"Toggle"}),(0,n.jsx)("button",{type:"button",onClick:c,style:{margin:"0 16px"},children:"Set false"}),(0,n.jsx)("button",{type:"button",onClick:u,children:"Set true"})]})]})}},33260:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(77653),n=e(11527);s.default=function(){var r=(0,a.Z)("useCookieStateString"),t=d()(r,2),l=t[0],_=t[1];return(0,n.jsx)("input",{value:l,placeholder:"Please enter some words...",onChange:function(u){return _(u.target.value)},style:{width:300}})}},88706:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(77653),n=e(11527);s.default=function(){var r=(0,a.Z)("useCookieStateUpdater",{defaultValue:"0"}),t=d()(r,2),l=t[0],_=t[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:l}),(0,n.jsx)("button",{type:"button",style:{marginRight:"16px"},onClick:function(){return _(function(u){return String(Number(u)+1)})},children:"inc +"}),(0,n.jsx)("button",{type:"button",style:{marginRight:"16px"},onClick:function(){return _(function(u){return String(Number(u)-1)})},children:"dec -"}),(0,n.jsx)("button",{type:"button",onClick:function(){return _("0")},children:"reset"})]})}},61351:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(77653),n=e(11527);s.default=function(){var r=(0,a.Z)("useCookieStateOptions",{defaultValue:"0",path:"/",expires:function(){return new Date(+new Date+1e4)}()}),t=d()(r,2),l=t[0],_=t[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:l}),(0,n.jsx)("button",{type:"button",style:{marginRight:16},onClick:function(){return _(function(u){return String(Number(u)+1)},{expires:function(){return new Date(+new Date+1e4)}()})},children:"inc + (10s expires)"}),(0,n.jsx)("button",{type:"button",style:{marginRight:16},onClick:function(){return _(function(u){return String(Number(u)-1)},{expires:function(){return new Date(+new Date+1e4)}()})},children:"dec - (10s expires)"}),(0,n.jsx)("button",{type:"button",onClick:function(){return _("0")},children:"reset"})]})}},41168:function(D,s,e){e.r(s),e.d(s,{default:function(){return l}});var m=e(54306),d=e.n(m),i=e(50959),a=e(24462);function n(_,o){var u=(0,i.useState)(_),c=d()(u,2),f=c[0],v=c[1],h=(0,a.Z)(function(){v(_)},o),M=h.run;return(0,i.useEffect)(function(){M()},[_]),f}var r=n,t=e(11527),l=function(){var _=(0,i.useState)(""),o=d()(_,2),u=o[0],c=o[1],f=r(u,{wait:500});return(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{value:u,onChange:function(h){return c(h.target.value)},placeholder:"Typed value",style:{width:280}}),(0,t.jsxs)("p",{style:{marginTop:16},children:["DebouncedValue: ",f]})]})}},43363:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(24462),a=e(50959),n=e(11527);s.default=function(){var r=(0,a.useState)(0),t=d()(r,2),l=t[0],_=t[1],o=(0,i.Z)(function(){_(l+1)},{wait:500}),u=o.run;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{style:{marginTop:16},children:[" Clicked count: ",l," "]}),(0,n.jsx)("button",{type:"button",onClick:u,children:"Click fast!"})]})}},6114:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(28042),n=e(11527);s.default=function(){var r=(0,i.useState)(0),t=d()(r,2),l=t[0],_=t[1],o=(0,i.useRef)(null);return(0,a.Z)("click",function(){_(l+1)},{target:o}),(0,n.jsxs)("button",{ref:o,type:"button",children:["You click ",l," times"]})}},51517:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(28042),n=e(11527);s.default=function(){var r=(0,i.useState)(""),t=d()(r,2),l=t[0],_=t[1];return(0,a.Z)("keydown",function(o){_(o.code)}),(0,n.jsxs)("p",{children:["Your press key is ",l]})}},29515:function(D,s,e){e.r(s),e.d(s,{default:function(){return l}});var m=e(54306),d=e.n(m),i=e(50959),a=e(13458);function n(_){var o=(0,i.useState)(_),u=d()(o,2),c=u[0],f=u[1],v=(0,a.Z)(c),h=(0,i.useCallback)(function(){return v.current},[]);return[c,{setState:f,getState:h}]}var r=n,t=e(11527),l=function(){var _=r(0),o=d()(_,2),u=o[0],c=o[1],f=c.setState,v=c.getState;return(0,i.useEffect)(function(){var h=setInterval(function(){console.log("interval count",v())},3e3);return function(){clearInterval(h)}},[]),(0,t.jsxs)("button",{onClick:function(){return f(function(M){return M+1})},children:["count: ",u]})}},67451:function(D,s,e){e.r(s);var m=e(50959),d=e(13527),i=e(11527);s.default=function(){var a=(0,m.useRef)(null),n=(0,d.Z)(a);return(0,i.jsx)("div",{ref:a,children:n?"hover":"leaveHover"})}},11741:function(D,s,e){e.r(s);var m=e(50959),d=e(13527),i=e(11527);s.default=function(){var a=(0,d.Z)(function(){return document.getElementById("hover-div")},{onEnter:function(){console.log("onEnter")},onLeave:function(){console.log("onLeave")},onChange:function(r){console.log("onChange",r)}});return(0,i.jsx)("div",{id:"hover-div",children:a?"hover":"leaveHover"})}},24630:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(40057),n=e(11527);s.default=function(){var r=(0,i.useRef)(null),t=(0,a.Z)(r),l=d()(t,1),_=l[0];return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{width:300,height:300,overflow:"scroll",border:"1px solid"},children:["scroll here",(0,n.jsx)("div",{style:{height:800},children:(0,n.jsx)("div",{ref:r,style:{border:"1px solid",height:100,width:100,textAlign:"center",marginTop:80},children:"observer dom"})})]}),(0,n.jsxs)("div",{style:{marginTop:16,color:_?"#87d068":"#f50"},children:["inViewport: ",_?"visible":"hidden"]})]})}},71356:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(40057),n=e(11527);s.default=function(){var r=(0,a.Z)(function(){return document.getElementById("children")},{threshold:[0,.25,.5,.75,1],root:function(){return document.getElementById("parent")}}),t=d()(r,2),l=t[0],_=t[1];return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{width:300,height:300,overflow:"scroll",border:"1px solid"},id:"parent",children:["scroll here",(0,n.jsx)("div",{style:{height:800},children:(0,n.jsx)("div",{id:"children",style:{border:"1px solid",height:100,width:100,textAlign:"center",marginTop:80},children:"observer dom"})})]}),(0,n.jsxs)("div",{style:{marginTop:16,color:l?"#87d068":"#f50"},children:[(0,n.jsxs)("p",{children:["inViewport: ",l?"visible":"hidden"]}),(0,n.jsxs)("p",{children:["ratio: ",_]})]})]})}},74435:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(73271),a=e(40057),n=e(50959),r=e(11527),t=["menu-1","menu-2","menu-3"],l={"menu-1":"Content for menus 1","menu-2":"Content for menus 2","menu-3":"Content for menus 3"};s.default=function(){var _=(0,n.useRef)([]),o=(0,n.useState)(t[0]),u=d()(o,2),c=u[0],f=u[1],v=(0,i.Z)(function(M){if(M.isIntersecting){var E=M.target.getAttribute("id")||"";f(E)}}),h=function(E){var O,C=document.getElementById("content-scroll"),P=(O=_.current[E])===null||O===void 0?void 0:O.offsetTop;C==null||C.scrollTo({top:P,behavior:"smooth"})};return(0,a.Z)(_.current,{callback:v,root:function(){return document.getElementById("parent-scroll")},rootMargin:"-50% 0px -50% 0px"}),(0,r.jsxs)("div",{id:"parent-scroll",style:{width:300,height:300,border:"1px solid",display:"flex",overflow:"hidden"},children:[(0,r.jsx)("div",{style:{width:"30%",backgroundColor:"#f0f0f0"},children:(0,r.jsx)("ul",{style:{listStyle:"none",padding:0,margin:0},children:t.map(function(M,E){return(0,r.jsx)("li",{onClick:function(){return h(E)},style:{padding:"10px",cursor:"pointer",textAlign:"center",transition:"background-color 0.2s ease-in-out",backgroundColor:c===M?"#e0e0e0":""},children:M},M)})})}),(0,r.jsx)("div",{id:"content-scroll",style:{flex:1,overflowY:"scroll",position:"relative"},children:t.map(function(M,E){return(0,r.jsx)("div",{ref:function(C){_.current[E]=C},id:M,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:16},children:l[M]},M)})})]})}},60791:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(13458),n=e(11527);s.default=function(){var r=(0,i.useState)(0),t=d()(r,2),l=t[0],_=t[1],o=(0,a.Z)(l);return(0,i.useEffect)(function(){var u=setInterval(function(){_(o.current+1)},1e3);return function(){return clearInterval(u)}},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("p",{children:["count: ",l]})})}},18708:function(D,s,e){e.r(s),e.d(s,{default:function(){return t}});var m=e(54306),d=e.n(m),i=e(50959),a=e(73271);function n(l){var _=function(){return new Map(l)},o=(0,i.useState)(_),u=d()(o,2),c=u[0],f=u[1],v=function(P,T){f(function(g){var A=new Map(g);return A.set(P,T),A})},h=function(P){f(new Map(P))},M=function(P){f(function(T){var g=new Map(T);return g.delete(P),g})},E=function(){return f(_())},O=function(P){return c.get(P)};return[c,{set:(0,a.Z)(v),setAll:(0,a.Z)(h),remove:(0,a.Z)(M),reset:(0,a.Z)(E),get:(0,a.Z)(O)}]}var r=e(11527),t=function(){var l=n([["msg","hello world"],[123,"number type"]]),_=d()(l,2),o=_[0],u=_[1],c=u.set,f=u.setAll,v=u.remove,h=u.reset,M=u.get;return(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",onClick:function(){return c(String(Date.now()),new Date().toJSON())},children:"Add"}),(0,r.jsx)("button",{type:"button",onClick:function(){return f([["text","this is a new Map"]])},style:{margin:"0 8px"},children:"Set new Map"}),(0,r.jsx)("button",{type:"button",onClick:function(){return v("msg")},disabled:!M("msg"),children:"Remove 'msg'"}),(0,r.jsx)("button",{type:"button",onClick:function(){return h()},style:{margin:"0 8px"},children:"Reset"}),(0,r.jsx)("div",{style:{marginTop:16},children:(0,r.jsx)("pre",{children:JSON.stringify(Array.from(o),null,2)})})]})}},99079:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(28277),n=e(73271),r=e(11527);s.default=function(){var t=(0,i.useState)(0),l=d()(t,2),_=l[0],o=l[1],u=(0,i.useCallback)(function(){a.ZP.info("Current count is ".concat(_))},[_]),c=(0,n.Z)(function(){a.ZP.info("Current count is ".concat(_))});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["count: ",_]}),(0,r.jsx)("button",{type:"button",onClick:function(){o(function(v){return v+1})},children:"Add Count"}),(0,r.jsxs)("div",{style:{marginTop:16},children:[(0,r.jsx)("button",{type:"button",onClick:u,children:"call callbackFn"}),(0,r.jsx)("button",{type:"button",onClick:c,style:{marginLeft:8},children:"call memoizedFn"})]})]})}},42626:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(73271),a=e(28277),n=e(50959),r=e(11527);s.default=function(){var l=(0,n.useState)(0),_=d()(l,2),o=_[0],u=_[1],c=(0,n.useCallback)(function(){a.ZP.info("Current count is ".concat(o))},[o]),f=(0,i.Z)(function(){a.ZP.info("Current count is ".concat(o))});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["count: ",o]}),(0,r.jsx)("button",{type:"button",onClick:function(){u(function(h){return h+1})},children:"Add Count"}),(0,r.jsx)("p",{children:"You can click the button to see the number of sub-component renderings"}),(0,r.jsxs)("div",{style:{marginTop:32},children:[(0,r.jsx)("h3",{children:"Component with useCallback function:"}),(0,r.jsx)(t,{showCount:c})]}),(0,r.jsxs)("div",{style:{marginTop:32},children:[(0,r.jsx)("h3",{children:"Component with useMemoizedFn function:"}),(0,r.jsx)(t,{showCount:f})]})]})};var t=n.memo(function(l){var _=l.showCount,o=(0,n.useRef)(0);return o.current+=1,(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Render Count: ",o.current]}),(0,r.jsx)("button",{type:"button",onClick:_,children:"showParentCount"})]})})},16217:function(D,s,e){e.r(s),e.d(s,{default:function(){return f}});var m=e(54306),d=e.n(m),i=e(37635),a=e.n(i),n=e(50959),r=e(89e3),t=e(84597);function l(v){t.Z&&((0,r.mf)(v)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(a()(v),'".'))),(0,n.useEffect)(function(){v==null||v()},[])}var _=e(42212),o=e(28277),u=e(11527),c=function(){return l(function(){o.ZP.info("mount")}),(0,u.jsx)("div",{children:"Hello World"})},f=function(){var v=(0,_.Z)(!1),h=d()(v,2),M=h[0],E=h[1].toggle;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{type:"button",onClick:E,children:M?"unmount":"mount"}),M&&(0,u.jsx)(c,{})]})}},40423:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(92933),a=e(50959),n=e(11527);s.default=function(){var r=(0,a.useState)(0),t=d()(r,2),l=t[0],_=t[1],o=(0,i.Z)(l);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["counter current value: ",l]}),(0,n.jsxs)("div",{style:{marginBottom:8},children:["counter previous value: ",o]}),(0,n.jsx)("button",{type:"button",onClick:function(){return _(function(c){return c+1})},children:"increase"}),(0,n.jsx)("button",{type:"button",style:{marginLeft:8},onClick:function(){return _(function(c){return c-1})},children:"decrease"})]})}},76997:function(D,s,e){e.r(s);var m=e(57213),d=e.n(m),i=e(54306),a=e.n(i),n=e(50959),r=e(92933),t=e(11527),l=function(u,c){return!u||u.name!==c.name},_=function(u,c){return!u||u.job!==c.job};s.default=function(){var o=(0,n.useState)({name:"Jack",job:"student"}),u=a()(o,2),c=u[0],f=u[1],v=(0,n.useState)(""),h=a()(v,2),M=h[0],E=h[1],O=(0,n.useState)(""),C=a()(O,2),P=C[0],T=C[1],g=(0,r.Z)(c,l),A=(0,r.Z)(c,_);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{margin:"8px 0",border:"1px solid #e8e8e8",padding:8},children:[(0,t.jsxs)("div",{children:["current name: ",c.name]}),(0,t.jsxs)("div",{children:["current job: ",c.job]})]}),(0,t.jsxs)("div",{children:["previous name: ",(g||{}).name]}),(0,t.jsxs)("div",{style:{marginBottom:8},children:["previous job: ",(A||{}).job]}),(0,t.jsxs)("div",{style:{marginTop:8},children:[(0,t.jsx)("input",{style:{width:220},value:M,onChange:function(j){return E(j.target.value)},placeholder:"new name"}),(0,t.jsx)("button",{type:"button",onClick:function(){f(function(j){return d()(d()({},j),{},{name:M})})},style:{marginLeft:8},children:"update"})]}),(0,t.jsxs)("div",{style:{marginTop:8},children:[(0,t.jsx)("input",{style:{width:220},value:P,onChange:function(j){return T(j.target.value)},placeholder:"new job"}),(0,t.jsx)("button",{type:"button",onClick:function(){f(function(j){return d()(d()({},j),{},{job:P})})},style:{marginLeft:8},children:"update"})]})]})}},93784:function(D,s,e){e.r(s),e.d(s,{default:function(){return t}});var m=e(54306),d=e.n(m),i=e(50959),a=e(73271);function n(l){var _=(0,i.useState)(l),o=d()(_,2),u=o[0],c=o[1],f=(0,a.Z)(function(){return c(l)});return[u,{setState:c,resetState:f}]}var r=e(11527),t=function(){var l=n({hello:"",count:0}),_=d()(l,2),o=_[0],u=_[1],c=u.setState,f=u.resetState;return(0,r.jsxs)("div",{children:[(0,r.jsx)("pre",{children:JSON.stringify(o,null,2)}),(0,r.jsxs)("p",{children:[(0,r.jsx)("button",{type:"button",style:{marginRight:"8px"},onClick:function(){return c({hello:"world",count:1})},children:"set hello and count"}),(0,r.jsx)("button",{type:"button",onClick:f,children:"resetState"})]})]})}},46813:function(D,s,e){e.r(s),e.d(s,{default:function(){return M}});var m=e(50959),d=e(54306),i=e.n(d),a=e(54689),n=e.n(a),r=e(56952),t=new Set,l,_={xs:0,sm:576,md:768,lg:992,xl:1200};function o(){var E=l;if(c(),E!==l){var O=n()(t),C;try{for(O.s();!(C=O.n()).done;){var P=C.value;P()}}catch(T){O.e(T)}finally{O.f()}}}var u=!1;function c(){for(var E=window.innerWidth,O={},C=!1,P=0,T=Object.keys(_);P<T.length;P++){var g=T[P];O[g]=E>=_[g],O[g]!==l[g]&&(C=!0)}C&&(l=O)}function f(E){_=E,l&&c()}function v(){r.Z&&!u&&(l={},c(),window.addEventListener("resize",o),u=!0);var E=(0,m.useState)(l),O=i()(E,2),C=O[0],P=O[1];return(0,m.useEffect)(function(){if(r.Z){u||window.addEventListener("resize",o);var T=function(){P(l)};return t.add(T),function(){t.delete(T),t.size===0&&(window.removeEventListener("resize",o),u=!1)}}},[]),C}var h=e(11527);f({small:0,middle:800,large:1200});function M(){var E=v();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:"Please change the width of the browser window to see the effect: "}),Object.keys(E).map(function(O){return(0,h.jsxs)("p",{children:[O," ",E[O]?"\u2714":"\u2718"]},O)})]})}},38687:function(D,s,e){e.r(s),e.d(s,{default:function(){return _}});var m=e(54306),d=e.n(m),i=e(50959),a=e(1758);function n(o){var u=(0,a.Z)(),c=(0,i.useState)(o),f=d()(c,2),v=f[0],h=f[1],M=(0,i.useCallback)(function(E){u.current||h(E)},[]);return[v,M]}var r=n,t=e(11527),l=function(){var u=r(),c=d()(u,2),f=c[0],v=c[1];(0,i.useEffect)(function(){setTimeout(function(){v("data loaded from server")},5e3)},[]);var h=f||"Loading...";return(0,t.jsx)("div",{children:h})},_=function(){var o=(0,i.useState)(!0),u=d()(o,2),c=u[0],f=u[1];return(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{onClick:function(){return f(!1)},children:"Unmount"}),c&&(0,t.jsx)(l,{})]})}},84874:function(D,s,e){e.r(s),e.d(s,{default:function(){return t}});var m=e(54306),d=e.n(m),i=e(50959),a=e(73271);function n(l){var _=function(){return new Set(l)},o=(0,i.useState)(_),u=d()(o,2),c=u[0],f=u[1],v=function(O){c.has(O)||f(function(C){var P=new Set(C);return P.add(O),P})},h=function(O){c.has(O)&&f(function(C){var P=new Set(C);return P.delete(O),P})},M=function(){return f(_())};return[c,{add:(0,a.Z)(v),remove:(0,a.Z)(h),reset:(0,a.Z)(M)}]}var r=e(11527),t=function(){var l=n(["Hello"]),_=d()(l,2),o=_[0],u=_[1],c=u.add,f=u.remove,v=u.reset;return(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",onClick:function(){return c(String(Date.now()))},children:"Add Timestamp"}),(0,r.jsx)("button",{type:"button",onClick:function(){return f("Hello")},disabled:!o.has("Hello"),style:{margin:"0 8px"},children:"Remove Hello"}),(0,r.jsx)("button",{type:"button",onClick:function(){return v()},children:"Reset"}),(0,r.jsx)("div",{style:{marginTop:16},children:(0,r.jsx)("pre",{children:JSON.stringify(Array.from(o),null,2)})})]})}},37271:function(D,s,e){e.r(s),e.d(s,{default:function(){return t}});var m=e(54306),d=e.n(m),i=e(50959),a=e(22824);function n(l,_){var o=(0,i.useState)(l),u=d()(o,2),c=u[0],f=u[1],v=(0,a.Z)(function(){return f(l)},_),h=v.run;return(0,i.useEffect)(function(){h()},[l]),c}var r=e(11527),t=function(){var l=(0,i.useState)(""),_=d()(l,2),o=_[0],u=_[1],c=n(o,{wait:500});return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{value:o,onChange:function(v){return u(v.target.value)},placeholder:"Typed value",style:{width:280}}),(0,r.jsxs)("p",{style:{marginTop:16},children:["throttledValue: ",c]})]})}},30850:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(22824),n=e(11527);s.default=function(){var r=(0,i.useState)(0),t=d()(r,2),l=t[0],_=t[1],o=(0,a.Z)(function(){_(l+1)},{wait:500}),u=o.run;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{style:{marginTop:16},children:[" Clicked count: ",l," "]}),(0,n.jsx)("button",{type:"button",onClick:u,children:"Click fast!"})]})}},46626:function(D,s,e){e.r(s),e.d(s,{default:function(){return t}});var m=e(50959),d=e(56952),i=e(15290),a={restoreOnUnmount:!1};function n(l){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a,o=(0,m.useRef)(d.Z?document.title:"");(0,m.useEffect)(function(){setTimeout(function(){document.title=l},0)},[l]),(0,i.Z)(function(){_.restoreOnUnmount&&(document.title=o.current)})}var r=e(11527),t=function(){return n("\u81EA\u5B9A\u4E49\u6807\u9898"),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"Set title of the page."})})}},74619:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(28969),n=e(11527);s.default=function(){var r=(0,a.Z)(),t=d()(r,2),l=t[0],_=t[1],o=_.toggle,u=_.setLeft,c=_.setRight;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Effects\uFF1A","".concat(l)]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("button",{type:"button",onClick:o,children:"Toggle"}),(0,n.jsx)("button",{type:"button",onClick:u,style:{margin:"0 8px"},children:"Toggle False"}),(0,n.jsx)("button",{type:"button",onClick:c,children:"Toggle True"})]})]})}},69978:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(50959),a=e(28969),n=e(11527);s.default=function(){var r=(0,a.Z)("hello","world"),t=d()(r,2),l=t[0],_=t[1],o=_.toggle,u=_.set,c=_.setLeft,f=_.setRight;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Effects\uFF1A",l]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("button",{type:"button",onClick:o,children:"Toggle"}),(0,n.jsx)("button",{type:"button",onClick:function(){return u("Hello")},style:{margin:"0 8px"},children:"Set Hello"}),(0,n.jsx)("button",{type:"button",onClick:function(){return u("World")},children:"Set World"}),(0,n.jsx)("button",{type:"button",onClick:c,style:{margin:"0 8px"},children:"Set Left"}),(0,n.jsx)("button",{type:"button",onClick:f,children:"Set Right"})]})]})}},67779:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(15290),a=e(42212),n=e(28277),r=e(50959),t=e(11527),l=function(){return(0,i.Z)(function(){n.ZP.info("unmount")}),(0,t.jsx)("p",{children:"Hello World!"})};s.default=function(){var _=(0,a.Z)(!0),o=d()(_,2),u=o[0],c=o[1].toggle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"button",onClick:c,children:u?"unmount":"mount"}),u&&(0,t.jsx)(l,{})]})}},54352:function(D,s,e){e.r(s);var m=e(54306),d=e.n(m),i=e(1758),a=e(42212),n=e(28277),r=e(50959),t=e(11527),l=function(){var o=(0,i.Z)();return(0,r.useEffect)(function(){setTimeout(function(){o.current||n.ZP.info("component is alive")},3e3)},[]),(0,t.jsx)("p",{children:"Hello World!"})};s.default=function(){var _=(0,a.Z)(!0),o=d()(_,2),u=o[0],c=o[1].toggle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"button",onClick:c,children:u?"unmount":"mount"}),u&&(0,t.jsx)(l,{})]})}},42212:function(D,s,e){e.d(s,{Z:function(){return n}});var m=e(54306),d=e.n(m),i=e(50959),a=e(28969);function n(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=(0,a.Z)(!!r),l=d()(t,2),_=l[0],o=l[1],u=o.set,c=o.toggle,f=(0,i.useMemo)(function(){var v=function(){return u(!0)},h=function(){return u(!1)};return{toggle:c,set:function(E){return u(!!E)},setTrue:v,setFalse:h}},[]);return[_,f]}},77653:function(D,s,e){e.d(s,{Z:function(){return c}});var m=e(57213),d=e.n(m),i=e(12342),a=e.n(i),n=e(54306),r=e.n(n),t=e(29634),l=e(50959),_=e(73271),o=e(89e3),u=["defaultValue"];function c(f){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=(0,l.useState)(function(){var P=t.Z.get(f);return(0,o.HD)(P)?P:(0,o.mf)(v.defaultValue)?v.defaultValue():v.defaultValue||""}),M=r()(h,2),E=M[0],O=M[1],C=(0,_.Z)(function(P){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=d()(d()({},v),T),A=g.defaultValue,R=A===void 0?"":A,j=a()(g,u),b=(0,o.mf)(P)?P(E):P;O(b),b===void 0?t.Z.remove(f):t.Z.set(f,b,j)});return[E,C]}},24462:function(D,s,e){var m=e(37635),d=e.n(m),i=e(32598),a=e(50959),n=e(13458),r=e(15290),t=e(89e3),l=e(84597);function _(o,u){var c;l.Z&&((0,t.mf)(o)||console.error("useDebounceFn expected parameter is a function, got ".concat(d()(o))));var f=(0,n.Z)(o),v=(c=u==null?void 0:u.wait)!==null&&c!==void 0?c:1e3,h=(0,a.useMemo)(function(){return(0,i.Z)(function(){return f.current.apply(f,arguments)},v,u)},[]);return(0,r.Z)(function(){h.cancel()}),{run:h,cancel:h.cancel,flush:h.flush}}s.Z=_},28042:function(D,s,e){var m=e(13458),d=e(62879),i=e(1834);function a(n,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=(0,m.Z)(r);(0,i.Z)(function(){var _=(0,d.n)(t.target,window);if(_!=null&&_.addEventListener){var o=function(c){return l.current(c)};return _.addEventListener(n,o,{capture:t.capture,once:t.once,passive:t.passive}),function(){_.removeEventListener(n,o,{capture:t.capture})}}},[n,t.capture,t.once,t.passive],t.target)}s.Z=a},13527:function(D,s,e){var m=e(54306),d=e.n(m),i=e(42212),a=e(28042);s.Z=function(n,r){var t=r||{},l=t.onEnter,_=t.onLeave,o=t.onChange,u=(0,i.Z)(!1),c=d()(u,2),f=c[0],v=c[1],h=v.setTrue,M=v.setFalse;return(0,a.Z)("mouseenter",function(){l==null||l(),h(),o==null||o(!0)},{target:n}),(0,a.Z)("mouseleave",function(){_==null||_(),M(),o==null||o(!1)},{target:n}),f}},40057:function(D,s,e){var m=e(57213),d=e.n(m),i=e(54689),a=e.n(i),n=e(54306),r=e.n(n),t=e(12342),l=e.n(t),_=e(15983),o=e.n(_),u=e(50959),c=e(62879),f=e(1834),v=["callback"];function h(M,E){var O=E||{},C=O.callback,P=l()(O,v),T=(0,u.useState)(),g=r()(T,2),A=g[0],R=g[1],j=(0,u.useState)(),b=r()(j,2),y=b[0],x=b[1];return(0,f.Z)(function(){var S=Array.isArray(M)?M:[M],B=S.map(function(p){return(0,c.n)(p)}).filter(Boolean);if(B.length){var U=new IntersectionObserver(function(p){var L=a()(p),W;try{for(L.s();!(W=L.n()).done;){var I=W.value;x(I.intersectionRatio),R(I.isIntersecting),C==null||C(I)}}catch(K){L.e(K)}finally{L.f()}},d()(d()({},P),{},{root:(0,c.n)(E==null?void 0:E.root)}));return B.forEach(function(p){p&&U.observe(p)}),function(){U.disconnect()}}},[E==null?void 0:E.rootMargin,E==null?void 0:E.threshold,C],M),[A,y]}s.Z=h},13458:function(D,s,e){var m=e(50959);function d(i){var a=(0,m.useRef)(i);return a.current=i,a}s.Z=d},73271:function(D,s,e){e.d(s,{Z:function(){return r}});var m=e(37635),d=e.n(m),i=e(50959),a=e(89e3),n=e(84597);function r(t){n.Z&&((0,a.mf)(t)||console.error("useMemoizedFn expected parameter is a function, got ".concat(d()(t))));var l=(0,i.useRef)(t);l.current=(0,i.useMemo)(function(){return t},[t]);var _=(0,i.useRef)();return _.current||(_.current=function(){for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return l.current.apply(this,u)}),_.current}},92933:function(D,s,e){e.d(s,{Z:function(){return i}});var m=e(50959),d=function(n,r){return!Object.is(n,r)};function i(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d,r=(0,m.useRef)(),t=(0,m.useRef)();return n(t.current,a)&&(r.current=t.current,t.current=a),r.current}},22824:function(D,s,e){e.d(s,{Z:function(){return _}});var m=e(37635),d=e.n(m),i=e(20057),a=e(50959),n=e(13458),r=e(89e3),t=e(84597),l=e(15290);function _(o,u){var c;t.Z&&((0,r.mf)(o)||console.error("useThrottleFn expected parameter is a function, got ".concat(d()(o))));var f=(0,n.Z)(o),v=(c=u==null?void 0:u.wait)!==null&&c!==void 0?c:1e3,h=(0,a.useMemo)(function(){return(0,i.Z)(function(){return f.current.apply(f,arguments)},v,u)},[]);return(0,l.Z)(function(){h.cancel()}),{run:h,cancel:h.cancel,flush:h.flush}}},28969:function(D,s,e){var m=e(54306),d=e.n(m),i=e(50959);function a(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r=arguments.length>1?arguments[1]:void 0,t=(0,i.useState)(n),l=d()(t,2),_=l[0],o=l[1],u=(0,i.useMemo)(function(){var c=r===void 0?!n:r,f=function(){return o(function(O){return O===n?c:n})},v=function(O){return o(O)},h=function(){return o(n)},M=function(){return o(c)};return{toggle:f,set:v,setLeft:h,setRight:M}},[]);return[_,u]}s.Z=a},15290:function(D,s,e){e.d(s,{Z:function(){return t}});var m=e(37635),d=e.n(m),i=e(13458),a=e(89e3),n=e(84597),r=e(50959);function t(l){n.Z&&(a.mf||console.error("useUnmount expected parameter is a function, got ".concat(d()(l))));var _=(0,i.Z)(l);(0,r.useEffect)(function(){return function(){_.current()}},[])}},1758:function(D,s,e){e.d(s,{Z:function(){return d}});var m=e(50959);function d(){var i=(0,m.useRef)(!1);return(0,m.useEffect)(function(){return i.current=!1,function(){i.current=!0}},[]),i}},62879:function(D,s,e){e.d(s,{n:function(){return i}});var m=e(89e3),d=e(56952);function i(a,n){if(d.Z){if(!a)return n;var r;return(0,m.mf)(a)?r=a():"current"in a?r=a.current:r=a,r}}},89e3:function(D,s,e){e.d(s,{HD:function(){return n},mf:function(){return a}});var m=e(37635),d=e.n(m),i=function(o){return o!==null&&_typeof(o)==="object"},a=function(o){return typeof o=="function"},n=function(o){return typeof o=="string"},r=function(o){return typeof o=="boolean"},t=function(o){return typeof o=="number"},l=function(o){return typeof o=="undefined"}},56952:function(D,s){var e=!!(typeof window!="undefined"&&window.document&&window.document.createElement);s.Z=e},84597:function(D,s){var e=!1;s.Z=e},1834:function(D,s,e){e.d(s,{Z:function(){return l}});var m=e(50959),d=e(15290);function i(_,o){if(_===o)return!0;for(var u=0;u<_.length;u++)if(!Object.is(_[u],o[u]))return!1;return!0}var a=e(62879),n=function(o){var u=function(f,v,h){var M=(0,m.useRef)(!1),E=(0,m.useRef)([]),O=(0,m.useRef)([]),C=(0,m.useRef)();o(function(){var P=Array.isArray(h)?h:[h],T=P.map(function(A){return(0,a.n)(A)});if(!M.current){M.current=!0,E.current=T,O.current=v,C.current=f();return}if(T.length!==E.current.length||!i(T,E.current)||!i(v,O.current)){var g;(g=C.current)===null||g===void 0||g.call(C),E.current=T,O.current=v,C.current=f()}}),(0,d.Z)(function(){var P;(P=C.current)===null||P===void 0||P.call(C),M.current=!1})};return u},r=n,t=r(m.useEffect),l=t}}]);
