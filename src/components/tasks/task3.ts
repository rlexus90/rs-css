import img1 from './images/plate.png';
import img2 from './images/wood.png';
import img3 from './images/red-plate.png';
import { Task } from '../../types/index';

export const task3: Task = {
    title: 'Select the red plate',
    answer: ['#red'],
    description: {
        title: 'ID Selector',
        task: 'Select elements with an ID',
        syntax: '#id',
        textContent: `Selects the element with a specific <span class="level-span">&nbsp; id &nbsp;</span>. 
            You can also combine the ID selector with the type selector.`,
        examples: `<span class="level-span"> &nbsp; #cool &nbsp;</span> selects any element with 
                <span class="level-span"> &nbsp; id="cool" &nbsp;</span>  <br>
                 <span class="level-span"> &nbsp; ul# &nbsp;long  &nbsp; </span>  selects 
                 <span class="level-span"> &nbsp; &lt; ul id="long" &gt; &nbsp;</span> `,
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
                firstLine: '<plate id="red">',
                lastLine: '</plate>',
                id: '3',
                tab: 1,
                className: ['active', 'id1', 'hovered'],
                childes: null,
            },
            {
                firstLine: '<board>',
                lastLine: '</board>',
                id: '2',
                tab: 1,
                className: ['id2', 'hovered'],
                childes: null,
            },
            {
                firstLine: '<plate>',
                lastLine: '</plate>',
                id: '1',
                tab: 1,
                className: ['id3', 'hovered'],
                childes: null,
            },
        ],
    },
};
