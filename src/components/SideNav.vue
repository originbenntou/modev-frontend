<script setup lang="ts">
const props = defineProps<{
  tags: Array<string>
  daily: Array<string>
}>()

</script>

<template>
  <nav class="space-y-8 text-sm">
    <div class="space-y-2">
      <h2 class="text-sm font-semibold font-poppins tracking-widest uppercase dark:text-gray-400">タグ別</h2>
      <div v-for="(tag, index) in tags" :key=index class="flex flex-col space-y-1">
        <a rel="noopener noreferrer" href="#">{{ tag }}</a>
      </div>
    </div>
    <div class="space-y-2">
      <h2 class="text-sm font-semibold font-poppins tracking-widest uppercase dark:text-gray-400">日別</h2>
      <div v-for="(date, index) in daily" :key="index" class="flex flex-col space-y-1">
        <a rel="noopener noreferrer" href="#">{{ date }}</a>
      </div>
    </div>
  </nav>
</template>
