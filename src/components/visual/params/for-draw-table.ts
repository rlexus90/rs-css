import { DrawTable } from '../../../types/index';

export const PARAMS: DrawTable = {
    pictureWraper: {
        tag: 'div',
        className: ['picture-wraper'],
    },
    tackDeclataion: {
        tag: 'div',
        className: ['task-declaration'],
    },
    help: {
        tag: 'div',
        className: ['help'],
        content: 'Help me!',
    },
    helpWindov: {
        tag: 'div',
        className: ['help__window', 'hiden'],
    },
    helpText: {
        tag: 'pre',
        className: ['help__text'],
    },
    helpBtn: {
        tag: 'div',
        className: ['help__btn'],
        content: 'Close it!',
        domEvent: 'click',
        callback: () => {
            const helpWindov = document.querySelector('.help__window');
            const helpText: HTMLPreElement | null = document.querySelector('.help__text');
            if (helpText) helpText.innerText = '';
            helpWindov?.classList.add('hiden');
        },
    },
    table: {
        tag: 'div',
        className: ['table'],
    },
    onTable: {
        tag: 'div',
        className: ['on-table'],
    },
    tableLegs: {
        tag: 'div',
        className: ['table-legs'],
    },
    leg: {
        tag: 'div',
        className: ['leg'],
    },
};
