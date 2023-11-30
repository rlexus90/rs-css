import { Params } from '../../types/index';
import { allTask } from '../tasks/all-task';
import ElementCreator from './elem-creator';

export function checkDoneTask(arr: number[]) {
    const target = allTask.map((el, ind) => ind + 1);
    console.log(target, arr);
    if (arr.join('') === target.join('')) return congratulations();
}

function congratulations() {
    const windowParam: Params = {
        tag: 'div',
        className: ['congratulations'],
    };
    const textParam: Params = {
        tag: 'div',
        className: ['congratulations__text'],
        content: 'Congratulations you done all levels',
    };
    const buttonParam: Params = {
        tag: 'div',
        className: ['congratulations__button'],
        content: 'Thanks',
        callback: () => {
            const window = document.querySelector('.congratulations');
            window?.remove();
        },
        domEvent: 'click',
    };

    const window = new ElementCreator(windowParam);
    const text = new ElementCreator(textParam);
    const button = new ElementCreator(buttonParam);

    window.innerHtml([text.getElement(), button.getElement()]);
    const body = document.querySelector('body');
    body?.appendChild(window.getElement());
}
