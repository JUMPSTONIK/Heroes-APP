(this["webpackJsonpheros-spa"]=this["webpackJsonpheros-spa"]||[]).push([[0],{18:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var i=s(5),r=s.n(i),a=(s(18),s(4)),c=s(0),n=s(8),o=s(13),l=s(6),d=Object(c.createContext)({}),h=d.Provider,u=s.p+"static/media/fist.ef1efd00.svg",j=s.p+"static/media/medium-filled-heart.3dfc1f11.svg",b=s.p+"static/media/medium-heart.bcc1eda8.svg",f=s(1),m=function(e){var t={backgroundImage:"url(".concat(e.hero.image,")")},s=Object(c.useContext)(d),i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e;null===(e=i.current)||void 0===e||e.classList.add("animate__animated","animate__fadeIn")}),[]),Object(l.b)((function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{ref:i,className:"card-container ".concat(s.getListOfIds[s.getListOfIds.length-1]===e.hero.id?"liked-recently":""),children:Object(f.jsxs)("div",{className:"card-background",children:[Object(f.jsx)("div",{className:"background-image",style:t}),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)("div",{className:"heroesPicture",children:[Object(f.jsx)("img",{className:"hero",src:e.hero.image,alt:""}),Object(f.jsx)("div",{className:"backgroundFavoriteButton"}),Object(f.jsx)("button",{className:"favorite-button",type:"submit",onClick:function(){var t,r;e.isFavorite||window.scroll(null===(t=i.current)||void 0===t?void 0:t.offsetLeft,null===(r=i.current)||void 0===r?void 0:r.offsetTop);s.handleFavorite(e.hero)},children:Object(f.jsx)("img",{className:e.isFavorite?"mediumHeart-filled":"mediumHeart",src:e.isFavorite?j:b,alt:"little heart"})})]}),Object(f.jsxs)("div",{className:"heroesContent",children:[Object(f.jsx)("div",{className:"heroes-nickname",children:e.hero.name}),Object(f.jsxs)("div",{className:"realName",children:["Real Name: ",e.hero.realName]}),Object(f.jsxs)("div",{className:"rank-space",children:[Object(f.jsx)("img",{className:"fist",src:u,alt:"fist of ranking"}),Object(f.jsxs)("div",{className:"rank",children:[Object(f.jsx)("strong",{children:e.hero.powerStat})," / 10"]})]})]})]})]})})})}))},g=function(e){var t=Object(c.useState)({height:0,width:0}),s=Object(a.a)(t,2),i=s[0],r=s[1],l=Object(c.useMemo)((function(){return e.listOfDataCards.map((function(e){return Object(f.jsx)(m,{hero:e,isFavorite:!1},e.id.toString())}))}),[e]),d=Object(c.useRef)(null);Object(c.useEffect)((function(){var e,t;r({height:null===(e=d.current)||void 0===e?void 0:e.offsetHeight,width:null===(t=d.current)||void 0===t?void 0:t.offsetWidth})}),[]);var h=Object(c.useMemo)((function(){return Math.trunc((i.width-22)/336)}),[i.width]),u=Object(c.useMemo)((function(){return 0===i.width?0:Math.trunc(l.length/Math.trunc(i.width/336))}),[i.width,l.length]);Object(c.useEffect)((function(){var e=function(){var e,t;r({height:null===(e=d.current)||void 0===e?void 0:e.offsetHeight,width:null===(t=d.current)||void 0===t?void 0:t.offsetWidth})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{ref:d,className:"list-heroes-section",children:Object(f.jsx)(o.a,{className:"grid-conteiner",columnCount:h>0?h:1,columnWidth:336,height:Math.trunc(i.height)!==1/0?Math.trunc(i.height):window.innerHeight,rowCount:u>0?u+1:l.length,rowHeight:222,width:Math.trunc(i.width*(i.width/(336*(h-3)))),style:{width:""},children:function(e){var t=e.columnIndex,s=e.rowIndex,r=e.style;return Object(f.jsx)("div",{style:Object(n.a)(Object(n.a)({},r),{},{width:"".concat(Math.trunc(i.width*(i.width/(336*h))))}),children:l[s*h+t]})}})})})},O=s(9),v=function(e){var t=Math.trunc(.9*window.innerWidth/317);return Object(f.jsxs)(O.a,{height:"general"!==e.section?400:550,speed:2,backgroundColor:"#6A4DBC",foregroundColor:"#ecebeb",style:{width:"100%"},children:[Object(f.jsx)("rect",{x:"16",y:"60",rx:"5",ry:"5",width:"200",height:"42"}),new Array(t).fill(" ").map((function(e,t){return Object(f.jsx)("rect",{x:"".concat(333*t+70),y:"130",rx:"5",ry:"5",width:"317",height:"174"},t)})),"general"===e.section&&new Array(t).fill(" ").map((function(e,t){return Object(f.jsx)("rect",{x:"".concat(333*t+70),y:"320",rx:"5",ry:"5",width:"317",height:"174"},t)}))]})},x=s.p+"static/media/big-heart.7a56eb6f.svg",p=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{className:"big-heart",src:x,alt:"big heart"}),Object(f.jsx)("p",{className:"favorite-text",children:"You haven't liked any superhero yet"})]})},w=function(e){var t=e.favoriteHeroeslist.map((function(e){return Object(f.jsx)(m,{hero:e,isFavorite:!0},e.id.toString())}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:" animate__fadeInDown ".concat(0===t.length?"Favorite-section":"favorite-heroes-section"),children:0===t.length?Object(f.jsx)(p,{}):t})})},N=s.p+"static/media/small-heart.ba7f3b21.svg",y=s.p+"static/media/arrow-up.52a817c4.svg",L=s.p+"static/media/search.cec9b51e.svg",k=s.p+"static/media/logo.a362268c.svg",H=Object(l.a)((function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),s=t[0],i=t[1],r=Object(c.useState)(!1),n=Object(a.a)(r,2),o=n[0],l=n[1],h=Object(c.useContext)(d);Object(c.useEffect)((function(){h.listOfHeroes!==[]&&l(!0)}),[h.idsList,h.listOfHeroes]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"logo-section",children:Object(f.jsx)("img",{className:"logo",src:k,alt:"logo"})}),Object(f.jsx)("div",{className:o?"display-favorites-section":"display-loader-section",children:o?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"upper-section",children:[Object(f.jsxs)("div",{className:"liked-space",children:[Object(f.jsx)("div",{className:"little-favorite-button",children:Object(f.jsx)("img",{className:"littleHeart",src:N,alt:"little heart"})}),Object(f.jsx)("p",{className:"liked-text",children:"Liked"})]}),Object(f.jsx)("button",{className:s?"display-button":"display-button-rotated",onClick:function(){i(!s)},children:Object(f.jsx)("img",{src:y,alt:"arrow up"})})]}),s&&Object(f.jsx)(w,{favoriteHeroeslist:h.GeneralAndFavoriteList.favoriteList})]}):Object(f.jsx)(v,{section:""})}),Object(f.jsx)("div",{className:"search-and-general-section",children:o?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"search-heroes-section",children:[Object(f.jsx)("p",{className:"search-title",children:"All superheroes"}),Object(f.jsxs)("div",{className:"search-bar-element",children:[Object(f.jsx)("img",{src:L,alt:""}),Object(f.jsx)("input",{className:"search-input",type:"text",placeholder:"Search",onChange:function(e){return h.setSearchingHero=e.target.value}})]})]}),Object(f.jsx)(g,{listOfDataCards:h.searchHeroesList})]}):Object(f.jsx)(v,{section:"general"})})]})})})),S=s(3),F=s.n(S),I=s(10),C=s(11),M=s(2),E=s(12),A=function(){var e=Object(E.a)(F.a.mark((function e(){var t,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,"akabab.github.io/superhero-api/api/all.json ",e.next=5,fetch("https://cors-anywhere.herokuapp.com/".concat("akabab.github.io/superhero-api/api/all.json "));case 5:return s=e.sent,e.next=8,s.json();case 8:e.sent.forEach((function(e){var s=e.powerstats,i=(s.combat+s.durability+s.intelligence+s.power+s.speed+s.strength)/60,r={id:e.id,name:e.name,realName:e.biography.fullName,image:e.images.md,powerStat:parseFloat(i.toFixed(2))};t.push(r)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),J=function(){function e(){Object(I.a)(this,e),this.listOfHeroes=[],this.idsList=[],this.searchedHero="";var t=localStorage.getItem("ids")?JSON.parse(localStorage.getItem("ids")):[];this.idsList=t,Object(M.e)(this,{getHeroesList:M.c},{autoBind:!0}),this.getHeroesList()}return Object(C.a)(e,[{key:"handleFavorite",value:function(e){if(this.idsList.includes(e.id)){var t=(localStorage.getItem("ids")?JSON.parse(localStorage.getItem("ids")):[]).filter((function(t){return t!==e.id}));this.idsList=t,localStorage.setItem("ids",JSON.stringify(t))}else{var s=localStorage.getItem("ids")?JSON.parse(localStorage.getItem("ids")):[];s.push(e.id),localStorage.setItem("ids",JSON.stringify(s)),this.idsList=s}}},{key:"GeneralAndFavoriteList",get:function(){var e=this,t=[],s=[];return this.listOfHeroes.forEach((function(i){e.idsList.includes(i.id)?s.push(i):t.push(i)})),{generalList:t,favoriteList:s.sort((function(t,s){return e.idsList.indexOf(s.id)-e.idsList.indexOf(t.id)}))}}},{key:"searchHeroesList",get:function(){var e=this;return this.GeneralAndFavoriteList.generalList.filter((function(t){return(t.name.includes(e.searchedHero)||t.realName.includes(e.searchedHero))&&!e.idsList.includes(t.id)}))}},{key:"getHeroesList",value:F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:this.listOfHeroes=e.sent;case 3:case"end":return e.stop()}}),e,this)}))},{key:"setSearchingHero",set:function(e){this.searchedHero=e}},{key:"getListOfIds",get:function(){return this.idsList}}]),e}(),_=document.querySelector("#root"),D=new J;r.a.render(Object(f.jsx)(h,{value:D,children:Object(f.jsx)(H,{})}),_)}},[[22,1,2]]]);
//# sourceMappingURL=main.2ea9eb00.chunk.js.map