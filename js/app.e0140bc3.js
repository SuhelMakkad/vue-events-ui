(function(){"use strict";var e={3596:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(t,{to:{name:"home"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(t,{to:{name:"about"}},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o.Wm)(r,null,{default:(0,o.w5)((({Component:e})=>[((0,o.wg)(),(0,o.j4)(o.n4,{timeout:"0"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])])),fallback:(0,o.w5)((()=>[(0,o.Uk)(" Loading... ")])),_:2},1024))])),_:1})],64)}var u=t(89);const i={},l=(0,u.Z)(i,[["render",a]]);var c=l,s=t(2483);const v=e=>((0,o.dD)("data-v-60050b71"),e=e(),(0,o.Cn)(),e),d=v((()=>(0,o._)("h1",null,"Events for Good",-1))),f={class:"events"};function p(e,n,t,r,a,u){const i=(0,o.up)("EventCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[d,(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.events,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.id,event:e},null,8,["event"])))),128))])],64)}var w=t(4870),m=t(4311);const h=m.Z.create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application-json"}}),_=()=>h.get("/events"),b=e=>h.get(`/events/${e}`);var g={getEvents:_,getEvent:b},k=t(7139);const y={class:"event-card"};function j(e,n,t,r,a,u){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(i,{class:"event-link",to:{name:"event",params:{id:t.event.id}}},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o._)("span",null,"@ "+(0,k.zw)(t.event.time)+" on "+(0,k.zw)(t.event.date),1),(0,o._)("h4",null,(0,k.zw)(t.event.title),1)])])),_:1},8,["to"])}var O={name:"EventCard",props:{event:Object}};const C=(0,u.Z)(O,[["render",j],["__scopeId","data-v-33064fec"]]);var E=C,z={name:"EventList",components:{EventCard:E},async setup(){const e=await g.getEvents(),n=(0,w.iH)(e.data);return{events:n}}};const H=(0,u.Z)(z,[["render",p],["__scopeId","data-v-60050b71"]]);var L=H;const U={class:"about"},Z=(0,o._)("h1",null,"A site for events to better the world",-1),D=[Z];function x(e,n){return(0,o.wg)(),(0,o.iD)("div",U,D)}const P={},W=(0,u.Z)(P,[["render",x]]);var A=W;function T(e,n,t,r,a,u){return(0,o.wg)(),(0,o.j4)(o.n4,null,{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("h1",null,(0,k.zw)(r.event.title),1),(0,o._)("p",null,(0,k.zw)(r.event.time)+" on "+(0,k.zw)(r.event.date)+" @ "+(0,k.zw)(r.event.location),1),(0,o._)("p",null,(0,k.zw)(r.event.description),1)])])),fallback:(0,o.w5)((()=>[(0,o.Uk)(" Loading... ")])),_:1})}var Y={props:{id:{type:String,required:!0}},async setup(e){const n=await g.getEvent(e.id),t=(0,w.iH)(n.data);return{event:t}}};const I=(0,u.Z)(Y,[["render",T]]);var R=I;const q=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:A},{path:"/event/:id",name:"event",props:!0,component:R}],F=(0,s.p7)({history:(0,s.PO)("/vue-events-ui/"),base:"/vue-events-ui/",routes:q});var G=F;(0,r.ri)(c).use(G).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],l=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var s=l(t)}for(n&&n(r);c<u.length;c++)a=u[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkreal_world_vue"]=self["webpackChunkreal_world_vue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3596)}));r=t.O(r)})();
//# sourceMappingURL=app.e0140bc3.js.map