import img1 from './images/plate.png';
import img2 from './images/tomato.png';

import { Task } from '../../types/index';

export const task10: Task = {
    title: 'Select small tomato and all plate',
    answer: ['.small, plate', 'plate, .small'],
    description: {
        title: 'Comma Combinator',
        task: 'Combine, selectors, with... commas!',
        syntax: 'A, B',
        textContent: `Thanks to Shatner technology, this selects all 
        <span class="level-span"> &nbsp; A &nbsp;</span> and
        <span class="level-span"> &nbsp; B &nbsp;</span> 
        elements. You can combine any selectors this way, and you can specify more than two.`,
        examples: `<span class="level-span"> &nbsp; p, .fun &nbsp;</span>  selects all
        <span class="level-span"> &nbsp; &lt; p &gt; &nbsp;</span> 
        elements as well as all elements with 
        <span class="level-span"> &nbsp; class="fun" &nbsp;</span> `,
    },
    image: {
        '1': {
            src: img1,
            note: '<plate></plate>',
        },
        '2': {
            src: img2,
            note: '<plate></plate>',
        },
    },
    htmlContent: {
        firstLine: '<div class="table" >',
        lastLine: '</div>',
        childes: [
            {
                firstLine: '<tomato>',
                lastLine: '</tomato>',
                id: '2',
                tab: 1,
                className: ['id1', 'hovered'],
                childes: null,
            },
            {
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '1',
                tab: 1,
                className: ['id2', 'hovered', 'active'],
                childes: null,
            },
            {
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '1',
                tab: 1,
                className: ['id3', 'hovered', 'active'],
                childes: null,
            },
            {
                firstLine: '<tomato class="small">',
                lastLine: '</tomato>',
                id: '2',
                tab: 1,
                className: ['id4', 'hovered', 'active'],
                childes: null,
            },
        ],
    },
};
