### 什么是datacom
### What is datacom

`datacom`，全称是`data components`，数据驱动的组件。
`datacom`, the full name is `data components`, data-driven components.

这种组件也是vue组件，是一种子类，是基础组件的再封装。
This kind of component is also a vue component, a subclass, and a re-encapsulation of the basic component.

相比于普通的vue组件，`datacom`组件的特点是，给它绑定一个data，data中包含**一组**候选数据，即可自动渲染出结果。
Compared with the ordinary vue component, the characteristic of the `datacom` component is that it binds a piece of data, and the data contains a group of candidate data, and the result can be automatically rendered.

比如 [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456) 组件，给它绑定一个data，即可直接生成一组选择框。
For example, [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456) component, bind a data to it, you can directly generate a set of select boxes.

```html
<template>
    <!-- 传入符合 datacom 规范的数据，即可渲染出一组 checkbox -->
    <!-- 使用 v-model 双向绑定 checkbox 的选中值 -->
    <uni-data-checkbox v-model="value" :localdata="options" multiple></uni-data-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        value: ['sh'],
        options: [
          {value: 'bj',text: '北京'},
          {value: 'sh',text: '上海'},
          {value: 'gz',text: '广州'}
        ],
      };
    },
  };
</script>
```

而使用基础组件的写法，代码量则要增加很多，如下：
With the writing of basic components, the amount of code will increase a lot, as follows:

```html
<template>
    <view>
        <view class="uni-list">
            <checkbox-group @change="checkboxChange">
                <label class="uni-list-cell" v-for="item in items" :key="item.value">
                    <view>
                        <checkbox :value="item.value" :checked="item.checked" />
                    </view>
                    <view>{{item.name}}</view>
                </label>
            </checkbox-group>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                items: [{
                        value: 'bj',
                        name: '北京'
                    },
                    {
                        value: 'sh',
                        name: '上海',
                        checked: 'true'
                    },
                    {
                        value: 'gz',
                        name: '广州'
                    }
                ]
            }
        },
        methods: {
            checkboxChange: function (e) {
                var items = this.items,
                    values = e.detail.value;
                for (var i = 0, lenI = items.length; i < lenI; ++i) {
                    const item = items[i]
                    if(values.includes(item.value)){
                        this.$set(item,'checked',true)
                    }else{
                        this.$set(item,'checked',false)
                    }
                }
            }
        }
    }
</script>

<style>
.uni-list-cell {
    justify-content: flex-start
}
</style>
```


图例：
legend:
![](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/f5c64490-2994-11eb-a554-03adfa49bb37_0.jpg)

### 什么是datacom组件规范
### What is datacom component specification

显然，datacom组件不是只有一个`<uni-data-checkbox>`，radio、check、select、picker、segement、tree...还有很多组件都可以成为datacom组件，变成类似`<uni-data-picker>`。
Obviously, the datacom component is not only one `<uni-data-checkbox>`, radio, check, select, picker, segment, tree... and many other components can become datacom components and become similar to `<uni-data- picker>`.

那么“datacom组件规范”，就定义了什么是`datacom组件`，以及它们的互联互通标准。
Then "datacom component specification" defines what is `datacom component` and their interconnection standards.

