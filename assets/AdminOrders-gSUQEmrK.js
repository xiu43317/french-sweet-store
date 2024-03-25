import{_ as P,r as p,y as q,d as L,Z as V,o as r,c,a as e,t as n,j as w,F as O,l as A,w as D,$ as E,i as y,f as M,Y as k,h as S}from"./index-Hfj1Gs7U.js";import{D as T}from"./DeleteModal-KMnc2SI2.js";import{B as Y}from"./BottomPagination--l0cJpbZ.js";const Z={props:["selectedOrder"],setup(i){const o=p(null),a=p({user:{}});let t;const m=h=>new Date(h*1e3).toLocaleDateString(),v=h=>`${parseInt(h,10).toFixed(0).replace(/./g,(g,l,_)=>l&&g!=="."&&(_.length-l)%3===0?`, ${g}`.replace(/\s/g,""):g)}`,s=()=>{a.value={...i.selectedOrder},t.show()},b=()=>{t.hide()};return q(()=>i.selectedOrder,()=>{a.value={...i.selectedOrder}}),L(()=>{t=new V(o.value)}),{tempOrder:a,date:m,currency:v,openModal:s,orderModal:t,closeModal:b,modal:o}}},z={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},G={class:"modal-dialog modal-xl",role:"document"},H={class:"modal-content border-0"},J=e("div",{class:"modal-header bg-secondary text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),K={class:"modal-body"},Q={class:"row"},R={class:"col-md-4"},W=e("h3",null,"用戶資料",-1),X={class:"table"},ee={key:0},te=e("th",{style:{width:"100px"}},"姓名",-1),le=e("th",null,"Email",-1),oe=e("th",null,"電話",-1),ae=e("th",null,"地址",-1),ne=e("th",null,"備註",-1),se={class:"col-md-8"},de=e("h3",null,"訂單細節",-1),re={class:"table"},ce=e("th",{style:{width:"100px"}},"訂單編號",-1),ie=e("th",null,"下單時間",-1),ue=e("th",null,"付款時間",-1),_e={key:0},he={key:1},pe=e("th",null,"付款狀態",-1),me={key:0,class:"text-success"},be={key:1,class:"text-muted"},ve=e("th",null,"總金額",-1),ge=e("h3",null,"選購商品",-1),fe={class:"table"},ye=e("thead",null,[e("tr")],-1),Me={class:"text-end"},Oe={class:"d-flex justify-content-end"},ke={class:"form-check"},xe={class:"form-check-label",for:"flexCheckDefault"},$e={key:0},De={key:1},Ce={class:"modal-footer"},we=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ae(i,o,a,t,m,v){return r(),c("div",z,[e("div",G,[e("div",H,[J,e("div",K,[e("div",Q,[e("div",R,[W,e("table",X,[t.tempOrder.user?(r(),c("tbody",ee,[e("tr",null,[te,e("td",null,n(t.tempOrder.user.name),1)]),e("tr",null,[le,e("td",null,n(t.tempOrder.user.email),1)]),e("tr",null,[oe,e("td",null,n(t.tempOrder.user.tel),1)]),e("tr",null,[ae,e("td",null,n(t.tempOrder.user.address),1)]),e("tr",null,[ne,e("td",null,n(t.tempOrder.message),1)])])):w("",!0)])]),e("div",se,[de,e("table",re,[e("tbody",null,[e("tr",null,[ce,e("td",null,n(t.tempOrder.id),1)]),e("tr",null,[ie,e("td",null,n(t.date(t.tempOrder.create_at)),1)]),e("tr",null,[ue,e("td",null,[t.tempOrder.paid_date?(r(),c("span",_e,n(t.date(t.tempOrder.paid_date)),1)):(r(),c("span",he,"時間不正確"))])]),e("tr",null,[pe,e("td",null,[t.tempOrder.is_paid?(r(),c("strong",me,"已付款")):(r(),c("span",be,"尚未付款"))])]),e("tr",null,[ve,e("td",null,n(t.currency(t.tempOrder.total)),1)])])]),ge,e("table",fe,[ye,e("tbody",null,[(r(!0),c(O,null,A(t.tempOrder.products,s=>(r(),c("tr",{key:s.id},[e("th",null,n(s.product.title),1),e("td",null,n(s.qty)+" / "+n(s.product.unit),1),e("td",Me,n(t.currency(s.final_total)),1)]))),128))])]),e("div",Oe,[e("div",ke,[D(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":o[0]||(o[0]=s=>t.tempOrder.is_paid=s)},null,512),[[E,t.tempOrder.is_paid]]),e("label",xe,[t.tempOrder.is_paid?(r(),c("span",$e,"已付款")):(r(),c("span",De,"未付款"))])])])])])]),e("div",Ce,[we,e("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=s=>i.$emit("update-paid",t.tempOrder))}," 修改付款狀態 ")])])])],512)}const Pe=P(Z,[["render",Ae]]),Le={setup(){let i;const o=p(null),a=()=>{i.show()},t=()=>{i.hide()};return L(()=>{i=new V(o.value)}),{modal:o,openModal:a,closeModal:t}}},Be={class:"modal fade",id:"delAllModal","aria-hidden":"true",tabindex:"-1",ref:"modal"},Se={class:"modal-dialog"},Ve={class:"modal-content"},Ee=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-light"},"清空訂單"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ue=e("div",{class:"modal-body"},[e("p",null,"確定清空所有訂單？")],-1),Fe={class:"modal-footer"},Ie=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ne(i,o,a,t,m,v){return r(),c("div",Be,[e("div",Se,[e("div",Ve,[Ee,Ue,e("div",Fe,[Ie,e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=s=>this.$emit("clear-all"))},"確定刪除")])])])],512)}const je=P(Le,[["render",Ne]]),x="https://vue3-course-api.hexschool.io/v2",$="rock",qe={components:{DeleteModal:T,OrderModal:Pe,DeleteAllModal:je,BottomPagination:Y},setup(){const i=p(!1),o=p([]),a=p(!1),t=p({}),m=p(null),v=p({}),s=p(null),b=p(null),h=(d=1)=>{a.value=!0,k.get(`${x}/api/${$}/admin/orders?page=${d}`).then(u=>{o.value=[...u.data.orders],v.value={...u.data.pagination},a.value=!1}).catch(u=>{alert(u.response.data.message),a.value=!1})},f=d=>new Date(d*1e3).toLocaleDateString(),g=d=>`${parseInt(d,10).toFixed(0).replace(/./g,(C,B,j)=>B&&C!=="."&&(j.length-B)%3===0?`, ${C}`.replace(/\s/g,""):C)}`,l=d=>{t.value=d,s.value.openModal()},_=d=>{i.value=!0,k.put(`${x}/api/${$}/admin/order/${d.id}`,{data:d}).then(u=>{alert(u.data.message),b.value.closeModal(),i.value=!1,h()}).catch(u=>{alert(u.response.data.message),i.value=!1,b.value.closeModal()})},U=d=>{a.value=!0,k.delete(`${x}/api/${$}/admin/order/${d}`).then(u=>{alert(u.data.message+"該訂單"),s.value.hideModal(),a.value=!1,h()}).catch(u=>{alert(u.response.data.message),s.value.hideModal(),a.value=!1})},F=d=>{t.value=d,b.value.openModal()},I=()=>{a.value=!0,k.delete(`${x}/api/${$}/admin/orders/all`).then(d=>{alert(d.data.message),m.value.closeModal(),a.value=!1,h()}).catch(d=>{alert(d.response.data.message),m.value.closeModal(),a.value=!1})},N=()=>{m.value.openModal()};return L(()=>{h()}),{isToggling:i,orders:o,isLoading:a,tempOrder:t,pages:v,getOrders:h,date:f,currency:g,openDelOrderModal:l,updatePaid:_,deleteOrder:U,openModal:F,deleteAllOrders:I,orderModal:b,deleteModal:s,deleteAllModal:m,openDelAllModal:N}}},Te=e("div",{class:"h3 text-center mt-4"},"訂單列表",-1),Ye={class:"container"},Ze={class:"text-end"},ze={class:"table mt-4"},Ge=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),He={key:0},Je=["textContent"],Ke={class:"list-unstyled"},Qe={class:"text-right"},Re={class:"form-check form-switch"},We=["disabled","id","onUpdate:modelValue","onChange"],Xe=["for"],et={class:"btn-group"},tt=["onClick"],lt=["onClick"];function ot(i,o,a,t,m,v){const s=y("myLoading"),b=y("BottomPagination"),h=y("DeleteModal"),f=y("OrderModal"),g=y("DeleteAllModal");return r(),c(O,null,[M(s,{active:t.isLoading},null,8,["active"]),Te,e("div",Ye,[e("div",Ze,[e("button",{type:"button",class:"btn btn-danger mt-3",onClick:o[0]||(o[0]=l=>t.openDelAllModal())},"刪除全部訂單")]),e("table",ze,[Ge,e("tbody",null,[(r(!0),c(O,null,A(t.orders,l=>(r(),c(O,{key:l.id},[t.orders.length?(r(),c("tr",He,[e("td",null,n(t.date(l.create_at)),1),e("td",null,[l.user?(r(),c("span",{key:0,textContent:n(l.user.email)},null,8,Je)):w("",!0)]),e("td",null,[e("ul",Ke,[(r(!0),c(O,null,A(l.products,_=>(r(),c("li",{key:_.id},n(_.product.title)+" 數量："+n(_.qty)+" "+n(_.product.unit),1))),128))])]),e("td",Qe,n(t.currency(l.total)),1),e("td",null,[e("div",Re,[D(e("input",{disabled:t.isToggling,class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":_=>l.is_paid=_,onChange:_=>t.updatePaid(l)},null,40,We),[[E,l.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[D(e("span",null,"已付款",512),[[S,l.is_paid]]),D(e("span",null,"未付款",512),[[S,!l.is_paid]])],8,Xe)])]),e("td",null,[e("div",et,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:_=>t.openModal(l)}," 檢視 ",8,tt),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:_=>t.openDelOrderModal(l)}," 刪除 ",8,lt)])])])):w("",!0)],64))),128))])]),M(b,{pages:t.pages,onEmitPage:t.getOrders,ref:"pagination"},null,8,["pages","onEmitPage"])]),M(h,{product:t.tempOrder,onDeleteItem:t.deleteOrder,ref:"deleteModal"},null,8,["product","onDeleteItem"]),M(f,{selectedOrder:t.tempOrder,onUpdatePaid:t.updatePaid,ref:"orderModal"},null,8,["selectedOrder","onUpdatePaid"]),M(g,{ref:"deleteAllModal",onClearAll:t.deleteAllOrders},null,8,["onClearAll"])],64)}const dt=P(qe,[["render",ot]]);export{dt as default};
