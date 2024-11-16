export type Question = {
    question: string;
    tags: ('friends' | '+18' | '+18-light' | 'challenge' | 'groupChallenge' | 'punishment' | 'groupPunishment' | 'reward' | 'drinkIf' | 'vote' | 'truth' | 'event')[];
    next?: {
        question: string;
    };
};

export const questions: Question[] = [{
    question: '{player1} does us the pleasure of finishing his drink',
    tags: ['friends', 'punishment'],
}, {
    question: '{player1} drink {shots} shots of {player2} drink',
    tags: ['friends', 'challenge', 'punishment'],
}, {
    question: '{player1}, the next person you look at the eyes will drink {shots} shots',
    tags: ['friends', 'reward'],
}, {
    question: 'If youe believe in ghosts, drink {shots} shots',
    tags: ['groupPunishment', 'drinkIf'],
}, {
    question: "{player1} Swap shirt with {player2}. whoever refuses drinks 2 shots",
    tags: ['+18-light', 'challenge'],
},{
    question: "{player1} imitate a chicken and drink {shots} shots",
    tags: ['challenge', 'punishment'],
}, {
    question: "Drink {shots} shots if you have used a household item as a sex toy",
    tags: ['+18', 'drinkIf'],
}, {
    question: "All who are single drink {shots} shots",
    tags: ['drinkIf'],
}, {
    question: "All who are in a relationship drink {shots} shots",
    tags: ['drinkIf'],
}, {
    question: "Vote who are most ugly. They drink {shots} shots",
    tags: ['vote'],
}, {
    question: "Vote who are most beautiful. They (drink|deals) {shots} shots",
    tags: ['vote'],
}, {
    question: "Vote who are most attractive. They (drink|deals) {shots} shots",
    tags: ['vote'],
}, {
    question: 'Last one to sit on the floor (drink|deals) {shots} shots',
    tags: ['challenge'],
}, {
    question: "{player1}, give {shots} shots to someone you'd like to kiss or slap but don't say wich",
    tags: ['+18-light', 'challenge'],
}, {
    question: "Dog owner drink {shots} shots",
    tags: ['drinkIf'],
}, {
    question: "Cat owner drink {shots} shots",
    tags: ['drinkIf'],
}, {
    question: "Vote who is most likely to get arrested. They drink {shots} shots",
    tags: ['vote'],
}, {
    question: "Vote who is most funniest. They drink {shots} shots",
    tags: ['vote'],
}, {
    question: "Everyone having androids drink {shots} shots",
    tags: ['drinkIf'],
    next: {
        question: "Iphone owners drink double",
    }
}, {
    question: "Everyone having Iphone drink {shots} shots",
    tags: ['drinkIf'],
    next: {
        question: "Android owners drink double",
    }
}, {
    question: "Take a group photo",
    tags: ['groupChallenge'],
}, {
    question: "{player1} with the present people, who will you fuck, kill and get married to",
    tags: ['+18-light', 'challenge'],
}, {
    question: "{player1}, You can make a question of your own to {player2}",
    tags: ['+18-light', 'challenge'],
}, {
    question: "{player1} tell us your biggest fear and drink {shots} shots",
    tags: ['challenge', 'truth'],
}, {
    question: "{player1} drink {shots} shots without hands. If you fail, drink double",
    tags: ['challenge'],
}, {
    question: "{player1}, give a compliment to {player2} or drink {shots} shots",
    tags: ['challenge'],
}, {
    question: "{player1} you cannot talk during the next round. Drink {shots} each time you talk",
    tags: ['event'],
}, {
    question: "Drink {shots} shots if you are a (aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces)",
    tags: ['drinkIf'],
}];