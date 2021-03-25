**uni.createAnimation(OBJECT)**

Create an animation instance animation . Call the method of the instance to describe the animation. Finally, the animation data is exported to the animation property of the component through the export method of the animation instance.

**note:**

- The export method will clear the previous animation operation after each call

**OBJECT parameter description:**

| parameter       | Types of | Required | Defaults    | Description                        |
| --------------- | -------- | -------- | ----------- | ---------------------------------- |
| duration        | Integer  | no       | 400         | Animation duration, unit ms        |
| timingFunction  | String   | no       | "linear"    | Define the effect of the animation |
| delay           | Integer  | no       | 0           | Animation delay time, unit ms      |
| transformOrigin | String   | no       | "50% 50% 0" | Set transform-origin               |

**Valid values of timingFunction:**

| value       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| linear      | The speed of the animation is the same from beginning to end |
| ease        | The animation starts at a low speed, then speeds up, and slows down before ending |
| ease-in     | Animation starts at low speed                                |
| ease-in-out | Animation starts and ends at low speed                       |
| ease-out    | The animation ends at low speed                              |
| step-start  | The first frame of the animation jumps to the end state until the end |
| step-end    | The animation always keeps the start state, the last frame jumps to the end state |

```javascript
var animation = uni.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})
```

**animation**

The animation instance can call the following methods to describe the animation, and it will return to itself after the call is over, and support chain call writing.

**List of methods of the animation object:**

style:

| method          | parameter | Description                                                  |
| --------------- | --------- | ------------------------------------------------------------ |
| opacity         | value     | Transparency, parameter range 0~1                            |
| backgroundColor | color     | Color value                                                  |
| width           | length    | Length value, if you pass in Number, px is used by default, and you can pass in length values in other custom units |
| height          | length    | Length value, if you pass in Number, px is used by default, and you can pass in length values in other custom units |
| top             | length    | Length value, if you pass in Number, px is used by default, and you can pass in length values in other custom units |
| left            | length    | Length value, if you pass in Number, px is used by default, and you can pass in length values in other custom units |
| bottom          | length    | Length value, if you pass in Number, px is used by default, and you can pass in length values in other custom units |
| right           | length    | Length value, if you pass in Number, px is used by default, and you can pass in length values in other custom units |

Rotate:

| method  | parameter | Description                                                  |
| ------- | --------- | ------------------------------------------------------------ |
| rotate  | you       | The range of deg is -180~180, rotate one deg angle clockwise from the origin |
| rotateX | you       | deg range -180~180, rotate one deg angle on X axis           |
| rotateY | you       | The range of deg is -180~180, rotate a deg angle on the Y axis |
| rotateZ | you       | The range of deg is -180~180, rotate a deg angle on the Z axis |

Zoom:

| method  | parameter    | Description                                                  |
| ------- | ------------ | ------------------------------------------------------------ |
| scale   | sx, [sy]     | When one parameter is used, it means that the X-axis and Y-axis are simultaneously zoomed by the sx multiple; when two parameters are used, it means that the sx multiple is zoomed on the X-axis and the sy multiple is zoomed on the Y-axis. |
| scaleX  | left         | Scale sx on the X axis                                       |
| scaleY  | his          | Scale sy multiples on the Y axis                             |
| scaleZ  | s            | Zoom sy multiples on the Z axis                              |
| scale3d | (sx, sy, sz) | Zoom sx multiples on the X axis, sy multiples on the Y axis, and sz multiples on the Z axis |

Offset:

| method      | parameter    | Description                                                  |
| ----------- | ------------ | ------------------------------------------------------------ |
| translate   | tx, [ty]     | For one parameter, it means that the offset is tx on the X axis and the unit is px; for two parameters, it means that the offset is tx on the X axis and the offset is ty on the Y axis, and the unit is px. |
| translateX  | tx           | Offset tx on the X axis, in px                               |
| translateY  | ty           | Offset tx on Y axis, unit px                                 |
| translateZ  | tz           | Offset tx on the Z axis, unit px                             |
| translate3d | (tx, ty, tz) | Offset tx on X axis, ty on Y axis, tz on Z axis, unit px     |

tilt:

| method | parameter | Description                                                  |
| ------ | --------- | ------------------------------------------------------------ |
| skew   | ax, [ay]  | The parameter range is -180~180; for one parameter, the Y-axis coordinate is unchanged, and the X-axis coordinate is inclined clockwise by ax degrees; for two parameters, the X-axis is inclined by ax degrees and the Y-axis is inclined by ay degrees. |
| skewX  | ax        | The parameter range is -180~180; the Y-axis coordinate remains unchanged, and the X-axis coordinate extends clockwise by ax degree |
| skewY  | ay        | The parameter range is -180~180; the X-axis coordinate is unchanged, and the Y-axis coordinate is inclined clockwise ay degree |

Matrix deformation:

| method   | parameter       | Description |
| -------- | --------------- | ----------- |
| matrix   | (a,b,c,d,tx,ty) |             |
| matrix3d |                 |             |

**Animation queue**

After calling the animation method of operation to be invoked `step()`to represent a set of animation is complete, you can call any number of animation methods in a group of animation, all animation set animation will begin at the same time, will be the next set of animation after a complete set of animation . `step`It can be passed with a `uni.createAnimation()`different set of configuration parameter specifies the current configuration of the animation.

**Sample code**

```html
<view :animation="animationData" style="background:red;height:100rpx;width:100rpx"></view>
export default{
  data() {
    return {
      animationData: {}
    }
  },
  onShow: function(){
    var animation = uni.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.animationData = animation.export()

    setTimeout(function() {
      animation.translate(30).step()
      this.animationData = animation.export()
    }.bind(this), 1000)
  },
  methods:{
    rotateAndScale: function () {
      // rotate and amplify
      this.animation.rotate(45).scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateThenScale: function () {
      // rotate after amplify
      this.animation.rotate(45).step()
      this.animation.scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateAndScaleThenTranslate: function () {
      // rotate and amplify,after move
      this.animation.rotate(45).scale(2, 2).step()
      this.animation.translate(100, 100).step({ duration: 1000 })
      this.animationData = this.animation.export()
    }
  }
}
```
