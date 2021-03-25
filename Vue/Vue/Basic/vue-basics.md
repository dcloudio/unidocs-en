## Introduction

**What is Vue.js**

Vue (pronounced /vjuː/, similar to view) is a progressive framework for building user interfaces. Vue is designed to be applied layer by layer from the bottom up.

Vue.js uses HTML-based template syntax, allowing developers to declaratively bind the DOM to the data of the underlying Vue instance. All Vue.js templates are legal HTML, so they can be parsed by browsers and HTML parsers that follow the specification.

In the underlying implementation, Vue compiles the template into a virtual DOM rendering function. Combined with the response system, Vue can intelligently calculate how many components need to be re-rendered and minimize the number of DOM operations.

The core of Vue.js is a system that allows the use of concise template syntax to declaratively render data into the DOM. It only focuses on the view layer and is easy to use. Everything is responsive.

## Vue development advantages over traditional js

In traditional development, when the native JavaScript DOM manipulation function is used to frequently manipulate the DOM, the browser must constantly render the new DOM tree, causing the page to look very stuck.

Vue is a single-page application, which makes the page partially refresh, without having to request all the data and DOM every time you jump to the page, which greatly speeds up the access speed and improves the user experience.

**Advantages of vue:**

- Lightweight Progressive Framework
- Separation of view, data and structure
- Responsive two-way data binding
- Componentization
- Virtual DOM
- Fast running speed, easy to use
- Easy to integrate with third-party libraries or existing projects

### File type changes

- It used to be .html files, development was also html, and running was also html.
- Now it is a .vue file, and development is a vue. After compilation, the runtime has become a js file.

### Changes in the code structure within the file

- Before a `html`large node, there `script`and `style`nodes;

```html
    <!DOCTYPE html>  
    <html>  
        <head>  
            <meta charset="utf-8" />  
            <title></title>  
            <script type="text/javascript">  
            </script>  
            <style type="text/css">  
            </style>  
        </head>  
        <body>  
        </body>  
    </html>
```

- Now `template`is a node for writing tag components, `script`and `style`is a node in parallel, that is, there are three-level node. 

```html
    <template>  
        <view>  
        Note that there must be one view and only one root view. All the content is written under this view.  
        </view>  
    </template>  
    <script>  
        export default {  
        }  
    </script>  
    <style>  
    </style>
```

### Changes in the way external files are cited

- In the past, external js and css were introduced through script src and link href;

```html
    <script src="js/jquery-1.10.2.js" type="text/javascript"></script>  
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
```

- Now it is written in es6, `import`import external js module (note that it is not a file) or css;

**js needs to come in and become an object** . 

```html
    <script>  
        var util = require('../../../common/util.js');  //Require this js module  
        var formatedPlayTime = util.formatTime(playTime); //Call the method of the JS module 
    </script>
```

In this `util.js`, the prior should `function`method for encapsulating as an object

```js
    function formatTime(time) {  
        return time;//There's no logic here 
    }  
    module.exports = {  
        formatTime: formatTime  
    }
```

**In addition, Vue supports component import, which makes it easier to encapsulate a library that includes interface, js, and styles** .

### Component/label changes

It used to be html tags, for example `<div>`, now it is a small program component, for example `<view>`.

So what is the difference between a label and a component, isn't it all surrounded by angle brackets in English?

- In fact, tags are an old concept. Tags are built-in browsers.
- But the components can be freely expanded. Similarly, you can encapsulate a piece of js into a function or module, and you can also encapsulate a ui control into a component.

### js changes

- In the previous DOM operation, if you want to change the display content of a DOM element, such as the display text of a view: set the id to the view, then get the DOM element through the selector in js, and then perform assignment operations through js to modify the DOM element Attribute or value.

```html
    <html>  
        <head>  
            <script type="text/javascript">  
                document.addEventListener("DOMContentLoaded",function () {  
                    document.getElementById("spana").innerText="456"  
                })  
                function changetextvalue () {  
                    document.getElementById("spana").innerText="789"  
                }  
            </script>  
        </head>  
        <body>  
            <span id="spana">123</span>  
            <button type="button" onclick="changetextvalue()">Changed to 789</button>  
        </body>  
    </html>
```

