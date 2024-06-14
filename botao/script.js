document.getElementById('myBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Voce acertou!');
});

window.addEventListener('click', function() {
    alert('Voce errou!');
});