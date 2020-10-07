    var nav = document.getElementById("navbar");
    document.getElementById("mySidenav").style.width = "300px";
    var footer = document.getElementById("footer");
    var NavtimeOut;
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        navbar.style.top = "-100px";
        footer.style.bottom = "-100px";
        NavtimeOut = setTimeout(function(){closeNav();}, 1500);
    }
  
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        showTop();
    }
    function showTop(){
        navbar.style.top = "0";
        footer.style.bottom = "0";
    }

    function hideTop(){
        navbar.style.top = "-100px";
        footer.style.bottom = "-100px";
    }

    function showNav(){
        navbar.style.top = "0";
        footer.style.bottom = "0";
    }

    function hideNav(){
        navbar.style.top = "-100px";
        footer.style.bottom = "-100px";
    }

    $( document ).on( "mousemove", function( event ) {
        if(event.pageY== 0 || event.pageY == ($(window).height() -event.pageY)){
            showNav();
        }
    });

//   $( "#readerContainer" ).click(function() {
//     if(event.pageY>0 && event.pageX >0 ){
//         window.setTimeout(hideTop,1000);
//     }
//   });
  

    $(document).ready(function() { 
        NavtimeOut = setTimeout(function(){closeNav();}, 1500);
    });

    $("#mySidenav").mouseenter(function() {
        clearTimeout(NavtimeOut);
    }).mouseleave(function() {
        NavtimeOut = setTimeout(function(){closeNav();}, 1500);
    });

    var isPlaying = false;  
    var audioClip = null;
    var oldUrl = "";
    var isReset = false;


    function loadAudio(audio,url){
        audio.src = url;
        audio.load();
        audio.loop = true;
        audio.autoplay = false;
        audio.volume = 0.8;
        
    }

    function toggleAudioPlay(url,tag){            

        var audioIcons = document.querySelectorAll('#audioIcon');
        audioIcons.forEach(a => a.className = "text-black-50 btn fas fa-volume-up");
        
        if(!isPlaying ){
            
            if(audioClip == null){                
                oldUrl = url;                                
                audioClip = new Audio();
                loadAudio(audioClip,oldUrl);
            }
            else{                               
                if(url!=oldUrl){                                                       
                    oldUrl = url;                                    
                    loadAudio(audioClip,oldUrl);               
                }
            }                    
        }
        
        if(audioClip!=null){
            
            if(isPlaying){
                audioClip.pause();    
                tag.children[0].className = "text-black-50 btn fas fa-volume-up";                
            }
            else{                
                audioClip.play();
                tag.children[0].className = "text-black-50 btn fas fa-pause";
            }

            audioClip.onplaying = function(){
                isPlaying = true;
            }
            audioClip.onpause = function(){
                isPlaying = false;
            }
            // audioClip.onended = function () {
            //     isPlaying = false;
            //     tag.children[0].className = "text-black-50 btn fas fa-volume-up";                
            //   }
            
        }
        console.log("isResetting - " + isReset);
        console.log("isPlaying - " + isPlaying);
    }

        
       

     
      


      
            
        

    