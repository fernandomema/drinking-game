<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { SchemaGenerator } from "$lib/utils/SchemaGenerator";

    const productSchema = SchemaGenerator.getProduct({
        name: "Tragos Locos",
        description: "The perfect app for an unforgettable party night.",
        image: "https://tragos-locos.servitimo.net/blog/what-is-tragos-locos/cover.png",
        url: "https://tragos-locos.servitimo.net/",
        review: {
            name: "Tragos Locos review",
            author: {
                name: "Fernando Merino",
            },
            positiveItems: [
                "Multiple languages",
                "Diversity of game modes",
                "Chromecast support",
                "Available on all platforms",
                "Attractive design",
                "Seasonal gamemodes",
            ],
            negativeItems: [
                "Not suitable for all ages",
                "Not always inclusive in its questions"
            ]
        }
    })
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(productSchema)}</script>`}
</svelte:head>

<section class="space-y-8">
    <!-- Add a table of contents -->
    <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Table of Contents</h2>
        <ul class="space-y-2">
            <li><a href="#introduction" class="text-purple-600 hover:text-purple-800">Introduction</a></li>
            <li><a href="#top-apps" class="text-purple-600 hover:text-purple-800">Top Drinking Game Apps</a></li>
            <li><a href="#comparison" class="text-purple-600 hover:text-purple-800">App Comparison Guide</a></li>
            <li><a href="#safety" class="text-purple-600 hover:text-purple-800">Safety Tips</a></li>
            <li><a href="#faqs" class="text-purple-600 hover:text-purple-800">Frequently Asked Questions</a></li>
        </ul>
    </div>

    <div id="introduction" class="text-gray-800 space-y-4">
        <p class="text-lg">
            Planning a party night with friends? 🔥🍻 Nothing makes a gathering more fun than a good drinking game. Whether you're at home, at a bar, or outdoors, drinking game apps have revolutionized how we enjoy the night, offering challenges, dares, and tons of fun without the need for cards or extra accessories.
        </p>
    
        <p class="text-lg">
            But with so many options available, choosing the best app can be tricky. Some focus on questions and challenges, others on crazy rules and lucky wheels. In this guide, we've selected the best drinking apps, highlighting their features, advantages, and disadvantages so you can find the perfect one for your group. 🎭🥂
        </p>
    
        <p class="text-lg">
            From <strong>Tragos Locos</strong>, the most complete app with multiple game modes and customizable options, to classics like <strong>Picolo</strong> and <strong>King’s Cup</strong>, here are the highest-rated apps that will guarantee you an unforgettable night. Find the one that suits your party and get ready for a night of laughter, challenges, and tons of fun! 🚀🎉
        </p>
    </div>

    <!-- Add a new section before the apps -->
    <div class="bg-yellow-50 p-6 rounded-lg" id="top-apps">
        <h2 class="text-2xl font-bold mb-4">Why Use Drinking Game Apps? 🤔</h2>
        <ul class="list-disc pl-6 space-y-2">
            <li>No need to carry cards or physical games</li>
            <li>Always updated with new content and challenges</li>
            <li>Perfect for both small and large groups</li>
            <li>Track drinks and maintain responsible consumption</li>
            <li>Available in multiple languages</li>
            <li>Great ice-breakers for new groups</li>
        </ul>
    </div>

    <!-- Tragos Locos -->
    <div class="mt-8">
        <div class="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-2xl p-1">
            <div class="bg-white rounded-t-xl p-6">
                <div class="flex items-center justify-between">
                    <h3 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        1. Tragos Locos
                    </h3>
                    <div class="flex space-x-2">
                        <span class="text-3xl">🎭</span>
                        <span class="text-3xl">🔥</span>
                    </div>
                </div>
                
                <div class="mt-4 flex items-center space-x-2">
                    <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">#1 Party App</span>
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">4.8 ⭐</span>
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Most Popular</span>
                </div>

                <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                    The ultimate party companion that's revolutionizing drinking games. With its diverse game modes, 
                    creative challenges, and constant updates, Tragos Locos stands out as the most complete party app 
                    in 2025. Perfect for any group size and occasion! 
                </p>
            </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-b-2xl">
            <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">✨ Highlights</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🎮</span>
                            <span>Multiple exciting game modes</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🌍</span>
                            <span>Available in multiple languages</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">👥</span>
                            <span>Perfect for any group size</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🔄</span>
                            <span>Regular content updates</span>
                        </li>
                    </ul>
                </div>
                
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">⚡ Features</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Chromecast Support
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Offline Mode
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Custom Rules
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Party Statistics
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Picolo -->
    <div class="mt-8">
        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl p-1">
            <div class="bg-white rounded-t-xl p-6">
                <div class="flex items-center justify-between">
                    <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        2. Picolo
                    </h3>
                    <div class="flex space-x-2">
                        <span class="text-3xl">🍻</span>
                    </div>
                </div>
                
                <div class="mt-4 flex items-center space-x-2">
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Simple & Fun</span>
                    <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">4.5 ⭐</span>
                </div>

                <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                    A straightforward party game that keeps things simple yet entertaining. Perfect for those who want 
                    quick setup and easy-to-follow rules. While fun, it might not offer the depth and variety that 
                    Tragos Locos provides.
                </p>
            </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-b-2xl">
            <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">✨ Highlights</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🎯</span>
                            <span>Quick to start</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">📱</span>
                            <span>Simple interface</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🎲</span>
                            <span>Basic game mechanics</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Kings Cup -->
    <div class="mt-8">
        <div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-t-2xl p-1">
            <div class="bg-white rounded-t-xl p-6">
                <div class="flex items-center justify-between">
                    <h3 class="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                        3. King’s Cup
                    </h3>
                    <div class="flex space-x-2">
                        <span class="text-3xl">👑</span>
                        <span class="text-3xl">🍷</span>
                    </div>
                </div>
                
                <div class="mt-4 flex items-center space-x-2">
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Classic Party Game</span>
                    <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">4.7 ⭐</span>
                </div>

                <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                    A digital version of the popular card game. Each player draws a card and follows the rule assigned, which may include drinking, setting rules, or doing crazy challenges.
                </p>
            </div>
        </div>
        
        <div class="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-b-2xl">
            <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">✨ Highlights</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🃏</span>
                            <span>Based on a classic party game</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🥳</span>
                            <span>Perfect for large groups</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🛠️</span>
                            <span>Can be customized with your own rules</span>
                        </li>
                    </ul>
                </div>
                
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">⚡ Features</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Easy to Learn
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Multiple Game Modes
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Party Statistics
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Social Media Sharing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Drink Roulette -->
    <div class="mt-8">
        <div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-t-2xl p-1">
            <div class="bg-white rounded-t-xl p-6">
                <div class="flex items-center justify-between">
                    <h3 class="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        4. Drink Roulette
                    </h3>
                    <div class="flex space-x-2">
                        <span class="text-3xl">🎰</span>
                        <span class="text-3xl">🥂</span>
                    </div>
                </div>
                
                <div class="mt-4 flex items-center space-x-2">
                    <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Thrilling Challenge</span>
                    <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">4.6 ⭐</span>
                </div>

                <p class="mt-4 text-gray-700 text-lg leading-relaxed">
                    An app that mixes luck and fun. Players spin the wheel and must complete the challenge or punishment indicated. Perfect for those who enjoy the thrill of chance.
                </p>
            </div>
        </div>
        
        <div class="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-b-2xl">
            <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">✨ Highlights</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🎰</span>
                            <span>Dynamic and exciting</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">🥂</span>
                            <span>Fun and varied challenges</span>
                        </li>
                        <li class="flex items-center space-x-2 text-white">
                            <span class="text-lg">💥</span>
                            <span>Ideal for breaking the ice</span>
                        </li>
                    </ul>
                </div>
                
                <div class="space-y-3">
                    <h4 class="text-white text-xl font-semibold">⚡ Features</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Random Challenges
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Social Media Sharing
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Party Statistics
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white text-sm">
                            Offline Mode
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <!-- App Comparison -->
     <div id="comparison" class="mt-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">App Comparison Guide 📊</h2>
        <p class="text-gray-600 mb-6">
            Not sure which app to choose? Here's a detailed comparison of the most important features to help you make the best decision for your party needs.
        </p>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">App</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game Modes</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Features</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900">Tragos Locos</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Multiple modes</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Free (with in-app purchases)</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">iOS & Android</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Chromecast, offline mode, custom rules</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900">Picolo</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Questions & challenges</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Free (with ads)</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">iOS & Android</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Quick setup, simple interface</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900">King's Cup</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Card-based</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Free (with ads)</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">iOS & Android</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Classic party game, customizable</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900">Drink Roulette</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Wheel of fortune</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Free (with ads)</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">iOS & Android</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-500">Random challenges, luck-based</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-8 bg-purple-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-800 mb-4">Our Recommendation 🏆</h3>
            <p class="text-gray-700">
                While all apps offer unique experiences, <strong>Tragos Locos</strong> stands out as the most complete option with its diverse game modes, regular updates, and premium features like Chromecast support. However, if you prefer simplicity, Picolo might be your best choice, while King's Cup offers a more traditional experience, and Drink Roulette adds an element of chance to your party.
            </p>
        </div>
    </div>


    <!-- Add a safety section -->
    <div id="safety" class="bg-red-50 p-6 rounded-lg mt-8">
        <h2 class="text-2xl font-bold text-red-800 mb-4">🚨 Party Safety Tips</h2>
        <p class="mb-4">While these apps are designed for entertainment, always remember to:</p>
        <ul class="list-disc pl-6 space-y-2">
            <li>Drink responsibly and know your limits</li>
            <li>Have a designated driver or use ride-sharing services</li>
            <li>Stay hydrated with water between drinks</li>
            <li>Never pressure others to drink</li>
            <li>Keep emergency contacts handy</li>
        </ul>
    </div>

    <!-- Enhance FAQs section -->
    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            {
                title: "What is the best drinking game app for 2025?",
                content: "Tragos Locos is currently the top-rated drinking game app for 2025, offering the most diverse range of games, multiple languages, and regular content updates. It's particularly popular for its variety of game modes and user-friendly interface."
            },
            {
                title: "Are drinking game apps safe to use?",
                content: "When used responsibly, drinking game apps are safe and fun. Always follow the recommended safety guidelines, know your limits, and ensure everyone in the group is comfortable with the challenges."
            },
            {
                title: "Which app is best for large groups?",
                content: "Tragos Locos is definitely the best choice for large groups, offering specific modes and features designed for bigger parties. Its Chromecast support and party statistics make it perfect for managing and entertaining large gatherings, while keeping everyone engaged and involved."
            },
            {
                title: "Are these apps free to use?",
                content: "Most drinking game apps offer free versions with basic features. Premium features and additional content are usually available through in-app purchases."
            },
            {
                title: "Do I need internet connection to play these games?",
                content: "While some apps require internet connection for updates and new content, many offer offline modes for uninterrupted play. Tragos Locos and King's Cup both have offline features."
            }
        ]}></Faqs>
    </div>
</section>