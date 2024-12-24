import { Question } from "./questions";

Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};

export function randomizeQuestions(array: Question[]): Question[] {
    let seenCounts = [];
    if (typeof localStorage != 'undefined') { 
        seenCounts = JSON.parse(localStorage.getItem('seenCounts') || '[]');
    }
    let questions = array.map((item: Question, index: number) => ({
        ...item,
        randomValue: Math.random() * 5 * ((item.seenCount || 0) + 1) // Generate random number between 0 and 5, multiplied by seenCount
    }));
    questions.sort((a, b) => a.randomValue - b.randomValue);
    return questions.reverse() as Question[];

}
