<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  import {ScrollSmoother} from "gsap/ScrollSmoother";
  import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin"
  import NihongoLab from "./assets/nihongolab.png"
  import { SplitText } from "gsap/SplitText";

  let currentIndex = $state(0);

  const projects = [
    {
      title: "NihongoLab",
      description:
        "NihongoLab is a Japanese learning web application designed for beginners. It helps learners understand basic vocabulary, writing systems, and essential grammar through simple explanations and interactive practice.",
      image: NihongoLab,
      tech: ["SvelteKit", "CSS", "Hono", "PostgreSQL"],
      demo: "https://nihongo-lab-web.vercel.app/",
      source: "https://github.com/FardanHadafi/NihongoLab",
    },
    {
      title: "NihongoLab",
      description:
        "NihongoLab is a Japanese learning web application designed for beginners. It helps learners understand basic vocabulary, writing systems, and essential grammar through simple explanations and interactive practice.",
      image: NihongoLab,
      tech: ["SvelteKit", "CSS", "Hono", "PostgreSQL"],
      demo: "https://nihongo-lab-web.vercel.app/",
      source: "https://github.com/FardanHadafi/NihongoLab",
    },
    {
      title: "NihongoLab",
      description:
        "NihongoLab is a Japanese learning web application designed for beginners. It helps learners understand basic vocabulary, writing systems, and essential grammar through simple explanations and interactive practice.",
      image: NihongoLab,
      tech: ["SvelteKit", "CSS", "Hono", "PostgreSQL"],
      demo: "https://nihongo-lab-web.vercel.app/",
      source: "https://github.com/FardanHadafi/NihongoLab",
    },
  ];

  const techColors: Record<string, {bg: string}> = {
    "SvelteKit": {bg: "#FF3E00"},
    "CSS": {bg: "#1572B6"},
    "Tailwind": {bg: "#06B6D4"},
    "Hono": {bg: "#E36002"},
    "Go": {bg: "#00ADD8"},
    "PostgreSQL": {bg: "#336791"}
  };

  function getTechStyle(tech: string) {
    const colors = techColors[tech];
    return `background-color: ${colors.bg};`
  }

  function next() {
    currentIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  }

  function prev() {
    currentIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  }

  function handleScroll(e: MouseEvent) {
    e.preventDefault();
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (href && smoother) {
      smoother.scrollTo(href, true, "top 80px");
    }
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

    gsap.to("#hero-h", {
      duration: 3,
      scrambleText: "Hi ! Welcome to my Portfolio Website",
        scrollTrigger: {
          trigger: "#home",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
    });

    let split = SplitText.create("#hero-p", {
      type: "words",
      autoSplit: true,
    });

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

    gsap.from(".about-h", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
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
          toggleActions: "play reverse play reverse"
        }
    });

    gsap.from(".project-controls", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
    });

    gsap.from(".project-slider", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.5,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
    });

    gsap.from(".project-indicator", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
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

    gsap.from(".footer-items", {
      y: 50,
      opacity: 0.5,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
    });

    gsap.from(".footer-bottom", {
      y: 30,
      opacity: 0.5,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0.4,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
    });

    return () => {
      split.revert();
      smoother.kill();
    }
  });
</script>

<!-- Header Section> -->
<header class="fixed top-0 right-0 left-0 z-50">
  <div class="flex justify-between items-center h-16 bg-navbar text-texts backdrop-blur-sm shadow-sm">
    <h1 class="ml-20 text-2xl font-mono hover:text-projects transition-colors cursor-pointer">
      <a href="#home" onclick={handleScroll}>Fardan Hadafi</a>
    </h1>
    <nav class="mr-20">
      <ul class="flex justify-between items-center gap-20 text-xl font-mono">
        <li><a href="#home" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">Home</a></li>
        <li><a href="#about" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">About</a></li>
        <li><a href="#projects" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">Projects</a></li>
        <li><a href="#contact" onclick={handleScroll} class="hover:text-projects transition-colors cursor-pointer">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- Smooth wrapper starts here -->
<div id="smooth-wrapper">
  <div id="smooth-content">
