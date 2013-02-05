jquery-remap
============

jQuery responsive design or dynamic size image map remaping plugin

## Why is this useful?
With the current trend of responsive web design sites now need the ability to scale elements relative to the overall browser size. Many sites make use of image maps which contain pixel based coordinates representing different clickable areas on the respective image. When that image is scaled the image map does not automatically scale making image maps impractical for responsive design.

Thats where jQuery Remap comes in: Simply call .remap() on your image and now no matter what size the image is scaled to the image map is also scaled proportionally.

## Usage
```js
$(function() {
  $('img').remap();  
});
```
Using jQuery Remap couldn't be simpler, call .remap() on an image or collection of images. This has been tested using jQuery 1.9.0 and uses no deprecated functions.
