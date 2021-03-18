### uni.onPageNotFound(funciton callback)

There is no event for the page to be opened by the listening application. The event with the `App.onPageNotFound`callback time to coincide

#### parameter

**function callback**

The callback function for the event that the page to be opened does not exist

#### parameter

| Attributes  | Types of |                         Description                          |
| :---------: | :------: | :----------------------------------------------------------: |
|    path     |  String  |   The path of the page does not exist (code package path)    |
|    query    |  Object  |    Open the query parameter of a page that does not exist    |
| isEntryPage | Boolean  | Whether it’s the first page launched this time (for example, coming in from an entry such as sharing, the first page is the sharing page configured by the developer) |

**note**

- Developers can redirect a page in the callback, but it must be synchronized in the callback, asynchronous processing (such as `setTimeout`asynchronous execution) is invalid.
- If the callback is redirected to another page that does not exist, it will be pushed to the client's native page that does not have a prompt page, and there will be no second callback.

### uni.onError(funciton callback)

Monitor small program error events. Such as script error or `API`call the error and so on. 

#### parameter

**function callback**

Callback function for application error event.

#### parameter

**string error**

Error message, including stack.

