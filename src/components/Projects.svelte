<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { projects, getTechStyle } from "../data";

  let currentIndex = $state(0);

  function next() {
    currentIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  }

  function prev() {
    currentIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  });
</script>

<section id="projects" class="flex min-h-[70vh] justify-center py-12 md:py-16 lg:py-20 bg-surface text-texts">
  <div class="w-[95%] sm:w-[90%] max-w-7xl space-y-8 md:space-y-12 font-mono">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 project-header">
      <div>
        <p class="text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3 text-muted">
          Selected Work
        </p>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Featured Projects
        </h2>
      </div>

      <div class="flex gap-2 md:gap-3">
        <button onclick={prev} aria-label="Previous" class="rounded-xl border border-border px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold cursor-pointer">Prev</button>
        <button onclick={next} aria-label="Next" class="rounded-xl border border-border px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold cursor-pointer">Next</button>
      </div>
    </div>

    <!-- Slider -->
    <div class="overflow-hidden project-content">
      <div class="flex transition-transform duration-500 ease-out" style="transform: translateX(-{currentIndex * 100}%);">
        {#each projects as project}
          <div class="min-w-full px-1">
            {#if project.status === "live"}
              <article id="article" class="grid grid-cols-1 my-3 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border border-border p-4 sm:p-6 md:p-8 bg-card">
                <!-- Image -->
                <div class="relative aspect-video overflow-hidden rounded-xl border border-border shadow-inner">
                  <img src={project.image} alt={project.title} class="h-full w-full object-cover" />
                </div>

                <!-- Content -->
                <div class="space-y-4 md:space-y-5">
                  <div class="flex flex-wrap items-center gap-2 md:gap-3">
                    <h3 class="text-2xl sm:text-3xl font-bold">
                      {project.title}
                    </h3>
                    <span class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-xs rounded-full border border-emerald-500/20">Live</span>
                  </div>
                  <p class="leading-relaxed text-muted text-sm md:text-base">
                    {project.description}
                  </p>
                  <ul class="flex flex-wrap gap-2 text-xs">
                    {#each project.tech as t}
                      <li class="rounded-full px-3 py-1 font-semibold text-white" style={getTechStyle(t)}>
                        {t}
                      </li>
                    {/each}
                  </ul>
                  <div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                    <a href={project.demo} target="_blank" class="inline-flex items-center justify-center rounded-xl border border-border px-5 md:px-6 py-2.5 text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold text-center">Live Demo</a>
                    <a href={project.source} target="_blank" class="inline-flex items-center justify-center rounded-xl border border-border px-5 md:px-6 py-2.5 text-sm hover:bg-accent hover:text-white hover:border-accent transition font-semibold text-center">Source Code</a>
                  </div>
                </div>
              </article>
            {:else}
              <article class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl border border-dashed border-border p-4 sm:p-6 md:p-8 bg-surface-alt opacity-80">
                <!-- Placeholder Image -->
                <div class="relative aspect-video overflow-hidden rounded-xl bg-surface-alt flex items-center justify-center border border-border">
                  <span class="text-muted font-bold text-base sm:text-lg md:text-xl uppercase tracking-widest text-center px-4">In Development</span>
                </div>

                <!-- Content -->
                <div class="space-y-4 md:space-y-5">
                  <div class="flex flex-wrap items-center gap-2 md:gap-3">
                    <h3 class="text-2xl sm:text-3xl font-bold text-muted">
                      {project.title}
                    </h3>
                    <span class="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 text-xs rounded-full border border-amber-500/20">Coming Soon</span>
                  </div>
                  <p class="leading-relaxed text-muted text-sm md:text-base">
                    {project.description}
                  </p>
                  <ul class="flex flex-wrap gap-2 text-xs opacity-60">
                    {#each project.tech as t}
                      <li class="rounded-full px-3 py-1 font-semibold text-white" style={getTechStyle(t)}>
                        {t}
                      </li>
                    {/each}
                  </ul>
                  <div class="pt-2 md:pt-4">
                    <button disabled class="w-full sm:w-auto cursor-not-allowed opacity-50 inline-flex items-center justify-center rounded-xl border border-border px-5 md:px-6 py-2.5 text-sm text-muted font-semibold">Demo (WIP)</button>
                  </div>
                </div>
              </article>
            {/if}
          </div>
        {#if false} <!-- Workaround for Svelte formatting --> {/if}
        {/each}
      </div>
    </div>

    <!-- Indicators -->
    <div class="flex justify-center gap-2">
      {#each projects as _, i}
        <button onclick={() => (currentIndex = i)} class="h-2 w-2 rounded-full transition {i === currentIndex ? 'bg-accent w-6' : 'bg-texts/20'}" aria-label={`Go to project ${i + 1}`}></button>
      {/each}
    </div>
  </div>
</section>
