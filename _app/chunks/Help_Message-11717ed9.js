import{S as s,i as t,s as a,e,k as r,t as n,c,a as o,n as l,g as i,d as u,b as h,W as p,f as d,K as f,h as m,l as v,E as x,j as $,m as g,o as w,v as E,r as q,w as N}from"./vendor-d5b80465.js";function S(s){let t,a,v,x,$,g=s[1]&&b(s);return{c(){t=e("div"),a=e("div"),v=e("span"),g&&g.c(),x=r(),$=n(s[0]),this.h()},l(e){t=c(e,"DIV",{class:!0,style:!0});var r=o(t);a=c(r,"DIV",{class:!0});var n=o(a);v=c(n,"SPAN",{});var h=o(v);g&&g.l(h),x=l(h),$=i(h,s[0]),h.forEach(u),n.forEach(u),r.forEach(u),this.h()},h(){h(a,"class","wrapper svelte-v7q2w8"),h(t,"class","message svelte-v7q2w8"),p(t,"--color",s[2])},m(s,e){d(s,t,e),f(t,a),f(a,v),g&&g.m(v,null),f(v,x),f(v,$)},p(s,a){s[1]?g?g.p(s,a):(g=b(s),g.c(),g.m(v,x)):g&&(g.d(1),g=null),1&a&&m($,s[0]),4&a&&p(t,"--color",s[2])},d(s){s&&u(t),g&&g.d()}}}function b(s){let t,a;return{c(){t=e("span"),a=n(s[1]),this.h()},l(e){t=c(e,"SPAN",{class:!0});var r=o(t);a=i(r,s[1]),r.forEach(u),this.h()},h(){h(t,"class","icon svelte-v7q2w8")},m(s,e){d(s,t,e),f(t,a)},p(s,t){2&t&&m(a,s[1])},d(s){s&&u(t)}}}function j(s){let t,a=s[0]&&S(s);return{c(){a&&a.c(),t=v()},l(s){a&&a.l(s),t=v()},m(s,e){a&&a.m(s,e),d(s,t,e)},p(s,[e]){s[0]?a?a.p(s,e):(a=S(s),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:x,o:x,d(s){a&&a.d(s),s&&u(t)}}}function A(s,t,a){let{text:e}=t,{icon:r=null}=t,{color:n="var(--tint)"}=t;return s.$$set=s=>{"text"in s&&a(0,e=s.text),"icon"in s&&a(1,r=s.icon),"color"in s&&a(2,n=s.color)},[e,r,n]}class D extends s{constructor(s){super(),t(this,s,A,j,a,{text:0,icon:1,color:2})}}function I(s){let t,a;return t=new D({props:{text:s[0],icon:"ⓘ",color:"var(--help_color)"}}),{c(){$(t.$$.fragment)},l(s){g(t.$$.fragment,s)},m(s,e){w(t,s,e),a=!0},p(s,[a]){const e={};1&a&&(e.text=s[0]),t.$set(e)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){q(t.$$.fragment,s),a=!1},d(s){N(t,s)}}}function P(s,t,a){let{text:e}=t;return s.$$set=s=>{"text"in s&&a(0,e=s.text)},[e]}class V extends s{constructor(s){super(),t(this,s,P,I,a,{text:0})}}export{V as H,D as M};
