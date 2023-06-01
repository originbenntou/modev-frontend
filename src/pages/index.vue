<template>
  <div class="flex p-6">
    <section class="w-full sm:w-5/6">
      <LikeCardList :like-cards='likeCards' />
    </section>
    <aside class="w-full sm:w-1/6 ml-10">
      <SideNav />
    </aside>
  </div>
</template>

<script setup lang="ts">
import LikeCard from '@/src/types/index'

const config = useRuntimeConfig();
const { data: likeCards } = await useFetch<Array<LikeCard>>(`${config.public.baseURL}/api/likeCards`)
</script>