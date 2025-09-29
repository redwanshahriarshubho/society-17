// script.js
document.querySelectorAll('.read-btn').forEach(button => {
    button.addEventListener('click', () => {
        const status = button.nextElementSibling;
        status.classList.remove('hidden');
        button.textContent = 'Marked';
        button.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
        button.classList.add('bg-gray-400', 'cursor-default');
        button.disabled = true;
    });
});