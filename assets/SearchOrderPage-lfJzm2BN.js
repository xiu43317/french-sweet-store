import{O as g}from"./OrderDetail-v3sW8RVC.js";import{_ as b,r as d,u as y,i as h,o as l,c as i,f as _,a as o,w as x,v as S,D as O,k as v,F as k,p as w,b as I}from"./index-d2Hmcrb7.js";import{a as B,n as f}from"./axios-QAzFhJTr.js";import"./CartItem-eV45sCL8.js";import"./math-9XHDQUjD.js";const D={components:{OrderDetail:g},setup(r){const t=d(!1),n=d(null),e=d(null),u=y(),s=d(!1);return{order:n,orderId:e,getOrder:()=>{s.value=!0,B.getOrder(e.value).then(a=>{s.value=!1,a.data.order===null?f(!1,"沒有此訂單喔"):a.data.order.is_paid?(n.value=a.data.order,t.value=!0):u.push(`/payment?id=${e.value}`)}).catch(a=>{f(!1,a.response.data.message),s.value=!1})},hideSearchBar:t,redoSearch:()=>{t.value=!1,n.value=null,e.value=null},isLoading:s}}},c=r=>(w("data-v-ac1383a8"),r=r(),I(),r),C={key:0,class:"container text-center mh-370"},L=c(()=>o("h3",{class:"fs-2 my-5"},"查詢訂單",-1)),V={class:"input-group input-group-lg mt-5 mx-auto mw-500"},N=c(()=>o("span",{class:"input-group-text",id:"basic-addon1"},[o("i",{class:"bi bi-search"})],-1)),F=c(()=>o("i",{class:"bi bi-arrow-right"},null,-1)),M=[F],E={class:"contaner text-center"};function P(r,t,n,e,u,s){const p=h("myLoading"),m=h("OrderDetail");return l(),i(k,null,[_(p,{active:e.isLoading},null,8,["active"]),e.hideSearchBar?v("",!0):(l(),i("div",C,[L,o("div",V,[N,x(o("input",{type:"text",class:"form-control bg-white bg-opacity-50 text-dark",placeholder:"請輸入訂單編號","onUpdate:modelValue":t[0]||(t[0]=a=>e.orderId=a)},null,512),[[S,e.orderId]]),o("button",{class:"btn btn-outline-secondary",type:"submit",onClick:t[1]||(t[1]=O(a=>e.getOrder(),["prevent"]))},M)])])),_(m,{order:e.order},null,8,["order"]),o("div",E,[e.hideSearchBar?(l(),i("button",{key:0,onClick:t[2]||(t[2]=a=>e.redoSearch()),class:"btn btn-lg btn-outline-success"},"重新查詢")):v("",!0)])],64)}const z=b(D,[["render",P],["__scopeId","data-v-ac1383a8"]]);export{z as default};