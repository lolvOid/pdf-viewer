# PDF-Viewer-by-Void

This pdf-viewer is using pdfjs
This can generate thumbnails from pdf specific page as image.

#### Usage

Insert these two lines in `<head>`
`<script src="viewer/build/pdf.js"></script>`
`<script src="viewer/pdfThumbnails.js"></script>`

In body script, Insert these

 `<script src="assets/js/jquery.min.js"></script>`
 `<script src="viewer/viewer.js"></script>`

#### Thumbnails Usage

` <img class="card-img-top" src="sample_img.jpg" alt="Card image cap" data-pdf-thumbnail-file="sample.pdf" data-pdf-page="1"> `

Get PDF
`data-pdf-thumbnail-file="sample.pdf"`

Get Thumbnail from page
`data-pdf-page="1"`

----------

#### PDF Usage
##### PDF Source
Insert pdf source

`<pdf-source src="sample.pdf" id="file" >`

##### Create Canvas
` <canvas id="the-canvas" ></canvas> `

##### Change **Next** or **Previous** Page

**use javascript function `goPrev()` and `goNext()`**

Prev Page - `onclick="goPrev()"` , Next - `onclick="goNext()"`

##### Page Number

`<span id="page_num"></span> - <span id="page_count"></span>`


#### Preview
<img src="https://i.ibb.co/XSf3YZ4/2020-10-07-15h32-56.png" alt="2020-10-07-15h32-56" border="0">


