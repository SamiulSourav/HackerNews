<template>
  <nav>
    <router-link to="/" class="home">Home</router-link> |
    <router-link :to="'/newstories'" :class="{ active: $route.path === '/newstories' }" class="tab padding-right-8"> New
    </router-link>
    <router-link :to="'/topstories'" :class="{ active: $route.path === '/topstories' }" class="tab padding-right-8"> Top
    </router-link>
    <router-link :to="'/askstories'" :class="{ active: $route.path === '/askstories' }" class="tab padding-right-8"> Ask
    </router-link>
    <router-link :to="'/showstories'" :class="{ active: $route.path === '/showstories' }" class="tab padding-right-8">
      Show </router-link>
    <router-link :to="'/jobstories'" :class="{ active: $route.path === '/jobstories' }" class="tab padding-right-8">
      Jobs </router-link>
  </nav>
  <router-view />
</template>

<style>
@import './style.css';

.home {
  color: black;
  border: 3px solid black;
  padding-right: 8px;
  padding-left: 8px;
}

.tab {
  color: black;
  border: 1px solid black;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: 2px;
  margin-left: 2px;
}

.tab:hover {
  color: yellow;
}

.active {
  color: green;
}

.active:hover {
  color: yellow;
}

.padding-right-8 {
  padding-right: 8px;
}
</style>
