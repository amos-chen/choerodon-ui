webpackJsonp([141],{2146:function(t,d){t.exports={content:["section",["p","模态对话框。"],["h2","何时使用"],["p","需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 ",["code","Modal"]," 在当前页面正中打开一个浮层，承载相应的操作。"],["p","另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 ",["code","Modal.confirm()"]," 等方法。"]],meta:{type:"Feedback",category:"Components",subtitle:"对话框",title:"Modal",filename:"components/modal/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","afterClose"],["td","Modal 完全关闭后的回调"],["td","function"],["td","无"]],["tr",["td","bodyStyle"],["td","Modal body 样式"],["td","object"],["td","{}"]],["tr",["td","cancelText"],["td","取消按钮文字"],["td","string"],["td","取消"]],["tr",["td","closable"],["td","是否显示右上角的关闭按钮"],["td","boolean"],["td","true"]],["tr",["td","confirmLoading"],["td","确定按钮 loading"],["td","boolean"],["td","无"]],["tr",["td","destroyOnClose"],["td","关闭时销毁 Modal 里的子元素"],["td","boolean"],["td","false"]],["tr",["td","footer"],["td","底部内容，当不需要默认底部按钮时，可以设为 ",["code","footer={null}"]],["td","string","|","ReactNode"],["td","确定取消按钮"]],["tr",["td","getContainer"],["td","指定 Modal 挂载的 HTML 节点"],["td","(instance): HTMLElement"],["td","() => document.body"]],["tr",["td","mask"],["td","是否展示遮罩"],["td","Boolean"],["td","true"]],["tr",["td","maskClosable"],["td","点击蒙层是否允许关闭"],["td","boolean"],["td","true"]],["tr",["td","maskStyle"],["td","遮罩样式"],["td","object"],["td","{}"]],["tr",["td","okText"],["td","确认按钮文字"],["td","string"],["td","确定"]],["tr",["td","okType"],["td","确认按钮类型"],["td","string"],["td","primary"]],["tr",["td","disableOk"],["td","Ok按钮是否禁用"],["td","boolean"],["td",["code","false"]]],["tr",["td","disableCancel"],["td","Cancel按钮是否禁用"],["td","boolean"],["td",["code","false"]]],["tr",["td","style"],["td","可用于设置浮层的样式，调整浮层位置等"],["td","object"],["td","-"]],["tr",["td","title"],["td","标题"],["td","string","|","ReactNode"],["td","无"]],["tr",["td","visible"],["td","对话框是否可见"],["td","boolean"],["td","无"]],["tr",["td","width"],["td","宽度"],["td","string","|","number"],["td","520"]],["tr",["td","wrapClassName"],["td","对话框外层容器的类名"],["td","string"],["td","-"]],["tr",["td","zIndex"],["td","设置 Modal 的 ",["code","z-index"]],["td","Number"],["td","1000"]],["tr",["td","onCancel"],["td","点击遮罩层或右上角叉或取消按钮的回调"],["td","function(e)"],["td","无"]],["tr",["td","onOk"],["td","点击确定回调"],["td","function(e)"],["td","无"]],["tr",["td","funcType"],["td","按钮功能"],["td","string"],["td","无"]]]],["h4","注意"],["blockquote",["p",["code","<Modal />"]," 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 ",["code","destroyOnClose"],"。"]],["h3","Modal.SideBar"],["p","侧边栏弹出窗，表中无说明的API同Modal\n| 参数 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| alwaysCanCancel | 取消按钮是否一直可按，无论是否有confirmLoading | boolean | false |"],["h3","Modal.method()"],["p","包括："],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","以上均为一个函数，参数为 object，具体属性如下："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","cancelText"],["td","取消按钮文字"],["td","string"],["td","取消"]],["tr",["td","className"],["td","容器类名"],["td","string"],["td","-"]],["tr",["td","content"],["td","内容"],["td","string","|","ReactNode"],["td","无"]],["tr",["td","iconType"],["td","图标 Icon 类型"],["td","string"],["td","question-circle"]],["tr",["td","maskClosable"],["td","点击蒙层是否允许关闭"],["td","Boolean"],["td",["code","false"]]],["tr",["td","okText"],["td","确认按钮文字"],["td","string"],["td","确定"]],["tr",["td","okType"],["td","确认按钮类型"],["td","string"],["td","primary"]],["tr",["td","title"],["td","标题"],["td","string","|","ReactNode"],["td","无"]],["tr",["td","width"],["td","宽度"],["td","string","|","number"],["td","416"]],["tr",["td","zIndex"],["td","设置 Modal 的 ",["code","z-index"]],["td","Number"],["td","1000"]],["tr",["td","onCancel"],["td","取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭"],["td","function"],["td","无"]],["tr",["td","onOk"],["td","点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭"],["td","function"],["td","无"]]]],["p","以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> ref <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nref<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const ref = Modal.info();\nref.destroy();"]],["style","\n.code-box-demo .c7n-btn {\n  margin-right: 8px;\n}\n"]]}}});