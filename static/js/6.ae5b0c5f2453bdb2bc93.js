webpackJsonp([6],{"7AYq":function(t,e){},YfTy:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"nft"}},[n("div",{attrs:{id:"tid"}},[t._v(" ")]),t._v(" "),n("el-tooltip",{attrs:{effect:"dark",content:t.clubData.bio,placement:"top"}},[n("img",{attrs:{id:"img",src:"https://ipfs.io/ipfs/"+(t.clubData.cid.length>0?t.clubData.cid:"QmeiJEqLynPN8c13ZQKdo8VMyK62whnn1DWQrEF6dZTzep")}})]),t._v(" "),t.bAdmin?n("el-tooltip",{attrs:{effect:"dark",content:"I am administrator",placement:"top"}},[n("i",{staticClass:"el-icon-s-custom admin"})]):t._e(),t._v(" "),n("div",{attrs:{id:"name"}},[t._v(t._s(t.clubData.name))]),t._v(" "),t.act?n("div",{attrs:{id:"actbtns"}},[2==t.act||3==t.act?n("el-button",{attrs:{type:"success",round:"",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.h(!0,e)}}},[t._v(t._s(2==t.act?"Accept":"Apply"))]):t._e(),t._v(" "),1==t.act||2==t.act?n("el-button",{attrs:{type:"warning",round:"",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.h(!1,e)}}},[t._v(t._s(1==t.act?"Cancel":"Decline"))]):t._e()],1):t._e(),t._v(" "),t.bEdit?n("el-button",{attrs:{id:"edit",type:"text",icon:"el-icon-more"},on:{click:t.edit}}):t._e()],1)])},staticRenderFns:[]};var i=n("VU/8")({name:"ClubItem",props:["clubData","act","bEdit","bAdmin"],methods:{h:function(t,e){this.$emit("click",t)},edit:function(){this.$emit("edit")}}},a,!1,function(t){n("7AYq")},"data-v-37782a6a",null);e.a=i.exports},qzei:function(t,e){},xdjG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("BO1k"),i=n.n(a),l=n("Xxa5"),r=n.n(l),s=n("exGp"),c=n.n(s),o=n("v1w/"),u=n("oAV5"),d=n("ONoB"),b=n("DHPL"),m=n("geuY"),v=n.n(m),p=n("lRwf"),f=n.n(p),C=n("YfTy"),h=n("YaEn"),y=Object(o.c)(),g=y.contractAddress,L=(y.contractName,y.clubContractName),_=g,k=Object(o.d)(),x={name:"ClubsPage",components:{ClubItem:C.a},data:function(){return{bSignedIn:o.g.isUserSignedIn(),curTab:"myclubs",bLoadingSelf:!1,myTid:0,myCtid:0,myApplyCtidList:[],myInvitedCitdList:[],myJoinCtidList:[],myEventCount:0,myBalance:0,mintPrice:2e8,myClubList:[],bLoadingAll:!1,clubList:[],bCreateFlag:!1,maxNameLen:25,maxBioLen:80,nameExceedTip:"",bioExceedTip:"",createClubData:{name:"",cid:"",bio:""},reqApplyFlag:0,applyClubDataList:{},reqInvitedFlag:0,invitedClubDataList:{},reqEventFlag:0,eventDataList:[],POW8:BigInt(1e8),POW12:BigInt(1e12),POW16:BigInt(1e16),POW20:BigInt(1e20),TipBalanceUnenough:"Balance not enough",CidInvalid:"CID invalid"}},mounted:function(){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.bSignedIn&&t.loadSelf(),t.loadAllClubs();case 2:case"end":return e.stop()}},e,t)}))()},methods:{loadSelf:function(){var t=this;return c()(r.a.mark(function e(){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.bLoadingSelf=!0,n={contractAddress:g,contractName:L,functionName:"get_member_cb",functionArgs:[Object(d.s)(Object(o.a)())],network:k,senderAddress:_},e.next=5,Object(d.f)(n);case 5:a=e.sent,t.myTid=Object(d.h)(a.data.tid),t.myCtid=Object(d.h)(a.data.ctid),t.myApplyCtidList=Object(u.g)(a.data.apply),t.myInvitedCitdList=Object(u.g)(a.data.invited),t.myJoinCtidList=Object(u.g)(a.data.joins),t.myEventCount=Object(d.h)(a.data.event_count),t.myBalance=Object(d.h)(a.data.balance),t.myJoinCtidList.length>0?t.loadSelfClubs():t.bLoadingSelf=!1;case 14:case"end":return e.stop()}},e,t)}))()},loadSelfClubs:function(){var t=this;return c()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.loadClubsSummary(t.myJoinCtidList,null,function(t){if(n.myClubList=t,n.myClubList.length>1){n.myClubList.sort(function(t,e){return t.adminTid==n.myTid||e.adminTid==n.myTid?t.adminTid==n.myTid?-1:1:t.ctid<e.ctid?-1:1}),f.a.set(n.myClubList,0,n.myClubList[0]),n.myJoinCtidList=[];var e=!0,a=!1,l=void 0;try{for(var r,s=i()(n.myClubList);!(e=(r=s.next()).done);e=!0){var c=r.value;n.myJoinCtidList.push(c.ctid)}}catch(t){a=!0,l=t}finally{try{!e&&s.return&&s.return()}finally{if(a)throw l}}}n.bLoadingSelf=!1});case 2:case"end":return e.stop()}},e,t)}))()},loadAllClubs:function(){var t=this;return c()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.loadClubsPage(1,function(){n.clubList.length>=25&&n.loadClubsPage(2,function(){n.clubList.length>=50&&(n.loadClubsPage(3),setTimeout(function(){n.loadClubsPage(4)},500))})});case 2:case"end":return e.stop()}},e,t)}))()},loadClubsPage:function(t,e){var n=this;return c()(r.a.mark(function a(){var l,s,c;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(l=[],s=1;s<=25;s++)l.push(25*(t-1)+s);c=n,n.loadClubsSummary(l,function(){c.bLoadingAll=!0},function(t){c.bLoadingAll=!1;var n=!0,a=!1,l=void 0;try{for(var r,s=i()(t);!(n=(r=s.next()).done);n=!0){var o=r.value;c.clubList.push(o)}}catch(t){a=!0,l=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw l}}e&&e()});case 4:case"end":return a.stop()}},a,n)}))()},onClickCreateClub:function(){this.myBalance<=this.mintPrice?Object(u.h)(this,this.TipBalanceUnenough):0==this.myTid||this.myCtid>0||(this.myJoinCtidList.length>=5?Object(u.h)(this,"join too many clubs, need exit 1 to create."):this.bCreateFlag=!0)},onChangeName:function(){var t=this.createClubData.name.trim(),e=0;t.length>8&&(e=Object(d.e)(t).buffer.byteLength),this.nameExceedTip=e>this.maxNameLen?e+"/"+this.maxNameLen:""},onChangeBio:function(){var t=this.createClubData.bio.trim(),e=0;t.length>8&&(e=Object(d.e)(t).buffer.byteLength),this.bioExceedTip=e>this.maxBioLen?e+"/"+this.maxBioLen:""},onClickEditNft:function(){var t=this;return c()(r.a.mark(function e(){var n,a,i,l,s,c,m,p,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(u.b)(Object(u.e)(t.createClubData.cid))){e.next=3;break}return Object(u.h)(t,t.CidInvalid),e.abrupt("return");case 3:n=Object(d.e)(t.createClubData.name),a=Object(d.t)(t.createClubData.cid),i=Object(d.e)(t.createClubData.bio),l=[n,a,i],s="create_club",c=Object(o.a)(),m=Object(d.n)(c,d.c.LessEqual,new v.a(t.mintPrice)),p=t,f={contractAddress:g,contractName:L,functionName:s,functionArgs:l,network:k,appDetails:Object(o.b)(),postConditions:[m],onFinish:function(t){p.doNotify("Create club")}},Object(b.c)(f);case 13:case"end":return e.stop()}},e,t)}))()},onClickCancelEditNft:function(){this.bCreateFlag=!1},onClickMyClub:function(t){this.openClub(this.myJoinCtidList[t-1])},onClickMyApplyClub:function(t){this.openClub(this.myApplyCtidList[t-1])},onClickMyInvitedClub:function(t){this.openClub(this.myInvitedCitdList[t-1])},onClickBelowClub:function(t){this.openClub(t)},openClub:function(t){t&&h.a.push({name:"ClubPage",replace:!0,params:{clubId:t}})},onClickTab:function(t,e){"myclubs"==this.curTab||("apply"==this.curTab?this.myApplyCtidList.length<=0?this.reqApplyFlag=2:0==this.reqApplyFlag&&this.reqApplyList():"invited"==this.curTab?this.myInvitedCitdList.length<=0?this.reqInvitedFlag=2:0==this.reqInvitedFlag&&this.reqInvitedList():"events"==this.curTab?this.myEventCount<=0?this.reqEventFlag=2:0==this.reqEventFlag&&this.reqEventList():console.assert(!1))},reqApplyList:function(){var t=this;return c()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.loadClubsSummary(t.myApplyCtidList,function(){n.reqApplyFlag=1},function(t){n.reqApplyFlag=2,n.applyClubDataList=t,n.applyClubDataList.length>0&&f.a.set(n.applyClubDataList,0,n.applyClubDataList[0])});case 2:case"end":return e.stop()}},e,t)}))()},onClickCancelApply:function(t){var e=this.myApplyCtidList[t-1],n=[Object(d.v)(e)];this.callPublic("member_cancel_apply",n,"Cancel apply")},reqInvitedList:function(){var t=this;return c()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t,t.loadClubsSummary(t.myInvitedCitdList,function(){n.reqInvitedFlag=1},function(t){n.reqInvitedFlag=2,n.invitedClubDataList=t,n.invitedClubDataList.length>0&&f.a.set(n.invitedClubDataList,0,n.invitedClubDataList[0])});case 2:case"end":return e.stop()}},e,t)}))()},onClickInvited:function(t,e){var n=this.myInvitedCitdList[t-1],a=[Object(d.v)(n)];this.callPublic(e?"accept_club_invite":"decline_club_invite",a,e?"Accept invite":"Decline invite")},reqEventList:function(){var t=this;return c()(r.a.mark(function e(){var n,a,l,s,c,o,b,m,v,p,C,h,y,x,A,T,D,w,O,j,I,E,S,N,F,q,P;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.myEventCount<=0)){e.next=2;break}return e.abrupt("return");case 2:t.reqEventFlag=1,(n=Object(d.j)()).list=[],a=[],(l=Object(d.j)()).list=[],s=0;case 9:if(!(s<25)){e.next=19;break}if(!((c=t.myEventCount-s)>0)){e.next=15;break}l.list.push(Object(d.v)(t.myTid+1e4*c)),e.next=16;break;case 15:return e.abrupt("break",19);case 16:s++,e.next=9;break;case 19:return o={contractAddress:g,contractName:L,functionName:"get_member_events",functionArgs:[l],network:k,senderAddress:_},e.next=23,Object(d.f)(o);case 23:for(b=e.sent,m=!0,v=!1,p=void 0,e.prev=27,C=i()(b.list);!(m=(h=C.next()).done);m=!0)y=h.value,x=y.value.toString(10),A=BigInt(x),T=Math.floor(Number(A/t.POW20)),A=BigInt(x.substr(T.toString().length)),D=Math.floor(Number(A/t.POW16)),A=BigInt(A.toString().substr(D.toString().length)),w=Math.floor(Number(A/t.POW12)),O=Number(A%t.POW12),a.push({timeStr:Object(u.f)(O),eventType:w}),n.list.push(Object(d.v)(T));e.next=35;break;case 31:e.prev=31,e.t0=e.catch(27),v=!0,p=e.t0;case 35:e.prev=35,e.prev=36,!m&&C.return&&C.return();case 38:if(e.prev=38,!v){e.next=41;break}throw p;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return j={contractAddress:g,contractName:L,functionName:"get_clubs_name",functionArgs:[n],network:k,senderAddress:_},e.next=47,Object(d.f)(j);case 47:if(I=e.sent,(E=Object(d.h)(I)).length==a.length){e.next=52;break}return Object(u.h)(t,"length not equal"),e.abrupt("return");case 52:for(S=0;S<E.length;S++)N=E[S],F=Object(u.a)(N.value),q=a[S],P="",2001==q.eventType?P='Club "'+F+'" accepts your apply.':2002==q.eventType?P='Club "'+F+'" declines your apply.':2004==q.eventType&&(P='Club "'+F+'" deletes you.'),a[S].content=P;t.eventDataList=a,t.eventDataList.length>0&&f.a.set(t.eventDataList,0,t.eventDataList[0]),t.reqEventFlag=2;case 56:case"end":return e.stop()}},e,t,[[27,31,35,43],[36,,38,42]])}))()},createLoading:function(t){return this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.05)"})},doNotify:function(t){this.$notify({title:t,message:"Transaction has been sent, wait a while to be finished.",duration:8e3})},loadClubsSummary:function(t,e,n){var a=this;return c()(r.a.mark(function l(){var s,c,o,b,m,v,p,f,C,h,y,x,A,T,D;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t&&!(t.length<=0)&&n){a.next=2;break}return a.abrupt("return");case 2:for((s=Object(d.j)()).list=[],c=!0,o=!1,b=void 0,a.prev=7,m=i()(t);!(c=(v=m.next()).done);c=!0)p=v.value,s.list.push(Object(d.v)(p));a.next=15;break;case 11:a.prev=11,a.t0=a.catch(7),o=!0,b=a.t0;case 15:a.prev=15,a.prev=16,!c&&m.return&&m.return();case 18:if(a.prev=18,!o){a.next=21;break}throw b;case 21:return a.finish(18);case 22:return a.finish(15);case 23:return f={contractAddress:g,contractName:L,functionName:"get_clubs_summary",functionArgs:[s],network:k,senderAddress:_},e&&e(),a.next=28,Object(d.f)(f);case 28:for(C=a.sent,h=Object(d.h)(C),y=[],x=0;x<h.length;x++)(A=h[x]).value&&(T=A.value.value,D={ctid:t[x],name:Object(u.a)(T.name),bio:Object(u.a)(T.bio),cid:T.cid.value,adminTid:T.ud.value%1e4},y.push(D));n(y);case 33:case"end":return a.stop()}},l,a,[[7,11,15,23],[16,,18,22]])}))()},callPublic:function(t,e,n){var a=this,i={contractAddress:g,contractName:L,functionName:t,functionArgs:e,network:k,appDetails:Object(o.b)(),postConditions:[],onFinish:function(t){a.doNotify(n)}};Object(b.c)(i)}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"main"}},[t.bSignedIn?n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.bLoadingSelf,expression:"bLoadingSelf"}],attrs:{id:"selfArea"}},[n("el-tabs",{attrs:{id:"tabs"},on:{"tab-click":t.onClickTab},model:{value:t.curTab,callback:function(e){t.curTab=e},expression:"curTab"}},[n("el-tab-pane",{staticClass:"tp",attrs:{label:"My clubs",name:"myclubs"}},[n("div",{staticClass:"myclubsdiv"},[t.bLoadingSelf||0!=t.myJoinCtidList.length?t._e():n("div",{staticClass:"contentTip"},[n("div",[t._v("Empty")])]),t._v(" "),t._l(t.myClubList.length,function(e){return n("button",{key:e,staticClass:"member",on:{click:function(n){return t.onClickMyClub(e)}}},[n("ClubItem",{attrs:{clubData:t.myClubList[e-1],bAdmin:t.myTid>0&&t.myClubList[e-1].adminTid==t.myTid}})],1)}),t._v(" "),n("div",{attrs:{id:"createBtn"}},[!t.bLoadingSelf&&t.myTid>0&&0==t.myCtid&&t.clubList.length<50?n("el-button",{attrs:{type:"primary",round:""},on:{click:t.onClickCreateClub}},[t._v("Create club ("+t._s(t.mintPrice/1e6)+" STX)")]):t._e()],1)],2)]),t._v(" "),n("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.myApplyCtidList.length>0&&1==t.reqApplyFlag,expression:"myApplyCtidList.length>0&&reqApplyFlag==1"}],staticClass:"tp",attrs:{label:"My apply"+(t.bLoadingSelf?"":"("+t.myApplyCtidList.length+")"),name:"apply"}},[n("div",{staticClass:"myclubsdiv"},[t.bLoadingSelf||0!=t.myApplyCtidList.length?t._e():n("div",{staticClass:"contentTip"},[t._v("Empty")]),t._v(" "),t._l(t.applyClubDataList.length,function(e){return n("button",{key:e,staticClass:"member",on:{click:function(n){return t.onClickMyApplyClub(e)}}},[n("ClubItem",{attrs:{clubData:t.applyClubDataList[e-1],act:1},on:{click:function(n){return t.onClickCancelApply(e,n)}}})],1)})],2)]),t._v(" "),n("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.myInvitedCitdList.length>0&&1==t.reqInvitedFlag,expression:"myInvitedCitdList.length>0&&reqInvitedFlag==1"}],staticClass:"tp",attrs:{label:"Be invited"+(t.bLoadingSelf?"":"("+t.myInvitedCitdList.length+")"),name:"invited"}},[n("div",{staticClass:"myclubsdiv"},[t.bLoadingSelf||0!=t.myInvitedCitdList.length?t._e():n("div",{staticClass:"contentTip"},[t._v("Empty")]),t._v(" "),t._l(t.invitedClubDataList.length,function(e){return n("button",{key:e,staticClass:"member",on:{click:function(n){return t.onClickMyInvitedClub(e)}}},[n("ClubItem",{attrs:{clubData:t.invitedClubDataList[e-1],act:2},on:{click:function(n){return t.onClickInvited(e,n)}}})],1)})],2)]),t._v(" "),n("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:t.myEventCount>0&&1==t.reqEventFlag,expression:"myEventCount>0&&reqEventFlag==1"}],staticClass:"tp",attrs:{label:"Events"+(t.bLoadingSelf?"":"("+t.myEventCount+")"),name:"events"}},[t.bLoadingSelf||0!=t.myEventCount?t._e():n("div",{staticClass:"contentTip"},[t._v("Empty")]),t._v(" "),t.eventDataList.length>0?n("el-table",{attrs:{id:"eventPanel",stripe:"",border:"",size:"small","max-height":"260",data:t.eventDataList}},[n("el-table-column",{attrs:{label:"Time",width:"190"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.timeStr)+"\n              ")]}}],null,!1,3036485277)}),t._v(" "),n("el-table-column",{attrs:{label:"Content"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.content)+"\n              ")]}}],null,!1,3778289204)})],1):t._e(),t._v(" "),t.myEventCount>25?n("div",{attrs:{id:"eventTip"}},[t._v("(Only show latest 25 events.)")]):t._e()],1)],1),t._v(" "),n("el-divider")],1):t._e(),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.bLoadingAll,expression:"bLoadingAll"}],attrs:{id:"allArea"}},[t.bSignedIn?n("div",{attrs:{id:"allclubstitle"}},[t._v("All clubs:")]):t._e(),t._v(" "),t.bLoadingAll||0!=t.clubList.length?t._e():n("div",{staticClass:"contentTip"},[t._v("Empty")]),t._v(" "),!t.bLoadingAll&&t.clubList.length>0?n("div",{attrs:{id:"allclubssep"}}):t._e(),t._v(" "),t._l(t.clubList.length,function(e){return n("button",{key:e,staticClass:"member",on:{click:function(n){return t.onClickBelowClub(e)}}},[n("ClubItem",{attrs:{clubData:t.clubList[e-1],bAdmin:t.myTid>0&&t.clubList[e-1].adminTid==t.myTid}})],1)})],2),t._v(" "),n("el-dialog",{attrs:{center:!0,title:"Create club",visible:t.bCreateFlag,width:"800px"},on:{"update:visible":function(e){t.bCreateFlag=e}}},[n("el-form",{ref:"form",attrs:{id:"nftForm",model:t.createClubData,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{maxlength:t.maxNameLen,placeholder:"Max "+t.maxNameLen+" characters"},on:{input:t.onChangeName},model:{value:t.createClubData.name,callback:function(e){t.$set(t.createClubData,"name",e)},expression:"createClubData.name"}},[t.nameExceedTip.length>0?n("label",{staticClass:"exceedTip",attrs:{slot:"suffix"},slot:"suffix"},[t._v(t._s(t.nameExceedTip))]):t._e()])],1),t._v(" "),n("el-form-item",{attrs:{label:"Logo CID"}},[n("el-input",{attrs:{maxlength:"64",placeholder:"IPFS content id, like QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"},model:{value:t.createClubData.cid,callback:function(e){t.$set(t.createClubData,"cid",e)},expression:"createClubData.cid"}}),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n            Step 1: compress your club logo\n            "),n("el-link",{staticClass:"elink",attrs:{type:"primary",href:"https://tinypng.com/",target:"_blank"}},[t._v("here")]),t._v("\n            (the smaller size it is, the quicker it shows).\n          ")],1),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n            Step 2: upload compressed picture to\n            "),n("el-link",{staticClass:"elink",attrs:{type:"primary",href:"https://app.pinata.cloud/pinmanager",target:"_blank"}},[t._v("Pinta")]),t._v("(or others)\n            , copy generated CID to upper input box.\n          ")],1),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n            Wait several seconds, the image will show in the preview area below.\n          ")])],1),t._v(" "),n("el-form-item",{attrs:{label:"Bio"}},[n("el-input",{attrs:{type:"textarea",maxlength:t.maxBioLen,placeholder:"Hover mouse on image to show, max "+t.maxBioLen+" characters"},on:{input:t.onChangeBio},model:{value:t.createClubData.bio,callback:function(e){t.$set(t.createClubData,"bio",e)},expression:"createClubData.bio"}}),t._v(" "),t.bioExceedTip.length>0?n("div",{staticClass:"exceedTip"},[t._v(t._s(t.bioExceedTip))]):t._e()],1),t._v(" "),n("el-form-item",{attrs:{label:"Preview"}},[n("ClubItem",{attrs:{clubData:t.createClubData}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",disabled:t.nameExceedTip.length>0||t.bioExceedTip.length>0||t.createClubData.cid.trim().length<40},on:{click:t.onClickEditNft}},[t._v(t._s("Create ("+this.mintPrice/1e6+" STX)"))]),t._v(" "),n("el-button",{on:{click:t.onClickCancelEditNft}},[t._v("Cancel")])],1)],1)],1)],1)])},staticRenderFns:[]};var T=n("VU/8")(x,A,!1,function(t){n("qzei")},"data-v-6d098545",null);e.default=T.exports}});