import img1 from './images/wood.png';
import img2 from './images/plate.png';
import img3 from './images/tomato.png';
import img4 from './images/red-plate.png';
import { Task } from '../../types/index';

export const task5: Task = {
    title: 'Select the tomato on the red plate',
    answer: ['#red tomato'],
    description: {
        title: 'Combine the Descendant & ID Selectors',
        task: 'Select an element inside another element',
        syntax: '#id A',
        textContent: `You can combine any selector with the descendent selector.`,
        examples: `<span class="level-span"> &nbsp; #cool span &nbsp;</span>  selects all
        <span class="level-span"> &nbsp; &lt; span &gt; &nbsp;</span> 
        elments that are inside of elements with
        <span class="level-span"> &nbsp; id="cool" &nbsp;</span> `,
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
        '4': {
            src: img4,
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
                firstLine: '<plate id="red">',
                lastLine: '</plate>',
                id: '4',
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
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '2',
                tab: 1,
                className: ['id4', 'hovered'],
                childes: [
                    {
                        firstLine: '<tomato>',
                        lastLine: '</tomato>',
                        id: '3',
                        tab: 2,
                        className: ['id5', 'hovered'],
                        childes: null,
                    },
                ],
            },
        ],
    },
};
