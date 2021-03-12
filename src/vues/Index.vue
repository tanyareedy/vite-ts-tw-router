<template>
  <div class="container mx-auto my-30 text-left">
    <h3 class="text-2xl font-mono font-extrabold">Home Page.</h3>
    <p class="mt-5 text-base">This section shows here because the <strong>router-link</strong> element is placed
      below everything in <strong>App.vue</strong></p>
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Index"
})
</script>