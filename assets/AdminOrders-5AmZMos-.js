import{_ as P,r as p,y as j,d as L,M as E,o as r,c,a as e,t as s,k as w,F as O,l as A,w as D,Z as U,i as f,f as M,Y as k,h as V}from"./index-invxNhHQ.js";import{D as Y}from"./DeleteModal-0hjLpIvT.js";import{A as Z}from"./BottomPagination-51KYOAk7.js";const z={props:["selectedOrder"],setup(m){const o=p(null),n=p({user:{}});let t;const _=h=>new Date(h*1e3).toLocaleDateString(),v=h=>`${parseInt(h,10).toFixed(0).replace(/./g,(g,l,u)=>l&&g!=="."&&(u.length-l)%3===0?`, ${g}`.replace(/\s/g,""):g)}`,a=()=>{n.value={...m.selectedOrder},t.show()},b=()=>{t.hide()};return j(()=>m.selectedOrder,()=>{n.value={...m.selectedOrder}}),L(()=>{t=new E(o.value)}),{tempOrder:n,date:_,currency:v,openModal:a,orderModal:t,closeModal:b,modal:o}}},G={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},H={class:"modal-dialog modal-xl",role:"document"},J={class:"modal-content border-0"},K=e("div",{class:"modal-header bg-secondary text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},R={class:"row"},T={class:"col-md-4"},W=e("h3",null,"用戶資料",-1),X={class:"table"},ee={key:0},te=e("th",{style:{width:"100px"}},"姓名",-1),le=e("th",null,"Email",-1),oe=e("th",null,"電話",-1),ne=e("th",null,"地址",-1),se=e("th",null,"備註",-1),ae={class:"col-md-8"},de=e("h3",null,"訂單細節",-1),re={class:"table"},ce=e("th",{style:{width:"100px"}},"訂單編號",-1),ie=e("th",null,"下單時間",-1),ue=e("th",null,"付款時間",-1),_e={key:0},he={key:1},pe=e("th",null,"付款狀態",-1),me={key:0,class:"text-success"},be={key:1,class:"text-muted"},ve=e("th",null,"總金額",-1),ge=e("h3",null,"選購商品",-1),ye={class:"table"},fe=e("thead",null,[e("tr")],-1),Me={class:"text-end"},Oe={class:"d-flex justify-content-end"},ke={class:"form-check"},xe={class:"form-check-label",for:"flexCheckDefault"},$e={key:0},De={key:1},Ce={class:"modal-footer"},we=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ae(m,o,n,t,_,v){return r(),c("div",G,[e("div",H,[e("div",J,[K,e("div",Q,[e("div",R,[e("div",T,[W,e("table",X,[t.tempOrder.user?(r(),c("tbody",ee,[e("tr",null,[te,e("td",null,s(t.tempOrder.user.name),1)]),e("tr",null,[le,e("td",null,s(t.tempOrder.user.email),1)]),e("tr",null,[oe,e("td",null,s(t.tempOrder.user.tel),1)]),e("tr",null,[ne,e("td",null,s(t.tempOrder.user.address),1)]),e("tr",null,[se,e("td",null,s(t.tempOrder.message),1)])])):w("",!0)])]),e("div",ae,[de,e("table",re,[e("tbody",null,[e("tr",null,[ce,e("td",null,s(t.tempOrder.id),1)]),e("tr",null,[ie,e("td",null,s(t.date(t.tempOrder.create_at)),1)]),e("tr",null,[ue,e("td",null,[t.tempOrder.paid_date?(r(),c("span",_e,s(t.date(t.tempOrder.paid_date)),1)):(r(),c("span",he,"時間不正確"))])]),e("tr",null,[pe,e("td",null,[t.tempOrder.is_paid?(r(),c("strong",me,"已付款")):(r(),c("span",be,"尚未付款"))])]),e("tr",null,[ve,e("td",null,s(t.currency(t.tempOrder.total)),1)])])]),ge,e("table",ye,[fe,e("tbody",null,[(r(!0),c(O,null,A(t.tempOrder.products,a=>(r(),c("tr",{key:a.id},[e("th",null,s(a.product.title),1),e("td",null,s(a.qty)+" / "+s(a.product.unit),1),e("td",Me,s(t.currency(a.final_total)),1)]))),128))])]),e("div",Oe,[e("div",ke,[D(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":o[0]||(o[0]=a=>t.tempOrder.is_paid=a)},null,512),[[U,t.tempOrder.is_paid]]),e("label",xe,[t.tempOrder.is_paid?(r(),c("span",$e,"已付款")):(r(),c("span",De,"未付款"))])])])])])]),e("div",Ce,[we,e("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=a=>m.$emit("update-paid",t.tempOrder))}," 修改付款狀態 ")])])])],512)}const Pe=P(z,[["render",Ae]]),Le={setup(m){let o;const n=p(null),t=()=>{o.show()},_=()=>{o.hide()};return L(()=>{o=new E(n.value)}),{modal:n,openModal:t,closeModal:_}}},Se={class:"modal fade",id:"delAllModal","aria-hidden":"true",tabindex:"-1",ref:"modal"},Ve={class:"modal-dialog"},Ee={class:"modal-content"},Ue=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-light"},"清空訂單"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Fe=e("div",{class:"modal-body"},[e("p",null,"確定清空所有訂單？")],-1),Ie={class:"modal-footer"},Be=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ne(m,o,n,t,_,v){return r(),c("div",Se,[e("div",Ve,[e("div",Ee,[Ue,Fe,e("div",Ie,[Be,e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=a=>this.$emit("clear-all"))},"確定刪除")])])])],512)}const qe=P(Le,[["render",Ne]]),x="https://vue3-course-api.hexschool.io/v2",$="rock",je={components:{DeleteModal:Y,OrderModal:Pe,DeleteAllModal:qe,AdminPagination:Z},setup(m){const o=p([]),n=p(!1),t=p({}),_=p(null),v=p({}),a=p(null),b=p(null),h=(d=1)=>{n.value=!0,k.get(`${x}/api/${$}/admin/orders?page=${d}`).then(i=>{o.value=[...i.data.orders],v.value={...i.data.pagination},n.value=!1}).catch(i=>{console.log(i.response.data.message),n.value=!1})},y=d=>new Date(d*1e3).toLocaleDateString(),g=d=>`${parseInt(d,10).toFixed(0).replace(/./g,(C,S,q)=>S&&C!=="."&&(q.length-S)%3===0?`, ${C}`.replace(/\s/g,""):C)}`,l=d=>{t.value=d,a.value.openModal()},u=d=>{k.put(`${x}/api/${$}/admin/order/${d.id}`,{data:d}).then(i=>{alert(i.data.message),b.value.closeModal(),h()}).catch(i=>{console.log(i),alert(i.response.data.message),b.value.closeModal()})},F=d=>{n.value=!0,k.delete(`${x}/api/${$}/admin/order/${d}`).then(i=>{n.value=!1,alert(i.data.message+"該訂單"),a.value.hideModal(),h()}).catch(i=>{n.value=!1,alert(i.response.data.message),a.value.hideModal()})},I=d=>{t.value=d,b.value.openModal()},B=()=>{n.value=!0,k.delete(`${x}/api/${$}/admin/orders/all`).then(d=>{alert(d.data.message),n.value=!1,_.value.closeModal(),h()}).catch(d=>{alert(d.response.data.message),n.value=!1,_.value.closeModal()})},N=()=>{_.value.openModal()};return L(()=>{h()}),{orders:o,isLoading:n,tempOrder:t,pages:v,getOrders:h,date:y,currency:g,openDelOrderModal:l,updatePaid:u,deleteOrder:F,openModal:I,deleteAllOrders:B,orderModal:b,deleteModal:a,deleteAllModal:_,openDelAllModal:N}}},Ye=e("div",{class:"h3 text-center mt-4"},"訂單列表",-1),Ze={class:"container"},ze={class:"text-end"},Ge={class:"table mt-4"},He=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),Je={key:0},Ke=["textContent"],Qe={class:"list-unstyled"},Re={class:"text-right"},Te={class:"form-check form-switch"},We=["id","onUpdate:modelValue","onChange"],Xe=["for"],et={class:"btn-group"},tt=["onClick"],lt=["onClick"];function ot(m,o,n,t,_,v){const a=f("myLoading"),b=f("AdminPagination"),h=f("DeleteModal"),y=f("OrderModal"),g=f("DeleteAllModal");return r(),c(O,null,[M(a,{active:t.isLoading},null,8,["active"]),Ye,e("div",Ze,[e("div",ze,[e("button",{type:"button",class:"btn btn-danger mt-3",onClick:o[0]||(o[0]=l=>t.openDelAllModal())},"刪除全部訂單")]),e("table",Ge,[He,e("tbody",null,[(r(!0),c(O,null,A(t.orders,l=>(r(),c(O,{key:l.id},[t.orders.length?(r(),c("tr",Je,[e("td",null,s(t.date(l.create_at)),1),e("td",null,[l.user?(r(),c("span",{key:0,textContent:s(l.user.email)},null,8,Ke)):w("",!0)]),e("td",null,[e("ul",Qe,[(r(!0),c(O,null,A(l.products,u=>(r(),c("li",{key:u.id},s(u.product.title)+" 數量："+s(u.qty)+" "+s(u.product.unit),1))),128))])]),e("td",Re,s(t.currency(l.total)),1),e("td",null,[e("div",Te,[D(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":u=>l.is_paid=u,onChange:u=>t.updatePaid(l)},null,40,We),[[U,l.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[D(e("span",null,"已付款",512),[[V,l.is_paid]]),D(e("span",null,"未付款",512),[[V,!l.is_paid]])],8,Xe)])]),e("td",null,[e("div",et,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:u=>t.openModal(l)}," 檢視 ",8,tt),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:u=>t.openDelOrderModal(l)}," 刪除 ",8,lt)])])])):w("",!0)],64))),128))])]),M(b,{pages:t.pages,onEmitPage:t.getOrders,ref:"pagination"},null,8,["pages","onEmitPage"])]),M(h,{product:t.tempOrder,onDeleteItem:t.deleteOrder,ref:"deleteModal"},null,8,["product","onDeleteItem"]),M(y,{selectedOrder:t.tempOrder,onUpdatePaid:t.updatePaid,ref:"orderModal"},null,8,["selectedOrder","onUpdatePaid"]),M(g,{ref:"deleteAllModal",onClearAll:t.deleteAllOrders},null,8,["onClearAll"])],64)}const dt=P(je,[["render",ot]]);export{dt as default};
