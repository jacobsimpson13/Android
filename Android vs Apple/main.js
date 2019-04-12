//Android vs Apple

//AddeventListeners
document.getElementById("android-btn").addEventListener("click" , chooseAndroid);
document.getElementById("apple-btn").addEventListener("click" , chooseApple);

//Event Functions
function chooseAndroid() {
    document.getElementById("main-heading").innerHTML = "I Love Android!";
    document.getElementById("main-img").src = "images/androidlogo.jpg";
    document.getElementById("main-link").innerHTML = "Android Home";
    document.getElementById("main-link").href = "https://www.android.com/";
}



function chooseApple() {
    document.getElementById("main-heading").innerHTML = "I Love Apple!"
    document.getElementById("main-img").src = "images/Applelogo.png";
    document.getElementById("main-link").innerHTML = "Apple Home";
    document.getElementById("main-link").href = "https://www.apple.com/ca/";
}
