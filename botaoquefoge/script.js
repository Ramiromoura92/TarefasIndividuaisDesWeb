function moveButton() {
    var button = document.getElementById("fugitiveButton");
    var maxWidth = window.innerWidth - button.offsetWidth;
    var maxHeight = window.innerHeight - button.offsetHeight;
    
    var newX = Math.random() * maxWidth;
    var newY = Math.random() * maxHeight;
    
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("fugitiveButton");
    button.addEventListener("click", moveButton);
});