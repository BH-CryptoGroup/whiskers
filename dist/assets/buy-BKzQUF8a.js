import{u as x,a as f,j as s,T as _,B as h,b as m,c as i,Y as r,d as j,L as g,H as k,e as v}from"./index-B-xbCgVJ.js";import{T as S}from"./ton-connect-modal-0_4Guo_p.js";const C="_buy__wrapper_djb0w_1",B="_buy__container_djb0w_10",N="_buy__title_and_logo_djb0w_17",W="_buy__title_djb0w_17",z="_buy__heading_djb0w_26",M="_buy__buy_rows_djb0w_34",T="_buy__balance_djb0w_39",O="_buy__balance_icon_djb0w_48",F="_buy__balance_value_djb0w_53",H="_buy__footer_connect_djb0w_59",I="_buy__footer_connect_container_djb0w_70",R="_buy__footer_connect_score_djb0w_77",P="_buy__footer_connect_tokens_djb0w_83",K="_buy__footer_connect_wallet_djb0w_88",n={buy__wrapper:C,buy__container:B,buy__title_and_logo:N,buy__title:W,buy__heading:z,buy__buy_rows:M,buy__balance:T,buy__balance_icon:O,buy__balance_value:F,buy__footer_connect:H,buy__footer_connect_container:I,buy__footer_connect_score:R,buy__footer_connect_tokens:P,buy__footer_connect_wallet:K},p=[{id:1,countSpins:100,countWhisks:5},{id:2,countSpins:250,countWhisks:12},{id:3,countSpins:500,countWhisks:23},{id:4,countSpins:1e3,countWhisks:44}],U="_buy_row__wrapper_en39z_1",Y="_buy_row__container_en39z_8",q="_buy_row__spins_en39z_13",A="_buy_row__whisks_en39z_18",c={buy_row__wrapper:U,buy_row__container:Y,buy_row__spins:q,buy_row__whisks:A},$=u=>{const o=x({query:"(max-width: 600px)"}),{updateBonusSpins:e}=f(),{id:l,countSpin:a,countWhisk:b,userId:t}=u,w=async d=>{if(t){const y=await m(t,{countSpins:d});(y==null?void 0:y.status)===200?(e(d),i.success(`You bought ${d} spins`,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:r})):i.error("Can't buy spins.",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:r})}else i.error("Can't buy spins.",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:r})};return s.jsx("div",{className:c.buy_row__wrapper,children:s.jsxs("div",{className:c.buy_row__container,children:[s.jsxs("div",{className:c.buy_row__spins,children:[s.jsx(_,{fontSize:o?"26px":"50px",fontFamily:"Roundy Rainbows, sans-serif",children:a}),s.jsx(_,{fontSize:o?"16px":"24px",fontFamily:"Montserrat, sans-serif",children:"spins"})]}),s.jsxs("div",{className:c.buy_row__whisks,children:[s.jsxs(_,{fontSize:o?"16px":"28px",fontFamily:"Montserrat, sans-serif",children:[b,"K"]}),s.jsx(_,{fontSize:o?"16px":"26px",fontFamily:"Montserrat, sans-serif",children:"WHISK"})]}),s.jsx(h,{onClick:()=>w(a),fontFamily:"Montserrat, sans-serif",height:o?"28px":"52px",fontSize:o?"14px":"28px",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1), inset 0px 1px 1px rgb(255 161 161 / 60%), inset 0px -3px 2px rgba(0, 0, 0, 0.2)",text:"Buy now",fontWeight:"normal",width:"fit-content",textTransform:"none",borderRadius:"24px"})]})},l)},E="/whiskers/assets/left-arrow-B-jbrqB8.png",L=()=>{const u=j(),o=x({query:"(max-width: 600px)"}),{userData:e,updateUnclaimedWhisks:l}=f(),a=()=>{u(-1)},b=()=>{e!=null&&e.userId&&v(e.userId).then(t=>{l(),t.status===200&&i.success(`You claimed ${e==null?void 0:e.unclaimedWhisks} whisks`,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:r})}).catch(()=>{i.error("Cannot claim whisks. Try again",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:r})})};return s.jsx("div",{className:n.buy__wrapper,children:s.jsxs("div",{className:n.buy__container,children:[s.jsxs("div",{className:n.buy__title_and_logo,children:[s.jsx(g,{fontSize:"42px"}),s.jsx("span",{className:n.buy__title,children:s.jsx(k,{className:n.buy__heading,level:"h1",children:"Spin&Earn"})})]}),s.jsx(_,{fontSize:"16px",fontFamily:"Montserrat, sans-serif",children:"Buy bonus spins with WHISK"}),s.jsx("div",{className:n.buy__buy_rows,children:p&&p.map(t=>s.jsx($,{id:t.id,countSpin:t.countSpins,countWhisk:t.countWhisks,userId:e==null?void 0:e.userId},t.id))}),s.jsxs("div",{className:n.buy__balance,children:[s.jsx("img",{onClick:a,src:E,className:n.buy__balance_icon,alt:"back to main screen"}),s.jsxs("div",{className:n.buy__balance_value,children:[s.jsx(_,{fontSize:"14px",fontFamily:"Montserrat, sans-serif",children:"Wallet balance"}),s.jsx(_,{fontSize:"16px",fontFamily:"Montserrat, sans-serif",children:"1.345.584 WHISK"})]})]}),s.jsx("div",{className:n.buy__footer_connect,children:s.jsxs("div",{className:n.buy__footer_connect_container,children:[s.jsxs("div",{className:n.buy__footer_connect_score,children:[s.jsx(_,{fontSize:o?"18px":"40px",children:"Unclaimed whisk"}),s.jsxs("div",{className:n.buy__footer_connect_tokens,children:[s.jsx(_,{fontSize:o?"30px":"50px",fontFamily:"Roundy Rainbows, sans-serif",children:(e==null?void 0:e.points)||0}),s.jsx(h,{onClick:b,fontFamily:"Montserrat, sans-serif",height:o?"24px":"42px",fontSize:o?"16px":"40px",backgroundColor:"#0080bb",text:"Claim tokens",fontWeight:"normal",width:"fit-content",textTransform:"none",borderRadius:"24px"})]})]}),s.jsx("div",{className:n.buy__footer_connect_wallet,children:s.jsx(S,{})})]})})]})})},J=()=>s.jsx(L,{});export{J as default};
