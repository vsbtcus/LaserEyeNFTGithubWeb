webpackJsonp([3],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},Dd8w:function(t,e,a){"use strict";e.__esModule=!0;var n,i=a("woOf"),r=(n=i)&&n.__esModule?n:{default:n};e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,a){var n=a("kM2E");n(n.S+n.F,"Object",{assign:a("To3L")})},TCPR:function(t,e){},To3L:function(t,e,a){"use strict";var n=a("+E39"),i=a("lktj"),r=a("1kS7"),o=a("NpIQ"),s=a("sB3e"),c=a("MU5D"),l=Object.assign;t.exports=!l||a("S82l")(function(){var t={},e={},a=Symbol(),n="abcdefghijklmnopqrst";return t[a]=7,n.split("").forEach(function(t){e[t]=t}),7!=l({},t)[a]||Object.keys(l({},e)).join("")!=n})?function(t,e){for(var a=s(t),l=arguments.length,m=1,u=r.f,f=o.f;l>m;)for(var d,b=c(arguments[m++]),p=u?i(b).concat(u(b)):i(b),h=p.length,v=0;h>v;)d=p[v++],n&&!f.call(b,d)||(a[d]=b[d]);return a}:l},V3tA:function(t,e,a){a("R4wc"),t.exports=a("FeBl").Object.assign},ZaKW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),r=a("Xxa5"),o=a.n(r),s=a("exGp"),c=a.n(s),l=a("v1w/"),m=a("oAV5"),u=a("ONoB"),f=a("DHPL"),d=a("geuY"),b=a.n(d),p=Object(l.c)(),h=p.contractAddress,v=p.contractName,g=h,_=Object(l.d)(),N={name:"MinePage",components:{},data:function(){return{bSignedIn:l.g.isUserSignedIn(),lastMintId:0,mintPrice:3e7,updateNamePrice:3e7,updateCidBioPrice:8e6,maxNameLen:25,maxBioLen:80,bInResolve:!1,bMintFlag:!1,bUpdateFlag:!1,nameExceedTip:"",minorNameExceedTip:"",bioExceedTip:"",bHasMintFlag:!1,createTimeStr:"",bOwn:!1,nftData:{tid:0,bh:0,name:"",minorName:"",cid:"",bio:""},originNftData:{tid:0,bh:0,name:"",minorName:"",cid:"",bio:""}}},mounted:function(){var t=this;return c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.bSignedIn&&t.loadSummary();case 1:case"end":return e.stop()}},e,t)}))()},methods:{onClickLoginIn:function(){Object(l.e)()},loadSummary:function(){var t=this;return c()(o.a.mark(function e(){var a,n,r,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.bInResolve=!0,a={contractAddress:h,contractName:v,functionName:"get_player_summary",functionArgs:[Object(u.s)(Object(l.a)())],network:_,senderAddress:g},e.next=5,Object(u.f)(a);case 5:n=e.sent,t.bInResolve=!1,r=Object(u.h)(n),t.lastMintId=r.last_id.value,(s=t.nftData).tid=r.tid.value,t.createTimeStr=r.time.value?Object(m.f)(r.time.value.value):"",t.bOwn=r.bown.value,r.meta.value?(c=r.meta.value.value,s.bh=c.ud.value%1e8,s.h=Math.floor(c.ud.value/1e8)%1e4,s.name=Object(m.a)(c.name),s.minorName=Object(m.a)(c.minor_name),s.cid=c.cid.value,s.bio=Object(m.a)(c.bio)):(s.bh=0,s.h=0,s.name="",s.minorName="",s.cid="",s.bio=""),t.originNftData=i()({},s),""==s.cid&&t.$route.params.hasOwnProperty("tAct")&&"mint"==t.$route.params.tAct?t.showMintUI():t.bMintFlag=!1;case 16:case"end":return e.stop()}},e,t)}))()},onClickMint:function(){this.showMintUI()},showMintUI:function(){this.bMintFlag=!0},onClickUpdate:function(){this.bUpdateFlag=!0},onClickTransfer:function(){var t=this;this.$prompt("Input receiver address(must not own laser eye nft)","Transfer",{confirmButtonText:"Ok",cancelButtonText:"Cancel"}).then(function(e){var a=e.value;t.startTransfer(a)}).catch(function(){})},startTransfer:function(t){if(0!=(t=t.trim()).length){var e=[Object(u.v)(this.nftData.tid),Object(u.s)(Object(l.a)()),Object(u.s)(t)],a=Object(u.v)(this.nftData.tid),n=Object(u.g)(h,v,"LaserEyes"),i=Object(u.m)(Object(l.a)(),u.d.DoesNotOwn,n,a),r=this,o={contractAddress:h,contractName:v,functionName:"transfer",functionArgs:e,network:_,appDetails:Object(l.b)(),postConditions:[i],onFinish:function(t){r.doNotify("Transfer")}};Object(f.c)(o)}},preCheckInputNames:function(){var t=this.nftData.name.trim(),e=this.nftData.minorName.trim(),a="";if(0==t.length)a="please enter name!";else{var n=t.toLowerCase(),i=e.toLowerCase();e.length>0&&!i.includes(n)&&!n.includes(i)?a="minor name should include or included by name!":Object(u.e)(n).buffer.byteLength>this.maxNameLen?a="name too long!":Object(u.e)(i).buffer.byteLength>this.maxNameLen&&(a="minor name too long!")}return a.length>0?(this.$message({message:a,type:"error"}),!1):(this.nftData.name=t,this.nftData.minorName=e,!0)},onClickChangeName:function(){var t=this;return c()(o.a.mark(function e(){var a,n,i,r,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preCheckInputNames()){e.next=2;break}return e.abrupt("return");case 2:return a=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e.next=5,t.actPreCheck(t.bMintFlag,"updateName");case 5:if(n=e.sent,a.close(),n){e.next=9;break}return e.abrupt("return");case 9:i=Object(u.n)(Object(l.a)(),u.c.LessEqual,new b.a(t.updateNamePrice)),r=[Object(u.e)(t.nftData.name),Object(u.e)(t.nftData.minorName)],s=t,c={contractAddress:h,contractName:v,functionName:"update_name",functionArgs:r,network:_,appDetails:Object(l.b)(),postConditions:[i],onFinish:function(t){s.doNotify("Update name")}},Object(f.c)(c);case 14:case"end":return e.stop()}},e,t)}))()},onClickMintOrChangeCidBio:function(){var t=this;return c()(o.a.mark(function e(){var a,n,i,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.bMintFlag){e.next=3;break}if(t.preCheckInputNames()){e.next=3;break}return e.abrupt("return");case 3:if(a=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),!((n=t.nftData.cid.trim()).length<40)&&Object(m.b)(Object(m.e)(n))){e.next=9;break}return t.$message({message:"invalid cid, image not exist",type:"error"}),a.close(),e.abrupt("return");case 9:if(t.nftData.cid=n,i=t.nftData.bio.trim(),!(Object(u.e)(i).buffer.byteLength>t.maxBioLen)){e.next=15;break}return t.$message({message:"Bio too long!",type:"error"}),a.close(),e.abrupt("return");case 15:return t.nftData.bio=i,e.next=18,t.actPreCheck(t.bMintFlag,"updateCidBio");case 18:if(r=e.sent,a.close(),r){e.next=22;break}return e.abrupt("return");case 22:t.readyMintOrUpdate();case 23:case"end":return e.stop()}},e,t)}))()},readyMintOrUpdate:function(){var t=this;return c()(o.a.mark(function e(){var a,n,i,r,s,c,m,d,p,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(u.t)(t.nftData.cid),n=Object(u.e)(t.nftData.bio),i=null,r=null,s=Object(l.a)(),c=Object(u.n)(s,u.c.LessEqual,new b.a(t.bMintFlag?t.mintPrice:t.updateCidBioPrice)),t.bMintFlag?(r="mint",m=Object(u.e)(t.nftData.name),d=Object(u.e)(t.nftData.minorName),i=[m,d,a,n]):(r="update",i=[a,n]),p=t,g={contractAddress:h,contractName:v,functionName:r,functionArgs:i,network:_,appDetails:Object(l.b)(),postConditions:[c],onFinish:function(t){p.bMintFlag&&(p.bHasMintFlag=!0),p.doNotify(p.bMintFlag?"Mint":"Update Cid/Bio")}},Object(f.c)(g);case 10:case"end":return e.stop()}},e,t)}))()},actPreCheck:function(t,e){var a=this;return c()(o.a.mark(function n(){var i,r,s,c,m,f,d;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i="get_pre_act_info",r=[Object(u.s)(Object(l.a)()),Object(u.e)(t?a.nftData.name.trim().toLowerCase():""),Object(u.e)(t?a.nftData.minorName.trim().toLowerCase():"")],s={contractAddress:h,contractName:v,functionName:i,functionArgs:r,network:_,senderAddress:g},n.next=5,Object(u.f)(s);case 5:if(c=n.sent,a.bHasInit=!0,m=Object(u.h)(c),f=null,t?m.own.value?f="Current account already own one Laser eye nft!":m.name.value?m.minor_name.value||(f="Minor name "+a.nftData.minorName+" has already been taken!"):f="Name "+a.nftData.name+" has already been taken!":"updateName"==e&&(0!=m.name.value&&m.name.value!=a.originNftData.tid?f="Name "+a.nftData.name+" has already been taken!":m.minor_name.value||a.nftData.minorName==a.originNftData.name||a.nftData.minorName==a.originNftData.minorName||(f="Minor name "+a.nftData.minorName+" has already been taken!")),f||(d=t?a.mintPrice:"updateName"==e?a.updateNamePrice:a.updateCidBioPrice,m.balance.value<=d&&(f="balance not enough")),!f){n.next=14;break}return a.$message({message:f,type:"error"}),n.abrupt("return",!1);case 14:return n.abrupt("return",!0);case 15:case"end":return n.stop()}},n,a)}))()},onClickCancelEditNft:function(){if(this.bMintFlag&&(this.nftData.name.length>0||this.nftData.bio.length>0)&&!this.bHasMintFlag){var t=this;this.$confirm("Are you sure want to cancel?","tips",{confirmButtonText:"Ok",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.nftData=i()({},t.originNftData),t.bMintFlag=!1,t.bUpdateFlag=!1}).catch(function(){})}else this.bMintFlag=!1,this.bUpdateFlag=!1,this.nftData=i()({},this.originNftData)},onClickBurn:function(){var t=this;this.$confirm("Can't get it back any more after burn! Are you sure?","Warnings",{confirmButtonText:"Burn",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.doBurn()}).catch(function(){})},doBurn:function(){var t=this;return c()(o.a.mark(function e(){var a,n,i,r,s,c,m;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[Object(u.v)(t.nftData.tid)],n="LaserEyes",i=Object(u.v)(t.nftData.tid),r=Object(u.g)(h,v,n),s=Object(u.m)(Object(l.a)(),u.d.DoesNotOwn,r,i),c=t,m={contractAddress:h,contractName:v,functionName:"burn",functionArgs:a,network:_,appDetails:Object(l.b)(),postConditions:[s],onFinish:function(t){c.doNotify("Burn")}},Object(f.c)(m);case 8:case"end":return e.stop()}},e,t)}))()},onChangeName:function(){var t=this.nftData.name.trim(),e=0;t.length>8&&(e=Object(u.e)(t).buffer.byteLength),this.nameExceedTip=e>this.maxNameLen?e+"/"+this.maxNameLen:""},onChangeMinorName:function(){var t=this.nftData.minorName.trim(),e=0;t.length>8&&(e=Object(u.e)(t).buffer.byteLength),this.minorNameExceedTip=e>this.maxNameLen?e+"/"+this.maxNameLen:""},onChangeBio:function(){var t=this.nftData.bio.trim(),e=0;t.length>8&&(e=Object(u.e)(t).buffer.byteLength),this.bioExceedTip=e>this.maxBioLen?e+"/"+this.maxBioLen:""},doNotify:function(t){this.$notify({title:t,message:"Transaction has been sent, wait a while to be finished.",duration:8e3})},onClickHeart:function(){this.$message({message:"like records coming soon",type:"info"})},test:function(){}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"main"}},[t.bSignedIn?t._e():n("div",[t._v("\n      Please sign in: "),n("p"),t._v(" "),n("el-button",{attrs:{type:"primary",round:""},on:{click:t.onClickLoginIn}},[t._v("Sign in")])],1),t._v(" "),t.bSignedIn?n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.bInResolve,expression:"bInResolve"}],attrs:{id:"content"}},[t.bInResolve?t._e():n("div",[0!=t.nftData.tid||t.bMintFlag||t.bUpdateFlag?t._e():n("div",[n("div",{staticClass:"subTitle"},[t._v(t._s(t.bHasMintFlag?"Mint is pending, please wait a while...":"Not has laser eye nft yet"))]),t._v(" "),t.bHasMintFlag?t._e():n("el-button",{attrs:{type:"primary",round:""},on:{click:t.onClickMint}},[t._v("Mint")])],1),t._v(" "),0==t.nftData.tid||t.bMintFlag||t.bUpdateFlag?t._e():n("div",[n("div",{staticClass:"subTitle"},[t._v("My laser eye")]),t._v(" "),n("NftItem",{attrs:{id:"nftItem",nftData:t.nftData}}),t._v(" "),t.nftData.h>0?n("el-button",{attrs:{id:"heart",type:"text"},on:{click:t.onClickHeart}},[n("img",{attrs:{src:a("YfaA"),width:"16",height:"16"}}),t._v(" "),n("label",{attrs:{id:"h"}},[t._v(t._s(t.nftData.h))])]):t._e(),t._v(" "),n("el-descriptions",{attrs:{id:"descArea",title:"",column:1,border:""}},[n("el-descriptions-item",[n("template",{slot:"label"},[t._v("ID")]),t._v("\n              #"+t._s(t.nftData.tid)+"\n            ")],2),t._v(" "),n("el-descriptions-item",[n("template",{slot:"label"},[t._v("Name")]),t._v("\n              "+t._s(t.nftData.name)+"\n            ")],2),t._v(" "),n("el-descriptions-item",[n("template",{slot:"label"},[t._v("Minor name")]),t._v("\n              "+t._s(t.nftData.minorName)+"\n            ")],2),t._v(" "),n("el-descriptions-item",[n("template",{slot:"label"},[t._v("Bio")]),t._v("\n              "+t._s(t.nftData.bio)+"\n            ")],2),t._v(" "),n("el-descriptions-item",[n("template",{slot:"label"},[t._v("Register at")]),t._v("\n              "+t._s(t.createTimeStr)+"\n            ")],2),t._v(" "),n("el-descriptions-item",[n("template",{slot:"label"},[t._v("Cid")]),t._v("\n              "+t._s(t.nftData.cid)+"\n            ")],2)],1),t._v(" "),n("el-button",{staticClass:"actBtn",attrs:{disabled:!t.bOwn,type:"primary",round:""},on:{click:t.onClickUpdate}},[t._v("Update")]),t._v(" "),n("el-button",{staticClass:"actBtn",attrs:{disabled:!t.bOwn,type:"primary",round:""},on:{click:t.onClickTransfer}},[t._v("Transfer")]),t._v(" "),n("el-button",{staticClass:"actBtn",attrs:{disabled:!t.bOwn,type:"danger",round:""},on:{click:t.onClickBurn}},[t._v("Burn")]),t._v(" "),t.bOwn?t._e():n("div",{attrs:{id:"listTip"}},[t._v("Cannot modify when listed in marketplace.")])],1),t._v(" "),t.bMintFlag||t.bUpdateFlag?n("el-form",{ref:"form",attrs:{id:"nftForm",model:t.nftData,"label-width":"120px"}},[n("div",{staticClass:"subTitle"},[t._v(t._s(t.bMintFlag?"Mint laser eye nft, hold to earn":"Update laser eye nft"))]),t._v(" "),n("div",{staticClass:"subTitle2"},[t._v(t._s(t.bMintFlag?"(Each account can only own one)":" "))]),t._v(" "),n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{staticStyle:{color:"red"},attrs:{maxlength:t.maxNameLen,placeholder:"Globally unique, max "+t.maxNameLen+" characters"},on:{input:t.onChangeName},model:{value:t.nftData.name,callback:function(e){t.$set(t.nftData,"name",e)},expression:"nftData.name"}},[t.nameExceedTip.length>0?n("label",{staticClass:"exceedTip",attrs:{slot:"suffix"},slot:"suffix"},[t._v(t._s(t.nameExceedTip))]):t._e()])],1),t._v(" "),n("el-form-item",{attrs:{label:"Minor name"}},[n("el-input",{attrs:{maxlength:t.maxNameLen,placeholder:t.bMintFlag?"Optional name to preserve, can be empty, otherwise must include or included by name.":""},on:{input:t.onChangeMinorName},model:{value:t.nftData.minorName,callback:function(e){t.$set(t.nftData,"minorName",e)},expression:"nftData.minorName"}},[t.minorNameExceedTip.length>0?n("label",{staticClass:"exceedTip",attrs:{slot:"suffix"},slot:"suffix"},[t._v(t._s(t.minorNameExceedTip))]):t._e()])],1),t._v(" "),n("el-form-item",{attrs:{label:"Image CID"}},[n("el-input",{attrs:{maxlength:"64",placeholder:"IPFS content id, like QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"},model:{value:t.nftData.cid,callback:function(e){t.$set(t.nftData,"cid",e)},expression:"nftData.cid"}}),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n              Step 1: add laser eye for your picture\n              "),n("el-link",{staticClass:"elink",attrs:{type:"primary",href:"https://memed.io/laser-eyes-meme-maker",target:"_blank"}},[t._v("here")]),t._v("\n              or\n              "),n("el-link",{staticClass:"elink",attrs:{type:"primary",href:"https://cryptolasereyes.com",target:"_blank"}},[t._v("here")]),t._v(".\n            ")],1),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n              Step 2: compress generated picture\n              "),n("el-link",{staticClass:"elink",attrs:{type:"primary",href:"https://tinypng.com/",target:"_blank"}},[t._v("here")]),t._v("\n              (the smaller size it is, the quicker it shows).\n            ")],1),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n              Step 3: upload compressed picture to\n              "),n("el-link",{staticClass:"elink",attrs:{type:"primary",href:"https://app.pinata.cloud/pinmanager",target:"_blank"}},[t._v("Pinta")]),t._v("(or others), wait for one minute.\n            ")],1),t._v(" "),n("div",{staticClass:"tipFormItem"},[t._v("\n              Step 4: Paste the generated CID, wait several seconds, image will show in the preview area below.\n            ")])],1),t._v(" "),n("el-form-item",{attrs:{label:"Bio"}},[n("el-input",{attrs:{type:"textarea",maxlength:t.maxBioLen,placeholder:"Hover mouse on image to show, max "+t.maxBioLen+" characters"},on:{input:t.onChangeBio},model:{value:t.nftData.bio,callback:function(e){t.$set(t.nftData,"bio",e)},expression:"nftData.bio"}}),t._v(" "),t.bioExceedTip.length>0?n("div",{staticClass:"exceedTip"},[t._v(t._s(t.bioExceedTip))]):t._e()],1),t._v(" "),n("el-form-item",{attrs:{label:"Preview"}},[n("NftItem",{attrs:{nftData:t.nftData}})],1),t._v(" "),n("el-form-item",[t.bMintFlag?t._e():n("el-button",{attrs:{type:"primary",disabled:0==t.nftData.name.trim().length||t.nftData.name.trim()==t.originNftData.name&&t.nftData.minorName.trim()==t.originNftData.minorName},on:{click:t.onClickChangeName}},[t._v(t._s("Change name ("+this.updateNamePrice/1e6+" STX)"))]),t._v(" "),n("el-button",{attrs:{type:"primary",disabled:0==t.nftData.name.trim().length||t.nftData.cid.trim().length<40||t.nftData.cid.trim()==t.originNftData.cid&&t.nftData.bio.trim()==t.originNftData.bio},on:{click:t.onClickMintOrChangeCidBio}},[t._v(t._s(t.bMintFlag?"Mint ("+this.mintPrice/1e6+" STX)":"Update CID/Bio ("+this.updateCidBioPrice/1e6+" STX)"))]),t._v(" "),n("el-button",{on:{click:t.onClickCancelEditNft}},[t._v("Cancel")])],1)],1):t._e()],1)]):t._e()])])},staticRenderFns:[]};var D=a("VU/8")(N,k,!1,function(t){a("TCPR")},"data-v-311fc641",null);e.default=D.exports},woOf:function(t,e,a){t.exports={default:a("V3tA"),__esModule:!0}}});