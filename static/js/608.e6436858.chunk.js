"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{608:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),a=n(791),c=n(689);var i=n(184);function s(){var e=(0,c.UO)().id,t=(0,a.useState)([]),n=(0,r.Z)(t,2),s=n[0],o=n[1],u=(0,a.useState)(null),l=(0,r.Z)(u,2),f=l[0],h=l[1];(0,a.useEffect)((function(){(function(e){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/credits?&api_key=").concat("958b0b84a8c5fc6fca7bdd68332f6832")).then((function(e){if(!e.ok)throw new Error("Fail");return e.json()}))})(e).then((function(e){var t=e.cast;return o(t)})).catch((function(e){return h(e)}))}),[e]);return(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsxs)("p",{children:[f.message,". Please reload the page"]}),(0,i.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",padding:"0",justifyContent:"center",gap:"10px"},children:s.map((function(e){var t=e.id,n=e.name,r=e.profile_path;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:null!==r?"https://image.tmdb.org/t/p/w500"+r:"https://via.placeholder.com/300x450",alt:"name",width:"300",loading:"lazy"}),(0,i.jsx)("p",{children:n})]},t)}))})]})}}}]);
//# sourceMappingURL=608.e6436858.chunk.js.map