<main class="pt-16">
  <!--Hero Section-->
  <section id="home" class="flex min-h-screen bg-hero text-texts">
    <!--Left Section-->
    <div class="w-1/2 flex flex-col justify-center items-center font-mono text-2xl px-10">
      <h1 id="hero-h" class="mb-4">Hi ! Welcome to my Portfolio Website</h1>
      <p id="hero-p" class="text-center text-h1">I am a Fullstack Developer specializing in build type-safe, ultra-fast applications with a focus on clean architecture and modern user experiences.</p>
    </div>
    <!--Right Section-->
    <div class="w-1/2 flex justify-center items-center">My Photo</div>
  </section>

  <!--About Section-->
  <section id="about" class="flex min-h-[55vh] justify-center items-center bg-about text-texts py-20">
    <div class="flex flex-col gap-4 font-mono text-xl text-center max-w-4xl px-4">
      <h1 class="about-h">I am a Fullstack Developer obsessed with performance and developer experience.</h1>
      <h1 class="about-h">I specialize in the modern web ecosystem, moving away from bloated frameworks in favor of speed and simplicity.</h1>
      <h1 class="about-h text-h1">My stack of choice includes SvelteKit 2 and Svelte 5 for building lightning-fast user interfaces, paired with Hono or Go for robust, high-throughput backends.</h1>
      <h1 class="about-h text-h1">I enjoy the challenge of full-stack development—handling everything from database optimization to the final pixel on the screen.</h1>
    </div>
  </section>

  <!--Projects Section-->
  <section id="projects" class="flex min-h-[65vh] justify-center py-20 bg-navbar text-texts project-header">
    <div class="w-[95%] max-w-7xl space-y-12 font-mono">
      <!-- Header -->
      <div class="flex items-end justify-between">
        <div>
          <p class="text-sm tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 class="text-3xl md:text-4xl font-semibold">
            Selected Work
          </h2>
        </div>

        <!-- Controls -->
        <div class="flex gap-3 project-controls">
          <button
            onclick={prev}
            aria-label="Previous project"
            class="rounded-xl border border-black px-4 py-2 text-sm hover:bg-projects hover:text-white transition font-semibold cursor-pointer"
          >
            Prev
          </button>
          <button
            onclick={next}
            aria-label="Next project"
            class="rounded-xl border border-black px-4 py-2 text-sm hover:bg-projects hover:text-white transition font-semibold cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      <!-- Slider -->
      <div class="overflow-hidden project-slider">
        <div
          class="flex transition-transform duration-500 ease-out"
          style="transform: translateX(-{currentIndex * 100}%);"
        >
          {#each projects as project}
            <article id="article"
              class="min-w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border border-black p-6 my-3 md:p-8"
            >
              <!-- Image -->
              <div class="relative aspect-video overflow-hidden rounded-xl border border-black">
                <img
                  src={project.image}
                  alt={project.title}
                  class="h-full w-full object-cover"
                />
              </div>

              <!-- Content -->
              <div class="space-y-5">
                <h3 class="text-2xl font-semibold text-h1">
                  {project.title}
                </h3>

                <p class="leading-relaxed font-semibold">
                  {project.description}
                </p>

                <ul class="flex flex-wrap gap-3 text-xs">
                  {#each project.tech as t}
                    <li class="rounded-full px-3 py-1 font-semibold text-white" style={getTechStyle(t)}>
                      {t}
                    </li>
                  {/each}
                </ul>

                <div class="flex gap-4 pt-2">
                  <a href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-xl border border-black px-5 py-2 text-sm hover:bg-projects hover:text-white transition font-semibold"
                  >
                    Live Demo
                  </a>
                  <a href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center rounded-xl border border-black px-5 py-2 text-sm hover:text-white hover:border-black hover:bg-projects transition font-semibold"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          {/each}
        </div>
      </div>

      <!-- Indicator -->
      <div class="flex justify-center gap-2 project-indicator">
        {#each projects as _, i}
          <button onclick={() => (currentIndex = i)} class="h-2 w-2 rounded-full transition {i === currentIndex ? 'bg-black' : 'bg-black/30'}" aria-label={`Go to project ${i + 1}`}
          ></button>
        {/each}
      </div>
    </div>
  </section>
</main>

<!--Footer Section-->
<footer id="contact" class="flex min-h-[35vh] justify-center py-12 bg-projects text-texts">
  <div class="w-[95%] max-w-7xl flex flex-col gap-10 mt-10">
    <!-- Top -->
    <div class="flex flex-col md:flex-row justify-between gap-10">
      <!-- Identity -->
      <div class="space-y-3 max-w-md font-mono footer-items">
        <h2 class="text-2xl font-semibold">
          Fardan Hadafi
        </h2>
        <p class="text-sm leading-relaxed">
          Fullstack web developer focused on performance, clean architecture,
          and modern web technologies. Building fast, scalable applications.
        </p>
      </div>

      <!-- Navigation -->
      <nav aria-label="Footer navigation" class="footer-items">
        <ul class="flex flex-col gap-3 text-sm font-mono">
          <li><a href="#home" onclick={handleScroll} class="hover:underline cursor-pointer">Home</a></li>
          <li><a href="#about" onclick={handleScroll} class="hover:underline cursor-pointer">About</a></li>
          <li><a href="#projects" onclick={handleScroll} class="hover:underline cursor-pointer">Projects</a></li>
        </ul>
      </nav>

      <!-- Contact -->
      <div class="space-y-3 font-mono footer-items">
        <p class="text-sm font-medium">Get in touch</p>
        <ul class="flex flex-col gap-2 text-sm">
          <li>
            <a href="mailto:fardan.hadafi@yahoo.com"
              class="hover:underline"
            >
              fardan.hadafi@yahoo.com
            </a>
          </li>
          <li>
            <a href="https://wa.me/6285713101837"
              class="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +(62)85713101837
            </a>
          </li>
          <li>
            <a href="https://github.com/FardanHadafi"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="discord://-/users/305967766031171585"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black pt-6 text-xs font-mono footer-bottom">
      <p>
        © {new Date().getFullYear()} Fardan Hadafi. All rights reserved.
      </p>
      <p>
        Built with Svelte, Tailwind and GSAP
      </p>
    </div>
  </div>
</footer>
  </div>
</div>