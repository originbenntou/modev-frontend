<script setup lang="ts">
// import LikedTweet from '@/src/types/index'
//
// const config = useRuntimeConfig();
// const { data: LikedTweets } = await useFetch<Array<LikedTweet>>(`${config.public.baseURL}/api/LikedTweets`)
</script>

<template>
  <div class="flex p-6">
    <section class="w-full sm:w-5/6">
      <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <LikedTweet />
      </div>
    </section>
    <aside class="w-full sm:w-1/6 ml-10">
      <SideNav />
    </aside>
  </div>
</template>
