<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { questions } from "$lib/questions";
    
    // Create a seed based on the current date (YYYYMMDD format)
    const today = new Date();
    const dateSeed = parseInt(
        `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`
    );
    
    // Simple seeded random function
    function seededRandom(seed: number) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    
    // Fisher-Yates shuffle with seed
    function shuffleWithSeed<T>(array: T[], seed: number): T[] {
        const result = [...array];
        let currentSeed = seed;
        
        for (let i = result.length - 1; i > 0; i--) {
            currentSeed = (currentSeed * 9301 + 49297) % 233280;
            const randomIndex = Math.floor((currentSeed / 233280) * (i + 1));
            [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
        }
        
        return result;
    }
    
    // Filter and shuffle questions with our seed
    const filteredQuestions = {
        preparty: questions.filter(q => q.tags?.includes('preparty') && q.locales.en),
        challenge: questions.filter(q => q.tags?.includes('challenge') && q.locales.en),
        truth: questions.filter(q => q.tags?.includes('truth') && q.locales.en),
        hot: questions.filter(q => q.tags?.includes('+18') && q.locales.en),
        vote: questions.filter(q => q.tags?.includes('vote') && q.locales.en),
        christmas: questions.filter(q => q.tags?.includes('christmas') && q.locales.en)
    };
    
    // Shuffle and select cards for each category
    const prepartyCards = shuffleWithSeed(filteredQuestions.preparty, dateSeed)
        .slice(0, 5)
        .map(q => q.locales.en);
    
    const challengeCards = shuffleWithSeed(filteredQuestions.challenge, dateSeed + 1)
        .slice(0, 5)
        .map(q => q.locales.en);
    
    const truthCards = shuffleWithSeed(filteredQuestions.truth, dateSeed + 2)
        .slice(0, 3)
        .map(q => q.locales.en);
    
    const hotCards = shuffleWithSeed(filteredQuestions.hot, dateSeed + 3)
        .slice(0, 3)
        .map(q => q.locales.en);
    
    const voteCards = shuffleWithSeed(filteredQuestions.vote, dateSeed + 4)
        .slice(0, 3)
        .map(q => q.locales.en);
    
    const christmasCards = shuffleWithSeed(filteredQuestions.christmas, dateSeed + 5)
        .slice(0, 3)
        .map(q => q.locales.en);
    
    // Format date for display
    const formattedDate = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
</script>

<div class="max-w-3xl mx-auto p-6">
    <p class="mb-6 text-lg text-gray-700">
        Ready to take your party to the next level? Drinking card games are the perfect way to break the ice, get everyone laughing, and create unforgettable memories. In this guide, we'll share the best drinking party cards from <span class="font-bold text-purple-600">Tragos Locos</span> that will make your next gathering legendary! 🎉
    </p>
    
    <div class="bg-purple-100 p-3 rounded-lg mb-6 text-center">
        <p class="text-purple-800">
            <span class="font-semibold">🔄 Cards updated daily!</span> Today's selection: {formattedDate}
        </p>
    </div>
    
    <section class="mb-10">
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">Why Drinking Party Cards Make Every Gathering Better</h2>
        <p class="mb-4 text-gray-700">
            Drinking party cards are the ultimate social lubricant. They create shared experiences, encourage people to step outside their comfort zones, and generate stories you'll be telling for years to come. Whether you're hosting a small get-together or a wild house party, the right set of drinking cards can transform an ordinary night into an epic adventure.
        </p>
        <p class="mb-4 text-gray-700">
            With <span class="font-bold text-purple-600">Tragos Locos</span>, you get access to hundreds of carefully crafted cards designed to create the perfect balance of fun, excitement, and just the right amount of mischief. Let's dive into some of the best cards that will have everyone at your party laughing, drinking, and bonding!
        </p>
    </section>

    <!-- Party Starter Cards -->
    <section class="mb-10 bg-purple-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">🎮 Party Starter Cards</h2>
        <p class="mb-4 text-gray-700">
            These cards are perfect for warming up the crowd and getting everyone in the party mood. They're fun, light-hearted, and guaranteed to get people laughing and drinking.
        </p>
        
        <div class="grid gap-4 mt-6">
            {#each prepartyCards as card, i}
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                    <p class="text-gray-800">{card.replace('{player1}', '[Player 1]').replace('{player2}', '[Player 2]').replace('{player3}', '[Player 3]').replace(/{shots[2]?}/g, '2')}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Challenge Cards -->
    <section class="mb-10 bg-blue-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">🏆 Challenge Cards</h2>
        <p class="mb-4 text-gray-700">
            Challenge cards push players to complete tasks or face the consequences. They add an element of competition and daring that takes any party to the next level.
        </p>
        
        <div class="grid gap-4 mt-6">
            {#each challengeCards as card, i}
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <p class="text-gray-800">{card.replace('{player1}', '[Player 1]').replace('{player2}', '[Player 2]').replace('{player3}', '[Player 3]').replace(/{shots[2]?}/g, '2')}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Truth Cards -->
    <section class="mb-10 bg-green-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-green-600 mb-4">🤔 Truth Cards</h2>
        <p class="mb-4 text-gray-700">
            Truth cards reveal the hidden sides of your friends. They're perfect for getting to know each other better and creating deeper connections through shared vulnerability.
        </p>
        
        <div class="grid gap-4 mt-6">
            {#each truthCards as card, i}
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                    <p class="text-gray-800">{card.replace('{player1}', '[Player 1]').replace('{player2}', '[Player 2]').replace('{player3}', '[Player 3]').replace(/{shots[2]?}/g, '2')}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Spicy Cards -->
    <section class="mb-10 bg-red-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-red-600 mb-4">🌶️ Spicy Cards (18+)</h2>
        <p class="mb-4 text-gray-700">
            For adult parties only! These cards add a risqué element to your game night. They're perfect for close friends who aren't afraid to push boundaries.
        </p>
        
        <div class="grid gap-4 mt-6">
            {#each hotCards as card, i}
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                    <p class="text-gray-800">{card.replace('{player1}', '[Player 1]').replace('{player2}', '[Player 2]').replace('{player3}', '[Player 3]').replace(/{shots[2]?}/g, '2')}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Vote Cards -->
    <section class="mb-10 bg-yellow-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-yellow-600 mb-4">🗳️ Vote Cards</h2>
        <p class="mb-4 text-gray-700">
            Vote cards get the whole group involved in deciding who fits certain descriptions. They're hilarious and often lead to playful debates and revelations.
        </p>
        
        <div class="grid gap-4 mt-6">
            {#each voteCards as card, i}
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <p class="text-gray-800">{card.replace('{player1}', '[Player 1]').replace('{player2}', '[Player 2]').replace('{player3}', '[Player 3]').replace(/{shots[2]?}/g, '2')}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Seasonal Cards -->
    <section class="mb-10 bg-teal-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-teal-600 mb-4">🎄 Seasonal Cards</h2>
        <p class="mb-4 text-gray-700">
            Tragos Locos offers special seasonal cards that add a festive touch to your holiday gatherings. Here are some Christmas-themed cards that will make your holiday parties extra merry!
        </p>
        
        <div class="grid gap-4 mt-6">
            {#each christmasCards as card, i}
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                    <p class="text-gray-800">{card.replace('{player1}', '[Player 1]').replace('{player2}', '[Player 2]').replace('{player3}', '[Player 3]').replace(/{shots[2]?}/g, '2')}</p>
                </div>
            {/each}
        </div>
    </section>

    <!-- Tips for Playing -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">🎯 Tips for an Epic Drinking Card Game Night</h2>
        
        <div class="bg-gray-50 p-6 rounded-lg">
            <ul class="space-y-4">
                <li class="flex items-start">
                    <span class="text-purple-600 text-xl mr-2">✓</span>
                    <div>
                        <p class="font-semibold text-gray-800">Set the right atmosphere</p>
                        <p class="text-gray-700">Create a comfortable space with good music, lighting, and plenty of seating.</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-purple-600 text-xl mr-2">✓</span>
                    <div>
                        <p class="font-semibold text-gray-800">Provide drink options</p>
                        <p class="text-gray-700">Have a variety of alcoholic and non-alcoholic beverages available so everyone can participate.</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-purple-600 text-xl mr-2">✓</span>
                    <div>
                        <p class="font-semibold text-gray-800">Establish boundaries</p>
                        <p class="text-gray-700">Before starting, agree on any off-limit topics or challenges to ensure everyone feels comfortable.</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-purple-600 text-xl mr-2">✓</span>
                    <div>
                        <p class="font-semibold text-gray-800">Mix card categories</p>
                        <p class="text-gray-700">Combine different types of cards to keep the game fresh and exciting throughout the night.</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-purple-600 text-xl mr-2">✓</span>
                    <div>
                        <p class="font-semibold text-gray-800">Drink responsibly</p>
                        <p class="text-gray-700">Remember that the goal is fun, not excessive drinking. Always prioritize safety.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <!-- CTA -->
    <section class="mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-lg text-white text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to Take Your Party to the Next Level?</h2>
        <p class="mb-6 text-lg">
            Download <span class="font-bold">Tragos Locos</span> now and get access to hundreds of amazing drinking party cards that will make your next gathering unforgettable!
        </p>
        <a href="/" class="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Download Now
        </a>
    </section>

    <!-- FAQs -->
    <section class="mb-10">
        <Faqs design="blog" faqs={[
            {
                title: "What makes a good drinking party card?",
                content: "The best drinking party cards create memorable moments, encourage interaction, and are inclusive enough that everyone can participate. They should be fun, sometimes challenging, and always entertaining."
            },
            {
                title: "How many cards do I need for a good party?",
                content: "For a typical party of 4-8 people lasting a few hours, having access to 50-100 different cards ensures variety and prevents repetition. With Tragos Locos, you get hundreds of cards in various categories."
            },
            {
                title: "Are drinking card games only for college students?",
                content: "Not at all! While popular among college students, drinking card games are enjoyed by adults of all ages. Many games can be adapted for different age groups and preferences."
            },
            {
                title: "Can I play drinking card games without alcohol?",
                content: "Absolutely! These games can easily be adapted for non-drinkers by substituting alcohol with other beverages or even different types of challenges altogether."
            },
            {
                title: "What's the best number of players for drinking card games?",
                content: "Most drinking card games work best with 4-10 players. With fewer players, the game might move too quickly, and with more, players might wait too long between turns."
            }
        ]} />
    </section>
    
    <div class="text-sm text-gray-500 text-center mt-8 border-t pt-4">
        <p>Cards are refreshed daily. Come back tomorrow for new card suggestions!</p>
        <p>Last updated: {formattedDate}</p>
    </div>
</div>