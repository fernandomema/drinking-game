<!-- iPhone 15 Container -->
    <div class="relative w-72 h-[600px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900">
        <!-- Dynamic Island -->
        <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-[110px] h-[22px] bg-zinc-900 rounded-full z-20">
        </div>

        <div class="absolute -inset-[1px] border-[3px] border-zinc-700 border-opacity-40 rounded-[37px] pointer-events-none"></div>

        
        <!-- Screen Content -->
        <div class="relative w-full h-full rounded-[37px] overflow-hidden flex items-center justify-center">
            <slot />
        </div>
        
        <!-- Left Side Buttons -->
        <!-- Silent Switch -->
        <div class="absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
        
        <!-- Volume Up -->
        <div class="absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
        
        <!-- Volume Down -->
        <div class="absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
        
        <!-- Right Side Button (Power) -->
        <div class="absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
    </div>