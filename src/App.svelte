<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
  import { SplitText } from "gsap/SplitText";
  import NihongoLab from "./assets/nihongolab.png";

  let currentIndex = $state(0);
  let mobileMenuOpen = $state(false);
  let isDark = $state(true);

  const services = [
    {
      title: "Fullstack Development",
      desc: "End-to-end web application development. I handle the database, API, and frontend interface to ensure a seamless product.",
      icon: "⚡",
    },
    {
      title: "Backend & API Design",
      desc: "Robust RESTful APIs built focused on high concurrency, rate limiting, and secure authentication.",
      icon: "🛡️",
    },
    {
      title: "Performance Optimization",
      desc: "Audit and fix slow legacy applications. I optimize database queries and reduce bundle sizes for better performance.",
      icon: "🚀",
    },
  ];

  const projects = [
    {
      title: "NihongoLab",
      status: "live",
      description:
        "A comprehensive Japanese learning platform. Features spaced-repetition algorithms, interactive quizzes, and a PostgreSQL database managing user progress.",
      image: NihongoLab,
      tech: ["SvelteKit", "CSS", "Hono", "PostgreSQL"],
      demo: "https://nihongo-lab-web.vercel.app/",
      source: "https://github.com/FardanHadafi/NihongoLab",
    },
    {
      title: "E-Commerce for PC Enthusiast",
      status: "soon",
      description:
        "A high-performance E-Commerce system for local retail businesses.",
      image: null,
      tech: ["SvelteKit", "Tailwind", "Go", "PostgreSQL"],
      demo: "#",
      source: "#",
    },
    {
      title: "Charity Platform",
      status: "soon",
      description:
        "An open-source boilerplate for building SaaS applications with authentication and payments pre-configured.",
      image: null,
      tech: ["SvelteKit", "Tailwind", "Go", "PostgreSQL"],
      demo: "#",
      source: "#",
    },
  ];

  const techColors: Record<string, { bg: string }> = {
    SvelteKit: { bg: "#FF3E00" },
    "Svelte 5": { bg: "#FF3E00" },
    CSS: { bg: "#1572B6" },
    Tailwind: { bg: "#06B6D4" },
    Hono: { bg: "#E36002" },
    Go: { bg: "#00ADD8" },
    PostgreSQL: { bg: "#336791" },
  };

  function getTechStyle(tech: string) {
    const colors = techColors[tech] || { bg: "#333" };
    return `background-color: ${colors.bg};`;
  }

  function next() {
    currentIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  }

  function prev() {
    currentIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  }

  function handleScroll(e: MouseEvent) {
    e.preventDefault();
    mobileMenuOpen = false;
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (href && smoother) {
      smoother.scrollTo(href, true, "top 80px");
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

  let smoother: ScrollSmoother;

  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      isDark = false;
      document.documentElement.classList.remove("dark");
    } else {
      isDark = true;
      document.documentElement.classList.add("dark");
    }

    gsap.registerPlugin(
      ScrollToPlugin,
      ScrambleTextPlugin,
      SplitText,
      ScrollTrigger,
      ScrollSmoother,
    );

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    gsap.to("#hero-h", {
      duration: 3,
      scrambleText: "Building Digital Products that Scale.",
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    let split = SplitText.create("#hero-p", { type: "words", autoSplit: true });
    gsap.from(split.words, {
      duration: 2,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".hero-btn", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".about-label", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".about-statement", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.15,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".stat-item", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".value-card", {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".values-grid",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });



    gsap.from(".service-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#services",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".project-header", {
      y: 50,
      opacity: 0.5,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.fromTo(
      "#article",
      {
        y: 10,
      },
      {
        y: -10,
        duration: 1,
        yoyo: true,
        ease: "power1.inOut",
        repeat: -1,
      },
    );

    gsap.from(".project-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".footer-items", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      split.revert();
      smoother.kill();
    };
  });
</script>

<!-- Header with Mobile Menu -->
<header class="fixed top-0 right-0 left-0 z-50">
  <div
    class="flex justify-between items-center h-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-surface/80 text-texts backdrop-blur-md border-b border-border"
  >
    <!-- Logo -->
    <h1
      class="text-lg sm:text-xl md:text-2xl font-mono hover:text-accent transition-colors cursor-pointer font-bold"
    >
      <a href="#home" onclick={handleScroll}>FardanHadafi.dev</a>
    </h1>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-2">
      <ul
        class="flex items-center gap-6 lg:gap-10 text-base lg:text-lg font-mono"
      >
        <li>
          <a
            href="#about"
            onclick={handleScroll}
            class="hover:text-accent transition-colors cursor-pointer"
            >About</a
          >
        </li>
        <li>
          <a
            href="#services"
            onclick={handleScroll}
            class="hover:text-accent transition-colors cursor-pointer"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#projects"
            onclick={handleScroll}
            class="hover:text-accent transition-colors cursor-pointer">Work</a
          >
        </li>
        <li>
          <a
            href="#contact"
            onclick={handleScroll}
            class="hover:text-accent transition-colors cursor-pointer"
            >Contact</a
          >
        </li>
      </ul>

      <!-- Dark Mode Toggle -->
      <button
        onclick={toggleDarkMode}
        class="ml-4 p-2 rounded-lg hover:bg-accent-dim border border-border transition-all cursor-pointer"
        aria-label="Toggle dark mode"
      >
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
      <button
        onclick={toggleDarkMode}
        class="p-2 rounded-lg hover:bg-accent-dim border border-border transition-all cursor-pointer"
        aria-label="Toggle dark mode"
      >
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
      <button
        onclick={toggleMobileMenu}
        class="p-2 hover:bg-accent-dim rounded-lg transition"
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {#if mobileMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
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
          <li>
            <a
              href="#about"
              onclick={handleScroll}
              class="block py-2 hover:text-accent transition-colors">About</a
            >
          </li>
          <li>
            <a
              href="#services"
              onclick={handleScroll}
              class="block py-2 hover:text-accent transition-colors"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#projects"
              onclick={handleScroll}
              class="block py-2 hover:text-accent transition-colors">Work</a
            >
          </li>
          <li>
            <a
              href="#contact"
              onclick={handleScroll}
              class="block py-2 hover:text-accent transition-colors"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</header>

<div id="smooth-wrapper">
  <div id="smooth-content">
    <main class="pt-16">
      <!-- Hero Section - Centered -->
      <section
        id="home"
        class="relative flex min-h-screen bg-bg text-texts overflow-hidden"
      >
        <!-- Subtle background pattern -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>

        <!-- Gradient orbs for visual depth -->
        <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl"></div>

        <!-- Content -->
        <div
          class="relative z-10 w-full flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-20 py-20 md:py-0"
        >
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent-dim mb-6 md:mb-8"
          >
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <p
              class="text-xs sm:text-sm font-bold tracking-widest text-accent uppercase"
            >
              Available for Projects
            </p>
          </div>

          <!-- Heading -->
          <h1
            id="hero-h"
            class="mb-5 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] max-w-5xl"
          >
            Building Digital Products that Scale.
          </h1>

          <!-- Accent line -->
          <div class="w-20 md:w-28 h-1 rounded-full bg-gradient-to-r from-accent to-accent-light mb-6 md:mb-8"></div>

          <!-- Subtext -->
          <p
            id="hero-p"
            class="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mb-8 md:mb-12 leading-relaxed"
          >
            I help businesses build fast, secure, and maintainable web
            applications using the modern web framework.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <a
              href="#contact"
              onclick={handleScroll}
              class="hero-btn bg-accent text-bg font-bold px-8 py-3.5 rounded-xl font-mono text-sm md:text-base hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 text-center"
              >Start a Project</a
            >
            <a
              href="#projects"
              onclick={handleScroll}
              class="hero-btn border-2 border-border px-8 py-3.5 rounded-xl font-mono text-sm md:text-base hover:border-accent hover:text-accent transition-all duration-300 text-center"
              >View Work</a
            >
          </div>

          <!-- Scroll indicator -->
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span class="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div class="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
              <div class="w-1 h-2 rounded-full bg-current animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section
        id="about"
        class="relative bg-surface-alt text-texts py-16 md:py-24 lg:py-32 border-t border-border overflow-hidden"
      >
        <!-- Subtle decorative elements -->
        <div class="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div class="relative z-10 w-[90%] sm:w-[85%] max-w-6xl mx-auto">

          <!-- Section Label -->
          <div class="about-label flex items-center gap-3 mb-6 md:mb-8">
            <div class="w-8 md:w-12 h-[2px] bg-accent"></div>
            <p class="text-xs sm:text-sm font-mono font-bold tracking-widest text-accent uppercase">About Me</p>
          </div>

          <!-- Bold Statement -->
          <h2 class="about-statement text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-12 md:mb-16">
            I don't just write code —
            <span class="text-accent">I solve business problems.</span>
          </h2>

          <!-- Stats Row -->
          <div class="stats-row grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
            <div class="stat-item text-center p-5 md:p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <p class="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1">1</p>
              <p class="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider">Year Exp.</p>
            </div>
            <div class="stat-item text-center p-5 md:p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <p class="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1">1</p>
              <p class="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider">Project</p>
            </div>
            <div class="stat-item text-center p-5 md:p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
              <p class="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1">∞</p>
              <p class="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider">Curiosity</p>
            </div>
          </div>

          <!-- Values Grid -->
          <div class="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14 md:mb-20">
            <div class="value-card group p-6 md:p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:bg-card hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">🏗️</div>
              <h3 class="font-bold text-base md:text-lg mb-2">Clean Architecture</h3>
              <p class="text-sm text-muted leading-relaxed">Building maintainable systems with clear separation of concerns.</p>
            </div>
            <div class="value-card group p-6 md:p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:bg-card hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">⚡</div>
              <h3 class="font-bold text-base md:text-lg mb-2">Performance First</h3>
              <p class="text-sm text-muted leading-relaxed">Optimized queries, minimal bundles, and fast load times.</p>
            </div>
            <div class="value-card group p-6 md:p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:bg-card hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">🔒</div>
              <h3 class="font-bold text-base md:text-lg mb-2">Security Minded</h3>
              <p class="text-sm text-muted leading-relaxed">Auth, rate limiting, and data validation built in from day one.</p>
            </div>
            <div class="value-card group p-6 md:p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:bg-card hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">🔧</div>
              <h3 class="font-bold text-base md:text-lg mb-2">Right Tool, Right Job</h3>
              <p class="text-sm text-muted leading-relaxed">Choosing the best technology for each project's unique needs.</p>
            </div>
          </div>
        </div>

        <!-- Tech Stack - Running Text -->
        <div class="mt-8 md:mt-12 w-full relative z-10">
          <div class="w-[90%] sm:w-[85%] max-w-6xl mx-auto mb-5 md:mb-6">
            <p class="text-xs sm:text-sm font-mono font-bold tracking-widest text-muted uppercase">Technologies I Work With</p>
          </div>
          <div class="marquee-container overflow-hidden relative w-full border-y border-border/50 py-8 md:py-10 bg-surface-alt/50">
            <!-- Fade edges -->
            <div class="absolute left-0 top-0 bottom-0 w-16 md:w-48 z-10" style="background: linear-gradient(to right, var(--c-surface-alt), transparent);"></div>
            <div class="absolute right-0 top-0 bottom-0 w-16 md:w-48 z-10" style="background: linear-gradient(to left, var(--c-surface-alt), transparent);"></div>

              <div class="marquee-track flex gap-12 md:gap-20 lg:gap-32 w-max pr-12 md:pr-20 lg:pr-32">
                <!-- Set 1 -->
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#FF3E00]/10 text-[#FF3E00] border border-[#FF3E00]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Svelte</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#FF3E00]/10 text-[#FF3E00] border border-[#FF3E00]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">SvelteKit</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00ADD8]/10 text-[#00ADD8] border border-[#00ADD8]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Go</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#336791]/10 text-[#336791] border border-[#336791]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">PostgreSQL</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#E36002]/10 text-[#E36002] border border-[#E36002]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Hono</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#1572B6]/10 text-[#1572B6] border border-[#1572B6]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">CSS</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Tailwind CSS</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#3178C6]/10 text-[#3178C6] border border-[#3178C6]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">TypeScript</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#42B883]/10 text-[#42B883] border border-[#42B883]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Vue</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00DC82]/10 text-[#00DC82] border border-[#00DC82]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Nuxt</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00ADD8]/10 text-[#00ADD8] border border-[#00ADD8]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Gin</span>

                <!-- Set 2 (duplicate for seamless loop) -->
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#FF3E00]/10 text-[#FF3E00] border border-[#FF3E00]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Svelte</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#FF3E00]/10 text-[#FF3E00] border border-[#FF3E00]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">SvelteKit</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00ADD8]/10 text-[#00ADD8] border border-[#00ADD8]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Go</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#336791]/10 text-[#336791] border border-[#336791]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">PostgreSQL</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#E36002]/10 text-[#E36002] border border-[#E36002]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Hono</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#1572B6]/10 text-[#1572B6] border border-[#1572B6]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">CSS</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Tailwind CSS</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#F7DF1E]/10 text-[#B8A000] border border-[#F7DF1E]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">JavaScript</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#3178C6]/10 text-[#3178C6] border border-[#3178C6]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">TypeScript</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#42B883]/10 text-[#42B883] border border-[#42B883]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Vue</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00DC82]/10 text-[#00DC82] border border-[#00DC82]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Nuxt</span>
                <span class="marquee-item px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00ADD8]/10 text-[#00ADD8] border border-[#00ADD8]/20 font-mono text-base md:text-lg font-semibold whitespace-nowrap">Gin</span>
              </div>
            </div>
          </div>
      </section>

      <!-- Services Section -->
      <section
        id="services"
        class="py-12 md:py-16 lg:py-20 bg-bg text-texts font-mono"
      >
        <div class="w-[90%] sm:w-[85%] max-w-7xl mx-auto">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            How I Can Help You
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {#each services as service}
              <div
                class="service-card p-6 md:p-8 border border-border rounded-xl bg-card hover:shadow-xl hover:border-accent/20 transition duration-300"
              >
                <div class="text-3xl md:text-4xl mb-3 md:mb-4">
                  {service.icon}
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p class="text-sm text-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section
        id="projects"
        class="flex min-h-[70vh] justify-center py-12 md:py-16 lg:py-20 bg-surface text-texts"
      >
        <div
          class="w-[95%] sm:w-[90%] max-w-7xl space-y-8 md:space-y-12 font-mono"
        >
          <!-- Header -->
          <div
            class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 project-header"
          >
            <div>
              <p
                class="text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3 text-muted"
              >
                Selected Work
              </p>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Featured Projects
              </h2>
            </div>

            <div class="flex gap-2 md:gap-3">
              <button
                onclick={prev}
                aria-label="Previous"
                class="rounded-xl border border-border px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold cursor-pointer"
                >Prev</button
              >
              <button
                onclick={next}
                aria-label="Next"
                class="rounded-xl border border-border px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold cursor-pointer"
                >Next</button
              >
            </div>
          </div>

          <!-- Slider -->
          <div class="overflow-hidden project-content">
            <div
              class="flex transition-transform duration-500 ease-out"
              style="transform: translateX(-{currentIndex * 100}%);"
            >
              {#each projects as project}
                <div class="min-w-full px-1">
                  {#if project.status === "live"}
                    <article
                      id="article"
                      class="grid grid-cols-1 my-3 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border border-border p-4 sm:p-6 md:p-8 bg-card"
                    >
                      <!-- Image -->
                      <div
                        class="relative aspect-video overflow-hidden rounded-xl border border-border shadow-inner"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          class="h-full w-full object-cover"
                        />
                      </div>

                      <!-- Content -->
                      <div class="space-y-4 md:space-y-5">
                        <div class="flex flex-wrap items-center gap-2 md:gap-3">
                          <h3 class="text-2xl sm:text-3xl font-bold">
                            {project.title}
                          </h3>
                          <span
                            class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-xs rounded-full border border-emerald-500/20"
                            >Live</span
                          >
                        </div>
                        <p
                          class="leading-relaxed text-muted text-sm md:text-base"
                        >
                          {project.description}
                        </p>
                        <ul class="flex flex-wrap gap-2 text-xs">
                          {#each project.tech as t}
                            <li
                              class="rounded-full px-3 py-1 font-semibold text-white"
                              style={getTechStyle(t)}
                            >
                              {t}
                            </li>
                          {/each}
                        </ul>
                        <div
                          class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            class="inline-flex items-center justify-center rounded-xl border border-border px-5 md:px-6 py-2.5 text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold text-center"
                            >Live Demo</a
                          >
                          <a
                            href={project.source}
                            target="_blank"
                            class="inline-flex items-center justify-center rounded-xl border border-border px-5 md:px-6 py-2.5 text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold text-center"
                            >Source Code</a
                          >
                        </div>
                      </div>
                    </article>
                  {:else}
                    <article
                      class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border border-dashed border-border p-4 sm:p-6 md:p-8 bg-surface-alt opacity-80"
                    >
                      <!-- Placeholder Image -->
                      <div
                        class="relative aspect-video overflow-hidden rounded-xl bg-surface-alt flex items-center justify-center border border-border"
                      >
                        <span
                          class="text-muted font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest text-center px-4"
                          >In Development</span
                        >
                      </div>

                      <!-- Content -->
                      <div class="space-y-4 md:space-y-5">
                        <div class="flex flex-wrap items-center gap-2 md:gap-3">
                          <h3
                            class="text-2xl sm:text-3xl font-bold text-muted"
                          >
                            {project.title}
                          </h3>
                          <span
                            class="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 text-xs rounded-full border border-amber-500/20"
                            >Coming Soon</span
                          >
                        </div>
                        <p
                          class="leading-relaxed text-muted text-sm md:text-base"
                        >
                          {project.description}
                        </p>
                        <ul class="flex flex-wrap gap-2 text-xs opacity-60">
                          {#each project.tech as t}
                            <li
                              class="rounded-full px-3 py-1 font-semibold text-white"
                              style={getTechStyle(t)}
                            >
                              {t}
                            </li>
                          {/each}
                        </ul>
                        <div class="pt-2 md:pt-4">
                          <button
                            disabled
                            class="w-full sm:w-auto cursor-not-allowed opacity-50 inline-flex items-center justify-center rounded-xl border border-border px-5 md:px-6 py-2.5 text-sm text-muted font-semibold"
                            >Demo (WIP)</button
                          >
                        </div>
                      </div>
                    </article>
                  {/if}
                </div>
              {/each}
            </div>
          </div>

          <!-- Indicators -->
          <div class="flex justify-center gap-2">
            {#each projects as _, i}
              <button
                onclick={() => (currentIndex = i)}
                class="h-2 w-2 rounded-full transition {i === currentIndex
                  ? 'bg-accent w-6'
                  : 'bg-texts/20'}"
                aria-label={`Go to project ${i + 1}`}
              ></button>
            {/each}
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer
      id="contact"
      class="flex justify-center py-8 md:py-12 bg-footer-bg text-footer-text"
    >
      <div class="w-[95%] sm:w-[90%] max-w-7xl flex flex-col gap-8 md:gap-10">
        <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          <!-- Contact Info -->
          <div class="space-y-3 md:space-y-4 max-w-md font-mono footer-items">
            <h2 class="text-2xl sm:text-3xl font-bold">
              Let's build something.
            </h2>
            <p class="text-sm leading-relaxed opacity-70">
              Have a project in mind? I am currently open for new freelance
              opportunities.
            </p>
            <a
              href="mailto:fardan.hadafi@yahoo.com"
              class="inline-block border-b-2 border-footer-text/30 pb-1 hover:text-accent-light hover:border-accent-light transition text-sm md:text-base"
              >fardan.hadafi@yahoo.com</a
            >
          </div>

          <!-- Social Links -->
          <div class="space-y-3 font-mono footer-items">
            <p class="text-sm font-medium opacity-70">Connect</p>
            <ul class="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="https://github.com/FardanHadafi"
                  target="_blank"
                  class="hover:text-accent-light hover:underline transition">GitHub</a
                >
              </li>
              <li>
                <a
                  href="https://wa.me/6285713101837"
                  target="_blank"
                  class="hover:text-accent-light hover:underline transition">WhatsApp</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div
          class="border-t border-footer-text/10 pt-4 md:pt-6 text-xs font-mono footer-bottom flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 opacity-50"
        >
          <p>© {new Date().getFullYear()} Fardan Hadafi.</p>
          <p>Fullstack Developer.</p>
        </div>
      </div>
    </footer>
  </div>
</div>
