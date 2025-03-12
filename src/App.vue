<script setup lang="ts">
import { RouterView } from 'vue-router'
import Container from './components/atoms/Container.vue'
import Footer from './components/molecules/Footer.vue'
import Header from './components/molecules/Header.vue'
import './index.css'
import type { FooterLink } from './models/link'

const links: FooterLink[] = [
  {
    title: 'Facebook',
    href: '#',
    imageSrc: '/img/fb.svg'
  },
  {
    title: 'Instagram',
    href: '#',
    imageSrc: '/img/ig.svg'
  },
  {
    title: 'X',
    href: '#',
    imageSrc: '/img/x.svg'
  }
]

</script>

<template>
  <main>
    <Container>
      <Header />

      <div class="flex-grow pt-4 pb-12 md:py-10 px-4">
        <RouterView />
      </div>

      <Footer :links="links" />
    </Container>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
