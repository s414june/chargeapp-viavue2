"use strict";(self["webpackChunkcharge_app_via_vue"]=self["webpackChunkcharge_app_via_vue"]||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return i}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=e=>{let t,n,i,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=()=>void 0!==t&&null!==t.parentElement,E=e=>{p=(0,o.q)(e),_(e)},w=e=>{p=(0,o.q)(e),b(e)},g=e=>{const t=(0,o.q)(e)-u;p<t&&_(e)},k=e=>{const t=(0,o.q)(e)-u;p<t&&b(e)},q=e=>{b(e)},T=()=>{clearTimeout(v),v=void 0,n&&(y(!1),n=void 0)},_=e=>{n||m()||(t=void 0,S(s(e),e))},b=e=>{S(void 0,e)},S=(e,t)=>{if(e&&e===n)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,o.p)(t);if(n){if(h.has(n))throw new Error("internal error");n.classList.contains(c)||C(n,i,s),y(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e));const n=a(e)?0:d;e.classList.remove(c),v=setTimeout((()=>{C(e,i,s),v=void 0}),n)}n=e},C=(e,t,n)=>{f=Date.now(),e.classList.add(c);const o=L&&r(e);o&&o.addRipple&&(R(),i=o.addRipple(t,n))},R=()=>{void 0!==i&&(i.then((e=>e())),i=void 0)},y=e=>{R();const t=n;if(!t)return;const o=l-Date.now()+f;if(e&&o>0&&!a(t)){const e=setTimeout((()=>{t.classList.remove(c),h.delete(t)}),l);h.set(t,e)}else t.classList.remove(c)},x=document;x.addEventListener("ionScrollStart",(e=>{t=e.target,T()})),x.addEventListener("ionScrollEnd",(()=>{t=void 0})),x.addEventListener("ionGestureCaptured",T),x.addEventListener("touchstart",E,!0),x.addEventListener("touchcancel",w,!0),x.addEventListener("touchend",w,!0),x.addEventListener("mousedown",g,!0),x.addEventListener("mouseup",k,!0),x.addEventListener("contextmenu",q,!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.16722e48.js.map