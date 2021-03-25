#### movable-area

Draggable area components.

Since the architecture of app and applet is separated from the logic layer and the view layer, using js to monitor the drag will cause frequent communication between the logic layer and the view layer and affect performance. In order to facilitate high-performance dragging, the platform specially encapsulates `movable-area`components.

`movable-area`Refers to the draggable range, in which embedded `movable-view`components are used to indicate the draggable area.

That is, the finger/mouse is held down and `movable-view`dragged or two-finger zooming, but the drag cannot go out of the `movable-area`specified range.

Of course, you can also use code instead of dragging to trigger `movable-view`the `movable-area`zoom in.

**Property description**

| Attribute name | Types of | Defaults | Description                                                  |
|:-|:-|:-|:-|
|scale-area|Boolean|false|When the movable-view inside is set to support two-finger zoom, setting this value can modify the effective area of the zoom gesture to the entire movable-area|

**Note: The width and height properties of the movable-area must be set, and the default is 10px if it is not set**

- The movable-area app-nvue platform does not support gesture zoom, and conflicts with scrolling.
