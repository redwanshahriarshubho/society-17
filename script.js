// script.js
document.getElementById('toggleButton').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
});