- The current practice is the binding mode of vue, bind a js variable to this DOM element, modify the value of the js variable in the script, the DOM will automatically change, and the page will automatically update the rendering.
  - The front end uses the [MVVM](short for Model-View-ViewModel) mode. Simply put, Model: represents the data model, View: only focuses on view UI processing, and ViewModel: only processes business and data. Its core is the VM in MVVM, which is the ViewModel. ViewModel is responsible for connecting View and Model to ensure the consistency of views and data. This lightweight architecture makes front-end development more efficient and convenient, greatly reducing the number of lines of code, and better differential rendering performance.

```html
    <template>  
        <view>  
            <text>{{textvalue}}</text><!-- This demonstrates the binding of component values-->  
            <button :type="buttontype" @click="changetextvalue()">Changed to 789</button><!-- This demonstrates the binding of properties and events -->  
        </view>  
    </template>  
    <script>  
        export default {  
            data() {  
                return {  
                    textvalue:"123",  
                    buttontype:"primary"  
                };  
            },  
            onLoad() {  
                this.textvalue="456"// change the value of textValue, 123 becomes 456 and 123 is not displayed
            },  
            methods: {  
                changetextvalue() {  
                    this.textvalue="789"//you change the value of textValue, and the page automatically refreshes to 789
                }  
            }  
        }  
    </script>
```

## Template syntax

### Interpolation

The most common form of data binding is text interpolation:

```html
<template>
    <view>
        <view>Message: {{ msg }}</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'Hello Vue!'
            }
        }
    }
</script>
```

The content in {{msg}} will be replaced with the value of msg on the corresponding data object. Whenever the msg on the bound data object changes, the content at the interpolation point will be updated.

### instruction

[Watch this video explanation]

Instructions are special attributes prefixed with v-.

- The value of the directive attribute is expected to be a single JavaScript expression (v-for is an exception).
- The function of the instruction is that when the value of the expression changes, the collateral effect produced by it will act on the DOM responsively.
- Some commands can receive a "parameter", which is indicated by a colon (:) after the command name.

#### v-bind

Dynamically bind one or more attributes, or a component `prop`to the expression.

- v-bind is abbreviated as ':'
- In binding `prop`upon, `prop`it must be declared in the sub-assembly.
- You can specify different binding types with modifiers.

```html
    <image v-bind:src="imgUrl"></image>
    <!-- abbreviations -->
    <image :src="imgUrl"></image>

    <!-- Prop binding. "Prop" must be declared in the my-component.-->
    <my-component :prop="someThing"></my-component>

    <button v-bind:disabled="isButtonDisabled">Button</button>
```

If the `isButtonDisabled`values are `null`, `undefined`or `false`, it `disabled`will not even be included in the rendered `button`elements.

#### v-on

The v-on instruction, which is used to monitor DOM events. v-on is abbreviated as'@'

```html
    <!-- Complete syntax -->
    <view v-on:click="doSomething">click</view>    
    <!-- abbreviations -->
    <view @click="doSomething">click</view>
```

#### v-once

Only render elements and components once. Subsequent re-rendering, the element/component and all its child nodes will be treated as static content and skipped.

Unlike front-end framework in understanding the client in order to achieve a logical multiplexing state flag template node will be added to the `v-once`guarantee rendering node only once, but not necessarily be able to optimize the rendering performance, but might slow down the client Comparison efficiency when multiplexing nodes.

> h5, WeChat applets are not supported

```html
    <view v-once>This will never change: {{msg}}</view>
    <!-- A child element -->
    <view v-once>
        <text>comment</text>
        <text>{{msg}}</text>
    </view>
```

#### v-html

Update elements `innerHTML`.

- Note: The **content is inserted as normal HTML-it will not be compiled as a Vue template.**
- If you try to use the v-html composite template, you can reconsider whether to replace it by using components.
- App and H5 end support `v-html`, WeChat applet will be converted `rich-text`, other end does not support `v-html`.

```html
    <template>
        <view>
            <view v-html="rawHtml"></view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    rawHtml: '<div style="text-align:center;background-color: #007AFF;"><div >I am content</div><img src="https://vkceyugu.cdn.bspapp.com/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>'
                }
            }
        }
    </script>
```

## data attribute

data must be declared as a function that returns an initial data object (note that the data object returned in the function should not directly reference objects outside the function); otherwise, the data will not be automatically destroyed when the page is closed, and the last data will be displayed when the page is opened again .

