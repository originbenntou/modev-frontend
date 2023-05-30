<template>
  <div>
    <div class="card bg-base-100 shadow-xl">
      <figure><img src="@/src/assets/images/mycon.jpg" alt="" /></figure>
      <div class="card-body">
        <h4 class="text-base">
          2023-01-01
          <span class="badge badge-sm">NEW</span>
        </h4>
        <div class="card-actions justify-start">
          <LikeCardBadge />
          <LikeCardBadge />
          <LikeCardBadge />
        </div>
      </div>
    </div>
    <div class="mt-3">
      <LikeCardTagInput />
    </div>
  </div>
</template>
<script setup>
</script>