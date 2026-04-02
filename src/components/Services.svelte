<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { services } from "../data";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  });
</script>

<section id="services" class="py-12 md:py-16 lg:py-20 bg-bg text-texts font-mono">
  <div class="w-[90%] sm:w-[85%] max-w-7xl mx-auto">
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
      How I Can Help You
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each services as service}
        <div class="service-card p-6 md:p-8 border border-border rounded-xl bg-card hover:shadow-xl hover:border-accent/20 transition duration-300">
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
