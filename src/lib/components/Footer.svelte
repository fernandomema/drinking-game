<script lang="ts">
    import logo from '$lib/images/AppImages/ios/256.png';
    import { _ } from '$lib/locales';
</script>

<footer class="bg-purple-700 text-white py-8">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- Logo or App Name -->
            <a href="/" class="text-center md:text-left mb-4 md:mb-0 flex flex-col justify-center">
                <div class="flex justify-center">
                    <img src={logo} class="h-12 mx-auto md:mx-0" alt="App Logo">
                </div>
                <p class="text-lg font-semibold mt-2">Tragos Locos</p>
            </a>
            
            <div class="flex space-x-6 text-gray-200">
                <a href="/blog" class="hover:text-gray-50">{$_('footer.blog')}</a>
                <a href="/sobre-la-app" class="hover:text-gray-50">{$_('footer.about_app')}</a>
                <a href="/privacy-policy" class="hover:text-gray-50">{$_('footer.privacy_policy')}</a>
            </div>

            <!-- Footer Text -->
            <div class="text-center md:text-right text-sm text-gray-300">
                <p>© {new Date().getFullYear()} Tragos Locos. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>