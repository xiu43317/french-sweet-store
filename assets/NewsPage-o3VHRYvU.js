import{a as y}from"./BottomPagination-2dTgkY_4.js";import{_ as v,r as m,y as w,i as _,o as n,c,a as e,t as d,F as i,l as x,f as h,g as k,j as A,p as B,b,d as N,m as P,k as C}from"./index-luTI91mF.js";import{a as L,n as S}from"./axios-piIIiUTb.js";const j={props:["article"],setup(a){const o=m({create_at:"",imageUrl:"",title:"",tag:[],description:""});return o.value={...a.article},o.value.create_at=new Date(o.value.create_at*1e3).toLocaleDateString("zh-TW"),w(()=>a.article,()=>{console.log("trigger")}),{tempArticle:o}}},I=a=>(B("data-v-ed8503b0"),a=a(),b(),a),V={class:"row mb-3 position-relative zoom-in"},$={class:"col-lg-4"},D=["src"],E={class:"col-lg-8 d-flex flex-column justify-content-center mt-2 mt-lg-0"},z={class:"mb-3"},F={class:"fs-8 ms-3"},T={class:"mt-3"},U=I(()=>e("hr",null,null,-1));function M(a,o,l,t,r,p){const s=_("router-link");return n(),c(i,null,[e("div",V,[e("div",$,[e("img",{class:"img-fluid object-fit-cover rounded",src:t.tempArticle.imageUrl,alt:""},null,8,D)]),e("div",E,[e("h3",z,d(t.tempArticle.title),1),e("div",null,[(n(!0),c(i,null,x(t.tempArticle.tag,(g,u)=>(n(),c("span",{class:"bg-warning py-1 px-3 me-1 rounded-3 fw-bold",key:u},d(g),1))),128)),e("span",F,d(t.tempArticle.create_at),1)]),e("h4",T,[h(s,{to:`/onenews/${t.tempArticle.id}/num/${t.tempArticle.num}`,class:"text-decoration-none text-dark stretched-link"},{default:k(()=>[A(d(t.tempArticle.description),1)]),_:1},8,["to"])])])]),U],64)}const W=v(j,[["render",M],["__scopeId","data-v-ed8503b0"]]),q={components:{NewsBigCard:W,BottomPagination:y},setup(a){const o=m(null),l=m({}),t=m(!1),r=p=>{t.value=!0,L.getArticles(p).then(s=>{o.value=[...s.data.articles],l.value={...s.data.pagination},t.value=!1}).catch(s=>{S(!1,s.response.data.message),t.value=!1})};return N(()=>{r(1)}),{isLoading:t,articles:o,pages:l,getArticles:r}}},G={class:"container mt-3"},H=e("div",{class:"text-center"},[e("h3",{class:"fs-2 my-3 my-lg-5"},"最新消息")],-1),J={class:"d-flex justify-content-center"};function K(a,o,l,t,r,p){const s=_("myLoading"),g=_("NewsBigCard"),u=_("BottomPagination");return n(),c(i,null,[h(s,{active:t.isLoading},null,8,["active"]),e("div",G,[H,(n(!0),c(i,null,x(t.articles,f=>(n(),c(i,{key:f.id},[f.isPublic?(n(),P(g,{key:0,article:f},null,8,["article"])):C("",!0)],64))),128)),e("div",J,[h(u,{onEmitPage:t.getArticles,pages:t.pages},null,8,["onEmitPage","pages"])])])],64)}const X=v(q,[["render",K]]);export{X as default};