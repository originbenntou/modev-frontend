<script setup lang='ts'>
import { LikedTweet } from '~/src/types/likedTweet'

const props = defineProps<{
  likedTweet: LikedTweet,
  refresh: Function,
  update: Function
}>()

const inputTag = ref<string>("")

const submitTag = async () => {
  if (inputTag.value == '') return
  props.likedTweet.tags.push(inputTag.value)
  inputTag.value = '';

  // update
  await props.update(props.likedTweet)
  await props.refresh()
}

</script>

<template>
  <div class="liked-tweet">
    <div class="card shadow-xl">
      <blockquote
        class="twitter-tweet"
        data-theme="light"
        data-chrome="nofooter noheader"
        hide_media=true
        data-cards="hidden"
      >
        <a href="https://twitter.com/pom_dawacan/status/1664424695356342272?ref_src=twsrc%5Etfw" />
      </blockquote>
      <div class="card-body py-0">
        <h4 class="text-base">
          {{ likedTweet.addDate }}
        </h4>
        <div class="card-actions justify-start">
          <div v-for="(tag, index) in likedTweet.tags" :key="index" class="badge badge-outline p-3">
            <span class="">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="mt-3" v-if='true'>
        <div class="form-control w-full p-2">
          <form @submit.prevent="submitTag">
            <input
              v-model="inputTag"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.liked-tweet {
  //border-radius: 10px;
}
.twitter-tweet {
  padding: .5rem;
}
</style>