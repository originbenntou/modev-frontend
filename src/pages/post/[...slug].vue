<script setup lang="ts">
const { data: article } = useAsyncData("article", () =>
    queryContent(useRoute().path).findOne()
)
</script>

<template>
  <article class="prose">
    <ContentDoc />
  </article>
</template>
