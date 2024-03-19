import{_ as U,r as c,d as V,M as P,y as N,o as h,c as b,a as e,w as _,h as $,v as C,$ as E,i as g,f as M,F as B,l as I,Z as y,t as w}from"./index-7sQXWFie.js";import{D as T}from"./DeleteModal-CRaiYMzW.js";import{B as A}from"./BottomPagination-6omV3C6J.js";const F={props:["coupon","isNew"],emits:["update"],setup(p,n){const d=c(null),o=c({}),i=c(null),r=c(!1),t=c(null),v=()=>{d.value.show()},f=()=>{d.value.hide()},m=()=>{o.value.percent<1?alert("折扣百分比不得小於1"):n.emit("update",o.value)};return V(()=>{d.value=new P(t.value)}),N(()=>p.coupon,()=>{o.value={...p.coupon},o.value.due_date=o.value.due_date*1e3;const a=new Date(o.value.due_date).toISOString().split("T");i.value=a[0]}),N(i,()=>{o.value.due_date=Math.floor(new Date(i.value))}),N(()=>p.isNew,()=>{r.value=p.isNew}),{modal:t,couponModal:d,tempCoupon:o,dueDate:i,isNewCoupon:r,openModal:v,closeModal:f,updateCoupon:m}}},O={id:"couponModal",ref:"modal",class:"modal fade",tabindex:"1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},Z={class:"modal-dialog",role:"document"},j={class:"modal-content"},q={class:"modal-header bg-secondary"},z={class:"modal-title text-white"},G=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},J={class:"mb-3"},K=e("label",{for:"title"},"標題",-1),Q={class:"mb-3"},R=e("label",{for:"coupon_code"},"優惠碼",-1),W={class:"mb-3"},X=e("label",{for:"due_date"},"到期日",-1),Y={class:"mb-3"},ee=e("label",{for:"price"},"折扣百分比",-1),oe={class:"mb-3"},te={class:"form-check"},ne=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ae={class:"modal-footer"},le=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function se(p,n,d,o,i,r){return h(),b("div",O,[e("div",Z,[e("div",j,[e("div",q,[e("h5",z,[_(e("span",null,"新增優惠券",512),[[$,d.isNew]]),_(e("span",null,"更新優惠券",512),[[$,!d.isNew]])]),G]),e("div",H,[e("div",J,[K,_(e("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":n[0]||(n[0]=t=>o.tempCoupon.title=t)},null,512),[[C,o.tempCoupon.title]])]),e("div",Q,[R,_(e("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":n[1]||(n[1]=t=>o.tempCoupon.code=t)},null,512),[[C,o.tempCoupon.code]])]),e("div",W,[X,_(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":n[2]||(n[2]=t=>o.dueDate=t)},null,512),[[C,o.dueDate]])]),e("div",Y,[ee,_(e("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入折扣百分比","onUpdate:modelValue":n[3]||(n[3]=t=>o.tempCoupon.percent=t),min:"1"},null,512),[[C,o.tempCoupon.percent,void 0,{number:!0}]])]),e("div",oe,[e("div",te,[_(e("input",{type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":n[4]||(n[4]=t=>o.tempCoupon.is_enabled=t)},null,512),[[E,o.tempCoupon.is_enabled]]),ne])])]),e("div",ae,[le,e("button",{type:"button",class:"btn btn-primary",onClick:n[5]||(n[5]=t=>o.updateCoupon())},"更新優惠券")])])])],512)}const de=U(F,[["render",se]]),k="https://vue3-course-api.hexschool.io/v2",D="rock",ce={components:{CouponModal:de,BottomPagination:A,DeleteModal:T},setup(){const p=c([]),n=c({}),d=c({}),o=c(!1),i=c(!1),r=c(null),t=c(null),v=c({title:"",is_enabled:0,code:"",due_date:new Date/1e3,percent:"",id:""}),f=(l,s={})=>{l==="new"?(i.value=!0,d.value={...v.value},r.value.openModal()):l==="delete"?(i.value=!1,d.value=s,t.value.openModal()):l==="edit"&&(i.value=!1,d.value={...s},r.value.openModal())},m=()=>{r.value.closeModal(),t.value.hideModal()},a=(l=1)=>{o.value=!0,y.get(`${k}/api/${D}/admin/coupons?page=${l}`).then(s=>{p.value=[...s.data.coupons],n.value={...s.data.pagination},p.value.forEach(u=>{const S=new Date(u.due_date*1e3).toISOString().split("T")[0];u.formatDate=S}),o.value=!1}).catch(s=>{alert(s.message),o.value=!1})},x=l=>{y.delete(`${k}/api/${D}/admin/coupon/${l}`).then(s=>{alert(s.data.message),t.value.hideModal(),a()}).catch(s=>{alert(s.message),t.value.hideModal()})},L=l=>{const s={title:l.title,is_enabled:l.is_enabled,percent:l.percent,due_date:l.due_date/1e3,code:l.code};i.value?y.post(`${k}/api/${D}/admin/coupon`,{data:s}).then(u=>{alert(u.data.message),m(),a()}).catch(u=>{console.log(u),alert(u.message)}):y.put(`${k}/api/${D}/admin/coupon/${l.id}`,{data:s}).then(u=>{alert(u.data.message),m(),a()}).catch(u=>{alert(u.response.data.message)})};return V(()=>{a()}),{coupons:p,pages:n,tempCoupon:d,isLoading:o,isNew:i,emptyCoupon:v,openModal:f,couponModal:r,delCouponModal:t,closeModal:m,getCoupons:a,deleteCoupon:x,updateCoupon:L}}},ie=e("div",{class:"h3 mt-4 text-center"},"優惠卷新增頁面",-1),ue={class:"container"},pe={class:"text-end mt-4"},re={class:"table mt-4"},me=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"折扣碼"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),_e={key:0,class:"text-success"},ve={key:1},he={class:"btn-group"},be=["onClick"],fe=["onClick"];function Ce(p,n,d,o,i,r){const t=g("myLoading"),v=g("CouponModal"),f=g("DeleteModal"),m=g("BottomPagination");return h(),b(B,null,[M(t,{active:o.isLoading},null,8,["active"]),ie,e("div",ue,[e("div",pe,[e("button",{type:"button",class:"btn btn-primary",onClick:n[0]||(n[0]=a=>o.openModal("new"))}," 建立新的優惠卷 "),M(v,{ref:"couponModal",onUpdate:o.updateCoupon,isNew:o.isNew,coupon:o.tempCoupon},null,8,["onUpdate","isNew","coupon"])]),e("table",re,[me,e("tbody",null,[(h(!0),b(B,null,I(o.coupons,a=>(h(),b("tr",{key:a.id},[e("td",null,w(a.title),1),e("td",null,w(a.percent),1),e("td",null,w(a.formatDate),1),e("td",null,w(a.code),1),e("td",null,[a.is_enabled?(h(),b("span",_e,"啟用")):(h(),b("span",ve,"未啟用"))]),e("td",null,[e("div",he,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>o.openModal("edit",a)}," 編輯 ",8,be),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>o.openModal("delete",a)}," 刪除 ",8,fe)])])]))),128))])]),M(f,{product:o.tempCoupon,onDeleteItem:o.deleteCoupon,ref:"delCouponModal"},null,8,["product","onDeleteItem"]),M(m,{pages:o.pages,onEmitPage:o.getCoupons,ref:"pagination"},null,8,["pages","onEmitPage"])])],64)}const we=U(ce,[["render",Ce]]);export{we as default};
