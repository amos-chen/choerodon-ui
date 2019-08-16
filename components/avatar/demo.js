webpackJsonp([63],{2067:function(n,a,s){n.exports={badge:s(2431),basic:s(2432),dynamic:s(2433),type:s(2434)}},2431:function(n,a,s){n.exports={content:{"zh-CN":[["p","通常用于消息提示。"]],"en-US":[["p","Usually used for messages remind."]]},meta:{order:3,title:{"zh-CN":"带徽标的头像","en-US":"With Badge"},filename:"components/avatar/demo/badge.md",id:"components-avatar-demo-badge"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement("div",null,n.createElement("span",{style:{marginRight:24}},n.createElement(a.Badge,{count:1},n.createElement(a.Avatar,{shape:"square",icon:"person"}))),n.createElement("span",null,n.createElement(a.Badge,{dot:!0},n.createElement(a.Avatar,{shape:"square",icon:"person"}))))}}},2432:function(n,a,s){n.exports={content:{"zh-CN":[["p","头像有三种尺寸，两种形状可选。"]],"en-US":[["p","Three sizes and two shapes are available."]]},meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/avatar/demo/basic.md",id:"components-avatar-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement("div",null,n.createElement("div",null,n.createElement(a.Avatar,{size:64,icon:"person"}),n.createElement(a.Avatar,{size:"large",icon:"person"}),n.createElement(a.Avatar,{icon:"person"}),n.createElement(a.Avatar,{size:"small",icon:"person"})),n.createElement("div",null,n.createElement(a.Avatar,{shape:"square",size:64,icon:"person"}),n.createElement(a.Avatar,{shape:"square",size:"large",icon:"person"}),n.createElement(a.Avatar,{shape:"square",icon:"person"}),n.createElement(a.Avatar,{shape:"square",size:"small",icon:"person"})))},style:"\n#components-avatar-demo-basic .c7n-avatar {\n  margin-top: 16px;\n  margin-right: 16px;\n}\n"}},2433:function(n,a,s){n.exports={content:{"zh-CN":[["p","对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。"]],"en-US":[["p","For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar."]]},meta:{order:2,title:{"zh-CN":"自动调整字符大小","en-US":"Autoset Font Size"},filename:"components/avatar/demo/dynamic.md",id:"components-avatar-demo-dynamic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> UserList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'U\'</span><span class="token punctuation">,</span> <span class="token string">\'Lucy\'</span><span class="token punctuation">,</span> <span class="token string">\'Tom\'</span><span class="token punctuation">,</span> <span class="token string">\'Edward\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'#f56a00\'</span><span class="token punctuation">,</span> <span class="token string">\'#7265e6\'</span><span class="token punctuation">,</span> <span class="token string">\'#ffbf00\'</span><span class="token punctuation">,</span> <span class="token string">\'#00a2ae\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Autoset</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      user<span class="token punctuation">:</span> UserList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> colorList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  changeUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> index <span class="token operator">=</span> UserList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      user<span class="token punctuation">:</span> index <span class="token operator">&lt;</span> UserList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> UserList<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> UserList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> index <span class="token operator">&lt;</span> colorList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> colorList<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> colorList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>color<span class="token punctuation">,</span> verticalAlign<span class="token punctuation">:</span> <span class="token string">\'middle\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> verticalAlign<span class="token punctuation">:</span> <span class="token string">\'middle\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeUser<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Change\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Autoset</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),o=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),e=s(50),c=["U","Lucy","Tom","Edward"],l=["#f56a00","#7265e6","#ffbf00","#00a2ae"],u=function(s){function u(s){n(this,u);var t=a(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,s));return t.changeUser=function(){var n=c.indexOf(t.state.user);t.setState({user:n<c.length-1?c[n+1]:c[0],color:n<l.length-1?l[n+1]:l[0]})},t.state={user:c[0],color:l[0]},t}return t(u,s),o(u,[{key:"render",value:function(){return p.createElement("div",null,p.createElement(e.Avatar,{style:{backgroundColor:this.state.color,verticalAlign:"middle"},size:"large"},this.state.user),p.createElement(e.Button,{size:"small",style:{marginLeft:16,verticalAlign:"middle"},onClick:this.changeUser},"Change"))}}]),u}(p.Component);return p.createElement(u,null)}}},2434:function(n,a,s){n.exports={content:{"zh-CN":[["p","支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。"]],"en-US":[["p","Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors."]]},meta:{order:1,title:{"zh-CN":"类型","en-US":"Type"},filename:"components/avatar/demo/type.md",id:"components-avatar-demo-type"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>U<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>USER<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#f56a00\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fde3cf\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>U<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#87d068\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement("div",null,n.createElement(a.Avatar,{icon:"person"}),n.createElement(a.Avatar,null,"U"),n.createElement(a.Avatar,null,"USER"),n.createElement(a.Avatar,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),n.createElement(a.Avatar,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},"U"),n.createElement(a.Avatar,{style:{backgroundColor:"#87d068"},icon:"user"}))},style:"\n#components-avatar-demo-type .c7n-avatar {\n  margin-top: 16px;\n  margin-right: 16px;\n}\n"}}});