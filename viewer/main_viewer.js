pdfjsLib.getDocument('http://localhost:8000/pdfs/22baec4a7a94f8182130d6c8a5b6eda2.pdf"').promise.then((pdf) => {
 
    // more code here
    myState.pdf = pdf;
    
    render();
 
});

function render(){
    myState.pdf.getPage(myState.currentPage).then((page)=>{
        var canvas = document.getElementById("the-canvas");
        var ctx = canvas.getContext('2d');
 
        var viewport = page.getViewport({scale:myState.zoom});
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.scale *= myState.zoom;
        page.render({
            canvasContext: ctx,
            viewport: viewport
        });

        //document.getElementById("page_count") = myState.pdf._pdfInfo.numPages;
    })
}

document.getElementById('prev').addEventListener('click', (e) => {
    if(myState.pdf == null|| myState.currentPage == 1) return;
    myState.currentPage -= 1;
    document.getElementById("page_num").value = myState.currentPage;
    render();
});

document.getElementById('next').addEventListener('click', (e) => {
    if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) 
        return;
    
    myState.currentPage += 1;
    document.getElementById("page_num").value = myState.currentPage;
    render();
});        



        document.getElementById('zoomIn').addEventListener('click', (e) => {
            if(myState.pdf == null) return;
            myState.zoom += 0.5;
            
            render();
        });

        document.getElementById('zoomOut').addEventListener('click', (e) => {
            if(myState.pdf == null) return;
            myState.zoom -= 0.5;
            render();
        });

        