```js
    //Properly used, using a function to return an object
    data() {
        return {
            title: 'Hello'
        }
    }

    //Incorrect notation that will cause the last data to be displayed when the page is reopened
    data: {
        title: 'Hello'
    }

    //Incorrect notation can also result in multiple component instance object data influencing each other
    const obj = {
        title: 'Hello'
    }
    data() {
        return {
            obj
        }
    }
```

## Class and Style binding

### Object syntax

An object can be passed to v-bind:class to switch classes dynamically.

You can also pass in more fields in the object to dynamically switch multiple classes. In addition, the v-bind:class instruction can also coexist with ordinary classes.

```html
    <template>
        <view>
            <!-- class -->
            <view class="static" :class="{ active: isActive}">111</view>
            <view class="static" :class="{ active: isActive, 'text-danger': hasError }">222</view>
            <!-- style -->
            <view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">333</view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    isActive: true,
                    hasError: false,
                    activeColor:"green",
                    fontSize:50
                }
            }
        }
    </script>
    <style>
    .static{
        color: #2C405A;
    }
    .active{
        background-color: #007AFF;
    }
    .text-danger{
        color: #DD524D;
    }
    </style>
```

The rendering result is

```html
    <view class="static active"></view>
```

When `isActive`or `hasError`changes, class list will be updated accordingly. For example, if `hasError`the value `true`, class list becomes `static active text-danger`.

### Array syntax

You can pass an array to v-bind:class to apply a class list.

```html
<template>
    <view>
        <!-- class -->
        <view class="static" :class="[activeClass,errorClass]">111</view>
        <view class="static" v-bind:class="[isActive ? activeClass : '', errorClass]">222</view><!-- 三元表达式 -->
        <view class="static" v-bind:class="[{ active: isActive }, errorClass]">333</view>
        <!-- style -->
        <view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">444</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                isActive: true,
                activeClass: 'active',
                errorClass: 'text-danger',
                activeColor:"green",
                fontSize:50
            }
        }
    }
</script>
<style>
    .static{
        font-size:30rpx;
    }
    .active{
        background-color: #007AFF;
    }
    .text-danger{
        font-size:60rpx;
        color:#DD524D;
    }
</style>
```

**Note: Set the px pixel value in the way: style="". The value is the actual pixel and will not be converted by the compiler.**

Further it may also be used `computed`to generate a method `class`or a `style`string, inserted into the page, illustrated:

```html
  <template>
      <!-- support -->
      <view class="container" :class="computedClassStr"></view>
      <view class="container" :class="{active: isActive}"></view>
      <!-- Does not support -->
      <view class="container" :class="computedClassObject"></view>
  </template>
  <script>
      export default {
          data () {
              return {
                  isActive: true
              }
          },
          computed: {
              computedClassStr () {
                  return this.isActive ? 'active' : ''
              },
              computedClassObject () {
                  return { active: this.isActive }
              }
          }
      }
  </script>
```

> Non-H5 end does not support `classObject`and `styleObject`syntax.

Examples not supported:

```html
    <template>
        <view :class="[activeClass]" :style="[baseStyles,overridingStyles]"></view>
    </template>
    <script>
        export default {
            data() {
                return {
                    activeClass: {
                        'active': true,
                        'text-danger': false
                    },
                    baseStyles: {
                        color: 'green',
                        fontSize: '30px'
                    },
                    overridingStyles: {
                        'font-weight': 'bold'
                    }
                }
            }
        }
    </script>
```

### Used on components

Non-H5 end (non-custom pattern compiler component) **temporarily supported** on a custom assembly for use in `Class`the `Style`binding.

## Conditional rendering

### v-if and v-else

`v-if`Instructions are used to conditionally render a piece of content. This content will only return instruction in an expression `truthy`is rendered value of the time. Use `v-else`instructions represent the v-if "else block."

> In JavaScript, truthy means that the converted value is true in the context of Boolean values. All values are true values unless they are defined as false values (that is, all true values except false, 0, "", null, undefined, and NaN).

```html
    <template>
        <view>
            <view v-if="seen">Look at me</view>
            <view v-else>Can't look me</view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    seen: true
                }
            }
        }
    </script>
```

`v-else-if`, As the name suggests, serves as the "else-if block" of v-if and can be used continuously:

```html
    <template>
        <view>
            <view v-if="type === 'A'">
                A
            </view>
            <view v-else-if="type === 'B'">
                B
            </view>
            <view v-else-if="type === 'C'">
                C
            </view>
            <view v-else>
                Not A/B/C
            </view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    type:'B'
                }
            }
        }
    </script>
```

