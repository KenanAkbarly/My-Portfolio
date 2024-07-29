(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[6],{140:function(e,t,a){e.exports={content:"Projects_content__1oMVQ",title:"Projects_title__1Jlky",subtitle:"Projects_subtitle__1O3EY",projects:"Projects_projects__3yBmn",purple:"Projects_purple__2QT8H"}},141:function(e,t,a){e.exports={purple:"ProjectCard_purple__2HSeK",card:"ProjectCard_card__2fq4a",cardWrapper:"ProjectCard_cardWrapper__2kcw1",cardBody:"ProjectCard_cardBody__1Je6v",title:"ProjectCard_title__14g5a",description:"ProjectCard_description__1fq-t"}},160:function(e,t,a){"use strict";a.r(t);var r=a(140),c=a.n(r),n=a(70),s=a(22),i=a(141),l=a.n(i),o=a(3),j=a(8),d=a(20),b=a(4);var h=e=>{let{id:t,image:a,title:r,description:c}=e;const n=Object(o.m)();return Object(b.jsx)("li",{className:l.a.card,children:Object(b.jsxs)("div",{className:l.a.cardWrapper,children:[Object(b.jsx)(j.b,{to:"/project/".concat(t),state:{background:n},children:Object(b.jsx)(d.LazyLoadImage,{alt:"card-img",effect:"blur",src:a.src,width:"100%",style:{minHeight:"10rem"},placeholderSrc:a.placeholderSrc})}),Object(b.jsxs)("div",{className:l.a.cardBody,children:[Object(b.jsx)("h3",{className:l.a.title,children:r}),Object(b.jsx)("p",{className:l.a.description,children:c})]})]})})};t.default=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)("div",{className:c.a.content,children:[Object(b.jsxs)("h1",{className:c.a.title,children:["My Recent ",Object(b.jsx)("strong",{className:c.a.purple,children:"Works"})]}),Object(b.jsx)("p",{className:c.a.subtitle,children:"Here are a few projects I've worked on recently."}),Object(b.jsx)("ul",{className:c.a.projects,children:s.a.map((e=>Object(b.jsx)(h,{...e},e.id)))})]})})},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1),c=a(18);const n=()=>Object(r.useContext)(c.a)},53:function(e,t,a){"use strict";var r=a(13),c=a.n(r),n=a(54),s=a.n(n),i=a(1),l=a(4);t.a=e=>{let{children:t}=e;const[a,r]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{const e=()=>{r(window.scrollY>=20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),Object(l.jsx)("div",{className:c()(s.a.header,{[s.a.highlighted]:a}),children:Object(l.jsx)("div",{className:s.a.container,children:t})})}},54:function(e,t,a){e.exports={header:"Header_header__1v0yI",container:"Header_container__21wXn",highlighted:"Header_highlighted__2ho2S"}},56:function(e,t,a){"use strict";var r=a(57),c=a.n(r),n=a(52),s=a(66),i=a(4);t.a=()=>{(new Date).getFullYear();return Object(i.jsx)("div",{className:c.a.footer,children:Object(i.jsxs)("div",{className:c.a.container,children:[Object(i.jsx)("div",{className:c.a.copyright,children:Object(i.jsx)("h3",{children:"Developed by Kenan Akbarly"})}),Object(i.jsx)("div",{className:c.a.body,children:Object(i.jsxs)("ul",{className:c.a.socialIcons,children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/KenanAkbarly",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(n.a,{})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100069718873528&mibextid=LQQJ4d",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(s.b,{})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/kenan-akbarly-a815b222a/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(s.f,{})})})]})})]})})}},57:function(e,t,a){e.exports={footer:"Footer_footer__7dIj9",container:"Footer_container__188QZ",copyright:"Footer_copyright__2wqDr",body:"Footer_body__3Jawa",socialIcons:"Footer_socialIcons__2gElP"}},58:function(e,t,a){e.exports={navigationDrawerNav:"MainNavigation_navigationDrawerNav__3ezV1",desktop:"MainNavigation_desktop__3V__O",mobile:"MainNavigation_mobile__273-I"}},59:function(e,t,a){e.exports={navBar:"NavLinks_navBar__DGpCS",active:"NavLinks_active__2QU5z"}},60:function(e,t,a){e.exports={sideDrawer:"SideDrawer_sideDrawer__1fkRJ"}},61:function(e,t,a){e.exports={burger:"Burger_burger__2SKf0"}},62:function(e,t,a){e.exports={toggleTheme:"BtnToggleTheme_toggleTheme__1g1wC"}},63:function(e,t,a){e.exports={logoPrimary:"var(--logo-primary)",logo:"Logo_logo__3IG6m"}},64:function(e,t,a){"use strict";var r=a(58),c=a.n(r),n=a(1),s=a(73),i=a(59),l=a.n(i),o=a(52),j=a(74),d=a(16),b=a(8),h=a(4);var x=()=>Object(h.jsxs)("ul",{className:l.a.navBar,children:[Object(h.jsx)("li",{children:Object(h.jsxs)(b.c,{to:d.b.HOME,end:!0,children:[Object(h.jsx)(o.d,{}),"Home"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(b.c,{to:d.b.ABOUT,children:[Object(h.jsx)(o.e,{}),"About"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(b.c,{to:d.b.PROJECTS,children:[Object(h.jsx)(o.c,{}),"Projects"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(b.c,{to:d.b.RESUME,children:[Object(h.jsx)(j.a,{}),"Resume"]})})]}),u=a(60),m=a.n(u),O=a(39),_=a(17);var p=e=>{let{children:t,show:a,onClose:r}=e;return Object(h.jsxs)(h.Fragment,{children:[a&&Object(h.jsx)(_.a,{onClick:r}),Object(h.jsx)(O.a,{in:a,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(h.jsx)("aside",{className:m.a.sideDrawer,onClick:r,children:t})})]})},v=a(61),g=a.n(v);var y,f=e=>{let{onClick:t}=e;return Object(h.jsxs)("button",{onClick:t,className:g.a.burger,children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})},w=a(62),k=a.n(w),N=a(12);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},E.apply(null,arguments)}function C(e,t){let{title:a,titleId:r,...c}=e;return n.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,y||(y=n.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))}const P=n.forwardRef(C);var B,L,D,I,S,H,M,F,T;a.p;function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},J.apply(null,arguments)}function z(e,t){let{title:a,titleId:r,...c}=e;return n.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,B||(B=n.createElement("circle",{cx:12,cy:12,r:5})),L||(L=n.createElement("line",{x1:12,y1:1,x2:12,y2:3})),D||(D=n.createElement("line",{x1:12,y1:21,x2:12,y2:23})),I||(I=n.createElement("line",{x1:4.22,y1:4.22,x2:5.64,y2:5.64})),S||(S=n.createElement("line",{x1:18.36,y1:18.36,x2:19.78,y2:19.78})),H||(H=n.createElement("line",{x1:1,y1:12,x2:3,y2:12})),M||(M=n.createElement("line",{x1:21,y1:12,x2:23,y2:12})),F||(F=n.createElement("line",{x1:4.22,y1:19.78,x2:5.64,y2:18.36})),T||(T=n.createElement("line",{x1:18.36,y1:5.64,x2:19.78,y2:4.22})))}const R=n.forwardRef(z);a.p;var W=a(49);var A=e=>{let{className:t}=e;const{dark:a,toggleTheme:r}=Object(W.a)(),c=Object(n.useMemo)((()=>a?R:P),[a]);return Object(h.jsx)(N.a,{addClass:t,onClick:r,children:Object(h.jsx)(c,{className:k.a.toggleTheme})})},Q=a(63),q=a.n(Q);var K=e=>{let{className:t}=e;return Object(h.jsx)("div",{className:t,children:Object(h.jsxs)(b.b,{className:q.a.logo,to:d.b.HOME,children:[Object(h.jsx)("img",{className:q.a.logoPrimary,style:{width:"80px",height:"50px"},src:"https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",alt:""}),Object(h.jsx)("span",{children:"Akbarly"})]})})};t.a=()=>{const[e,t]=Object(n.useState)(!1),a=()=>{t((e=>!e))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(K,{className:c.a.desktop}),Object(h.jsxs)("nav",{className:c.a.desktop,children:[Object(h.jsx)(x,{}),Object(h.jsx)(A,{})]}),Object(h.jsx)(s.a,{query:{maxWidth:768},children:()=>Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{onClick:a}),Object(h.jsx)(K,{className:c.a.mobile}),Object(h.jsx)(A,{className:c.a.mobile})]})}),Object(h.jsx)(p,{show:e,onClose:a,children:Object(h.jsx)("nav",{className:c.a.navigationDrawerNav,children:Object(h.jsx)(x,{})})})]})}},65:function(e,t,a){"use strict";var r=a(1),c=a(77),n=a(78);const s={number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#623686"},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!0,speed:2,size_min:3,sync:!1}},links:{enable:!0,color:"#623686",distance:50,width:1,consent:!1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},i={number:{value:100,density:{enable:!0,area:1500}},move:{enable:!0,direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}};var l=a(49),o=a(4);t.a=()=>{const{dark:e}=Object(l.a)(),t=Object(r.useCallback)((async e=>{await Object(c.a)(e)}),[]),a=e?i:s;return Object(o.jsx)(n.a,{init:t,params:{particles:a,interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}},70:function(e,t,a){"use strict";var r=a(71),c=a.n(r),n=a(53),s=a(65),i=a(56),l=a(64),o=a(4);t.a=e=>{let{children:t}=e;return Object(o.jsxs)("div",{className:c.a.layout,children:[Object(o.jsx)(s.a,{}),Object(o.jsx)(n.a,{children:Object(o.jsx)(l.a,{})}),Object(o.jsx)("div",{className:c.a.container,children:t}),Object(o.jsx)(i.a,{})]})}},71:function(e,t,a){e.exports={layout:"BaseLayout_layout__28d-V",container:"BaseLayout_container__15XpG"}}}]);
//# sourceMappingURL=6.3298b83b.chunk.js.map