(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[8],{136:function(e,t,r){e.exports={content:"Projects_content__T12g3",title:"Projects_title__1v2Bk",subtitle:"Projects_subtitle__XkuHT",projects:"Projects_projects__1gRDV",purple:"Projects_purple__2v8TN"}},137:function(e,t,r){e.exports={purple:"ProjectCard_purple__2pKuj",card:"ProjectCard_card__3Iaet",cardWrapper:"ProjectCard_cardWrapper__338tS",cardBody:"ProjectCard_cardBody__30cVa",title:"ProjectCard_title__3Uaip",description:"ProjectCard_description__2D_i9"}},159:function(e,t,r){"use strict";r.r(t);var n=r(56);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var a=r(136),i=r.n(a),s=r(76),o=r(25),l=r(137),j=r.n(l),b=r(3),d=r(10),u=r(23),O=r(2),p=function(e){var t=e.id,r=e.image,n=e.title,c=e.description,a=Object(b.e)();return Object(O.jsx)("li",{className:j.a.card,children:Object(O.jsxs)("div",{className:j.a.cardWrapper,children:[Object(O.jsx)(d.b,{to:"/project/".concat(t),state:{background:a},children:Object(O.jsx)(u.LazyLoadImage,{alt:"card-img",effect:"blur",src:r.src,width:"100%",style:{minHeight:"10rem"},placeholderSrc:r.placeholderSrc})}),Object(O.jsxs)("div",{className:j.a.cardBody,children:[Object(O.jsx)("h3",{className:j.a.title,children:n}),Object(O.jsx)("p",{className:j.a.description,children:c})]})]})})};t.default=function(){return Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{className:i.a.content,children:[Object(O.jsxs)("h1",{className:i.a.title,children:["My Recent ",Object(O.jsx)("strong",{className:i.a.purple,children:"Works"})]}),Object(O.jsx)("p",{className:i.a.subtitle,children:"Here are a few projects I've worked on recently."}),Object(O.jsx)("ul",{className:i.a.projects,children:o.a.map((function(e){return Object(O.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)}))})]})})}},58:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(1),c=r(21),a=function(){return Object(n.useContext)(c.a)}},62:function(e,t,r){"use strict";var n=r(56),c=r(5),a=r(16),i=r.n(a),s=r(63),o=r.n(s),l=r(1),j=r(2);t.a=function(e){var t=e.children,r=Object(l.useState)(!1),a=Object(c.a)(r,2),s=a[0],b=a[1];return Object(l.useEffect)((function(){var e=function(){b(window.scrollY>=20)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(j.jsx)("div",{className:i()(o.a.header,Object(n.a)({},o.a.highlighted,s)),children:Object(j.jsx)("div",{className:o.a.container,children:t})})}},63:function(e,t,r){e.exports={header:"Header_header__3D9pM",container:"Header_container__3Jb_y",highlighted:"Header_highlighted__3ga-h"}},64:function(e,t,r){"use strict";var n=r(65),c=r.n(n),a=r(60),i=r(74),s=r(2);t.a=function(){(new Date).getFullYear();return Object(s.jsx)("div",{className:c.a.footer,children:Object(s.jsxs)("div",{className:c.a.container,children:[Object(s.jsx)("div",{className:c.a.copyright,children:Object(s.jsx)("h3",{children:"Developed by Kenan Akbarly"})}),Object(s.jsx)("div",{className:c.a.body,children:Object(s.jsxs)("ul",{className:c.a.socialIcons,children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/KenanAkbarly",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(a.a,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100069718873528&mibextid=LQQJ4d",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.b,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/kenan-akbarly-a815b222a/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.c,{})})})]})})]})})}},65:function(e,t,r){e.exports={footer:"Footer_footer__wK0Ds",container:"Footer_container__250we",copyright:"Footer_copyright__29leg",body:"Footer_body__3LUrt",socialIcons:"Footer_socialIcons__2FkxO"}},66:function(e,t,r){e.exports={navigationDrawerNav:"MainNavigation_navigationDrawerNav__36Vh2",desktop:"MainNavigation_desktop__3p3aP",mobile:"MainNavigation_mobile__20bxa"}},67:function(e,t,r){e.exports={navBar:"NavLinks_navBar__1-Ypq",active:"NavLinks_active__2tqnb"}},68:function(e,t,r){e.exports={sideDrawer:"SideDrawer_sideDrawer__1sBXk"}},69:function(e,t,r){e.exports={burger:"Burger_burger__5AJdI"}},70:function(e,t,r){e.exports={toggleTheme:"BtnToggleTheme_toggleTheme__Q5xiG"}},71:function(e,t,r){e.exports={logoPrimary:"var(--logo-primary)",logo:"Logo_logo__kunor"}},72:function(e,t,r){"use strict";var n,c=r(5),a=r(66),i=r.n(a),s=r(1),o=r(79),l=r(67),j=r.n(l),b=r(60),d=r(80),u=r(19),O=r(10),p=r(2),h=function(){return Object(p.jsxs)("ul",{className:j.a.navBar,children:[Object(p.jsx)("li",{children:Object(p.jsxs)(O.c,{to:u.b.HOME,end:!0,children:[Object(p.jsx)(b.d,{}),"Home"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(O.c,{to:u.b.ABOUT,children:[Object(p.jsx)(b.e,{}),"About"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(O.c,{to:u.b.PROJECTS,children:[Object(p.jsx)(b.c,{}),"Projects"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(O.c,{to:u.b.RESUME,children:[Object(p.jsx)(d.a,{}),"Resume"]})})]})},x=r(68),f=r.n(x),m=r(44),_=r(20),v=function(e){var t=e.children,r=e.show,n=e.onClose;return Object(p.jsxs)(p.Fragment,{children:[r&&Object(p.jsx)(_.a,{onClick:n}),Object(p.jsx)(m.a,{in:r,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(p.jsx)("aside",{className:f.a.sideDrawer,onClick:n,children:t})})]})},g=r(69),y=r.n(g),w=function(e){var t=e.onClick;return Object(p.jsxs)("button",{onClick:t,className:y.a.burger,children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})},k=r(70),N=r.n(k),P=r(15),E=["title","titleId"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function D(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function B(e,t){var r=e.title,c=e.titleId,a=D(e,E);return s.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":c},a),r?s.createElement("title",{id:c},r):null,n||(n=s.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))}var L,S,I,T,F,M,H,A,R,W=s.forwardRef(B),J=(r.p,["title","titleId"]);function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}function K(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function U(e,t){var r=e.title,n=e.titleId,c=K(e,J);return s.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":n},c),r?s.createElement("title",{id:n},r):null,L||(L=s.createElement("circle",{cx:12,cy:12,r:5})),S||(S=s.createElement("line",{x1:12,y1:1,x2:12,y2:3})),I||(I=s.createElement("line",{x1:12,y1:21,x2:12,y2:23})),T||(T=s.createElement("line",{x1:4.22,y1:4.22,x2:5.64,y2:5.64})),F||(F=s.createElement("line",{x1:18.36,y1:18.36,x2:19.78,y2:19.78})),M||(M=s.createElement("line",{x1:1,y1:12,x2:3,y2:12})),H||(H=s.createElement("line",{x1:21,y1:12,x2:23,y2:12})),A||(A=s.createElement("line",{x1:4.22,y1:19.78,x2:5.64,y2:18.36})),R||(R=s.createElement("line",{x1:18.36,y1:5.64,x2:19.78,y2:4.22})))}var X=s.forwardRef(U),Y=(r.p,r(58)),q=function(e){var t=e.className,r=Object(Y.a)(),n=r.dark,c=r.toggleTheme,a=Object(s.useMemo)((function(){return n?X:W}),[n]);return Object(p.jsx)(P.a,{addClass:t,onClick:c,children:Object(p.jsx)(a,{className:N.a.toggleTheme})})},Q=r(71),V=r.n(Q),G=function(e){var t=e.className;return Object(p.jsx)("div",{className:t,children:Object(p.jsxs)(O.b,{className:V.a.logo,to:u.b.HOME,children:[Object(p.jsx)("img",{className:V.a.logoPrimary,style:{width:"80px",height:"50px"},src:"https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",alt:""}),Object(p.jsx)("span",{children:"Akbarly"})]})})};t.a=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),r=t[0],n=t[1],a=function(){n((function(e){return!e}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G,{className:i.a.desktop}),Object(p.jsxs)("nav",{className:i.a.desktop,children:[Object(p.jsx)(h,{}),Object(p.jsx)(q,{})]}),Object(p.jsx)(o.a,{query:{maxWidth:768},children:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{onClick:a}),Object(p.jsx)(G,{className:i.a.mobile}),Object(p.jsx)(q,{className:i.a.mobile})]})}}),Object(p.jsx)(v,{show:r,onClose:a,children:Object(p.jsx)("nav",{className:i.a.navigationDrawerNav,children:Object(p.jsx)(h,{})})})]})}},73:function(e,t,r){"use strict";var n=r(48),c=r(49),a=r(1),i=r(81),s=r(82),o={number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#623686"},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!0,speed:2,size_min:3,sync:!1}},links:{enable:!0,color:"#623686",distance:50,width:1,consent:!1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},l={number:{value:100,density:{enable:!0,area:1500}},move:{enable:!0,direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},j=r(58),b=r(2);t.a=function(){var e=Object(j.a)().dark,t=Object(a.useCallback)(function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),r=e?l:o;return Object(b.jsx)(s.a,{init:t,params:{particles:r,interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}},76:function(e,t,r){"use strict";var n=r(77),c=r.n(n),a=r(62),i=r(73),s=r(64),o=r(72),l=r(2);t.a=function(e){var t=e.children;return Object(l.jsxs)("div",{className:c.a.layout,children:[Object(l.jsx)(i.a,{}),Object(l.jsx)(a.a,{children:Object(l.jsx)(o.a,{})}),Object(l.jsx)("div",{className:c.a.container,children:t}),Object(l.jsx)(s.a,{})]})}},77:function(e,t,r){e.exports={layout:"BaseLayout_layout__1689l",container:"BaseLayout_container__391fX"}}}]);
//# sourceMappingURL=8.ee4d0f66.chunk.js.map