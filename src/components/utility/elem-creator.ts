import { Params } from '../../types/index';

export default class ElementCreator {
    private element: HTMLElement;

    constructor(params: Params) {
        this.element = document.createElement(params.tag);
        if (params.className) {
            params.className.forEach((e) => {
                this.element?.classList.add(e);
            });
        }
        if (params.id) this.element.id = params.id;
        if (params.content) this.element.textContent = params.content;
        if (params.callback) this.element.addEventListener(params.domEvent || 'click', params.callback);
    }

    /**
     * getElement
     */
    public getElement() {
        return this.element;
    }

    /**
     * innerHtml
     */
    public innerHtml(elements: HTMLElement[]): void {
        elements.forEach((e) => {
            this.element?.appendChild(e);
        });
    }
}
