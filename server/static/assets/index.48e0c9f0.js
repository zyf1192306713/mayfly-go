var ye=Object.defineProperty,ve=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var le=(e,l,s)=>l in e?ye(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,U=(e,l)=>{for(var s in l||(l={}))De.call(l,s)&&le(e,s,l[s]);if(ee)for(var s of ee(l))Ce.call(l,s)&&le(e,s,l[s]);return e},j=(e,l)=>ve(e,_e(l));import{x as N,r as J,a as O,A as K,t as R,s as A,e as r,f as b,h,i as t,G as o,F as P,E as G,l as q,D as T,$ as te,k as D,Q,w as E,P as H,j as Z,J as Fe,o as Ie}from"./vendor.42638b6b.js";import{A as I}from"./Api.a196f191.js";import{_ as ie}from"./SshTerminal.88463733.js";import{E as ne}from"./Enum.2b540114.js";import{n as X}from"./assert.dbc0392f.js";import{_ as oe}from"./codemirror.415b9f22.js";import{g as $e,c as ae}from"./index.99723322.js";var se=N({name:"DynamicForm",props:{formInfo:{type:Object},formData:{type:[Object,Boolean]}},setup(e,l){const s=J(),y=O({form:{},submitDisabled:!1});K(e.formData,(v,f)=>{e.formData&&(y.form=U({},e.formData))});const $=()=>{s.validate(v=>{if(v){const f=U({},y.form),i=y.form.id?e.formInfo.updateApi:e.formInfo.createApi;i?(y.submitDisabled=!0,i.request(y.form).then(u=>{A.success("\u4FDD\u5B58\u6210\u529F"),l.emit("submitSuccess",f),y.submitDisabled=!1},u=>{y.submitDisabled=!1})):A.error("\u8868\u5355\u672A\u8BBE\u7F6E\u5BF9\u5E94\u7684\u63D0\u4EA4\u6743\u9650")}else return!1})},_=()=>{l.emit("reset"),m()},m=()=>{s.resetFields(),y.form={}};return j(U({},R(y)),{dynamicForm:s,submit:$,reset:_,resetFieldsAndData:m})}});const ke={class:"dynamic-form"},we={key:1},Ve=D("\u91CD \u7F6E"),Ee=D("\u4FDD \u5B58");function Se(e,l,s,y,$,_){const m=r("el-input"),v=r("el-option"),f=r("el-select"),i=r("el-form-item"),u=r("el-col"),c=r("el-row"),C=r("el-button"),w=r("el-form");return b(),h("div",ke,[t(w,{model:e.form,ref:"dynamicForm","label-width":e.formInfo.labelWidth?e.formInfo.labelWidth:"100px",size:e.formInfo.size?e.formInfo.size:"small"},{default:o(()=>[(b(!0),h(P,null,G(e.formInfo.formRows,B=>(b(),h(c,{key:B.key},{default:o(()=>[(b(!0),h(P,null,G(B,a=>(b(),h(u,{key:a.key,span:a.span?a.span:24/B.length},{default:o(()=>[t(i,{prop:a.name,label:a.label,"label-width":a.labelWidth,required:a.required,rules:a.rules},{default:o(()=>[a.type==="input"?(b(),h(m,{key:0,modelValue:e.form[a.name],"onUpdate:modelValue":n=>e.form[a.name]=n,modelModifiers:{trim:!0},placeholder:a.placeholder,type:a.inputType,clearable:"",onChange:n=>a.change?a.change(e.form):""},null,8,["modelValue","onUpdate:modelValue","placeholder","type","onChange"])):a.type==="text"?(b(),h("span",we,q(e.form[a.name]),1)):a.type==="select"?(b(),h(f,{key:2,modelValue:e.form[a.name],"onUpdate:modelValue":n=>e.form[a.name]=n,modelModifiers:{trim:!0},placeholder:a.placeholder,filterable:a.filterable,remote:a.remote,"remote-method":a.remoteMethod,onFocus:n=>a.focus?a.focus(e.form):"",clearable:"",disabled:a.updateDisabled&&e.form.id!=null,style:{width:"100%"}},{default:o(()=>[(b(!0),h(P,null,G(a.options,n=>(b(),h(v,{key:n.key,label:n[a.optionProps&&a.optionProps.label||"label"],value:n[a.optionProps&&a.optionProps.value||"value"]},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","filterable","remote","remote-method","onFocus","disabled"])):T("",!0)]),_:2},1032,["prop","label","label-width","required","rules"])]),_:2},1032,["span"]))),128))]),_:2},1024))),128)),t(c,{type:"flex",justify:"center"},{default:o(()=>[te(e.$slots,"btns",{submitDisabled:e.submitDisabled,data:e.form,submit:e.submit},()=>[t(C,{onClick:e.reset,size:"mini"},{default:o(()=>[Ve]),_:1},8,["onClick"]),t(C,{type:"primary",onClick:e.submit,size:"mini"},{default:o(()=>[Ee]),_:1},8,["onClick"])])]),_:3})]),_:1},8,["model","label-width","size"])])}se.render=Se;var re=N({name:"DynamicFormDialog",components:{DynamicForm:se},props:{visible:{type:Boolean},dialogWidth:{type:String},title:{type:String},formInfo:{type:Object},formData:{type:[Object,Boolean]}},setup(e,l){const s=J(),y=()=>{l.emit("update:visible",!1),l.emit("update:formData",null),l.emit("close"),setTimeout(()=>{s.resetFieldsAndData()},200)};return{df:s,close:y,submitSuccess:_=>{l.emit("submitSuccess",_),y()}}}});const Te={class:"form-dialog"},Be=D("\u4FDD \u5B58"),Ae=D("\u53D6 \u6D88");function ze(e,l,s,y,$,_){const m=r("el-button"),v=r("dynamic-form"),f=r("el-dialog");return b(),h("div",Te,[t(f,{title:e.title,modelValue:e.visible,"onUpdate:modelValue":l[2]||(l[2]=i=>e.visible=i),width:e.dialogWidth?e.dialogWidth:"500px"},{default:o(()=>[t(v,{ref:"df","form-info":e.formInfo,"form-data":e.formData,onSubmitSuccess:e.submitSuccess},{btns:o(i=>[te(e.$slots,"btns",{},()=>[t(m,{disabled:i.submitDisabled,type:"primary",onClick:i.submit,size:"mini"},{default:o(()=>[Be]),_:2},1032,["disabled","onClick"]),t(m,{disabled:i.submitDisabled,onClick:l[1]||(l[1]=u=>e.close()),size:"mini"},{default:o(()=>[Ae]),_:2},1032,["disabled"])])]),_:1},8,["form-info","form-data","onSubmitSuccess"])]),_:1},8,["title","modelValue","width"])])}re.render=ze;const S={list:I.create("/machines","get"),info:I.create("/machines/{id}/sysinfo","get"),top:I.create("/machines/{id}/top","get"),save:I.create("/machines","post"),del:I.create("/devops/machines/{id}","delete"),scripts:I.create("/machines/{machineId}/scripts","get"),runScript:I.create("/machines/{machineId}/scripts/{scriptId}/run","get"),saveScript:I.create("/machines/{machineId}/scripts","post"),deleteScript:I.create("/machines/{machineId}/scripts/{scriptId}","delete"),files:I.create("/machines/{id}/files","get"),lsFile:I.create("/machines/{machineId}/files/{fileId}/read-dir","get"),rmFile:I.create("/machines/{machineId}/files/{fileId}/remove","delete"),uploadFile:I.create("/machines/files/upload","post"),fileContent:I.create("/machines/{machineId}/files/{fileId}/read","get"),updateFileContent:I.create("/machines/{machineId}/files/{id}/write","post"),addConf:I.create("/machines/{machineId}/files","post"),delConf:I.create("/machines/{machineId}/files/{id}","delete"),terminal:I.create("/api/machines/{id}/terminal","get")};var L={scriptTypeEnum:new ne().add("RESULT","\u6709\u7ED3\u679C",1).add("NO_RESULT","\u65E0\u7ED3\u679C",2).add("REAL_TIME","\u5B9E\u65F6\u4EA4\u4E92",3),FileTypeEnum:new ne().add("DIRECTORY","\u76EE\u5F55",1).add("FILE","\u6587\u4EF6",2)},de=N({name:"ScriptEdit",components:{codemirror:oe},props:{visible:{type:Boolean},data:{type:Object},title:{type:String},machineId:{type:Number},isCommon:{type:Boolean}},setup(e,{emit:l}){const{isCommon:s,machineId:y}=R(e),$=J(null),_=O({visible:!1,submitDisabled:!1,form:{id:null,name:"",machineId:0,description:"",script:"",type:null},btnLoading:!1});K(e,(f,i)=>{f.data?_.form=U({},f.data):(_.form={},_.form.script=""),_.visible=f.visible});const m=()=>{_.form.machineId=s.value?9999999:y.value,console.log("machineid:",y),$.value.validate(f=>{if(f)X(_.form.name,"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),X(_.form.description,"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),X(_.form.script,"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),S.saveScript.request(_.form).then(i=>{A.success("\u4FDD\u5B58\u6210\u529F"),l("submitSuccess"),_.submitDisabled=!1,v()},i=>{_.submitDisabled=!1});else return!1})},v=()=>{l("update:visible",!1),l("cancel")};return j(U({},R(_)),{enums:L,mockDataForm:$,btnOk:m,cancel:v})}}),Rl=`#content .CodeMirror {
  height: 300px !important;
}`;const Ue={class:"mock-data-dialog"},Me={class:"dialog-footer"},qe=D("\u4FDD \u5B58"),je=D("\u5173 \u95ED");function Ne(e,l,s,y,$,_){const m=r("el-input"),v=r("el-form-item"),f=r("el-option"),i=r("el-select"),u=r("codemirror"),c=r("el-form"),C=r("el-button"),w=r("el-dialog"),B=Q("auth");return b(),h("div",Ue,[t(w,{title:e.title,modelValue:e.visible,"onUpdate:modelValue":l[6]||(l[6]=a=>e.visible=a),"close-on-click-modal":!1,"before-close":e.cancel,"show-close":!0,"destroy-on-close":!0,width:"800px"},{footer:o(()=>[t("div",Me,[E(t(C,{type:"primary",loading:e.btnLoading,onClick:e.btnOk,size:"mini",disabled:e.submitDisabled},{default:o(()=>[qe]),_:1},8,["loading","onClick","disabled"]),[[B,"machine:script:save"]]),t(C,{onClick:l[5]||(l[5]=a=>e.cancel()),disabled:e.submitDisabled,size:"mini"},{default:o(()=>[je]),_:1},8,["disabled"])])]),default:o(()=>[t(c,{model:e.form,ref:"mockDataForm","label-width":"70px",size:"small"},{default:o(()=>[t(v,{prop:"method",label:"\u540D\u79F0"},{default:o(()=>[t(m,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=a=>e.form.name=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(v,{prop:"description",label:"\u63CF\u8FF0"},{default:o(()=>[t(m,{modelValue:e.form.description,"onUpdate:modelValue":l[2]||(l[2]=a=>e.form.description=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),t(v,{prop:"type",label:"\u7C7B\u578B"},{default:o(()=>[t(i,{modelValue:e.form.type,"onUpdate:modelValue":l[3]||(l[3]=a=>e.form.type=a),"default-first-option":"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"},{default:o(()=>[(b(!0),h(P,null,G(e.enums.scriptTypeEnum,a=>(b(),h(f,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(v,{prop:"script",label:"\u5185\u5BB9",id:"content"},{default:o(()=>[t(u,{ref:"cmEditor",modelValue:e.form.script,"onUpdate:modelValue":l[4]||(l[4]=a=>e.form.script=a),language:"shell"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue","before-close"])])}de.render=Ne;var ue=N({name:"ServiceManage",components:{ScriptEdit:de,SshTerminal:ie},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,l){const s=O({visible:!1,type:0,currentId:null,currentData:null,editDialog:{visible:!1,data:null,title:"",machineId:9999999},scriptTable:[],resultDialog:{visible:!1,result:""},terminalDialog:{visible:!1,cmd:"",machineId:0}});K(e,(c,C)=>{e.machineId&&y(),s.visible=c.visible});const y=async()=>{s.currentId=null,s.currentData=null;const c=s.type==0?e.machineId:9999999,C=await S.scripts.request({machineId:c});s.scriptTable=C.list},$=async c=>{const C=c.type==L.scriptTypeEnum.NO_RESULT.value;if(c.type==L.scriptTypeEnum.RESULT.value||C){const w=await S.runScript.request({machineId:e.machineId,scriptId:c.id});if(C){A.success("\u6267\u884C\u5B8C\u6210");return}s.resultDialog.result=w,s.resultDialog.visible=!0;return}if(c.type==L.scriptTypeEnum.REAL_TIME.value){s.terminalDialog.cmd=c.script,s.terminalDialog.visible=!0,s.terminalDialog.machineId=e.machineId;return}},_=()=>{s.terminalDialog.visible=!1,s.terminalDialog.machineId=0},m=c=>{!c||(s.currentId=c.id,s.currentData=c)},v=c=>{s.editDialog.machineId=e.machineId,s.editDialog.data=c,c?s.editDialog.title="\u67E5\u770B\u7F16\u8F91\u811A\u672C":s.editDialog.title="\u65B0\u589E\u811A\u672C",s.editDialog.visible=!0},f=()=>{y()},i=c=>{H.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${c.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{S.deleteScript.request({machineId:e.machineId,scriptId:c.id}).then(C=>{y()})})},u=()=>{l.emit("update:visible",!1),l.emit("update:machineId",null),l.emit("cancel"),s.scriptTable=[]};return j(U({},R(s)),{enums:L,getScripts:y,runScript:$,closeTermnial:_,choose:m,editScript:v,submitSuccess:f,deleteRow:i,handleClose:u})}}),Ll="";const Re={class:"file-manage"},Le={class:"toolbar"},We={style:{float:"left"}},Oe={style:{float:"right"}},Pe=D("\u67E5\u770B"),Ge=D("\u6DFB\u52A0"),Ye=D("\u5220\u9664"),Je=t("i",null,null,-1),Ke=D("\u786E\u5B9A"),Qe=D("\u6267\u884C"),Ze={style:{"white-space":"pre-line",padding:"10px",color:"#000000"}};function He(e,l,s,y,$,_){const m=r("el-option"),v=r("el-select"),f=r("el-button"),i=r("el-radio"),u=r("el-table-column"),c=r("el-table"),C=r("el-dialog"),w=r("ssh-terminal"),B=r("script-edit"),a=Q("auth");return b(),h("div",Re,[t(C,{title:e.title,modelValue:e.visible,"onUpdate:modelValue":l[6]||(l[6]=n=>e.visible=n),"destroy-on-close":!0,"show-close":!0,"before-close":e.handleClose,width:"60%"},{default:o(()=>[t("div",Le,[t("div",We,[t(v,{modelValue:e.type,"onUpdate:modelValue":l[1]||(l[1]=n=>e.type=n),onChange:e.getScripts,size:"mini",placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[t(m,{key:0,label:"\u79C1\u6709",value:0}),t(m,{key:1,label:"\u516C\u5171",value:1})]),_:1},8,["modelValue","onChange"])]),t("div",Oe,[t(f,{onClick:l[2]||(l[2]=n=>e.editScript(e.currentData)),disabled:e.currentId==null,type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},{default:o(()=>[Pe]),_:1},8,["disabled"]),E(t(f,{type:"primary",onClick:l[3]||(l[3]=n=>e.editScript(null)),icon:"el-icon-plus",size:"mini",plain:""},{default:o(()=>[Ge]),_:1},512),[[a,"machine:script:save"]]),E(t(f,{disabled:e.currentId==null,type:"danger",onClick:l[4]||(l[4]=n=>e.deleteRow(e.currentData)),icon:"el-icon-delete",size:"mini",plain:""},{default:o(()=>[Ye]),_:1},8,["disabled"]),[[a,"machine:script:del"]])])]),t(c,{data:e.scriptTable,onCurrentChange:e.choose,stripe:"",border:"",size:"mini",style:{width:"100%"}},{default:o(()=>[t(u,{label:"\u9009\u62E9",width:"55px"},{default:o(n=>[t(i,{modelValue:e.currentId,"onUpdate:modelValue":l[5]||(l[5]=k=>e.currentId=k),label:n.row.id},{default:o(()=>[Je]),_:2},1032,["modelValue","label"])]),_:1}),t(u,{prop:"name",label:"\u540D\u79F0","min-width":50}),t(u,{prop:"description",label:"\u63CF\u8FF0","min-width":100,"show-overflow-tooltip":""}),t(u,{prop:"name",label:"\u7C7B\u578B","min-width":50},{default:o(n=>[D(q(e.enums.scriptTypeEnum.getLabelByValue(n.row.type)),1)]),_:1}),t(u,{label:"\u64CD\u4F5C"},{default:o(n=>[n.row.id==null?(b(),h(f,{key:0,onClick:k=>e.addFiles(n.row),type:"success",icon:"el-icon-success",size:"mini",plain:""},{default:o(()=>[Ke]),_:2},1032,["onClick"])):T("",!0),n.row.id!=null?E((b(),h(f,{key:1,onClick:k=>e.runScript(n.row),type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},{default:o(()=>[Qe]),_:2},1032,["onClick"])),[[a,"machine:script:run"]]):T("",!0)]),_:1})]),_:1},8,["data","onCurrentChange"])]),_:1},8,["title","modelValue","before-close"]),t(C,{title:"\u6267\u884C\u7ED3\u679C",modelValue:e.resultDialog.visible,"onUpdate:modelValue":l[7]||(l[7]=n=>e.resultDialog.visible=n),width:"40%"},{default:o(()=>[t("div",Ze,q(e.resultDialog.result),1)]),_:1},8,["modelValue"]),e.terminalDialog.visible?(b(),h(C,{key:0,title:"\u7EC8\u7AEF",modelValue:e.terminalDialog.visible,"onUpdate:modelValue":l[8]||(l[8]=n=>e.terminalDialog.visible=n),width:"70%","close-on-click-modal":!1,modal:!1,onClose:e.closeTermnial},{default:o(()=>[t(w,{ref:"terminal",cmd:e.terminalDialog.cmd,machineId:e.terminalDialog.machineId,height:"600px"},null,8,["cmd","machineId"])]),_:1},8,["modelValue","onClose"])):T("",!0),t(B,{visible:e.editDialog.visible,"onUpdate:visible":l[9]||(l[9]=n=>e.editDialog.visible=n),data:e.editDialog.data,"onUpdate:data":l[10]||(l[10]=n=>e.editDialog.data=n),title:e.editDialog.title,machineId:e.editDialog.machineId,"onUpdate:machineId":l[11]||(l[11]=n=>e.editDialog.machineId=n),isCommon:e.type==1,onSubmitSuccess:e.submitSuccess},null,8,["visible","data","title","machineId","isCommon","onSubmitSuccess"])])}ue.render=He;var me=N({name:"FileManage",components:{codemirror:oe},props:{visible:{type:Boolean},machineId:{type:Number},title:{type:String}},setup(e,{emit:l}){const s=S.addConf,y=S.delConf,$=S.updateFileContent,_=S.files,m=J(null),v=$e("token"),f={tabSize:2,mode:"text/x-sh",theme:"panda-syntax",line:!0,lint:!0,gutters:["CodeMirror-lint-markers"],indentWithTabs:!0,smartIndent:!0,matchBrackets:!0,autofocus:!0,styleSelectedText:!0,styleActiveLine:!0,foldGutter:!0,hintOptions:{completeSingle:!0}},i=O({visible:!1,form:{id:null,type:null,name:"",remark:""},fileTable:[],btnLoading:!1,fileContent:{fileId:0,content:"",contentVisible:!1,dialogTitle:"",path:"",type:"shell"},tree:{title:"",visible:!1,folder:{id:0},node:{childNodes:[]},resolve:{}},props:{label:"name",children:"zones",isLeaf:"leaf"}});K(e,(d,F)=>{d.machineId&&u(),i.visible=d.visible});const u=async()=>{const d=await _.request({id:e.machineId});i.fileTable=d.list},c=()=>{i.fileTable=[{}].concat(i.fileTable)},C=async d=>{d.machineId=e.machineId,await s.request(d),A.success("\u6DFB\u52A0\u6210\u529F"),u()},w=(d,F)=>{F.id?H.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${F.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{y.request({machineId:e.machineId,id:F.id}).then(V=>{i.fileTable.splice(d,1)})}):i.fileTable.splice(d,1)},B=d=>{if(d.type==1){i.tree.folder=d,i.tree.title=d.name,i.tree.node.childNodes=[],g(i.tree.node,i.tree.resolve),i.tree.visible=!0;return}a(d.id,d.path)},a=async(d,F)=>{const V=await S.fileContent.request({fileId:d,path:F,machineId:e.machineId});i.fileContent.content=V,i.fileContent.fileId=d,i.fileContent.dialogTitle=F,i.fileContent.path=F,i.fileContent.type=n(F),i.fileContent.contentVisible=!0},n=d=>d.endsWith(".sh")?"shell":d.endsWith("js")||d.endsWith("json")?"javascript":d.endsWith("Dockerfile")?"dockerfile":d.endsWith("nginx.conf")?"nginx":d.endsWith("yaml")||d.endsWith("yml")?"yaml":d.endsWith("xml")||d.endsWith("html")?"html":"text",k=async()=>{await $.request({content:i.fileContent.content,id:i.fileContent.fileId,path:i.fileContent.path,machineId:e.machineId}),A.success("\u4FEE\u6539\u6210\u529F"),i.fileContent.contentVisible=!1,i.fileContent.content=""},p=()=>{l("update:visible",!1),l("update:machineId",null),l("cancel"),i.fileTable=[],i.tree.folder={id:0}},g=async(d,F)=>{if(typeof F!="function")return;const V=i.tree.folder;if(d.level===0){i.tree.node=d,i.tree.resolve=F;const W=V?V.path:"/";return F([{name:W,type:"d",path:W}])}let M;const z=d.data;!z||z.name==z.path?M=V.path:M=z.path;const x=await S.lsFile.request({fileId:V.id,machineId:e.machineId,path:M});for(const W of x)W.type!="d"&&(W.leaf=!0);return F(x)},Y=(d,F)=>{const V=F.path;H.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${V}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{S.rmFile.request({fileId:i.tree.folder.id,path:V,machineId:e.machineId}).then(M=>{A.success("\u5220\u9664\u6210\u529F"),m.value.remove(d)})}).catch(()=>{})},pe=(d,F)=>{const V=document.createElement("a");V.setAttribute("href",`${ae.baseApiUrl}/machines/${e.machineId}/files/${i.tree.folder.id}/read?type=1&path=${F.path}&token=${v}`),V.click()},fe=d=>`${ae.baseApiUrl}/machines/${e.machineId}/files/${i.tree.folder.id}/upload?token=${v}`,be=d=>{d.code==200?A.success("\u6587\u4EF6\u4E0A\u4F20\u4E2D..."):A.error(d.msg)},he=d=>{const F=d.path;return["/","//","/usr","/usr/","/usr/bin","/opt","/run","/etc","/proc","/var","/mnt","/boot","/dev","/home","/media","/root"].indexOf(F)!=-1},ge=d=>{const F=Number(d);if(d&&!isNaN(F)){const V=["B","KB","MB","GB","TB","PB","EB","ZB","YB","BB"];let M=0,z=F;if(F>=1024)for(;z>1024;)z=z/1024,M++;return`${z.toFixed(2)}${V[M]}`}return"-"};return j(U({},R(i)),{fileTree:m,enums:L,token:v,cmOptions:f,add:c,getFiles:u,addFiles:C,deleteRow:w,getConf:B,getFileContent:a,updateContent:k,handleClose:p,loadNode:g,deleteFile:Y,downloadFile:pe,getUploadFile:fe,uploadSuccess:be,dontOperate:he,formatFileSize:ge})}}),Wl="";const Xe={class:"file-manage"},xe={class:"toolbar"},el={style:{float:"right"}},ll=D("\u6DFB\u52A0"),tl=D("\u786E\u5B9A"),il=D("\u67E5\u770B"),nl=D("\u5220\u9664"),ol={style:{height:"45vh",overflow:"auto"}},al={class:"custom-tree-node"},sl={key:0},rl=t("i",{class:"el-icon-folder"},null,-1),dl={key:1},ul=t("i",{class:"el-icon-folder-opened"},null,-1),ml={key:2},cl=t("i",{class:"el-icon-document"},null,-1),pl={style:{display:"inline-block",width:"430px"}},fl={key:0,style:{color:"#67c23a"}},bl={class:"dialog-footer"},hl=D("\u4FDD \u5B58"),gl=D("\u5173 \u95ED");function yl(e,l,s,y,$,_){const m=r("el-button"),v=r("el-input"),f=r("el-table-column"),i=r("el-option"),u=r("el-select"),c=r("el-table"),C=r("el-dialog"),w=r("el-link"),B=r("el-upload"),a=r("el-tree"),n=r("codemirror"),k=Q("auth");return b(),h("div",Xe,[t(C,{title:e.title,modelValue:e.visible,"onUpdate:modelValue":l[1]||(l[1]=p=>e.visible=p),"show-close":!0,"before-close":e.handleClose,width:"800px"},{default:o(()=>[t("div",xe,[t("div",el,[E(t(m,{type:"primary",onClick:e.add,icon:"el-icon-plus",size:"mini",plain:""},{default:o(()=>[ll]),_:1},8,["onClick"]),[[k,"machine:file:add"]])])]),t(c,{data:e.fileTable,stripe:"",style:{width:"100%"}},{default:o(()=>[t(f,{prop:"name",label:"\u540D\u79F0",width:""},{default:o(p=>[t(v,{modelValue:p.row.name,"onUpdate:modelValue":g=>p.row.name=g,size:"mini",disabled:p.row.id!=null,clearable:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),t(f,{prop:"name",label:"\u7C7B\u578B","min-width":"50px"},{default:o(p=>[t(u,{disabled:p.row.id!=null,size:"mini",modelValue:p.row.type,"onUpdate:modelValue":g=>p.row.type=g,style:{width:"100px"},placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[(b(!0),h(P,null,G(e.enums.FileTypeEnum,g=>(b(),h(i,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])]),_:1}),t(f,{prop:"path",label:"\u8DEF\u5F84",width:""},{default:o(p=>[t(v,{modelValue:p.row.path,"onUpdate:modelValue":g=>p.row.path=g,disabled:p.row.id!=null,size:"mini",clearable:""},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),t(f,{label:"\u64CD\u4F5C",width:""},{default:o(p=>[p.row.id==null?(b(),h(m,{key:0,onClick:g=>e.addFiles(p.row),type:"success",icon:"el-icon-success",size:"mini",plain:""},{default:o(()=>[tl]),_:2},1032,["onClick"])):T("",!0),p.row.id!=null?(b(),h(m,{key:1,onClick:g=>e.getConf(p.row),type:"primary",icon:"el-icon-tickets",size:"mini",plain:""},{default:o(()=>[il]),_:2},1032,["onClick"])):T("",!0),E(t(m,{type:"danger",onClick:g=>e.deleteRow(p.$index,p.row),icon:"el-icon-delete",size:"mini",plain:""},{default:o(()=>[nl]),_:2},1032,["onClick"]),[[k,"machine:file:del"]])]),_:1})]),_:1},8,["data"])]),_:1},8,["title","modelValue","before-close"]),t(C,{title:e.tree.title,modelValue:e.tree.visible,"onUpdate:modelValue":l[3]||(l[3]=p=>e.tree.visible=p),"close-on-click-modal":!1,width:"680px"},{default:o(()=>[t("div",ol,[t(a,{ref:"fileTree",load:e.loadNode,props:e.props,lazy:"","node-key":"id","expand-on-click-node":!1},{default:o(({node:p,data:g})=>[t("span",al,[g.type=="d"&&!p.expanded?(b(),h("span",sl,[rl])):T("",!0),g.type=="d"&&p.expanded?(b(),h("span",dl,[ul])):T("",!0),g.type=="-"?(b(),h("span",ml,[cl])):T("",!0),t("span",pl,[D(q(p.label)+" ",1),g.type=="-"?(b(),h("span",fl,"\xA0\xA0["+q(e.formatFileSize(g.size))+"]",1)):T("",!0)]),t("span",null,[g.type=="-"&&g.size<1*1024*1024?(b(),h(w,{key:0,onClick:Z(Y=>e.getFileContent(e.tree.folder.id,g.path),["prevent"]),type:"info",icon:"el-icon-view",underline:!1},null,8,["onClick"])):T("",!0),t(B,{"on-success":e.uploadSuccess,headers:{token:e.token},data:{fileId:e.tree.folder.id,path:g.path,machineId:e.machineId},action:e.getUploadFile({path:g.path}),"show-file-list":!1,name:"file",multiple:"",limit:100,style:{display:"inline-block","margin-left":"2px"}},{default:o(()=>[g.type=="d"?E((b(),h(w,{key:0,onClick:l[2]||(l[2]=Z(()=>{},["prevent"])),icon:"el-icon-upload",underline:!1},null,512)),[[k,"machine:file:upload"]]):T("",!0)]),_:2},1032,["on-success","headers","data","action"]),g.type=="-"?E((b(),h(w,{key:1,onClick:Z(Y=>e.downloadFile(p,g),["prevent"]),type:"danger",icon:"el-icon-download",underline:!1,style:{"margin-left":"2px"}},null,8,["onClick"])),[[k,"machine:file:write"]]):T("",!0),e.dontOperate(g)?T("",!0):E((b(),h(w,{key:2,onClick:Z(Y=>e.deleteFile(p,g),["prevent"]),type:"danger",icon:"el-icon-delete",underline:!1,style:{"margin-left":"2px"}},null,8,["onClick"])),[[k,"machine:file:rm"]])])])]),_:1},8,["load","props"])])]),_:1},8,["title","modelValue"]),t(C,{"destroy-on-close":!0,title:e.fileContent.dialogTitle,modelValue:e.fileContent.contentVisible,"onUpdate:modelValue":l[6]||(l[6]=p=>e.fileContent.contentVisible=p),"close-on-click-modal":!1,top:"5vh",width:"70%"},{footer:o(()=>[t("div",bl,[E(t(m,{type:"primary",onClick:e.updateContent,size:"mini"},{default:o(()=>[hl]),_:1},8,["onClick"]),[[k,"machine:file:write"]]),t(m,{onClick:l[5]||(l[5]=p=>e.fileContent.contentVisible=!1),size:"mini"},{default:o(()=>[gl]),_:1})])]),default:o(()=>[t("div",null,[t(n,{"can-change-mode":!0,ref:"cmEditor",modelValue:e.fileContent.content,"onUpdate:modelValue":l[4]||(l[4]=p=>e.fileContent.content=p),language:e.fileContent.type},null,8,["modelValue","language"])])]),_:1},8,["title","modelValue"])])}me.render=yl;var ce=N({name:"MachineList",components:{SshTerminal:ie,ServiceManage:ue,FileManage:me,DynamicFormDialog:re},setup(){const e=Fe(),l=O({params:{pageNum:1,pageSize:10,host:null,clusterId:null},data:{list:[],total:10},currentId:null,currentData:null,infoDialog:{visible:!1,info:""},serviceDialog:{visible:!1,machineId:0,title:""},fileDialog:{visible:!1,machineId:0,title:""},monitorDialog:{visible:!1,machineId:0},formDialog:{visible:!1,title:"",formInfo:{createApi:S.save,updateApi:S.save,formRows:[[{type:"input",label:"\u540D\u79F0\uFF1A",name:"name",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur","change"]}]}],[{type:"input",label:"ip\uFF1A",name:"ip",placeholder:"\u8BF7\u8F93\u5165ip",rules:[{required:!0,message:"\u8BF7\u8F93\u5165ip",trigger:["blur","change"]}]}],[{type:"input",label:"\u7AEF\u53E3\u53F7\uFF1A",name:"port",placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3\u53F7",inputType:"number",rules:[{required:!0,message:"\u8BF7\u8F93\u5165ip",trigger:["blur","change"]}]}],[{type:"input",label:"\u7528\u6237\u540D\uFF1A",name:"username",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["blur","change"]}]}],[{type:"input",label:"\u5BC6\u7801\uFF1A",name:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",inputType:"password"}]]},formData:{port:22}}});Ie(()=>{i()});const s=u=>{!u||(l.currentId=u.id,l.currentData=u)},y=u=>{const{href:c}=e.resolve({path:"/machine/terminal",query:{id:u.id,name:u.name}});window.open(c,"_blank")},$=u=>{let c;u?(l.formDialog.formData=l.currentData,c="\u7F16\u8F91\u673A\u5668"):(l.formDialog.formData={port:22},c="\u6DFB\u52A0\u673A\u5668"),l.formDialog.title=c,l.formDialog.visible=!0},_=async u=>{await S.del.request({id:u}),A.success("\u64CD\u4F5C\u6210\u529F"),i()},m=u=>{l.serviceDialog.machineId=u.id,l.serviceDialog.visible=!0,l.serviceDialog.title=`${u.name} => ${u.ip}`},v=()=>{l.currentId=null,l.currentData=null,i()},f=u=>{l.fileDialog.visible=!0,l.fileDialog.machineId=u.id,l.fileDialog.title=`${u.name} => ${u.ip}`},i=async()=>{const u=await S.list.request(l.params);l.data=u};return j(U({},R(l)),{choose:s,showTerminal:y,openFormDialog:$,deleteMachine:_,serviceManager:m,submitSuccess:v,fileManage:f,search:i})}}),Ol=`
.el-dialog__body {
    padding: 2px 2px;
}
`;const vl={class:"toolbar"},_l={style:{float:"left"}},Dl=D("\u6DFB\u52A0"),Cl=D("\u7F16\u8F91"),Fl=D("\u5220\u9664"),Il=D("\u6587\u4EF6\u7BA1\u7406"),$l={style:{float:"right"}},kl=t("i",null,null,-1),wl=D("\u76D1\u63A7"),Vl=D("\u811A\u672C\u7BA1\u7406"),El=D("\u7EC8\u7AEF");function Sl(e,l,s,y,$,_){const m=r("el-button"),v=r("el-input"),f=r("el-radio"),i=r("el-table-column"),u=r("el-table"),c=r("el-pagination"),C=r("service-manage"),w=r("file-manage"),B=r("dynamic-form-dialog"),a=Q("auth");return b(),h("div",null,[t("div",vl,[t("div",_l,[E(t(m,{type:"primary",icon:"el-icon-plus",size:"mini",onClick:l[1]||(l[1]=n=>e.openFormDialog(!1)),plain:""},{default:o(()=>[Dl]),_:1},512),[[a,"machine:add"]]),E(t(m,{type:"primary",icon:"el-icon-edit",size:"mini",disabled:e.currentId==null,onClick:l[2]||(l[2]=n=>e.openFormDialog(e.currentData)),plain:""},{default:o(()=>[Cl]),_:1},8,["disabled"]),[[a,"machine:update"]]),E(t(m,{disabled:e.currentId==null,onClick:l[3]||(l[3]=n=>e.deleteMachine(e.currentId)),type:"danger",icon:"el-icon-delete",size:"mini"},{default:o(()=>[Fl]),_:1},8,["disabled"]),[[a,"machine:del"]]),E(t(m,{type:"success",disabled:e.currentId==null,onClick:l[4]||(l[4]=n=>e.fileManage(e.currentData)),size:"mini",plain:""},{default:o(()=>[Il]),_:1},8,["disabled"]),[[a,"machine:file"]])]),t("div",$l,[t(v,{placeholder:"host",size:"mini",style:{width:"140px"},modelValue:e.params.host,"onUpdate:modelValue":l[5]||(l[5]=n=>e.params.host=n),onClear:e.search,plain:"",clearable:""},null,8,["modelValue","onClear"]),t(m,{onClick:e.search,type:"success",icon:"el-icon-search",size:"mini"},null,8,["onClick"])])]),t(u,{data:e.data.list,border:"",stripe:"",style:{width:"100%"},onCurrentChange:e.choose},{default:o(()=>[t(i,{label:"\u9009\u62E9",width:"55px"},{default:o(n=>[t(f,{modelValue:e.currentId,"onUpdate:modelValue":l[6]||(l[6]=k=>e.currentId=k),label:n.row.id},{default:o(()=>[kl]),_:2},1032,["modelValue","label"])]),_:1}),t(i,{prop:"name",label:"\u540D\u79F0",width:""}),t(i,{prop:"ip",label:"IP",width:""}),t(i,{prop:"port",label:"\u7AEF\u53E3","min-width":40}),t(i,{prop:"username",label:"\u7528\u6237\u540D","min-width":40}),t(i,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":100},{default:o(n=>[D(q(e.$filters.dateFormat(n.row.createTime)),1)]),_:1}),t(i,{prop:"creator",label:"\u521B\u5EFA\u8005","min-width":50}),t(i,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4","min-width":100},{default:o(n=>[D(q(e.$filters.dateFormat(n.row.updateTime)),1)]),_:1}),t(i,{prop:"modifier",label:"\u4FEE\u6539\u8005","min-width":50}),t(i,{label:"\u64CD\u4F5C","min-width":"200px"},{default:o(n=>[t(m,{type:"primary",onClick:k=>e.monitor(n.row.id),icom:"el-icon-tickets",size:"mini",plain:""},{default:o(()=>[wl]),_:2},1032,["onClick"]),t(m,{type:"success",onClick:k=>e.serviceManager(n.row),size:"mini",plain:""},{default:o(()=>[Vl]),_:2},1032,["onClick"]),E(t(m,{type:"success",onClick:k=>e.showTerminal(n.row),size:"mini",plain:""},{default:o(()=>[El]),_:2},1032,["onClick"]),[[a,"machine:terminal"]])]),_:1})]),_:1},8,["data","onCurrentChange"]),t(c,{style:{"text-align":"center"},background:"",layout:"prev, pager, next, total, jumper",total:e.data.total,"current-page":e.params.pageNum,"onUpdate:current-page":l[7]||(l[7]=n=>e.params.pageNum=n),"page-size":e.params.pageSize},null,8,["total","current-page","page-size"]),t(C,{title:e.serviceDialog.title,visible:e.serviceDialog.visible,"onUpdate:visible":l[8]||(l[8]=n=>e.serviceDialog.visible=n),machineId:e.serviceDialog.machineId,"onUpdate:machineId":l[9]||(l[9]=n=>e.serviceDialog.machineId=n)},null,8,["title","visible","machineId"]),t(w,{title:e.fileDialog.title,visible:e.fileDialog.visible,"onUpdate:visible":l[10]||(l[10]=n=>e.fileDialog.visible=n),machineId:e.fileDialog.machineId,"onUpdate:machineId":l[11]||(l[11]=n=>e.fileDialog.machineId=n)},null,8,["title","visible","machineId"]),t(B,{visible:e.formDialog.visible,"onUpdate:visible":l[12]||(l[12]=n=>e.formDialog.visible=n),title:e.formDialog.title,formInfo:e.formDialog.formInfo,formData:e.formDialog.formData,"onUpdate:formData":l[13]||(l[13]=n=>e.formDialog.formData=n),onSubmitSuccess:e.submitSuccess},null,8,["visible","title","formInfo","formData","onSubmitSuccess"])])}ce.render=Sl;export default ce;