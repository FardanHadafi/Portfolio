<script lang="ts">
  import { onMount } from "svelte";
  import Lenis from "lenis";
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";
  import About from "./components/About.svelte";
  import Services from "./components/Services.svelte";
  import Projects from "./components/Projects.svelte";
  import Footer from "./components/Footer.svelte";

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  });
</script>

<Navbar />
<main class="pt-16">
  <Hero />
  <About />
  <Services />
  <Projects />
</main>
<Footer />
