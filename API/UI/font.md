### uni.loadFontFace(Object object)

Load web fonts dynamically, the file address must be the download type.

note:

1. Introduce Chinese fonts, errors will occur when the volume is too large, it is recommended to extract part of the Chinese, reduce the volume, or replace it with pictures
4. Native components such as canvas do not support fonts added using the interface
5. The tool prompts Faild to load font can be ignored

**Parameter Description**

| Attributes | Types of | Defaults | Required | Description                                                  |
| :--------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| family     | String   |          | Yes      | Defined font name                                            |
| source     | String   |          | Yes      | The address of the font resource. The recommended formats are TTF and WOFF |
| desc       | Object   |          | no       | Optional font descriptor                                     |
| success    | Function |          | no       | Callback function for successful interface call              |
| fail       | Function |          | no       | Callback function for interface call failure                 |
| complete   | Function |          | no       | The callback function for the end of the interface call (the call will be executed if it succeeds or fails) |

**Structure of Object.desc**

| Attributes | Types of | Defaults | Required | Description                                                  |
| :--------- | :------- | :------- | :------- | :----------------------------------------------------------- |
| style      | String   | normal   | no       | Font style, optional values are normal / italic / oblique    |
| weight     | String   | normal   | no       | Font weight, optional values are normal / bold / 100 / 200../ 900 |
| variant    | String   | normal   | no       | Set the font display text of small capital letters, optional values are normal / small-caps / inherit |

**Code example**

```javascript
uni.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("xxxx.ttf")',
  success() {
      console.log('success')
  }
})
```
