<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/" class="logo"><img alt="Vue logo" src="@/assets/logo.svg"/></RouterLink>

    <div class="hamburger-menu"></div>
    <nav :class="{ 'menu-open': isMenuOpen }">
      <RouterLink to="/">Market</RouterLink>
      <RouterLink to="/collection">Collection</RouterLink>
      <RouterLink to="/wishlist">Wishlist</RouterLink>
      <RouterLink to="/following">Following</RouterLink>
      <RouterLink to="/Login">Login</RouterLink>
    </nav>
    <div :class="{ 'menu-open': isMenuOpen }" class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
  width: 100%;
  padding: 0 2em;
}
.logo {
  height: 60%;
}

.logo img {
  height: 100%;
}

.logo:hover {
  background: none;
}

nav {
  display: flex;
  gap: 1em;
}

.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--color-foreground);
  border-radius: 2px;
}

.hamburger.menu-open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 5px);
}

.hamburger.menu-open span:nth-child(2) {
  opacity: 0;
}

.hamburger.menu-open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -5px);
}

@media (max-width: 768px) {
  nav {
    display: none;
    position: absolute;
    top: 4em;
    right: 0;
    background-color: var(--color-background);
    flex-direction: column;
    width: 100%;
    text-align: center;
    z-index: 999;
    gap: 0;
  }

  nav a {
    line-height: 3em;
  }

  nav.menu-open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}
</style>
