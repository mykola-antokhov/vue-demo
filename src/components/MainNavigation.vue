<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="nav-left">
      <img alt="Monkedos" class="nav-logo" src="/src/assets/images/monkey.jpg" />
      <h1 class="nav-title">Monkedos</h1>
    </div>
    <div class="nav-right">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 0.2rem 2rem;
  background-color: var(--bg-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;

    .nav-logo {
      width: 56px;
      height: 56px;
    }

    .nav-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-color);
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: var(--primary-color);
    }

    &.router-link-active {
      color: var(--primary-color);
    }
  }
}
</style>
