(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221c57"],{cc89:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("exception-page",{attrs:{type:"404"}})},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exception"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.config[t.type].img}})]),n("div",{staticClass:"content"},[n("h1",[t._v(t._s(t.config[t.type].title))]),n("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),n("div",{staticClass:"action"},[n("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},a=[],o={404:{img:"/images/404.svg",title:"404",desc:"抱歉，你访问的页面不存在"},500:{img:"/images/500.svg",title:"500",desc:"抱歉，服务器出错了"}},l=o,r={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:l}},methods:{handleToHome:function(){this.$router.push({name:"Dashboard"})}}},p=r,u=n("2877"),d=Object(u["a"])(p,c,a,!1,null,null,null),g=d.exports,m={components:{ExceptionPage:g}},f=m,v=Object(u["a"])(f,s,i,!1,null,null,null);e["default"]=v.exports}}]);