Similarly `v-else`, `v-else-if`we must immediately bring `v-if`or `v-else-if`elements after.

### Conditional rendering grouping

Because `v-if`a command, so it must be added to an element. But what if you want to switch multiple elements? At this time it can be a `template`element as invisible package elements, and using v-if above. The final rendering results will not contain `template`elements.

```html
<template v-if="seen">
    <view>title</view>
    <view>content:Now you see me</view>
</template>
```

### v-show

`v-show`It is an instruction to display element options based on conditions. Usage and roughly `v-if`the same:

```html
    <view v-show="ok">Hello!</view>
```

The difference is that elements with v-show will always be rendered and kept in the DOM. v-show simply switching element `CSS`attributes `display`.

> Note that v-show does not support template elements, nor does v-else.

### The difference between v-if and v-show

`v-if` It is a "real" conditional rendering, because it will ensure that the event listeners and subcomponents in the conditional block are properly destroyed and rebuilt during the switching process.

`v-if` It is also lazy: if the condition is false in the initial rendering, nothing is done, and the conditional block will not be rendered until the condition becomes true for the first time.

In contrast, `v-show`it is much simpler, no matter what the initial conditions are, the element will always be rendered, and it is simply switched based on CSS to control the display and hiding of the element.

**Choose according to application scenarios**

- `v-if` There is a higher switching overhead. If the conditions rarely change during runtime, it is better to use v-if.
- `v-show`There is a higher initial rendering overhead. If you need to switch very frequently, v-show is better.

**note**

- Not recommended to use both `v-if`and `v-for`.
- When `v-if`and `v-for`when used together, `v-for`than `v-if`a higher priority.

## List rendering

### Use arrays in v-for

The v-for instruction can render a list based on an array.

- ```
  v-for
  ```

  Instruction requires the use of 

  ```
  item in items
  ```

  special syntax form, wherein 

  ```
  items
  ```

  the source data array, 

  ```
  item
  ```

  it is an alias iterated array element.

  - The first parameter `item`is the alias iterated array elements.
  - The second parameter, the index of the current item `index`, is optional.

```html
    <template>
        <view>
            <view v-for="(item, index) in items">
                {{ index }} - {{ item.message }}
            </view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    items: [
                        { message: 'Foo' },
                        { message: 'Bar' }
                    ]
                }
            }
        }
    </script>
```

result:

```html
    0 - Foo
    1 - Bar
```

### Use objects in v-for

You can also use v-for to traverse an object `property`.

- The first parameter `value`is an alias iterated array elements.
- The second parameter is the `property`name (that is, the key name).
- The third parameter serves as an index.

```html
    <template>
        <view>
            <view v-for="(value, name, index) in object">
                 {{ index }}. {{ name }}: {{ value }}
            </view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    object: {
                        title: 'How to do lists in Vue',
                        author: 'Jane Doe',
                        publishedAt: '2020-04-10'
                    }
                }
            }
        }
    </script>
```

result:

```html
    0.title: How to do lists in Vue,
    1.author: Jane Doe,
    2.publishedAt: 2020-04-10
```

### List rendering grouping

Like `v-if`, you can also use with `v-for`the `template`cyclically render some content that contain multiple elements. such as:

```html
    <template v-for="item in items">
        <view>{{ item.message }}</view>
        <view class="divider" role="presentation"></view>
    </template>
```

### key

When using Vue being updated `v-for`when the list elements rendered, it defaults to "place update" strategy. If the order of the data items is changed, Vue will not move the DOM elements to match the order of the data items, but instead update each element in place and ensure that they are rendered correctly at each index position.

If the position of items in the list will dynamically change or new items added to the list, and you want the list of projects to maintain its own identity and status (such as `input`input content, `switch`the selected state), you need `:key`to specify a list of items The unique identifier.

`:key` The value of is provided in two forms

- Use `v-for`cycles `array`in `item`a a `property`, the `property`value needs to be unique list number or string, and can not be changed dynamically.
- Use `v-for`cycle `item`itself, then the need `item`itself is a unique character string or a number

When the data change triggers the rendering layer to re-render, the components with keys will be corrected, and the framework will ensure that they are reordered, not recreated, to ensure that the components maintain their own state and improve the efficiency of the list rendering.

> If you do not provide: key, one will be reported `warning`. If you know that the list is static or you don't need to pay attention to its order, you can choose to ignore it.

Example:

