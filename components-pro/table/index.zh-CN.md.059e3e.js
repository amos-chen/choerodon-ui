(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1679:function(t,d){t.exports={content:["section",["p","展示行列数据。"],["h2","何时使用"],["ul",["li",["p","当有大量结构化的数据需要展现时；"]],["li",["p","当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"]]]],meta:{category:"Pro Components",cols:1,type:"Data Display",title:"Table",subtitle:"表格",filename:"components-pro/table/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","header"],["td","表头"],["td","ReactNode ","|"," (records) => ReactNode"],["td"]],["tr",["td","footer"],["td","表脚"],["td","ReactNode ","|"," (records) => ReactNode"],["td"]],["tr",["td","border"],["td","是否显示边框"],["td","boolean"],["td","true"]],["tr",["td","selectionMode"],["td","选择记录的模式, 可选值: ",["code","rowbox"]," ",["code","click"]," ",["code","dblclick"]," ",["code","mousedown"]," ",["code","none"]],["td","string"],["td","'rowbox'"]],["tr",["td","onRow"],["td","设置行属性"],["td","({ dataSet, record, index, expandedRow }) => object"],["td"]],["tr",["td","buttons"],["td","功能按钮，内置按钮可添加 ",["code","afterClick"]," 钩子，用于执行除了默认行为外的动作，可选值：",["code","add"]," ",["code","delete"]," ",["code","remove"]," ",["code","save"]," ",["code","query"]," ",["code","reset"]," ",["code","expandAll"]," ",["code","collapseAll"]," ",["code","export"]," 或 数组 或 自定义按钮，数组为可选值字符串+按钮配置属性对象"],["td","string ","|"," ","[","string, object","]"," ","|"," ReactNode ","|"," object"],["td"]],["tr",["td","queryFields"],["td","自定义查询字段组件或默认组件属性，默认会根据 queryDataSet 中定义的 field 类型自动匹配组件"],["td","ReactNode[] ","|"," object"],["td"]],["tr",["td","queryFieldsLimit"],["td","头部显示的查询字段的数量，超出限制的查询字段放入弹出窗口"],["td","number"],["td"]],["tr",["td","queryBar"],["td","查询条, 可选值为钩子或者内置类型：",["code","advancedBar"]," ",["code","normal"]," ",["code","bar"]," ",["code","none"]],["td","string ","|"," ({ dataSet, queryDataSet, buttons, pagination, queryFields, queryFieldsLimit }) => ReactNode"],["td","'normal'"]],["tr",["td","rowHeight"],["td","行高"],["td","number ","|"," auto"],["td","30"]],["tr",["td","defaultRowExpanded"],["td","默认行是否展开，当 dataSet 没有设置 expandField 时才有效"],["td","boolean"],["td","false"]],["tr",["td","expandRowByClick"],["td","通过点击行来展开子行"],["td","boolean"],["td","false"]],["tr",["td","expandedRowRenderer"],["td","展开行渲染器"],["td","({ dataSet, record }) => ReactNode"],["td"]],["tr",["td","expandIcon"],["td","自定义展开图标"],["td","({ prefixCls, expanded, expandable, needIndentSpaced, record, onExpand }) => ReactNode"],["td"]],["tr",["td","expandIconColumnIndex"],["td","展开图标所在列索引"],["td","number"],["td"]],["tr",["td","indentSize"],["td","展示树形数据时，每层缩进的宽度"],["td","number"],["td","15"]],["tr",["td","filter"],["td","数据过滤， 返回值 true - 显示 false - 不显示"],["td","(record) => boolean"],["td"]],["tr",["td","mode"],["td","表格展示的模式, tree 需要配合 dataSet 的",["code","idField"],"和",["code","parentField"],"来展示，可选值: ",["code","list"]," ",["code","tree"]],["td","string"],["td","'list'"]],["tr",["td","editMode"],["td","表格编辑的模式，可选值: ",["code","cell"]," ",["code","inline"]],["td","string"],["td","'cell'"]],["tr",["td","filterBarFieldName"],["td",["code","queryBar"],"为",["code","bar"],"时，直接输入的过滤条件的字段名"],["td","string"],["td","'params'"]],["tr",["td","filterBarPlaceholder"],["td",["code","queryBar"],"为",["code","bar"],"时输入框的占位符"],["td","string"],["td"]],["tr",["td","pagination"],["td","分页器，参考",["a",{title:null,href:"#pagination"},"配置项"],"或 ",["a",{title:null,href:"/components/pagination/"},"pagination"],"，设为 false 时不展示分页"],["td","object ","|"," false"],["td"]],["tr",["td","highLightRow"],["td","当前行高亮"],["td","boolean"],["td","true"]],["tr",["td","selectedHighLightRow"],["td","勾选行高亮"],["td","boolean"],["td","false"]],["tr",["td","columnResizable"],["td","可调整列宽"],["td","boolean"],["td","true"]],["tr",["td","pristine"],["td","显示原始值"],["td","boolean"],["td","false"]],["tr",["td","onExpand"],["td","点击展开图标时触发"],["td","(expanded, record) => void"],["td"]],["tr",["td","virtual"],["td","是否开启虚拟滚动,当设置表格高度 ",["code","style={{ height: xxx }}"]," 时有效"],["td","boolean"],["td","false"]],["tr",["td","virtualSpin"],["td","是否开启虚拟滚动Spin"],["td","boolean"],["td","false"]]]],["p","更多属性请参考 ",["a",{title:null,href:"/components-pro/core/#DataSetComponent"},"DataSetComponent"],"。"],["h3","Table.Column"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","name"],["td","列对照的字段名"],["td","string"],["td"]],["tr",["td","width"],["td","列宽，不推荐给所有列设置宽度，而是给某一列不设置宽度达到自动宽度的效果"],["td","number"],["td"]],["tr",["td","minWidth"],["td","最小列宽"],["td","number"],["td","100"]],["tr",["td","header"],["td","列头"],["td","ReactNode ","|"," (dataSet, name) => ReactNode"],["td"]],["tr",["td","footer"],["td","列脚"],["td","ReactNode ","|"," (dataSet, name) => ReactNode"],["td"]],["tr",["td","renderer"],["td","单元格渲染回调"],["td","({ value, text, name, record, dataSet }) => ReactNode"],["td"]],["tr",["td","editor"],["td","编辑器, 设为",["code","true"],"时会根据 field 的 type 自动匹配编辑器。不可编辑请使用 ",["code","false"]," 值，而不是在控件上加 disabled。"],["td","FormField ","|"," ((record, name) => FormField ","|"," boolean) ","|"," boolean"],["td"]],["tr",["td","lock"],["td","是否锁定， 可选值 ",["code","false"]," ",["code","true"]," ",["code","left"]," ",["code","right"]],["td","boolean","|"," string"],["td","false"]],["tr",["td","align"],["td","文字对齐方式，可选值： ",["code","left"]," ",["code","center"]," ",["code","right"]],["td","string"],["td"]],["tr",["td","resizable"],["td","是否可调整宽度"],["td","boolean"],["td","true"]],["tr",["td","sortable"],["td","是否可排序（后端请求排序，前端排序请自定义 header 自行实现）"],["td","boolean"],["td","false"]],["tr",["td","style"],["td","列单元格内链样式"],["td","object"],["td"]],["tr",["td","className"],["td","列单元格样式名"],["td","string"],["td"]],["tr",["td","headerStyle"],["td","列头内链样式"],["td","string"],["td"]],["tr",["td","headerClassName"],["td","列头样式名"],["td","string"],["td"]],["tr",["td","footerStyle"],["td","列脚内链样式"],["td","string"],["td"]],["tr",["td","footerClassName"],["td","列脚样式名"],["td","string"],["td"]],["tr",["td","help"],["td","额外信息，常用于提示"],["td",["code","string"]],["td"]],["tr",["td","showHelp"],["td","展示提示信息的方式。可选值 ",["code","tooltip"]," ",["code","newLine"]," ",["code","none"]],["td","string"],["td","'tooltip'"]],["tr",["td","onCell"],["td","设置单元格属性"],["td","({ dataSet, record, column }) => object"],["td"]],["tr",["td","command"],["td","行操作按钮集，该值为数组 或 返回数组的钩子，内置按钮可添加 ",["code","afterClick"]," 钩子，用于执行除了默认行为外的动作，数组可选值：",["code","edit"]," ",["code","delete"]," 或 ","[",["code","edit"],"|"," ",["code","delete"]," , 按钮配置属性对象","]"," 或 自定义按钮"],["td","(string ","|"," ","[","string, object","]"," ","|"," ReactNode)[] ","|"," ({ dataSet, record }) => (string ","|"," ","[","string, object","]"," ","|"," ReactNode ","|"," object )[]"],["td"]],["tr",["td","hidden"],["td","隐藏"],["td","boolean"],["td"]],["tr",["td","tooltip"],["td","用 Tooltip 显示单元格内容。可选值 ",["code","none"]," ",["code","always"]," ",["code","overflow"]],["td","string"],["td","'none'"]]]],["h3","Table.FilterBar"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","paramName"],["td","输入的过滤条件的字段名"],["td","string"],["td","'params'"]],["tr",["td","placeholder"],["td","输入框的占位符"],["td","string"],["td","'过滤表'"]]]],["p","更多属性请参考 ",["code","Table"]," ",["code","queryBar"]," 属性的钩子参数。"],["h3","Table.AdvancedQueryBar"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","queryFieldsLimit"],["td","头部显示的查询字段的数量，超出限制的查询字段放入弹出窗口"],["td","number"],["td","1"]]]],["p","更多属性请参考 ",["code","Table"]," ",["code","queryBar"]," 属性的钩子参数。"],["h3","Table.ToolBar"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","queryFieldsLimit"],["td","头部显示的查询字段的数量，超出限制的查询字段放入弹出窗口"],["td","number"],["td","1"]],["tr",["td","pagination"],["td","分页器，参考",["a",{title:null,href:"/components-pro/pagination/"},"pagination"]],["td","PaginationComponent"],["td","null"]]]],["p","更多属性请参考 ",["code","Table"]," ",["code","queryBar"]," 属性的钩子参数。"],["h3","pagination"],["p","分页的配置项。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","position"],["td","指定分页显示的位置"],["td","'top' ","|"," 'bottom' ","|"," 'both'"],["td","'bottom'"]]]],["h3","spin"],["p","spin的配置项。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","indicator"],["td","加载指示符"],["td","ReactElement"],["td","-"]],["tr",["td","spinning"],["td","是否旋转"],["td","boolean"],["td","-"]]]],["p","更多案列和属性请参考 ",["a",{title:null,href:"/components-pro/spin/"},"Spin"],"。"]]}}}]);