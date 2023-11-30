export class Storage {
    public currentTask!: number;
    public doneTask: number[] = [];
    constructor() {
        this.load();
    }

    private load() {
        const doneTask = window.localStorage.getItem('doneTask');
        const currentTask = window.localStorage.getItem('currentTask');
        this.currentTask = currentTask ? +currentTask : 1;
        this.doneTask = doneTask ? JSON.parse(doneTask) : [];
    }

    public save() {
        const doneTask = JSON.stringify(this.doneTask);
        window.localStorage.setItem('doneTask', doneTask);
        window.localStorage.setItem('currentTask', this.currentTask + '');
    }

    public getCurrentTask(): number {
        return this.currentTask;
    }

    public getDoneTask(): number[] {
        return this.doneTask;
    }

    public setCurrentTask(n: number): void {
        this.currentTask = n;
    }

    public setDoneTask(n: number) {
        if (this.doneTask.includes(n)) return null;
        this.doneTask.push(n);
        this.doneTask.sort((a, b) => a - b);
    }
    public reset() {
        this.currentTask = 1;
        this.doneTask = [];
        this.save();
    }
}
