import img1 from './images/plate.png';

import { Task } from '../../types/index';

export const task1: Task = {
    title: 'Select the plates',
    answer: ['plate'],
    description: {
        title: 'Type Selector',
        task: 'Select elements by their type',
        syntax: 'A',
        textContent:
            'Selects all elements of type <span class="level-span">&nbsp; A &nbsp;</span>. ' +
            'Type refers to the type of tag, so <span class="level-span">&nbsp; &lt; div &gt; &nbsp;</span>, ' +
            '<span class="level-span">&nbsp; &lt; p &gt; &nbsp;</span> and <span class="level-span"> &nbsp; ' +
            '&lt; ul &gt; &nbsp;</span> are all different element types.',
        examples: `<span class="level-span"> &nbsp; &lt; div &gt; &nbsp;</span> selects all div elements. <br>
                 <span class="level-span"> &nbsp; &lt; p &gt; &nbsp; </span> selects all p elements.`,
    },
    image: {
        '1': {
            src: img1,
            note: '<plate></plate>',
        },
        '2': {
            src: img1,
            note: '<plate></plate>',
        },
    },
    htmlContent: {
        firstLine: '<div class="table">',
        lastLine: '</div>',
        childes: [
            {
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '1',
                tab: 1,
                className: ['active', 'id1', 'hovered'],
                childes: null,
            },
            {
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '2',
                tab: 1,
                className: ['active', 'id2', 'hovered'],
                childes: null,
            },
        ],
    },
};
