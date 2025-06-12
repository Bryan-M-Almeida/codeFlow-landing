document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

        document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);

        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
