(()=>{"use strict";var e,t,n={},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".6d5743d4ee98f5056895.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="odin-project-webpack-restaurant:",o.l=(n,a,r,c)=>{if(e[n])e[n].push(a);else{var i,s;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){i=u;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[a];var p=(t,a)=>{i.onerror=i.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={296:0};o.f.j=(t,n)=>{var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,o)=>a=e[t]=[n,o]));n.push(a[2]=r);var c=o.p+o.u(t),i=new Error;o.l(c,(n=>{if(o.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",i.name="ChunkLoadError",i.type=r,i.request=c,a[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var a,r,[c,i,s]=n,d=0;if(c.some((t=>0!==e[t]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);s&&s(o)}for(t&&t(n);d<c.length;d++)r=c[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunkodin_project_webpack_restaurant=self.webpackChunkodin_project_webpack_restaurant||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;class r{constructor(e,t,n){this.plate=e,this.description=t,this.price=n}createPlate(){const e=document.createElement("tr"),t=document.createElement("th");t.setAttribute("scope","row");const n=document.createElement("td"),a=document.createElement("td");return t.textContent=this.plate,n.textContent=this.description,a.textContent=this.price,e.append(t),e.append(n),e.append(a),e}}const c=new class{constructor(){this.menuItems=[]}addPlate(e){this.menuItems.push(e)}populateMenu(){const e=document.querySelector(".container"),t=document.createElement("table"),n=document.createElement("caption"),a=document.createElement("tbody");n.textContent="Our special menu features 10 fictional onion-based dishes that will provide you with unforgettable culinary journeys:",e.append(t),t.append(n),t.append(a);for(const e of this.menuItems){const t=e.createPlate();a.append(t)}return a}},i=new r("Onion Croquettes","Delicate filling with onion, cheese, and herbs, wrapped in crispy breadcrumbs. Perfect as an appetizer!","23,50€"),s=new r("Onion Cream Soup","Deeply aromatic soup where caramelized onion takes the lead, seasoned with delicate spices. It's warming and full of flavor.","15,00€"),d=new r("Onion Fritters","Traditional dumplings filled to the brim with a delicious mixture of onion, mushrooms, and herbs. Served with sour cream.","17,50€"),l=new r("Onion Tart","A crispy crust with a delicate onion filling, topped with a creamy sauce and fresh herbs. A perfect choice for those who appreciate sophisticated flavors.","12,00€"),u=new r("Onion Burger","Juicy burger with a grilled onion patty, toppings, and a flavorful onion sauce. Onion takes the spotlight!","24,00€"),p=new r("Onion Pasta","Al dente pasta with caramelized onion, garlic, and a hint of spiciness. Simple yet incredibly tasty combination.","18,50€");function m(){const e=document.querySelector(".container");e.textContent="";const t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("p"),o=document.createElement("button");t.classList.add("home"),n.textContent="Welcome to Onion Delights!",a.innerHTML="We are a restaurant that emphasizes one extraordinary vegetable - <span>the onion</span>. Our passion and creativity allow us to create countless flavors and unique culinary experiences using only this humble yet versatile plant. We provide an authentic taste experience for all onion lovers.",o.textContent="check today's onion",t.append(n),t.append(a),t.append(o),e.append(t)}o.e(545).then(o.bind(o,545)).catch((e=>{console.error("scss loading failure:",e)}));const h=(()=>{const e=document.getElementById("content");return{createContainer:function(){const t=document.createElement("div");t.classList.add("container"),e.append(t)},createNav:function(){const t=document.createElement("nav"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");n.id="home",a.id="menu",o.id="contact",n.textContent="home",a.textContent="menu",o.textContent="contact",n.classList.add("nav-item","active"),a.classList.add("nav-item"),o.classList.add("nav-item"),t.append(n),t.append(a),t.append(o),e.append(t)},createFooter:function(){const t=document.createElement("footer");e.append(t),[{text:"Facebook",href:"http://facebook.com"},{text:"Instagram",href:"http://instagram.com"},{text:"YouTube",href:"http://YouTube.com"}].forEach((e=>{const n=document.createElement("a");n.target="_blank",n.href=e.href,n.textContent=e.text,n.classList.add("footer-item"),t.append(n)}))}}})();function f(e){const t=document.querySelector(".container");document.querySelectorAll("nav div").forEach((e=>{e.classList.remove("active")})),"home"==e.target.id&&(t.innerHTML="",e.target.classList.add("active"),m()),"menu"==e.target.id&&(t.innerHTML="",e.target.classList.add("active"),document.querySelector(".container").innerHTML="",c.menuItems=[],c.addPlate(i),c.addPlate(s),c.addPlate(d),c.addPlate(l),c.addPlate(u),c.addPlate(p),c.populateMenu()),"contact"==e.target.id&&(t.innerHTML="",e.target.classList.add("active"),function(){const e=document.querySelector(".container"),t=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),c=document.createElement("p"),i=document.createElement("p");t.classList.add("contact-box"),a.classList.add("title"),c.classList.add("title"),n.textContent="Onion Delights",a.textContent="Visit us:",o.textContent="666 Onionstreet",r.textContent="Onionville CA 98765-8765",c.textContent="Reservations:",i.textContent="+1 250 555 0199",t.append(n),t.append(a),t.append(o),t.append(r),t.append(c),t.append(i),e.append(t)}())}h.createNav(),h.createContainer(),h.createFooter(),m(),document.querySelectorAll("nav").forEach((e=>{e.addEventListener("click",f)}))})();
//# sourceMappingURL=bundle.1dfa464d38ec8929561a.js.map