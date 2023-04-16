"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[678],{6678:(re,Z,s)=>{s.r(Z),s.d(Z,{ReviewerModule:()=>ne});var h=s(9808),_=s(5115),g=s(1083),x=s(574),C=s(4327),S=s(3583),q=s(2983),y=s.n(q),e=s(5e3),m=s(8966),T=s(7423);let F=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-lead-view"]],decls:10,vars:1,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-button","",1,"dialog1","mr-2",3,"mat-dialog-close"],["mat-button","","mat-dialog-close","",1,"dialog1"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Delete Reviewer's Details"),e.qZA(),e.TgZ(2,"mat-dialog-content",1),e.TgZ(3,"h3"),e._uU(4,"Do you want to delete this Record?"),e.qZA(),e.qZA(),e.TgZ(5,"mat-dialog-actions",2),e.TgZ(6,"button",3),e._uU(7,"Yes"),e.qZA(),e.TgZ(8,"button",4),e._uU(9,"Cancel"),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("mat-dialog-close",!0))},directives:[m.uh,m.xY,m.H8,T.lW,m.ZT],styles:["mat-dialog-content[_ngcontent-%COMP%]{width:600px}[_nghost-%COMP%]  .dialog1{background-color:#d4d6d6;border-radius:5px;outline:none}"]}),i})();var u=s(520),f=(s(2340),s(9646));const d=[{sno:1,name:"Rahul",email:"rahul@gmail.com",rating:5,firstRating:"2023-04-24",status:"Active"},{sno:2,name:"Rohan",email:"rohan@gmail.com",rating:5,firstRating:"2023-02-21",status:"Active"},{sno:3,name:"Mukul",email:"mukul@gmail.com",rating:5,firstRating:"2023-01-15",status:"Inactive"},{sno:4,name:"Mohit",email:"mohit@gmail.com",rating:5,firstRating:"2023-04-09",status:"Active"},{sno:5,name:"Rohit",email:"rohit@gmail.com",rating:5,firstRating:"2023-04-14",status:"Inactive"}];let b=(()=>{class i{constructor(t){this.http=t}getReviewerList(){const t=localStorage.getItem("token")||"";return(new u.WM).set("x-access-token",t),(0,f.of)(d)}getReviewerDetails(t){const o=localStorage.getItem("token")||"";(new u.WM).set("x-access-token",o),console.log(d);let c=d.filter(p=>p.sno==t);return(0,f.of)(c)}submitReviewerDetail(t){const o=localStorage.getItem("token")||"";(new u.WM).set("x-access-token",o),t.sno=d.length+1;let c=new Date;return t.firstRating=c.toISOString().split("T")[0],t.rating="4",d.push(t),(0,f.of)(d)}submitEditedDetails(t,o){const n=localStorage.getItem("token")||"";return(new u.WM).set("x-access-token",n),d.map(p=>{p.sno==o&&(p.name=t.name,p.email=t.email,p.status=t.status)}),(0,f.of)(d)}deleteReviewerDetails(t){const o=localStorage.getItem("token")||"";(new u.WM).set("x-access-token",o);let c=d.splice(d.findIndex(p=>p.name==t),1);return(0,f.of)(c)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(u.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var D=s(2888),w=s(4851),E=s(9783),N=s(1424),U=s(845),A=s(6526),l=s(3075),M=s(4119);const J=["dt"];function O(i,r){1&i&&(e.TgZ(0,"div",15),e.TgZ(1,"span",16),e._uU(2,"Status Picker"),e.qZA(),e.qZA())}function P(i,r){if(1&i&&(e.TgZ(0,"div",19),e.TgZ(1,"span",20),e._uU(2),e.qZA(),e.qZA()),2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t)}}function k(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"p-multiSelect",17),e.NdJ("onChange",function(n){return[e.CHM(t).filterCallback(n.value)]}),e.YNc(1,P,3,1,"ng-template",18),e.qZA()}if(2&i){const t=r.$implicit,o=e.oxw(2);e.Q6J("ngModel",t)("options",o.statusList)}}const R=function(){return["/reviewer/reviewerform"]};function I(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",7),e.TgZ(1,"div"),e._UZ(2,"input",8,9),e.TgZ(4,"button",10),e.NdJ("click",function(){e.CHM(t);const n=e.MAs(3);return e.oxw().applyFilterGlobal(n.value,"contains")}),e._uU(5,"Search"),e.qZA(),e.qZA(),e.TgZ(6,"div",7),e.TgZ(7,"div",11),e.TgZ(8,"p-columnFilter",12),e.YNc(9,O,3,0,"ng-template",3),e.YNc(10,k,2,2,"ng-template",13),e.qZA(),e.qZA(),e.TgZ(11,"button",14),e._uU(12,"Add"),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(8),e.Q6J("showMatchModes",!1)("showOperator",!1)("showAddButton",!1),e.xp6(3),e.Q6J("routerLink",e.DdM(5,R))("disabled",!t.accessPermission.add)}}function Y(i,r){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"th",21),e._uU(2,"Name"),e.qZA(),e.TgZ(3,"th",21),e._uU(4,"Email"),e.qZA(),e.TgZ(5,"th",21),e._uU(6,"Rating"),e.qZA(),e.TgZ(7,"th",21),e._uU(8,"First Rating"),e.qZA(),e.TgZ(9,"th",21),e._uU(10,"Status"),e.qZA(),e.TgZ(11,"th",21),e._uU(12,"Action"),e.qZA(),e.qZA())}const L=function(i){return{serialno:i}};function Q(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._UZ(12,"button",22),e.TgZ(13,"button",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().openDialog(a.name)}),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=r.$implicit,o=e.oxw();e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.rating),e.xp6(2),e.Oqu(t.firstRating),e.xp6(2),e.Oqu(t.status),e.xp6(2),e.Q6J("routerLink",e.DdM(9,R))("queryParams",e.VKq(10,L,t.sno))("disabled",!o.accessPermission.edit),e.xp6(1),e.Q6J("disabled",!o.accessPermission.delete)}}function j(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",24),e.NdJ("click",function(){return e.CHM(t),e.oxw(),e.MAs(4).exportCSV()}),e.qZA(),e.TgZ(2,"button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportExcel()}),e.qZA(),e.TgZ(3,"button",26),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportPdf()}),e.qZA(),e.qZA()}}function B(i,r){1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td",27),e._uU(2,"No records to show"),e.qZA(),e.qZA())}const H=function(){return["name"]};let V=(()=>{class i{constructor(t,o,n){this.reviewerService=t,this.dialog=o,this.permissionService=n,this.sidebarSpacing="contracted",this.statusList=["Active","Inactive"],this.permissionService.getModulePermission().subscribe(a=>{this.accessPermission=a[0].ReviewerList,console.log(this.accessPermission)}),this.getReviewerData()}ngOnInit(){this.cols=[{headers:"Name",field:"name"},{headers:"Email",field:"email"},{headers:"Rating",field:"rating"},{headers:"First Rating",field:"firstRating"},{headers:"status",field:"status"}],this.exportColumns=this.cols.map(t=>({title:t.headers,dataKey:t.field}))}getReviewerData(){this.reviewerService.getReviewerList().subscribe(t=>{this.reviewerData=t})}openDialog(t){this.dialog.open(F).afterClosed().subscribe(n=>{1==n&&this.deleteReviewDetails(t)})}deleteReviewDetails(t){this.reviewerService.deleteReviewerDetails(t).subscribe(o=>{o&&this.getReviewerData()})}exportExcel(){const o={Sheets:{data:x.utils.json_to_sheet(this.reviewerData)},SheetNames:["data"]},n=x.write(o,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(n,"reviewers")}saveAsExcelFile(t,o){const c=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});C.saveAs(c,o+"_export_"+(new Date).getTime()+".xlsx")}exportPdf(){this.reviewerDetails=this.reviewerData,console.log(this.reviewerDetails);const t=new S.jsPDF("l","pt");y()(t,{columns:this.exportColumns,body:this.reviewerDetails}),t.save("reviewers.pdf")}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}applyFilterGlobal(t,o){this.dt.filterGlobal(t,o)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b),e.Y36(m.uw),e.Y36(D.y))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-reviewer"]],viewQuery:function(t,o){if(1&t&&e.Gf(J,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dt=n.first)}},decls:10,vars:8,consts:[["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["pTemplate","emptymessage"],[1,"d-flex","justify-content-between"],["pInputText","","type","text","placeholder","Search by Name",1,"mr-2"],["search",""],["pButton","",1,"p-button-success",3,"click"],[1,"captionFilter"],["field","status","matchMode","in","display","menu",1,"filterButton",3,"showMatchModes","showOperator","showAddButton"],["pTemplate","filter"],["pButton","",3,"routerLink","disabled"],[1,"px-3","pt-3","pb-0"],[1,"font-bold"],["placeholder","Any",3,"ngModel","options","onChange"],["pTemplate","item"],[1,"p-multiselect-representative-option"],[1,"ml-1"],[1,"text-center"],["pButton","","icon","pi pi-user-edit","pTooltip","Edit Reviewer","tooltipPosition","bottom",1,"p-button-secondary","mr-2",3,"routerLink","queryParams","disabled"],["pButton","","icon","pi pi-trash","pTooltip","Delete Reviewer","tooltipPosition","bottom",1,"p-button-danger",3,"disabled","click"],["pButton","","icon","pi pi-file","pTooltip","CSV","tooltipPosition","bottom",1,"mr-2",3,"click"],["pButton","","icon","pi pi-file-excel","pTooltip","excel","tooltipPosition","bottom",1,"mr-2",3,"click"],["pButton","","icon","pi pi-file-pdf","pTooltip","pdf","tooltipPosition","bottom",3,"click"],["colspan","12",1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"h4"),e._uU(2,"Reviewer List"),e.qZA(),e.qZA(),e.TgZ(3,"p-table",0,1),e.YNc(5,I,13,6,"ng-template",2),e.YNc(6,Y,13,0,"ng-template",3),e.YNc(7,Q,14,12,"ng-template",4),e.YNc(8,j,4,0,"ng-template",5),e.YNc(9,B,3,0,"ng-template",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("columns",o.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",o.reviewerData)("responsive",!0)("globalFilterFields",e.DdM(7,H)))},directives:[w.iA,E.jx,N.o,U.Hq,w.xl,A.NU,l.JJ,l.On,g.rH,M.u],styles:['[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button:before{content:"Filter";margin-right:10px}[_nghost-%COMP%]  .captionFilter p-columnFilter .p-column-filter>button{width:100px;height:40px;border-radius:3px;font-size:large;margin:1px 5px 1px 1px;padding:15px 20px;border:1px solid #ced4da}']}),i})();var $=s(4036);function G(i,r){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",19),e._uU(2,"Name is required"),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.reviewerForm.controls.name.errors.required)}}function z(i,r){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",19),e._uU(2,"Email is required"),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.reviewerForm.controls.email.errors.required)}}function W(i,r){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",19),e._uU(2,"Status is required"),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("hidden",!t.reviewerForm.controls.reviewerStatus.errors.required)}}const X=function(){return["/reviewer/reviewerlist"]},K=[{path:"reviewerlist",component:V},{path:"reviewerform",component:(()=>{class i{constructor(t,o,n,a){this.reviewerService=t,this.fb=o,this.route=n,this.activatedRoute=a,this.sidebarSpacing="contracted",this.statusList=["Active","Inactive"],this.reviewerForm=this.fb.group({name:["",[l.kI.required]],email:["",[l.kI.required]],reviewerStatus:["",[l.kI.required]]}),this.activatedRoute.queryParamMap.subscribe(c=>{this.id=parseInt(c.get("serialno")),this.id&&null!=this.id?(this.title="Edit",this.getReviewerDetail()):this.title="Add"})}ngOnInit(){}getReviewerDetail(){this.reviewerService.getReviewerDetails(this.id).subscribe(t=>{this.reviewerForm.patchValue({name:t[0].name,email:t[0].email,reviewerStatus:t[0].status})})}submit(){let t={name:this.reviewerForm.controls.name.value,email:this.reviewerForm.controls.email.value,status:this.reviewerForm.controls.reviewerStatus.value};this.id?this.submitEditedDetails(t):this.submitDetails(t)}submitEditedDetails(t){let o=Object.assign({},t);this.reviewerService.submitEditedDetails(o,this.id).subscribe(n=>{n&&this.route.navigate(["/reviewer/reviewerlist"])})}submitDetails(t){let o=Object.assign({},t);this.reviewerService.submitReviewerDetail(o).subscribe(n=>{n&&this.route.navigate(["/reviewer/reviewerlist"])})}onToggleSidebar(t){this.sidebarSpacing="open"===t?"contracted":"expanded"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b),e.Y36(l.qu),e.Y36(g.F0),e.Y36(g.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-edit-reviewer"]],decls:31,vars:9,consts:[[1,"d-flex","justify-content-center"],[1,"card",2,"width","1000px","height","500px"],[1,"p-5"],[1,"card-body","h-100"],[1,"mt-3","mb-5"],[3,"formGroup"],[1,"row","mb-4"],[1,"form-group","col-6"],["for","reviewerName",1,"text-center","starlabel","mb-4"],["type","text","id","reviewerName","formControlName","name",1,"form-control"],[4,"ngIf"],["for","reviewerEmail",1,"text-center","starlabel","mb-4"],["type","text","id","reviewerEmail","formControlName","email",1,"form-control"],["for","reference",1,"text-center","starlabel","mb-4"],["styleClass","statusDropdown","placeholder","Select status","formControlName","reviewerStatus",3,"options"],[1,"row"],[1,"d-flex","justify-content-end","col-12"],["type","submit",1,"btn","btn-info","mr-3",3,"disabled","click"],[1,"btn","btn-info",3,"routerLink"],[2,"font-size","smaller","color","rgb(253, 122, 122)","font-style","italic",3,"hidden"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h4"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"form",5),e.TgZ(8,"div",6),e.TgZ(9,"div",7),e.TgZ(10,"label",8),e._uU(11,"Name"),e.qZA(),e._UZ(12,"input",9),e.YNc(13,G,3,1,"div",10),e.qZA(),e.TgZ(14,"div",7),e.TgZ(15,"label",11),e._uU(16,"Email"),e.qZA(),e._UZ(17,"input",12),e.YNc(18,z,3,1,"div",10),e.qZA(),e.qZA(),e.TgZ(19,"div",6),e.TgZ(20,"div",7),e.TgZ(21,"label",13),e._uU(22,"Status"),e.qZA(),e._UZ(23,"p-dropdown",14),e.YNc(24,W,3,1,"div",10),e.qZA(),e.qZA(),e.TgZ(25,"div",15),e.TgZ(26,"div",16),e.TgZ(27,"button",17),e.NdJ("click",function(){return o.submit()}),e._uU(28,"Submit"),e.qZA(),e.TgZ(29,"button",18),e._uU(30,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.hij("",o.title," Reviewer"),e.xp6(1),e.Q6J("formGroup",o.reviewerForm),e.xp6(6),e.Q6J("ngIf",!o.reviewerForm.controls.name.valid&&o.reviewerForm.controls.name.touched),e.xp6(5),e.Q6J("ngIf",!o.reviewerForm.controls.email.valid&&o.reviewerForm.controls.email.touched),e.xp6(5),e.Q6J("options",o.statusList),e.xp6(1),e.Q6J("ngIf",!o.reviewerForm.controls.reviewerStatus.valid&&o.reviewerForm.controls.reviewerStatus.touched),e.xp6(3),e.Q6J("disabled",!o.reviewerForm.valid),e.xp6(2),e.Q6J("routerLink",e.DdM(8,X)))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,h.O5,$.Lt,g.rH],styles:['[_nghost-%COMP%]  .statusDropdown{width:100%}[_nghost-%COMP%]  label.starlabel:after{content:"*";color:#e41c1c}']}),i})()}];let ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.ez,g.Bz.forChild(K)]]}),i})();var te=s(9224),ie=s(9114),oe=s(3407);let ne=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.ez,_.m,ee,A.q4,te.QW,w.U$,oe.A,ie.D,m.Is,T.ot]]}),i})()}}]);