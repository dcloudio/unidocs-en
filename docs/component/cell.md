#### cell

app端nvue专用组件。它的重要价值在于告诉原生引擎，哪些部分是可重用的。
nvue dedicated component on app side. Its important value lies in telling the native engine which parts are reusable.

`<cell>` Cell 必须以一级子组件的形式存在于 `list recycler waterfall` 中。
`<cell>` Cell must exist in the `list recycler waterfall` as a first-level subcomponent.

#### 子组件
#### Subassembly

Cell 支持添加任意类型的组件作为自己的子组件，但是请不要再内部添加滚动容器了。
Cell supports adding any type of components as its own subcomponents, but please do not add scrolling containers inside.

#### 属性
#### Attributes

- insert-animation string, cell 的插入动画。当前只支持 `none` 和 `default`。
- insert-animation string, insert animation of cell. Currently only `none` and `default` are supported.

- delete-animation string, cell 的删除动画。当前只支持 `none` 和 `default`。
- delete-animation string, delete animation of cell. Currently, only `none` and `default` are supported.

- recycle boolean, 默认值 true。这个属性控制这个 Cell 的 view 和子 views 是否在列表滚动时进行回收，在 iOS 上通常必须指定为 true （因为默认为 true，所以一般不需要写这个属性），如果设置为 false，列表滚动时，页面会占用非常高的内存。Android上默认是true，设置为false可以防止Image和Text上数据重新绑定。
- recycle boolean, the default value is true. This property controls whether the views and subviews of this Cell are recycled when the list is scrolled. Generally, it must be specified as true on iOS (because the default is true, it is generally not necessary to write this attribute). If set to false, the page will be displayed when the list is scrolled. Will take up very high memory. The default is true on Android, and setting it to false can prevent data from being re-bound on Image and Text.

#### 样式
#### Style

- 通用样式.
- Universal style.

> TIP
> TIP
> - 不要指定 `<cell>` 的 `flex` 值。Cell 的宽度是由它的父容器决定的，你也不需要指定它的高度。
> - Do not specify the `flex` value of `<cell>`. The width of the cell is determined by its parent container, and you do not need to specify its height.
> - Cell 的排版的位置是由父容器控制的，所以一般不要为其指定 `margin` 样式
> - The cell layout position is controlled by the parent container, so generally don’t specify the `margin` style for it

#### 事件
#### event

- 通用事件.
- General events.








