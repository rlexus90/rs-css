export function wrongAnswer() {
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('wrong');
        setTimeout(() => {
            content.classList.remove('wrong');
        }, 400);
    }
}
