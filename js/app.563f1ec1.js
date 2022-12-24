(function(){"use strict";var e={4861:function(e,t,n){var o=n(9242),a=n(3396);const r=(e="")=>localStorage.getItem(e),i=(e="")=>JSON.parse(r(e)),l=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),u="events",c=[{id:"123",category:"animal welfare",title:"Cat Adoption Day",description:"Find your new feline friend at this event.",location:"Meow Town",date:"January 28, 2022",time:"12:00",organizer:"Kat Laydee"},{id:"456",category:"food",title:"Community Gardening",description:"Join us as we tend to the community edible plants.",location:"Flora City",date:"March 14, 2022",time:"10:00",organizer:"Fern Pollin"},{id:"789",category:"sustainability",title:"Beach Cleanup",description:"Help pick up trash along the shore.",location:"Playa Del Carmen",date:"July 22, 2022",time:"11:00",organizer:"Carey Wales"}],s=()=>l(u,c),d=()=>i(u),v=e=>d()?.find((t=>t.id===String(e)))??null,p={id:"nav"};var f={__name:"App",setup(e){const t=d();return t||s(),(e,t)=>{const n=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",p,[(0,a.Wm)(n,{to:{name:"EventList"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:{name:"AboutView"}},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:{name:"EventCreate"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Create Event")])),_:1})]),(0,a.Wm)(o,null,{default:(0,a.w5)((({Component:e})=>[((0,a.wg)(),(0,a.j4)(a.n4,{timeout:"0"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))])])),fallback:(0,a.w5)((()=>[(0,a.Uk)(" Loading... ")])),_:2},1024))])),_:1})],64)}}};const m=f;var w=m,_=n(2483);const y=e=>((0,a.dD)("data-v-38daef94"),e=e(),(0,a.Cn)(),e),g=y((()=>(0,a._)("h1",null,"Events for Good",-1))),h={class:"events"};function b(e,t,n,o,r,i){const l=(0,a.up)("EventCard");return(0,a.wg)(),(0,a.iD)(a.HY,null,[g,(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.events,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e.id,event:e},null,8,["event"])))),128))])],64)}var k=n(4870),C=n(7139);const D={class:"event-card"};function O(e,t,n,o,r,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(l,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:(0,a.w5)((()=>[(0,a._)("div",D,[(0,a._)("span",null,"@ "+(0,C.zw)(n.event.time)+" on "+(0,C.zw)(n.event.date),1),(0,a._)("h4",null,(0,C.zw)(n.event.title),1)])])),_:1},8,["to"])}var z={name:"EventCard",props:{event:Object}},E=n(89);const S=(0,E.Z)(z,[["render",O],["__scopeId","data-v-e92a4ac0"]]);var U=S,j={name:"EventList",components:{EventCard:U},setup(){const e=d(),t=(0,k.iH)(e);return{events:t}}};const H=(0,E.Z)(j,[["render",b],["__scopeId","data-v-38daef94"]]);var x=H;function L(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,(0,C.zw)(o.event.title),1),(0,a._)("p",null,(0,C.zw)(o.event.time)+" on "+(0,C.zw)(o.event.date)+" @ "+(0,C.zw)(o.event.location),1),(0,a._)("p",null,(0,C.zw)(o.event.description),1)])}var T={props:{id:{type:String,required:!0}},setup(e){const t=v(e.id),n=(0,k.iH)(t);return{event:n}}};const V=(0,E.Z)(T,[["render",L]]);var M=V;const W=e=>((0,a.dD)("data-v-1763b1ea"),e=e(),(0,a.Cn)(),e),A=W((()=>(0,a._)("h1",null,"Create an event",-1))),Z={class:"form-container"},I=W((()=>(0,a._)("label",null,"Select a category: ",-1))),J=["value","selected"],P=W((()=>(0,a._)("h3",null,"Name & describe your event",-1))),Y=W((()=>(0,a._)("label",null,"Title",-1))),F=W((()=>(0,a._)("label",null,"Description",-1))),K=W((()=>(0,a._)("h3",null,"Where is your event?",-1))),N=W((()=>(0,a._)("label",null,"Location",-1))),G=W((()=>(0,a._)("h3",null,"When is your event?",-1))),q=W((()=>(0,a._)("label",null,"Date",-1))),B=W((()=>(0,a._)("label",null,"Time",-1))),R=W((()=>(0,a._)("button",{type:"submit"},"Submit",-1)));function Q(e,t,n,r,i,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[A,(0,a._)("div",Z,[(0,a._)("form",{onSubmit:t[6]||(t[6]=(0,o.iM)(((...e)=>r.onSubmit&&r.onSubmit(...e)),["prevent"]))},[I,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.event.category=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.categories,(e=>((0,a.wg)(),(0,a.iD)("option",{value:e,key:e,selected:e===r.event.category},(0,C.zw)(e),9,J)))),128))],512),[[o.bM,r.event.category]]),P,Y,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.event.title=e),type:"text",placeholder:"Title"},null,512),[[o.nr,r.event.title]]),F,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.event.description=e),type:"text",placeholder:"Description"},null,512),[[o.nr,r.event.description]]),K,N,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.event.location=e),type:"text",placeholder:"Location"},null,512),[[o.nr,r.event.location]]),G,q,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>r.event.date=e),type:"text",placeholder:"Date"},null,512),[[o.nr,r.event.date]]),B,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>r.event.time=e),type:"text",placeholder:"Time"},null,512),[[o.nr,r.event.time]]),R],32)])],64)}var X=n(65),$=n(3029),ee={setup(){const e=(0,X.oR)(),t=["sustainability","nature","animal welfare","housing","education","food","community"],n=(0,k.iH)({id:"",category:"",title:"",description:"",location:"",date:"",time:"",organizer:""}),o=()=>{n.value.id=(0,$.Z)(),n.value.organizer=e.state.user,console.log("Event:",n.value)};return{categories:t,event:n,onSubmit:o}}};const te=(0,E.Z)(ee,[["render",Q],["__scopeId","data-v-1763b1ea"]]);var ne=te;const oe={class:"about"},ae=(0,a._)("h1",null,"A site for events to better the world",-1),re=[ae];function ie(e,t){return(0,a.wg)(),(0,a.iD)("div",oe,re)}const le={},ue=(0,E.Z)(le,[["render",ie]]);var ce=ue;const se=[{path:"/",name:"EventList",component:x},{path:"/event/:id",name:"EventDetails",props:!0,component:M},{path:"/event/create",name:"EventCreate",component:ne},{path:"/about",name:"AboutView",component:ce}],de=(0,_.p7)({history:(0,_.PO)("/vue-events-ui/"),base:"/vue-events-ui/",routes:se});var ve=de,pe=(0,X.MT)({state:{user:"Suhel Makkad"},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(w).use(pe).use(ve).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],r=e[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(u)var s=u(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},o=self["webpackChunkreal_world_vue"]=self["webpackChunkreal_world_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4861)}));o=n.O(o)})();
//# sourceMappingURL=app.563f1ec1.js.map