```html
    <template>
        <view>
            <!-- Some property of item in Array -->
            <view v-for="(item,index) in objectArray" :key="item.id">
                {{index +':'+ item.name}}
            </view>
            <!-- When item itself is a unique string or number, we can use item itself -->
            <view v-for="(item,index) in stringArray" :key="item">
                {{index +':'+ item}}
            </view>
        </view>
    </template>
    <script>
    export default {
        data () {
            return {
                objectArray:[{
                    id:0,
                    name:'li ming'
                },{
                    id:1,
                    name:'wang peng'
                }],
                stringArray:['a','b','c']
            }
        }
    }
    </script>
```

### Precautions

- Differences and other platforms when the platforms H5 integer v-for loop, as `v-for="(item, index) in 10"`in, item 1 from the start, other platforms item from zero, the second parameter may be used in index H5 platform consistent.
- The third parameter is not supported in the non-cyclic object H5 platform, such as `v-for="(value, name, index) in object"`in, index parameter is not supported.
- The data on the applet side is updated by difference. Since the applet does not support deleting object properties, the setting value is used instead of null. As a result, the traversal may not meet expectations. You need to filter the null data by yourself.

### Use v-for on components

On the custom component, you can use it like any ordinary element `v-for`.

```html
    <my-component v-for="item in items" :key="item.id"></my-component>
```

**When using v-for on the component, the key is required.**

## Event handler

### Listen for events

You can listen to DOM events with v-on instruction, when triggered and run some `JavaScript`code.

```html
    <template>
        <view>
            <button v-on:click="counter += 1">Add 1</button>
            <text>The button above has been clicked {{ counter }} times.</text>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    counter:0
                }
            }
        }
    </script>
```

### Event handling method

However, many event processing logic is more complex, so directly to the `JavaScript`code is written in the `v-on`instructions is not feasible. So `v-on`you can also receive the name of a method needs to be called.

Example:

```html
    <template>
        <view>
            <!-- 'greet' is the method name defined below -->
            <button v-on:click="greet">Greet</button>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    name: 'Vue.js'
                }
            },
            // Define the methods in the 'methods' object
            methods: {
                greet(event){
                    // 'event' is a native DOM event
                    console.log(event);
                }
            }
        }
    </script>
```

Sometimes it is also necessary to access the original DOM event in the inline statement processor. You can use the special variable `$event`it passed to the method:

```html
    <template>
        <view>
            <button v-on:click="warn('Form cannot be submitted yet.', $event)">
              Submit
            </button>
        </view>
    </template>
    <script>
        export default {
            methods: {
                warn(message, event) {
                    // Now we have access to the native event object
                    if (event) {
                        event.preventDefault()
                    }
                }
            }
        }
    </script>
```

### Event modifier

The modifier is a special suffix specified by a period. It is used to indicate that an instruction should be bound in a special way. For example, `.prevent`modifier tells `v-on`instructions for event-triggered call `event.preventDefault()`:

v-on provides event modifiers:

- `.stop`: Supported by all platforms, it will prevent the event from bubbling when used, and also prevent the default behavior of the event on the non-H5 side
- `.native`: Monitor native events, only supported on H5 platform
- `.prevent`: Only supported on H5 platform
- `.capture`: Only supported on H5 platform
- `.self`: Only supported on H5 platform
- `.once`: Only supported on H5 platform
- `.passive`: Only supported on H5 platform

```html
    <!-- Prevents the click event from propagating further -->
    <view v-on:click.stop="doThis"></view>
```

> When using modifiers, the order is important; the corresponding codes will be generated in the same order. Therefore, with the `v-on:click.prevent.self`blocks all clicks, and `v-on:click.self.prevent`will only prevent clicks on the element itself.

**note**

- Compatible each end, events need to use **v-on** or **@** way binding, do not use the small end of the program `bind`and `catch`for event binding.
- If you need to scroll down the page prohibiting mask, use `@touchmove.stop.prevent="moveHandle"`, `moveHandle`processing can be used to `touchmove`events, but also can be an empty function.

```html
<view class="mask" @touchmove.stop.prevent="moveHandle"></view>
```

### Event mapping table

