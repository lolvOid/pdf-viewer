<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Viewer</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/icons.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.css">
    <!-- <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script> -->
    
    <script src="viewer/build/pdf.js"></script>
    <script src="viewer/pdfThumbnails.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px&display=swap" rel="stylesheet">
</head>
<body>
    

    <pdf-source src="pdfs/demobook.pdf" id="file" >
    
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" id="navbar">
        
        <h3 class=" title ml-4 mt-1 Slabo">The Crying Book</h3>    
    </nav>

    <!-- data-pdf-thumbnail-file="pdfs/demobook.pdf" data-pdf-page="1" -->

    <div class="container-fluid" id="readerContainer" >
        <div class="main-wrapper"  >
            <div class="viewer">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" id="loadingBar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
                <div class="content-viewer">
                    <canvas id="the-canvas" ></canvas>
                    
                </div>
                
                <div class="page-prev">
                    <button class="btn btn-prev" id="prev" onclick="goPrev()"><i class="fas fa-chevron-left fa-2x"></i></button>                     
                </div>
                <div class="page-next">
                    <button class="btn btn-next" id="next" onclick="goNext()"><i class="fas fa-chevron-right fa-2x"></i></button>
                </div>
            </div>
        </div>

        <div class="footer navbar-light" id="footer">
            
            <div class="d-flex justify-content-md-end ml-4 mb-0 ">
                <div class="p-2" id="scaleSelectContainer" >
                
                    <select class="form-control" id="scaleSelect" title="zoom select" onclick="zoomSelect()">                
             
                        <option value="0.8">Fit</option>
                        <option value="1">100%</option>
                        <option value="1.25">125%</option>
                        <option value="1.5">150%</option>
                        <option value="1.75">175%</option>
                        <option value="2">200%</option>
                        
                    </select>
                </div>
                <!-- <div class="p-2">
                    
                    <button id="zoomIn" class="btn" title="Zoom In" onclick="zoomIn()"  >
                        <i class="mdi mdi-magnify-plus  mdi-36px text-black-50"></i>
                    </button>
                </div>
                <div class="p-2">
                    
                    <button id="zoomOut" class="btn"  title="Zoom Out" onclick="zoomOut()"  >
                        <i class="mdi mdi-magnify-minus  mdi-36px text-black-50"></i>
                    </button>
                </div> -->
                <div class="p-2 ">
                    <button class="btn" id="download" title="Download"><i class="mdi mdi-download mdi-36px text-black-50"></i></button>
                </div>
                <div class="p-2 ">
                    <button class="btn" id="print" title="Print" onclick="print()"><i class="mdi mdi-printer mdi-36px text-black-50"></i></button>
                </div>
                <div class="p-2 ">
                    <button class="btn" title="fullscreen"><i class="mdi mdi-fullscreen mdi-36px text-black-50"></i></button>
                </div>

                <div class="p-2 align-self-center text-black-50">              
                    <span>Page</span> <span id="page_num"></span> - <span id="page_count"></span>
                </div>

              
                <div class="p-2 ">
                    <button class="btn" title="Export"><i class="mdi mdi-file-export mdi-36px text-black-50"></i></b>
                </div>
            </div>

            
        </div>
    </div>

    <!-- jQuery  -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="../assets/js/waves.min.js"></script>
    <script src="viewer/viewer.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    
    <!-- App js -->
    <script src="../assets/js/app.js"></script>
</body>
</html>