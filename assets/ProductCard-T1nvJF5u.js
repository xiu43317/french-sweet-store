import{_ as x,r as v,s as S,i as C,o as T,c as P,a as e,t as g,q as I,w as k,h as B,f as D,k as q,p as N,b as V}from"./index-Hfj1Gs7U.js";import{u as j}from"./cart-tXYMpkQy.js";import{n as p}from"./axios-efjzW8l8.js";const M={props:["product"],setup(a,o){const d=j(),t=v(!1),{getCart:n,updateCart:u,createCart:r,changeAddStatus:c}=d,{cart:l,addBtnState:b}=S(d),w=v(null),i={...a.product};return{isSpinning:t,cartStore:d,addToCart:async()=>{const h=i.title;t.value=!0,c(!0);const _=l.value.carts.findIndex(s=>s.product_id===i.id),m={data:{product_id:i.id,qty:1}};if(_!==-1){const s=l.value.carts[_].qty+1,y=l.value.carts[_].id;m.data.qty=s,await u(y,m).then(f=>{p(!0,`${h}${f.data.message}`)}).catch(f=>{p(!1,f.response.data.message)}),await n()}else await r(m).then(s=>{p(!0,`${h}${s.data.message}`)}).catch(s=>{p(!1,s.response.data.message)}),await n();t.value=!1,c(!1)},goToDetail:()=>{o.emit("go-to-detail",i)},updateCart:u,createCart:r,tempProduct:i,productModal:w,addBtnState:b,changeAddStatus:c,getCart:n,cart:l}}},$=a=>(N("data-v-315db974"),a=a(),V(),a),A={class:"position-relative bg-img"},E=["src","alt"],Q=$(()=>e("div",{class:"title-bg position-absolute w-100 top-0 d-flex justify-content-center align-items-end"},[e("p",{class:"text-white fs-3 fw-bold"},"查看內容")],-1)),R={class:"card-body"},U={class:"mb-3"},z={class:"bg-success text-white py-1 px-2 rounded"},F={class:"card-title fs-4"},G={class:"card-text fs-5"},H=["disabled"];function J(a,o,d,t,n,u){const r=C("font-awesome-icon");return T(),P("div",{class:"card h-100",onClick:o[1]||(o[1]=c=>t.goToDetail())},[e("div",A,[e("img",{src:t.tempProduct.imageUrl,class:"card-img-top img-fluid object-fit-cover",alt:t.tempProduct.title,style:{height:"250px"}},null,8,E),Q]),e("div",R,[e("div",U,[e("span",z,g(t.tempProduct.category),1)]),e("h5",F,g(t.tempProduct.title),1),e("p",G," NT$ "+g(t.tempProduct.price),1),e("button",{type:"button",class:"btn btn-outline-secondary w-100",onClick:o[0]||(o[0]=I(c=>t.addToCart(),["stop"])),disabled:t.addBtnState},[k(D(r,{icon:"spinner",class:"fa-spin"},null,512),[[B,t.isSpinning]]),q(" 加入購物車 ")],8,H)])])}const Y=x(M,[["render",J],["__scopeId","data-v-315db974"]]);export{Y as P};
