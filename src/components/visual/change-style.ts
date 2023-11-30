import { allTask, styles } from '../tasks/all-task';

export class ChangeStyle {
    private task: number;
    private style: HTMLLinkElement | undefined;
    constructor(task: number) {
        this.task = task <= allTask.length ? task : allTask.length;
        this.greateStyle();
    }
    public setLevel(task: number) {
        this.task = task <= allTask.length ? task : allTask.length;
        if (this.style) this.style.href = styles[this.task - 1];
    }
    private greateStyle() {
        this.style = document.createElement('link');
        this.style.type = 'text/css';
        this.style.rel = 'stylesheet';
        this.style.href = styles[this.task - 1];
        document.head.appendChild(this.style);
    }
}
