import './styles/draw-table.scss';
import { allTask } from '../tasks/all-task';
import ElementCreator from '../utility/elem-creator';
import { PARAMS } from './params/for-draw-table';
import { Childes, Params } from '../../types/index';
import { enterHelpText } from './enter-help-text';

export class DrawTable {
    private task: number;
    private tackDeclataion: HTMLElement | undefined;
    private onTable: HTMLElement | undefined;

    constructor(task: number) {
        this.task = task <= allTask.length ? task : allTask.length;
        this.createComponents();
        this.parseTask();
    }

    public setLevel(task: number) {
        this.task = task <= allTask.length ? task : allTask.length;
        const helpText: HTMLPreElement | null = document.querySelector('.description');
        if (helpText) helpText.innerHTML = '';
        this.parseTask();
    }

    private parseTask() {
        const task = allTask[this.task - 1];
        const childes = task.htmlContent.childes;
        if (this.tackDeclataion) this.tackDeclataion.innerHTML = task.title;
        if (this.onTable) {
            this.onTable.innerHTML = '';
            childes.forEach((e) => {
                this.onTable?.appendChild(this.tableFill(e));
            });
        }
    }

    private tableFill(obj: Childes) {
        const task = allTask[this.task - 1];
        const images = task.image;
        const id = obj.id;
        const params: Params = {
            tag: 'div',
            className: obj.className,
        };
        const imgParams: Params = {
            tag: 'img',
            className: obj.className,
        };
        const element = new ElementCreator(params);

        if (obj.childes) {
            obj.childes.forEach((e) => {
                element.innerHtml([this.tableFill(e)]);
            });
            if (id) {
                const img = new ElementCreator(imgParams).getElement() as HTMLImageElement;
                img.src = images[`${id}`].src;
                element.innerHtml([img]);
            }
        } else {
            if (id) {
                const img = new ElementCreator(imgParams).getElement() as HTMLImageElement;
                img.src = images[`${id}`].src;
                element.innerHtml([img]);
            }
        }
        return element.getElement();
    }

    private createComponents() {
        const picture = document.querySelector('.picture');
        const pictureWraper = new ElementCreator(PARAMS.pictureWraper);
        const tackDeclataion = new ElementCreator(PARAMS.tackDeclataion);
        const help = new ElementCreator(PARAMS.help);
        help.getElement().addEventListener('click', () => {
            enterHelpText(this.task);
        });
        const helpWindov = new ElementCreator(PARAMS.helpWindov);
        const helpText = new ElementCreator(PARAMS.helpText);
        const helpBtn = new ElementCreator(PARAMS.helpBtn);
        const table = new ElementCreator(PARAMS.table);
        const onTable = new ElementCreator(PARAMS.onTable);
        const tableLegs = new ElementCreator(PARAMS.tableLegs);
        tableLegs.innerHtml([new ElementCreator(PARAMS.leg).getElement(), new ElementCreator(PARAMS.leg).getElement()]);
        helpWindov.innerHtml([helpText.getElement(), helpBtn.getElement()]);
        this.tackDeclataion = tackDeclataion.getElement();
        this.onTable = onTable.getElement();
        table.innerHtml([this.onTable, tableLegs.getElement()]);
        pictureWraper.innerHtml([this.tackDeclataion, help.getElement(), helpWindov.getElement(), table.getElement()]);
        picture?.appendChild(pictureWraper.getElement());
    }
}
