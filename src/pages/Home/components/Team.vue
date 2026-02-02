<script setup lang="ts">
import VueSVG from "@/components/VueSVG.vue";

import team1 from "@/assets/img/SectionTeam/reda.png?w=400;800;1600&format=webp&quality=90&as=srcset";

import { useComponentTranslation } from "@/i18n";
const t = useComponentTranslation("team");

const members = [
  {
    img: team1,
    title: "Ceo & Cofounder",
    name: "Reda Kezzou",
    text: 'reda',
    mail: "reda.kezzou@rboss.eu",
    phone: "+32 468 36 10 24",
    linkedin: "https://be.linkedin.com/in/reda-kezzou-b3a4201a8",
  }
];
</script>

<template>
  <section class="s-team" id="about">
    <div class="hr-full hr-full--white"></div>
    <h3 class="pb-20">{{ t('title') }}</h3>

    <div class="s-team__members">
      <div class="s-team__member" :class="{ reverse: index % 2 === 1 }" v-for="(team, index) in members" :key="index">
        <div class="picture">
          <figure class="photo">
            <img :srcset="team.img" :alt="team.name + ' photo'" />
          </figure>
          <h4 class="reset">{{ team.name }}</h4>
          <h5 class="reset">{{ team.title }}</h5>
        </div>

        <div class="s-team__infos">
          <p class="text">{{ t(`${team.text}`) }}</p>
          <p class="contact reset">{{ t('contact') }}</p>
          <ul>
            <li>
              <figure><VueSVG src="/svg/email.svg" /></figure>
              {{ team.mail }}
            </li>
            <li>
              <figure><VueSVG src="/svg/phone.svg" /></figure>
              {{ team.phone }}
            </li>
            <li>
              <figure><VueSVG src="/svg/linkedin.svg" /></figure>
              <a :href="team.linkedin" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.s-team {
  background-color: var(--bg-secondary);
  color: var(--text-tertiary);
  @apply pt-45 md:pt-60 lg:pt-90 pb-100 md:pb-150 lg:pb-200;
  &__members {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
  }
  &__member {
    position: relative;
    display: flex;
    gap: 50px;

    &.reverse {
      flex-direction: row-reverse;
      justify-content: flex-start;
      margin-left: auto;
    }

    .photo {
      position: relative;
      width: 345px;
      aspect-ratio: 343/439;
      overflow: hidden;
      z-index: 1;

      img {
        object-fit: cover;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column !important;
      gap: 0;

      &.reverse {
        flex-direction: column-reverse !important;
        margin-left: 0;
      }

      .photo {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
      }
    }
  }
  &__infos {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .text {
      margin-top: 60px;
      margin-bottom: 50px;
      max-width: 380px;
    }
    .contact {
      @apply text-neg-5-16 font-medium;
    }
    ul {
      display: flex;
      flex-direction: column;
      @apply gap-y-20 mt-20;
      li {
        display: flex;
        align-items: center;
        gap: 15px;
        color: var(--text-tertiary);
        transition: color 0.2s ease;
        cursor: pointer;
        &:hover {
          color: var(--blue-color);
        }
      }
      @media (max-width: 768px) {
        margin-bottom: 15px;
      }
    }
  }
  h4 {
    @apply text-neg-5-24 font-medium mt-15;
  }
  h5 {
    @apply text-neg-5-16 font-light text-text-tertiary;
  }
}
</style>
