import{s as x,n as b}from"../chunks/scheduler.D4RpAn30.js";import{S as G,i as N,s as v,e as h,r as y,v as H,h as R,d as _,b as P,a as k,p as j,u as $,l as u,k as g,t as B,n as E,g as L,c as T,f as w,m as M,o as O}from"../chunks/index.DhDxpWlc.js";import{P as z,a as A}from"../chunks/Pagination.DwHLO9WL.js";function D(l){let e,o,n="Ope!",i,t,c,f,s,d='<a href="/blog">Back to blog</a>';return{c(){e=h("p"),o=h("strong"),o.textContent=n,i=y(` Sorry, couldn't find any posts in the category "`),t=y(l[2]),c=y('".'),f=v(),s=h("p"),s.innerHTML=d},l(r){e=k(r,"P",{});var p=j(e);o=k(p,"STRONG",{"data-svelte-h":!0}),L(o)!=="svelte-4xjsnl"&&(o.textContent=n),i=$(p,` Sorry, couldn't find any posts in the category "`),t=$(p,l[2]),c=$(p,'".'),p.forEach(_),f=P(r),s=k(r,"P",{"data-svelte-h":!0}),L(s)!=="svelte-79gs32"&&(s.innerHTML=d)},m(r,p){u(r,e,p),g(e,o),g(e,i),g(e,t),g(e,c),u(r,f,p),u(r,s,p)},p:b,i:b,o:b,d(r){r&&(_(e),_(f),_(s))}}}function F(l){let e,o,n,i;return e=new z({props:{posts:l[1]}}),n=new A({props:{currentPage:l[0],totalPosts:l[3],path:"/blog/category/"+l[2]+"/page"}}),{c(){T(e.$$.fragment),o=v(),T(n.$$.fragment)},l(t){w(e.$$.fragment,t),o=P(t),w(n.$$.fragment,t)},m(t,c){M(e,t,c),u(t,o,c),M(n,t,c),i=!0},p:b,i(t){i||(B(e.$$.fragment,t),B(n.$$.fragment,t),i=!0)},o(t){E(e.$$.fragment,t),E(n.$$.fragment,t),i=!1},d(t){t&&_(o),O(e,t),O(n,t)}}}function I(l){let e,o,n,i,t,c,f,s,d,r;document.title=e="Category: "+l[2];const p=[F,D],C=[];function q(a,m){return a[1].length?0:1}return f=q(l),s=C[f]=p[f](l),{c(){o=v(),n=h("h1"),i=y("Blog category: "),t=y(l[2]),c=v(),s.c(),d=H()},l(a){R("svelte-2blklu",document.head).forEach(_),o=P(a),n=k(a,"H1",{});var S=j(n);i=$(S,"Blog category: "),t=$(S,l[2]),S.forEach(_),c=P(a),s.l(a),d=H()},m(a,m){u(a,o,m),u(a,n,m),g(n,i),g(n,t),u(a,c,m),C[f].m(a,m),u(a,d,m),r=!0},p(a,[m]){(!r||m&4)&&e!==(e="Category: "+a[2])&&(document.title=e),s.p(a,m)},i(a){r||(B(s),r=!0)},o(a){E(s),r=!1},d(a){a&&(_(o),_(n),_(c),_(d)),C[f].d(a)}}}function J(l,e,o){let{data:n}=e;const{page:i,posts:t,category:c,total:f}=n;return l.$$set=s=>{"data"in s&&o(4,n=s.data)},[i,t,c,f,n]}class V extends G{constructor(e){super(),N(this,e,J,I,x,{data:4})}}export{V as component};
