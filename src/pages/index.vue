<template>
  <div class="flex p-6">
    <section class="w-full sm:w-5/6">
      <LikeCardList />
    </section>
    <aside class="w-full sm:w-1/6 ml-10">
      <SideNav />
    </aside>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

const { data: books } = await useFetch<{
  books: { id: number; title: string; author: string }[];
}>(`${config.public.baseURL}/api/books`);

</script>