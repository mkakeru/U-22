<template>
  <div class="flex items-center">
    <div class="w-16 h-16 mr-3 rounded-full bg-white">
      <img :src="img.src" :alt="img.alt" />
    </div>
    <h1 class="font-bold text-5xl text-primary">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
