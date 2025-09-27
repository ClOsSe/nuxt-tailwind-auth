<template>
  <div>
    <img class="w-full h-full object-cover rounded-[2rem]" :src="imgSrc" :alt="imageALT">
  </div>
</template>
<script lang="ts" setup>

const props = defineProps<{ 
  imageURL: string,
  imageALT: string,
 }>()
onMounted(() => {
  console.log('imageurl',props.imageURL)
})
// ایجاد مسیر قابل استفاده توسط Webpack/Vite
const imgSrc = computed(() => `/img/${props.imageURL}`)


</script>
