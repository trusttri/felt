import{S as e,i as t,s,e as n,c as a,a as r,d as l,b as c,f as o,D as h,E as i,l as p,F as u,G as d,H as f,I as $,k as m,n as g,J as v,K as b,v as _,r as E,L as w,t as k,g as x,M as y,h as N,j as A,m as I,o as j,w as D,N as F,O as M}from"../chunks/vendor-d64bd35b.js";import{s as V}from"../chunks/devmode-d397b7a8.js";import{g as K}from"../chunks/icons-9e7b1813.js";function L(e){let t,s,p;return{c(){t=n("button"),this.h()},l(e){t=a(e,"BUTTON",{class:!0}),r(t).forEach(l),this.h()},h(){c(t,"class","svelte-7f06qe")},m(n,a){o(n,t,a),s||(p=h(t,"click",e[3]),s=!0)},p:i,d(e){e&&l(t),s=!1,p()}}}function O(e){let t,s,n,a=e[1]&&L(e);return{c(){a&&a.c(),t=p()},l(e){a&&a.l(e),t=p()},m(r,l){a&&a.m(r,l),o(r,t,l),s||(n=h(window,"keydown",e[2]),s=!0)},p(e,[s]){e[1]?a?a.p(e,s):(a=L(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:i,o:i,d(e){a&&a.d(e),e&&l(t),s=!1,n()}}}function T(e,t,s){let n,a=i,r=()=>(a(),a=u(l,(e=>s(1,n=e))),l);e.$$.on_destroy.push((()=>a()));let{devmode:l}=t;r();return e.$$set=e=>{"devmode"in e&&r(s(0,l=e.devmode))},[l,n,e=>{"`"===e.key&&d(l,n=!n,n)},()=>d(l,n=!n,n)]}class q extends e{constructor(e){super(),t(this,e,T,O,s,{devmode:0})}}const z={subscribe:e=>(()=>{const e=f("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function B(e,t,s){const n=e.slice();return n[7]=t[s],n}function G(e){let t,s;return{c(){t=n("div"),s=k("/"),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=r(t);s=x(n,"/"),n.forEach(l),this.h()},h(){c(t,"class","separator svelte-1hgp2f5")},m(e,n){o(e,t,n),v(t,s)},p:i,d(e){e&&l(t)}}}function H(e){let t,s,h,i=e[7].name+"";return{c(){t=n("a"),s=k(i),this.h()},l(e){t=a(e,"A",{href:!0});var n=r(t);s=x(n,i),n.forEach(l),this.h()},h(){c(t,"href",h=e[7].path),y(t,"selected",e[7].path===e[0])},m(e,n){o(e,t,n),v(t,s)},p(e,n){2&n&&i!==(i=e[7].name+"")&&N(s,i),2&n&&h!==(h=e[7].path)&&c(t,"href",h),3&n&&y(t,"selected",e[7].path===e[0])},d(e){e&&l(t)}}}function J(e){let t;function s(e,t){return"space"===e[7].type?H:G}let n=s(e),a=n(e);return{c(){a.c(),t=p()},l(e){a.l(e),t=p()},m(e,s){a.m(e,s),o(e,t,s)},p(e,r){n===(n=s(e))&&a?a.p(e,r):(a.d(1),a=n(e),a&&(a.c(),a.m(t.parentNode,t)))},d(e){a.d(e),e&&l(t)}}}function S(e){let t,s,h;const i=e[4].default,p=$(i,e,e[3],null);let u=e[1],d=[];for(let n=0;n<u.length;n+=1)d[n]=J(B(e,u,n));return{c(){t=n("div"),p&&p.c(),s=m();for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=a(e,"DIV",{class:!0});var n=r(t);p&&p.l(n),s=g(n);for(let t=0;t<d.length;t+=1)d[t].l(n);n.forEach(l),this.h()},h(){c(t,"class","path svelte-1hgp2f5")},m(e,n){o(e,t,n),p&&p.m(t,null),v(t,s);for(let s=0;s<d.length;s+=1)d[s].m(t,null);h=!0},p(e,[s]){if(p&&p.p&&(!h||8&s)&&b(p,i,e,e[3],h?s:-1,null,null),3&s){let n;for(u=e[1],n=0;n<u.length;n+=1){const a=B(e,u,n);d[n]?d[n].p(a,s):(d[n]=J(a),d[n].c(),d[n].m(t,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length}},i(e){h||(_(p,e),h=!0)},o(e){E(p,e),h=!1},d(e){e&&l(t),p&&p.d(e),w(d,e)}}}function U(e,t,s){let n,{$$slots:a={},$$scope:r}=t,{path:l}=t,{selected_path:c=null}=t;const o=new Map;return e.$$set=e=>{"path"in e&&s(2,l=e.path),"selected_path"in e&&s(0,c=e.selected_path),"$$scope"in e&&s(3,r=e.$$scope)},e.$$.update=()=>{4&e.$$.dirty&&s(1,n=(e=>{if(o.has(e))return o.get(e);let t=[];const s=(e=>e.split("/").filter((e=>e&&"."!==e&&".."!==e)))(e),n=s[s.length-1];let a="";for(const r of s)a+="/",a+=r,t.push({type:"space",name:r,path:a}),r!==n&&t.push({type:"spacer",path:a});return o.set(e,t),t})(l))},[c,n,l,r,a]}class C extends e{constructor(e){super(),t(this,e,U,S,s,{path:2,selected_path:0})}}function P(e){let t,s;return{c(){t=n("a"),s=k(K),this.h()},l(e){t=a(e,"A",{href:!0,class:!0});var n=r(t);s=x(n,K),n.forEach(l),this.h()},h(){c(t,"href","/"),c(t,"class","heart svelte-1o2dm1n")},m(e,n){o(e,t,n),v(t,s)},p:i,d(e){e&&l(t)}}}function Q(e){let t,s;return{c(){t=n("a"),s=k("Felt.dev"),this.h()},l(e){t=a(e,"A",{href:!0,class:!0});var n=r(t);s=x(n,"Felt.dev"),n.forEach(l),this.h()},h(){c(t,"href","/"),c(t,"class","selected")},m(e,n){o(e,t,n),v(t,s)},p:i,d(e){e&&l(t)}}}function R(e){let t;function s(e,t){return"/"===e[0].path?Q:P}let n=s(e),a=n(e);return{c(){a.c(),t=p()},l(e){a.l(e),t=p()},m(e,s){a.m(e,s),o(e,t,s)},p(e,r){n===(n=s(e))&&a?a.p(e,r):(a.d(1),a=n(e),a&&(a.c(),a.m(t.parentNode,t)))},d(e){a.d(e),e&&l(t)}}}function W(e){let t,s,h;return s=new C({props:{path:e[0].path,selected_path:e[0].path,$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){t=n("nav"),A(s.$$.fragment),this.h()},l(e){t=a(e,"NAV",{class:!0});var n=r(t);I(s.$$.fragment,n),n.forEach(l),this.h()},h(){c(t,"class","svelte-1o2dm1n")},m(e,n){o(e,t,n),j(s,t,null),h=!0},p(e,[t]){const n={};1&t&&(n.path=e[0].path),1&t&&(n.selected_path=e[0].path),3&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){h||(_(s.$$.fragment,e),h=!0)},o(e){E(s.$$.fragment,e),h=!1},d(e){e&&l(t),D(s)}}}function X(e,t,s){let n;return F(e,z,(e=>s(0,n=e))),[n]}class Y extends e{constructor(e){super(),t(this,e,X,W,s,{})}}function Z(e){let t,s,h,i,p,u,d,f;h=new Y({});const w=e[2].default,k=$(w,e,e[1],null);return d=new q({props:{devmode:e[0]}}),{c(){t=n("link"),s=m(),A(h.$$.fragment),i=m(),p=n("main"),k&&k.c(),u=m(),A(d.$$.fragment),this.h()},l(e){const n=M('[data-svelte="svelte-19xe511"]',document.head);t=a(n,"LINK",{rel:!0,href:!0}),n.forEach(l),s=g(e),I(h.$$.fragment,e),i=g(e),p=a(e,"MAIN",{class:!0});var c=r(p);k&&k.l(c),c.forEach(l),u=g(e),I(d.$$.fragment,e),this.h()},h(){c(t,"rel","shortcut icon"),c(t,"href","/favicon.png"),c(p,"class","svelte-18lfgwz")},m(e,n){v(document.head,t),o(e,s,n),j(h,e,n),o(e,i,n),o(e,p,n),k&&k.m(p,null),o(e,u,n),j(d,e,n),f=!0},p(e,[t]){k&&k.p&&(!f||2&t)&&b(k,w,e,e[1],f?t:-1,null,null)},i(e){f||(_(h.$$.fragment,e),_(k,e),_(d.$$.fragment,e),f=!0)},o(e){E(h.$$.fragment,e),E(k,e),E(d.$$.fragment,e),f=!1},d(e){l(t),e&&l(s),D(h,e),e&&l(i),e&&l(p),k&&k.d(e),e&&l(u),D(d,e)}}}function ee(e,t,s){let{$$slots:n={},$$scope:a}=t;const r=V(!1);return e.$$set=e=>{"$$scope"in e&&s(1,a=e.$$scope)},[r,a,n]}export default class extends e{constructor(e){super(),t(this,e,ee,Z,s,{})}}
