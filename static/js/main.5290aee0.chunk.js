(this.webpackJsonpshopify=this.webpackJsonpshopify||[]).push([[0],{166:function(e,t,n){},345:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),a=n.n(i),r=(n(166),n(24)),o=n(21),l=n(63),d=n(64),h=n(67),j=n(66),m=n(11),b=(n(345),n.p+"static/media/theatre.7ed33490.png"),u=n.p+"static/media/TheShoppies.cdf29b5c.png",x=n(4),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={collapsed:!1},e.handleTogglerClick=function(){var t=e.state.collapsed;e.setState({collapsed:!t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(x.jsx)("div",{id:"minimalistintro",children:Object(x.jsxs)(m.w,{src:b,children:[Object(x.jsx)(m.n,{className:"rgba-black-light"}),Object(x.jsx)(m.j,{className:"d-flex justify-content-center align-items-center",style:{height:"100%",width:"100%",paddingTop:"7rem"},children:Object(x.jsx)(m.t,{children:Object(x.jsxs)(m.h,{md:"12",className:"mb-4 white-text text-center",children:[Object(x.jsx)("img",{src:u,alt:"logo",height:"400px",width:"400px"}),Object(x.jsx)("hr",{className:"hr-light my-2"}),Object(x.jsx)("h5",{className:"text-uppercase mt-3 mb-4 white-text ",children:Object(x.jsx)("strong",{children:"Movie Awards for Entrepreneurs"})}),Object(x.jsx)(r.b,{to:"/ShopifyChallenge/movies",children:Object(x.jsx)(m.e,{outline:!0,color:"white",children:"Search Movies"})}),Object(x.jsx)(r.b,{to:"/ShopifyChallenge/nominated",children:Object(x.jsx)(m.e,{outline:!0,color:"white",children:"Nominated Movies"})})]})})})]})})}}]),n}(s.a.Component),O=n(160),g=n(101),v=n.n(g),f=n(159),w=n(45),y=n(52),N=(n(348),n(349),n(350),n(93),n.p+"static/media/NOPOSTER.0a80f4d5.png"),S=function(e){var t=e.nominateComponent;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m.t,{className:"ml-1 mr-1 mb-2",children:e.movies.map((function(n,c){return Object(x.jsxs)(m.h,{md:"3",className:"nom",children:[Object(x.jsx)(m.f,{className:"card-image mb-3",style:{backgroundImage:n.Poster.startsWith("http")?"url(".concat(n.Poster,"})"):"url(".concat(N,")"),height:"500px",width:"300px"},children:Object(x.jsx)("div",{className:"text-white text-center d-flex align-items-center py-5 px-4",style:{height:"500px",justifyContent:"center"}})},c),Object(x.jsxs)("div",{style:{width:"300px"},children:[Object(x.jsxs)(m.g,{tag:"h6",style:{float:"left",width:"150px"},children:[Object(x.jsx)("strong",{children:n.Title}),Object(x.jsxs)("p",{children:["(",n.Year,")"]})]}),Object(x.jsxs)(m.e,{rounded:!0,size:"sm",style:{float:"right"},color:"outline-white",onClick:function(){return e.handleNominateClick(n)},className:"button",children:[Object(x.jsx)(m.k,{})," ",Object(x.jsx)(t,{})]})]})]})}))})})},C=function(e){return Object(x.jsx)("div",{className:"col col-sm-10",children:Object(x.jsx)("input",{className:"form-control p-4",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type Movie Name",style:{border:"1px solid grey",borderRadius:"5px",height:"20px",width:"100%",padding:"2px 23px 2px 30px",outline:"0",backgroundColor:"black",color:"white"}})})},k=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"button mr-2",children:"Nominate"}),Object(x.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},M=(n(351),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e.handleScroll=function(){window.scrollY>20?document.querySelector("img").className="img scroll":document.querySelector("img").className="img"},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(x.jsx)(m.o,{color:"black",dark:!0,expand:"md",children:Object(x.jsx)(m.j,{className:"d-flex justify-content-center align-items-center",style:{height:"100%",width:"100%",paddingTop:"3rem"},children:Object(x.jsx)(m.t,{children:Object(x.jsxs)(m.h,{md:"12",className:"mb-4 white-text text-center",children:[Object(x.jsxs)(r.b,{to:"/ShopifyChallenge",children:[" ",Object(x.jsx)("img",{src:u,alt:"logo",height:"350px",width:"350px"})]}),Object(x.jsx)(m.q,{onClick:this.toggleCollapse}),Object(x.jsx)(m.i,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0,children:Object(x.jsxs)(m.p,{className:"mt-3",children:[Object(x.jsx)(r.b,{to:"/ShopifyChallenge/movies",style:{color:"white"},className:"mr-3",children:"SEARCH MOVIES"}),Object(x.jsx)(r.b,{to:"/ShopifyChallenge/nominated",style:{color:"white"},className:"ml-3",children:"NOMINATED MOVIES"})]})})]})})})})}}]),n}(c.Component)),I=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(w.a)(i,2),r=a[0],o=a[1],l=Object(c.useState)(""),d=Object(w.a)(l,2),h=d[0],j=d[1],b=function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://www.omdbapi.com/?s=".concat(h,"&apikey=aa19abbe"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).Search&&s(c.Search);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){b(h)}),[h]),Object(c.useEffect)((function(){u()}),[]);var u=function(){var e=JSON.parse(localStorage.getItem("nominated-movies"));e?o(e):console.log("nothing is nominated")},p=function(){var e=localStorage.getItem("nominated-movies");return 4!==r.length&&4!==e.length||(y.b.warn("You have 5 nominations",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(M,{}),Object(x.jsxs)("div",{className:"container-fluid movie-app mx-3",children:[Object(x.jsx)(y.a,{}),Object(x.jsxs)(m.c,{style:{background:"transparent"},children:[Object(x.jsx)(m.d,{children:"Home"}),Object(x.jsx)(m.d,{active:!0,children:"Movies"}),Object(x.jsx)(m.d,{children:"Nominated"})]}),Object(x.jsxs)("div",{className:"row d-flex align-items-center mb-3 ml-2",children:[Object(x.jsx)("h2",{className:"text-uppercase ml-3 mt-3  white-text",style:{letterSpacing:"2.5px"},children:Object(x.jsx)("strong",{children:"Search"})}),Object(x.jsx)(C,{searchValue:h,setSearchValue:j})]}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(S,{movies:n,nominateComponent:k,nominatedMovies:localStorage.getItem("nominated-movies"),handleNominateClick:function(e){var t,n=localStorage.getItem("nominated-movies");if(p(),r.includes(e)||n.includes(e.imdbID))y.b.error("This movie is already in your nominations!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var c=[].concat(Object(O.a)(r),[e]);o(c),t=c,localStorage.setItem("nominated-movies",JSON.stringify(t)),y.b.success("This movie has been nominated",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}})})]})]})},E=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"mr-2",children:"Remove"}),Object(x.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(x.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})};function T(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){var e=JSON.parse(localStorage.getItem("nominated-movies"));e?s(e):console.log("nothing is nominated")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(M,{}),Object(x.jsxs)("div",{className:"container-fluid movie-app mx-3",children:[Object(x.jsx)("div",{className:"row d-flex align-items-center mb-3",children:Object(x.jsxs)("div",{className:"col-md-12 mb-4 white-text",children:[Object(x.jsxs)(m.c,{style:{background:"transparent"},children:[Object(x.jsx)(m.d,{children:"Home"}),Object(x.jsx)(m.d,{children:"Movies"}),Object(x.jsx)(m.d,{active:!0,children:"Nominated"})]}),Object(x.jsx)("h2",{className:"text-uppercase ml-3 mt-3  white-text",style:{letterSpacing:"2.5px"},children:Object(x.jsx)("strong",{children:"Nominated"})})]})}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)(S,{movies:n,handleNominateClick:function(e){var t,c=n.filter((function(t){return t.imdbID!==e.imdbID}));s(c),t=c,localStorage.setItem("nominated-movies",JSON.stringify(t))},nominateComponent:E})})]})]})}var H=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/ShopifyChallenge",component:p}),Object(x.jsx)(o.a,{exact:!0,path:"/ShopifyChallenge/movies",component:I}),Object(x.jsx)(o.a,{exact:!0,path:"/ShopifyChallenge/nominated",component:T})]})})},V=function(){return Object(x.jsx)(r.a,{children:Object(x.jsx)(H,{})})};n(352),n(353);a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root"))},93:function(e,t,n){}},[[354,1,2]]]);
//# sourceMappingURL=main.5290aee0.chunk.js.map