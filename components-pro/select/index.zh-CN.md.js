webpackJsonp([227],{2283:function(t,e){t.exports={content:["section",["p","表单控件。"],["h2","何时使用"],["ul",["li",["p","弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"]],["li",["p","当选项少时（少于 5 项），建议直接将选项平铺，使用 ",["a",{title:null,href:"/components-pro/select-box"},"SelectBox"]," 是更好的选择。"]]]],meta:{category:"Pro Components",subtitle:"选择框",type:"Data Entry",title:"Select",filename:"components-pro/select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Select"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","combo"],["td","复合输入值"],["td","boolean"],["td","false"]],["tr",["td","searchable"],["td","是否可搜索"],["td","boolean"],["td","false"]],["tr",["td","optionsFilter"],["td","选项过滤"],["td","(record) => boolean"],["td"]],["tr",["td","checkValueOnOptionsChange"],["td","当选项改变时，检查并清除不在选项中的值"],["td","boolean"],["td","true"]],["tr",["td","dropdownMatchSelectWidth"],["td","下拉框匹配输入框宽度"],["td","boolean"],["td","true"]],["tr",["td","dropdownMenuStyle"],["td","下拉框菜单样式名"],["td","object"],["td"]],["tr",["td","options"],["td","下拉框选项数据源"],["td","DataSet"],["td"]],["tr",["td","primitiveValue"],["td","是否为原始值（建议以绑定的数据源Field的type来决定值类型，如type设为object相当于primitiveValue设为false）",["code","true"]," - 选项中valueField对应的值 ",["code","false"]," - 选项值对象"],["td","boolean"],["td"]],["tr",["td","optionRenderer"],["td","渲染Option本文的钩子"],["td","({ record, text, value }) => ReactNode"],["td"]]]],["p","更多属性请参考 ",["a",{title:null,href:"/components-pro/trigger-field/#TriggerField"},"TriggerField"],"。"],["h3","Select.OptGroup"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","label"],["td","选项组标题"],["td","string"],["td"]]]],["h3","Select.Option"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","value"],["td","选项值"],["td","any"],["td"]]]],["style","\n.code-box-demo .c7n-pro-select-wrapper {\n  margin-bottom: .1rem;\n}\n"]]}}});