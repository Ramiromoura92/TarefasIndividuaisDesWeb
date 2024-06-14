document.addEventListener('DOMContentLoaded', (event) => {
    const apples = document.querySelectorAll('.apple');

    apples.forEach(apple => {
        apple.addEventListener('click', () => {
            apple.style.display = 'none';
        });
    });
});