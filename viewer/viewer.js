var pdfDoc = null;
var pageNum;
var ctx;

var scale = 1;
const file  = document.querySelector("pdf-source").getAttribute("src");



// http://localhost:8000/pdfs/22baec4a7a94f8182130d6c8a5b6eda2.pdf

window.onload = function () {
  var scaleSelect = document.getElementById("scaleSelect");
  scale =  scaleSelect.options[scaleSelect.selectedIndex].value;
  // var url = "../pdfs/demobook.pdf";
  renderPDF(file);
      
}

function renderPDF(url) {
  pdfDoc = null;
  scale = scale;
  pageNum = 1;
  canvas = document.getElementById('the-canvas');
  ctx = canvas.getContext('2d');
  pdfjsLib.disableWorker = true;

  pdfjsLib.getDocument(url, false, null,
      function (progress) {
        var percent_loaded = (progress.loaded / progress.total) * 100;
        updateProgressBar(percent_loaded);
      })
    .promise.then(function getPdf(_pdfDoc) {
      pdfDoc = _pdfDoc;
     
        renderPage(pageNum);  

      
    })
    .catch(function (_pdfDoc) {
      // error
    });


}

pdfjsLib.disableWorker = true;

function base64ToUint8Array(base64) {
  var raw = atob(base64);
  var uint8Array = new UintArray(new ArrayBuffer(raw.length));
  for (var i = 0; i < raw.length; i++) {
    uint8Array[i] = raw.charCodeAt(i);
  }
  return uint8Array;
}

function renderPage(num) {
  pdfDoc.getPage(num).then(function (page) {
    var viewport = page.getViewport({
      scale: scale
    });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    page.render(renderContext);
  });
  document.getElementById('page_num').textContent = pageNum;
  document.getElementById('page_count').textContent = pdfDoc.numPages;
}




function goPrev() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  renderPage(pageNum);
}

function goNext() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  renderPage(pageNum);
}



function zoom(newScale) {
  // Using promise to fetch the page
  pdfDoc.getPage(pageNum).then(function (page) {
    var viewport = page.getViewport({scale: scale,});
    canvas.height = viewport.height  ;
    canvas.width = viewport.width ;
    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    page.render(renderContext);
  });
}

function zoomIn() {
  var scaleSelect = document.getElementById("scaleSelect");
  var last = scaleSelect.options.length - 1;
  if (scaleSelect.selectedIndex < last) {
    scale = scaleSelect.options[scaleSelect.selectedIndex + 1].value;
    scaleSelect.selectedIndex += 1;
    zoom(scale);
  }
}

function zoomOut() {
  var scaleSelect = document.getElementById("scaleSelect");
  var last = scaleSelect.options.length - 1;
  if (scaleSelect.selectedIndex > 0) {
    scale = scaleSelect.options[scaleSelect.selectedIndex - 1].value;
    scaleSelect.selectedIndex -= 1;
    zoom(scale);
  }
}

function zoomSelect() {
  var scaleSelect = document.getElementById("scaleSelect");
  scale = scaleSelect.options[scaleSelect.selectedIndex].value;
  zoom(scale);
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == "37") {
    goPrev();
  }
  if (event.keyCode == "39") {
    goNext();
  }
});