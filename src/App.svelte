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

  const services = [
    {
      title: "Fullstack Development",
      desc: "End-to-end web application development. I handle the database, API, and frontend interface to ensure a seamless product.",
      icon: "⚡"
    },
    {
      title: "Backend & API Design",
      desc: "Robust RESTful APIs built with Hono or Go. Focused on high concurrency, rate limiting, and secure authentication.",
      icon: "🛡️"
    },
    {
      title: "Performance Optimization",
      desc: "Audit and fix slow legacy applications. I optimize database queries and reduce bundle sizes for 100/100 Lighthouse scores.",
      icon: "🚀"
    }
  ];

  const projects = [
    {
      title: "NihongoLab",
      status: "live",
      description: "A comprehensive Japanese learning platform. Features spaced-repetition algorithms, interactive quizzes, and a PostgreSQL database managing user progress.",
      image: NihongoLab,
      tech: ["SvelteKit", "CSS", "Hono", "PostgreSQL"],
      demo: "https://nihongo-lab-web.vercel.app/",
      source: "https://github.com/FardanHadafi/NihongoLab",
    },
    {
      title: "E-Commerce for PC Enthusiast",
      status: "soon",
      description: "A high-performance E-Commerce system for local retail businesses.",
      image: null,
      tech: ["SvelteKit", "Tailwind", "Go", "PostgreSQL"],
      demo: "#",
      source: "#",
    },
    {
      title: "Charity Platform",
      status: "soon",
      description: "An open-source boilerplate for building SaaS applications with authentication and payments pre-configured.",
      image: null,
      tech: ["SvelteKit", "Tailwind", "Go", "PostgreSQL"],
      demo: "#",
      source: "#",
    },
  ];

  const techColors: Record<string, { bg: string }> = {
    "SvelteKit": { bg: "#FF3E00" },
    "Svelte 5": { bg: "#FF3E00" },
    "CSS": { bg: "#1572B6" },
    "Tailwind": { bg: "#06B6D4" },
    "Hono": { bg: "#E36002" },
    "Go": { bg: "#00ADD8" },
    "PostgreSQL": { bg: "#336791" },
    "SQL": { bg: "#336791" },
    "Stripe": { bg: "#635BFF" },
    "Supabase": { bg: "#3ECF8E" }
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
    mobileMenuOpen = false; // Close mobile menu when clicking link
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (href && smoother) {
      smoother.scrollTo(href, true, "top 80px");
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  let smoother: ScrollSmoother;

  onMount(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrambleTextPlugin, SplitText, ScrollTrigger, ScrollSmoother);

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1
    });

    // Hero Animations
    gsap.to("#hero-h", {
      duration: 3,
      scrambleText: "Building Digital Products that Scale.",
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
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
        toggleActions: "play reverse play reverse"
      }
    });

    // About Animations
    gsap.from(".about-h", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
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
        toggleActions: "play reverse play reverse"
      }
    });

    // Project Animations
    gsap.from(".project-header", {
        y: 50, opacity: 0.5, duration: 1, ease: "power2.out", stagger: 0.2,
        scrollTrigger: { trigger: "#projects", start: "top 80%", end: "bottom 20%", toggleActions: "play reverse play reverse" }
    });

    gsap.fromTo("#article", {
      y: 10
    }, {
      y: -10,
      duration: 1,
      yoyo: true,
      ease: "power1.inOut",
      repeat: -1,
    });
    
    gsap.from(".project-content", {
        y: 50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.2,
        scrollTrigger: { trigger: "#projects", start: "top 80%", end: "bottom 20%", toggleActions: "play reverse play reverse" }
    });

    // Footer Animations
    gsap.from(".footer-items", {
      y: 50, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.1,
      scrollTrigger: { trigger: "#contact", start: "top 80%", toggleActions: "play reverse play reverse" }
    });

    return () => {
      split.revert();
      smoother.kill();
    };
  });
</script>

<!-- Header with Mobile Menu -->
<header class="fixed top-0 right-0 left-0 z-50">
  <div class="flex justify-between items-center h-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-navbar text-texts backdrop-blur-sm shadow-sm border-b border-black/10">
    <!-- Logo -->
    <h1 class="text-lg sm:text-xl md:text-2xl font-mono hover:text-projects transition-colors cursor-pointer font-bold">
      <a href="#home" onclick={handleScroll}>FardanHadafi.dev</a>
    </h1>

    <!-- Desktop Navigation -->
    <nav class="hidden md:block">
      <ul class="flex items-center gap-6 lg:gap-10 text-base lg:text-lg font-mono">
        <li><a href="#about" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">About</a></li>
        <li><a href="#services" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">Services</a></li>
        <li><a href="#projects" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">Work</a></li>
        <li><a href="#contact" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">Contact</a></li>
      </ul>
    </nav>

    <!-- Mobile Menu Button -->
    <button 
      onclick={toggleMobileMenu}
      class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if mobileMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-navbar border-b border-black/10 shadow-lg">
      <nav class="px-4 py-4">
        <ul class="flex flex-col gap-4 font-mono">
          <li><a href="#about" onclick={handleScroll} class="block py-2 hover:text-projects transition-colors">About</a></li>
          <li><a href="#services" onclick={handleScroll} class="block py-2 hover:text-projects transition-colors">Services</a></li>
          <li><a href="#projects" onclick={handleScroll} class="block py-2 hover:text-projects transition-colors">Work</a></li>
          <li><a href="#contact" onclick={handleScroll} class="block py-2 hover:text-projects transition-colors">Contact</a></li>
        </ul>
      </nav>
    </div>
  {/if}
