(this["webpackJsonpreact-display-movie"]=this["webpackJsonpreact-display-movie"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(74),a(32)),l=a(20),m=a(41),s=a(42),u=a(45),v=a(39),p=a(27),h=(a(75),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"headerTitle"},r.a.createElement("img",{className:"titleIcon",src:"https://img.icons8.com/wired/50/000000/film-reel.png",alt:"film icon"}),r.a.createElement("div",null,e.title)))}),f=(a(76),function(e){var t,a=e.movie;return r.a.createElement("div",{className:"movie-card"},r.a.createElement("img",{className:"card-img-top",src:(t=a.Poster,(t||"").replace(/^http:\/\//i,"https://")),alt:a.Title+" poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},a.Title),r.a.createElement("h4",{className:"card-subtitle"},a.Actors),r.a.createElement("p",{className:"text-justify"},a.Plot)))}),d=(a(77),function(e){var t=e.movies.map((function(e,t){if(e)return r.a.createElement(f,{movie:e,key:t+e.Title})}));return r.a.createElement("div",{className:"movie-list"},t)}),E=a(8),b=a(63),O=a(142),g=a(140),y=a(144),j=a(145),N=a(146),w=a(46),P=Object(g.a)((function(e){return{card:{width:400},media:{height:0,paddingTop:"150%"},rating:{fontSize:14},runTime:{marginBottom:12},plot:{textAlign:"justify"}}})),T=function(e){var t,a=e.movie,n=a.Actors,i=a.imdbRating,c=a.Title,o=a.Genre,l=a.Plot,m=a.Poster,s=a.Runtime,u=P();return r.a.createElement(O.a,{className:u.card},r.a.createElement(y.a,{title:c,subheader:o}),r.a.createElement(j.a,{className:u.media,image:(t=m,(t||"").replace(/^http:\/\//i,"https://")),title:c}),r.a.createElement(N.a,null,"N/A"!==i&&r.a.createElement(w.a,{className:u.rating,color:"textSecondary",gutterBottom:!0},"IMDB Rating: ",i),r.a.createElement(w.a,{variant:"h5",component:"h2"},n),"N/A"!==s&&r.a.createElement(w.a,{className:u.runTime,color:"textSecondary"},s),r.a.createElement(w.a,{className:u.plot,variant:"body2"},l)))},k=a(151),S=a(152),D=a(147),M=a(149);a(81);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){var t=r.a.useState({movieObj:""}),a=Object(b.a)(t,2),n=a[0],i=a[1],c=e.movies.map((function(e,t){if(e)return r.a.createElement(S.a,{value:e,key:t+e.imdbID},e.Title)}));e.movies.map((function(e,t){if(e)return r.a.createElement("option",{value:e.Title,key:t+e.Title})}));return r.a.createElement("div",{className:"selectListContainer"},r.a.createElement("h3",null,"Select a Movie Name to Display Details"),r.a.createElement(D.a,{variant:"outlined",style:{minWidth:300}},r.a.createElement(k.a,{htmlFor:"movie-name"},"Movies"),r.a.createElement(M.a,{value:n.movieObj,onChange:function(e){i((function(t){return R({},t,Object(E.a)({},e.target.name,e.target.value))}))},inputProps:{name:"movieObj",id:"movie-name"}},c)),r.a.createElement("hr",null),n.movieObj&&r.a.createElement(T,{movie:n.movieObj}),r.a.createElement("hr",null))},B=(a(82),function(){return r.a.createElement("div",{className:"homeContainer"},r.a.createElement("h2",{className:"homeTitle"},"Welcome to React Movie Show"),r.a.createElement("div",{className:"homeText"},"You can navigate between the header tabs, which will display the movie list as select list, or tiles"))}),C=a(61),I=a.n(C).a.create({baseURL:"https://react-display-movie-c4fc7.firebaseio.com/"}),W=a(150),L=a(148),F=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={movies:[]},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.get("/movies.json").then((function(e){return e.data})).then((function(t){t&&e.setState({movies:t})}),(function(e){console.log("fetch data error: ",e)}))}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement(v.a,{basename:"/react-display-movie"},r.a.createElement(h,{title:"React Movie Posters"}),r.a.createElement(p.a,{path:"/",render:function(t){var a=t.location;return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,{value:a.pathname},r.a.createElement(L.a,{label:"Home",component:v.b,to:"/",value:"/"}),r.a.createElement(L.a,{label:"Movie Tiles",component:v.b,to:"/tiles",value:"/tiles"}),r.a.createElement(L.a,{label:"Movie Select List",component:v.b,to:"/list",value:"/list"})),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,{movies:e})}}),r.a.createElement(p.a,{path:"/tiles",render:function(){return r.a.createElement(d,{movies:e})}}),r.a.createElement(p.a,{path:"/list",render:function(){return r.a.createElement(A,{movies:e})}})))}}))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},69:function(e,t,a){e.exports=a(102)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.9642c748.chunk.js.map