```js

    {
        click: 'tap',
        touchstart: 'touchstart',
        touchmove: 'touchmove',
        touchcancel: 'touchcancel',
        touchend: 'touchend',
        tap: 'tap',
        longtap: 'longtap', //LongPress is recommended instead
        input: 'input',
        change: 'change',
        submit: 'submit',
        blur: 'blur',
        focus: 'focus',
        reset: 'reset',
        confirm: 'confirm',
        columnchange: 'columnchange',
        linechange: 'linechange',
        error: 'error',
        scrolltoupper: 'scrolltoupper',
        scrolltolower: 'scrolltolower',
        scroll: 'scroll'
    }
```

## Form control binding

### v-model

You can form a v-model command `input`, `textarea`and `select`create a two-way data binding on the element. It will automatically select the correct method to update the element based on the control type. While some magic, but `v-model`in essence merely syntactic sugar. It is responsible for monitoring the user's input events to update the data, and perform some special processing on some extreme scenarios.

> v-model ignores all form elements `value`, `checked`, `selected`the initial value of the attribute data while always Vue instance as a data source. You should declare the initial value in the data option of the component via JavaScript.

```html
    <template>
        <view>
            <input v-model="message" placeholder="edit me">
            <text>Message is: {{ message }}</text>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    message:""
                }
            }
        }
    </script>
```

##### Example usage

- H5 The `select`label `picker`for assembly instead of

```html
    <template>
        <view>
            <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="picker">
                    The currently selected：{{array[index]}}
                </view>
            </picker>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    index: 0,
                    array: ['A', 'B', 'C']
                }
            },
            methods: {
                bindPickerChange(e) {
                    console.log(e)
                }
            }
        }
    </script>
```

- Form elements `radio`used `radio-group`for assembly instead of

```html
    <template>
        <view>
            <radio-group class="radio-group" @change="radioChange">
                <label class="radio" v-for="(item, index) in items" :key="item.name">
                    <radio :value="item.name" :checked="item.checked" /> {{item.value}}
                </label>
            </radio-group>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    items: [{
                            name: 'USA',
                            value: 'The United States'
                        },
                        {
                            name: 'CHN',
                            value: 'China',
                            checked: 'true'
                        },
                        {
                            name: 'BRA',
                            value: 'Brazil'
                        },
                        {
                            name: 'JPN',
                            value: 'Japan'
                        },
                        {
                            name: 'ENG',
                            value: 'Britain'
                        },
                        {
                            name: 'TUR',
                            value: 'The French'
                        }
                    ]
                }
            },
            methods: {
                radioChange(e) {
                    console.log('Radio has a change event and carries a value of:', e.target.value)
                }
            }
        }
    </script>
```

## Computed attributes and listeners

### Calculated attribute

Each contains a calculated attribute `getter`and a `setter`default is to use `getter`to read. All `getter`and `setter`the `this`context is automatically bound instance Vue.

#### Getter of calculated property

Binding expressions in templates is very convenient, but they are actually only used for simple operations. Putting too much logic in the template makes the template too heavy and difficult to maintain. E.g:

```html
    <view>
        {{ message.split('').reverse().join('') }}
    </view>
```

Here are the variables you want to display `message`flip string. When you want to include more inverted strings here in the template, it will be more difficult to handle.

Therefore, for any complex logic, you should use **calculated attributes** .

```html
    <template>
        <view>
            <view>Original message: "{{ message }}"</view>
            <view>Computed reversed message: "{{ reversedMessage }}"</view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    message: 'Hello'
                }
            },
            computed: {
                // Computed attribute getter
                reversedMessage(){
                  return this.message.split('').reverse().join('')
                }
            }
        }
    </script>
```

result:

```html
    Original message: "Hello"
    Computed reversed message: "olleH"
```

You can bind as ordinary `property`as calculated binding properties in the template.

Vue know `reversedMessage`rely on `message`, so when `message`change occurs, all dependent `reversedMessage`binding will be updated. And best of all is that we have to declaratively create this dependency: the calculation of property `getter`functions are no side effects (side effect), making it easier to test and understand.

Calculated properties can also depend on the data of multiple Vue instances. As long as any of the data changes, the calculated properties will be re-executed and the view will be updated.

#### Setter of calculated property

When you need it can also provide a `setter`function, when manually modify the calculated value of the property, it will trigger `setter`function, perform some custom actions.

```html
    <template>
        <view>
            <view>{{ fullName }}</view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    firstName: 'Foo',
                    lastName: 'Bar'
                }
            },
            computed: {
                fullName: {
                    // getter
                    get(){
                        return this.firstName + ' ' + this.lastName
                    },
                    // setter
                    set(newValue){
                        var names = newValue.split(' ')
                        this.firstName = names[0]
                        this.lastName = names[names.length - 1]
                    }
                }
            }
        }
    </script>
```

