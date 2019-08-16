webpackJsonp([39],{2165:function(n,a,s){n.exports={basic:s(2683),character:s(2684),clear:s(2685),disabled:s(2686),half:s(2687),text:s(2688)}},2683:function(n,a,s){n.exports={content:{"zh-CN":[["p","最简单的用法。"]],"en-US":[["p","The simplest usage."]]},meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/rate/demo/basic.md",id:"components-rate-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement(a.Rate,null)}}},2684:function(n,a,s){n.exports={content:{"zh-CN":[["p","可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。"]],"en-US":[["p","Replace the default star to other character like alphabet, digit, iconfont or even Chinese word."]]},meta:{order:5,title:{"zh-CN":"其他字符","en-US":"Other Character"},filename:"components/rate/demo/character.md",id:"components-rate-demo-character"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>heart<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> allowHalf <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">character</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>好<span class="token punctuation">"</span></span> <span class="token attr-name">allowHalf</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement("div",null,n.createElement(a.Rate,{character:n.createElement(a.Icon,{type:"heart"}),allowHalf:!0}),n.createElement("br",null),n.createElement(a.Rate,{character:"A",allowHalf:!0,style:{fontSize:36}}),n.createElement("br",null),n.createElement(a.Rate,{character:"好",allowHalf:!0}))}}},2685:function(n,a,s){n.exports={content:{"zh-CN":[["p","支持允许或者禁用清除。"]],"en-US":[["p","Support set allow to clear star when click again."]]},meta:{order:4,title:{"zh-CN":"清除","en-US":"Clear star"},filename:"components/rate/demo/clear.md",id:"components-rate-demo-clear"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> allowClear<span class="token punctuation">:</span> <span class="token boolean">true</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">allowClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> allowClear<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement("div",null,n.createElement(a.Rate,{defaultValue:3})," allowClear: true",n.createElement("br",null),n.createElement(a.Rate,{allowClear:!1,defaultValue:3})," allowClear: false")}}},2686:function(n,a,s){n.exports={content:{"zh-CN":[["p","只读，无法进行鼠标交互。"]],"en-US":[["p","Read only, can't use mouse to interact."]]},meta:{order:3,title:{"zh-CN":"只读","en-US":"Read only"},filename:"components/rate/demo/disabled.md",id:"components-rate-demo-disabled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement(a.Rate,{disabled:!0,defaultValue:2})}}},2687:function(n,a,s){n.exports={content:{"zh-CN":[["p","支持选中半星。"]],"en-US":[["p","Support select half star."]]},meta:{order:1,title:{"zh-CN":"半星","en-US":"Half star"},filename:"components/rate/demo/half.md",id:"components-rate-demo-half"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">allowHalf</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2.5</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(7),s(50));return n.createElement(a.Rate,{allowHalf:!0,defaultValue:2.5})}}},2688:function(n,a,s){n.exports={content:{"zh-CN":[["p","给评分组件加上文案展示。"]],"en-US":[["p","Add copywriting in rate components."]]},meta:{order:2,title:{"zh-CN":"文案展现","en-US":"Show copywriting"},filename:"components/rate/demo/text.md",id:"components-rate-demo-text"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Rate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Rater</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">{</span>value <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>c7n-rate-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> stars<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rater</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var e=s(0),p=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),o=s(50),c=function(s){function c(){var s,t,e,p;n(this,c);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return t=e=a(this,(s=c.__proto__||Object.getPrototypeOf(c)).call.apply(s,[this].concat(l))),e.state={value:3},e.handleChange=function(n){e.setState({value:n})},p=t,a(e,p)}return t(c,s),p(c,[{key:"render",value:function(){var n=this.state.value;return e.createElement("span",null,e.createElement(o.Rate,{onChange:this.handleChange,value:n}),n&&e.createElement("span",{className:"c7n-rate-text"},n," stars"))}}]),c}(e.Component);return e.createElement(c,null)}}}});