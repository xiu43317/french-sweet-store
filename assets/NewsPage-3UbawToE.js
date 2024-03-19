import{B as y}from"./BottomPagination-6omV3C6J.js";import{_ as v,r,i as d,o as s,c as i,a as e,t as l,F as _,l as x,f as h,g as w,k as A,p as k,b as B,d as N,m as b,j as P}from"./index-7sQXWFie.js";import{a as C,n as L}from"./axios-1ZJK7IKQ.js";const S={props:["article"],setup(a){const o=r({create_at:"",imageUrl:"",title:"",tag:[],description:""});return o.value={...a.article},o.value.create_at=new Date(o.value.create_at*1e3).toLocaleDateString("zh-TW"),{tempArticle:o}}},j=a=>(k("data-v-0f907e4c"),a=a(),B(),a),I={class:"row mb-3 position-relative zoom-in"},V={class:"col-lg-4 rounded"},D={class:"frame rounded"},E=["src","alt"],$={class:"col-lg-8 d-flex flex-column justify-content-center mt-2 mt-lg-0 ps-lg-5"},z={class:"mb-3"},F={class:"fs-8 ms-3"},T={class:"mt-3"},U=j(()=>e("hr",null,null,-1));function M(a,o,n,t,m,c){const p=d("router-link");return s(),i(_,null,[e("div",I,[e("div",V,[e("div",D,[e("img",{class:"img-fluid object-fit-cover rounded",src:t.tempArticle.imageUrl,alt:t.tempArticle.title},null,8,E)])]),e("div",$,[e("h3",z,l(t.tempArticle.title),1),e("div",null,[(s(!0),i(_,null,x(t.tempArticle.tag,(u,g)=>(s(),i("span",{class:"bg-warning py-1 px-3 me-1 rounded-3 fw-bold",key:g},l(u),1))),128)),e("span",F,l(t.tempArticle.create_at),1)]),e("h4",T,[h(p,{to:`/onenews/${t.tempArticle.id}/num/${t.tempArticle.num}`,class:"text-decoration-none text-dark stretched-link"},{default:w(()=>[A(l(t.tempArticle.description),1)]),_:1},8,["to"])])])]),U],64)}const W=v(S,[["render",M],["__scopeId","data-v-0f907e4c"]]),q={components:{NewsBigCard:W,BottomPagination:y},setup(){const a=r(null),o=r({}),n=r(!1),t=m=>{n.value=!0,C.getArticles(m).then(c=>{a.value=[...c.data.articles],o.value={...c.data.pagination},n.value=!1}).catch(c=>{L(!1,c.response.data.message),n.value=!1})};return N(()=>{t(1)}),{isLoading:n,articles:a,pages:o,getArticles:t}}},G={class:"container mt-3",style:{"overflow-x":"hidden"}},H=e("div",{class:"text-center"},[e("h3",{class:"fs-2 my-3 my-lg-5","data-aos":"fade-right"},"最新消息")],-1),J={class:"d-flex justify-content-center"};function K(a,o,n,t,m,c){const p=d("myLoading"),u=d("NewsBigCard"),g=d("BottomPagination");return s(),i(_,null,[h(p,{active:t.isLoading},null,8,["active"]),e("div",G,[H,(s(!0),i(_,null,x(t.articles,f=>(s(),i("div",{key:f.id,"data-aos":"fade-left","data-aos-duration":"1000","data-aos-once":"false"},[f.isPublic?(s(),b(u,{key:0,article:f},null,8,["article"])):P("",!0)]))),128)),e("div",J,[h(g,{onEmitPage:t.getArticles,pages:t.pages},null,8,["onEmitPage","pages"])])])],64)}const X=v(q,[["render",K]]);export{X as default};
