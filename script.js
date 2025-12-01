// ======================
// Menu toggle
// ======================
function toggleMenu(){
    const nav = document.getElementById("mobileMenu");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// ======================
// Share Page
// ======================
function sharePage(){
    if(navigator.share){
        navigator.share({
            title: 'Sopno Puron Foundation',
            text: 'Join us in spreading humanity!',
            url: window.location.href
        });
    } else {
        alert("Share option not supported on this device.");
    }
}

// ======================
// Firebase Alert Helper
// ======================
function showAlert(msg){
    console.log("ALERT:", msg);
}
