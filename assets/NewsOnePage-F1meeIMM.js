import{r as h,d as $,y as k,i as p,o as r,c as u,a as s,f as g,g as f,j as d,t as _,G as w,F as y}from"./index-eVg9S7XR.js";import{a as i,n as v}from"./axios-e9KRWaGs.js";const N={class:"container mt-5"},A={class:"row fs-5 text-center"},L={key:0,class:"col-md-6 mb-3 mb-md-0"},I=s("i",{class:"bi bi-chevron-double-left"},null,-1),P={key:1,class:"col-md-6 mb-3 mb-md-0"},B=s("span",null,null,-1),D=[B],M={key:2,class:"col-md-6"},R=s("i",{class:"bi bi-chevron-double-right"},null,-1),T={key:3,class:"col-md-6"},V={__name:"ArticlePages",props:["currentNum"],setup(b){const c=b;let e=parseInt(c.currentNum);const n=h(""),l=h(""),m=()=>{e=parseInt(c.currentNum),e%10===0?(i.getArticles(e/10+1).then(t=>{t.data.articles?l.value=t.data.articles.filter(a=>a.num===e+1)[0]:l.value=""}).catch(t=>{v(t.response.data.message)}),i.getArticles(e/10).then(t=>{const a=t.data.articles.filter(o=>o.num===e-1)[0];n.value=a}).catch(t=>{v(t.response.data.message)})):e===1?(n.value="",i.getArticles(1).then(t=>{l.value=t.data.articles.filter(a=>a.num===e+1)[0]}).catch(t=>{v(t.response.data.message)})):e%10===1&&e!==1?(i.getArticles(e/10).then(t=>{const a=t.data.articles.filter(o=>o.num===e-1);n.value=a[0]}),i.getArticles(e/10+1).then(t=>{t.data.articles?n.value=t.data.articles.filter(a=>a.num===e+1)[0]:l.value=""})):i.getArticles(e/10+1).then(t=>{n.value=t.data.articles.filter(a=>a.num===e-1)[0],t.data.articles.filter(a=>a.num===e+1)[0]?l.value=t.data.articles.filter(a=>a.num===e+1)[0]:l.value=""}).catch(t=>{v(t.response.data.message)})};return $(()=>{m()}),k(()=>c.currentNum,()=>{m()}),(t,a)=>{const o=p("router-link");return r(),u("div",N,[s("div",A,[l.value?(r(),u("strong",L,[g(o,{class:"text-decoration-none link-dark",to:`/onenews/${l.value.id}/num/${l.value.num}`},{default:f(()=>[I,d(" 較舊一篇："+_(l.value.title),1)]),_:1},8,["to"])])):(r(),u("strong",P,D)),n.value?(r(),u("strong",M,[g(o,{class:"text-decoration-none link-dark",to:`/onenews/${n.value.id}/num/${n.value.num}`},{default:f(()=>[d(" 較新一篇："+_(n.value.title)+" ",1),R]),_:1},8,["to"])])):(r(),u("strong",T))])])}}},j={class:"container"},C={"aria-label":"breadcrumb"},F={class:"breadcrumb"},H={class:"breadcrumb-item"},S={class:"breadcrumb-item active","aria-current":"page"},q={class:"row justify-content-center"},E={class:"col-8"},G={class:"text-muted"},O=s("i",{class:"bi bi-calendar"},null,-1),U={class:"text-muted"},z=s("i",{class:"bi bi-pencil-square"},null,-1),J=["src","alt"],K=s("hr",null,null,-1),Q=["innerHTML"],Y={__name:"NewsOnePage",setup(b){const c=w(),e=h({}),n=h(!1),l=t=>{n.value=!0,i.getArticle(t).then(a=>{e.value={...a.data.article},e.value.create_at=new Date(e.value.create_at*1e3).toLocaleDateString(),m.value=c.params.num,n.value=!1}).catch(a=>{v(a.response.data.message),n.value=!1})},m=h(c.params.num);return $(()=>{l(c.params.id)}),k(()=>c.params.id,async t=>{await l(c.params.id)}),(t,a)=>{const o=p("myLoading"),x=p("RouterLink");return r(),u(y,null,[g(o,{active:n.value},null,8,["active"]),s("div",j,[s("nav",C,[s("ol",F,[s("li",H,[g(x,{to:"/news"},{default:f(()=>[d("消息列表")]),_:1})]),s("li",S,_(e.value.title),1)])]),s("div",q,[s("article",E,[s("h2",null,_(e.value.title),1),s("p",null,[s("strong",G,[O,d(" "+_(e.value.create_at),1)]),d(" - "),s("strong",U,[z,d(" 作者："+_(e.value.author),1)])]),s("img",{src:e.value.imageUrl,alt:e.value.title,class:"img-fluid mb-3"},null,8,J),K,s("div",{innerHTML:e.value.content,class:"fs-5"},null,8,Q)])])]),g(V,{currentNum:m.value},null,8,["currentNum"])],64)}}};export{Y as default};