"use strict";(self["webpackChunkcharge_app_via_vue"]=self["webpackChunkcharge_app_via_vue"]||[]).push([[775],{775:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return L}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?a(e,t,o):l(e,t))},s=e=>e===e.getRootNode().activeElement,a=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const s=e.ownerDocument,a="rtl"===s.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c=(e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{s(t)&&i(e,t,n)},a=()=>i(e,t,!1),l=()=>r(!0),c=()=>r(!1);return(0,o.a)(n,"ionScrollStart",l),(0,o.a)(n,"ionScrollEnd",c),t.addEventListener("blur",a),()=>{(0,o.b)(n,"ionScrollStart",l),(0,o.b)(n,"ionScrollEnd",c),t.addEventListener("ionBlur",a)}},d="input, textarea, [no-blur], [contenteditable]",u=()=>{let e=!0,t=!1;const n=document,r=()=>{t=!0},i=()=>{e=!0},s=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(d))return;const i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};return(0,o.a)(n,"ionScrollStart",r),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",s,!1),()=>{(0,o.b)(n,"ionScrollStart",r,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",s,!1)}},m=.3,f=(e,t,n)=>{const o=e.closest("ion-item,[ion-item]")||e;return p(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},p=(e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=Math.min(t.bottom,o-n),l=s+15,c=.75*a,d=c-i,u=l-r,f=Math.round(d<0?-d:u>0?-u:0),p=Math.min(f,r-s),v=Math.abs(p),h=v/m,E=Math.min(400,Math.max(150,h));return{scrollAmount:p,scrollDuration:E,scrollPadding:n,inputSafeY:4-(r-l)}},v=(e,t,n,r,i)=>{let a;const l=e=>{a=(0,o.p)(e)},c=l=>{if(!a)return;const c=(0,o.p)(l);E(6,a,c)||s(t)||(l.stopPropagation(),h(e,t,n,r,i))};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}},h=async(e,t,n,r,s)=>{if(!n&&!r)return;const a=f(e,n||r,s);if(n&&Math.abs(a.scrollAmount)<4)t.focus();else if(i(e,t,!0,a.inputSafeY),t.focus(),(0,o.r)((()=>e.click())),"undefined"!==typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),n&&await n.scrollByPoint(0,a.scrollAmount,a.scrollDuration),i(e,t,!1,a.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await n.getScrollElement(),i=e.scrollHeight-e.clientHeight;if(a.scrollAmount>i-e.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}},E=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},w="$ionPaddingTimer",g=e=>{const t=document,n=t=>{y(t.target,e)},o=e=>{y(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),()=>{t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},y=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n[w];o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n[w]=setTimeout((()=>{n.style.setProperty("--keyboard-offset","0px")}),120)},S=!0,b=!0,L=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),a=e.getBoolean("scrollPadding",!0),l=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,m=new WeakMap,f=async e=>{await new Promise((t=>(0,o.c)(e,t)));const t=e.shadowRoot||e,s=t.querySelector("input")||t.querySelector("textarea"),a=e.closest("ion-content"),l=a?null:e.closest("ion-footer");if(s){if(a&&i&&!d.has(e)){const t=c(e,s,a);d.set(e,t)}if((a||l)&&r&&!m.has(e)){const t=v(e,s,a,l,n);m.set(e,t)}}},p=e=>{if(i){const t=d.get(e);t&&t(),d.delete(e)}if(r){const t=m.get(e);t&&t(),m.delete(e)}};s&&S&&u(),a&&b&&g(n);for(const o of l)f(o);t.addEventListener("ionInputDidLoad",(e=>{f(e.detail)})),t.addEventListener("ionInputDidUnload",(e=>{p(e.detail)}))}}}]);
//# sourceMappingURL=775.01575b93.js.map