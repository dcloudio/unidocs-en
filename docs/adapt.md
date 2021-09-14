#### 宽屏适配指南
#### Widescreen Adaptation Guide
uni-app是以移动为先的理念诞生的。从uni-app 2.9起，提供了PC等宽屏的适配方案，完成了全端统一。
uni-app was born with the concept of mobile first. Starting from uni-app 2.9, a widescreen adaptation solution such as PC is provided, and the whole end is unified.
PC适配和屏幕适配略有差异。PC适配包含`宽屏适配`和`uni-app内置组件适配PC`两方面的工作。
There is a slight difference between PC adaptation and screen adaptation. PC adaptation includes the work of `widescreen adaptation` and `uni-app built-in component adaptation to PC`.
uni-app内置组件的PC适配，又包括`PC交互习惯的UI调整`和`非webkit浏览器适配`这两部分。这块工作不在本文的讨论范围内，尤其是开发者在PC端可以随意使用普通html元素和组件，不局限于uni-app内置组件。所以本文重点讨论屏幕适配。
The PC adaptation of uni-app built-in components also includes two parts: `UI adjustment of PC interaction habits` and `non-webkit browser adaptation`. This work is beyond the scope of this article. In particular, developers can use ordinary html elements and components at will on the PC side, not limited to uni-app built-in components. So this article focuses on screen adaptation.
uni-app提供的屏幕适配方案，包括3部分：
The screen adaptation scheme provided by uni-app includes 3 parts:
#### 1. 页面窗体级适配方案：leftWindow、rightWindow、topWindow
#### 1. Page form-level adaptation scheme: leftWindow, rightWindow, topWindow
以目前手机屏幕为主window，在左右上，可新扩展 leftWindow、rightWindow、topWindow，这些区域可设定在一定屏幕宽度范围自动出现或消失。这些区域各自独立，切换页面支持在各自的window内刷新，而不是整屏刷新。
The current mobile phone screen is the main window. LeftWindow, rightWindow, and topWindow can be newly expanded on the left and right. These areas can be set to automatically appear or disappear within a certain screen width range. These areas are independent of each other, and the switching page supports refreshing in their respective windows instead of the entire screen.
各个window之间可以交互通信。
Interactions can be communicated between each window.
这里有2个例子：
Here are 2 examples:
- hello uni-app：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
- hello uni-app: [https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
- 分栏式的新闻模板：[https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/)，这个示例对应的源码在：[https://github.com/dcloudio/uni-template-news](https://github.com/dcloudio/uni-template-news)
- Column-style news template: [https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp .com/#/), the source code for this example is at: [https://github.com/dcloudio/uni-template-news](https://github.com/dcloudio/uni-template-news)

以上示例建议使用最新版的chrome、Safari、或firefox访问。可以在PC模式和手机模式分别体验。以上示例源码的运行需使用HBuilderX 2.9+
The above example is recommended to use the latest version of chrome, Safari, or firefox to access. You can experience it separately in PC mode and mobile mode. The above sample source code needs to use HBuilderX 2.9+
这些例子特点如下：
The characteristics of these examples are as follows:
- hello uni-app使用了topWindow和leftWindow，分为上左右3栏。新闻模板使用了rightWindow区域，分为左右2栏。宽屏下点击左边的列表在右边显示详情内容。而窄屏下仍然是点击列表后新开一个页面显示详情内容。
- hello uni-app uses topWindow and leftWindow, which are divided into 3 columns, top and left. The news template uses the rightWindow area, which is divided into two left and right columns. In widescreen, click on the list on the left to display the details on the right. In the narrow screen, a new page is displayed after clicking on the list.
- leftWindow或rightWindow 里的页面是复用的，不需要重写新闻详情页面，支持把已有详情页面当组件放到 leftWindow或rightWindow 页面中。
- The pages in leftWindow or rightWindow are reused, there is no need to rewrite the news detail page, and the existing detail page can be put into the leftWindow or rightWindow page as a component.
这套方案是已知的、最便捷的分栏式宽屏应用适配方案。
This set of solutions is known and the most convenient split-column widescreen application adaptation solution.
__H5 宽屏下 tabBar(选项卡) 与窗体的关系__
__H5 The relationship between tabBar (tab) and form in wide screen__
> 目前做如下调整：leftWindow、rightWindow、topWindow 中有其一存在，则 tabBar 隐藏；不存在，则不隐藏。
> Currently, the following adjustments are made: if one of leftWindow, rightWindow, or topWindow exists, the tabBar will be hidden; if it does not exist, it will not be hidden.
leftWindow等配置，在pages.json里进行。文档见：[https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
Configurations such as leftWindow are carried out in pages.json. See the document: [https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
pages.json 配置样例
pages.json configuration example

```json
{
  "globalStyle": {
    
  },
  "topWindow": {
    "path": "responsive/top-window.vue", 
	// 指定 topWindow 页面文件
	// Specify topWindow page file
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue", 
	// 指定 leftWindow 页面文件
	// Specify the leftWindow page file
    "style": {
      "width": 300
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue", 
	// 指定 rightWindow 页面文件
	// Specify the rightWindow page file
    "style": {
      "width": "calc(100vw - 400px)" 
	  // 页面宽度
	  // page width
    },
    "matchMedia": {
      "minWidth": 768 
	  //生效条件，当窗口宽度大于768px时显示
	  //Valid conditions, displayed when the window width is greater than 768px
    }
  }
}
```


- leftWindow等方案的使用教程
- Tutorials for using leftWindow and other solutions
如果已经有了一个为小屏设计的uni-app，在使用leftWindow等窗体适配大屏时，需理清一个思路：现有的小屏内容，放在哪个window里？
If you already have a uni-app designed for small screens, when using windows such as leftWindow to adapt to large screens, you need to clarify one idea: In which window should the existing small screen content be placed?
如果应用的首页是列表，二级页是详情，此时适合的做法是，将原有的小屏列表作为主window，在右边扩展rightWindow来显示详情。
If the home page of the application is the list and the second page is the details, it is appropriate to use the original small screen list as the main window and expand the rightWindow on the right to display the details.
以新闻示例项目为例，预览地址[https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/)。这个项目的源码已经内置于HBuilderX 2.9中，新建uni-app项目时选择新闻/资讯模板。
Take the news sample project as an example, the preview address [https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5. bspapp.com/#/). The source code of this project has been built into HBuilderX 2.9. Select the news/information template when creating a uni-app project.
首先在这个项目的`pages.json`文件中，配置[`rightWindow`选项](https://uniapp.dcloud.net.cn/collocation/pages?id=rightwindow)，放置一个新页面`right-window.vue`。
First, configure [`rightWindow` option](https://uniapp.dcloud.net.cn/collocation/pages?id=rightwindow) in the `pages.json` file of this project, and place a new page `right-window .vue`.

```json
# pages.json
"rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "calc(100vw - 450px)"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
```

`rightWindow`对应的页面不需要重写一遍新闻详情的页面逻辑，只需要引入之前的详情页面组件（详情页面`/pages/detail/detail`可自动转化为`pages-detail-detail`组件使用）。
The page corresponding to `rightWindow` does not need to rewrite the page logic of the news details, but only needs to introduce the previous detail page component (the detail page `/pages/detail/detail` can be automatically converted to the use of the `pages-detail-detail` component) .
```html
<!--responsive/right-window.vue-->
<template>
  <view>
    <!-- 这里将 /pages/detail/detail.nvue 页面作为一个组件使用 -->
	<!-- Here the /pages/detail/detail.nvue page is used as a component -->
    <!-- 路径 “/pages/detail/detail” 转为 “pages-detail-detail” 组件 -->
	<!-- The path "/pages/detail/detail" is converted to the "pages-detail-detail" component -->
    <pages-detail-detail ref="detailPage"></pages-detail-detail>
  </view>
</template>

<script>
  export default {
    created(e) {
      //监听自定义事件，该事件由详情页列表的点击触发
	  //Listen to a custom event, which is triggered by a click on the detail page list
      uni.$on('updateDetail', (e) => {
        // 执行 detailPage组件，即：/pages/detail/detail.nvue 页面的load方法
		// Execute the detailPage component, namely: the load method of the /pages/detail/detail.nvue page
        this.$refs.detailPage.load(e.detail);
      })
    },
    onLoad() {},
    methods: {}
  }
</script>
```

然后在新闻列表页面，处理点击列表后与rightWindow交互通信的逻辑。
Then on the news list page, handle the logic of interactive communication with rightWindow after clicking on the list.

```js
// pages/news/news-page.nvue
goDetail(detail) {
	if (this._isWidescreen) { 
		//若为宽屏，则触发右侧详情页的自定义事件，通知右侧窗体刷新新闻详情
		//If it is widescreen, trigger a custom event on the right detail page to notify the right form to refresh the news details
		uni.$emit('updateDetail', {
			detail: encodeURIComponent(JSON.stringify(detail))
		})
	} else { 
		// 若为窄屏，则打开新窗体，在新窗体打开详情页面
		// If it is a narrow screen, open a new form and open the details page in the new form
		uni.navigateTo({
			url: '/pages/detail/detail?query=' + encodeURIComponent(JSON.stringify(detail))
		});
	}
},

```

可以看到，无需太多工作量，就可以快速把一个为手机窄屏开发的应用，快速适配为PC宽屏应用。并且以后的代码维护，仍然是同一套，当业务迭代时不需要多处升级。
It can be seen that you can quickly adapt an application developed for a narrow screen of a mobile phone to a wide screen application of a PC without too much work. And the code maintenance in the future will still be the same set, and there is no need to upgrade multiple places when the business is iterated.
rightWindow适用于分栏式应用，那leftWindow一般用于什么场景？
RightWindow is suitable for column-oriented applications. What scenarios are leftWindow generally used for?
leftWindow比较适合放置导航页面。如果你的应用首页有很多tab和宫格导航，那么可以把它们重组，放在leftWindow作为导航。之前在手机竖屏上依靠多级tab和宫格导航的场景，可以在leftWindow里通过tree或折叠面板方式导航。
leftWindow is more suitable for placing navigation pages. If your application home page has many tabs and grid navigation, you can reorganize them and place them in leftWindow as navigation. Previously, the scene of relying on multi-level tab and grid navigation on the vertical screen of the mobile phone can be navigated by tree or folding panel in the leftWindow.
leftWindow除了适用于手机应用适配大屏，也适用于重新开发的PC应用，尤其是PC Admin管理控制台。
LeftWindow is not only suitable for mobile phone applications to adapt to large screens, but also for re-developed PC applications, especially the PC Admin management console.
DCloud官方基于uni-app的pc版，推出了unicloud Admin：[https://uniapp.dcloud.net.cn/uniCloud/admin](https://uniapp.dcloud.net.cn/uniCloud/admin)
DCloud officially launched unicloud Admin based on the pc version of uni-app: [https://uniapp.dcloud.net.cn/uniCloud/admin](https://uniapp.dcloud.net.cn/uniCloud/admin)
目前的leftWindow、rightWindow、topWindow 只支持web端。计划后续在Pad App上实现该配置。
The current leftWindow, rightWindow, and topWindow only support web. It is planned to implement this configuration on the Pad App in the future.

#### 2. 组件级适配方案：match-media组件
#### 2. Component-level adaptation scheme: match-media component
leftWindow等方案是页面窗体级适配方案。适于独立的页面。那么在同一个页面中，是否可以适配不同屏宽？当然可以，此时可以使用组件级适配方案。
Solutions such as leftWindow are page-level adaptation solutions. Suitable for independent pages. So in the same page, can it be adapted to different screen widths? Of course, the component-level adaptation scheme can be used at this time.
uni-app提供了 [match-media组件](https://uniapp.dcloud.net.cn/component/match-media) 和配套的 [uni.createMediaQueryObserver](https://uniapp.dcloud.net.cn/api/ui/media-query-observer) 方法。
uni-app provides [match-media component](https://uniapp.dcloud.net.cn/component/match-media) and supporting [uni.createMediaQueryObserver](https://uniapp.dcloud.net.cn /api/ui/media-query-observer) method.
这是一个媒体查询适配组件，可以更简单的用于动态屏幕适配。
This is a media query adaptation component that can be used for dynamic screen adaptation more simply.
在`match-media`组件中放置内容，并为组件指定一组 media query 媒体查询规则，如屏幕宽度。运行时，如屏幕宽度满足查询条件，这个组件就会被展示，反之则隐藏。
Place content in the `match-media` component, and specify a set of media query rules for the component, such as screen width. At runtime, if the screen width meets the query condition, this component will be displayed, otherwise it will be hidden.

`match-media`组件的优势包括：
The advantages of the `match-media` component include:
1. 开发者能够更方便、显式地使用 Media Query 能力，而不是耦合在 CSS 文件中，难以复用。
1. Developers can use the Media Query capabilities more conveniently and explicitly, instead of being coupled in CSS files, which is difficult to reuse.
2. 能够在模板中结合数据绑定动态地使用，不仅能做到组件的显示或隐藏，在过程式 API 中可塑性更高，例如能够根据尺寸变化动态地添加 class 类名，改变样式。
2. It can be used dynamically in the template combined with data binding, not only can display or hide components, but also have higher plasticity in the procedural API. For example, it can dynamically add class names and change styles according to size changes.
3. 能够嵌套式地使用 Media Query 组件，即能够满足局部组件布局样式的改变。
3. Able to use Media Query components in a nested manner, that is, to meet changes in local component layout styles.
4. 组件化之后，封装性更强，能够隔离样式、模版以及绑定在模版上的交互事件，还能够提供更高的可复用性。
4. After componentization, the encapsulation is stronger, which can isolate styles, templates, and interaction events bound to the templates, and can also provide higher reusability.
它的详细文档参考：[https://uniapp.dcloud.net.cn/component/match-media](https://uniapp.dcloud.net.cn/component/match-media)
Its detailed documentation reference: [https://uniapp.dcloud.net.cn/component/match-media](https://uniapp.dcloud.net.cn/component/match-media)
当然，开发者也可以继续使用css媒体查询来适配屏幕，或者使用一些类似mobilehide、pcshow之类的css样式。
Of course, developers can also continue to use css media queries to adapt to the screen, or use some css styles like mobilehide and pcshow.
uni-app的屏幕适配推荐方案是运行时动态适配，而不是为PC版单独条件编译（虽然您也可以通过自定义条件编译来实现单独的PC版）。这样设计的好处是在ipad等设备的浏览器上可以方便的横竖屏切换。
The recommended solution for uni-app’s screen adaptation is dynamic adaptation at runtime, rather than a separate conditional compilation for the PC version (although you can also implement a separate PC version through custom conditional compilation). The advantage of this design is that you can easily switch between horizontal and vertical screens on the browser of ipad and other devices.

#### 3. 内容缩放拉伸的处理
#### 3. Content zoom and stretch processing
除了根据屏宽动态显示和隐藏内容，其实还有一大类屏幕适配需求，即：内容不会根据屏宽动态显示隐藏，而是缩放或拉伸。
In addition to dynamically displaying and hiding content according to the screen width, there is actually a large category of screen adaptation requirements, that is, the content will not be dynamically displayed or hidden according to the screen width, but zoomed or stretched.
具体来说，内容适应又有两种细分策略：
Specifically, there are two subdivision strategies for content adaptation:
1. 局部拉伸：页面内容划分为固定区域和长宽动态适配区域，固定区域使用固定的px单位约定宽高，长宽适配区域则使用flex自动适配。当屏幕大小变化时，固定区域不变，而长宽适配区域跟着变化
1. Partial stretching: The page content is divided into a fixed area and a dynamic adaptation area of ​​length and width. The fixed area uses a fixed px unit to specify the width and height, and the length and width adaptation area uses flex to automatically adapt. When the screen size changes, the fixed area does not change, while the length and width adaptation area changes accordingly
2. 等比缩放：根据页面屏幕宽度缩放。rpx其实属于这种类型。在宽屏上，rpx变大，窄屏上rpx变小。
2. Proportional zoom: zoom according to the width of the page screen. rpx actually belongs to this type. On a wide screen, the rpx becomes larger, and on a narrow screen, the rpx becomes smaller.
举个实际的例子，比如一个列表页面，左边有一个图标，右边是2行文字。
Take a practical example, such as a list page with an icon on the left and 2 lines of text on the right.
- 如果使用策略1，即局部拉伸，那么左边的图标部分固定一个宽高，右边的2行文字的大小也固定，但2行文字的宽度自适应，占满屏幕右侧的空间。也就是屏宽宽度变化后，只有2行文字的宽度在变化，其他一切不变。
- If strategy 1 is used, that is, partial stretching, the icon on the left has a fixed width and height, and the size of the 2 lines of text on the right is also fixed, but the width of the 2 lines of text is adaptive and takes up the space on the right side of the screen. That is, after the screen width changes, only the width of the 2 lines of text changes, and everything else remains the same.
- 如果使用策略2，即等比缩放，那么整个列表均使用rpx，在宽屏上，图标变大、右边的2行文字变大，列表项行高变大。而在窄屏上，一切又都变小。
- If strategy 2 is used, that is, proportional zooming, then the entire list uses rpx. On a wide screen, the icon becomes larger, the 2 lines of text on the right become larger, and the line height of the list item becomes larger. On a narrow screen, everything becomes smaller.
策略2省事，设计师按750px屏宽出图，程序员直接按rpx写代码即可。但策略2的实际效果不如策略1好。程序员使用策略1，分析下界面，设定好局部拉伸区域，这样可以有更好的用户体验。
Strategy 2 saves trouble. The designer draws the picture according to the 750px screen width, and the programmer writes the code directly according to rpx. But the actual effect of strategy 2 is not as good as strategy 1. The programmer uses strategy 1, analyzes the interface, and sets the local stretch area, so as to have a better user experience.
这里需要对rpx的使用特别强调一下。
The use of rpx needs to be emphasized here.
在移动设备上也有很多屏幕宽度，设计师一般只会按照750px屏幕宽度出图。此时使用rpx的好处在于，各种移动设备的屏幕宽度差异不是很大，相对于750px微调缩放后的效果，尽可能的还原了设计师的设计。
There are also many screen widths on mobile devices, and designers generally only produce pictures according to the 750px screen width. The advantage of using rpx at this time is that the screen widths of various mobile devices are not very different. Compared with the 750px fine-tuning zoom effect, the designer's design is restored as much as possible.
但是，一旦脱离移动设备，在pc屏幕，或者pad横屏状态下，因为屏幕宽度远大于750了。此时rpx根据屏幕宽度变化的结果就严重脱离了预期，大的惨不忍睹。
However, once separated from the mobile device, in the PC screen, or the pad horizontal screen state, because the screen width is much larger than 750. At this time, the result of rpx changes according to the screen width is seriously out of expectation, which is terrible.
为此，在uni-app 2.9+起，新增了 rpx 按750px做基准屏宽的生效范围控制，并且将 rpx 的默认最大适配宽度设为了 960 px。
For this reason, starting from uni-app 2.9+, rpx has been added to control the effective range of the base screen width based on 750px, and the default maximum adaptation width of rpx has been set to 960 px.
也就是设计师按750px出具的设计图，可适配的最大屏幕宽度为960px，在这个范围内，rpx可以根据屏幕宽度缩放。一旦超过960，rpx再根据屏幕宽度缩放就变的没有意义了。按如下配置，在超过960宽的屏幕上，会按375px作为基准宽度，这是最大程度上保持界面不失真的策略。
That is, the design drawing issued by the designer according to 750px, the maximum screen width that can be adapted is 960px, within this range, rpx can be scaled according to the screen width. Once it exceeds 960, it becomes meaningless to scale rpx according to the screen width. According to the following configuration, on a screen larger than 960 wide, 375px will be used as the base width, which is a strategy to keep the interface undistorted to the greatest extent.
当然这些配置您都可以自己定义调整，在 pages.json 的 globeStyle 里配置 rpx 的如下参数。
Of course, you can define and adjust these configurations yourself. Configure the following parameters of rpx in globeStyle of pages.json.


```json
{
  "globalStyle": {
    "rpxCalcMaxDeviceWidth": 960, 
	// rpx 计算所支持的最大设备宽度，单位 px，默认值为 960
	// rpx calculates the maximum supported device width, the unit is px, the default value is 960
    "rpxCalcBaseDeviceWidth": 375, 
	// rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px，默认值为 375
	// The width of the reference device used by rpx calculation. When the actual width of the device exceeds the maximum device width supported by rpx calculation, it will be calculated based on the reference width, the unit is px, and the default value is 375
    "rpxCalcIncludeWidth": 750 
	// rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
	// rpx calculates the value of special processing, always calculated according to the actual device width, the unit is rpx, the default value is 750
  },
}
```

通过上述配置中的前2个，即rpxCalcMaxDeviceWidth和rpxCalcBaseDeviceWidth，即可有效解决使用了rpx后，在宽屏下界面变的奇大无比的问题。如果你不需要特别定义这2个参数的数值，则无需在`pages.json`中配置它们，保持默认的960和375即可。
Through the first two of the above configurations, namely rpxCalcMaxDeviceWidth and rpxCalcBaseDeviceWidth, the problem that the interface becomes extremely large under widescreen after using rpx can be effectively solved. If you do not need to specifically define the values ​​of these 2 parameters, you do not need to configure them in `pages.json`, just keep the default values ​​of 960 and 375.
但是，rpx的最大适配宽度被限定后，会带来一个新问题：如果您的代码中把750rpx当做100%来使用（官方强烈不推荐这种写法，即便是nvue不支持百分比，也应该使用flex来解决撑满问题），此时不管屏幕宽度为多少，哪怕超过了960px，您的预期仍然是要占满整个屏幕宽度，但如果按rpxCalcBaseDeviceWidth的375px的策略执行将不再占满屏宽。
However, after the maximum adaptation width of rpx is limited, it will bring a new problem: if you use 750rpx as 100% in your code (the official strongly does not recommend this way of writing, even if nvue does not support percentage, you should use it flex to solve the problem of fullness). At this time, no matter what the screen width is, even if it exceeds 960px, your expectation is still to occupy the entire screen width, but if you execute the rpxCalcBaseDeviceWidth strategy of 375px, it will no longer occupy the full screen width.
此时您有两种解决方案，一种是修改代码，将里面把rpx当做百分比的代码改掉；另一种是配置rpxCalcIncludeWidth，设置某个特定数值不受rpxCalcMaxDeviceWidth约束。如上述例子中的"rpxCalcIncludeWidth": 750，代表着如果写了 750rpx，始终将按屏幕宽度百分百占满来计算。
At this time, you have two solutions. One is to modify the code to change the code that uses rpx as a percentage; the other is to configure rpxCalcIncludeWidth to set a specific value to not be constrained by rpxCalcMaxDeviceWidth. For example, "rpxCalcIncludeWidth": 750 in the above example means that if 750rpx is written, it will always be calculated as 100% of the screen width.
- 关于 rpx 转 px
- About rpx to px
不少开发者之前对rpx的使用过于没有节制，后来为了适配宽屏，想要改用“局部拉伸：页面内容划分为固定区域和长宽动态适配区域”的策略，此时将回归px。
Many developers were too unrestrained in the use of rpx before. Later, in order to adapt to the widescreen, they wanted to switch to the "partial stretch: page content is divided into a fixed area and a dynamic adaptation area of ​​length and width". At this time, they will return to px .
比如[DCloud社区的宽屏适配示例](https://static-1afcc27f-ce2f-4a6d-9416-c65a6f87d24e.bspapp.com/#/)和[新闻模板](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com)都没有使用rpx。
For example, [DCloud community's widescreen adaptation example](https://static-1afcc27f-ce2f-4a6d-9416-c65a6f87d24e.bspapp.com/#/) and [news template](https://static-7d133019-9a7e- 474a-b7c2-c01751f00ca5.bspapp.com) did not use rpx.
如果想把rpx转px，可以在源码里正则替换，也可以使用三方已经写好的单位转换库。下面介绍下三方库的用法。
If you want to convert rpx to px, you can replace it regularly in the source code, or you can use the unit conversion library that has been written by the three parties. The following introduces the usage of the third party library.
项目根目录新增文件 `postcss.config.js`，内容如下。则在编译时，编译器会自动转换rpx单位为px。
A new file `postcss.config.js` is added to the project root directory, with the following content. When compiling, the compiler will automatically convert the rpx unit to px.
** 注意：将rpx作为百分比的用法需要手动处理
** Note: The usage of rpx as a percentage needs to be processed manually

```js
// postcss.config.js

const path = require('path')
module.exports = {
  parser: 'postcss-comment',
  plugins: {
    'postcss-import': {
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      }
    },
    'autoprefixer': {
      overrideBrowserslist: ["Android >= 4", "ios >= 8"],
      remove: process.env.UNI_PLATFORM !== 'h5'
    },
    // 借助postcss-px-to-viewport插件，实现rpx转px，文档：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
	// With the help of postcss-px-to-viewport plug-in, rpx to px is realized, document: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
	// 以下配置，可以将rpx转换为1/2的px，如20rpx=10px，如果要调整比例，可以调整 viewportWidth 来实现
	// The following configuration, you can convert rpx to 1/2 of px, such as 20rpx=10px, if you want to adjust the ratio, you can adjust the viewportWidth to achieve
    'postcss-px-to-viewport': {
      unitToConvert: 'rpx',
      viewportWidth: 200,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'px',
      fontViewportUnit: 'px',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false
    },
    '@dcloudio/vue-cli-plugin-uni/packages/postcss': {}
  }
}
```

#### 非webkit浏览器适配
#### Non-webkit browser adaptation
uni-app理论上不限定浏览器。在HBuilderX 2.9发版时，就新闻示例项目，在chrome、Safari、firefox、edge的最新版上均测试过，可以正常使用。
In theory, uni-app does not limit the browser. When HBuilderX 2.9 was released, the news sample project was tested on the latest versions of chrome, Safari, firefox, and edge, and it can be used normally.
一般国内的浏览器，如360浏览器、搜狗浏览器，均支持chrome内核，只要版本够新，应该都可以访问。
Generally domestic browsers, such as 360 browser and Sogou browser, all support the chrome kernel. As long as the version is new enough, it should be accessible.
如果你的应用在其他PC浏览器下异常，请检查自己代码的浏览器兼容问题。
If your application is abnormal under other PC browsers, please check the browser compatibility issues of your own code.
如果你发现了uni-app框架层面、内置组件有浏览器兼容问题，欢迎在github上给我们提交pr。
If you find browser compatibility issues at the uni-app framework level and built-in components, please submit pr to us on github.
一般情况下，只要基础框架没有浏览器兼容问题，那么组件层面的问题也可以通过更换组件来解决。当uni-app编译到PC浏览器端时，支持所有的vue组件，包含那些操作了dom、window的ui库，比如elementUI等。
In general, as long as the basic framework does not have browser compatibility issues, then component-level issues can also be resolved by replacing components. When uni-app is compiled to the PC browser, it supports all vue components, including those ui libraries that operate on dom and window, such as elementUI.
#### 一个让手机版网页临时可用于pc浏览器的方案
#### A solution to temporarily make mobile web pages available to PC browsers
如果你的h5版已经开发完毕，还没来得及适配pc，但想在pc上先用起来。那么可以在pc网页里使用iframe，约定好宽度，在里面套用uni-app的窄屏版。
If your h5 version has been developed, you have not had time to adapt to the pc, but you want to use it on the pc first. Then you can use the iframe in the pc webpage, agree on the width, and apply the narrow-screen version of uni-app in it.
当然还可以在iframe旁边放置二维码，提供手机版扫码地址，例如：
Of course, you can also place a QR code next to the iframe to provide the mobile version scan code address, for example:

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/979f7940-12ba-11eb-b680-7980c8a877b8.png)

#### 通过electron打包为windows、mac、linux客户端
#### Packaged as windows, mac, linux client through electron
有了宽屏适配，uni-app的应用就可以方便的通过electron打包为电脑客户端应用，windows、mac、linux均支持。
With widescreen adaptation, uni-app applications can be conveniently packaged as computer client applications through electron, which are supported by windows, mac, and linux.
开发者可以随意调用electron的API，以调用更多操作系统的能力（为方便多端兼容，可以将这些特殊API写在自定义的条件编译里）
Developers can call electron's API at will to call more operating system capabilities (to facilitate multi-terminal compatibility, these special APIs can be written in custom conditional compilation)
插件市场有已经封装好的一些插件，详见：[https://ext.dcloud.net.cn/search?q=electron](https://ext.dcloud.net.cn/search?q=electron)
There are some plug-ins already packaged in the plug-in market. For details, please see: [https://ext.dcloud.net.cn/search?q=electron](https://ext.dcloud.net.cn/search?q=electron )
#### 响应式布局组件：uni-row
#### Responsive layout component: uni-row
流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局。
The flow grid system, as the screen or viewport is divided into 24 parts, you can quickly and easily create a layout.
该插件将屏幕分为五个档位：`<768px`、`>=768px`、`>=992px`、`>=1200px`、`>=1920px`。
The plug-in divides the screen into five levels: `<768px`, `>=768px`, `>=992px`, `>=1200px`, `>=1920px`.
对应的可以使用`xs`、`sm`、`md`、`lg`、`xl`来控制在不同分辨率下的显示效果。详情可在插件市场查看。
Correspondingly, you can use `xs`, `sm`, `md`, `lg`, `xl` to control the display effect at different resolutions. Details can be viewed in the plug-in market.
插件地址：https://ext.dcloud.net.cn/plugin?id=3958
Plug-in address: https://ext.dcloud.net.cn/plugin?id=3958
