import { DrawTaskWindow } from '../../../types/index';

export const PARAMS: DrawTaskWindow = {
    level: {
        tag: 'p',
        className: ['level-content'],
    },
    levelText: {
        tag: 'span',
        className: ['level-text'],
    },
    levelCheck: {
        tag: 'span',
        className: ['level-check'],
    },
    navButtons: {
        tag: 'div',
        className: ['nav-buttons'],
    },
    prewLewel: {
        tag: 'div',
        className: ['prew-level'],
    },
    nextLevel: {
        tag: 'div',
        className: ['next-level'],
    },
    menu: {
        tag: 'div',
        className: ['menu'],
        callback: () => {
            const menu = document.querySelector('.menu');
            menu?.classList.toggle('open');
            const levelList = document.querySelector('.levelList');
            levelList?.classList.toggle('hiden');
        },
        domEvent: 'click',
    },
    levelContent: {
        tag: 'div',
        className: ['level'],
    },
    levelTitle: {
        tag: 'h2',
        className: ['level__title'],
    },
    levelTask: {
        tag: 'p',
        className: ['level__task'],
    },
    syntax: {
        tag: 'p',
        className: ['level__syntax'],
    },
    textContent: {
        tag: 'p',
        className: ['level__textContent'],
    },
    examples: {
        tag: 'div',
        className: ['level__examples'],
        content: 'Examples',
    },
    examplesDescrip: {
        tag: 'p',
    },
    menuSpan: {
        tag: 'span',
    },
    div: {
        tag: 'div',
    },
    levelList: {
        tag: 'div',
        content: 'Choose a level',
        className: ['levelList', 'hiden'],
    },
    choseLevel: {
        tag: 'div',
        className: ['choseLevel'],
    },
    levelListReset: {
        tag: 'div',
        content: 'Reset Progress',
        className: ['levelList-reset', 'hiden'],
    },
};
