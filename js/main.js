// aktif olarak gösterilen sayfayı gizler. ilk durumu kapalı olan sayfayı ekrana getirir.

function hamburgeropen() {
    
    var open = document.getElementById("isactiveid");
    if (open.style.display === "none") {
        open.style.display = "block";
    } else {
        open.style.display = "none";
    }    
    var close = document.getElementById("closemobilenav");
    if (close.style.display === "block"){
        close.style.display = "none";
    } else {
        close.style.display = "block";
    }
}

// tam hamburgeropen ile aynı mantık
function hamburgerclose(){
    var closeid = document.getElementById("isactiveid");
    if (closeid.style.display === 'block'){
        closeid.style.display = 'none';
    } console.log('btn clicked')
    var close = document.getElementById("closemobilenav");
    if (close.style.display === "block") {
        close.style.display = "none";
    } else {
        close.style.display = "block";
    }
}



var coll = document.getElementsByClassName("collapsible");
var i;
var closeimg = document.getElementsByClassName("arrowimg");

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        
        var content = this.nextElementSibling;
        
        if (content.style.display === "block") {
            
            content.style.display = "none";
        } else {
            
            content.style.display = "block";
        }
    });
}




// mobile collapsible menu

var mobilecoll = document.getElementsByClassName("mobilecollapsible");
var mobilei;
var mobilecloseimg = document.getElementsByClassName("mobilearrowimg");

for (i = 0; i < mobilecoll.length; i++) {
    mobilecoll[i].addEventListener("click", function () {

        var content = this.nextElementSibling;

        if (content.style.display === "block") {

            content.style.display = "none";
        } else {

            content.style.display = "block";
        }
    });
}





