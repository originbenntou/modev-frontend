<script setup lang="ts">
import { LikedTweetComponentProps } from '@/src/components/LikedTweet.vue'

const config = useRuntimeConfig();
const { data: likedTweets } = await useFetch(`/api/likedTweets`, {
  baseURL: config.public.baseURL
})
</script>

<template>
  <div class="flex p-6">
    <section class="w-full sm:w-5/6">
      <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="likedTweet in likedTweets" :key="likedTweet">
          <LikedTweet :likedTweet=likedTweet />
        </div>
      </div>
    </section>
    <aside class="w-full sm:w-1/6 ml-10">
      <SideNav />
    </aside>
  </div>
</template>
