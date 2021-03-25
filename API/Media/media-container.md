### uni.createMediaContainer()
Creating audio and video processing vessel, the final container can be synthesized one video track, returns `MediaContainer`the object

#### MediaContainer.addTrack(track)
Add audio or video tracks to the container

**Parameter Description**

| parameter | Description                 |
|:-|:-|
|track|Audio or video track to add|

#### MediaContainer.destroy()
 Destroy the container and release resources 

#### MediaContainer.export()
 Combine the tracks in the container and export the video file 

#### MediaContainer.extractDataSource(object)
 The track consolidation in the container and export video files, return `MediaTrack`target 

 **Parameter Description** 

| Attributes | Types of | Required | Description                                     |
|:-|:-|:-|:-|
|source|String| Yes      | Video source address, only supports local files |

#### MediaContainer.removeTrack(track)
Add audio or video tracks to the container

**Parameter Description**

| parameter | Description                    |
|:-|:-|
|track|Audio or video track to remove|


### MediaTrack 
By `MediaContainer.extractDataSource`return.

`MediaTrack` Audio or video track, you can perform some operations on the track

 **Parameter Description** 

| Attributes | Types of | Description                                                  |
|:-|:-|:-|
|kind|String|Track type, read-only, audio: audio track; video: video track	|
|duration|Number|Track length, read only	|
|volume|Number|Volume, valid under audio track, writeable	|

