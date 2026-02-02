<script setup lang="ts">
import bgHero from "@/assets/img/bg-hero.png?w=400;800;1600&format=webp&quality=90&as=srcset";
import planeHero from "@/assets/img/plane.png?w=400;800;1600&format=webp&quality=90&as=srcset";
import Slider from "./components/Slider.vue";
import Companies from "./components/Companies.vue";
import Team from "./components/Team.vue";
import Contact from "@/components/sections/Contact.vue";
import ParallaxImage from "@/components/ParallaxImage.vue";
import { useSEO } from "@/composables/useSEO";
import { usePageTranslation } from "@/i18n";
import { useBreakpoint } from "@/composables/useBreakpoints";
import { computed } from "vue";

const t = usePageTranslation();
const { isDesktop } = useBreakpoint();

const planeBaseTransform = computed(() => {
  if (isDesktop.value) {
    return "rotate(-20deg) translateX(35%) translateY(-30%)";
  } else {
    return "rotate(-20deg) translateX(15%) translateY(15%)";
  }
});

useSEO({
  title: "Home",
  description: "Your trusted partner for aviation support solutions",
  keywords: ["partner", "rboss", "logistic", "aviation"],
  url: "https://rboss.eu/",
  image: "/images/og-home.png",
});
</script>

<template>
  <main>
    <section class="s-hero reset">
      <div class="s-hero__content">
        <h2>{{ t("hero_text") }}</h2>
      </div>
      <div class="decor-gradient"></div>
      <img :srcset="bgHero" alt="" role="presentation" />
    </section>

    <section class="s-about">
      <div class="hr-full hr-full--white"></div>
      <h3>{{ t("about") }}</h3>
      <p class="s-about__text reset">
        {{ t("about_text") }}
      </p>

      <ParallaxImage :srcset="planeHero" alt="" role="presentation" class="plane-image" :move-x="-100" :move-y="-30" :zoom="0.1" :base-transform="planeBaseTransform" />
    </section>

    <section class="s-solutions" id="solutions">
      <div class="hr-full"></div>
      <h3>{{t("solutions")}}</h3>
      <h4>{{t("solutions_text")}}&nbsp;:</h4>
    </section>

    <Slider />
    <Companies />
    <Team />
    <Contact />
  </main>
</template>

<style scoped lang="scss">
.decor-gradient {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, transparent 0%, #212121 100%);
  z-index: 2;
}

.s-hero {
  position: relative;
  background-color: var(--bg-primary);
  max-width: 2050px;
  min-height: 100vh;
  margin-inline: auto;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &__content {
    position: absolute;
    bottom: 20px;
    color: var(--text-tertiary);
    z-index: 3;

    &__title,
    h2 {
      @apply px-20 md:px-60;
    }

    h2 {
      max-width: 800px;
      @apply 2xl:max-w-[1100px];
    }

    &__title {
      max-width: 90vw;
      width: 100%;
      height: auto;
      @media (max-width: 640px) {
        margin-bottom: -4vw;
      }
    }
  }
}

.s-about {
  background-color: var(--bg-primary);
  color: var(--text-tertiary);
  padding-top: 65px;
  @apply pt-65 md:pt-100 lg:pt-150 pb-100 md:pb-150 lg:pb-200;
  position: relative;
  overflow: hidden;

  &__text {
    z-index: 2;
    @apply text-neg-5-16 font-light lg:max-w-[50%] lg:mt-160;
  }

  .plane-image {
    display: block;
    margin: 60px auto 0 auto;
    max-width: 100%;
    width: 90vw;
    height: auto;
    position: static;
    object-fit: contain;

    @apply lg:absolute lg:right-0 lg:top-1/2;
    @apply lg:max-w-[1600px] lg:w-auto;
    @apply lg:pb-0 lg:mb-0 lg:pl-100 lg:pt-0;
    z-index: 1;
  }
}
</style>
