import{S as t,i as e,s,e as n,c as a,a as l,d as r,b as c,f as h,D as o,E as p,l as u,F as f,G as i,H as d,I as $,k as m,n as g,J as v,K as E,v as N,r as w,L as x,t as y,g as k,M as A,h as _,j,m as I,o as T,w as b,N as M,O as D}from"../chunks/vendor-779d85bc.js";import{p as F,s as L}from"../chunks/stores-198593fe.js";import{g as V}from"../chunks/icons-b23422f6.js";function H(t){let e,s,u;return{c(){e=n("button"),this.h()},l(t){e=a(t,"BUTTON",{class:!0}),l(e).forEach(r),this.h()},h(){c(e,"class","svelte-1hxr9va")},m(n,a){h(n,e,a),s||(u=o(e,"click",t[4]),s=!0)},p:p,d(t){t&&r(e),s=!1,u()}}}function K(t){let e,s,n,a=t[2]&&H(t);return{c(){a&&a.c(),e=u()},l(t){a&&a.l(t),e=u()},m(l,r){a&&a.m(l,r),h(l,e,r),s||(n=o(window,"keydown",(function(){f(t[1]?t[3]:void 0)&&(t[1]?t[3]:void 0).apply(this,arguments)})),s=!0)},p(s,[n]){(t=s)[2]?a?a.p(t,n):(a=H(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:p,o:p,d(t){a&&a.d(t),t&&r(e),s=!1,n()}}}function O(t,e,s){let n,a=p,l=()=>(a(),a=i(r,(t=>s(2,n=t))),r);t.$$.on_destroy.push((()=>a()));let{devmode:r}=e;l();let{auto:c=!0}=e;return t.$$set=t=>{"devmode"in t&&l(s(0,r=t.devmode)),"auto"in t&&s(1,c=t.auto)},[r,c,n,t=>{t.target instanceof HTMLElement&&(t=>{const{tagName:e}=t;return"INPUT"===e||"TEXTAREA"===e||"true"===t.contentEditable})(t.target)||"`"===t.key&&d(r,n=!n,n)},()=>d(r,n=!n,n)]}class U extends t{constructor(t){super(),e(this,t,O,K,s,{devmode:0,auto:1})}}function z(t,e,s){const n=t.slice();return n[7]=e[s],n}function B(t){let e,s;return{c(){e=n("div"),s=y("/"),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=l(e);s=k(n,"/"),n.forEach(r),this.h()},h(){c(e,"class","separator svelte-1hgp2f5")},m(t,n){h(t,e,n),v(e,s)},p:p,d(t){t&&r(e)}}}function G(t){let e,s,o,p=t[7].name+"";return{c(){e=n("a"),s=y(p),this.h()},l(t){e=a(t,"A",{href:!0});var n=l(e);s=k(n,p),n.forEach(r),this.h()},h(){c(e,"href",o=t[7].path),A(e,"selected",t[7].path===t[0])},m(t,n){h(t,e,n),v(e,s)},p(t,n){2&n&&p!==(p=t[7].name+"")&&_(s,p),2&n&&o!==(o=t[7].path)&&c(e,"href",o),3&n&&A(e,"selected",t[7].path===t[0])},d(t){t&&r(e)}}}function J(t){let e;function s(t,e){return"space"===t[7].type?G:B}let n=s(t),a=n(t);return{c(){a.c(),e=u()},l(t){a.l(t),e=u()},m(t,s){a.m(t,s),h(t,e,s)},p(t,l){n===(n=s(t))&&a?a.p(t,l):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&r(e)}}}function P(t){let e,s,o;const p=t[4].default,u=$(p,t,t[3],null);let f=t[1],i=[];for(let n=0;n<f.length;n+=1)i[n]=J(z(t,f,n));return{c(){e=n("div"),u&&u.c(),s=m();for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=l(e);u&&u.l(n),s=g(n);for(let e=0;e<i.length;e+=1)i[e].l(n);n.forEach(r),this.h()},h(){c(e,"class","path svelte-1hgp2f5")},m(t,n){h(t,e,n),u&&u.m(e,null),v(e,s);for(let s=0;s<i.length;s+=1)i[s].m(e,null);o=!0},p(t,[s]){if(u&&u.p&&(!o||8&s)&&E(u,p,t,t[3],o?s:-1,null,null),3&s){let n;for(f=t[1],n=0;n<f.length;n+=1){const a=z(t,f,n);i[n]?i[n].p(a,s):(i[n]=J(a),i[n].c(),i[n].m(e,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=f.length}},i(t){o||(N(u,t),o=!0)},o(t){w(u,t),o=!1},d(t){t&&r(e),u&&u.d(t),x(i,t)}}}function R(t,e,s){let n,{$$slots:a={},$$scope:l}=e,{path:r}=e,{selected_path:c=null}=e;const h=new Map;return t.$$set=t=>{"path"in t&&s(2,r=t.path),"selected_path"in t&&s(0,c=t.selected_path),"$$scope"in t&&s(3,l=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(1,n=(t=>{if(h.has(t))return h.get(t);let e=[];const s=(t=>t.split("/").filter((t=>t&&"."!==t&&".."!==t)))(t),n=s[s.length-1];let a="";for(const l of s)a+="/",a+=l,e.push({type:"space",name:l,path:a}),l!==n&&e.push({type:"spacer",path:a});return h.set(t,e),e})(r))},[c,n,r,l,a]}class S extends t{constructor(t){super(),e(this,t,R,P,s,{path:2,selected_path:0})}}function X(t){let e,s;return{c(){e=n("a"),s=y(V),this.h()},l(t){e=a(t,"A",{href:!0,class:!0});var n=l(e);s=k(n,V),n.forEach(r),this.h()},h(){c(e,"href","/"),c(e,"class","heart svelte-1384jp2")},m(t,n){h(t,e,n),v(e,s)},p:p,d(t){t&&r(e)}}}function q(t){let e,s;return{c(){e=n("a"),s=y("Felt.dev"),this.h()},l(t){e=a(t,"A",{href:!0,class:!0});var n=l(e);s=k(n,"Felt.dev"),n.forEach(r),this.h()},h(){c(e,"href","/"),c(e,"class","selected")},m(t,n){h(t,e,n),v(e,s)},p:p,d(t){t&&r(e)}}}function C(t){let e;function s(t,e){return"/"===t[0].path?q:X}let n=s(t),a=n(t);return{c(){a.c(),e=u()},l(t){a.l(t),e=u()},m(t,s){a.m(t,s),h(t,e,s)},p(t,l){n===(n=s(t))&&a?a.p(t,l):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&r(e)}}}function Q(t){let e,s,o;return s=new S({props:{path:t[0].path,selected_path:t[0].path,$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){e=n("nav"),j(s.$$.fragment),this.h()},l(t){e=a(t,"NAV",{class:!0});var n=l(e);I(s.$$.fragment,n),n.forEach(r),this.h()},h(){c(e,"class","svelte-1384jp2")},m(t,n){h(t,e,n),T(s,e,null),o=!0},p(t,[e]){const n={};1&e&&(n.path=t[0].path),1&e&&(n.selected_path=t[0].path),3&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){o||(N(s.$$.fragment,t),o=!0)},o(t){w(s.$$.fragment,t),o=!1},d(t){t&&r(e),b(s)}}}function W(t,e,s){let n;return M(t,F,(t=>s(0,n=t))),[n]}class Y extends t{constructor(t){super(),e(this,t,W,Q,s,{})}}function Z(t){let e,s,o,p,u,f,i,d;o=new Y({});const x=t[2].default,y=$(x,t,t[1],null);return i=new U({props:{devmode:t[0]}}),{c(){e=n("link"),s=m(),j(o.$$.fragment),p=m(),u=n("main"),y&&y.c(),f=m(),j(i.$$.fragment),this.h()},l(t){const n=D('[data-svelte="svelte-19xe511"]',document.head);e=a(n,"LINK",{rel:!0,href:!0}),n.forEach(r),s=g(t),I(o.$$.fragment,t),p=g(t),u=a(t,"MAIN",{class:!0});var c=l(u);y&&y.l(c),c.forEach(r),f=g(t),I(i.$$.fragment,t),this.h()},h(){c(e,"rel","shortcut icon"),c(e,"href","/favicon.png"),c(u,"class","svelte-18lfgwz")},m(t,n){v(document.head,e),h(t,s,n),T(o,t,n),h(t,p,n),h(t,u,n),y&&y.m(u,null),h(t,f,n),T(i,t,n),d=!0},p(t,[e]){y&&y.p&&(!d||2&e)&&E(y,x,t,t[1],d?e:-1,null,null)},i(t){d||(N(o.$$.fragment,t),N(y,t),N(i.$$.fragment,t),d=!0)},o(t){w(o.$$.fragment,t),w(y,t),w(i.$$.fragment,t),d=!1},d(t){r(e),t&&r(s),b(o,t),t&&r(p),t&&r(u),y&&y.d(t),t&&r(f),b(i,t)}}}function tt(t,e,s){let{$$slots:n={},$$scope:a}=e;const l=L(!1);return t.$$set=t=>{"$$scope"in t&&s(1,a=t.$$scope)},[l,a,n]}export default class extends t{constructor(t){super(),e(this,t,tt,Z,s,{})}}
