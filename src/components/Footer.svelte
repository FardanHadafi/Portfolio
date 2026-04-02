<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  });
</script>

<footer id="contact" class="flex justify-center py-8 md:py-12 bg-footer-bg text-footer-text">
  <div class="w-[95%] sm:w-[90%] max-w-7xl flex flex-col gap-8 md:gap-10">
    <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
      <!-- Contact Info -->
      <div class="space-y-3 md:space-y-4 max-w-md font-mono footer-items">
        <h2 class="text-2xl sm:text-3xl font-bold">
          Let's build something.
        </h2>
        <p class="text-sm leading-relaxed opacity-70">
          Have a project in mind? I am currently open for new freelance opportunities.
        </p>
        <a href="mailto:fardan.hadafi@yahoo.com" class="inline-block border-b-2 border-footer-text/30 pb-1 hover:text-accent-light hover:border-accent-light transition text-sm md:text-base">fardan.hadafi@yahoo.com</a>
      </div>

      <!-- Social Links -->
      <div class="space-y-3 font-mono footer-items">
        <p class="text-sm font-medium opacity-70">Connect</p>
        <ul class="flex flex-col gap-2 text-sm">
          <li>
            <a href="https://github.com/FardanHadafi" target="_blank" class="hover:text-accent-light hover:underline transition">GitHub</a>
          </li>
          <li>
            <a href="https://wa.me/6285713101837" target="_blank" class="hover:text-accent-light hover:underline transition">WhatsApp</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-footer-text/10 pt-4 md:pt-6 text-xs font-mono footer-bottom flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 opacity-50">
      <p>© {new Date().getFullYear()} Fardan Hadafi.</p>
      <p>Fullstack Developer.</p>
    </div>
  </div>
</footer>
