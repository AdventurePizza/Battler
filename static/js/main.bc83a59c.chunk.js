(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(t,e){},179:function(t,e,n){},181:function(t,e,n){},185:function(t,e){},187:function(t,e){},197:function(t,e){},199:function(t,e){},226:function(t,e){},228:function(t,e){},229:function(t,e){},235:function(t,e){},237:function(t,e){},255:function(t,e){},257:function(t,e){},269:function(t,e){},272:function(t,e){},307:function(t,e,n){"use strict";n.r(e);var r=n(28),a=(n(179),n(0)),s=n.n(a),c=n(41),i=n(20),u=(n(181),n(1)),o=n.n(u),f=n(332),l=n(17),p=n(105),d=n.n(p),h=o.a.createContext({getNfts:function(){return Promise.resolve({isSuccessful:!1})}}),b=function(t){var e=t.children,n=Object(u.useCallback)(function(){var t=Object(c.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://network1-backend.herokuapp.com"+"/users/getNfts/".concat(e),{method:"GET"});case 2:if(n=t.sent,console.log("egg"),!n.ok){t.next=8;break}return t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(r.jsx)(h.Provider,{value:{getNfts:n},children:e})},j=new l.i({name:"Beacon Docs"}),m=new p.UnityContext({loaderUrl:"buildUnity/test4.loader.js",dataUrl:"buildUnity/test4.data",frameworkUrl:"buildUnity/test4.framework.js",codeUrl:"buildUnity/test4.wasm"});var x=function(){Object(u.useContext)(h).getNfts;var t=Object(u.useState)(),e=Object(i.a)(t,2),n=e[0],a=e[1],o=Object(u.useState)("sync"),l=Object(i.a)(o,2),p=l[0],b=l[1],x=Object(u.useState)(!1),v=Object(i.a)(x,2),g=v[0],k=v[1],O=Object(u.useState)([]),w=Object(i.a)(O,2);function C(t){return A.apply(this,arguments)}function A(){return(A=Object(c.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.send("GameManager","setCharacters",e);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,j.getActiveAccount();case 3:t.t1=t.sent,(0,t.t0)(t.t1),n&&j.clearActiveAccount().then(Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,j.getActiveAccount();case 3:t.t1=t.sent,(0,t.t0)(t.t1),b("sync"),k(!1);case 7:case"end":return t.stop()}}),t)}))));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,j.getActiveAccount();case 3:if(t.t1=t.sent,(0,t.t0)(t.t1),!n){t.next=11;break}return b(n.address),k(!0),t.abrupt("return",n);case 11:return t.prev=11,console.log("Requesting permissions..."),t.next=15,j.requestPermissions();case 15:return e=t.sent,t.t2=a,t.next=19,j.getActiveAccount();case 19:t.t3=t.sent,(0,t.t2)(t.t3),console.log("Got permissions:",e.address),b(e.address),k(!0),t.next=29;break;case 26:t.prev=26,t.t4=t.catch(11),console.log("Got error:",t.t4);case 29:case"end":return t.stop()}}),t,null,[[11,26]])})))).apply(this,arguments)}return w[0],w[1],Object(u.useEffect)((function(){function t(t,n,r){return e.apply(this,arguments)}function e(){return(e=Object(c.a)(s.a.mark((function t(e,n,r){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.fxhash.xyz/graphql",{method:"POST",body:JSON.stringify({query:e,variables:r,operationName:n}),headers:{"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){return(r=Object(c.a)(s.a.mark((function e(n){var r,a,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(y,"Query",{id:n,skip:0,take:20,filters:{},sort:{id:"DESC"}});case 2:r=e.sent,a=r.errors,c=r.data,a&&console.error(a),console.log(c),i=c?c.user.objkts:null,u=(u=i.map((function(t){var e=t.issuer,n=t.metadata,r=t.assigned;return"tz2DNkXjYmJwtYceizo3LwNVrqfrguWoqmBE"===e.author.id&&r?n.attributes[0].value+"."+n.attributes[1].value+"."+n.attributes[2].value:null}))).join(),setTimeout(C,5e3,u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(t){r.apply(this,arguments)}(n.address)}),[n]),Object(u.useEffect)((function(){function t(){return(t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,j.getActiveAccount();case 3:t.t1=t.sent,(0,t.t0)(t.t1),n?(b(n.address.slice(0,6)+"..."+n.address.slice(32,36)),k(!0)):(b("sync"),k(!1));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{unityContext:m,style:{width:"100%",height:"100vh"}}),Object(r.jsxs)("div",{className:"top-right",style:{position:"absolute",display:"flex",alignItems:"center",backgroundColor:"white"},children:[g&&Object(r.jsxs)(f.a,{size:"small",title:"unsync",onClick:function(){!function(){S.apply(this,arguments)}()},children:[Object(r.jsx)("u",{children:"unsync"})," "]}),g&&Object(r.jsx)("div",{children:" | "}),Object(r.jsxs)(f.a,{title:"sync",size:"small",onClick:Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:case"end":return t.stop()}}),t)}))),children:[Object(r.jsx)("u",{children:p})," "]})]})]})},y="\nquery Query($id: String!, $take: Int, $skip: Int, $sort: UserCollectionSortInput, $filters: ObjktFilter) {\n  user(id: $id) {\n    id\n    objkts(take: $take, skip: $skip, sort: $sort, filters: $filters) {\n      id\n      assigned\n      rarity\n      iteration\n      owner {\n        id\n        name\n        flag\n        avatarUri\n        __typename\n      }\n      issuer {\n        name\n        flag\n        author {\n          id\n          name\n          flag\n          avatarUri\n          __typename\n        }\n        __typename\n      }\n      name\n      metadata\n      createdAt\n      offer {\n        id\n        price\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",v=n(27),g=n.n(v),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,334)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),s(t),c(t)}))},O=n(173);g.a.render(Object(r.jsx)(b,{children:Object(r.jsx)(O.a,{maxSnack:3,children:Object(r.jsx)(x,{})})}),document.getElementById("root")),k()}},[[307,1,2]]]);
//# sourceMappingURL=main.bc83a59c.chunk.js.map