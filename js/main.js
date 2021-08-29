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