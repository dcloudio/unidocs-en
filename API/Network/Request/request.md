### uni.request(OBJECT)
Initiate a network request.

**OBJECT parameter description**

| parameter name | Types         | Required | Defaults | Description                                                  | Platform difference description |
| :------------- | :------------ | :------- | :------- | :----------------------------------------------------------- | :------------------------------ |
| url            | String        | Yes      |          | Developer server interface address                           |                                 |
| data           | Object/String | no       |          | Requested parameters                                         |                                 |
| header         | Object        | no       |          | Set the requested header. Referer cannot be set in the header. |                                 |
| method         | String        | no       | GET      | See the description below for valid values                   |                                 |
| dataType       | String        | no       | json     | If set to json, it will try to do a JSON.parse on the returned data |                                 |
| success        | Function      | no       |          | Receive the callback function successfully returned by the developer server |                                 |
| fail           | Function      | no       |          | Callback function for interface call failure                 |                                 |
| complete       | Function      | no       |          | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |                                 |

**method valid value**

Must be capitalized.

**success return parameter description**

| parameter  | Types                     | Description                                                  |
| :--------- | :------------------------ | :----------------------------------------------------------- |
| data       | Object/String/ArrayBuffer | Data returned by the developer server                        |
| statusCode | Number                    | HTTP status code returned by the developer server            |
| header     | Object                    | HTTP Response Header returned by the developer server        |
| cookies    | `Array.<string>`          | Cookies returned by the developer server, in the format of a string array |

**data data description**

The final data sent to the server is of type String. If the incoming data is not of type String, it will be converted to String. The conversion rules are as follows:

- For the `GET`method, it converts the data query string. For example `{ name: 'name', age: 18 }`the result of transformation is `name=name&age=18`.
- For the `POST`method and `header['content-type']`of `application/json`the data, will JSON serialization.
- For the `POST`method and `header['content-type']`for the `application/x-www-form-urlencoded`data, converts the data query string.

**Example**

```javascript
uni.request({
    url: 'https://www.example.com/request', //Example only, not the real interface address.
    data: {
        text: 'uni.request'
    },
    header: {
        'custom-header': 'hello' //Customize request header information
    },
    success: (res) => {
        console.log(res.data);
        this.text = 'request success';
    }
});
```

**return value**

If you want to return an `requestTask`object that need to pass at least a success / fail / complete parameters. E.g:

```javascript
var requestTask = uni.request({
	url: 'https://www.example.com/request', //Example only, not the real interface address.
	complete: ()=> {}
});
requestTask.abort();
```

**Example**

```javascript
const requestTask = uni.request({
	url: 'https://www.example.com/request', //Example only, not the real interface address.
	data: {
        name: 'name',
        age: 18
	},
	success: function(res) {
		console.log(res.data);
	}
});
```
