<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { DragGesture, type FullGestureState } from '@use-gesture/vanilla';
	import type { CardData, Direction, SwipeEventData } from '.';
	import Card from './Card.svelte';
    import { invokeVideoAd } from '$lib/Applixir';

	let container: HTMLElement;
	let eventDispatcher = createEventDispatcher();

	let card1: HTMLElement, card2: HTMLElement;
	let card1Data: CardData, card2Data: CardData;

	export let lastStatus: any;

	let cardIndex = 0;
	let topCard: HTMLElement;
	let currentZ = 100000;

	onMount(async () => {
		card1Data = cardData(cardIndex++);
		card2Data = cardData(cardIndex++);

		[card1, card2].forEach(function (el) {
			el.style.zIndex = currentZ.toString();
			currentZ--;

			/* new DragGesture(el, (state) => {
				onDrag(el, state);
			}); */
			el.addEventListener('click', () => {
				swipe('right');
			});
		});

		topCard = card1;
		container.classList.remove('hidden');
	});

	const cardSwiped = (el: HTMLElement, velocity: [number, number], movement: [number, number]) => {
		lastStatus = { 
			card1Data: card1Data,
			card2Data: card2Data,
			cardIndex: cardIndex,
			topCard: topCard,
			currentZ: currentZ
		};

		// move card out of the view
		el.classList.add('transition-transform', 'duration-300');

		let direction: Direction = movement[0] > 0 ? 'right' : 'left';
		let data = el === card1 ? card1Data : card2Data;

		if (onSwipe) onSwipe({ direction, element: el, data, index: cardIndex - 2 });

		thresholdPassed = movement[0] > 0 ? 1 : -1;

		let moveOutWidth = document.body.clientWidth;

		let endX = Math.max(Math.abs(velocity[0]) * moveOutWidth, moveOutWidth);
		let toX = movement[0] > 0 ? endX : -endX;
		let endY = Math.abs(velocity[1]) * moveOutWidth;
		let toY = movement[1] > 0 ? endY : -endY;

		let rotate = movement[0] * 0.03 * (movement[1] / 80);

		el.style.transform = `translate(${toX}px, ${toY + movement[1]}px) rotate(${rotate}deg)`;

		setTimeout(() => {
			thresholdPassed = 0;
			// move card back to start position at bottom of stack and update data
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

			const seenCounts = JSON.parse(localStorage.getItem('seenCounts') || '{}');
			const card = el === card1 ? card1Data : card2Data;
			const globalCardIndex = card?.index?.toString() || 'undefined';
			if (globalCardIndex) {
				seenCounts[globalCardIndex.toString()] = (seenCounts[globalCardIndex.toString()] || 0) + 1;
				localStorage.setItem('seenCounts', JSON.stringify(seenCounts));
			}

			el.classList.remove('transition-transform', 'duration-300');
			el.style.transform = '';
			if (card1Data === null && card2Data === null) {
				eventDispatcher('end');
				invokeVideoAd({});
			}
		}, 350);
	};

	export const swipe = (direction: Direction = 'right') => {
		if (thresholdPassed !== 0) return;

		let dir = direction === 'left' ? -1 : 1;
		cardSwiped(topCard, [dir, 0.1], [dir, 1]);
	};

	export const undoSwipe = () => {
		if (lastStatus) {
			card1Data = lastStatus.card1Data;
			card2Data = lastStatus.card2Data;
			cardIndex = lastStatus.cardIndex;
			topCard = lastStatus.topCard;
			currentZ = lastStatus.currentZ;

			[card1, card2].forEach(function (el) {
				el.style.zIndex = currentZ.toString();
				if (el === topCard) {
					el.style.transform = '';
					currentZ--;
				}
			});

			lastStatus = null;
		}
	};

	export let onSwipe: ((cardInfo: SwipeEventData) => void) | undefined = undefined;

	export let cardData: (index: number) => CardData;

	export let minSwipeDistance: number = 0.5;
	export let minSwipeVelocity: number = 0.5;

	export let arrowKeys = true;

	export let thresholdPassed = 0;

	export let anchor: number | null = null;
</script>

<svelte:body
	on:keydown={(e) => {
		if (!arrowKeys) return;
		if (e.key === 'ArrowLeft') {
			swipe('left');
		} else if (e.key === 'ArrowRight') {
			swipe('right');
		}
	}}
/>

<div class="h-full w-full">
	<div class="relative z-0 hidden h-full w-full" bind:this={container}>
		<svelte:component this={Card} bind:element={card1} {...card1Data} backgroundColor={card1Data?.tags?.includes('event') ? '#794fea66' : 'white'} main={topCard == card1}/>
		<svelte:component this={Card} bind:element={card2} {...card2Data} backgroundColor={card2Data?.tags?.includes('event') ? '#794fea66' : 'white'} main={topCard == card2}/>
	</div>
</div>