所有开发者，都可以在 [DCloud插件市场](https://ext.dcloud.net.cn) 提交符合`datacom组件规范`的组件。在插件市场组件分类下可以找到所有已上传的datacom组件，[详见](https://ext.dcloud.net.cn/search?&q=DataCom&orderBy=Relevance)
All developers can submit components that comply with the `datacom component specification` in [DCloud Plugin Market](https://ext.dcloud.net.cn). You can find all uploaded datacom components under the plug-in market component category, [see details](https://ext.dcloud.net.cn/search?&q=DataCom&orderBy=Relevance)

详细的“datacom组件规范”见后文。
The detailed "datacom component specification" is shown later.

### datacom对于开发者的好处
### Benefits of datacom for developers

datacom组件，对服务器数据规范、前端组件的数据输入和输出规范，做了定义。它提升了产业的标准化程度、细化了分工，提升了效率。
The datacom component defines the server data specifications and the data input and output specifications of the front-end components. It improves the standardization of the industry, refines the division of labor, and improves efficiency.

且不论产业影响，对开发者个人而言，显而易见的好处也很多：
Regardless of the industry impact, there are many obvious benefits for developers:

- 更少的代码量。从前述的传统写法对比可见，使用datacom的前端页面，代码量可减少一半以上。
- Less code. It can be seen from the comparison of the aforementioned traditional writing methods that using datacom's front-end page can reduce the amount of code by more than half.
- 设计更加清晰。服务器端给符合规范的数据，然后接受选择的结果数据。中间的ui交互无需关心。
- The design is clearer. The server gives the data that meets the specification, and then accepts the selected result data. No need to care about the UI interaction in the middle.
- 结合 [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) 组件，自动实现表单校验。
- Combined with the [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) component, the form verification is automatically realized.
- 搭配 uniCloud 的[unicloud-db组件](https://uniapp.dcloud.io/uniCloud/clientdb)，数据库查询结果直接绑定给`datacom组件`，服务器代码直接就不用写了
- With uniCloud's [unicloud-db component](https://uniapp.dcloud.io/uniCloud/clientdb), the database query results are directly bound to the `datacom component`, and the server code does not need to be written directly
- 搭配 uniCloud 的[schema2code页面生成系统](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)，数据库定义好schema，前端页面就不用写了，自动生成
- With uniCloud's [schema2code page generation system](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode), the database is defined with a schema, the front-end page does not need to be written, and it is automatically generated
- 互操作性。可以轻易的切换更好的组件
- Interoperability. You can easily switch to better components

举个例子，假使我们想实现一个城市选择的业务。
For example, suppose we want to implement a city-selected business.
1. 首先在uniCloud的数据库里，建一个城市表。
1. First, create a city table in the uniCloud database.
2. 然后前端写一个组件`<xx-data-citypicker>`
2. Then write a component `<xx-data-citypicker>` on the front end
3. 最后用`unicloud-db组件`把数据库的城市表数据拉下来，绑定给`<xx-data-citypicker>`
3. Finally, use the `unicloud-db component` to pull down the city table data of the database and bind it to `<xx-data-citypicker>`
4. 在传统开发里，这个功能要写很长的代码，现在变得特别轻松。
4. In traditional development, this feature requires a long code to be written, and it has become particularly easy now.
5. 额外的，开发者将可以在插件市场找到多个城市选择组件，它们都符合`datacom组件规范`，可能有的是全屏选择、有的是底部半屏选择，有的顶部有搜索框、有的右侧有索引字母....不管什么样的城市选择组件，你都可以随便的换，反正它们都符合一个数据规范。
5. In addition, developers will be able to find multiple city selection components in the plug-in market. They all comply with the `datacom component specification`. Some may be full-screen selection, some may be half-screen selection at the bottom, some have a search box at the top, and some on the right There are index letters.... No matter what kind of city selection component, you can change it at will, anyway, they all conform to a data specification.


### datacom组件规范
### datacom component specification

1. 命名以 -data- 为中间分隔符，前面为组件库名称，后面是组件功能表达
1. The name is named with -data- as the middle separator, the front is the component library name, and the back is the component function expression
2. 组件可以通过属性赋值，绑定一个 data 数据。可以是本地的localdata，也可以直接指定uniCloud云数据库的查询结果。详见下文的《数据绑定规范》
2. The component can bind a data through attribute assignment. It can be the local localdata or directly specify the query result of the uniCloud cloud database. See "Data Binding Specification" below for details
3. data数据是一组候选json数据。数据可以是平铺的数组，也可以是嵌套的树形结构。详见下文的《数据结构规范》
3. Data is a set of candidate json data. The data can be a flat array or a nested tree structure. See "Data Structure Specification" below for details
4. 符合 `<uni-forms>` 组件的表单校验规范
4. Comply with the form validation specification of `<uni-forms>` component

#### 数据结构规范
#### Data structure specification

datacom组件接受的数据结构，包含了“数组”和“树”两种数据结构规范。
The data structure accepted by the datacom component includes two data structure specifications: "array" and "tree".

1. 数组类型数据：
1. Array type data:

- 规范：
- Specification:

data数据是一组可循环的数据集合。数组中每条数据如下基本key：
The data is a set of cyclic data. The basic key of each data in the array is as follows:

|key		|描述						|
|key 		|Description				|
|--			|--							|
|value		|值。必填					|
|value      |Value. Required            |
|text		|显示文字。必填				|
|text		|Display text. Required 	|
|selected	|是否默认选中。默认值false	|
|selected   |Whether it is selected by default. The default value is false |
|disable	|是否禁用。默认值false		|
|disable 	|Whether to disable. The default value is false |
|group		|分组标记					|
|group 		|Group mark					|

如果熟悉html的`<select>`标签的话，其`<option>`标签的属性也是value、text、selected。
If you are familiar with the `<select>` tag of html, the attributes of the `<option>` tag are also value, text, and selected.

除了这些基本key，开发者也可以自由扩展key。比如电影票、机票、火车票的选座，都需要扩展额外的信息：行、列、单元格类型（座位或过道）等。
In addition to these basic keys, developers can also extend keys freely. For example, the seat selection of movie tickets, air tickets, and train tickets all need to expand additional information: row, column, cell type (seat or aisle), etc.

完整的 JSON Schema 定义详见：[https://gitee.com/dcloud/datacom/blob/master/array.schema.json](https://gitee.com/dcloud/datacom/blob/master/array.schema.json)
For the complete JSON Schema definition, please refer to: [https://gitee.com/dcloud/datacom/blob/master/array.schema.json](https://gitee.com/dcloud/datacom/blob/master/array. schema.json)

- 数据示例：
- Data example:
```json
[
{"value": "bj","text": "北京"},
{"value": "sh","text": "上海"}
]
```

- 组件示例：[uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456)
- Component example: [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456)

- 使用示例：
- Example of use:
```html
	<template>
		<!-- 传入符合 datacom 规范的数据，即可渲染出一组 checkbox -->
		<!-- 使用 v-model 双向绑定 checkbox 的选中值 -->
		<uni-data-checkbox v-model="value" :localdata="options" multiple></uni-data-checkbox>
	</template>
	<script>
	  export default {
		data() {
		  return {
			value: ['bj'],
			options: [
			  { value: "bj", text: "北京" },
			  { value: "sh", text: "上海" },
			],
		  };
		},
	  };
	</script>
```

2. 树类型数据：
2. Tree type data:

- 规范：
- Specification:

data数据是可遍历嵌套的数据集合。数组中每条数据如下基本key：
The data is a nested data collection that can be traversed. The basic key of each data in the array is as follows:

|key		|描述												|
|key 		|Description 										|
|--			|--													|
|value		|值。必填											|
|value	    |Value. Required 									|
|text		|显示文字。必填										|
|text 		|Display text. Required								|
|selected	|是否默认选中。默认值false							|
|selected 	|Whether it is selected by default. The default value is false |
|disable	|是否禁用。默认值false								|
|disable	|Whether to disable. The default value is false 	|
|isleaf		|是否为叶子节点。默认值false，为true时会忽略children	|
|isleaf		|Whether it is a leaf node. The default value is false, when it is true, children will be ignored |
|children	|子节点。其值的格式与父节点相同						|
|children 	|Child nodes. The format of its value is the same as the parent node |

完整的 JSON Schema 定义详见：[https://gitee.com/dcloud/datacom/blob/master/tree.schema.json](https://gitee.com/dcloud/datacom/blob/master/tree.schema.json)
For the complete JSON Schema definition, please refer to: [https://gitee.com/dcloud/datacom/blob/master/tree.schema.json](https://gitee.com/dcloud/datacom/blob/master/tree. schema.json)


- 数据示例：
- Data example:
```json
[{
"value": "110000",
"text": "北京市",
"children": [{
	"value": "110105",
	"text": "朝阳区"
}, {
	"value": "110108",
	"text": "海淀区"
}]
}]
```

- 组件示例：[uni-data-picker](https://ext.dcloud.net.cn/plugin?id=3796)
- Component example: [uni-data-picker](https://ext.dcloud.net.cn/plugin?id=3796)

- 使用示例：
- Example of use:
```html
	<template>
	  <!-- 传入符合 datacom 规范的数据，即可渲染出一个选择器  -->
	  <!-- 使用 v-model 双向绑定 picker 的选中值 -->
	  <uni-data-picker v-model="value" :localdata="items"></uni-data-checkbox>
	</template>
	<script>
	  export default {
		data() {
		  return {
			value: ["110000","110105"],
			items: [{
				"value": "110000",
				"text": "北京市",
				"children": [{
					"value": "110105",
					"text": "朝阳区"
				}, {
					"value": "110108",
					"text": "海淀区"
				}]
			}],
		  };
		},
	  };
	</script>
```

#### 数据绑定规范
#### Data binding specification

`datacom组件	`的data，可以来自页面本地，即localdata；也可以直接指定uniCloud的云数据库查询结果，即指定collection表名、field字段名、where条件，这些写法与`unicloud-db组件`的写法相同，如果localdata和collection同时存在，优先使用localdata。
The data of the `datacom component` can come from the page local(localdata); you can also directly specify the uniCloud cloud database query result, that is, specify the collection table name, field name, and where conditions. These writing methods are the same as those of the `unicloud-db component` Similarly, if localdata and collection exist at the same time, localdata is preferred.

localdata的示例上文已经举例，下面来看下直接指定uniCloud云数据库查询的写法。
The example of localdata has been exemplified above, let’s take a look at how to directly specify uniCloud cloud database query.

```html
	<template>
		<!-- 传入符合 datacom 规范的数据，即可渲染出一组 checkbox -->
		<!-- 使用 v-model 双向绑定 checkbox 的选中值 -->
		<uni-data-checkbox v-model="value" collection="" where="" field="" multiple></uni-data-checkbox>
	</template>
	<script>
	  export default {
		data() {
		  return {
			
		  };
		},
	  };
	</script>
```

collection表名、field字段名、where条件的写法，详见[clientDB组件文档](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component?id=%e5%b1%9e%e6%80%a7)
For the writing of collection table name, field name, and where condition, please refer to [clientDB component document](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component?id=%e5%b1%9e% e6%80%a7)

当然，支持绑定uniCloud数据，对于datacom组件规范来说，是可选的。
Of course, support for binding uniCloud data is optional for the datacom component specification.

更为常见的场景，是在整个页面组件外围套一个clientDB组件，一次性查库，把查询结果的data分拆赋值给不同的datacom组件。
A more common scenario is to put a clientDB component around the entire page component, check the database at a time, and assign the data of the query result to different datacom components.

datacom组件规范还要求支持绑定 value，且支持双向绑定，即：支持`v-model`指令。这同时也是为了uni-forms的表单校验。
The datacom component specification also requires support for binding value and MVVM,support for the `v-model` instruction. This is also for the form validation of uni-forms.

#### 组件属性规范
#### Component attribute specification

##### 分步查询属性规范
##### Query property specifications step by step

当`datacom组件`的data来自uniCloud的云数据库或cdn等云端，且数据量较大时，我们通常可以选择分步查询来优化用户体验，如以下场景：
When the data of the `datacom component` comes from uniCloud's cloud database or cdn and other clouds, and the amount of data is large, we can usually choose step-by-step query to optimize the user experience, such as the following scenario:

1. 树组件：点击父节点时，动态加载该父节点的子节点
1. Tree component: when the parent node is clicked, the child nodes of the parent node are dynamically loaded
2. 列表组件：点击下一页，动态加载下一页数据
2. List component: click on the next page to dynamically load the next page of data

`datacom组件`为分步查询云端数据，设计了以下组件属性、事件：
In order to query cloud data step by step, `datacom component` has designed the following component properties and events:

|属性名			|类型		|默认值	|说明|
|Attribute name |Type |Default value |Description|
|--				|--			|--		|--																					|
|step-search		|Boolean	|true	|是否分步查询云端数据。常用于树，picker，分页列表等，参考：`uni-data-picker`	|
|step-search 		|Boolean 	|true 	|Whether to query cloud data step by step. Commonly used in trees, pickers, paging lists, etc., refer to: `uni-data-picker`|
|step-search-url|String		|		|分步查询的云端数据请求地址。常用于树，picker，分页列表等，参考：`uni-data-picker`|
|step-search-url|String		|		|The cloud data request address for step-by-step query. Commonly used in trees, pickers, paging lists, etc., refer to: `uni-data-picker`|
|self-field	|String			|		|"树"结构的当前字段名称。常用于树，picker，参考：`uni-data-picker`					|
|self-field |String 		| 		|The current field name of the "tree" structure. Commonly used in tree, picker, reference: `uni-data-picker` |
|parent-field	|String		|		|"树"结构的父字段名称。常用于树，picker，参考：`uni-data-picker`					|
|parent-field |String | |The name of the parent field of the "tree" structure. Commonly used in tree, picker, reference: `uni-data-picker` |
|@stepsearch	|EventHandle|		|分步查询数据时触发。可用于自定义分步查询数据，参考：`uni-data-picker`				|
|@stepsearch |EventHandle| | Triggered when querying data step by step. Can be used to customize step-by-step data query, refer to: `uni-data-picker` |
##### 弹出类属性规范
##### Pop-up class attribute specification

`datacom组件`为弹出类组件，设计了以下组件属性、事件：
`datacom component` is a pop-up component, and the following component properties and events are designed:

|属性名			|类型		|默认值	|说明										|
|Attribute name |Type |Default value |Description |
|--				|--			|--		|--											|
|preload		|Boolean	|false	|是否预加载云端数据。参考：`uni-data-picker`|
|preload |Boolean |false |Whether to preload cloud data. Reference: `uni-data-picker`|
|@popupopened	|EventHandle|		|组件弹出显示时触发。参考：`uni-data-picker`|
|@popupopened |EventHandle| |Fires when the component pops up. Reference: `uni-data-picker`|
|@popupclosed	|EventHandle|		|组件弹出关闭时触发。参考：`uni-data-picker`|
|@popupclosed |EventHandle| |Fires when the component popup is closed. Reference: `uni-data-picker`|


### datacom的局限
### Limitations of datacom

- 与基础代码相比，datacom用起来简单，但封装一层后导致其灵活性不如基础组件。如有个性化逻辑则有可能需要改组件源码。
- Compared with the basic code, datacom is simple to use, but after encapsulating a layer, its flexibility is not as good as the basic components. If there is a personalized logic, the component source code may need to be changed.
- datacom覆盖范围主要是选择类组件。按钮类、输入类组件并不适合做成datacom。
- Datacom's coverage is mainly selected components. Button and input components are not suitable for making datacom.

### 有哪些组件可做成datacom
### What components can be made into datacom

选择类组件很多，基本逻辑都是在指定的数据范围内，选择其中的一个或多个。
There are many selection components, and the basic logic is to select one or more of them within the specified data range.

根据不同维度可以划分为：
According to different dimensions, it can be divided into:

- 选择模式：单选、多选
- Selection mode: single selection, multiple selection
- 数据结构：数组、树、数值范围
- Data structure: array, tree, value range
- 展现方式：平铺、弹出
- Display mode: tiled, popped
- 使用场景：表单、展示
- Use scenario: form, display

这里列一下常见的选择类组件，以及它们按不同维度的分类，有助于更透彻的理解它们的本质
Here is a list of common selection components and their classification according to different dimensions, which will help to understand their essence more thoroughly.

|组件				|选择模式	|数据结构	|展现方式	|使用场景	|说明									|
|Component |Selection Mode |Data Structure |Display Mode |Use Scenario |Description |
|--					|--			|--			|--			|--			|--										|
|radio(单选框)		|单选		|数组		|平铺		|表单		|列表单选、按钮组单选、标签组单选		|
|radio				|radio 		|array		|tile		|form 		|list radio, button group radio, label group radio |
|checkbox(多选框)	|多选		|数组		|平铺		|表单		|列表多选、按钮组多选、标签组多选		|
|checkbox			|checkbox	|array		|tile		|form		|List multiple checkbox, button group multiple checkbox, label group multiple checkbox		|
|select	(下拉列表)	|单选、多选	|数组		|弹出		|表单		|单选下拉列表、多选下拉列表				|
|select	|Single selection, multiple selection	|array		|tile		|form		|Single selection drop-down list, multiple selection drop-down list				|
|picker(滚动选择器)	|单选		|数组、树	|弹出		|表单		|单列选择器（数组）、多列选择器（树）	|
|picker (scrolling selector) |single selection |array, tree |popup |form |single-column selector (array), multi-column selector (tree) |
|cascader(级联选择)	|单选、多选	|树			|弹出		|表单		|										|
|cascader (cascading selection) | single selection, multiple selection | tree | pop-up | form | |
|transfer(穿梭框)	|多选		|数组		|平铺		|表单		|										|
|transfer(shuttle box) |multiple choice |array |tile |form | |
|slider(滑块)		|单选		|数字范围	|平铺		|表单		|										|
|slider |single selection |number range |tile |form | |
|rate(评分)			|单选		|数字范围	|平铺		|表单		|										|
|rate(score) |single selection |number range |tile |form | |
|stepper(步进器)		|单选		|数字范围	|平铺		|表单		|										|
|stepper |single selection |number range |tile |form | |
|表头筛选			|多选		|数组		|弹出		|表单		|										|
|Header filter |Multiple selection |Array |Pop up |Form | |
|城市选择			|单选		|树			|弹出、平铺	|表单		|										|
|City selection |Single selection |Tree |Pop, tile |Form | |
|segement(分段器)	|单选		|数组		|平铺		|展示		|										|
|segement (segmenter) |single selection |array |tile |display | |
|侧边导航			|单选		|数组		|平铺		|展示		|										|
|Side Navigation |Single Selection |Array |Tiling |Display | |
|tree(树状控件)		|单选、多选	|树			|平铺		|展示		|										|
|tree (tree control) |single selection, multiple selection |tree |tile |display | |

欢迎开发者们开发这些`datacom组件`，后续插件市场将单列出datacom组件，给予更高的显示权重。
Developers are welcome to develop these `datacom components`, and the subsequent plug-in market will list the datacom components alone, giving higher display weight.


### 使用mixinDatacom快速开发datacom@mixindatacom
### Use mixinDatacom to quickly develop datacom@mixindatacom

> 版本要求：HBuilderX 3.1.0+ 
> Version requirement: HBuilderX 3.1.0+

开发一个支持localdata的datacom组件相对容易，但要开发支持云端数据的datacom组件，实现对collection、field、where等属性的解析，工作量还是不小的。
It is relatively easy to develop a datacom component that supports localdata, but to develop a datacom component that supports cloud data and realize the analysis of collection, field, where and other attributes, the workload is still not small.

为此官方提供了一个mixin混入库，开发者在自己的datacom组件中混入`uniCloud.mixinDatacom`，即可方便的让自己的组件支持本地和云端的数据绑定，快速完成datacom组件。
To this end, the official provides a mixin library. Developers can mix in `uniCloud.mixinDatacom` into their datacom components to easily enable their components to support local and cloud data binding, and quickly complete datacom components.

mixin是vue的技术，不熟悉的可以点此了解[vue官网的mixin文档](https://cn.vuejs.org/v2/api/#Vue-mixin)
Mixin is the technology of vue. If you are not familiar with it, you can click here to learn about [mixin document on vue official website](https://cn.vuejs.org/v2/api/#Vue-mixin)

#### 语法手册
#### Grammar Manual

`uniCloud.mixinDatacom` 的props
props of `uniCloud.mixinDatacom`

与标准的datacom组件相同，除了localdata外，其他都是`uniCloud-db组件`的标准属性。
Same as the standard datacom component, except for localdata, everything else is the standard attribute of the uniCloud-db component.

|属性名						| 类型			| 	默认值		| 说明|
|Attribute name | Type | Default value | Description|
|:-:						| :-:			| :-:			| :-:	|
|localdata					|Array			|				|本地数据，[详情](https://uniapp.dcloud.net.cn/component/datacom)|
|localdata |Array | |Local data, [details](https://uniapp.dcloud.net.cn/component/datacom)|
|collection					|String			|				|表名。支持输入多个表名，用 `,` 分割|
|collection |String | |Table name. Supports input of multiple table names, separated by `,`|
|field						|String			|				|查询字段，多个字段用 `,` 分割|
|field |String | |Query field, multiple fields are separated by `,`|
|where						|String			|				|查询条件，内容较多，另见jql文档：[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|where |String | |Query conditions, more content, see also the jql document: [details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|orderby					|String			|				|排序字段及正序倒叙设置|
|orderby |String | |Sorting field and forward and backward setting|
|groupby					|String			|				|对数据进行分组|
|groupby |String | |Group data|
|group-field				|String			|				|对数据进行分组统计|
|group-field |String | |Group data statistics|
|distinct					|Boolean		|	false		|是否对数据查询结果中重复的记录进行去重|
|distinct |Boolean | false |Whether to remove duplicate records in data query results|
|action						|string			|				|云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=%e4%ba%91%e7%ab%af%e9%83%a8%e5%88%86)。场景：前端无权操作的数据，比如阅读数+1|
|action |string | |Before or after the cloud executes a database query, an action function is triggered to perform pre-processing or post-processing, [details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB ?id=%e4%ba%91%e7%ab%af%e9%83%a8%e5%88%86). Scenario: Data that the front end does not have the right to operate, such as the number of readings +1|
|page-data					|String			|	add			|分页策略选择。值为 `add` 代表下一页的数据追加到之前的数据中，常用于滚动到底加载下一页；值为 `replace` 时则替换当前data数据，常用于PC式交互，列表底部有页码分页按钮|
|page-data |String | add |Paging strategy selection. The value of `add` means that the data of the next page is appended to the previous data, which is often used to scroll to the end to load the next page; when the value is `replace`, it replaces the current data data, which is often used for PC-style interaction, and there is a page number at the bottom of the list. Button|
|page-current				|Number			|	0			|当前页|
|page-current |Number | 0 |Current page|
|page-size					|Number			|	10			|每页数据数量|
|page-size |Number | 10 |Number of data per page|
|getcount					|Boolean		|	false		|是否查询总数据条数，默认 `false`，需要分页模式时指定为 `true`|
|getcount |Boolean | false |Whether to query the total number of data items, the default is `false`, and it is specified as `true` when paging mode is required|
|getone						|Boolean		|	false		|指定查询结果是否仅返回数组第一条数据，默认 false。在false情况下返回的是数组，即便只有一条结果，也需要[0]的方式获取。在值为 true 时，直接返回结果数据，少一层数组。一般用于非列表页，比如详情页|
|getone |Boolean | false |Specify whether the query result returns only the first data of the array, the default is false. In the case of false, an array is returned. Even if there is only one result, it needs to be obtained in the form of [0]. When the value is true, the result data is returned directly, with one less array. Generally used for non-list pages, such as details pages|
|gettree					|Boolean		|	false		|是否查询树状数据，默认 `false`|
|gettree |Boolean | false |Whether to query tree data, the default is `false`|
|startwith					|String			|	''			|`gettree`的第一层级条件，此初始条件可以省略，不传startWith时默认从最顶级开始查询|
|startwith |String |'' |The first level condition of `gettree`. This initial condition can be omitted. If startWith is not passed, the query starts from the top level by default|
|limitlevel					|Number			|	10			|`gettree`查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大15，最小1|
|limitlevel |Number | 10 | The maximum level of the tree returned by the `gettree` query. Nodes that exceed the set level will not be returned. The default level is 10, the maximum is 15, the minimum is 1|
|foreign-key				|String			|	''			|手动指定使用的关联关系，HBuilderX 3.1.10+ [详情](/uniCloud/clientdb?id=lookup-foreign-key)|
|foreign-key |String |'' |Manually specify the relationship to use, HBuilderX 3.1.10+ [details](/uniCloud/clientdb?id=lookup-foreign-key)|


`uniCloud.mixinDatacom` 的data
`uniCloud.mixinDatacom` data

|属性名							| 类型			|	默认值	| 说明|
|Attribute name | Type | Default value | Description|
|:-:							| :-:			| :-:		| :-:	|
|mixinDatacomLoading			|Boolean		| 	false	|加载数据状态|
|mixinDatacomLoading |Boolean | false |Loading data status|
|mixinDatacomHasMore			|Boolean		| 	false	|是否有更多数据|
|mixinDatacomHasMore |Boolean | false |Is there more data|
|mixinDatacomResData			|Array			| 	[]		|查询返回的数据|
|mixinDatacomResData |Array | [] |Data returned by query|
|mixinDatacomErrorMessage	|String			| 			|错误消息|
|mixinDatacomErrorMessage |String | |Error Message|
|mixinDatacomPage			|OBject			| 			|分页信息|
|mixinDatacomPage |OBject | |Paging Information|


`uniCloud.mixinDatacom` methods
`uniCloud.mixinDatacom` methods

|方法名							| 说明|
|Method name | Description|
|:-:							| :-:	|
|mixinDatacomGet				|加载数据|
|mixinDatacomGet |Load data|
|mixinDatacomEasyGet			|加载数据，包含 `mixinDatacomLoading` 、`mixinDatacomHasMore`、`mixinDatacomErrorMessage` 逻辑 |
|mixinDatacomEasyGet |Load data, including `mixinDatacomLoading`, `mixinDatacomHasMore`, `mixinDatacomErrorMessage` logic |
|onMixinDatacomPropsChange	|属性发生变化时触发|
|onMixinDatacomPropsChange | Triggered when a property changes|

#### 使用方法
#### Instructions

使用 `uniCloud.mixinDatacom` 开发 `datacom` 组件需要以下步骤
The following steps are required to develop the `datacom` component using `uniCloud.mixinDatacom`

1. 在export default下声明`mixin: [uniCloud.mixinDatacom]`
1. Declare `mixin: [uniCloud.mixinDatacom]` under export default
2. 在template中定义三个标签，绑定 `uniCloud.mixinDatacom` 的 `data` 状态，加载中`mixinDatacomLoading` 、加载出错提示 `mixinDatacomErrorMessage`、处理数据及相关UI展现 `mixinDatacomResData`
2. Define three tags in the template, bind the `data` status of `uniCloud.mixinDatacom`, load `mixinDatacomLoading`, load error message `mixinDatacomErrorMessage`, process data and related UI display `mixinDatacomResData`
3. 组件的created声明周期中调用 `uniCloud.mixinDatacom` 中的 `mixinDatacomGet()` 或 `mixinDatacomEasyGet()` 方法请求云端数据库。这两种方法的区别如下：
	- `mixinDatacomGet()` 仅请求数据，自行处理各种状态和异常。
	- `mixinDatacomEasyGet()` 在 `mixinDatacomGet()` 的基础之上封装了加载状态、分页及错误消息，可通过模板绑定。用起来更简单
3. In the created lifecycle of the component, call the `mixinDatacomGet()` or `mixinDatacomEasyGet()` method in `uniCloud.mixinDatacom` to request the cloud database. The difference between these two methods is as follows:
	-`mixinDatacomGet()` only requests data and handles various statuses and exceptions by itself.
	-`mixinDatacomEasyGet()` encapsulates the loading status, paging and error messages on the basis of `mixinDatacomGet()`, which can be bound by template. Easier to use


使用 `uniCloud.mixinDatacom` 开发 `datacom` 组件的优势
Advantages of using `uniCloud.mixinDatacom` to develop `datacom` component

- 不需要定义 `datacom` 组件的属性
- No need to define the attributes of the `datacom` component
- 不需要关心 `uniClinetDB` API
- No need to care about `uniClinetDB` API
- 不需要判断哪些属性变化时需要重置已加载数据， 仅判断 `onMixinDatacomPropsChange(needReset, changed) {}` 参数 `needReset` 是否为 `true` 即可
- There is no need to determine which properties need to be reset when the loaded data is changed, just determine whether the `onMixinDatacomPropsChange(needReset, changed) {}` parameter `needReset` is `true`
- 当 `uniClinetDB` 有新增属性时，组件代码也不需要跟随更新
- When `uniClinetDB` has new attributes, the component code does not need to be updated

例如要开发一个datacom组件，名为uni-data-jql：
For example, to develop a datacom component named uni-data-jql:

- 方法1，使用 `mixinDatacomEasyGet()`
- Method 1, use `mixinDatacomEasyGet()`

```html
<!-- uni-data-jql.vue -->
<template>
	<view>
		<view v-if="mixinDatacomLoading">Loading...</view>
		<view v-else-if="mixinDatacomErrorMessage">
			请求错误：{{mixinDatacomErrorMessage}}
		</view>
		<view else="mixinDatacomResData">
			<!-- 需要自行处理数据及相关UI展现 -->
			{{mixinDatacomResData}}
		</view>
	</view>
</template>

<script>
	export default {
		mixins: [uniCloud.mixinDatacom],
		data() {
			return {}
		},
		created() {
			// 调用 uniCloud.mixinDatacom 中的方法加载数据
			this.mixinDatacomEasyGet()
		},
		methods: {
			// 当组件属性发生变化时
			onMixinDatacomPropsChange(needReset, changed) {
				// needReset=true 需要重置已加载数据和分页信息，例如 collection，orderby
				// changed，变化的属性名，类型为 Array，例如 ['collection', 'orderby']
				if (needReset) {
					// 清空已加载的数据
					this.mixinDatacomResData = []

					// 重置分页数据，如果没有分页不需要处理
					this.mixinDatacomPage.size = this.pageSize // 重置分页大小
					this.mixinDatacomPage.current = 0 // 重置当前分页
					this.mixinDatacomPage.count = 0 // 重置数据总数
				}
			}
		}
	}
</script>
```


- 方法2，使用 `mixinDatacomGet()` 
- Method 2, use `mixinDatacomGet()`

需要多写些代码处理各种状态。如果`mixinDatacomEasyGet`的封装无法灵活满足你的需求，可以使用这种方式。
Need to write more code to handle various states. If the package of `mixinDatacomEasyGet` cannot meet your needs flexibly, you can use this method.

```html
<!-- uni-data-jql.vue -->
<template>
	<view>
		<view v-if="mixinDatacomLoading">Loading...</view>
		<view v-else-if="mixinDatacomErrorMessage">
			请求错误：{{mixinDatacomErrorMessage}}
		</view>
		<view else="mixinDatacomResData">
			<!-- 需要自行处理数据及相关UI展现 -->
			{{mixinDatacomResData}}
		</view>
	</view>
</template>

<script>
	export default {
		mixins: [uniCloud.mixinDatacom],
		data() {
			return {}
		},
		created() {
			this.load()
		},
		methods: {
			load() {
				if (this.mixinDatacomLoading == true) {
					return
				}
				this.mixinDatacomLoading = true

				this.mixinDatacomGet().then((res) => {
					this.mixinDatacomLoading = false
					const {
						data,
						count
					} = res.result
					this.mixinDatacomResData = data
				}).catch((err) => {
					this.mixinDatacomLoading = false
					this.mixinDatacomErrorMessage = err
				})
			},
			// 当组件属性发生变化时
			onMixinDatacomPropsChange(needReset, changed) {
				// needReset=true 需要重置已加载数据和分页信息，例如 collection，orderby
				// changed，变化的属性名，类型为 Array，例如 ['collection', 'orderby']
				if (needReset) {
					// 清空已加载的数据
					this.mixinDatacomResData = []

					// 重置分页数据，如果没有分页不需要处理
					this.mixinDatacomPage.size = this.pageSize // 重置分页大小
					this.mixinDatacomPage.current = 0 // 重置当前分页
					this.mixinDatacomPage.count = 0 // 重置数据总数
				}
			}
		}
	}
</script>
```


做好这个uni-data-jql组件后，就可以在页面中使用了：
After making this uni-data-jql component, you can use it on the page:

```html
<template>
	<view>
		<uni-data-jql collection="table1"></uni-data-jql>
	</view>
</template>

<script>
	// jql.vue 组件
	import UniData from "./jql.vue" // 如果符合easycom规范，无需本代码
	export default {
		components: {
			UniData // 如果符合easycom规范，无需本代码
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>
```


#### `uniCloud.mixinDatacom` 源码 @mixinDatacomsource
#### `uniCloud.mixinDatacom` source code @mixinDatacomsource
为方便开发者理解mixinDatacom的工作原理，这里贴出mixinDatacom的源码：
To facilitate developers to understand the working principle of mixinDatacom, the source code of mixinDatacom is posted here:

```js
export default {
	props: {
		localdata: {
			type: Array,
			default () {
				return []
			}
		},
		options: {
			type: [Object, Array],
			default () {
				return {}
			}
		},
		collection: {
			type: String,
			default: ''
		},
		action: {
			type: String,
			default: ''
		},
		field: {
			type: String,
			default: ''
		},
		orderby: {
			type: String,
			default: ''
		},
		where: {
			type: [String, Object],
			default: ''
		},
		pageData: {
			type: String,
			default: 'add'
		},
		pageCurrent: {
			type: Number,
			default: 1
		},
		pageSize: {
			type: Number,
			default: 20
		},
		getcount: {
			type: [Boolean, String],
			default: false
		},
		gettree: {
			type: [Boolean, String],
			default: false
		},
		gettreepath: {
		  type: [Boolean, String],
		  default: false
		},
		startwith: {
		  type: String,
		  default: ''
		},
		limitlevel: {
		  type: Number,
		  default: 10
		},
		groupby: {
		  type: String,
		  default: ''
		},
		groupField: {
		  type: String,
		  default: ''
		},
		distinct: {
		  type: [Boolean, String],
		  default: false
		},
		manual: {
		  type: Boolean,
		  default: false
		}
	},
	data() {
		return {
			mixinDatacomLoading: false, // 网络请求状态
			mixinDatacomHasMore: false, // 是否有更多数据
			mixinDatacomResData: [], // 请求返回的数据，调用 loadData 后会更新
			mixinDatacomErrorMessage: '', // 请求出错时的错误消息
			mixinDatacomPage: {} // 分页信息，详情见 created 生命周期
		}
	},
	created() {
		this.mixinDatacomPage = {
			current: this.pageCurrent, // 当前页面，初始化设置 props中的 pageCurrent
			size: this.pageSize, // 页面大小，初始化设置 props中的 pageSize
			count: 0, // 数据总数，getcount=true时有效
		}
		this.$watch(() => {
			var al = [];
			['pageCurrent',
				'pageSize',
				'localdata',
				'collection',
				'action',
				'field',
				'orderby',
				'where',
				'getont',
				'getcount',
				'gettree'
			].forEach(key => {
				al.push(this[key])
			})
			return al
		}, (newValue, oldValue) => {
			let needReset = false
			let changed = []
			for (let i = 2; i < newValue.length; i++) {
				if (newValue[i] !== oldValue[i]) {
					needReset = true
					changed.push(newValue[i])
				}
			}
			if (newValue[0] !== oldValue[0]) {
				this.mixinDatacomPage.current = this.pageCurrent
			}
			this.mixinDatacomPage.size = this.pageSize

			this.onMixinDatacomPropsChange(needReset, changed)
		})
	},
	methods: {
		// props发生变化时被调用，在组件中覆盖此方法
		// 非 pageCurrent，pageSize 改变时 needReset=true,需要重置数据
		// changed，发生变化的属性名，类型为Array，例如 ['collection', 'action']
		onMixinDatacomPropsChange(needReset, changed) {},
		// 加载数据
		mixinDatacomEasyGet({
			getone = false,
			success,
			fail
		} = {}) {
			if (this.mixinDatacomLoading) {
				return
			}
			this.mixinDatacomLoading = true

			this.mixinDatacomErrorMessage = ''

			this.mixinDatacomGet().then((res) => {
				this.mixinDatacomLoading = false
				const {
					data,
					count
				} = res.result
				if (this.getcount) {
					this.mixinDatacomPage.count = count
				}
				this.mixinDatacomHasMore = data.length < this.pageSize
				const responseData = getone ? (data.length ? data[0] : undefined) : data
				this.mixinDatacomResData = responseData

				if (success) {
					success(responseData)
				}
			}).catch((err) => {
				this.mixinDatacomLoading = false
				this.mixinDatacomErrorMessage = err
				fail && fail(err)
			})
		},
		// 调用 uniClientDB 查询数据
		mixinDatacomGet(options = {}) {
			let db = uniCloud.database()

			const action = options.action || this.action
			if (action) {
				db = db.action(action)
			}

			const collection = options.collection || this.collection
			db = db.collection(collection)

			const where = options.where || this.where
			if (!(!where || !Object.keys(where).length)) {
				db = db.where(where)
			}

			const field = options.field || this.field
			if (field) {
				db = db.field(field)
			}

			const groupby = options.groupby || this.groupby
			if (groupby) {
				db = db.groupBy(groupby)
			}

			const groupField = options.groupField || this.groupField
			if (groupField) {
				db = db.groupField(groupField)
			}

			const distinct = options.distinct !== undefined ? options.distinct : this.distinct
			if (distinct === true) {
				db = db.distinct()
			}

			const orderby = options.orderby || this.orderby
			if (orderby) {
				db = db.orderBy(orderby)
			}

			const current = options.pageCurrent !== undefined ? options.pageCurrent : this.mixinDatacomPage.current
			const size = options.pageSize !== undefined ? options.pageSize : this.mixinDatacomPage.size
			const getCount = options.getcount !== undefined ? options.getcount : this.getcount
			const gettree = options.gettree !== undefined ? options.gettree : this.gettree
			const gettreepath = options.gettreepath !== undefined ? options.gettreepath : this.gettreepath
			const limitLevel = options.limitlevel !== undefined ? options.limitlevel : this.limitlevel
			const startWith = options.startwith !== undefined ? options.startwith : this.startwith

			const getOptions = {
				getCount
			}
			const treeOptions = {
				limitLevel,
				startWith
			}
			if (gettree) {
				getOptions.getTree = treeOptions
			}
			if (gettreepath) {
				getOptions.getTreePath = treeOptions
			}

			db = db.skip(size * (current - 1)).limit(size).get(getOptions)

			return db
		}
	}
}
```
