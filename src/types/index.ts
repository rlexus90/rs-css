export interface Params {
    tag: string;
    className?: string[];
    id?: string;
    content?: string;
    callback?: (e?: Event) => void;
    domEvent?: string;
}

export interface Task {
    title: string;
    answer: string[];
    description: {
        title: string;
        task: string;
        syntax: string;
        textContent: string;
        examples: string;
    };
    image: Record<string, Image>;
    htmlContent: {
        firstLine: string;
        lastLine: string;
        childes: Childes[];
    };
}

interface Image {
    src: string;
    note: string;
}

export interface Childes {
    firstLine: string;
    lastLine: string;
    id?: string;
    tab?: number;
    className?: string[];
    childes: Childes[] | null;
}

type DrawTableKeys =
    | 'pictureWraper'
    | 'tackDeclataion'
    | 'help'
    | 'helpWindov'
    | 'helpText'
    | 'helpBtn'
    | 'table'
    | 'onTable'
    | 'tableLegs'
    | 'leg';

export type DrawTable = Record<DrawTableKeys, Params>;

type DrawTaskWindowKeys =
    | 'level'
    | 'levelText'
    | 'levelCheck'
    | 'navButtons'
    | 'prewLewel'
    | 'nextLevel'
    | 'menu'
    | 'levelContent'
    | 'levelTitle'
    | 'levelTask'
    | 'syntax'
    | 'textContent'
    | 'examples'
    | 'examplesDescrip'
    | 'menuSpan'
    | 'div'
    | 'levelList'
    | 'choseLevel'
    | 'levelListReset';

export type DrawTaskWindow = Record<DrawTaskWindowKeys, Params>;
