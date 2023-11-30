import { DELAYTIME, TEXT } from '../../constants';
import { allTask } from '../tasks/all-task';

export async function enterHelpText(n: number) {
    const helpText: HTMLPreElement | null = document.querySelector('.description');
    const input = document.querySelector('input');
    const delay = (time: number) => new Promise((res) => setTimeout(res, time));
    const answer = allTask[n - 1].answer;

    if (helpText) {
        helpText.innerText = '';
        let answerText = '';
        answer.forEach((ans, ind) => {
            if (ind > 0) {
                answerText += ` or ${ans}`;
            } else {
                answerText += `${ans}`;
            }
        });
        const text = `${TEXT}
P.S. in this level ansver: ${answerText}`;
        for (const symb of text) {
            if (symb === ' ') {
                helpText.innerText += symb;
            } else {
                await delay(DELAYTIME);
                helpText.innerText += symb;
            }
        }
    }

    if (input) {
        input.value = '';
        for (const symb of answer[0]) {
            await delay(DELAYTIME);
            input.value += symb;
        }
    }
}
