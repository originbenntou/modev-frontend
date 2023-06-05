<script setup lang="ts">
import dayjs from "dayjs"

const config = useRuntimeConfig();
const { data: likedTweets, refresh: refreshLikedTweet } = await useFetch(`/api/likedTweets`, {
  baseURL: config.public.baseURL,
  query: {
    days: ["2023-01-01", "2023-01-02"],
    tags: ["Cat", "Dog"],
  }
})

const updateLikedTweet = async (likedTweet: any) => {
  await $fetch(`/api/likedTweets/${likedTweet.id}`, {
    baseURL: config.public.baseURL,
    method: "PUT",
    body: likedTweet
  })
}

const sideNavTags = ["a", "b", "c"]
const sideNavDaily = ["a", "b", "c"]

// const sideNavTags = computed(() => {
//   const allTags = likedTweets.value.flatMap((likedTweet: any) => likedTweet.tags)
//   return Array.from(new Set(allTags))
// })
//
// const sideNavDaily = computed(() => {
//   const allDaily = likedTweets.value.flatMap((likedTweet: any) => {
//     return dayjs(likedTweet.addDate).format("YYYY年M月")
//   })
//   return Array.from(new Set(allDaily)).sort().reverse()
// })
</script>

<template>
  <div class="flex p-6">
    <section class="w-full sm:w-5/6">
      <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="likedTweet in likedTweets" :key="likedTweet.id">
          <LikedTweet
            :likedTweet=likedTweet
            :refresh=refreshLikedTweet
            :update=updateLikedTweet
          />
        </div>
      </div>
    </section>
    <aside class="w-full sm:w-1/6 ml-10">
      <SideNav
        :tags=sideNavTags
        :daily=sideNavDaily
      />
    </aside>
  </div>
</template>
