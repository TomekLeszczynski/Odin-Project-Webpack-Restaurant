"use strict";(self.webpackChunkodin_project_webpack_restaurant=self.webpackChunkodin_project_webpack_restaurant||[]).push([[545],{144:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(998),n.b),u=i()(r()),d=s()(l);u.push([e.id,`@font-face{font-family:"Nanum Myeongjo",serif;src:url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap")}*{box-sizing:border-box;margin:0;padding:0}body{display:flex;justify-content:center;align-items:center;background-image:url(${d});background-size:cover;font-family:Arial,Helvetica,sans-serif}#content{width:900px;min-height:100dvh;position:relative;background:rgba(0,0,0,.85)}#content nav{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;height:70px;width:100%;color:#eee}#content nav .nav-item{position:relative;text-transform:uppercase;padding:.2rem .5rem;font-weight:800;cursor:pointer;transition:border-bottom .3s}#content .container{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:70px;color:#eee;animation:intro .5s ease both}#content .container .home{display:flex;flex-direction:column;padding:13rem}#content .container .home h1{font-family:"Nanum Myeongjo",serif;font-weight:400;font-size:4.2rem;margin-bottom:.5rem}#content .container .home p{font-size:1rem;margin-bottom:5rem}#content .container .home span{font-weight:900;font-style:italic}#content .container .home button{padding:.8rem;width:50%;text-transform:uppercase;color:#eee;background-color:#ec1d1d;border-radius:12px;border:none;cursor:pointer}#content .container .home button:active{scale:.98}#content .container table{margin:2rem 8rem;border-collapse:collapse;letter-spacing:1px;text-align:left}#content .container table caption{margin-bottom:2rem;font-style:italic}#content .container table th,#content .container table td{padding:1.5rem;border-bottom:1px dashed #eee;text-align:left}#content .container .contact-box{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100dvh - 140px)}#content .container .contact-box h2{margin-bottom:1rem}#content .container .contact-box p{margin-bottom:.2rem}#content .container .contact-box .title{font-style:italic}#content footer{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;height:70px;position:absolute;bottom:0;width:100%}#content footer .footer-item{text-decoration:none;color:#8e8e8e;cursor:pointer;transition:scale .3s}#content footer .footer-item:hover{scale:1.05}.active{background-color:#ec1d1d}`,""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},545:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(379),r=n.n(o),a=n(795),i=n.n(a),c=n(569),s=n.n(c),l=n(565),u=n.n(l),d=n(216),p=n.n(d),f=n(589),m=n.n(f),h=n(144),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.Z,g);const v=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},998:(e,t,n)=>{e.exports=n.p+"nordwood-themes-laqVYIU2X-8-unsplash.webp"}}]);