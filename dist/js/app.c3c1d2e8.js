(function(){"use strict";var e={6997:function(e,t,a){var n=a(9242),o=a(3396),r=a(4870),s=a.p+"img/arrow-right.be50d0df.svg";const i=["type","placeholder"];var c={__name:"inputComp",props:{inputType:{type:String,required:!0},placeholderText:{type:String}},setup(e,{expose:t}){const a=(0,r.iH)(null);return t({input:a}),(t,n)=>((0,o.wg)(),(0,o.iD)("input",{type:e.inputType,placeholder:e.placeholderText,id:"border-bottom-gray",ref_key:"input",ref:a},null,8,i))}},l=a(89);const d=(0,l.Z)(c,[["__scopeId","data-v-f1cb9160"]]);var p=d,u=a(65);function f(e){const t=/[a-zA-Z]/i.test(e.key);t||e.preventDefault()}const g={key:0,class:"flex center-flex-element"},m={class:"flex"};var v={__name:"pageOnStart",setup(e){const t=(0,u.oR)(),a=(0,r.iH)(null),i=(0,r.iH)(!0);function c(){t.commit("getVisitorName",a.value.input.value),i.value=!1,setTimeout((()=>{t.commit("portfolioPageShow")}),1100)}return(0,o.bv)((()=>{a.value.input.focus()})),(e,t)=>((0,o.wg)(),(0,o.j4)(n.uT,{name:"fade"},{default:(0,o.w5)((()=>[i.value?((0,o.wg)(),(0,o.iD)("main",g,[(0,o._)("div",m,[(0,o.Wm)(p,{inputType:"text",placeholderText:"Enter Name, Please",style:{"font-size":"4vw"},ref_key:"nameInput",ref:a,onKeydown:[(0,n.D2)(c,["enter"]),(0,r.SU)(f)],maxlength:"13"},null,8,["onKeydown"]),(0,o._)("img",{src:s,alt:"next button",class:"border-bottom-gray",onClick:c})])])):(0,o.kq)("",!0)])),_:1}))}};const h=(0,l.Z)(v,[["__scopeId","data-v-4af19b97"]]);var b=h,w=a(7139),_=a.p+"img/burger-icon.a1e58ef4.svg",y=a.p+"img/close.edd2f0d2.svg";const k=["href"];function x(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("a",{href:a.hrefProp,class:"block"},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],8,k)}var j={props:["hrefProp"]};const S=(0,l.Z)(j,[["render",x],["__scopeId","data-v-60da964f"]]);var C=S;const D=e=>((0,o.dD)("data-v-18f2a0f2"),e=e(),(0,o.Cn)(),e),P={class:"flex space-between align-center fixed"},T={class:"my-name-wrapper"},I=D((()=>(0,o._)("h2",{class:"nameHeader font-36"},"David",-1))),N={class:"menu-wrapper flex align-center space-between"},W={class:"burger-icon-wrapper"},O={class:"close-img-wrapper flex justify-end"},A={class:"responsive-nav-items-wrapper absolute text-align-center"},$={key:0,class:"sent-message absolute"},z=D((()=>(0,o._)("p",null,"Message Sent Successfully!",-1))),M=[z],U={data(){return{colorModes:["black","white"],navItems:[{name:"Home",href:"#"},{name:"About",href:"#about"},{name:"What i do",href:"#skills"},{name:"My Projects",href:"#projects"},{name:"Get in touch",href:"#contact"}],navActive:!1}},methods:{changeColorMode(e){const t=this.$refs.colorPaletts;for(let n of t)n.classList.remove("mode-active");e.target.classList.add("mode-active");const a=e.target.style.backgroundColor;document.querySelector("body").style.transition="1s ease-in-out",this.colorDetect(a)},colorDetect(e){"white"===e?this.defaultColorsChange("#ffffff","#171717"):this.defaultColorsChange("#171717","#ffffff")},defaultColorsChange(e,t){const a=document.querySelector(":root");a.style.setProperty("--page-background",e),a.style.setProperty("--text-starter-color",t)},openNav(){this.navActive=!0},closeNav(){this.navActive=!1}}};var q=Object.assign(U,{__name:"navMenu",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("nav",P,[(0,o._)("div",T,[(0,o.Wm)(C,{hrefProp:"#"},{default:(0,o.w5)((()=>[I])),_:1})]),(0,o._)("div",N,[(0,o._)("div",W,[(0,o._)("img",{src:_,alt:"burger button",class:"burger-icon pointer block",onClick:t[0]||(t[0]=(...t)=>e.openNav&&e.openNav(...t))})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.colorModes,((a,n)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,w.C_)(["color-mode-btn pointer",[0===n?"mode-active":""]]),key:a,onClick:t[1]||(t[1]=(...t)=>e.changeColorMode&&e.changeColorMode(...t)),ref_for:!0,ref:"colorPaletts",style:(0,w.j5)({backgroundColor:a})},null,6)))),128))]),((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[(0,o.Wm)(n.uT,{name:"move-right"},{default:(0,o.w5)((()=>[e.navActive?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"responsive-nav fixed",onClick:t[3]||(t[3]=(0,n.iM)(((...t)=>e.closeNav&&e.closeNav(...t)),["self"]))},[(0,o._)("div",O,[(0,o._)("img",{src:y,alt:"close button",class:"close-btn pointer",onClick:t[2]||(t[2]=(...t)=>e.closeNav&&e.closeNav(...t))})]),(0,o._)("div",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.navItems,(t=>((0,o.wg)(),(0,o.j4)(C,{onClick:e.closeNav,key:t,href:t.href,class:"weight-700",id:"nav-item"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,w.zw)(t.name),1)])),_:2},1032,["onClick","href"])))),128))])])):(0,o.kq)("",!0)])),_:1})])),(0,o.Wm)(n.uT,{name:"fade-top"},{default:(0,o.w5)((()=>[e.$store.state.messageSent?((0,o.wg)(),(0,o.iD)("div",$,M)):(0,o.kq)("",!0)])),_:1})]))}});const H=(0,l.Z)(q,[["__scopeId","data-v-18f2a0f2"]]);var R=H,Z=a.p+"img/me.e7f806b6.png";function L(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("button",{class:"pointer weight-500",style:(0,w.j5)({backgroundColor:a.backroundProp,border:a.borderProp,width:a.widthProp})},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],4)}var E={props:["backroundProp","borderProp","widthProp"]};const F=(0,l.Z)(E,[["render",L],["__scopeId","data-v-9b3d740c"]]);var K=F;function V(e,t,a){(0,o.bv)((()=>{const n=document.querySelectorAll(e),o=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add(t)}))}),{threshold:a});for(let e of n)o.observe(e)}))}const Y=e=>((0,o.dD)("data-v-2ab6056e"),e=e(),(0,o.Cn)(),e),J={class:"flex space-between wrap"},G={class:"greeting-wrapper flex align-center"},B={class:"font-48 line-height-62 inline-block",ref:"header1"},X={class:"capitalize"},Q={class:"font-48 line-height-62",ref:"header2"},ee={class:"weight-500 font-18",ref:"header3"},te={class:"buttons-wrapper flex space-between"},ae={href:"#about"},ne=Y((()=>(0,o._)("div",{class:"image-wrapper opacity-0 border-radius-50 flex center-flex-element relative"},[(0,o._)("img",{src:Z,alt:"my photo",class:"block border-radius-50"}),(0,o._)("div",{class:"black-overlay absolute border-radius-50"})],-1))),oe={mounted(){this.addTypingAnim()},methods:{addTypingAnim(){const e=this.$refs.header1.textContent.length,t=this.$refs.header2.textContent.length,a=this.$refs.header3.textContent.length;this.$refs.header1.style.animation=`typing 1s steps(${e}) forwards`,this.$refs.header2.style.animation=`typing 1s 1s steps(${t}) forwards`,this.$refs.header3.style.animation=`typing 1s 2s steps(${a}) forwards`}}};var re=Object.assign(oe,{__name:"portfolioHeader",setup(e){return V(".image-wrapper","image-anim"),V(".black-overlay","black-overlay-anim"),(e,t)=>((0,o.wg)(),(0,o.iD)("header",J,[(0,o._)("div",G,[(0,o._)("div",null,[(0,o._)("h1",B,[(0,o.Uk)(" Hi"),(0,o._)("span",X,(0,w.zw)(e.$store.state.visitorName?" "+e.$store.state.visitorName:" Stranger,"),1)],512),(0,o._)("h2",Q,"I am David Zhgenti",512),(0,o._)("p",ee,"Frontend Developer",512),(0,o._)("div",te,[(0,o.Wm)(K,{backroundProp:"var(--green-color)",class:"relative"},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{hrefProp:"@/assets/docs/david_zhgenti-cv.pdf",class:"absolute anchorInBtn",download:""}),(0,o.Uk)(" Download CV ")])),_:1}),(0,o._)("a",ae,[(0,o.Wm)(K,{borderProp:"1px solid #F2F2F2",class:"inline-block"},{default:(0,o.w5)((()=>[(0,o.Uk)("Learn More")])),_:1})])])])]),ne]))}});const se=(0,l.Z)(re,[["__scopeId","data-v-2ab6056e"]]);var ie=se;const ce=e=>((0,o.dD)("data-v-1049b6d1"),e=e(),(0,o.Cn)(),e),le={class:"contact-card text-align-center pointer opacity-0"},de=ce((()=>(0,o._)("div",{class:"big-circle border-radius-50 flex center-flex-element"},[(0,o._)("div",{class:"small-circle border-radius-50"})],-1))),pe={};var ue=Object.assign(pe,{__name:"contactCard",setup(e){return V(".contact-card","fade-right",1),(e,t)=>((0,o.wg)(),(0,o.iD)("div",le,[de,(0,o.WI)(e.$slots,"contactName"),(0,o.WI)(e.$slots,"contactInfo")]))}});const fe=(0,l.Z)(ue,[["__scopeId","data-v-1049b6d1"]]);var ge=fe;const me=e=>((0,o.dD)("data-v-0f54c6a5"),e=e(),(0,o.Cn)(),e),ve={class:"about-section",id:"about"},he=me((()=>(0,o._)("div",{class:"about-top-wrapper text-align-center"},[(0,o._)("h2",{class:"font-48 line-height-62"},"About"),(0,o._)("div",{class:"center-with-margin"},[(0,o._)("p",{class:"font-18"}," Hi! I'm David, a front-end developer based in Tbilisi. With 7 years of experience, I specialize in creating beautiful and user-friendly websites using HTML, CSS, JavaScript and Vue.js. Let's work together to bring your ideas to life! ")])],-1))),be={class:"about-bottom-wrapper flex space-evently wrap"},we={class:"font-18 line-height-23 weight-700"},_e={data(){return{contactInfos:[{name:"Email Address",link:"mailto:datozhgenti1998@gmail.com",info:"datozhgenti1998@gmail.com",linkTarget:""},{name:"Phone",link:"tel:+995591404227",info:"+995591404227",linkTarget:""},{name:"Github",link:"https://github.com/datozhgenti",info:"https://github.com/datozhgenti",linkTarget:"_"}]}}};var ye=Object.assign(_e,{__name:"aboutSection",setup(e){function t(e){const t=document.querySelectorAll(".infoAnchor");t[e].click()}return(e,a)=>((0,o.wg)(),(0,o.iD)("section",ve,[he,(0,o._)("div",be,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.contactInfos,((e,a)=>((0,o.wg)(),(0,o.j4)(ge,{key:e,onClick:e=>t(a)},{contactName:(0,o.w5)((()=>[(0,o._)("p",we,(0,w.zw)(e.name),1)])),contactInfo:(0,o.w5)((()=>[(0,o.Wm)(C,{class:"infoAnchor",target:e.linkTarget,hrefProp:e.link},{default:(0,o.w5)((()=>[(0,o.Uk)((0,w.zw)(e.info),1)])),_:2},1032,["target","hrefProp"])])),_:2},1032,["onClick"])))),128))])]))}});const ke=(0,l.Z)(ye,[["__scopeId","data-v-0f54c6a5"]]);var xe=ke;const je={class:"skill-card skill-and-project-card-sizes relative opacity-0"},Se=["src","alt"],Ce={class:"font-36"},De={props:["iconUrl","skillName"]};var Pe=Object.assign(De,{__name:"skillCard",setup(e){return V(".skill-card","fade-left",1),(t,a)=>((0,o.wg)(),(0,o.iD)("div",je,[(0,o._)("div",null,[(0,o._)("img",{src:e.iconUrl,width:"57",height:"57",alt:`${e.skillName} icon`,class:"block"},null,8,Se)]),(0,o._)("h3",Ce,(0,w.zw)(e.skillName),1)]))}});const Te=(0,l.Z)(Pe,[["__scopeId","data-v-a3a8850c"]]);var Ie=Te;const Ne=e=>((0,o.dD)("data-v-37e8e78a"),e=e(),(0,o.Cn)(),e),We={class:"skills-section",id:"skills"},Oe=Ne((()=>(0,o._)("h2",{class:"font-48 line-height-62 text-align-center margin-bottom-102"}," What i do ",-1))),Ae={class:"projects-and-skills-wrapper flex space-evently wrap"},$e={data(){return{skills:[{icon:a(8054),name:"HTML 5"},{icon:a(8186),name:"CSS 3"},{icon:a(5591),name:"JAVASCRIPT ES6"},{icon:a(1928),name:"VUE.JS 3"},{icon:a(2841),name:"JQUERY"},{icon:a(3569),name:"BOOTSTRAP 5"},{icon:a(5224),name:"SASS"}],indexesOfNoWrapSkill:[5]}}};var ze=Object.assign($e,{__name:"skillsSection",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("section",We,[Oe,(0,o._)("div",Ae,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.skills,((t,a)=>((0,o.wg)(),(0,o.j4)(Ie,{key:t,iconUrl:t.icon,skillName:t.name,style:(0,w.j5)({whiteSpace:e.indexesOfNoWrapSkill.includes(a)?"nowrap":"initial"})},null,8,["iconUrl","skillName","style"])))),128))])]))}});const Me=(0,l.Z)(ze,[["__scopeId","data-v-37e8e78a"]]);var Ue=Me;const qe={class:"project-card skill-and-project-card-sizes relative opacity-0"},He=["src"],Re={class:"overlay flex align-center justify-center absolute"},Ze={class:"overlay-content text-align-center"},Le={props:["projectImg","projectUrl","projectName"]};var Ee=Object.assign(Le,{__name:"projectCard",setup(e){return V(".project-card","fade-right",1),(t,a)=>((0,o.wg)(),(0,o.iD)("div",qe,[(0,o._)("img",{src:e.projectImg,alt:"restaraunt project",class:"w100 h100 object-fit-cover block"},null,8,He),(0,o._)("div",Re,[(0,o._)("div",Ze,[(0,o._)("h2",null,(0,w.zw)(e.projectName),1),(0,o.Wm)(C,{href:e.projectUrl,target:"_",class:"inline-block"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{class:"block weight-500",backroundProp:"var(--green-color)"},{default:(0,o.w5)((()=>[(0,o.Uk)("View")])),_:1})])),_:1},8,["href"])])])]))}});const Fe=(0,l.Z)(Ee,[["__scopeId","data-v-1ab5cfc2"]]);var Ke=Fe;const Ve=e=>((0,o.dD)("data-v-06220e18"),e=e(),(0,o.Cn)(),e),Ye={class:"projects-section",id:"projects"},Je=Ve((()=>(0,o._)("h2",{class:"font-48 line-height-62 text-align-center margin-bottom-102"}," My Projects ",-1))),Ge={class:"projects-and-skills-wrapper flex space-evently wrap"},Be={data(){return{projects:[{img:a(2172),url:"https://datozhgenti.github.io/finsweet_vue/",name:"Finsweet Website"},{img:a(9665),url:"https://datozhgenti.github.io/fitnesso/",name:"Fitnesso Website"},{img:a(360),url:"https://datozhgenti.github.io/Acme-Shop-Website/",name:"Retail Website"},{img:a(2001),url:"https://datozhgenti.github.io/restaraunt-website/",name:"Restaraunt Website"}]}}};var Xe=Object.assign(Be,{__name:"projectsSection",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("section",Ye,[Je,(0,o._)("div",Ge,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.projects,(e=>((0,o.wg)(),(0,o.j4)(Ke,{key:e,projectImg:e.img,projectUrl:e.url,projectName:e.name},null,8,["projectImg","projectUrl","projectName"])))),128))])]))}});const Qe=(0,l.Z)(Xe,[["__scopeId","data-v-06220e18"]]);var et=Qe,tt={send:function(e){return new Promise((function(t,a){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var n=JSON.stringify(e);tt.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",n,(function(e){t(e)}))}))},ajaxPost:function(e,t,a){var n=tt.createCORSRequest("POST",e);n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onload=function(){var e=n.responseText;null!=a&&a(e)},n.send(t)},ajax:function(e,t){var a=tt.createCORSRequest("GET",e);a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send()},createCORSRequest:function(e,t){var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,t,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,t):a=null,a}},at=tt;const nt=e=>((0,o.dD)("data-v-f491857a"),e=e(),(0,o.Cn)(),e),ot={class:"contact-section",id:"contact"},rt=nt((()=>(0,o._)("h2",{class:"font-48 line-height-62 text-align-center"},"Get in touch",-1))),st={class:"form-wrapper"},it={class:"form grid space-between center-with-margin"},ct={placeholder:"Message",ref:"contactTextarea",required:""},lt={class:"submit-btn-wrapper text-align-center"},dt={data(){return{inputs:[{type:"text",placeholder:"Name"},{type:"text",placeholder:"Last name"},{type:"email",placeholder:"Email"},{type:"number",placeholder:"Phone Number"}]}},methods:{sendEmail(){const e=this.$refs.contactInput,t=this.$refs.contactTextarea;at.send({SecureToken:"45ae150e-84b4-43e6-b2b8-1cfb51aac945",To:"datozhgenti1998@gmail.com",From:"datozhgenti1998@gmail.com",Subject:`from ${e[0].input.value} ${e[1].input.value}`,Body:`<b>Email:</b> ${e[2].input.value} <br> <b>Phone Number:</b> ${e[3].input.value} <br> <b>message:</b> ${t.value} `}).then((()=>{this.$store.commit("messageSentAlertDisplay"),t.value="",e.forEach((e=>{e.input.value=""}))}))},inputValidation(e,t){0!==e&&1!==e||f(t)}}};var pt=Object.assign(dt,{__name:"contactSection",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("section",ot,[rt,(0,o._)("div",st,[(0,o._)("form",{onSubmit:t[0]||(t[0]=(0,n.iM)(((...t)=>e.sendEmail&&e.sendEmail(...t)),["prevent"]))},[(0,o._)("div",it,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.inputs,((t,a)=>((0,o.wg)(),(0,o.j4)(p,{key:t,inputType:t.type,placeholderText:t.placeholder,onKeydown:t=>e.inputValidation(a,t),pattern:t.pattern,ref_for:!0,ref:"contactInput",required:"",autocomplete:"off"},null,8,["inputType","placeholderText","onKeydown","pattern"])))),128)),(0,o._)("textarea",ct,null,512),(0,o._)("div",lt,[(0,o.Wm)(K,{class:"block weight-500 inline-block",backroundProp:"var(--green-color)",type:"submit"},{default:(0,o.w5)((()=>[(0,o.Uk)("Submit Now")])),_:1})])])],32)])]))}});const ut=(0,l.Z)(pt,[["__scopeId","data-v-f491857a"]]);var ft=ut,gt=a.p+"img/greenLoader.3a269456.gif";const mt={class:"preloader-wrapper flex center-flex-element absolute"},vt=(0,o._)("img",{src:gt,alt:"preloader image"},null,-1),ht=[vt];function bt(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",mt,ht)}var wt={};const _t=(0,l.Z)(wt,[["render",bt]]);var yt=_t;const kt=e=>((0,o.dD)("data-v-6d12a5b9"),e=e(),(0,o.Cn)(),e),xt={key:0},jt={key:0,class:"portfolio-page-wrapper"},St=kt((()=>(0,o._)("footer",{class:"text-align-center"},[(0,o._)("p",{class:"font-14 weight-500"},"© David 2023")],-1)));var Ct={__name:"portfolioPage",setup(e){const t=(0,u.oR)(),a=(0,o.Fl)((()=>t.state.portfolioPageActive)),n=(0,o.Fl)((()=>t.state.pageLoaded));return(0,o.bv)((()=>{window.addEventListener("load",(()=>{setTimeout((()=>{t.commit("whenPageLoaded")}),2e3)}))})),(e,t)=>(0,r.SU)(n)?((0,o.wg)(),(0,o.iD)("div",xt,[(0,o.Wm)(b),(0,r.SU)(a)?((0,o.wg)(),(0,o.iD)("div",jt,[(0,o.Wm)(R),(0,o.Wm)(ie),(0,o.Wm)(xe),(0,o.Wm)(Ue),(0,o.Wm)(et),(0,o.Wm)(ft),St])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.j4)(yt,{key:1}))}};const Dt=(0,l.Z)(Ct,[["__scopeId","data-v-6d12a5b9"]]);var Pt=Dt,Tt={__name:"App",setup(e){return(e,t)=>((0,o.wg)(),(0,o.j4)(Pt))}};const It=Tt;var Nt=It,Wt=(0,u.MT)({state(){return{portfolioPageActive:!1,visitorName:"",pageLoaded:!1,messageSent:!1}},mutations:{portfolioPageShow(e){e.portfolioPageActive=!0},getVisitorName(e,t){e.visitorName=t},whenPageLoaded(e){e.pageLoaded=!0},messageSentAlertDisplay(e){e.messageSent=!0,setTimeout((()=>{e.messageSent=!1}),2e3)}}});(0,n.ri)(Nt).use(Wt).mount("#app")},3569:function(e,t,a){e.exports=a.p+"img/bootstrap.b8a2db6f.svg"},8186:function(e,t,a){e.exports=a.p+"img/css3.fe70a3d1.svg"},8054:function(e,t,a){e.exports=a.p+"img/html5.a2198806.svg"},5591:function(e,t,a){e.exports=a.p+"img/javascript.d68f4594.svg"},2841:function(e,t,a){e.exports=a.p+"img/jquery.64e26c44.svg"},5224:function(e,t,a){e.exports=a.p+"img/sass.41589329.svg"},1928:function(e,t,a){e.exports=a.p+"img/vuejs.32ed17cd.svg"},2172:function(e,t,a){e.exports=a.p+"img/finsweet.39aab827.png"},9665:function(e,t,a){e.exports=a.p+"img/fitnesso.1e70bdab.png"},2001:function(e,t,a){e.exports=a.p+"img/restaraunt.db5fa721.png"},360:function(e,t,a){e.exports=a.p+"img/retail.3f4d97ef.png"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(n);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunkportfolio_webpage"]=self["webpackChunkportfolio_webpage"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6997)}));n=a.O(n)})();
//# sourceMappingURL=app.c3c1d2e8.js.map