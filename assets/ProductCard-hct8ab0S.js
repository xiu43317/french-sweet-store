import{_ as x,r as v,s as S,i as C,o as T,c as P,a as e,t as g,E as I,w as k,h as B,f as D,k as N,p as q,b as V}from"./index-7pBR4ziE.js";import{u as j}from"./cart-jHnGYyxG.js";import{n as p}from"./axios-Dh73-l90.js";const E={props:["product"],setup(a,o){const i=j(),t=v(!1),{getCart:n,updateCart:f,createCart:r,changeAddStatus:c}=i,{cart:l,addBtnState:w}=S(i),b=v(null),d={...a.product};return{isSpinning:t,cartStore:i,addToCart:async()=>{const h=d.title;t.value=!0,c(!0);const u=l.value.carts.findIndex(s=>s.product_id===d.id),_={data:{product_id:d.id,qty:1}};if(u!==-1){const s=l.value.carts[u].qty+1,y=l.value.carts[u].id;_.data.qty=s,await f(y,_).then(m=>{p(!0,`${h}${m.data.message}`)}).catch(m=>{p(!1,m.response.data.message)}),await n()}else await r(_).then(s=>{p(!0,`${h}${s.data.message}`)}).catch(s=>{p(!1,s.response.data.message)}),await n();t.value=!1,c(!1)},goToDetail:()=>{o.emit("go-to-detail",d)},updateCart:f,createCart:r,tempProduct:d,productModal:b,addBtnState:w,changeAddStatus:c,getCart:n,cart:l}}},M=a=>(q("data-v-98ed06fd"),a=a(),V(),a),$={class:"position-relative bg-img"},A=["src","alt"],Q=M(()=>e("div",{class:"title-bg position-absolute w-100 top-0 d-flex justify-content-center align-items-end"},[e("p",{class:"text-white fs-3 fw-bold"},"查看內容")],-1)),R={class:"card-body"},U={class:"mb-3"},z={class:"bg-success text-white py-1 px-2 rounded"},F={class:"card-title fs-4"},G={class:"card-text fs-5"},H=["disabled"];function J(a,o,i,t,n,f){const r=C("font-awesome-icon");return T(),P("div",{class:"card h-100",onClick:o[1]||(o[1]=c=>t.goToDetail())},[e("div",$,[e("img",{src:t.tempProduct.imageUrl,class:"card-img-top img-fluid object-fit-cover",alt:t.tempProduct.title,style:{height:"250px"}},null,8,A),Q]),e("div",R,[e("div",U,[e("span",z,g(t.tempProduct.category),1)]),e("h5",F,g(t.tempProduct.title),1),e("p",G," NT$ "+g(t.tempProduct.price),1),e("button",{class:"btn btn-outline-secondary w-100",onClick:o[0]||(o[0]=I(c=>t.addToCart(),["stop"])),disabled:t.addBtnState},[k(D(r,{icon:"spinner",class:"fa-spin"},null,512),[[B,t.isSpinning]]),N(" 加入購物車 ")],8,H)])])}const Y=x(E,[["render",J],["__scopeId","data-v-98ed06fd"]]);export{Y as P};