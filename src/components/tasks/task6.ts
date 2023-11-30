import img1 from './images/plate.png';
import img2 from './images/tomato.png';
import { Task } from '../../types/index';

export const task6: Task = {
    title: 'Select the small tomato ',
    answer: ['.small'],
    description: {
        title: 'Class Selector',
        task: 'Select elements by their class',
        syntax: '.classname',
        textContent: `The class selector selects all elements with that class attribute. 
        Elements can only have one ID, but many classes.`,
        examples: `<span class="level-span"> &nbsp; .neato &nbsp;</span>   selects all elements with
        <span class="level-span"> &nbsp; class='neato' &nbsp;</span> `,
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
                firstLine: '<tomato">',
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
                className: ['id2', 'hovered'],
                childes: null,
            },
            {
                firstLine: '<tomato class="small">',
                lastLine: '</tomato>',
                id: '2',
                tab: 1,
                className: ['id3', 'hovered', 'active'],
                childes: null,
            },
        ],
    },
};
