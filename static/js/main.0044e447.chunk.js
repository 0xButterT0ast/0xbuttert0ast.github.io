(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{236:function(n,e,t){},253:function(n,e){},277:function(n,e){},279:function(n,e){},356:function(n,e){},358:function(n,e){},368:function(n,e){},370:function(n,e){},395:function(n,e){},401:function(n,e){},414:function(n,e){},437:function(n,e){},510:function(n,e,t){},511:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,s,l,u,d,p,f,b,x,g,h,j,O,m,w,C,v,E,k,y=t(1),T=t(46),S=t.n(T),A=(t(236),t(21)),_=t(227),N=t(80),I=t(22),D=I.a.nav(r||(r=Object(A.a)(["\nbackground: white;\nheight: 85px;\nfont-size: 22px;\ndisplay: flex;\njustify-content: center;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n/* Third Nav */\n/* justify-content: flex-start; */\n"]))),M=Object(I.a)(N.b)(o||(o=Object(A.a)(["\ncolor: #808080;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #000000;\n}\n"]))),R=(Object(I.a)(_.a)(a||(a=Object(A.a)(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"]))),I.a.div(c||(c=Object(A.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n/* Second Nav */\n/* margin-right: 24px; */\n/* Third Nav */\n/* width: 100vw;\nwhite-space: nowrap; */\n@media screen and (max-width: 0px) {\n\tfont-size: 18px;\n\tborder: none;\n}\n"])))),F=(I.a.nav(i||(i=Object(A.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 24px;\n/* Third Nav */\n/* justify-content: flex-end;\nwidth: 100vw; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),Object(I.a)(N.b)(s||(s=Object(A.a)(["\nborder-radius: 4px;\nbackground: #808080;\npadding: 10px 22px;\ncolor: #000000;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n/* Second Nav */\nmargin-left: 24px;\n&:hover {\n\ttransition: all 0.2s ease-in-out;\n\tbackground: #fff;\n\tcolor: #808080;\n}\n"]))),t.p+"static/media/navBarLogo.c351d572.png"),L=t(3),P=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(D,{children:Object(L.jsxs)(R,{onClick:function(n){return window.location.reload()},children:[Object(L.jsx)("img",{src:F,width:"70",height:"70",align:"left",padding:"40"}),Object(L.jsx)(M,{to:"/home",activeStyle:!0,onClick:function(n){return window.location.replace("https://www.themidnighttokersclub.com/")},children:"Home"}),Object(L.jsx)(M,{to:"/mint",activeStyle:!0,children:"Mint"}),Object(L.jsx)(M,{to:"/raffles",activeStyle:!0,children:"Raffles"})]})})})},W=t(6),K=t(14),B=t(38),z=t(97),U=t(7),H=t.n(U),G=t(20),Y=t(47),Q=t.n(Y),q=t(98),X=t.n(q),J=t(39),Z=t(99),V=t(18),$={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(V.a)(Object(V.a)({},$),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(V.a)(Object(V.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(V.a)(Object(V.a)({},$),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(V.a)(Object(V.a)({},n),{},{account:e.payload.account});default:return n}},en={loading:!1,totalSupply:0,tokenCount:0,cost:0,error:!1,errorMsg:""},tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(V.a)(Object(V.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(V.a)(Object(V.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,tokenCount:e.payload.tokenCount,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(V.a)(Object(V.a)({},en),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},rn=Object(J.b)({blockchain:nn,data:tn}),on=[Z.a],an=Object(J.c)(J.a.apply(void 0,on)),cn=Object(J.d)(rn,an),sn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},ln=function(){return function(){var n=Object(G.a)(H.a.mark((function n(e){var t,r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,cn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return t=n.sent,n.next=7,cn.getState().blockchain.smartContract.methods.tokenCount().call();case 7:r=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t,tokenCount:r}}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),e(sn("Could not load data from contract."));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},un=function(n){return{type:"CONNECTION_FAILED",payload:n}},dn=function(n){return function(){var e=Object(G.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(ln());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},pn=I.a.div(l||(l=Object(A.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow:hidden\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),fn=(I.a.div(u||(u=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),I.a.div(d||(d=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"])))),bn=(I.a.div(p||(p=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),I.a.div(f||(f=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),I.a.div(b||(b=Object(A.a)(["\n  display: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-top: ",";\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: center;\n \n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.d;return e||"flex"}),(function(n){var e=n.pb;return e||"0px"}),(function(n){var e=n.pl;return e||"0px"}),(function(n){var e=n.pt;return e||"0px"}),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"}))),xn=(I.a.div(x||(x=Object(A.a)(["\n  display: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-top: ",";\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.d;return e||"flex"}),(function(n){var e=n.pb;return e||"0px"}),(function(n){var e=n.pl;return e||"0px"}),(function(n){var e=n.pt;return e||"0px"}),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),I.a.div(g||(g=Object(A.a)(["\n  display: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-top: ",";\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.d;return e||"flex"}),(function(n){var e=n.pb;return e||"0px"}),(function(n){var e=n.pl;return e||"0px"}),(function(n){var e=n.pt;return e||"0px"}),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),I.a.p(h||(h=Object(A.a)(["\n  color: var(--white);\n  font-size: 28px;\n  font-weight: bold,\n  line-height: 1.6;\n"]))),I.a.p(j||(j=Object(A.a)(["\n  color: var(--white);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),I.a.p(O||(O=Object(A.a)(["\n  color: var(--white);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),I.a.div(m||(m=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(27)),gn=(t(222),t.p+"static/media/ClubDay.27cb9a18.png"),hn=t.p+"static/media/ClubNight.50ee2553.png",jn=t(82),On=t(19),mn=(w={CONTRACT_ADDRESS:"0x8A5EDBF9743d3f0962B1e5AE2057d9F02D2b24DD",RAFFLE_CONTRACT_ADDRESS:"0xc7914eC0FF1d4F65CB13Bb52C349c543Eec430CE",SCAN_LINK:"https://polygonscan.com/token/0x8A5EDBF9743d3f0962B1e5AE2057d9F02D2b24DD",NETWORK:{NAME:"Polygon",SYMBOL:"Matic",ID:137},NFT_NAME:"Midnight Toker",SYMBOL:"TMTC",MAX_SUPPLY:77777,WEI_COST:25e18,RAFFLE_WEI_COST:1e18,DISPLAY_COST:25,TICKET_COST:1,GAS_LIMIT:2535e3,MAX_BASE_FEE:37.3165,MAX_PRIORITY_FEE:37.3165,MARKETPLACE:"Opeansea",MARKETPLACE_LINK:"https://opensea.io/collection/themidnighttokersclub",TRUE_HOME_LINK:"https://www.themidnighttokersclub.com/",SHOW_BACKGROUND:!0},Object(On.a)(w,"RAFFLE_CONTRACT_ADDRESS","0xc7914eC0FF1d4F65CB13Bb52C349c543Eec430CE"),Object(On.a)(w,"RAFFLE_SCAN_LINK","https://polygonscan.com/token/0xc7914eC0FF1d4F65CB13Bb52C349c543Eec430CE"),Object(On.a)(w,"RAFFLE_NAME","Midnight Toker"),Object(On.a)(w,"TICKET","Ticket"),Object(On.a)(w,"TICKET_WEI_COST",1e18),Object(On.a)(w,"TICKET_DISPLAY_COST",1),Object(On.a)(w,"MINT_PAGE","Mint Page"),Object(On.a)(w,"PROJECT_LINK","https://themidnighttokersclub.com/index"),w),wn=I.a.button(C||(C=Object(A.a)(["\n  float: ",";\n  padding: 10px;\n  font-size: 11px;\n  text-align: ",";\n  margin-left: ",";\n  margin-right: ",";\n  border-radius: ",";\n  border: none;\n  background-color: ",";;\n  padding: 10px;\n  font-weight: bold;\n  font-size:",";\n  color: #000000;\n  width:  ",";\n  cursor: ",';\n  z-index:44;\n  position: "absolute";\n  box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n    : active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n}\n'])),(function(n){var e=n.fl;return e||"right"}),(function(n){var e=n.txa;return e||"center"}),(function(n){var e=n.ml;return e||"0px"}),(function(n){var e=n.mr;return e||"0px"}),(function(n){var e=n.br;return e||"50px"}),(function(n){var e=n.bg;return e||"#ffffff"}),(function(n){var e=n.fs;return e||"0px"}),(function(n){var e=n.w;return e||"100px"}),(function(n){var e=n.crs;return e||""})),Cn=I.a.button(v||(v=Object(A.a)(["\npadding: 10px;\nborder: 2px solid black;\nborder-radius: ",";\nbackground-color: ",";;\nmargin-left: ",";\nfont-weight: bold;\nfont-size:",";\ncolor: #000000;\nwidth:  ",";\ncursor: pointer;\n}\n"])),(function(n){var e=n.br;return e||"50px"}),(function(n){var e=n.bg;return e||"#ffffff"}),(function(n){var e=n.ml;return e||"0px"}),(function(n){var e=n.fs;return e||"0px"}),(function(n){var e=n.w;return e||"45px"})),vn=I.a.div(E||(E=Object(A.a)(["\ndisplay: contents;\nflex: 0;\nflex-direction: column;\njustify-content: stretched;\nalign-items: stretched;\nwidth: 100 %;\n@media(min-width: 767px) {\n  flex-direction: row;\n}\n"])));I.a.img(k||(k=Object(A.a)(["\nwidth: 200px;\nheight: 200px;\n@media(min-width: 767px) {\n  width: 350px;\n  height: 350px;\n}\ntransition: width 0.5s;\ntransition: height 0.5s;\n"])));var En,kn,yn,Tn,Sn,An=function(){var n=Object(B.b)(),e=Object(B.c)((function(n){return n.blockchain})),t=Object(B.c)((function(n){return n.data})),r=Object(y.useState)(0),o=Object(K.a)(r,2),a=o[0],c=o[1],i=Object(y.useState)(!1),s=Object(K.a)(i,2),l=s[0],u=s[1],d=function(){""!==e.account&&null!==e.smartContract&&n(ln(e.account))};return Object(y.useEffect)((function(){d()}),[e.account]),Object(y.useEffect)((function(){""!==e.errorMsg&&(xn.b.error(e.errorMsg,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),n({type:"CONNECTION_FAILED",payload:""}))}),[e.errorMsg]),Object(L.jsxs)(pn,{style:{backgroundImage:e.account?(window.innerWidth,"url(".concat(gn,")")):(window.innerWidth,"url(".concat(hn,")"))},children:[Object(L.jsx)(xn.a,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(L.jsx)(bn,{flex:1,ai:"center",style:{padding:24},children:Object(L.jsxs)(vn,{d:"block",flex:1,ai:"center",children:[e.account?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(bn,{d:"inline",flex:0,ai:"end",pb:"5px",children:[Object(L.jsx)(wn,{fs:(window.innerWidth,"13px"),crs:"pointer",bg:"pink",br:"50px",ml:"0px",onClick:function(n){n.preventDefault(),window.location.reload()},children:Object(L.jsx)(jn.a,{style:{fontSize:window.innerWidth>1500?"14px":"16px",float:"right"}})}),Object(L.jsx)(wn,{fs:(window.innerWidth,"13px"),crs:"pointer",w:(window.innerWidth,"145px"),br:"50px",ml:"-35px",mr:"-69px",txa:"right",onClick:function(n){n.preventDefault(),window.open("https://polygonscan.com/address/".concat(e.account),"_blank")},children:e.account.slice(0,6)+"...."+e.account.slice(e.account.length-5)})]}),Object(L.jsxs)(bn,{d:"inline",flex:0,ai:"end",children:[Object(L.jsxs)(wn,{fs:window.innerWidth>1500?"11px":"12px",w:window.innerWidth>1500?"115px":"145px",ml:"10px",bg:"lightgreen",children:["Minted: ",t.totalSupply,"/",mn.MAX_SUPPLY]}),Object(L.jsx)(wn,{fs:(window.innerWidth,"13px"),bg:"lightgreen",w:"40px",br:"100px",ml:window.innerWidth>1500?"10px":"5px",crs:"pointer",onClick:function(n){n.preventDefault(),window.open(mn.MARKETPLACE_LINK,"_blank")},children:Object(L.jsx)(jn.b,{})})]}),Object(L.jsx)(bn,{flex:1,onClick:function(){document.getElementById("root").style.filter="brightness(50%)",u((function(n){return!n}))}}),Object(L.jsx)(z.a,{open:l,onClose:function(){document.getElementById("root").style.filter="brightness(100%)",u(!1)},position:"center",children:function(t){return Object(L.jsxs)(bn,{flex:1,d:"inline-block",jc:"center",ai:"center",style:{opacity:.9,backgroundColor:"#fff",padding:20,paddingLeft:window.innerWidth>600?120:60,paddingRight:window.innerWidth>600?120:60,borderRadius:20},children:[Object(L.jsx)(Cn,{fs:"12px",w:"35px",br:"18px",crs:"pointer",onClick:function(n){n.preventDefault(),a>0&&c(a-1)},children:" - "}),Object(L.jsx)(Cn,{fs:"15px",w:"46px",br:"12px",ml:"5px",children:a}),Object(L.jsx)(Cn,{fs:"12px",w:"35px",br:"18px",ml:"5px",crs:"pointer",onClick:function(n){n.preventDefault(),a<10&&c(a+1)},children:" + "}),Object(L.jsx)(fn,{}),Object(L.jsx)(Cn,{fs:"15px",w:"110px",bg:"lightgreen",ml:"8px",crs:"pointer",onClick:function(r){r.preventDefault(),t(),function(t){if(t<=0)xn.b.error("Select an amount to mint.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var r=mn.GAS_LIMIT,o=String(mn.WEI_COST*t),a=String(r*t);console.log("Cost: ",o),console.log("Gas limit: ",a),xn.b.success("Minting your Taco...",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.smartContract.methods.mint(t).send({gasLimit:String(a),to:mn.CONTRACT_ADDRESS,from:e.account,value:o,maxPriorityFeePerGas:null,maxFeePerGas:null}).once("error",(function(n){console.log(n);var e="Something went wrong please try again later.";n.hasOwnProperty("message")&&(e=n.message),n&&xn.b.error(e,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c(0)})).then((function(t){xn.b.success("Successfully minted a Taco, you can view it on OpenSea.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c(0),n(ln(e.account))}))}}(a),d()},children:"Mint"})]})}})]}):Object(L.jsx)(bn,{flex:1,ai:"end",onClick:function(e){e.preventDefault(),n(function(){var n=Object(G.a)(H.a.mark((function n(e){var t,r,o,a,c,i,s,l,u;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=n.sent,n.next=12,o.json();case 12:if(a=n.sent,c=window,!(i=c.ethereum)||!i.isMetaMask){n.next=33;break}return Q.a.setProvider(i),s=new X.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(u=new Q.a(r,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){e(dn(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(un("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(un("Something went wrong."));case 31:n.next=34;break;case 33:e(un("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),d()},children:Object(L.jsx)(wn,{fs:window.innerWidth>1500?"13px":"15px",crs:"pointer",children:"Connect"})}),"        "]})})]})},_n={loading:!0,account:null,smartContract:null,web3:null,errorMsg:""},Nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_n,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(V.a)(Object(V.a)({},_n),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(V.a)(Object(V.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(V.a)(Object(V.a)({},_n),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(V.a)(Object(V.a)({},n),{},{account:e.payload.account});default:return n}},In={loading:!1,totalSupply:0,getMaxEntries:0,getNumTickets:0,currentEntries:0,cost:0,error:!1,errorMsg:""},Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:In,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(V.a)(Object(V.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(V.a)(Object(V.a)({},n),{},{loading:!1,getPlayerTickets:e.payload.getPlayerTickets,getMaxEntries:e.payload.getMaxEntries,getWinners:e.payload.getWinners,numWinners:e.payload.numWinners,raffleLive:e.payload.raffleLives,getNumTickets:e.payload.getNumTickets,currentEntries:e.payload.currentEntries,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(V.a)(Object(V.a)({},In),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},Mn=Object(J.b)({blockchain:Nn,data:Dn}),Rn=[Z.a],Fn=Object(J.c)(J.a.apply(void 0,Rn)),Ln=Object(J.d)(Mn,Fn),Pn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Wn=function(){return function(){var n=Object(G.a)(H.a.mark((function n(e){var t,r,o,a,c,i,s;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Ln.getState().blockchain.smartContract.methods.getPlayerTickets(ethereum.selectedAddress).call();case 4:return t=n.sent,n.next=7,Ln.getState().blockchain.smartContract.methods.getMaxEntries(ethereum.selectedAddress).call();case 7:return r=n.sent,n.next=10,Ln.getState().blockchain.smartContract.methods.getWinners().call();case 10:return o=n.sent,n.next=13,Ln.getState().blockchain.smartContract.methods.numWinners().call();case 13:return a=n.sent,n.next=16,Ln.getState().blockchain.smartContract.methods.raffleLive().call();case 16:return c=n.sent,n.next=19,Ln.getState().blockchain.smartContract.methods.getNumTickets().call();case 19:return i=n.sent,n.next=22,Ln.getState().blockchain.smartContract.methods.currentEntries(ethereum.selectedAddress).call();case 22:s=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{getPlayerTickets:t,getWinners:o,numWinners:a,getMaxEntries:r,raffleLive:c,getNumTickets:i,currentEntries:s}}),n.next=30;break;case 26:n.prev=26,n.t0=n.catch(1),console.log(n.t0),e(Pn("Could not load data from contract."));case 30:case"end":return n.stop()}}),n,null,[[1,26]])})));return function(e){return n.apply(this,arguments)}}()},Kn=function(n){return{type:"CONNECTION_FAILED",payload:n}},Bn=function(n){return function(){var e=Object(G.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(Wn());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},zn=t.p+"static/media/raffleDay.65bfa9d8.png",Un=t.p+"static/media/raffleNight.52e866c0.png",Hn=I.a.button(En||(En=Object(A.a)(["\n  float: ",";\n  padding: 10px;\n  font-size: 11px;\n  text-align: ",";\n  margin-left: ",";\n  margin-right: ",";\n  border-radius: ",";\n  border: none;\n  background-color: ",";;\n  padding: 10px;\n  font-weight: bold;\n  font-size:",";\n  color: #000000;\n  width:  ",";\n  cursor: ",';\n  z-index:44;\n  position: "absolute";\n  box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n    : active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n}\n'])),(function(n){var e=n.fl;return e||"right"}),(function(n){var e=n.txa;return e||"center"}),(function(n){var e=n.ml;return e||"0px"}),(function(n){var e=n.mr;return e||"0px"}),(function(n){var e=n.br;return e||"50px"}),(function(n){var e=n.bg;return e||"#ffffff"}),(function(n){var e=n.fs;return e||"0px"}),(function(n){var e=n.w;return e||"100px"}),(function(n){var e=n.crs;return e||""})),Gn=(I.a.button(kn||(kn=Object(A.a)(["\n  float: ",";\n  padding: 10px;\n  font-size: 10px;\n  text-align: ",";\n  margin-left: ",";\n  margin-right: ",";\n  border-radius: ",";\n  border: none;\n  background-color: ",";;\n  padding: 10px;\n  font-weight: regular;\n  font-size:",";\n  color: #000000;\n  width:  ",";\n  cursor: ",';\n  z-index:44;\n  position: "absolute";\n  box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px-2px rgba(250, 250, 250, 0.3);\n    : active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n}\n'])),(function(n){var e=n.fl;return e||"right"}),(function(n){var e=n.txa;return e||"center"}),(function(n){var e=n.ml;return e||"0px"}),(function(n){var e=n.mr;return e||"0px"}),(function(n){var e=n.br;return e||"50px"}),(function(n){var e=n.bg;return e||"#ffffff46"}),(function(n){var e=n.fs;return e||"0px"}),(function(n){var e=n.w;return e||"1000px"}),(function(n){var e=n.crs;return e||""})),I.a.button(yn||(yn=Object(A.a)(["\npadding: 10px;\nborder: 2px solid black;\nborder-radius: ",";\nbackground-color: ",";;\nmargin-left: ",";\nfont-weight: bold;\nfont-size:",";\ncolor: #000000;\nwidth:  ",";\ncursor: pointer;\n}\n"])),(function(n){var e=n.br;return e||"50px"}),(function(n){var e=n.bg;return e||"#ffffff"}),(function(n){var e=n.ml;return e||"0px"}),(function(n){var e=n.fs;return e||"0px"}),(function(n){var e=n.w;return e||"45px"}))),Yn=I.a.div(Tn||(Tn=Object(A.a)(["\ndisplay: contents;\nflex: 0;\nflex-direction: column;\njustify-content: stretched;\nalign-items: stretched;\nwidth: 100 %;\n@media(min-width: 767px) {\n  flex-direction: row;\n}\n"])));I.a.img(Sn||(Sn=Object(A.a)(["\nwidth: 200px;\nheight: 200px;\n@media(min-width: 767px) {\n  width: 350px;\n  height: 350px;\n}\ntransition: width 0.5s;\ntransition: height 0.5s;\n"])));var Qn=function(){var n=Object(B.b)(),e=Object(B.c)((function(n){return n.blockchain})),t=Object(B.c)((function(n){return n.data})),r=Object(y.useState)(0),o=Object(K.a)(r,2),a=o[0],c=o[1],i=Object(y.useState)(!1),s=Object(K.a)(i,2),l=s[0],u=s[1],d=Object(y.useState)({RAFFLE_CONTRACT_ADDRESS:"",RAFFLE_SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},RAFFLE_NAME:"",SYMBOL:"",MAX_SUPPLY:1,TICKET_WEI_COST:0,TICKET_DISPLAY_COST:0,GAS_LIMIT:0,MINT_PAGE:"",PROJECT_LINK:"",SHOW_BACKGROUND:!1}),p=Object(K.a)(d,2),f=(p[0],p[1]),b=Object(y.useState)({PRIZE:"",LIVE:""}),x=Object(K.a)(b,2),g=x[0],h=x[1],j=function(){""!==e.account&&null!==e.smartContract&&n(Wn(e.account))},O=function(){var n=Object(G.a)(H.a.mark((function n(){var e,t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,f(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(y.useEffect)((function(){O()}),[]);var m=[t.getPlayerTickets].join(","),w=[t.getWinners].join(","),C=([t.tokenCount].join(","),ethereum.selectedAddress),v=t.numWinners,E=g.PRIZE,k=t.getNumTickets,T=t.currentEntries;console.log({tickets:m}),console.log({winners:w}),console.log({addy:C}),console.log({numWinners:v}),console.log({rafflePrize:E}),console.log({numTickets:k}),console.log({currentEntries:T});var S=function(){var n=Object(G.a)(H.a.mark((function n(){var e,t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/rewards.json");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,h(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(y.useEffect)((function(){S()}),[]),Object(y.useEffect)((function(){j()}),[e.account]),Object(y.useEffect)((function(){""!==e.errorMsg&&(xn.b.error(e.errorMsg,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),n(connectFailed("")))}),[e.errorMsg]),Object(L.jsxs)(pn,{style:{backgroundImage:e.account?(window.innerWidth,"url(".concat(zn,")")):(window.innerWidth,"url(".concat(Un,")"))},children:[Object(L.jsx)(xn.a,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(L.jsx)(bn,{flex:1,ai:"center",style:{padding:24},children:Object(L.jsxs)(Yn,{d:"block",flex:1,ai:"center",children:[e.account?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(bn,{d:"inline",flex:0,ai:"end",pb:"5px",children:[Object(L.jsx)(Hn,{fs:(window.innerWidth,"13px"),crs:"pointer",bg:"pink",br:"50px",ml:"0px",onClick:function(n){n.preventDefault(),window.location.reload()},children:Object(L.jsx)(jn.a,{style:{fontSize:window.innerWidth>1500?"14px":"16px",float:"right"}})}),Object(L.jsx)(Hn,{fs:(window.innerWidth,"13px"),crs:"pointer",w:(window.innerWidth,"145px"),br:"50px",ml:"-35px",mr:"-69px",txa:"right",onClick:function(n){n.preventDefault(),window.open("https://polygonscan.com/address/".concat(e.account),"_blank")},children:e.account.slice(0,6)+"...."+e.account.slice(e.account.length-5)})]}),Object(L.jsxs)(bn,{d:"inline",flex:0,ai:"end",children:[Object(L.jsxs)(Hn,{fs:window.innerWidth>1500?"11px":"12px",w:window.innerWidth>1500?"115px":"145px",ml:"10px",bg:"lightGreen",children:["Tickets: ",t.currentEntries,"/",t.getMaxEntries]}),Object(L.jsx)(bn,{d:"center",flex:0,ai:"center",pb:"5px",children:Object(L.jsxs)(bn,{fs:window.innerWidth>1500?"13px":"16px",crs:"pointer",bg:"#ffffff46",br:"50px",ml:"0px",children:["Your Tickets: ",m," ",Object(L.jsx)("br",{}),"You can buy a maximum of ",t.getMaxEntries," tickets. ",Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),"Is Raffle Active? ",g.LIVE," ",Object(L.jsx)("br",{}),"Raffle Prize is: ",g.PRIZE," ",Object(L.jsx)("br",{}),Object(L.jsx)("br",{}),"A total of ",t.getNumTickets," tickets have been claimed. ",Object(L.jsx)("br",{}),"You own ",t.currentEntries," ",Object(L.jsx)("br",{}),"Your Tickets: ",m," ",Object(L.jsx)("br",{}),"Winning Tickets: ",w," ",Object(L.jsx)("br",{}),"Total Winners: ",t.numWinners," ",Object(L.jsx)("br",{})]})})]}),Object(L.jsx)(bn,{flex:1,onClick:function(){document.getElementById("root").style.filter="brightness(50%)",u((function(n){return!n}))}}),Object(L.jsx)(z.a,{open:l,onClose:function(){document.getElementById("root").style.filter="brightness(100%)",u(!1)},position:"center",children:function(t){return Object(L.jsxs)(bn,{flex:1,d:"inline-block",jc:"center",ai:"center",style:{opacity:.9,backgroundColor:"#fff",padding:20,paddingLeft:window.innerWidth>600?120:60,paddingRight:window.innerWidth>600?120:60,borderRadius:20},children:[Object(L.jsx)(Gn,{fs:"12px",w:"35px",br:"18px",ml:"5px",crs:"pointer",onClick:function(n){n.preventDefault(),a<25&&c(a+1)},children:" + "}),Object(L.jsx)(Gn,{fs:"15px",w:"46px",br:"12px",ml:"5px",children:a}),Object(L.jsx)(Gn,{fs:"12px",w:"35px",br:"18px",ml:"5px",crs:"pointer",onClick:function(n){n.preventDefault(),a>0&&c(a-1)},children:" - "}),Object(L.jsx)(fn,{}),Object(L.jsx)(Gn,{fs:"15px",w:"110px",bg:"gold",ml:"8px",crs:"pointer",onClick:function(r){r.preventDefault(),t(),function(t){if(t<=0)xn.b.error("Select an amount to mint.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var r=mn.GAS_LIMIT,o=String(mn.RAFFLE_WEI_COST*t),a=String(r*t);console.log("Cost: ",o),console.log("Gas limit: ",a),xn.b.success("Snaggin' your tickets",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.smartContract.methods.enterRaffle(t).send({gasLimit:String(a),to:mn.RAFFLE_CONTRACT_ADDRESS,from:e.account,value:o,maxPriorityFeePerGas:null,maxFeePerGas:null}).once("error",(function(n){console.log(n);var e="Something went wrong please try again later.";n.hasOwnProperty("message")&&(e=n.message),n&&xn.b.error(e,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c(0)})).then((function(t){xn.b.success("Successfully perchased your tickets",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c(0),n(Wn(e.account))}))}}(a),j()},children:"Get Tickets"})]})}})]}):Object(L.jsx)(bn,{flex:1,ai:"end",onClick:function(e){e.preventDefault(),n(function(){var n=Object(G.a)(H.a.mark((function n(e){var t,r,o,a,c,i,s,l,u;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abiRaffle.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=n.sent,n.next=12,o.json();case 12:if(a=n.sent,c=window,!(i=c.ethereum)||!i.isMetaMask){n.next=33;break}return Q.a.setProvider(i),s=new X.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(u=new Q.a(r,a.RAFFLE_CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){e(Bn(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(Kn("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(Kn("Something went wrong."));case 31:n.next=34;break;case 33:e(Kn("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),j()},children:Object(L.jsx)(Hn,{fs:window.innerWidth>1500?"13px":"15px",crs:"pointer",children:"Connect"})}),"        "]})})]})};t.p;var qn=function(){return window.location.replace("https://www.themidnighttokersclub.com/"),null};var Xn=function(){return Object(L.jsxs)(N.a,{children:[Object(L.jsx)(P,{}),Object(L.jsxs)(W.c,{children:[Object(L.jsx)(W.a,{path:"/",element:Object(L.jsx)(qn,{}),exact:!0}),Object(L.jsx)(W.a,{path:"/home",element:Object(L.jsx)(qn,{}),exact:!0}),Object(L.jsx)(W.a,{path:"/mint",element:Object(L.jsx)(An,{}),exact:!0}),Object(L.jsx)(W.a,{path:"/raffles",element:Object(L.jsx)(Qn,{}),exact:!0})]})]})},Jn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,515)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),a(n),c(n)}))};t(510);S.a.render(Object(L.jsx)(B.a,{store:Ln,children:Object(L.jsx)(Xn,{})}),document.getElementById("root")),Jn()}},[[511,1,2]]]);
//# sourceMappingURL=main.0044e447.chunk.js.map