</header>

<div id="smooth-wrapper">
  <div id="smooth-content">
    <main class="pt-16">
      
      <!-- Hero Section - Responsive -->
      <section id="home" class="flex flex-col md:flex-row min-h-screen bg-hero text-texts">
        <!-- Left: Text Content -->
        <div class="w-full md:w-1/2 flex flex-col justify-center items-start px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-0 order-2 md:order-1">
          <p class="text-xs sm:text-sm font-bold tracking-widest mb-3 md:mb-4 text-projects uppercase">Fullstack Developer</p>
          <h1 id="hero-h" class="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Building Digital Products that Scale.</h1>
          <p id="hero-p" class="text-base sm:text-lg md:text-xl text-black/70 max-w-md mb-6 md:mb-8">
            I help businesses build fast, secure, and maintainable web applications using the modern Go & Svelte stack.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a href="#contact" onclick={handleScroll} class="border border-black text-texts px-6 py-3 rounded-lg font-mono text-sm hover:bg-projects transition text-center hover:text-white">Start a Project</a>
            <a href="#projects" onclick={handleScroll} class="border border-black px-6 py-3 rounded-lg font-mono text-sm hover:bg-projects hover:text-white transition text-center">View Work</a>
          </div>
        </div>

        <!-- Right: Photo Placeholder -->
        <div class="w-full md:w-1/2 flex justify-center items-center bg-gray-50/50 py-12 md:py-0 order-1 md:order-2">
          <div class="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-200 rounded-full animate-pulse flex items-center justify-center text-gray-400 font-mono text-center text-sm px-4">
            Photo Coming Soon
          </div>
        </div>
      </section>

      <!-- About Section - Responsive -->
      <section id="about" class="flex min-h-[50vh] md:min-h-[55vh] justify-center items-center bg-about text-texts py-12 md:py-16 lg:py-20 border-t border-black/5">
        <div class="flex flex-col gap-4 md:gap-6 font-mono text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-4xl px-4 sm:px-6 md:px-8">
          <h1 class="about-h font-semibold text-black">I don't just write code; I solve business problems.</h1>
          <h1 class="about-h text-black/70">While others rely on bloated frameworks, I specialize in the modern "performance-first" ecosystem.</h1>
          <h1 class="about-h text-black/70">I use <span class="text-[#FF3E00] font-bold">SvelteKit</span> for instant page loads and <span class="text-[#00ADD8]">Go/<span class="text-[#E36002]">Hono</span></span> for backends that can handle thousands of users without crashing.</h1>
          <h1 class="about-h text-black/70">My goal is simple: deliver software that is fast, secure, and easy to maintain.</h1>
        </div>
      </section>

      <!-- Services Section - Responsive -->
      <section id="services" class="py-12 md:py-16 lg:py-20 bg-gray-50 text-texts font-mono">
        <div class="w-[90%] sm:w-[85%] max-w-7xl mx-auto">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">How I Can Help You</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {#each services as service}
              <div class="service-card p-6 md:p-8 border border-black rounded-xl bg-white hover:shadow-xl transition duration-300">
                <div class="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- Projects Section - Responsive -->
      <section id="projects" class="flex min-h-[70vh] justify-center py-12 md:py-16 lg:py-20 bg-navbar text-texts">
        <div class="w-[95%] sm:w-[90%] max-w-7xl space-y-8 md:space-y-12 font-mono">
          
          <!-- Header -->
          <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 project-header">
            <div>
              <p class="text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3">Selected Work</p>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold">Featured Projects</h2>
            </div>
            
            <div class="flex gap-2 md:gap-3">
              <button onclick={prev} aria-label="Previous" class="rounded-xl border border-black px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-projects hover:text-white transition font-semibold cursor-pointer">Prev</button>
              <button onclick={next} aria-label="Next" class="rounded-xl border border-black px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-projects hover:text-white transition font-semibold cursor-pointer">Next</button>
            </div>
          </div>

          <!-- Slider -->
          <div class="overflow-hidden project-content">
            <div class="flex transition-transform duration-500 ease-out" style="transform: translateX(-{currentIndex * 100}%);">
              {#each projects as project}
                <div class="min-w-full px-1">
                  {#if project.status === 'live'}
                    <article id="article" class="grid grid-cols-1 my-3 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border border-black p-4 sm:p-6 md:p-8 bg-white">
                      <!-- Image -->
                      <div class="relative aspect-video overflow-hidden rounded-xl border border-black/20 shadow-inner">
                        <img src={project.image} alt={project.title} class="h-full w-full object-cover" />
                      </div>

                      <!-- Content -->
                      <div class="space-y-4 md:space-y-5">
                        <div class="flex flex-wrap items-center gap-2 md:gap-3">
                          <h3 class="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                          <span class="bg-green-100 text-green-700 px-2 py-0.5 text-xs rounded-full border border-green-200">Live</span>
                        </div>
                        <p class="leading-relaxed text-gray-700 text-sm md:text-base">{project.description}</p>
                        <ul class="flex flex-wrap gap-2 text-xs">
                          {#each project.tech as t}
                            <li class="rounded-full px-3 py-1 font-semibold text-white" style={getTechStyle(t)}>{t}</li>
                          {/each}
                        </ul>
                        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                          <a href={project.demo} target="_blank" class="inline-flex items-center justify-center rounded-xl text-texts border border-black px-5 md:px-6 py-2.5 text-sm hover:bg-projects transition font-semibold text-center hover:text-white">Live Demo</a>
                          <a href={project.source} target="_blank" class="inline-flex items-center justify-center rounded-xl border border-black px-5 md:px-6 py-2.5 text-sm hover:bg-projects transition font-semibold hover:text-white text-center">Source Code</a>
                        </div>
                      </div>
                    </article>
                  {:else}
                    <article class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border border-dashed border-gray-400 p-4 sm:p-6 md:p-8 bg-gray-50 opacity-80">
                      <!-- Placeholder Image -->
                      <div class="relative aspect-video overflow-hidden rounded-xl bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-400 font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest text-center px-4">In Development</span>
                      </div>

                      <!-- Content -->
                      <div class="space-y-4 md:space-y-5">
                        <div class="flex flex-wrap items-center gap-2 md:gap-3">
                          <h3 class="text-2xl sm:text-3xl font-bold text-gray-600">{project.title}</h3>
                          <span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs rounded-full border border-yellow-200">Coming Soon</span>
                        </div>
                        <p class="leading-relaxed text-gray-500 text-sm md:text-base">{project.description}</p>
                        <ul class="flex flex-wrap gap-2 text-xs opacity-60">
                          {#each project.tech as t}
                            <li class="rounded-full px-3 py-1 font-semibold text-white" style={getTechStyle(t)}>{t}</li>
                          {/each}
                        </ul>
                        <div class="pt-2 md:pt-4">
                          <button disabled class="w-full sm:w-auto cursor-not-allowed opacity-50 inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 md:px-6 py-2.5 text-sm text-gray-400 font-semibold">Demo (WIP)</button>
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
                class="h-2 w-2 rounded-full transition {i === currentIndex ? 'bg-black w-6' : 'bg-black/30'}" 
                aria-label={`Go to project ${i + 1}`}
              ></button>
            {/each}
          </div>
        </div>
      </section>
    </main>

    <!-- Footer - Responsive -->
    <footer id="contact" class="flex justify-center py-8 md:py-12 bg-projects text-texts">
      <div class="w-[95%] sm:w-[90%] max-w-7xl flex flex-col gap-8 md:gap-10">
        
        <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          <!-- Contact Info -->
          <div class="space-y-3 md:space-y-4 max-w-md font-mono footer-items">
            <h2 class="text-2xl sm:text-3xl font-bold">Let's build something.</h2>
            <p class="text-sm leading-relaxed opacity-80">
              Have a project in mind? I am currently open for new freelance opportunities.
            </p>
            <a href="mailto:fardan.hadafi@yahoo.com" class="inline-block border-b-2 border-black pb-1 hover:text-white hover:border-white transition text-sm md:text-base">fardan.hadafi@yahoo.com</a>
          </div>

          <!-- Social Links -->
          <div class="space-y-3 font-mono footer-items">
            <p class="text-sm font-medium">Connect</p>
            <ul class="flex flex-col gap-2 text-sm">
              <li><a href="https://github.com/FardanHadafi" target="_blank" class="hover:underline">GitHub</a></li>
              <li><a href="https://wa.me/6285713101837" target="_blank" class="hover:underline">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-black/20 pt-4 md:pt-6 text-xs font-mono footer-bottom flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
          <p>© {new Date().getFullYear()} Fardan Hadafi.</p>
          <p>Freelance Fullstack Developer.</p>
        </div>
      </div>
    </footer>
  </div>
</div>