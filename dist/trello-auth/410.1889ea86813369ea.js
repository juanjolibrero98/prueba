"use strict";(self.webpackChunktrello_auth=self.webpackChunktrello_auth||[]).push([[410],{1410:(U,d,i)=>{i.r(d),i.d(d,{ProfileModule:()=>A});var u=i(6895),c=i(3868),p=i(6239),s=i(801),m=i(7855),e=i(1571);let f=(()=>{class r{constructor(t,n){this.dialogRef=t,this.faClose=s.YIN,this.hola="",this.avatar=n.avatar}close(){this.dialogRef.close()}pruebaClick(){this.hola="Pepe"}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.zj),e.Y36(m.Kt))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-avatar-dialog"]],decls:11,vars:3,consts:[[1,"p-6","bg-gray-100","relative","rounded","shadow"],["type","button",1,"absolute","top-3","right-3","focus:outline-none","p-2",3,"click"],[3,"icon"],[1,"flex","w-full","gap-4"],[1,"flex","space-x-2","mb-5","w-6/6","font-semibold"],[1,"flex","space-x-2","mb-5","w-6/6"],["alt","",1,"w-100","h-100","rounded",3,"src"],[1,"btn-prb",2,"display","none",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.close()}),e._UZ(2,"fa-icon",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4),e._uU(5," Avatar Profile "),e.qZA()(),e.TgZ(6,"div",3)(7,"div",5),e._UZ(8,"img",6),e.qZA()(),e.TgZ(9,"button",7),e.NdJ("click",function(){return n.pruebaClick()}),e._uU(10),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("icon",n.faClose),e.xp6(6),e.Q6J("src",n.avatar,e.LSH),e.xp6(2),e.hij("Prueba: ",n.hola,""))},dependencies:[c.BN],encapsulation:2}),r})();var a=i(433),v=i(2898),g=i(4961),_=i(9200);function h(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"span",19),e._UZ(4,"fa-icon",20),e.qZA(),e.TgZ(5,"span",21),e._uU(6,"About"),e.qZA()(),e.TgZ(7,"div",22)(8,"div",23)(9,"div",24)(10,"div",25),e._uU(11,"Name"),e.qZA(),e.TgZ(12,"div",26),e._uU(13),e.qZA()(),e.TgZ(14,"div",24)(15,"div",25),e._uU(16,"Email."),e.qZA(),e.TgZ(17,"div",26)(18,"a",27),e._uU(19),e.qZA()()(),e.TgZ(20,"div",24)(21,"div",25),e._uU(22,"Avatar"),e.qZA(),e.TgZ(23,"div",26)(24,"img",28),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.openDialog(null==o.meProfile?null:o.meProfile.avatar))}),e.qZA()()(),e.TgZ(25,"div",24)(26,"div",25),e._uU(27,"Last update"),e.qZA(),e.TgZ(28,"div",26),e._uU(29),e.ALo(30,"date"),e.qZA()()()(),e.TgZ(31,"button",29),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.updateInfoUser=!o.updateInfoUser)}),e._uU(32," Update Information "),e.qZA()(),e._UZ(33,"div",13),e.qZA()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("icon",t.faUser),e.xp6(9),e.Oqu(null==t.meProfile?null:t.meProfile.name),e.xp6(6),e.Oqu(null==t.meProfile?null:t.meProfile.email),e.xp6(5),e.Q6J("src",null==t.meProfile?null:t.meProfile.avatar,e.LSH),e.xp6(5),e.Oqu(e.xi3(30,5,null==t.meProfile?null:t.meProfile.updatedAt,"medium"))}}function x(r,l){if(1&r&&(e.TgZ(0,"em",65),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij("Avatar type: ",t.typeAvatar,"")}}function Z(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div",30)(3,"fa-icon",31),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.updateInfoUser=!o.updateInfoUser)}),e.qZA()(),e.TgZ(4,"div",18)(5,"span",19),e._UZ(6,"fa-icon",20),e.qZA(),e.TgZ(7,"span",21),e._uU(8,"Update profile"),e.qZA()(),e.TgZ(9,"form",32),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.updateProfile())}),e.TgZ(10,"div")(11,"b"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"span",33),e._uU(14,"*"),e.qZA(),e.TgZ(15,"div",34),e._UZ(16,"input",35),e.qZA()(),e.TgZ(17,"div")(18,"b"),e._uU(19,"Email"),e.qZA(),e.TgZ(20,"span",33),e._uU(21,"*"),e.qZA(),e.TgZ(22,"div",34),e._UZ(23,"input",36),e.TgZ(24,"div",37),e._UZ(25,"fa-icon",38),e.qZA()()(),e.TgZ(26,"div")(27,"div",39)(28,"b"),e._uU(29,"Avatar"),e.qZA(),e.TgZ(30,"span",33),e._uU(31,"*"),e.qZA()(),e.TgZ(32,"div",39)(33,"em",40),e._uU(34,"Select a type of avatar"),e.qZA()(),e.TgZ(35,"div",41)(36,"div",42),e._UZ(37,"input",43),e.TgZ(38,"label",44),e.NdJ("mouseenter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOver("game"))})("mouseleave",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOut())}),e._UZ(39,"img",45)(40,"fa-icon",46),e.qZA()(),e.TgZ(41,"div",42),e._UZ(42,"input",47),e.TgZ(43,"label",48),e.NdJ("mouseenter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOver("ai"))})("mouseleave",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOut())}),e._UZ(44,"img",49)(45,"fa-icon",46),e.qZA()(),e.TgZ(46,"div",42),e._UZ(47,"input",50),e.TgZ(48,"label",51),e.NdJ("mouseenter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOver("face"))})("mouseleave",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOut())}),e._UZ(49,"img",52)(50,"fa-icon",46),e.qZA()(),e.TgZ(51,"div",42),e._UZ(52,"input",53),e.TgZ(53,"label",54),e.NdJ("mouseenter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOver("movie"))})("mouseleave",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOut())}),e._UZ(54,"img",55)(55,"fa-icon",46),e.qZA()(),e.TgZ(56,"div",42),e._UZ(57,"input",56),e.TgZ(58,"label",57),e.NdJ("mouseenter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOver("crm"))})("mouseleave",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOut())}),e._UZ(59,"img",58)(60,"fa-icon",46),e.qZA()(),e.TgZ(61,"div",42),e._UZ(62,"input",59),e.TgZ(63,"label",60),e.NdJ("mouseenter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOver("book"))})("mouseleave",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.mouseOut())}),e._UZ(64,"img",61)(65,"fa-icon",46),e.qZA()()(),e.TgZ(66,"div",62),e.YNc(67,x,2,1,"em",63),e.qZA()(),e.TgZ(68,"div")(69,"app-btn",64),e._uU(70," Update "),e.qZA()()()(),e._UZ(71,"div",13),e.qZA()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("icon",t.faClose),e.xp6(3),e.Q6J("icon",t.faUserEdit),e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(7),e.Q6J("placeholder",null==t.meProfile?null:t.meProfile.name),e.xp6(7),e.Q6J("placeholder",null==t.meProfile?null:t.meProfile.email),e.xp6(2),e.Q6J("icon",t.faEnvelope),e.xp6(15),e.Q6J("icon",t.faCheck),e.xp6(5),e.Q6J("icon",t.faCheck),e.xp6(5),e.Q6J("icon",t.faCheck),e.xp6(5),e.Q6J("icon",t.faCheck),e.xp6(5),e.Q6J("icon",t.faCheck),e.xp6(5),e.Q6J("icon",t.faCheck),e.xp6(2),e.Q6J("ngIf",t.avatarTypeDiv)}}const b=[{path:"",component:(()=>{class r{constructor(t,n,o,y){this.meService=t,this.usersService=n,this.dialog=o,this.formBuilder=y,this.meProfile=null,this.userId="",this.updateInfoUser=!1,this.typeAvatar="",this.avatarTypeDiv=!1,this.faUser=s.ILF,this.faUserEdit=s.yXf,this.faClose=s.YIN,this.faCheck=s.LEp,this.faEnvelope=s.FU$,this.form=this.formBuilder.nonNullable.group({name:["",[a.kI.required]],email:["",[a.kI.required]],avatar:["",[a.kI.required]]})}ngOnInit(){this.meService.getAllMeProfile().subscribe(t=>{this.meProfile=t,this.form.controls.name.setValue(t.name),this.form.controls.email.setValue(t.email),this.userId=t.id})}openDialog(t){this.dialog.open(f,{minWidth:"300px",maxWidth:"50%",data:{avatar:t}}).closed.subscribe(o=>{o&&console.log(o)})}updateProfile(){if(this.form.valid){this.form.controls.avatar.setValue(`https://api.lorem.space/image/${this.form.controls.avatar.getRawValue()}?w=480&h=480&r=4454`);const t=this.form.getRawValue();this.usersService.updateInfoUser(this.userId,t.email,t.name,t.avatar).subscribe(n=>{location.reload(),this.updateInfoUser=!1})}else this.form.markAllAsTouched()}mouseOver(t){this.typeAvatar=t,this.avatarTypeDiv=!0}mouseOut(){this.typeAvatar="",this.avatarTypeDiv=!1}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.w),e.Y36(g.f),e.Y36(m.Vq),e.Y36(a.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:30,vars:7,consts:[[1,"container","mx-auto","my-5","p-5"],[1,"md:flex","no-wrap","md:-mx-2"],[1,"w-full","md:w-3/12","md:mx-2"],[1,"bg-white","p-3","border-t-4","border-green-400"],[1,"image","overflow-hidden"],["src","https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg","alt","",1,"h-auto","w-full","mx-auto"],[1,"text-gray-900","font-bold","text-xl","leading-8","my-1"],[1,"text-gray-600","font-lg","text-semibold","leading-6"],[1,"text-sm","text-gray-500","hover:text-gray-600","leading-6"],[1,"bg-gray-100","text-gray-600","hover:text-gray-700","hover:shadow","py-2","px-3","mt-3","divide-y","rounded","shadow-sm"],[1,"flex","items-center","py-3"],[1,"ml-auto"],[1,"bg-green-500","py-1","px-2","rounded","text-white","text-sm"],[1,"my-4"],["class","w-full md:w-9/12 mx-2 h-64",4,"ngIf"],["href","https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css","rel","stylesheet"],[1,"w-full","md:w-9/12","mx-2","h-64"],[1,"bg-white","p-3","shadow-sm","rounded-sm"],[1,"flex","items-center","space-x-2","font-semibold","text-gray-900","leading-8"],["clas","text-green-500"],[3,"icon"],[1,"tracking-wide"],[1,"text-gray-700"],[1,"grid","md:grid-cols-2","text-sm"],[1,"grid","grid-cols-2"],[1,"px-4","py-2","font-semibold"],[1,"px-4","py-2"],[1,"text-blue-800"],["alt","",1,"w-10","h-10","rounded","cursor-pointer",3,"src","click"],[1,"block","w-full","text-blue-800","text-sm","font-semibold","rounded-lg","hover:bg-gray-100","focus:outline-none","focus:shadow-outline","focus:bg-gray-100","hover:shadow-xs","p-3","my-4",3,"click"],[1,"flex","justify-end","px-6"],[1,"cursor-pointer",3,"icon","click"],["novalidate","",1,"space-y-4",3,"formGroup","ngSubmit"],[1,"text-red-600"],[1,"relative"],["formControlName","name","type","text",1,"w-full","rounded","bg-gray-100","border-gray-300","border-2",3,"placeholder"],["formControlName","email","type","email",1,"w-full","pl-10","pr-4","py-2","rounded","bg-gray-100","border-gray-300","border-2",3,"placeholder"],[1,"absolute","inset-y-0","left-0","pl-3","flex","items-center","pointer-events-none"],[1,"text-gray-400",3,"icon"],[1,"w-full"],[1,"text-sm"],[1,"flex","flex-wrap"],[1,"flex","items-center","mr-4"],["id","game-radio","type","radio","value","game","name","avatar","formControlName","avatar",1,"hidden","peer"],["for","game-radio",1,"inline-flex","items-center","justify-center","w-8","h-8","text-transparent","rounded","cursor-pointer","hover:bg-transparent","peer-checked:text-white",3,"mouseenter","mouseleave"],["src","https://api.lorem.space/image/game?w=480&h=480&r=4454"],[1,"absolute",3,"icon"],["id","ai-radio","type","radio","value","ai","name","avatar","formControlName","avatar",1,"hidden","peer"],["for","ai-radio",1,"inline-flex","items-center","justify-center","w-8","h-8","text-transparent","rounded","cursor-pointer","hover:bg-transparent","peer-checked:text-white",3,"mouseenter","mouseleave"],["src","https://api.lorem.space/image/ai?w=480&h=480&r=4454"],["id","face-radio","type","radio","value","face","name","avatar","formControlName","avatar",1,"hidden","peer"],["for","face-radio",1,"inline-flex","items-center","justify-center","w-8","h-8","text-transparent","rounded","cursor-pointer","hover:bg-transparent","peer-checked:text-white",3,"mouseenter","mouseleave"],["src","https://api.lorem.space/image/face?w=480&h=480&r=4454"],["id","movie-radio","type","radio","value","movie","name","avatar","formControlName","avatar",1,"hidden","peer"],["for","movie-radio",1,"inline-flex","items-center","justify-center","w-8","h-8","text-transparent","rounded","cursor-pointer","hover:bg-transparent","peer-checked:text-white",3,"mouseenter","mouseleave"],["src","https://api.lorem.space/image/movie?w=480&h=480&r=4454"],["id","crm-radio","type","radio","value","crm","name","avatar","formControlName","avatar",1,"hidden","peer"],["for","crm-radio",1,"inline-flex","items-center","justify-center","w-8","h-8","text-transparent","rounded","cursor-pointer","hover:bg-transparent","peer-checked:text-white",3,"mouseenter","mouseleave"],["src","https://api.lorem.space/image/crm?w=480&h=480&r=4454"],["id","book-radio","type","radio","value","book","name","avatar","formControlName","avatar",1,"hidden","peer"],["for","book-radio",1,"inline-flex","items-center","justify-center","w-8","h-8","text-transparent","rounded","cursor-pointer","hover:bg-transparent","peer-checked:text-white",3,"mouseenter","mouseleave"],["src","https://api.lorem.space/image/book?w=480&h=480&r=4454"],[1,"w-full","pb-4"],["class","text-sm absolute",4,"ngIf"],["typeBtn","submit","color","success"],[1,"text-sm","absolute"]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"h1",6),e._uU(8),e.qZA(),e.TgZ(9,"h3",7),e._uU(10," Lorem Company Inc. "),e.qZA(),e.TgZ(11,"p",8),e._uU(12," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt "),e.qZA(),e.TgZ(13,"ul",9)(14,"li",10)(15,"span"),e._uU(16,"Status"),e.qZA(),e.TgZ(17,"span",11)(18,"span",12),e._uU(19,"Active"),e.qZA()()(),e.TgZ(20,"li",10)(21,"span"),e._uU(22,"Member since"),e.qZA(),e.TgZ(23,"span",11),e._uU(24),e.ALo(25,"date"),e.qZA()()()(),e._UZ(26,"div",13),e.qZA(),e.YNc(27,h,34,8,"div",14),e.YNc(28,Z,72,13,"div",14),e.qZA()(),e._UZ(29,"link",15),e.qZA()),2&t&&(e.xp6(8),e.hij(" ",null==n.meProfile?null:n.meProfile.name," "),e.xp6(16),e.Oqu(e.xi3(25,4,null==n.meProfile?null:n.meProfile.creationAt,"medium")),e.xp6(3),e.Q6J("ngIf",!n.updateInfoUser),e.xp6(1),e.Q6J("ngIf",n.updateInfoUser))},dependencies:[u.O5,c.BN,_.r,a._Y,a.Fj,a._,a.JJ,a.JL,a.sg,a.u,u.uU],styles:["[_ngcontent-%COMP%]:root{--main-color: #4a76a8}.bg-main-color[_ngcontent-%COMP%]{background-color:var(--main-color)}.text-main-color[_ngcontent-%COMP%]{color:var(--main-color)}.border-main-color[_ngcontent-%COMP%]{border-color:var(--main-color)}"]}),r})()}];let T=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(b),p.Bz]}),r})();var C=i(2271);let A=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.ez,T,c.uH,m.Su,C.m,a.UX]}),r})()}}]);