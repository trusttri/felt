import{S as s,i as t,n as a,k as e,h as r,l,f as n,o,v as h,r as c,d as f,w as i,e as u,c as m,a as $,b as d,K as p,U as g,u as v,B as k,V as E,t as x,j as b,g as j,m as w,E as y}from"../../chunks/vendor-62d40c72.js";import{M}from"../../chunks/Markup-2508e83c.js";const z=s=>`/sketch/${s}`,A=["onboard","library"].map((s=>({name:s,id:z(s)})));function L(s,t,a){const e=s.slice();return e[0]=t[a],e}function V(s){let t,a,e,r,l=s[0].name+"";return{c(){t=u("li"),a=u("a"),e=x(l),r=b(),this.h()},l(s){t=m(s,"LI",{class:!0});var n=$(t);a=m(n,"A",{href:!0});var o=$(a);e=j(o,l),o.forEach(f),n.forEach(f),r=w(s),this.h()},h(){d(a,"href",s[0].id),d(t,"class","svelte-1shiumz")},m(s,l){n(s,t,l),p(t,a),p(a,e),n(s,r,l)},p:y,d(s){s&&f(t),s&&f(r)}}}function B(s,t){let a,u,m;return u=new M({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),{key:s,first:null,c(){a=e(),r(u.$$.fragment),this.h()},l(s){a=e(),l(u.$$.fragment,s),this.h()},h(){this.first=a},m(s,t){n(s,a,t),o(u,s,t),m=!0},p(s,a){t=s;const e={};8&a&&(e.$$scope={dirty:a,ctx:t}),u.$set(e)},i(s){m||(h(u.$$.fragment,s),m=!0)},o(s){c(u.$$.fragment,s),m=!1},d(s){s&&f(a),i(u,s)}}}function I(s){let t,a,e,r=[],l=new Map,o=A;const i=s=>s[0].name;for(let n=0;n<o.length;n+=1){let t=L(s,o,n),a=i(t);l.set(a,r[n]=B(a,t))}return{c(){t=u("nav"),a=u("ol");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=m(s,"NAV",{});var e=$(t);a=m(e,"OL",{class:!0});var l=$(a);for(let t=0;t<r.length;t+=1)r[t].l(l);l.forEach(f),e.forEach(f),this.h()},h(){d(a,"class","svelte-1shiumz")},m(s,l){n(s,t,l),p(t,a);for(let t=0;t<r.length;t+=1)r[t].m(a,null);e=!0},p(s,[t]){0&t&&(o=A,k(),r=g(r,t,i,1,s,o,l,a,E,B,null,L),v())},i(s){if(!e){for(let s=0;s<o.length;s+=1)h(r[s]);e=!0}},o(s){for(let t=0;t<r.length;t+=1)c(r[t]);e=!1},d(s){s&&f(t);for(let t=0;t<r.length;t+=1)r[t].d()}}}export default class extends s{constructor(s){super(),t(this,s,null,I,a,{})}}
