### uni.pageScrollTo(OBJECT)

Scroll the page to the target position.

**OBJECT parameter description**

| parameter name | Types of | Required | Description                                                  |
| :------------- | :------- | :------- | :----------------------------------------------------------- |
| scrollTop      | String   | Yes      | Scroll to the target position of the page (in px)            |
| duration       | Number   | no       | The duration of the scroll animation, the default is 300ms, the unit is ms |
| success        | function | no       | Callback function for successful interface call              |
| fail           | function | no       | Callback function for interface call failure                 |
| complete       | function | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**selector syntax** selector is similar to CSS selector, but only supports the following syntax.

- ID selector: #the-id
- Class selector (multiple can be specified consecutively):`.a-class.another-class`
- Child element selector:`.the-parent > .the-child`
- Descendant selector:`.the-ancestor .the-descendant`
- Descendant selector across custom components:`.the-ancestor >>> .the-descendant`
- Union of multiple selectors:`#a-node, .some-other-nodes`

**Example**

```javascript
uni.pageScrollTo({
    scrollTop: 0,
    duration: 300
});
```