<template>
  <img alt="Vue logo" class="mx-auto" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <div class="my-10">
    <h2 class="text-2xl text-green-600 font-extrabold">USING TAILWINDCSS</h2>
    <router-link :to="{name: 'index'}" class="font-medium text-green-600"> Home</router-link>
     |
    <router-link :to="{name: 'about'}" class="font-medium text-green-600">About</router-link>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>