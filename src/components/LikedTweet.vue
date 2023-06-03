<script setup lang='ts'>
export type LikedTweetComponentProps = {
  addDate: string,
  url: string,
  tags: Array<string>,
}
const props = defineProps<{ likedTweet: LikedTweetComponentProps }>()
</script>

<template>
  <div>
    <div class="card bg-base-100 shadow-xl">
      <blockquote class="twitter-tweet">
        <a :href="likedTweet.url" />
      </blockquote>
      <div class="card-body pt-3">
        <h4 class="text-base">
          {{ likedTweet.addDate }}
        </h4>
        <div class="card-actions justify-start">
          <div v-for="(tag, index) in likedTweet.tags" :key="index" class="badge badge-outline p-3">
            <span class="">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3" v-if='true'>
      <div class="form-control w-full">
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.twitter-tweet {
  margin: 0;
  background-color: #00dc82;
}
</style>