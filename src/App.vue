<template>
  <nav>
    <router-link to="/" :class="{active: $route.path === '/'}" class="home">Home</router-link> |
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
  <footer class="footer">
    <a href="https://github.com/SamiulSourav/HackerNews" target="_blank" rel="noopener noreferrer">
      <svg class="github-icon" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
        <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      View source on GitHub
    </a>
  </footer>
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

.footer {
  margin-top: 24px;
  padding: 12px 0;
  border-top: 1px solid black;
  text-align: center;
}

.footer a {
  color: black;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer a:hover {
  color: green;
}
</style>
