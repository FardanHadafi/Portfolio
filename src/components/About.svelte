<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { techStack } from "../data";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  });
</script>

<section id="about" class="relative bg-surface-alt text-texts py-16 md:py-24 lg:py-32 border-t border-border overflow-hidden">
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
    <div class="stats-row grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
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
        {#each techStack as tech}
          <span class="marquee-item flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl border font-mono text-base md:text-lg font-semibold whitespace-nowrap"
                style="background-color: {tech.color}10; color: {tech.textColor || tech.color}; border-color: {tech.color}20;">
            {#if tech.icon}
              <img src="https://cdn.simpleicons.org/{tech.icon}/{tech.color.replace('#', '')}" alt="{tech.name} logo" class="w-5 h-5 md:w-6 md:h-6" />
            {/if}
            {tech.name}
          </span>
        {/each}

        <!-- Set 2 (duplicate for seamless loop) -->
        {#each techStack as tech}
          <span class="marquee-item flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl border font-mono text-base md:text-lg font-semibold whitespace-nowrap"
                style="background-color: {tech.color}10; color: {tech.textColor || tech.color}; border-color: {tech.color}20;">
            {#if tech.icon}
              <img src="https://cdn.simpleicons.org/{tech.icon}/{tech.color.replace('#', '')}" alt="{tech.name} logo" class="w-5 h-5 md:w-6 md:h-6" />
            {/if}
            {tech.name}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>
