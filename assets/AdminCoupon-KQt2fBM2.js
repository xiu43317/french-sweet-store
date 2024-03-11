import{_ as C,M as g,o as u,c as p,a as o,w as i,h as M,v as r,Z as x,j as v,t as c,i as m,f as b,F as $,l as N}from"./index-KtGT-tiA.js";const D={data(){return{couponModal:"",tempCoupon:{},due_date:"",is_newCoupon:!1}},props:["coupon","isNew"],methods:{openModal(){this.couponModal.show()},closeModal(){this.couponModal.hide()},updateCoupon(){this.$emit("update",this.tempCoupon)}},mounted(){this.couponModal=new g(this.$refs.modal,{keyboard:!1})},watch:{coupon(){this.tempCoupon={...this.coupon},this.tempCoupon.due_date=this.tempCoupon.due_date*1e3;const t=new Date(this.tempCoupon.due_date).toISOString().split("T");this.due_date=t[0]},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date))},isNew(){this.is_newCoupon=this.isNew}}},L={id:"couponModal",ref:"modal",class:"modal fade",tabindex:"1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},V={class:"modal-dialog",role:"document"},U={class:"modal-content"},S={class:"modal-header"},T={class:"modal-title"},B=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),A={class:"modal-body"},E={class:"mb-3"},F=o("label",{for:"title"},"標題",-1),I={class:"mb-3"},O=o("label",{for:"coupon_code"},"優惠碼",-1),P={class:"mb-3"},j=o("label",{for:"due_date"},"到期日",-1),Z={class:"mb-3"},q=o("label",{for:"price"},"折扣百分比",-1),z={class:"mb-3"},G={class:"form-check"},H=o("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),J={class:"modal-footer"},K=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function Q(t,e,n,f,s,d){return u(),p("div",L,[o("div",V,[o("div",U,[o("div",S,[o("h5",T,[i(o("span",null,"新增優惠券",512),[[M,n.isNew]]),i(o("span",null,"更新優惠券",512),[[M,!n.isNew]])]),B]),o("div",A,[o("div",E,[F,i(o("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[0]||(e[0]=l=>s.tempCoupon.title=l)},null,512),[[r,s.tempCoupon.title]])]),o("div",I,[O,i(o("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[1]||(e[1]=l=>s.tempCoupon.code=l)},null,512),[[r,s.tempCoupon.code]])]),o("div",P,[j,i(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=l=>s.due_date=l)},null,512),[[r,s.due_date]])]),o("div",Z,[q,i(o("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入折扣百分比","onUpdate:modelValue":e[3]||(e[3]=l=>s.tempCoupon.percent=l)},null,512),[[r,s.tempCoupon.percent,void 0,{number:!0}]])]),o("div",z,[o("div",G,[i(o("input",{type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=l=>s.tempCoupon.is_enabled=l)},null,512),[[x,s.tempCoupon.is_enabled]]),H])])]),o("div",J,[K,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=l=>d.updateCoupon())},"更新優惠券")])])])],512)}const R=C(D,[["render",Q]]),W={data(){return{myCoupon:{},delModal:""}},props:["coupon"],methods:{openModal(){this.delModal.show()},closeModal(){this.delModal.hide()},deleteCoupon(){this.$emit("deleteCoupon",this.coupon.id)}},mounted(){this.delModal=new g(this.$refs.delCouponModal)}},X={id:"delCouponModal",ref:"delCouponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Y={class:"modal-dialog"},oo={class:"modal-content border-0"},eo=o("div",{class:"modal-header bg-danger text-white"},[o("h5",{id:"delProductModalLabel",class:"modal-title"},[o("span",null,"刪除優惠券")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),to={class:"modal-body"},so={class:"text-danger"},no={class:"modal-footer"};function lo(t,e,n,f,s,d){return u(),p("div",X,[o("div",Y,[o("div",oo,[eo,o("div",to,[v(" 是否刪除 "),o("strong",so,c(n.coupon.title),1),v(" 優惠券(刪除後將無法恢復)。 ")]),o("div",no,[o("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[0]||(e[0]=l=>d.closeModal())}," 取消 "),o("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=l=>d.deleteCoupon())}," 確認刪除 ")])])])],512)}const ao=C(W,[["render",lo]]),h="https://vue3-course-api.hexschool.io/v2",_="rock",io={data(){return{coupons:[],tempCoupon:{},isLoading:!1,isNew:!1,emptyCoupon:{title:"",is_enabled:0,code:"",due_date:new Date/1e3,percent:"",id:""}}},components:{CouponModal:R,CouponDelModal:ao},methods:{openModal(t,e={}){t==="new"?(this.isNew=!0,this.tempCoupon={...this.emptyCoupon},this.$refs.couponModal.openModal()):t==="delete"?(this.isNew=!1,this.tempCoupon=e,this.$refs.delCouponModal.openModal()):t==="edit"&&(this.isNew=!1,this.tempCoupon={...e},this.$refs.couponModal.openModal())},closeModal(){this.$refs.couponModal.closeModal(),this.$refs.delCouponModal.closeModal()},getCoupons(){this.isLoading=!0,this.$http.get(`${h}/api/${_}/admin/coupons`).then(t=>{this.coupons=[...t.data.coupons],this.coupons.forEach(e=>{const n=new Date(e.due_date*1e3).toISOString().split("T")[0];e.formatDate=n}),this.isLoading=!1}).catch(t=>{alert(t.response.data.message),this.isLoading=!1})},deleteCoupon(t){this.$http.delete(`${h}/api/${_}/admin/coupon/${t}`).then(e=>{alert(e.data.message),this.$refs.delCouponModal.closeModal(),this.getCoupons()}).catch(e=>{alert(e.response.data.message),this.$refs.delCouponModal.closeModal()})},updateCoupon(t){const e={title:t.title,is_enabled:t.is_enabled,percent:t.percent,due_date:t.due_date/1e3,code:t.code};this.isNew?this.$http.post(`${h}/api/${_}/admin/coupon`,{data:e}).then(n=>{alert(n.data.message),this.closeModal(),this.getCoupons()}).catch(n=>{console.log(n),alert(n.response.data.message)}):this.$http.put(`${h}/api/${_}/admin/coupon/${t.id}`,{data:e}).then(n=>{alert(n.data.message),this.closeModal(),this.getCoupons()}).catch(n=>{alert(n.response.data.message)})}},mounted(){this.getCoupons()}},uo=o("div",{class:"h3 mt-4 text-center"},"優惠卷新增頁面",-1),po={class:"container"},co={class:"text-end mt-4"},ro={class:"table mt-4"},ho=o("thead",null,[o("tr",null,[o("th",null,"名稱"),o("th",null,"折扣百分比"),o("th",null,"到期日"),o("th",null,"折扣碼"),o("th",null,"是否啟用"),o("th",null,"編輯")])],-1),_o={key:0,class:"text-success"},mo={key:1},bo={class:"btn-group"},Co=["onClick"],fo=["onClick"];function Mo(t,e,n,f,s,d){const l=m("myLoading"),y=m("coupon-modal"),w=m("CouponDelModal");return u(),p($,null,[b(l,{active:s.isLoading},null,8,["active"]),uo,o("div",po,[o("div",co,[o("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=a=>d.openModal("new"))}," 建立新的優惠卷 "),b(y,{ref:"couponModal",onUpdate:d.updateCoupon,isNew:s.isNew,coupon:s.tempCoupon},null,8,["onUpdate","isNew","coupon"]),b(w,{ref:"delCouponModal",onDeleteCoupon:d.deleteCoupon,coupon:s.tempCoupon},null,8,["onDeleteCoupon","coupon"])]),o("table",ro,[ho,o("tbody",null,[(u(!0),p($,null,N(s.coupons,a=>(u(),p("tr",{key:a.id},[o("td",null,c(a.title),1),o("td",null,c(a.percent),1),o("td",null,c(a.formatDate),1),o("td",null,c(a.code),1),o("td",null,[a.is_enabled?(u(),p("span",_o,"啟用")):(u(),p("span",mo,"未啟用"))]),o("td",null,[o("div",bo,[o("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>d.openModal("edit",a)}," 編輯 ",8,Co),o("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>d.openModal("delete",a)}," 刪除 ",8,fo)])])]))),128))])])])],64)}const $o=C(io,[["render",Mo]]);export{$o as default};
