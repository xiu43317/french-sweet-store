import{_ as k,r as h,u as m,d as b,i as d,o as u,c as f,a as e,f as s,g as o,D as g,m as x,k as N,F as $,Y as v,j as t}from"./index-M6RErX2x.js";const A="https://vue3-course-api.hexschool.io/v2",M={setup(p){const n=h(!1),c=m(),r=()=>{const i=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");v.defaults.headers.common.Authorization=i,v.post(`${A}/api/user/check`).then(()=>{n.value=!0}).catch(a=>{console.dir(a),alert(a.response.data.message),c.push("/login")})},l=()=>{document.cookie="hexToken=;expires=;",alert("已登出"),c.push("/login")};return b(()=>{r()}),{checkLogin:r,checkSuccess:n,signOut:l,router:c}}},w={class:"navbar navbar-expand-lg navbar-dark bg-dark"},B={class:"container-fluid"},C=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),T={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},V={class:"navbar-nav"},y={class:"navbar-nav ms-auto"};function D(p,n,c,r,l,i){const a=d("router-link"),_=d("router-view");return u(),f($,null,[e("nav",w,[e("div",B,[s(a,{to:"/admin/products",class:"navbar-brand"},{default:o(()=>[t("後臺系統")]),_:1}),C,e("div",T,[e("div",V,[s(a,{to:"/admin/products",class:"nav-link"},{default:o(()=>[t("產品列表")]),_:1}),s(a,{to:"/admin/coupons",class:"nav-link"},{default:o(()=>[t("優惠券")]),_:1}),s(a,{to:"/admin/orders",class:"nav-link"},{default:o(()=>[t("訂單")]),_:1}),s(a,{to:"/admin/articles",class:"nav-link"},{default:o(()=>[t("新增文章")]),_:1}),e("a",{class:"nav-link",href:"#",onClick:n[0]||(n[0]=g(F=>r.signOut(),["prevent"]))},"登出")]),e("div",y,[s(a,{to:"/",class:"nav-link"},{default:o(()=>[t("回前台")]),_:1})])])])]),r.checkSuccess?(u(),x(_,{key:0})):N("",!0)],64)}const S=k(M,[["render",D]]);export{S as default};
