import img1 from './images/wood.png';
import img2 from './images/plate.png';
import img3 from './images/tomato.png';
import { Task } from '../../types/index';

export const task4: Task = {
    title: 'Select the tomato on the plate',
    answer: ['plate tomato'],
    description: {
        title: 'Descendant Selector',
        task: 'Select an element inside another element',
        syntax: 'A B',
        textContent: `Selects all  <span class="level-span">&nbsp; B &nbsp;</span> inside of 
        <span class="level-span">&nbsp; A &nbsp;</span> .
        is called a descendant because it is inside of another element.`,
        examples: `<span class="level-span"> &nbsp; p  strong &nbsp;</span>  selects all
        <span class="level-span"> &nbsp; &lt; strong &gt; &nbsp;</span> 
        elements that are inside of any
        <span class="level-span"> &nbsp; &lt; p &gt; &nbsp;</span> `,
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
        '3': {
            src: img3,
            note: '<plate></plate>',
        },
    },
    htmlContent: {
        firstLine: '<div class="table" >',
        lastLine: '</div>',
        childes: [
            {
                firstLine: '<board">',
                lastLine: '</board>',
                id: '1',
                tab: 1,
                className: ['id1', 'hovered'],
                childes: null,
            },
            {
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '2',
                tab: 1,
                className: ['id2', 'hovered'],
                childes: [
                    {
                        firstLine: '<tomato>',
                        lastLine: '</tomato>',
                        id: '3',
                        tab: 2,
                        className: ['id3', 'hovered', 'active'],
                        childes: null,
                    },
                ],
            },
            {
                firstLine: '<tomato>',
                lastLine: '</tomato>',
                id: '3',
                tab: 1,
                className: ['id4', 'hovered'],
                childes: null,
            },
        ],
    },
};
