var nytInterval;
var nytHiddenPopups   = false;
var nytIsPluginPaused = false;

// create timer on dom load
$( document ).ready(function() {
    // after dom is ready, call function every 1000 milliseconds
    nytInterval = setInterval(nytCheckForActivePopups, 1000);  
});

function nytCheckForActivePopups(){

    // select all div elements with attribute "role" being equal to "presentation" 
    // instagram creates this element when forcing the users to log in and preventing them to scroll further down 
    let popups = $("div[data-testid='dock-gateway']");
    console.log("heeeeeeeee")
    // if the first element of popups list is defined... and if plugin is not paused
    if (popups[0] != undefined && !nytIsPluginPaused){
        
        let window  = $(popups[0]);
        let content = $('#app').children(":first").children(":first");
        let grad = $($('div').filter( function() {
            return $(this).css("background")==="rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)) repeat scroll 0% 0% / auto padding-box border-box"})[0]);
        
        
        
        // enable overflow-y on content block
        content.css("overflow-y", "scroll");
        
        // hide pop-up window
        window.hide();
        
        // hide gradient
        grad.hide();
            
        // clear interval so that this code is no longer called 
        clearInterval(nytInterval);
    }
}


