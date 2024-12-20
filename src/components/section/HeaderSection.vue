<template>
  <header id="header" role="banner">
    <div class="header_inner">
      <nav class="header_nav">
        <h1><router-link to="/">Movie Star</router-link></h1>
        <div class="header_menu">
          <p>
            <router-link :to="{ name: 'haneug' }" class="to-right-underline" :class="{ active: isActive('haneug') }"
              >하늑 영화 Top12</router-link
            >
          </p>
          <p>
            <router-link :to="{ name: 'coding' }" class="to-right-underline" :class="{ active: isActive('coding') }"
              >코딩 영화 Top12</router-link
            >
          </p>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (name) => route.name === name
</script>

<style lang="scss">
.header_inner {
  .header_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      a {
        border: 2px solid var(--yellow);
        display: inline-block;
        font-size: 1.5rem;
        font-family: var(--oswald);
        padding: 2px 15px;
        margin: 15px 20px;
        color: var(--yellow);
        text-transform: uppercase;
        font-weight: 700;
        transition: all 0.5s;
        box-sizing: border-box;
        &:hover {
          background-color: var(--yellow);
          border: 2px solid var(--yellow);
          color: var(--black100);
        }
      }
    }
    .header_menu {
      display: flex;
      p {
        margin-right: 20px;
      }
    }
  }
}
</style>
