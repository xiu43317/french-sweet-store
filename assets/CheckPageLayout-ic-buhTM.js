import{_ as U,s as I,r as x,d as $,y as A,i as b,o as v,c as g,a as t,t as S,w as T,v as P,h as j,f as m,F as M,p as D,b as O,u as R,g as Q,j as H,l as J,k as q,m as G,J as L}from"./index-7pBR4ziE.js";import{F as K}from"./FlowChart-dGkOJJHT.js";import{u as z}from"./cart-jHnGYyxG.js";import{n as _,a as W}from"./axios-Dh73-l90.js";import{S as V}from"./sweetalert2.all-BrCdV07K.js";import{d as E}from"./math-9XHDQUjD.js";const X={props:["cart"],setup(s){const a=z(),{getCart:d,deleteCart:e,updateCart:w,changeAddStatus:l}=a,{addBtnState:C}=I(a),o=x(s.cart.qty),u=x(!1),p=x(null);let B=0;const y=x(!1),h=async()=>{V.fire({icon:"warning",title:`確定刪除${s.cart.product.title}`,text:"刪除後的資料無法恢復",showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"red",cancelButtonColor:"gray",confirmButtonText:"確定",cancelButtonText:"取消"}).then(async f=>{f.isConfirmed?(u.value=!0,l(!0),await e(s.cart.id).then(n=>{l(!1),u.value=!1,V.fire({title:"刪除成功",text:`${s.cart.product.title}${n.data.message}`,icon:"success"}).then(r=>{r.isConfirmed&&d()})}).catch(n=>{u.value=!1,l(!1),V.fire({title:"刪除失敗",text:`${n.response.data.message}`,icon:"error"})})):f.isDenied&&(_(!1,"動作取消"),l(!1))})},k=async()=>{l(!0),o.value+=1;const f={data:{product_id:s.cart.product_id,qty:o.value}};await w(s.cart.id,f).then(n=>{_(!0,`${s.cart.product.title}已加入`)}).catch(n=>{_(!1,`${n.response.data.message}`)}),await d(),l(!1)},c=async()=>{l(!0);const f={data:{product_id:s.cart.product_id,qty:o.value}};await w(s.cart.id,f).then(n=>{_(!0,`${s.cart.product.title}已更新`)}).catch(n=>{_(!1,`${n.response.data.message}`)}),await d(),l(!1)},i=async()=>{if(l(!0),o.value-=1,o.value<1){_(!1,"數量不得小於1"),o.value=s.cart.qty,l(!1);return}const f={data:{product_id:s.cart.product_id,qty:o.value}};await w(s.cart.id,f).then(n=>{_(!0,`${s.cart.product.title}已移除`)}).catch(n=>{_(!1,`${n.response.data.message}`)}),await d(),l(!1)};return $(()=>{l(!1),p.value.addEventListener("focus",()=>{B=o.value}),p.value.addEventListener("blur",()=>{o.value<1?(_(!1,"數量不得小於1"),o.value=s.cart.qty):B!==o.value&&c()})}),A(()=>s.cart.qty,()=>{o.value=s.cart.qty}),{qty:o,myQty:p,addQty:k,delFloat:E,minusQty:i,updateQty:c,deleteItem:h,isRenewing:y,cartLoading:u,addBtnState:C,changeAddStatus:l}}},N=s=>(D("data-v-51cfb3d3"),s=s(),O(),s),Y={class:"row"},Z={class:"col-md-4"},tt=["src","alt"],et={class:"col-md-8 d-flex justify-content-between align-items-center my-3 my-lg-0"},at={class:"d-flex justify-content-between flex-lg-column"},st={class:"mt-3"},ot={class:"mt-3 mt-lg-0"},nt={key:0,class:"mt-lg-0 text-success"},lt={key:1,class:"mt-lg-0"},ct={class:"d-flex"},dt={class:"input-group mb-3",style:{"max-width":"150px","max-height":"20px"}},it=["disabled"],rt=N(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),mt=[rt],ut=["disabled"],_t=N(()=>t("i",{class:"bi bi-plus-lg"},null,-1)),ft=[_t],ht={class:"ms-3 d-flex flex-column justify-content-center"},bt=["disabled"],vt=N(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-trash mt-2",viewBox:"0 0 16 16"},[t("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),t("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1)),yt=N(()=>t("hr",null,null,-1));function gt(s,a,d,e,w,l){const C=b("font-awesome-icon");return v(),g(M,null,[t("div",Y,[t("div",Z,[t("img",{src:d.cart.product.imageUrl,alt:d.cart.product.title,class:"img-fluid object-fit-cover"},null,8,tt)]),t("div",et,[t("div",at,[t("div",st,[t("h5",null,S(d.cart.product.title),1),t("p",ot,"單價：NT$ "+S(d.cart.product.price),1),d.cart.final_total!==d.cart.total?(v(),g("p",nt,"折扣價：NT$ "+S(e.delFloat(d.cart.final_total)),1)):(v(),g("p",lt,"小計：NT$ "+S(d.cart.total),1))])]),t("div",ct,[t("div",dt,[t("button",{disabled:e.addBtnState,class:"fs-4 btn btn-sm btn-secondary border-0",type:"button",onClick:a[0]||(a[0]=o=>e.minusQty())},mt,8,it),T(t("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.qty=o),type:"number",class:"form-control text-center rounded",placeholder:"1",min:"1",ref:"myQty"},null,512),[[P,e.qty]]),t("button",{disabled:e.addBtnState,class:"fs-4 btn btn-sm btn-secondary border-0",type:"button",onClick:a[2]||(a[2]=o=>e.addQty())},ft,8,ut)]),t("div",ht,[t("button",{type:"button",class:"bg-white border-0",onClick:a[3]||(a[3]=o=>e.deleteItem()),disabled:e.addBtnState},[T(m(C,{icon:"spinner",class:"fa-spin"},null,512),[[j,e.cartLoading]]),vt],8,bt)])])])]),yt],64)}const xt=U(X,[["render",gt],["__scopeId","data-v-51cfb3d3"]]),wt={components:{FlowChart:K,ProductOrderCard:xt},setup(){const s=z(),a=x(!1),{cart:d,addBtnState:e,isCartLoading:w}=I(s),{getCart:l,deleteAllCart:C,useCoupon:o,changeAddStatus:u}=s,p=async()=>{u(!0);const n={data:{code:h.value}};await o(n).then(r=>{V.fire({icon:"success",title:r.data.message}).then(F=>{F.isConfirmed&&l()})}).catch(r=>{_(!1,r.response.data.message)}),u(!1)},B=async()=>{V.fire({icon:"warning",title:"確定刪除整個購物車？",text:"刪除後的資料無法恢復",showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"red",cancelButtonColor:"gray",confirmButtonText:"確定",cancelButtonText:"取消"}).then(async n=>{n.isConfirmed?(u(!0),a.value=!0,await C().then(r=>{a.value=!1,V.fire({title:"刪除成功",text:`全部${r.data.message}`,icon:"success"}).then(F=>{F.isConfirmed&&l()})}).catch(r=>{a.value=!1,V.fire({title:"刪除失敗",text:`${r.response.data.message}`,icon:"error"})}),u(!1)):n.isDenied&&_(!1,"動作取消")})},y=R(),h=x(null),k=x(""),c=()=>{const n={data:{user:i.value,message:k.value}};W.sendOrder(n).then(async r=>{await l(),y.push(`/payment?id=${r.data.orderId}`)}).catch(r=>{_(!1,r.message)})},i=x({email:"",name:"",address:"",tel:""}),f=n=>/^(09)[0-9]{8}$/.test(n)?!0:"需要正確的電話號碼";return $(()=>{u(!1)}),{cart:d,cartLoading:a,isCartLoading:w,addBtnState:e,changeAddStatus:u,cartStore:s,message:k,couponCode:h,isPhone:f,user:i,goToPayment:c,clearCart:B,useMyCoupon:p,delFloat:E}}},Ct={class:"container my-4"},pt={class:"my-5 row justify-content-center"},Vt={class:"col-lg-6"},Bt=t("h4",{class:"text-center"},"購物車資訊",-1),kt=t("hr",null,null,-1),St={key:0,class:"text-center my-5"},qt=t("p",{class:"fs-4 fw-bold"},"你的購物車現在沒東西喔!",-1),Tt={class:"row"},Lt={class:"col-md-6 my-3"},Nt={class:"input-group my-auto"},Ft=["disabled"],Pt={class:"col-md-6 my-3"},Mt={class:"row"},Qt={key:0,class:"fs-4 fw-bold text-success col-md-12 col-7 text-end my-auto order-md-1 order-2"},Ut={key:1,class:"fs-4 fw-bold col-md-12 col-6 col-7 text-end my-auto order-md-1 order-2"},It={class:"col-md-12 col-5 mt-md-4 text-md-end order-lg-2 order-1 my-auto"},$t=["disabled"],jt=t("div",{class:"mt-1"},null,-1),zt={class:"col-lg-6"},Et=t("h4",{class:"text-center"},"訂購人資訊",-1),At=t("hr",null,null,-1),Dt={class:"mb-3"},Ot=t("label",{for:"email",class:"form-label"},[t("span",{class:"text-danger"},"*"),q(" Email")],-1),Rt={class:"mb-3"},Ht=t("label",{for:"name",class:"form-label"},[t("span",{class:"text-danger"},"*"),q(" 收件人姓名")],-1),Jt={class:"mb-3"},Gt=t("label",{for:"tel",class:"form-label"},[t("span",{class:"text-danger"},"*"),q(" 收件人電話")],-1),Kt={class:"mb-3"},Wt=t("label",{for:"address",class:"form-label"},[t("span",{class:"text-danger"},"*"),q(" 收件人地址")],-1),Xt={class:"mb-3"},Yt=t("label",{for:"message",class:"form-label"},"留言",-1),Zt={class:"text-end"},te=["disabled"];function ee(s,a,d,e,w,l){const C=b("myLoading"),o=b("FlowChart"),u=b("router-link"),p=b("ProductOrderCard"),B=b("font-awesome-icon"),y=b("v-field"),h=b("error-message"),k=b("v-form");return v(),g(M,null,[m(C,{active:e.isCartLoading},null,8,["active"]),m(o,{outProgress:0}),t("div",Ct,[t("div",pt,[t("div",Vt,[Bt,kt,e.cart.total?H("",!0):(v(),g("div",St,[qt,m(u,{to:"/products",class:"btn btn-lg btn-success"},{default:Q(()=>[q("選購商品")]),_:1})])),(v(!0),g(M,null,J(e.cart.carts,c=>(v(),G(p,{key:c.id,cart:c},null,8,["cart"]))),128)),t("div",Tt,[t("div",Lt,[t("div",Nt,[T(t("input",{type:"text",class:"form-control",placeholder:"請輸入折扣碼","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":a[0]||(a[0]=c=>e.couponCode=c)},null,512),[[P,e.couponCode]]),t("button",{disabled:e.addBtnState||!e.cart.total,class:"btn btn-outline-success",type:"button",id:"button-addon2",onClick:a[1]||(a[1]=c=>e.useMyCoupon())}," 套用 ",8,Ft)])]),t("div",Pt,[t("div",Mt,[e.cart.final_total!==e.cart.total?(v(),g("span",Qt,"折扣價：NT$ "+S(e.delFloat(e.cart.final_total)),1)):(v(),g("span",Ut,"總計：NT$ "+S(e.cart.total),1)),t("div",It,[t("button",{type:"button",class:"btn btn-outline-success",onClick:a[2]||(a[2]=c=>e.clearCart()),disabled:e.addBtnState||!e.cart.total},[T(m(B,{icon:"spinner",class:"fa-spin"},null,512),[[j,e.cartLoading]]),q(" 清空購物車 ")],8,$t)])])])]),jt]),t("div",zt,[Et,At,m(k,{onSubmit:a[8]||(a[8]=c=>e.goToPayment()),class:"bg-light p-3 rounded",ref:"form"},{default:Q(({errors:c})=>[t("div",Dt,[Ot,m(y,{id:"email",name:"email",type:"email",class:L(["form-control",{"is-invalid":c.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:e.user.email,"onUpdate:modelValue":a[3]||(a[3]=i=>e.user.email=i)},null,8,["class","modelValue"]),m(h,{name:"email",class:"invalid-feedback"})]),t("div",Rt,[Ht,m(y,{id:"name",name:"姓名",type:"text",class:L(["form-control",{"is-invalid":c.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:e.user.name,"onUpdate:modelValue":a[4]||(a[4]=i=>e.user.name=i)},null,8,["class","modelValue"]),m(h,{name:"姓名",class:"invalid-feedback"})]),t("div",Jt,[Gt,m(y,{id:"tel",name:"電話",type:"text",class:L(["form-control",{"is-invalid":c.電話}]),placeholder:"請輸入電話",rules:e.isPhone,modelValue:e.user.tel,"onUpdate:modelValue":a[5]||(a[5]=i=>e.user.tel=i)},null,8,["class","rules","modelValue"]),m(h,{name:"電話",class:"invalid-feedback"})]),t("div",Kt,[Wt,m(y,{id:"address",name:"地址",type:"text",class:L(["form-control",{"is-invalid":c.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:e.user.address,"onUpdate:modelValue":a[6]||(a[6]=i=>e.user.address=i)},null,8,["class","modelValue"]),m(h,{name:"地址",class:"invalid-feedback"})]),t("div",Xt,[Yt,T(t("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":a[7]||(a[7]=i=>e.message=i)},null,512),[[P,e.message]])]),t("div",Zt,[t("button",{type:"submit",class:"btn btn-success",disabled:e.addBtnState||!e.cart.total}," 送出訂單 ",8,te)])]),_:1},512)])])])],64)}const de=U(wt,[["render",ee]]);export{de as default};
