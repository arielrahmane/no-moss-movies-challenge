(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f85754a8"],{"4fd8":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=Object(o["D"])("data-v-5b20d32e");Object(o["t"])("data-v-5b20d32e");const l=Object(o["g"])("Filter"),a=Object(o["g"])("Movies"),i=Object(o["g"])("Movies"),s=Object(o["g"])("Clear Filter");Object(o["r"])();const b=c((e,t,n,b,r,d)=>{const j=Object(o["x"])("ion-button"),O=Object(o["x"])("ion-buttons"),u=Object(o["x"])("ion-title"),m=Object(o["x"])("ion-toolbar"),f=Object(o["x"])("ion-header"),p=Object(o["x"])("movie-item"),v=Object(o["x"])("ion-list"),h=Object(o["x"])("ion-content"),C=Object(o["x"])("ion-page");return Object(o["q"])(),Object(o["e"])(C,null,{default:c(()=>[Object(o["h"])(f,null,{default:c(()=>[Object(o["h"])(m,null,{default:c(()=>[Object(o["h"])(O,{slot:"end"},{default:c(()=>[Object(o["h"])(j,{onClick:e.openPicker},{default:c(()=>[l]),_:1},8,["onClick"])]),_:1}),Object(o["h"])(u,null,{default:c(()=>[a]),_:1})]),_:1})]),_:1}),Object(o["h"])(h,{fullscreen:!0},{default:c(()=>[Object(o["h"])(f,{collapse:"condense"},{default:c(()=>[Object(o["h"])(m,null,{default:c(()=>[Object(o["h"])(u,{size:"large"},{default:c(()=>[i]),_:1})]),_:1})]),_:1}),Object(o["h"])(v,null,{default:c(()=>[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(e.computedFilteredMovies,t=>(Object(o["q"])(),Object(o["e"])(p,{key:t.Id,movie:t,isButton:!0,onClick:n=>e.openModal(t)},null,8,["movie","onClick"]))),128))]),_:1}),e.computedFilteredMovies!=e.movies?(Object(o["q"])(),Object(o["e"])(j,{key:0,expand:"block",onClick:t[1]||(t[1]=t=>e.filterGenre=""),color:"danger"},{default:c(()=>[s]),_:1})):Object(o["f"])("",!0)]),_:1})]),_:1})});var r=n("d867");const d=Object(o["g"])(" Close "),j=Object(o["g"])("Movie Details");function O(e,t,n,c,l,a){const i=Object(o["x"])("ion-button"),s=Object(o["x"])("ion-buttons"),b=Object(o["x"])("ion-title"),r=Object(o["x"])("ion-toolbar"),O=Object(o["x"])("ion-header"),u=Object(o["x"])("ion-img"),m=Object(o["x"])("ion-card-subtitle"),f=Object(o["x"])("ion-card-title"),p=Object(o["x"])("ion-card-header"),v=Object(o["x"])("ion-card-content"),h=Object(o["x"])("ion-card"),C=Object(o["x"])("ion-content");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(O,null,{default:Object(o["C"])(()=>[Object(o["h"])(r,null,{default:Object(o["C"])(()=>[Object(o["h"])(s,{slot:"end"},{default:Object(o["C"])(()=>[Object(o["h"])(i,{onClick:e.closeModal},{default:Object(o["C"])(()=>[d]),_:1},8,["onClick"])]),_:1}),Object(o["h"])(b,null,{default:Object(o["C"])(()=>[j]),_:1})]),_:1})]),_:1}),Object(o["h"])(C,{class:"ion-padding"},{default:Object(o["C"])(()=>[Object(o["h"])(h,null,{default:Object(o["C"])(()=>[Object(o["h"])(u,{src:e.movie.LargePosterUrl,alt:"No Available Image"},null,8,["src"]),Object(o["h"])(p,null,{default:Object(o["C"])(()=>[Object(o["h"])(m,null,{default:Object(o["C"])(()=>[Object(o["g"])(Object(o["z"])(e.movie.Genres.toUpperCase()),1)]),_:1}),Object(o["h"])(f,null,{default:Object(o["C"])(()=>[Object(o["g"])(Object(o["z"])(e.movie.Name),1)]),_:1})]),_:1}),Object(o["h"])(v,null,{default:Object(o["C"])(()=>[Object(o["g"])(Object(o["z"])(e.movie.Synopsis),1)]),_:1})]),_:1})]),_:1})],64)}var u=Object(o["i"])({name:"MovieDetailsModal",props:{movie:{}},components:{IonContent:r["i"],IonHeader:r["n"],IonTitle:r["B"],IonToolbar:r["D"],IonImg:r["p"],IonCardHeader:r["f"],IonCardSubtitle:r["g"],IonCardTitle:r["h"],IonCardContent:r["e"],IonButton:r["b"],IonButtons:r["c"],IonCard:r["d"]},methods:{closeModal:async function(){const e=await r["F"].getTop();e&&e.dismiss()}}});u.render=O;var m=u,f=n("ff79");const p=Object(o["D"])("data-v-e4cad4e0");Object(o["t"])("data-v-e4cad4e0");const v={class:"movie-genre"};Object(o["r"])();const h=p((e,t,n,c,l,a)=>{const i=Object(o["x"])("ion-img"),s=Object(o["x"])("ion-label"),b=Object(o["x"])("ion-item");return Object(o["q"])(),Object(o["e"])(b,{button:e.isButton},{default:p(()=>[Object(o["h"])(i,{src:e.movie.LargePosterUrl,class:"item-avatar"},null,8,["src"]),Object(o["h"])(s,null,{default:p(()=>[Object(o["h"])("h2",null,Object(o["z"])(e.movie.Name),1),Object(o["h"])("p",v,Object(o["z"])(e.movie.Genres.toUpperCase()),1)]),_:1})]),_:1},8,["button"])});var C=Object(o["i"])({name:"MovieItem",props:{movie:Object,isButton:Boolean},components:{IonItem:r["q"],IonImg:r["p"],IonLabel:r["s"]}});n("d75c");C.render=h,C.__scopeId="data-v-e4cad4e0";var I=C,_=n("0613"),x=Object(o["i"])({name:"MoviesTab",components:{IonHeader:r["n"],IonToolbar:r["D"],IonTitle:r["B"],IonContent:r["i"],IonPage:r["u"],IonList:r["t"],IonButtons:r["c"],IonButton:r["b"],MovieItem:I},setup(){const e=Object(_["b"])(),t=Object(o["c"])(()=>e.getters.moviesList);return{informationCircle:f["j"],movies:t}},data(){return{filterGenre:""}},computed:{computedFilteredMovies(){const e=this;return""===e.filterGenre?e.movies:e.movies.filter((function(t){return t.Genres==e.filterGenre}))},computedGenres(){const e=this;var t=[],n=[];for(let o of e.movies)!t.includes(o.Genres)&&o.Genres&&(t.push(o.Genres),n.push({text:o.Genres.toUpperCase(),value:o.Genres}));return[{name:"genres",options:n}]}},methods:{async openModal(e){const t=await r["F"].create({component:m,swipeToClose:!0,showBackdrop:!0,backdropDismiss:!0,componentProps:{movie:e}});return t.present()},async openPicker(){const e=this,t=await r["G"].create({columns:e.computedGenres,buttons:[{text:"Cancel",role:"cancel"},{text:"Confirm",handler:t=>{e.filterGenre=t.genres.value}}]});await t.present(),t.onDidDismiss().then(async()=>{t.columns.forEach(e=>{e.options.forEach(e=>{delete e.selected,delete e.duration,delete e.transform})})})}}});x.render=b,x.__scopeId="data-v-5b20d32e";t["default"]=x},"9d76":function(e,t,n){},d75c:function(e,t,n){"use strict";n("9d76")}}]);
//# sourceMappingURL=chunk-f85754a8.5d7bc73e.js.map