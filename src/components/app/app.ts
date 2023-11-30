import { ChangeStyle } from '../visual/change-style';
import { DrawHTMLViewer } from '../visual/draw-HTML-viewer';
import { DrawTable } from '../visual/draw-table';
import { DrawTaskWindow } from '../visual/draw-task-window';
import { Storage } from '../utility/storage-load';
import { allTask } from '../tasks/all-task';
import { lightElement } from '../utility/lightElement';
import { wrongAnswer } from '../utility/wrong-answer';
import { checkDoneTask } from '../utility/check-donetask';

export class App {
    private task: number;
    private doneTasks: number[];
    private drawTaskWindow: DrawTaskWindow;
    private drawHTMLViewer: DrawHTMLViewer;
    private drawTable: DrawTable;
    private changeStyle: ChangeStyle;
    private storage: Storage;

    constructor() {
        this.storage = new Storage();
        this.task = this.storage.getCurrentTask();
        this.doneTasks = this.storage.getDoneTask();
        this.drawTaskWindow = new DrawTaskWindow(this.task, this.doneTasks);
        this.drawHTMLViewer = new DrawHTMLViewer(this.task);
        this.drawTable = new DrawTable(this.task);
        this.changeStyle = new ChangeStyle(this.task);
        this.addEventListner();
    }
    private setLevel() {
        this.drawTaskWindow.setLevel(this.task, this.doneTasks);
        this.drawHTMLViewer.setLevel(this.task);
        this.drawTable.setLevel(this.task);
        this.changeStyle.setLevel(this.task);
        this.storage.setCurrentTask(this.task);
    }

    private addEventListner() {
        const prewLewel = document.querySelector('.prew-level');
        const nTask = allTask.length;
        prewLewel?.addEventListener('click', () => {
            this.task = this.task === 1 ? 1 : this.task - 1;
            this.setLevel();
        });

        const nextLevel = document.querySelector('.next-level');
        nextLevel?.addEventListener('click', () => {
            this.task = this.task < nTask ? this.task + 1 : nTask;
            this.setLevel();
        });

        const input = document.querySelector('input');
        input?.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter') this.getAnswer();
        });

        const button = document.querySelector('.button');
        button?.addEventListener('click', () => {
            this.getAnswer();
        });

        const taskContent = document.querySelector('.task-content');
        taskContent?.addEventListener('mouseover', lightElement);

        const onTable = document.querySelector('.on-table');
        onTable?.addEventListener('mouseover', lightElement);
        onTable?.addEventListener('mouseout', () => {
            const allElement = document.querySelectorAll('.hovered');
            allElement.forEach((e) => e.classList.remove('show'));
        });

        const reset = document.querySelector('.levelList-reset');
        reset?.addEventListener('click', () => {
            this.doneTasks = [];
            this.task = 1;
            this.setLevel();
            this.storage.reset();
        });

        const choseLevel = document.querySelector('.choseLevel');
        choseLevel?.addEventListener('click', (ev) => {
            const target = ev.target as HTMLElement;
            if (target.classList.contains('chose')) {
                this.task = +target.classList[1] + 1;
                this.setLevel();
            }
        });

        window.addEventListener('beforeunload', () => {
            this.storage.save();
        });
    }

    private getAnswer() {
        const answer = allTask[this.task - 1].answer;
        const input = document.querySelector('input');
        const ans = input?.value.replace('{', '').replace('}', '').trim();
        const nTask = allTask.length;
        answer.forEach((e) => {
            if (ans === e) {
                this.storage.setDoneTask(this.task);
                this.doneTasks = this.storage.getDoneTask();
                this.task = this.task < nTask ? this.task + 1 : nTask;
                if (input) input.value = '';
                this.setLevel();
                checkDoneTask(this.doneTasks);
            } else {
                wrongAnswer();
            }
        });
    }
}
