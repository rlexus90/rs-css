import './styles/draw-task-window.scss';
import { allTask } from '../tasks/all-task';
import ElementCreator from '../utility/elem-creator';
import { PARAMS } from './params/for-draw-task-window';
import { Params } from '../../types/index';

export class DrawTaskWindow {
    private task: number;
    private doneTasks: number[];
    private levelText: HTMLElement | undefined;
    private levelCheck: HTMLElement | undefined;
    private levelTitle: HTMLElement | undefined;
    private levelTask: HTMLElement | undefined;
    private syntax: HTMLElement | undefined;
    private textContent: HTMLElement | undefined;
    private examplesDescrip: HTMLElement | undefined;
    private choseLevel!: ElementCreator;

    constructor(task: number, doneTasks: number[]) {
        this.task = task <= allTask.length ? task : allTask.length;
        this.doneTasks = doneTasks;
        this.createComponents();
        this.drawLevels();
        this.drawTask();
        this.drawChoseLevel();
    }

    private drawLevels() {
        const nLevels = allTask.length;
        const text = `Level ${this.task} of ${nLevels}`;
        if (this.levelText) this.levelText.innerHTML = text;
        this.approofDone();
    }

    private approofDone() {
        if (this.levelCheck) {
            this.levelCheck.classList.remove('done');
            if (this.doneTasks.includes(this.task)) this.levelCheck.classList.add('done');
        }
    }
    private drawTask() {
        const description = allTask[this.task - 1].description;
        if (this.levelTitle) this.levelTitle.innerHTML = description.title;
        if (this.levelTask) this.levelTask.innerHTML = description.task;
        if (this.syntax) this.syntax.innerHTML = description.syntax;
        if (this.textContent) this.textContent.innerHTML = description.textContent;
        if (this.examplesDescrip) this.examplesDescrip.innerHTML = description.examples;
    }

    public setLevel(task: number, doneTasks: number[]) {
        this.task = task <= allTask.length ? task : allTask.length;
        this.doneTasks = doneTasks;
        this.drawLevels();
        this.drawTask();
        this.drawChoseLevel();
    }

    private drawChoseLevel() {
        const cheskSymbol = '&#10003;';
        this.choseLevel.getElement().innerHTML = '';
        allTask.forEach((task, index) => {
            const divParam: Params = {
                tag: 'div',
                className: ['chose', `${index}`],
            };
            const checkParam: Params = {
                tag: 'span',
                className: ['chose', `${index}`, 'level-check'],
            };
            const textParam: Params = {
                tag: 'span',
                className: ['chose', `${index}`],
                content: `  ${index + 1} -  ${task.description.title}`,
            };
            const div = new ElementCreator(divParam);
            const check = new ElementCreator(checkParam).getElement();
            const text = new ElementCreator(textParam).getElement();
            check.innerHTML = cheskSymbol;

            if (this.doneTasks.includes(index + 1)) check.classList.add('done');
            div.innerHtml([check, text]);
            this.choseLevel.innerHtml([div.getElement()]);
        });
    }

    private createComponents() {
        const nav = document.querySelector('nav');
        const level = new ElementCreator(PARAMS.level);
        const levelText = new ElementCreator(PARAMS.levelText);
        this.levelText = levelText.getElement();
        const levelCheck = new ElementCreator(PARAMS.levelCheck);
        this.levelCheck = levelCheck.getElement();
        this.levelCheck.innerHTML = '&#10003;';
        level.innerHtml([this.levelText, this.levelCheck]);
        nav?.appendChild(level.getElement());
        const prewLewel = new ElementCreator(PARAMS.prewLewel);
        prewLewel.innerHtml([new ElementCreator(PARAMS.div).getElement()]);
        const nextLevel = new ElementCreator(PARAMS.nextLevel);
        nextLevel.innerHtml([new ElementCreator(PARAMS.div).getElement()]);
        const menu = new ElementCreator(PARAMS.menu);
        const menuSpan1 = new ElementCreator(PARAMS.menuSpan);
        const menuSpan2 = new ElementCreator(PARAMS.menuSpan);
        const menuSpan3 = new ElementCreator(PARAMS.menuSpan);
        menu.innerHtml([menuSpan1.getElement(), menuSpan2.getElement(), menuSpan3.getElement()]);
        const navButtons = new ElementCreator(PARAMS.navButtons);
        navButtons.innerHtml([prewLewel.getElement(), nextLevel.getElement(), menu.getElement()]);
        nav?.appendChild(navButtons.getElement());

        const levelContent = new ElementCreator(PARAMS.levelContent);
        const levelTitle = new ElementCreator(PARAMS.levelTitle);
        this.levelTitle = levelTitle.getElement();
        const levelTask = new ElementCreator(PARAMS.levelTask);
        this.levelTask = levelTask.getElement();
        const syntax = new ElementCreator(PARAMS.syntax);
        this.syntax = syntax.getElement();
        const textContent = new ElementCreator(PARAMS.textContent);
        this.textContent = textContent.getElement();
        const examples = new ElementCreator(PARAMS.examples);
        const examplesDescrip = new ElementCreator(PARAMS.examplesDescrip);
        this.examplesDescrip = examplesDescrip.getElement();
        examples.innerHtml([this.examplesDescrip]);
        const levelList = new ElementCreator(PARAMS.levelList);
        this.choseLevel = new ElementCreator(PARAMS.choseLevel);
        const levelListReset = new ElementCreator(PARAMS.levelListReset);
        levelList.innerHtml([this.choseLevel.getElement(), levelListReset.getElement()]);
        levelContent.innerHtml([
            this.levelTitle,
            this.levelTask,
            this.syntax,
            this.textContent,
            examples.getElement(),
            levelList.getElement(),
        ]);
        const aside = document.querySelector('aside');
        aside?.appendChild(levelContent.getElement());
    }
}
