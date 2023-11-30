import './styles/draw-HTML-viewer.scss';
import ElementCreator from '../utility/elem-creator';
import { allTask } from '../tasks/all-task';
import { Childes, Params } from '../../types/index';
import { NUMBERLINES, TAB } from '../../constants';

export class DrawHTMLViewer {
    private task: number;
    constructor(task: number) {
        this.task = task <= allTask.length ? task : allTask.length;
        this.drawLineNubers();
        this.createComponents();
    }

    private drawLineNubers() {
        const element = document.querySelectorAll('.line-numbers');
        let text = '';
        for (let i = 1; i <= NUMBERLINES; i += 1) {
            text += `${i} <br>`;
        }
        element.forEach((e) => {
            e.innerHTML = text;
        });
    }

    public setLevel(task: number) {
        this.task = task <= allTask.length ? task : allTask.length;
        this.createComponents();
    }

    private createComponents() {
        const taskContent = document.querySelector('.task-content');

        const htmlContent = allTask[this.task - 1].htmlContent;

        if (taskContent) {
            taskContent.innerHTML = '';
            taskContent.appendChild(this.appendEl(htmlContent));
        }
    }

    private appendEl(obj: Childes) {
        const element = new ElementCreator({ tag: 'div' });
        if (obj.childes) {
            const firstParam: Params = {
                tag: 'pre',
                content: obj.tab ? TAB.repeat(obj.tab) + obj.firstLine : obj.firstLine,
                className: obj.className,
                id: obj.id,
            };
            const first = new ElementCreator(firstParam).getElement();
            const lastParam: Params = {
                tag: 'pre',
                content: obj.tab ? TAB.repeat(obj.tab) + obj.lastLine : obj.lastLine,
                className: obj.className,
                id: obj.id,
            };
            element.innerHtml([first]);
            obj.childes.forEach((e) => {
                element.innerHtml([this.appendEl(e)]);
            });
            const last = new ElementCreator(lastParam).getElement();
            element.innerHtml([last]);
        } else {
            const firstParam: Params = {
                tag: 'pre',
                content: obj.tab ? TAB.repeat(obj.tab) + obj.firstLine + obj.lastLine : obj.firstLine + obj.lastLine,
                className: obj.className,
                id: obj.id,
            };
            const first = new ElementCreator(firstParam).getElement();
            element.innerHtml([first]);
        }
        return element.getElement();
    }
}
