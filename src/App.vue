<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="'/newstories'"> New </router-link>
    <router-link :to="'/topstories'"> Top </router-link>
    <router-link :to="'/askstories'"> Ask </router-link>
    <router-link :to="'/showstories'"> Show </router-link>
    <router-link :to="'/jobstories'"> Jobs </router-link>
  </nav>
  <router-view />
</template>

<style>
@import './style.css';
</style>
