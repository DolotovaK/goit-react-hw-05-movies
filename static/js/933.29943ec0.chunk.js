"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[933],{933:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t,i=r(439),s=r(168),a=r(128),c=r(184),o=r(87).Link,l=(0,r(444).default)(o)(t||(t=(0,s.Z)(["\ndisplay: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: orangered;\n  }\n  "])));function u(e){var n=e.to,r=e.children;return(0,c.jsxs)(l,{to:n,children:[(0,c.jsx)(a.kWt,{size:"24"}),r]})}var d=r(791),p=r(87),h=r(689),x=r(414);function f(){var e,n,r=(0,h.UO)().id,t=(0,d.useState)({}),s=(0,i.Z)(t,2),a=s[0],o=s[1],l=(0,d.useState)(null),f=(0,i.Z)(l,2),v=f[0],j=f[1],g=null!==(e=null===(n=(0,h.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,d.useEffect)((function(){(0,x.TP)(r).then((function(e){return o(e)})).catch((function(e){return j(e)}))}),[r]);var k=a.poster_path,m=a.title,w=a.vote_average,b=a.overview,y=a.genres;return(0,c.jsxs)("main",{children:[v&&(0,c.jsxs)("p",{children:[v.message,"! Please reload the page."]}),(0,c.jsx)(u,{to:g,children:"Go Back"}),!v&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{style:{display:"flex",gap:"50px",margin:"16px 0"},children:[(0,c.jsx)("img",{src:null!==k?"https://image.tmdb.org/t/p/w500"+k:"https://via.placeholder.com/300x450",alt:m,width:"300",loading:"lazy"}),(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:m}),(0,c.jsxs)("p",{children:["User score: ",Number(w).toFixed(1)]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{children:b})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("p",{children:y&&y.length?y.map((function(e){return e.name})).join(", "):"There are no known genres"})]})]})]}),(0,c.jsx)("div",{style:{margin:"16px 0",borderBottom:"1px solid black",borderTop:"1px solid black"},children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(p.Link,{to:"cast",children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(p.Link,{to:"reviews",children:"Reviews"})})]})})]}),(0,c.jsx)(d.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading subpage..."}),children:(0,c.jsx)(h.j3,{})})]})}},414:function(e,n,r){r.d(n,{BD:function(){return u},Df:function(){return o},TP:function(){return p}});var t=r(861),i=r(757),s=r.n(i),a="958b0b84a8c5fc6fca7bdd68332f6832",c="https://api.themoviedb.org/3/";function o(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"trending/movie/day?page=1&api_key=").concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Failed");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"search/movie?query=").concat(n,"&page=1&&api_key=").concat(a));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Failed");case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"movie/").concat(n,"?&api_key=").concat(a));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Fail");case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=933.29943ec0.chunk.js.map