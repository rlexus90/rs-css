export function lightElement(event: Event) {
    const target = event.target as HTMLElement;
    const allElement = document.querySelectorAll('.hovered');
    allElement.forEach((e) => e.classList.remove('show'));
    if (target) {
        const classList = target.classList;
        if (classList.contains('hovered')) {
            let id = '';
            for (const el of classList) {
                if (el.includes('id')) id = el;
            }
            const elements = document.querySelectorAll(`.${id}`);
            elements?.forEach((e) => e.classList.add('show'));
        }
    }
}
