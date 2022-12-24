(function(){"use strict";var e={5019:function(e,t,n){var o=n(9242),r=n(3396);const a={id:"nav"};function l(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",a,[(0,r.Wm)(n,{to:{name:"EventList"}},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:{name:"AboutView"}},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:{name:"EventCreate"}},{default:(0,r.w5)((()=>[(0,r.Uk)("Create Event")])),_:1})]),(0,r.Wm)(o,null,{default:(0,r.w5)((({Component:e})=>[((0,r.wg)(),(0,r.j4)(r.n4,{timeout:"0"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])])),fallback:(0,r.w5)((()=>[(0,r.Uk)(" Loading... ")])),_:2},1024))])),_:1})],64)}var i=n(89);const u={},c=(0,i.Z)(u,[["render",l]]);var v=c,s=n(2483);const d=e=>((0,r.dD)("data-v-60050b71"),e=e(),(0,r.Cn)(),e),p=d((()=>(0,r._)("h1",null,"Events for Good",-1))),f={class:"events"};function m(e,t,n,o,a,l){const i=(0,r.up)("EventCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[p,(0,r._)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.events,(e=>((0,r.wg)(),(0,r.j4)(i,{key:e.id,event:e},null,8,["event"])))),128))])],64)}var w=n(4870),_=n(4311);const b=_.Z.create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application-json"}}),h=()=>b.get("/events"),g=e=>b.get(`/events/${e}`);var y={getEvents:h,getEvent:g},k=n(7139);const E={class:"event-card"};function j(e,t,n,o,a,l){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(i,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:(0,r.w5)((()=>[(0,r._)("div",E,[(0,r._)("span",null,"@ "+(0,k.zw)(n.event.time)+" on "+(0,k.zw)(n.event.date),1),(0,r._)("h4",null,(0,k.zw)(n.event.title),1)])])),_:1},8,["to"])}var C={name:"EventCard",props:{event:Object}};const D=(0,i.Z)(C,[["render",j],["__scopeId","data-v-e92a4ac0"]]);var U=D,O={name:"EventList",components:{EventCard:U},async setup(){const e=await y.getEvents(),t=(0,w.iH)(e.data);return{events:t}}};const z=(0,i.Z)(O,[["render",m],["__scopeId","data-v-60050b71"]]);var L=z;function x(e,t,n,o,a,l){return(0,r.wg)(),(0,r.j4)(r.n4,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("h1",null,(0,k.zw)(o.event.title),1),(0,r._)("p",null,(0,k.zw)(o.event.time)+" on "+(0,k.zw)(o.event.date)+" @ "+(0,k.zw)(o.event.location),1),(0,r._)("p",null,(0,k.zw)(o.event.description),1)])])),fallback:(0,r.w5)((()=>[(0,r.Uk)(" Loading... ")])),_:1})}var H={props:{id:{type:String,required:!0}},async setup(e){const t=await y.getEvent(e.id),n=(0,w.iH)(t.data);return{event:n}}};const V=(0,i.Z)(H,[["render",x]]);var S=V;const T=e=>((0,r.dD)("data-v-1cbbccff"),e=e(),(0,r.Cn)(),e),W=T((()=>(0,r._)("h1",null,"Create an event",-1))),Z={class:"form-container"},A=T((()=>(0,r._)("label",null,"Select a category: ",-1))),Y=["value","selected"],P=T((()=>(0,r._)("h3",null,"Name & describe your event",-1))),I=T((()=>(0,r._)("label",null,"Title",-1))),M=T((()=>(0,r._)("label",null,"Description",-1))),K=T((()=>(0,r._)("h3",null,"Where is your event?",-1))),R=T((()=>(0,r._)("label",null,"Location",-1))),q=T((()=>(0,r._)("h3",null,"When is your event?",-1))),F=T((()=>(0,r._)("label",null,"Date",-1))),G=T((()=>(0,r._)("label",null,"Time",-1))),N=T((()=>(0,r._)("button",{type:"submit"},"Submit",-1)));function $(e,t,n,a,l,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[W,(0,r._)("div",Z,[(0,r._)("form",{onSubmit:t[6]||(t[6]=(0,o.iM)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[A,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.event.category=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.categories,(e=>((0,r.wg)(),(0,r.iD)("option",{value:e,key:e,selected:e===a.event.category},(0,k.zw)(e),9,Y)))),128))],512),[[o.bM,a.event.category]]),P,I,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.event.title=e),type:"text",placeholder:"Title"},null,512),[[o.nr,a.event.title]]),M,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.event.description=e),type:"text",placeholder:"Description"},null,512),[[o.nr,a.event.description]]),K,R,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>a.event.location=e),type:"text",placeholder:"Location"},null,512),[[o.nr,a.event.location]]),q,F,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>a.event.date=e),type:"text",placeholder:"Date"},null,512),[[o.nr,a.event.date]]),G,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>a.event.time=e),type:"text",placeholder:"Time"},null,512),[[o.nr,a.event.time]]),N],32)])],64)}var B={setup(){const e=["sustainability","nature","animal welfare","housing","education","food","community"],t=(0,w.iH)({id:"",category:"",title:"",description:"",location:"",date:"",time:"",organizer:""}),n=()=>{console.log("Event:",t.value)};return{categories:e,event:t,onSubmit:n}}};const J=(0,i.Z)(B,[["render",$],["__scopeId","data-v-1cbbccff"]]);var Q=J;const X={class:"about"},ee=(0,r._)("h1",null,"A site for events to better the world",-1),te=[ee];function ne(e,t){return(0,r.wg)(),(0,r.iD)("div",X,te)}const oe={},re=(0,i.Z)(oe,[["render",ne]]);var ae=re;const le=[{path:"/",name:"EventList",component:L},{path:"/event/:id",name:"EventDetails",props:!0,component:S},{path:"/event/create",name:"EventCreate",component:Q},{path:"/about",name:"AboutView",component:ae}],ie=(0,s.p7)({history:(0,s.PO)("/vue-events-ui/"),base:"/vue-events-ui/",routes:le});var ue=ie;(0,o.ri)(v).use(ue).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var l=1/0;for(v=0;v<e.length;v++){o=e[v][0],r=e[v][1],a=e[v][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,a<l&&(l=a));if(i){e.splice(v--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,l=o[0],i=o[1],u=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var v=u(n)}for(t&&t(o);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(v)},o=self["webpackChunkreal_world_vue"]=self["webpackChunkreal_world_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5019)}));o=n.O(o)})();
//# sourceMappingURL=app.748fe067.js.map