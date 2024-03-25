import{_ as x,r as m,y as h,d as k,o,c as l,a as e,t as _,D as I,j as d,w as B,v as D,q as V,p as C,b as R}from"./index-Hfj1Gs7U.js";import{d as M}from"./math-9XHDQUjD.js";import{n as $}from"./axios-efjzW8l8.js";const c=i=>(C("data-v-8b050a35"),i=i(),R(),i),q={class:"row"},j=["src","alt"],z={class:"col-8 d-flex justify-content-between align-items-center"},N={class:"d-flex flex-column justify-content-evenly"},S={class:"fw-bold"},H={key:0},T={key:1,class:"text-success mt-1"},L={key:2},U={key:3,class:"text-success mt-1"},A={class:"d-flex align-items-center"},E={key:0,class:"fs-5"},F={class:"input-group",style:{"max-width":"100px"}},Q=["disabled"],G=c(()=>e("i",{class:"bi bi-dash-lg"},null,-1)),J=[G],K=["disabled"],O=["disabled"],P=c(()=>e("i",{class:"bi bi-plus-lg"},null,-1)),W=[P],X=["disabled"],Y=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),e("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1)),Z=[Y],tt=c(()=>e("hr",null,null,-1)),et={__name:"CartItem",props:["cart","isRemovable","isBtnDisabled"],emits:["deleteItem","updateItem"],setup(i,{emit:f}){const t=i,p=f,y=()=>{p("deleteItem",t.cart),b.value=!0},r=m(!1),u=()=>{if(a.value<1)$(!1,"數量不得小於1"),a.value=t.cart.qty;else{const v={data:{product_id:t.cart.product.id,qty:a.value}};p("updateItem",t.cart,v,r.value)}},g=()=>{a.value++,r.value=!0,u()},w=()=>{a.value--,r.value=!1,u()},a=m(0);h(()=>t.isBtnDisabled,()=>{t.isBtnDisabled||(b.value=!1)}),h(()=>t.cart,()=>{a.value=t.cart.qty}),k(()=>{a.value=t.cart.qty});const b=m(!1);return(v,s)=>(o(),l("div",null,[e("div",q,[e("img",{src:t.cart.product.imageUrl,class:"img-fluid object-fit-cover col-4",style:{height:"100px"},alt:t.cart.product.title},null,8,j),e("div",z,[e("div",N,[e("span",S,_(t.cart.product.title),1),t.cart.total===t.cart.final_total?(o(),l("span",H,"小計：")):(o(),l("span",T,"折扣價:")),t.cart.total===t.cart.final_total?(o(),l("span",L,"NT$ "+_(t.cart.total),1)):(o(),l("span",U,"NT$ "+_(I(M)(t.cart.final_total)),1))]),e("div",A,[t.isRemovable?d("",!0):(o(),l("span",E,"數量：")),e("div",F,[t.isRemovable?(o(),l("button",{key:0,disabled:t.isBtnDisabled||!t.isRemovable,class:"btn btn-sm btn-secondary border-0",type:"button",onClick:s[0]||(s[0]=n=>w())},J,8,Q)):d("",!0),B(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a.value=n),disabled:t.isBtnDisabled||!t.isRemovable,type:"number",class:"form-control text-center",placeholder:"1",min:"1",onChange:s[2]||(s[2]=n=>u())},null,40,K),[[D,a.value]]),t.isRemovable?(o(),l("button",{key:1,disabled:t.isBtnDisabled||!t.isRemovable,class:"btn btn-sm btn-secondary border-0",type:"button",onClick:s[3]||(s[3]=n=>g())},W,8,O)):d("",!0)]),t.isRemovable?(o(),l("a",{key:1,href:"#",class:"my-auto link-dark ms-1",onClick:s[4]||(s[4]=V(n=>y(),["prevent"])),disabled:t.isBtnDisabled},Z,8,X)):d("",!0)])])]),tt]))}},lt=x(et,[["__scopeId","data-v-8b050a35"]]);export{lt as C};
