import{o as a,c as r,F as n,r as g,a as e,d as o,w as u,b as p,t as h,u as t,R as f,h as y}from"./index-DdrtVJcM.js";const b=[{id:1,name:"Days Of Our Lives",href:"release/music",imageSrc:"/src/assets/images/release/day-of-our-lives.png",imageAlt:"Days Of Our Lives"},{id:2,name:"Mystic Melodiescape",href:"release/music",imageSrc:"/src/assets/images/release/mystic-melodiescape.png",imageAlt:"Mystic Melodiescape"},{id:3,name:"Harmony's Embrace",href:"release/music",imageSrc:"/src/assets/images/release/harmony's-embrace.png",imageAlt:"Harmony's Embrace"},{id:4,name:"Urban Groove Odyssey",href:"release/music",imageSrc:"/src/assets/images/release/urban-groove-odyssey.png",imageAlt:"Urban Groove Odyssey"},{id:5,name:"Interstellar anthem",href:"release/music",imageSrc:"/src/assets/images/release/interstellar-anthem.png",imageAlt:"Interstellar anthem"},{id:6,name:"Eternal Echoes",href:"release/music",imageSrc:"/src/assets/images/release/eternal-echoes.png",imageAlt:"Eternal Echoes"},{id:7,name:"Neon dreamscape",href:"release/music",imageSrc:"/src/assets/images/release/neon-dreamscape.png",imageAlt:"Neon dreamscape"}],_=[{id:1,name:"2024"},{id:2,name:"2023"},{id:3,name:"2022"},{id:4,name:"2021"}],v={releases:b,category:_},w={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none lg:h-80 rounded-t"},S=["src","alt"],A={class:"flex justify-between p-3 bg-surface rounded-b"},E={class:"p-3"},O={class:"text-title-1 font-body font-bold"},j={__name:"cardMusic",props:{limit:{type:Number,default:null},music:{type:Object,required:!0}},setup(m){const{releases:i,category:x}=v,l=m,d=l.limit?i.slice(0,l.limit):i;return(N,c)=>(a(),r(n,null,[(a(!0),r(n,null,g(t(d),s=>(a(),r("li",{key:s.id,class:"group relative"},[e("div",w,[e("img",{src:s.imageSrc,alt:s.imageAlt,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,S)]),e("div",A,[e("div",E,[e("h3",O,[o(t(f),{to:s.to},{default:u(()=>[c[0]||(c[0]=e("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1)),p(" "+h(s.name),1)]),_:2},1032,["to"])])])])]))),128)),o(t(y))],64))}};export{j as _,v as r};