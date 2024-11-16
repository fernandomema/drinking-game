import { c as create_ssr_component, d as add_attribute, e as escape, f as createEventDispatcher, v as validate_component, m as missing_component, b as subscribe } from "../../../../../chunks/ssr.js";
import "@midudev/tailwind-animations";
import { p as page } from "../../../../../chunks/stores.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element } = $$props;
  let { question = "" } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  return `<div class="${[
    "absolute h-full w-full cursor-grab touch-none select-none rounded-xl border border-black bg-white ease-in-out",
    !question ? "hidden" : ""
  ].join(" ").trim()}"${add_attribute("this", element, 0)}>${question ? `${question ? `<div class="absolute flex h-full w-full items-center justify-center rounded-xl object-cover text-center text-black"><span class="text-4xl">${escape(question)}</span></div>` : ``} <div class="absolute inset-0 rounded-b-xl bg-gradient-to-t from-white/80 via-white/0"></div>` : ``}</div>`;
});
const CardSwiper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  let eventDispatcher = createEventDispatcher();
  let card1, card2;
  let card1Data, card2Data;
  let cardIndex = 0;
  let topCard;
  let currentZ = 1e5;
  const cardSwiped = (el, velocity, movement) => {
    el.classList.add("transition-transform", "duration-300");
    let direction = movement[0] > 0 ? "right" : "left";
    let data = el === card1 ? card1Data : card2Data;
    if (onSwipe)
      onSwipe({
        direction,
        element: el,
        data,
        index: cardIndex - 2
      });
    thresholdPassed = movement[0] > 0 ? 1 : -1;
    let moveOutWidth = document.body.clientWidth;
    let endX = Math.max(Math.abs(velocity[0]) * moveOutWidth, moveOutWidth);
    let toX = movement[0] > 0 ? endX : -endX;
    let endY = Math.abs(velocity[1]) * moveOutWidth;
    let toY = movement[1] > 0 ? endY : -endY;
    let rotate = movement[0] * 0.03 * (movement[1] / 80);
    el.style.transform = `translate(${toX}px, ${toY + movement[1]}px) rotate(${rotate}deg)`;
    setTimeout(
      () => {
        thresholdPassed = 0;
        if (el === card1) {
          card1Data = {};
          card1Data = cardData(cardIndex++);
          topCard = card2;
        } else {
          card2Data = {};
          card2Data = cardData(cardIndex++);
          topCard = card1;
        }
        currentZ--;
        el.style.zIndex = currentZ.toString();
        el.classList.remove("transition-transform", "duration-300");
        el.style.transform = "";
        if (card1Data === null && card2Data === null) {
          eventDispatcher("end");
        }
      },
      350
    );
  };
  const swipe = (direction = "right") => {
    if (thresholdPassed !== 0)
      return;
    let dir = direction === "left" ? -1 : 1;
    cardSwiped(topCard, [dir, 0.1], [dir, 1]);
  };
  let { onSwipe = void 0 } = $$props;
  let { cardData } = $$props;
  let { minSwipeDistance = 0.5 } = $$props;
  let { minSwipeVelocity = 0.5 } = $$props;
  let { arrowKeys = true } = $$props;
  let { thresholdPassed = 0 } = $$props;
  let { anchor = null } = $$props;
  if ($$props.swipe === void 0 && $$bindings.swipe && swipe !== void 0)
    $$bindings.swipe(swipe);
  if ($$props.onSwipe === void 0 && $$bindings.onSwipe && onSwipe !== void 0)
    $$bindings.onSwipe(onSwipe);
  if ($$props.cardData === void 0 && $$bindings.cardData && cardData !== void 0)
    $$bindings.cardData(cardData);
  if ($$props.minSwipeDistance === void 0 && $$bindings.minSwipeDistance && minSwipeDistance !== void 0)
    $$bindings.minSwipeDistance(minSwipeDistance);
  if ($$props.minSwipeVelocity === void 0 && $$bindings.minSwipeVelocity && minSwipeVelocity !== void 0)
    $$bindings.minSwipeVelocity(minSwipeVelocity);
  if ($$props.arrowKeys === void 0 && $$bindings.arrowKeys && arrowKeys !== void 0)
    $$bindings.arrowKeys(arrowKeys);
  if ($$props.thresholdPassed === void 0 && $$bindings.thresholdPassed && thresholdPassed !== void 0)
    $$bindings.thresholdPassed(thresholdPassed);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="h-full w-full"><div class="relative z-0 hidden h-full w-full"${add_attribute("this", container, 0)}>${validate_component(Card || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, card1Data, { element: card1 }),
      {
        element: ($$value) => {
          card1 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Card || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, card2Data, { element: card2 }),
      {
        element: ($$value) => {
          card2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const questions = [{
  question: "{player1} does us the pleasure of finishing his drink",
  tags: ["friends", "punishment"]
}, {
  question: "{player1} drink {shots} shots of {player2} drink",
  tags: ["friends", "challenge", "punishment"]
}, {
  question: "{player1}, the next person you look at the eyes will drink {shots} shots",
  tags: ["friends", "reward"]
}, {
  question: "If youe believe in ghosts, drink {shots} shots",
  tags: ["groupPunishment", "drinkIf"]
}, {
  question: "{player1} Swap shirt with {player2}. whoever refuses drinks 2 shots",
  tags: ["+18-light", "challenge"]
}, {
  question: "{player1} imitate a chicken and drink {shots} shots",
  tags: ["challenge", "punishment"]
}, {
  question: "Drink {shots} shots if you have used a household item as a sex toy",
  tags: ["+18", "drinkIf"]
}, {
  question: "All who are single drink {shots} shots",
  tags: ["drinkIf"]
}, {
  question: "All who are in a relationship drink {shots} shots",
  tags: ["drinkIf"]
}, {
  question: "Vote who are most ugly. They drink {shots} shots",
  tags: ["vote"]
}, {
  question: "Vote who are most beautiful. They (drink|deals) {shots} shots",
  tags: ["vote"]
}, {
  question: "Vote who are most attractive. They (drink|deals) {shots} shots",
  tags: ["vote"]
}, {
  question: "Last one to sit on the floor (drink|deals) {shots} shots",
  tags: ["challenge"]
}, {
  question: "{player1}, give {shots} shots to someone you'd like to kiss or slap but don't say wich",
  tags: ["+18-light", "challenge"]
}, {
  question: "Dog owner drink {shots} shots",
  tags: ["drinkIf"]
}, {
  question: "Cat owner drink {shots} shots",
  tags: ["drinkIf"]
}, {
  question: "Vote who is most likely to get arrested. They drink {shots} shots",
  tags: ["vote"]
}, {
  question: "Vote who is most funniest. They drink {shots} shots",
  tags: ["vote"]
}, {
  question: "Everyone having androids drink {shots} shots",
  tags: ["drinkIf"],
  next: {
    question: "Iphone owners drink double"
  }
}, {
  question: "Everyone having Iphone drink {shots} shots",
  tags: ["drinkIf"],
  next: {
    question: "Android owners drink double"
  }
}, {
  question: "Take a group photo",
  tags: ["groupChallenge"]
}, {
  question: "{player1} with the present people, who will you fuck, kill and get married to",
  tags: ["+18-light", "challenge"]
}, {
  question: "{player1}, You can make a question of your own to {player2}",
  tags: ["+18-light", "challenge"]
}, {
  question: "{player1} tell us your biggest fear and drink {shots} shots",
  tags: ["challenge", "truth"]
}, {
  question: "{player1} drink {shots} shots without hands. If you fail, drink double",
  tags: ["challenge"]
}, {
  question: "{player1}, give a compliment to {player2} or drink {shots} shots",
  tags: ["challenge"]
}, {
  question: "{player1} you cannot talk during the next round. Drink {shots} each time you talk",
  tags: ["event"]
}, {
  question: "Drink {shots} shots if you are a (aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces)",
  tags: ["drinkIf"]
}];
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};
const modes = {
  preparty: {
    name: "Pre-Party",
    pickCards: (questions2) => questions2.filter((question) => question.tags.includes("friends")).slice(0, 10)
  }
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const mode = $page.params.mode;
  const filteredQuestions = modes[mode].pickCards(questions);
  let players = [];
  let swipe;
  let thresholdPassed = 0;
  function onSwipe(cardInfo) {
    console.log("swiped", cardInfo?.direction, "on card", cardInfo?.data?.question);
    if (cardInfo?.direction == "left")
      ;
  }
  function cardData(index) {
    if (index >= filteredQuestions.length)
      return null;
    const shuffledPlayers = players.shuffle();
    const player1 = shuffledPlayers[0];
    const player2 = shuffledPlayers[1];
    const shots = Math.floor(Math.random() * 5) + 1;
    return {
      question: filteredQuestions[index].question.replace("{player1}", player1.name).replace("{player2}", player2.name).replace("{shots}", shots.toString()),
      rawQuestion: filteredQuestions[index].question
    };
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${players.length > 0 ? `<div class="relative flex h-full w-full items-center justify-center overflow-hidden p-2">${`<div class="relative flex h-full w-full max-w-xl flex-col gap-2">${validate_component(CardSwiper, "CardSwiper").$$render(
      $$result,
      {
        cardData,
        onSwipe,
        swipe,
        thresholdPassed
      },
      {
        swipe: ($$value) => {
          swipe = $$value;
          $$settled = false;
        },
        thresholdPassed: ($$value) => {
          thresholdPassed = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex gap-2"><button class="bottom-1 left-1 z-10 rounded-full bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm" data-svelte-h="svelte-1kvsvop">👎</button> </div></div> ${thresholdPassed < 0 ? `<div class="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-white/20 text-9xl backdrop-blur-sm">${escape(thresholdPassed > 0 ? "👍" : "👎")}</div>` : ``}`}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative h-screen min-h-screen bg-[#794fea] pb-5 font-[Fredoka] font-bold text-white">${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
