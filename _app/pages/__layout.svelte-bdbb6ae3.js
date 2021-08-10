import{S as t,i as e,s,e as n,c as a,a as r,d as l,b as c,f as o,D as h,E as i,l as u,F as p,G as d,H as f,I as $,J as m,k as g,n as v,K as b,L as E,v as _,r as N,M as w,t as y,g as k,N as x,h as A,j,m as I,o as T,w as M,O as D,P as F}from"../chunks/vendor-00f3fcd3.js";import{s as L}from"../chunks/devmode-5b8c57d7.js";import{g as V}from"../chunks/icons-dd67c916.js";function H(t){let e,s,u;return{c(){e=n("button"),this.h()},l(t){e=a(t,"BUTTON",{class:!0}),r(e).forEach(l),this.h()},h(){c(e,"class","svelte-1rcgrl8")},m(n,a){o(n,e,a),s||(u=h(e,"click",t[4]),s=!0)},p:i,d(t){t&&l(e),s=!1,u()}}}function K(t){let e,s,n,a=t[2]&&H(t);return{c(){a&&a.c(),e=u()},l(t){a&&a.l(t),e=u()},m(r,l){a&&a.m(r,l),o(r,e,l),s||(n=h(window,"keydown",(function(){p(t[1]?t[3]:void 0)&&(t[1]?t[3]:void 0).apply(this,arguments)})),s=!0)},p(s,[n]){(t=s)[2]?a?a.p(t,n):(a=H(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:i,o:i,d(t){a&&a.d(t),t&&l(e),s=!1,n()}}}function O(t,e,s){let n,a=i,r=()=>(a(),a=d(l,(t=>s(2,n=t))),l);t.$$.on_destroy.push((()=>a()));let{devmode:l}=e;r();let{auto:c=!0}=e;return t.$$set=t=>{"devmode"in t&&r(s(0,l=t.devmode)),"auto"in t&&s(1,c=t.auto)},[l,c,n,t=>{t.target instanceof HTMLElement&&(t=>{const{tagName:e}=t;return"INPUT"===e||"TEXTAREA"===e||"true"===t.contentEditable})(t.target)||"`"===t.key&&f(l,n=!n,n)},()=>f(l,n=!n,n)]}class P extends t{constructor(t){super(),e(this,t,O,K,s,{devmode:0,auto:1})}}const U={subscribe:t=>(()=>{const t=$("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}})().page.subscribe(t)};function z(t,e,s){const n=t.slice();return n[7]=e[s],n}function B(t){let e,s;return{c(){e=n("div"),s=y("/"),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);s=k(n,"/"),n.forEach(l),this.h()},h(){c(e,"class","separator svelte-1hgp2f5")},m(t,n){o(t,e,n),b(e,s)},p:i,d(t){t&&l(e)}}}function G(t){let e,s,h,i=t[7].name+"";return{c(){e=n("a"),s=y(i),this.h()},l(t){e=a(t,"A",{href:!0});var n=r(e);s=k(n,i),n.forEach(l),this.h()},h(){c(e,"href",h=t[7].path),x(e,"selected",t[7].path===t[0])},m(t,n){o(t,e,n),b(e,s)},p(t,n){2&n&&i!==(i=t[7].name+"")&&A(s,i),2&n&&h!==(h=t[7].path)&&c(e,"href",h),3&n&&x(e,"selected",t[7].path===t[0])},d(t){t&&l(e)}}}function J(t){let e;function s(t,e){return"space"===t[7].type?G:B}let n=s(t),a=n(t);return{c(){a.c(),e=u()},l(t){a.l(t),e=u()},m(t,s){a.m(t,s),o(t,e,s)},p(t,r){n===(n=s(t))&&a?a.p(t,r):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&l(e)}}}function R(t){let e,s,h;const i=t[4].default,u=m(i,t,t[3],null);let p=t[1],d=[];for(let n=0;n<p.length;n+=1)d[n]=J(z(t,p,n));return{c(){e=n("div"),u&&u.c(),s=g();for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);u&&u.l(n),s=v(n);for(let e=0;e<d.length;e+=1)d[e].l(n);n.forEach(l),this.h()},h(){c(e,"class","path svelte-1hgp2f5")},m(t,n){o(t,e,n),u&&u.m(e,null),b(e,s);for(let s=0;s<d.length;s+=1)d[s].m(e,null);h=!0},p(t,[s]){if(u&&u.p&&(!h||8&s)&&E(u,i,t,t[3],h?s:-1,null,null),3&s){let n;for(p=t[1],n=0;n<p.length;n+=1){const a=z(t,p,n);d[n]?d[n].p(a,s):(d[n]=J(a),d[n].c(),d[n].m(e,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=p.length}},i(t){h||(_(u,t),h=!0)},o(t){N(u,t),h=!1},d(t){t&&l(e),u&&u.d(t),w(d,t)}}}function S(t,e,s){let n,{$$slots:a={},$$scope:r}=e,{path:l}=e,{selected_path:c=null}=e;const o=new Map;return t.$$set=t=>{"path"in t&&s(2,l=t.path),"selected_path"in t&&s(0,c=t.selected_path),"$$scope"in t&&s(3,r=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(1,n=(t=>{if(o.has(t))return o.get(t);let e=[];const s=(t=>t.split("/").filter((t=>t&&"."!==t&&".."!==t)))(t),n=s[s.length-1];let a="";for(const r of s)a+="/",a+=r,e.push({type:"space",name:r,path:a}),r!==n&&e.push({type:"spacer",path:a});return o.set(t,e),e})(l))},[c,n,l,r,a]}class X extends t{constructor(t){super(),e(this,t,S,R,s,{path:2,selected_path:0})}}function q(t){let e,s;return{c(){e=n("a"),s=y(V),this.h()},l(t){e=a(t,"A",{href:!0,class:!0});var n=r(e);s=k(n,V),n.forEach(l),this.h()},h(){c(e,"href","/"),c(e,"class","heart svelte-1384jp2")},m(t,n){o(t,e,n),b(e,s)},p:i,d(t){t&&l(e)}}}function C(t){let e,s;return{c(){e=n("a"),s=y("Felt.dev"),this.h()},l(t){e=a(t,"A",{href:!0,class:!0});var n=r(e);s=k(n,"Felt.dev"),n.forEach(l),this.h()},h(){c(e,"href","/"),c(e,"class","selected")},m(t,n){o(t,e,n),b(e,s)},p:i,d(t){t&&l(e)}}}function Q(t){let e;function s(t,e){return"/"===t[0].path?C:q}let n=s(t),a=n(t);return{c(){a.c(),e=u()},l(t){a.l(t),e=u()},m(t,s){a.m(t,s),o(t,e,s)},p(t,r){n===(n=s(t))&&a?a.p(t,r):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&l(e)}}}function W(t){let e,s,h;return s=new X({props:{path:t[0].path,selected_path:t[0].path,$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){e=n("nav"),j(s.$$.fragment),this.h()},l(t){e=a(t,"NAV",{class:!0});var n=r(e);I(s.$$.fragment,n),n.forEach(l),this.h()},h(){c(e,"class","svelte-1384jp2")},m(t,n){o(t,e,n),T(s,e,null),h=!0},p(t,[e]){const n={};1&e&&(n.path=t[0].path),1&e&&(n.selected_path=t[0].path),3&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){h||(_(s.$$.fragment,t),h=!0)},o(t){N(s.$$.fragment,t),h=!1},d(t){t&&l(e),M(s)}}}function Y(t,e,s){let n;return D(t,U,(t=>s(0,n=t))),[n]}class Z extends t{constructor(t){super(),e(this,t,Y,W,s,{})}}function tt(t){let e,s,h,i,u,p,d,f;h=new Z({});const $=t[2].default,w=m($,t,t[1],null);return d=new P({props:{devmode:t[0]}}),{c(){e=n("link"),s=g(),j(h.$$.fragment),i=g(),u=n("main"),w&&w.c(),p=g(),j(d.$$.fragment),this.h()},l(t){const n=F('[data-svelte="svelte-19xe511"]',document.head);e=a(n,"LINK",{rel:!0,href:!0}),n.forEach(l),s=v(t),I(h.$$.fragment,t),i=v(t),u=a(t,"MAIN",{class:!0});var c=r(u);w&&w.l(c),c.forEach(l),p=v(t),I(d.$$.fragment,t),this.h()},h(){c(e,"rel","shortcut icon"),c(e,"href","/favicon.png"),c(u,"class","svelte-18lfgwz")},m(t,n){b(document.head,e),o(t,s,n),T(h,t,n),o(t,i,n),o(t,u,n),w&&w.m(u,null),o(t,p,n),T(d,t,n),f=!0},p(t,[e]){w&&w.p&&(!f||2&e)&&E(w,$,t,t[1],f?e:-1,null,null)},i(t){f||(_(h.$$.fragment,t),_(w,t),_(d.$$.fragment,t),f=!0)},o(t){N(h.$$.fragment,t),N(w,t),N(d.$$.fragment,t),f=!1},d(t){l(e),t&&l(s),M(h,t),t&&l(i),t&&l(u),w&&w.d(t),t&&l(p),M(d,t)}}}function et(t,e,s){let{$$slots:n={},$$scope:a}=e;const r=L(!1);return t.$$set=t=>{"$$scope"in t&&s(1,a=t.$$scope)},[r,a,n]}export default class extends t{constructor(t){super(),e(this,t,et,tt,s,{})}}
