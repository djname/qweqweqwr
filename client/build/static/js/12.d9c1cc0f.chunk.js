(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[12],{407:function(t,c,e){},423:function(t,c,e){"use strict";e.r(c);var n=e(69),a=e(0),s=e(13),i=e(57);e(407);var l=e(3);c.default=function(){var t=Object(s.g)(),c=Object(s.j)().url,e=Object(a.useState)([]),o=Object(n.a)(e,2),j=o[0],b=o[1];return Object(a.useEffect)((function(){Object(i.a)({url:"/admin/getLabel",method:"post",data:{}}).then((function(t){console.log(t),b(t.data.data)}))}),[]),Object(l.jsxs)("div",{className:"tags_box",children:[Object(l.jsxs)("div",{className:"t",children:[Object(l.jsx)("h2",{children:"\u6587\u7ae0\u6807\u7b7e"}),Object(l.jsxs)("p",{children:["\u76ee\u524d\u5171\u8ba1",j.length,"\u4e2a\u6807\u7b7e"]})]}),Object(l.jsx)("ul",{children:j.map((function(e,n){return Object(l.jsx)("li",{onClick:function(){t.push("".concat(c,"/").concat(e.id))},children:e.name},e.id)}))})]})}}}]);