Now run `fullName = 'John Doe'`time, `setter`will be called `firstName`and `lastName`will be updated accordingly.

#### The difference between getter and setter

- get: The new value of fullName can be obtained by setting the get method.
- set: Set a value (newValue) to change the value associated with fullName through the set method, causing the fullName to be recalculated, and the fullName on the corresponding page will also be changed to new content.

### Calculated attribute cache vs method

We can achieve the same effect by calling methods in expressions:

```html
    <template>
        <view>
            <view>Reversed message: "{{ reversedMessage() }}"</view>
        </view>
    </template>
    <script>
        export default {
            data() {
                return {
                    message: 'Hello'
                }
            },
            methods: {
                reversedMessage(){
                    return this.message.split('').reverse().join('')
                }
            }
        }
    </script>
```

You can define the same function as a method instead of a calculated attribute. The final result of the two methods is indeed exactly the same. However, the difference is that **calculated attributes are cached based on their responsive dependencies** .

They will be re-evaluated only when the related reactive dependencies change. This means that as long as `message`no change, many visits to `reversedMessage`the calculation results before the property will return immediately to calculate, without having to perform functions again.

This also means that the following calculated properties will no longer be updated, because Date.now() is not a reactive dependency:

```js
    computed: {
        now(){
            return Date.now()
        }
    }
```

In contrast, whenever a re-render is triggered, the **calling method will always execute the function again** .

Why do we need caching? Suppose we have a computational property A with a relatively large performance overhead, and it needs to traverse a huge array and do a lot of calculations. Then we may have other calculated properties that depend on A. If there is no cache, we will inevitably execute A's getter multiple times! If you do not want to have a cache, please use methods instead.

### Computed attributes vs. listening attributes

Vue provides a more general way to observe and respond to data changes on Vue instances: **listening to properties** . When you have some data that needs to change with other data changes, you can easily abuse it `watch`. Often, however, a better practice is to use the calculation attribute rather than a command-style `watch`callback.

```js
    export default {
        data() {
            return {
                firstName: 'Foo',
                lastName: 'Bar',
                fullName: 'Foo Bar'
            }
        },
        watch: {
            firstName: function(val) {
                this.fullName = val + ' ' + this.lastName
            },
            lastName: function(val) {
                this.fullName = this.firstName + ' ' + val
            }
        }
    }
```

The above code is imperative and repetitive. Compare it with the version of the calculated attribute:

```js
    export default {
        data() {
            return {
                firstName: 'Foo',
                lastName: 'Bar',
                fullName: 'Foo Bar'
            }
        },
        computed: {
            fullName(){
                return this.firstName + ' ' + this.lastName
            }
        }
    }
```

### Listener watch

- Type: {[key: string]: string | Function | Object | Array}

- For an object, the key is the expression to be observed, and the value is the corresponding callback function. The value can also be a method name, or an object containing options. Vue instance will be called upon instantiation `$watch()`, traversing `watch`each object `property`.

- Example:

```html
<template>
    <view>
        <input type="text" v-model="word">
    </view>
</template>
<script>
    export default {
        data() {
            return {
                word: 'word'
            }
        },
        watch: {
            /* Watch is used to respond to changes in data */
            word(newVal, oldVal) {
                console.log('The latest value is: '+newVal ", the original value is:"+ oldVal);
            }
        },
    }
</script>
```

Example:

```html
<script>
    export default {
        data() {
            return {
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: {
                    f: {
                        g: 5
                    }
                }
            }
        },
        watch: {
            a: function(val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal)
            },
            // the method name
            b: 'someMethod',
            // This callback is called whenever the property of any object being listened on changes, regardless of how deeply nested it is
            c: {
                handler: function(val, oldVal) { /* ... */ },
                deep: true
            },
            // This callback will be invoked immediately after the listening begins
            d: {
                handler: 'someMethod',
                immediate: true
            },
            // You can pass in an array of callbacks, and they'll be called one by one
            e: [
                'handle1',
                function handle2(val, oldVal) { /* ... */ },
                {
                    handler: function handle3(val, oldVal) { /* ... */ },
                    /* ... */
                }
            ],
            // watch vm.e.f's value: {g: 5}
            'e.f': function(val, oldVal) { /* ... */ }
        }
    }
</script>
```