#### custom-tab-bar

Custom tabBar component.

 to enhance performance, `pages.json`in a fixed configuration native tabBar. 

At the same time,  has more flexible requirements for the position and style of the tabBar. As a first-level navigation, the tabBar is more often at the top of the PC web page rather than the bottom.

Custom tabBar components should be born, it still reads `pages.json`tabBar information in configuration, but this component can customize its placement, the flexibility to configure various css.

The component supports `pages.json`the `tabBar`configuration, which does not support `borderStyle`configuration.

The component supports all `tabBar`relevant the API, such as setting tab logo, a red dot switchTab and the like.


**Property description**

| Attribute name | Types of    | Defaults   | Description                                                  |
|:-|:-|:-|:-|
|direction|String|horizontal|The arrangement direction of the options can be selected: horizontal, vertical|
|show-icon|Boolean|false|Whether to show icon|
|selected|Number|0|Selected tabBar option index value|
|onTabItemTap|EventHandle||Click event, the parameter is Object, see the table below for details|

``onTabItemTap`` Parameter Description：

| Attributes | Types of | Description                                                 |
|---|---|---|
|index|String|The sequence number of the clicked tabItem, starting from 0|
|pagePath|String|The page path of the clicked tabItem|
|text|String|The button text of the tabItem that was clicked|

This component requires no configuration list tabBar each tabItem still from `pages.json`reading. Avoid writing repetitive code at multiple ends.

**Example**

In `hello uni-app`, place a custom tabBar component in topWindow, and place the page level navigation at the top of the page.

```html
<!-- This example does not include the complete css -->
<template>
    <view>
        <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" />
    </view>
</template>
```

