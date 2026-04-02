<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  let mobileMenuOpen = $state(false);
  let isDark = $state(true);

  onMount(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      isDark = false;
      document.documentElement.classList.remove("dark");
    } else {
      isDark = true;
      document.documentElement.classList.add("dark");
    }
  });

  function handleScroll(e: MouseEvent) {
    e.preventDefault();
    mobileMenuOpen = false;
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (href) {
      gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 80 } });
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function toggleDarkMode() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
</script>

<header class="fixed top-0 right-0 left-0 z-50">
  <div class="flex justify-between items-center h-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-surface/80 text-texts backdrop-blur-md border-b border-border">
    <!-- Logo -->
    <h1 class="text-lg sm:text-xl md:text-2xl font-mono hover:text-accent transition-colors cursor-pointer font-bold">
      <a href="#home" onclick={handleScroll}>FardanHadafi.dev</a>
    </h1>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-2">
      <ul class="flex items-center gap-6 lg:gap-10 text-base lg:text-lg font-mono">
        <li><a href="#about" onclick={handleScroll} class="hover:text-accent transition-colors cursor-pointer">About</a></li>
        <li><a href="#services" onclick={handleScroll} class="hover:text-accent transition-colors cursor-pointer">Services</a></li>
        <li><a href="#projects" onclick={handleScroll} class="hover:text-accent transition-colors cursor-pointer">Work</a></li>
        <li><a href="#contact" onclick={handleScroll} class="hover:text-accent transition-colors cursor-pointer">Contact</a></li>
      </ul>

      <!-- Dark Mode Toggle -->
      <button onclick={toggleDarkMode} class="ml-4 p-2 rounded-lg hover:bg-accent-dim border border-border transition-all cursor-pointer" aria-label="Toggle dark mode">
        {#if isDark}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        {:else}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        {/if}
      </button>
    </nav>

    <!-- Mobile: Dark Toggle + Menu Button -->
    <div class="flex items-center gap-2 md:hidden">
      <button onclick={toggleDarkMode} class="p-2 rounded-lg hover:bg-accent-dim border border-border transition-all cursor-pointer" aria-label="Toggle dark mode">
        {#if isDark}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        {:else}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        {/if}
      </button>
      <button onclick={toggleMobileMenu} class="p-2 hover:bg-accent-dim rounded-lg transition" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-surface/95 backdrop-blur-md border-b border-border shadow-lg">
      <nav class="px-4 py-4">
        <ul class="flex flex-col gap-4 font-mono">
          <li><a href="#about" onclick={handleScroll} class="block py-2 hover:text-accent transition-colors">About</a></li>
          <li><a href="#services" onclick={handleScroll} class="block py-2 hover:text-accent transition-colors">Services</a></li>
          <li><a href="#projects" onclick={handleScroll} class="block py-2 hover:text-accent transition-colors">Work</a></li>
          <li><a href="#contact" onclick={handleScroll} class="block py-2 hover:text-accent transition-colors">Contact</a></li>
        </ul>
      </nav>
    </div>
  {/if}
</header>
