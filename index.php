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
    

   <div class="row d-flex justify-content-center">
       <div class="col-3 m-t-10">
         <a href="viewer.php">                       
            <img class="card-img-top" src="assets/images/small/img-1.jpg" alt="Card image cap"
                        data-pdf-thumbnail-file="pdfs/demobook.pdf" data-pdf-page="1">    
            <h5 class=" text-black-50 text-center">Open PDF</h5>
        </a>
       </div>
   </div>

    <!-- jQuery  -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!-- <script src="assets/js/main.js"></script> -->
    <script src="../assets/js/waves.min.js"></script>
    <script src="viewer/viewer.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    
    <!-- App js -->
    <script src="../assets/js/app.js"></script>
</body>
</html>