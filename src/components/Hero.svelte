<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
  import { SplitText } from "gsap/SplitText";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText, ScrollToPlugin);

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

    return () => {
      split.revert();
    };
  });

  function handleScroll(e: MouseEvent) {
    e.preventDefault();
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (href) {
      gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 80 } });
    }
  }
</script>

<section id="home" class="relative flex min-h-screen bg-bg text-texts overflow-hidden">
  <!-- Subtle background pattern -->
  <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>

  <!-- Gradient orbs for visual depth -->
  <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl"></div>

  <!-- Content -->
  <div class="relative z-10 w-full flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-20 py-20 md:py-0">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent-dim mb-6 md:mb-8">
      <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
      <p class="text-xs sm:text-sm font-bold tracking-widest text-accent uppercase">
        Available for Projects
      </p>
    </div>

    <!-- Heading -->
    <h1 id="hero-h" class="mb-5 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] max-w-5xl">
      Building Digital Products that Scale.
    </h1>

    <!-- Accent line -->
    <div class="w-20 md:w-28 h-1 rounded-full bg-gradient-to-r from-accent to-accent-light mb-6 md:mb-8"></div>

    <!-- Subtext -->
    <p id="hero-p" class="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mb-8 md:mb-12 leading-relaxed">
      I help businesses build fast, secure, and maintainable web applications using the modern web framework.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
      <a href="#contact" onclick={handleScroll} class="hero-btn bg-accent text-bg font-bold px-8 py-3.5 rounded-xl font-mono text-sm md:text-base hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 text-center">Start a Project</a>
      <a href="#projects" onclick={handleScroll} class="hero-btn border-2 border-border px-8 py-3.5 rounded-xl font-mono text-sm md:text-base hover:border-accent hover:text-accent transition-all duration-300 text-center">View Work</a>
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
