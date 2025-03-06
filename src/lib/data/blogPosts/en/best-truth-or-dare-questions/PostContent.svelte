<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
</script>

<div class="max-w-3xl mx-auto p-6">
    <p class="mb-4">If you want an epic night with your friends, here are some of the craziest and funniest cards from <span class="font-bold">Tragos Locos</span>. Get ready to drink, laugh, and mess up. 😈</p>
    
    <h2 class="text-2xl font-semibold text-purple-300 mt-6">🍹 Truth Cards</h2>
    <ul class="list-disc pl-6 mb-4">
        <li>What is your biggest drunk regret? 🤔</li>
        <li>If your life were a movie, what would be the title after tonight? 🎬</li>
        <li>Tell an embarrassing story from when you were drunk. 📢</li>
        <li>Who in the group do you think is the best at flirting? 😏</li>
        <li>If you could swap lives with anyone here for a day, who would it be and why? 🤯</li>
        <li>What’s the most ridiculous lie you’ve ever told to get out of trouble? 😜</li>
        <li>If you had to kiss someone in the room, who would it be? 😘</li>
        <li>Have you ever had a crush on someone at this party? Spill the beans! 😍</li>
    </ul>

    <h2 class="text-2xl font-semibold text-purple-300 mt-6">😈 Dare Cards</h2>
    <ul class="list-disc pl-6 mb-4">
        <li>Take a drink without using your hands. 🍾</li>
        <li>Speak in a different accent until your next turn. 🌍</li>
        <li>Do a sexy dance on a chair for 30 seconds. 💃🕺</li>
        <li>Call your crush and confess your feelings (or at least pretend to). 📞💘</li>
        <li>Post a goofy selfie on your social media with a funny caption. 🤳</li>
        <li>Let the person to your left draw a tattoo on your arm using a marker. 🖊️</li>
        <li>Wear socks on your hands for the next 3 rounds. 🧦</li>
        <li>Do your best chicken dance in the middle of the room. 🐔</li>
    </ul>
    
    <h2 class="text-2xl font-semibold text-purple-300 mt-6">🤯 Extreme Cards</h2>
    <ul class="list-disc pl-6 mb-4">
        <li>Take a shot of whatever the group decides. 🥃</li>
        <li>Send an "I miss you" message to your ex. 📱💀</li>
        <li>Swap an item of clothing with the person on your right. 👕</li>
    </ul>

    <h2 class="text-2xl font-semibold text-purple-300 mt-6">🎉 Bonus Cards</h2>
    <ul class="list-disc pl-6 mb-4">
        <li>Pick someone to serenade you with a love song. 🎤🎶</li>
        <li>Do your best impression of a celebrity for 1 minute. 🎭</li>
        <li>Take a shot of something spicy (or just really random!) 🔥</li>
        <li>Let the group come up with a new nickname for you, and you must use it for the rest of the game. 🏷️</li>
        <li>Challenge someone to a dance-off. First to laugh loses. 💃🕺</li>
        <li>Pick a random person in the room and let them give you a new hairstyle. ✂️💇</li>
        <li>Send a message to your mom telling her you miss her... but make it sound super dramatic. 😅</li>
        <li>Let everyone in the room choose an emoji to send to your ex. 💔</li>
    </ul>
    
    <div class="mt-8">
        <p class="text-lg text-gray-800">After all the wild moments and unforgettable dares, why not turn up the heat and add a whole new level of excitement? If you thought Truth or Dare was fun, imagine the chaos and laughs you’ll have with *Tragos Locos*—the ultimate drinking game app for your next party. 🍻🔥</p>
        <p class="mt-4 text-lg text-gray-800">With *Tragos Locos*, you’ll never run out of fun dares, wild challenges, and hilarious truth questions. Whether you’re with a group of friends or just looking to spice up your night, this game has it all. Think you can handle it? Download it now and take your party to the next level. 🎉💥</p>
        <p class="mt-4 text-lg text-gray-800">This is not just any drinking game—it’s an experience that will have everyone talking long after the night ends. Ready to make some unforgettable memories? Go ahead, take the plunge, and start playing *Tragos Locos* today. 🎮🍾</p>
    </div>

    <div class="mt-8 text-center">
        <p class="text-xl font-bold text-gray-900">Don’t miss out on the ultimate party game!</p>
        <p class="mt-2 text-lg text-gray-600">Download *Tragos Locos* now, and let the fun begin. 🎉🍻</p>
        <a href="/" class="inline-block mt-4 px-6 py-3 text-white bg-purple-600 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">Download Now</a>
    </div>
      

    <div class="mt-8">
        <Faqs design="blog" faqs={[{
            title: "What are some good truth questions for drinking games?",
            content: "Some fun truth questions include: 'What’s your worst drunk text?', 'Who in this group would you kiss?', and 'What’s your most embarrassing drunk moment?'."
        }, {
            title: "What are the wildest dares for a drinking game?",
            content: "Some crazy dares are: 'Take a shot without using your hands', 'Text your ex something random', and 'Do a lap dance for someone in the group!'."
        }, {
            title: "How do you make a drinking game more fun?",
            content: "Add hilarious challenges, mix up the dares, and make sure everyone’s up for the madness! Tragos Locos has the best cards to turn up the fun."
        }, {
            title: "Can I play truth or dare with alcohol?",
            content: "Absolutely! Just swap out regular dares with drinking-related ones, or take a sip every time you refuse to answer a truth question."
        }]}></Faqs>
    </div>
</div>
