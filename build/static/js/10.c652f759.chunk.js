(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[10],{849:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n.n(a),r=n(851);function s(e){var t=e.title,n=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,null,i.a.createElement("title",null,t)),i.a.createElement("div",null,n))}},850:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(846),s=n(865),o=n(19);t.a=Object(o.a)((function(e){return{circularProgress:{color:"#fff",padingRight:"50px"}}}),{withTheme:!0})((function(e){var t=e.size,n=e.classes;return i.a.createElement(r.a,{color:"secondary.main",display:"flex",pl:7},i.a.createElement(s.a,{size:t||30,thickness:t?t/5*30:5,className:n.circularProgress}))}))},862:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(44),i=n(0),r=n.n(i),s=n(828),o=n(846),l=n(859),p=n(59),u=Object(s.a)((function(e){var t;return{gallryBox:{"& figure":(t={width:"100%",height:"250px",display:"flex",overflow:"hidden",justifyContent:"center",position:"relative",borderRadius:"10px"},Object(a.a)(t,e.breakpoints.down("xs"),{height:"150px"}),Object(a.a)(t,"&:hover",{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px","& div":{display:"block"},"& img":{transform:"rotate(5deg)"}}),Object(a.a)(t,"& img",Object(a.a)({transition:"05s",width:"auto",maxWidth:"100%",maxHeight:"250px"},e.breakpoints.down("xs"),{maxHeight:"150px"})),Object(a.a)(t,"& div",{position:"absolute",left:0,top:"0",display:"none",backgroundColor:"#00ffff5c",width:"100%",height:"100%","& p":{width:"100%",height:"100%",display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center"},"& h6":{color:"#fff",fontWeight:"700",fontSize:"30px"}}),t)}}}));function d(e){var t,n,a,i=u(),s=e.data;return r.a.createElement(o.a,{className:i.gallryBox},r.a.createElement(p.a,{to:{pathname:"/gallry-details",search:s.id}},r.a.createElement("figure",null,r.a.createElement("img",{src:(null===s||void 0===s||null===(t=s.nfdData)||void 0===t?void 0:t.image)?null===s||void 0===s||null===(n=s.nfdData)||void 0===n?void 0:n.image:"",alt:""}),r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("label",null,r.a.createElement(l.a,{variant:"h6"},(null===s||void 0===s?void 0:s.id)?null===s||void 0===s?void 0:s.id:""),r.a.createElement(l.a,{variant:"h6"},null===s||void 0===s||null===(a=s.nfdData)||void 0===a?void 0:a.name)))))))}},863:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_tokenIdTracker","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfNfts","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReflectionBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfNfts","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"nftCreator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},904:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),r=n(41),s=n(24),o=n(44),l=n(0),p=n.n(l),u=n(828),d=n(846),c=n(832),y=n(859),m=n(840),b=n(830),f=n(835),x=n(905),g=n(906),v=n(907),h=n(908),T=n(909),w=n(849),E=n(900),k=n(862),O=n(82),j=n(128),R=n(871),M=n(131),F=n(36),I=n(863),A=n(62),C=n(850),N=n(28),S=Object(u.a)((function(e){var t,n,a;return{deatailimage:(t={width:"100%",display:"flex",padding:"50px 0",position:"relative",textAlign:"center",marginBottom:"25px !important",justifyContent:"center"},Object(o.a)(t,e.breakpoints.down("sm"),{height:"auto"}),Object(o.a)(t,"& img",{filter:" drop-shadow(rgba(0, 0, 0, 0.25) 0px 20px 20px)",maxHeight:"100%",borderRadius:"10px",maxWidth:"100%"}),t),Padding_Top:{paddingTop:"50px",backgroundColor:"#fff"},dialogBox:{padding:"30px"},walletPage:{"& h4":(n={fontSize:"50px",fontWeight:"600",color:"#300760",marginBottom:"30px","& span":{color:"#f30066"}},Object(o.a)(n,e.breakpoints.down("lg"),{fontSize:"40px"}),Object(o.a)(n,e.breakpoints.down("xs"),{fontSize:"30px"}),n),"& p":{fontWeight:"500",fontSize:"16px",lineHeight:"27px",color:"#7f7f7f","& span":{color:"#ec0066",cursor:"pointer"}}},paper:{overflowY:"unset"},customizedButton:{position:"absolute",top:"-42px",right:"-9px",color:"#fff"},walletBox:{background:"#FFFFFF",boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.12)",borderRadius:"25px",padding:"30px",textAlign:"center",marginBottom:"50px",transition:"02s",cursor:"pointer",border:"1px solid transparent","&:hover":{border:"1px solid #f30065"},"& p":{fontWeight:"500",fontSize:"16px",lineHeight:"27px",color:"#fafafa",textOverflow:"ellipsis",maxWidth:"90%",overflow:"hidden",position:"relative"}},copy:(a={display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:" 0px 4px 8px rgb(0 0 0 / 12%)",backgroundColor:"#fff",position:"absolute",cursor:"pointer",padding:"0px 10px",borderRadius:"50px",bottom:"-26px"},Object(o.a)(a,e.breakpoints.down("xs"),{right:"10px",width:"90%"}),Object(o.a)(a,"& svg",{fontSize:"30px"}),a),walletdiv:{background:"#FFFFFF",boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.12)",borderRadius:"10px",padding:"20px 15px",position:"relative",backgroundColor:"#dedede",border:"1px solid transparent",overflow:"hidden","& svg":{position:"absolute",right:"24px",fontSize:"80px",top:"9px",color:"#3c076a40",transform:"rotate(-20deg)"},"& h6":{color:"#DB0909"},"&:hover":{"& .wallet_box":{opacity:"1",top:"30%",right:"-60px"},"& .wallet_box:first-child":{opacity:"1",top:"30%",right:"-60px"}}},box:{height:"150px",width:"150px",borderRadius:"50%",backgroundColor:"rgb(251 16 56 / 66%)",position:"absolute",top:"100%",right:"-150px",transition:"0.5s all"},boxheading1:{display:" inline-block",padding:"10px",borderRadius:"5px",marginTop:"20px",color:"#fafafa",fontWeight:"600"},dialoginputbox:{width:"393px",height:"35px",border:"2px solid #00ffff",paddingLeft:"10px",backgroundColor:"rgb(235 235 235)",borderRadius:"8px","@media (max-width: 900px)":{width:"291px"}},relfectionBox:{textAlign:"center",color:"#fff",flesWarp:"warp",minWidth:"90px",boxShadow:"rgb(0 0 0 / 13%) 0px 5px 15px",border:"1px solid #ccc",padding:"40px 0px",borderRadius:"12px",margin:"50px 5px 10px 5px",transition:" 02s",background:"#ffffff1c","&:hover":{transform:"translateY(-10px)"},"& label":{fontSize:"15px",paddingBottom:0,color:"#00ffff"},"& p":{color:"white"}},claimButton:{background:"aqua",color:"#fff",borderRadius:"6px",border:"1px solid aqua"},lockerBox:{textAlign:"center","& img":{width:"100%",maxWidth:"600px"},"& h1":{fontSize:"90px",color:"#fff"}}}}));t.default=function(e){var t=Object(l.useContext)(j.a),n=Object(N.g)(),a=Object(l.useState)([]),o=Object(s.a)(a,2),u=o[0],B=o[1],W=Object(l.useState)(!1),L=Object(s.a)(W,2),z=L[0],U=L[1],_=Object(l.useState)(!1),D=Object(s.a)(_,2),P=D[0],H=D[1],q=Object(l.useState)(!1),J=Object(s.a)(q,2),G=(J[0],J[1]),V=Object(l.useState)(0),Y=Object(s.a)(V,2),K=Y[0],Q=Y[1];Object(l.useEffect)((function(){(null===t||void 0===t?void 0:t.userNFTList)&&(U(null===t||void 0===t?void 0:t.userNFtLoading),B(null===t||void 0===t?void 0:t.userNFTList))}),[null===t||void 0===t?void 0:t.userNFTList,null===t||void 0===t?void 0:t.userNFtLoading]);var X=p.a.useState(!1),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=p.a.useState(!1),ne=Object(s.a)(te,2),ae=ne[0],ie=ne[1],re=Object(l.useState)(""),se=Object(s.a)(re,2),oe=se[0],le=se[1],pe=S(),ue=Object(O.c)(),de=ue.account,ce=ue.chainId,ye=ue.library,me=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n,a,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce!==F.a){e.next=47;break}if(!oe||""===oe){e.next=44;break}return e.next=4,Object(A.e)();case 4:t=e.sent,n=oe.split(","),console.log("addList",n),a=0;case 8:if(!(a<n.length)){e.next=16;break}if(r=t.utils.isAddress(n[a]),console.log("dataRes",r),r){e.next=13;break}return e.abrupt("break",16);case 13:a++,e.next=8;break;case 16:if(a!==n.length){e.next=41;break}return H(!0),e.prev=18,e.next=21,Object(A.c)(F.e,I,ye,de);case 21:return s=e.sent,e.next=24,s.addToWhitelist(n,{from:de});case 24:return o=e.sent,e.next=27,o.wait();case 27:G(!1),M.b.success("Success"),H(!1),ee(!1),le(),e.next=39;break;case 34:e.prev=34,e.t0=e.catch(18),M.b.error(e.t0.message),console.log("ERROR",e.t0),H(!1);case 39:e.next=42;break;case 41:M.b.error("Please enter valid address, ".concat(a+1," number address is wrong "));case 42:e.next=45;break;case 44:M.b.error("Please enter address");case 45:e.next=48;break;case 47:Object(A.g)();case 48:case"end":return e.stop()}}),e,null,[[18,34]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.e)();case 2:return t=e.sent,e.next=5,t.eth.getBalance(F.e);case 5:return n=e.sent,e.next=8,t.utils.fromWei(n);case 8:a=e.sent,Q(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n,a,r,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce!==F.a){e.next=47;break}if(!oe||""===oe){e.next=44;break}return e.next=4,Object(A.e)();case 4:t=e.sent,n=oe.split(","),console.log("addList",n),a=0;case 8:if(!(a<n.length)){e.next=16;break}if(r=t.utils.isAddress(n[a]),console.log("dataRes",r),r){e.next=13;break}return e.abrupt("break",16);case 13:a++,e.next=8;break;case 16:if(a!==n.length){e.next=41;break}return H(!0),e.prev=18,e.next=21,Object(A.c)(F.e,I,ye,de);case 21:return s=e.sent,e.next=24,s.removeFromWhitelist(n,{from:de});case 24:return o=e.sent,e.next=27,o.wait();case 27:G(!1),M.b.success("Address has been removed successfully"),H(!1),ie(!1),le(),e.next=39;break;case 34:e.prev=34,e.t0=e.catch(18),M.b.error(e.t0.message),console.log("ERROR",e.t0),H(!1);case 39:e.next=42;break;case 41:M.b.error("Please enter valid address, ".concat(a+1," number address is wrong "));case 42:e.next=45;break;case 44:M.b.error("Please enter address");case 45:e.next=48;break;case 47:Object(A.g)();case 48:case"end":return e.stop()}}),e,null,[[18,34]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){be()}),[]),Object(l.useEffect)((function(){de||n.push("/")}),[de]),p.a.createElement(w.a,{title:"The Defiants - Become part of our NFT revolution!"},p.a.createElement(d.a,null,p.a.createElement(c.a,{container:!0,spacing:1},p.a.createElement(c.a,{item:!0,lg:12,xs:12},p.a.createElement(d.a,{className:pe.lockerBox},p.a.createElement(y.a,{variant:"h1"},"THE VAULT"),p.a.createElement("img",{src:"/images/vault/vault.png",alt:""})))),p.a.createElement(d.a,{className:pe.deatailimage,mb:18},p.a.createElement("img",{src:"https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=".concat(de,"&choe=UTF-8"),alt:""}),p.a.createElement(d.a,{className:pe.copy},p.a.createElement(y.a,{variant:"body1",align:"center"},de),p.a.createElement(R.CopyToClipboard,{text:de},p.a.createElement(m.a,{onClick:function(){return M.b.success("Copied successfully")}},p.a.createElement(E.a,null))))),p.a.createElement(b.a,null,p.a.createElement(c.a,{container:!0,spacing:3,alignItems:"center"},de&&t.adminWalletAddress.toLowerCase()===de.toLowerCase()&&p.a.createElement(c.a,{item:!0,xs:12,sm:6,md:6},p.a.createElement(d.a,{className:pe.walletdiv,mt:2},p.a.createElement(y.a,{variant:"h6",style:{color:"black"}},"Balance"),p.a.createElement(y.a,{variant:"h1"},K),p.a.createElement(d.a,{className:"".concat(pe.box," wallet_box")})))),p.a.createElement(c.a,{container:!0,spacing:1},p.a.createElement(c.a,{item:!0,lg:4,sm:4,md:4,xs:12},p.a.createElement(d.a,{className:pe.relfectionBox},p.a.createElement(y.a,{variant:"h4",style:{fontSize:"18px",fontWeight:"700"}},"OWNED NFT:",p.a.createElement("br",null)," ",u?u.length:0))),p.a.createElement(c.a,{item:!0,lg:4,sm:4,md:4,xs:12},p.a.createElement(d.a,{className:pe.relfectionBox},p.a.createElement(y.a,{variant:"h4",style:{fontSize:"18px",fontWeight:"700"}},"TOTAL EARNINGS:",p.a.createElement("br",null),null===t||void 0===t?void 0:t.totalReward," MOVR"))),p.a.createElement(c.a,{item:!0,lg:4,sm:4,md:4,xs:12},p.a.createElement(d.a,{className:pe.relfectionBox},p.a.createElement(f.a,{className:pe.claimButton},"CLAIM")))),p.a.createElement(d.a,{mt:5,mb:5},p.a.createElement(c.a,{container:!0,spacing:4},u&&u.map((function(e,t){return p.a.createElement(c.a,{item:!0,xs:6,sm:4,md:3,key:t},p.a.createElement(k.a,{data:e,index:t}))})),!z&&u&&0===u.length&&p.a.createElement(d.a,{width:"100%",textAlign:"center"},p.a.createElement(y.a,{variant:"h3",align:"center",style:{color:"#ccc"}},"No data found!!")),z&&p.a.createElement(d.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},p.a.createElement(y.a,{variant:"h3",align:"center",style:{color:"#fff"}},"Loading..."),p.a.createElement(C.a,null)))),p.a.createElement(x.a,{open:$,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},p.a.createElement(g.a,{id:"alert-dialog-title"}),p.a.createElement(v.a,null,p.a.createElement(h.a,{id:"alert-dialog-description",style:{maxWidth:"450px"}},p.a.createElement("label",{style:{color:"#000"},for:"fname"},"User Wallet Address"," "),p.a.createElement("input",{className:pe.dialoginputbox,type:"text",placeholder:"0xx00000",value:oe,onChange:function(e){return le(e.target.value)}}))),p.a.createElement(T.a,null,p.a.createElement(f.a,{style:{color:"#000"},onClick:function(){ee(!1)},autoFocus:!0,disabled:P},"Cancel"),p.a.createElement(f.a,{style:{marginLeft:"10px !important"},onClick:me,autoFocus:!0,disabled:""===oe||P},"Add ",P&&p.a.createElement(C.a,null)))),p.a.createElement(x.a,{open:ae,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},p.a.createElement(g.a,{id:"alert-dialog-title"}),p.a.createElement(v.a,null,p.a.createElement(h.a,{id:"alert-dialog-description",style:{maxWidth:"450px"}},p.a.createElement("label",{style:{color:"#000"},for:"fname"},"User Wallet Address"," "),p.a.createElement("input",{className:pe.dialoginputbox,type:"text",placeholder:"0xx00000",value:oe,onChange:function(e){return le(e.target.value)}}))),p.a.createElement(T.a,null,p.a.createElement(f.a,{style:{color:"#000"},onClick:function(){ie(!1)},autoFocus:!0,disabled:P},"Cancel"),p.a.createElement(f.a,{style:{marginLeft:"10px !important"},onClick:fe,autoFocus:!0,disabled:P||""===oe},"Remove ",P&&p.a.createElement(C.a,null)))))))}}}]);
//# sourceMappingURL=10.c652f759.chunk.js.map