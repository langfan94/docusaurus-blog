"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2500],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),f=a,g=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(g,u(u({ref:t},p),{},{components:n})):r.createElement(g,u({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1554:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],c={title:"golang/Mutex",date:new Date("2019-12-26T15:56:47.000Z"),tags:["golang"]},l="Mutex",i={permalink:"/golang-Mutex",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/golang-Mutex.md",source:"@site/blog/golang-Mutex.md",title:"golang/Mutex",description:"* Mutex \u662f\u4e92\u65a5\u9501\u3002",date:"2019-12-26T15:56:47.000Z",formattedDate:"December 26, 2019",tags:[{label:"golang",permalink:"/tags/golang"}],readingTime:.62,truncated:!1,authors:[],frontMatter:{title:"golang/Mutex",date:"2019-12-26T15:56:47.000Z",tags:["golang"]},prevItem:{title:"two-eggs",permalink:"/two-eggs"},nextItem:{title:"Javascript-decorators",permalink:"/Javascript-decorators"}},p={authorsImageUrls:[]},m=[{value:"func(* Mutex) Lock",id:"func-mutex-lock",level:2},{value:"func(* Mutex) Unlock",id:"func-mutex-unlock",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mutex \u662f\u4e92\u65a5\u9501\u3002"),(0,o.kt)("li",{parentName:"ul"},"0\u503c\u5c31\u662f unlocked \u72b6\u6001\u7684 Mutex"),(0,o.kt)("li",{parentName:"ul"},"Mutex \u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\u4e4b\u540e\u4e0d\u80fd\u88ab\u590d\u5236")),(0,o.kt)("h2",{id:"func-mutex-lock"},"func(* Mutex) Lock"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"    func (m *Mutex) Lock()\n")),(0,o.kt)("h2",{id:"func-mutex-unlock"},"func(* Mutex) Unlock"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"    func (m *Mutex) Unlock()\n")),(0,o.kt)("p",null,"\u89e3\u9501\u5df2\u7ecf\u89e3\u9501\u7684Mutex, \u8fd0\u884c\u65f6\u5019\u62a5\u9519"),(0,o.kt)("p",null,"\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u9501,\u7136\u540e\u53e6\u5916\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u89e3\u9501\u5b83"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'    package main\n\nimport (\n    "sync"\n    "time"\n)\n\n// Mutex lock \u53ef\u4ee5\u88ab\u522b\u7684\u7ebf\u7a0b unlock --------\nfunc main() {\n    var mu sync.Mutex\n    go func() {\n        mu.Lock()\n        time.Sleep(10 * time.Second)\n        mu.Unlock()\n    }()\n    time.Sleep(time.Second)\n    mu.Unlock()\n    select {}\n}\n')))}f.isMDXComponent=!0}}]);