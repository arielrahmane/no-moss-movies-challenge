(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748b410d"],{"0f46":function(e,t,n){"use strict";n("34ce")},"34ce":function(e,t,n){},"4fd8":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c=Object(o["D"])("data-v-58011ff4");Object(o["t"])("data-v-58011ff4");const l=Object(o["g"])("Filter"),i=Object(o["g"])("Movies"),a=Object(o["g"])("Movies"),s=Object(o["g"])("Clear Filter");Object(o["r"])();const r=c((e,t,n,r,b,j)=>{const u=Object(o["x"])("ion-button"),O=Object(o["x"])("ion-buttons"),d=Object(o["x"])("ion-title"),f=Object(o["x"])("ion-toolbar"),m=Object(o["x"])("ion-header"),p=Object(o["x"])("movie-item"),v=Object(o["x"])("ion-list"),h=Object(o["x"])("ion-content"),C=Object(o["x"])("ion-page");return Object(o["q"])(),Object(o["e"])(C,null,{default:c(()=>[Object(o["h"])(m,null,{default:c(()=>[Object(o["h"])(f,null,{default:c(()=>[Object(o["h"])(O,{slot:"end"},{default:c(()=>[Object(o["h"])(u,{onClick:e.openPicker},{default:c(()=>[l]),_:1},8,["onClick"])]),_:1}),Object(o["h"])(d,null,{default:c(()=>[i]),_:1})]),_:1})]),_:1}),Object(o["h"])(h,{fullscreen:!0},{default:c(()=>[Object(o["h"])(m,{collapse:"condense"},{default:c(()=>[Object(o["h"])(f,null,{default:c(()=>[Object(o["h"])(d,{size:"large"},{default:c(()=>[a]),_:1})]),_:1})]),_:1}),Object(o["h"])(v,null,{default:c(()=>[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(e.computedFilteredMovies,t=>(Object(o["q"])(),Object(o["e"])(p,{key:t.Id,movie:t,isButton:!0,onClick:n=>e.openModal(t)},null,8,["movie","onClick"]))),128))]),_:1}),e.computedFilteredMovies!=e.movies?(Object(o["q"])(),Object(o["e"])(u,{key:0,expand:"block",onClick:t[1]||(t[1]=t=>e.filterGenre=""),color:"danger"},{default:c(()=>[s]),_:1})):Object(o["f"])("",!0)]),_:1})]),_:1})});var b=n("d867");const j=Object(o["g"])(" Close "),u=Object(o["g"])("Movie Details");function O(e,t,n,c,l,i){const a=Object(o["x"])("ion-button"),s=Object(o["x"])("ion-buttons"),r=Object(o["x"])("ion-title"),b=Object(o["x"])("ion-toolbar"),O=Object(o["x"])("ion-header"),d=Object(o["x"])("ion-img"),f=Object(o["x"])("ion-card-subtitle"),m=Object(o["x"])("ion-card-title"),p=Object(o["x"])("ion-card-header"),v=Object(o["x"])("ion-card-content"),h=Object(o["x"])("ion-card"),C=Object(o["x"])("ion-content");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(O,null,{default:Object(o["C"])(()=>[Object(o["h"])(b,null,{default:Object(o["C"])(()=>[Object(o["h"])(s,{slot:"end"},{default:Object(o["C"])(()=>[Object(o["h"])(a,{onClick:e.closeModal},{default:Object(o["C"])(()=>[j]),_:1},8,["onClick"])]),_:1}),Object(o["h"])(r,null,{default:Object(o["C"])(()=>[u]),_:1})]),_:1})]),_:1}),Object(o["h"])(C,{class:"ion-padding"},{default:Object(o["C"])(()=>[Object(o["h"])(h,null,{default:Object(o["C"])(()=>[Object(o["h"])(d,{src:e.movie.LargePosterUrl,alt:"No Available Image"},null,8,["src"]),Object(o["h"])(p,null,{default:Object(o["C"])(()=>[Object(o["h"])(f,null,{default:Object(o["C"])(()=>[Object(o["g"])(Object(o["z"])(e.movie.Genres.toUpperCase()),1)]),_:1}),Object(o["h"])(m,null,{default:Object(o["C"])(()=>[Object(o["g"])(Object(o["z"])(e.movie.Name),1)]),_:1})]),_:1}),Object(o["h"])(v,null,{default:Object(o["C"])(()=>[Object(o["g"])(Object(o["z"])(e.movie.Synopsis),1)]),_:1})]),_:1})]),_:1})],64)}var d=Object(o["i"])({name:"MovieDetailsModal",props:{movie:{}},components:{IonContent:b["i"],IonHeader:b["n"],IonTitle:b["B"],IonToolbar:b["D"],IonImg:b["p"],IonCardHeader:b["f"],IonCardSubtitle:b["g"],IonCardTitle:b["h"],IonCardContent:b["e"],IonButton:b["b"],IonButtons:b["c"],IonCard:b["d"]},methods:{closeModal:async function(){const e=await b["F"].getTop();e&&e.dismiss()}}});d.render=O;var f=d,m=n("ff79");const p=Object(o["D"])("data-v-4ec8444e");Object(o["t"])("data-v-4ec8444e");const v={class:"movie-genre"};Object(o["r"])();const h=p((e,t,n,c,l,i)=>{const a=Object(o["x"])("ion-img"),s=Object(o["x"])("ion-label"),r=Object(o["x"])("ion-item");return Object(o["q"])(),Object(o["e"])(r,{button:e.isButton},{default:p(()=>[Object(o["h"])(a,{src:e.movie.LargePosterUrl,class:"item-avatar"},null,8,["src"]),Object(o["h"])(s,null,{default:p(()=>[Object(o["h"])("h2",null,Object(o["z"])(e.movie.Name),1),Object(o["h"])("p",v,Object(o["z"])(e.movie.Genres.toUpperCase()),1)]),_:1})]),_:1},8,["button"])});var C=Object(o["i"])({name:"MovieItem",props:{movie:Object,isButton:Boolean},components:{IonItem:b["q"],IonImg:b["p"],IonLabel:b["s"]}});n("0f46");C.render=h,C.__scopeId="data-v-4ec8444e";var I=C,_=n("0613"),x=Object(o["i"])({name:"MoviesTab",components:{IonHeader:b["n"],IonToolbar:b["D"],IonTitle:b["B"],IonContent:b["i"],IonPage:b["u"],IonList:b["t"],IonButtons:b["c"],IonButton:b["b"],MovieItem:I},setup(){const e=Object(_["b"])(),t=Object(o["c"])(()=>e.getters.moviesList);return{informationCircle:m["j"],movies:t}},data(){return{filterGenre:""}},computed:{computedFilteredMovies(){const e=this;return""===e.filterGenre?e.movies:e.movies.filter((function(t){return t.Genres==e.filterGenre}))},computedGenres(){const e=this;var t=[],n=[];for(let o of e.movies)!t.includes(o.Genres)&&o.Genres&&(t.push(o.Genres),n.push({text:o.Genres.toUpperCase(),value:o.Genres}));return[{name:"genres",options:n}]}},methods:{async openModal(e){const t=await b["F"].create({component:f,swipeToClose:!0,showBackdrop:!0,backdropDismiss:!0,componentProps:{movie:e}});return t.present()},async openPicker(){const e=this,t=await b["G"].create({columns:e.computedGenres,buttons:[{text:"Cancel",role:"cancel"},{text:"Confirm",handler:t=>{e.filterGenre=t.genres.value}}]});await t.present(),t.onDidDismiss().then(async()=>{t.columns.forEach(e=>{e.options.forEach(e=>{delete e.selected,delete e.duration,delete e.transform})})})}}});n("7207");x.render=r,x.__scopeId="data-v-58011ff4";t["default"]=x},7207:function(e,t,n){"use strict";n("eccc")},eccc:function(e,t,n){}}]);
//# sourceMappingURL=chunk-748b410d.1dbccbdc.js.map