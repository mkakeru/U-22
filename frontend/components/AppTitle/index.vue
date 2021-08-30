<template>
  <div class="flex items-center">
    <h1>
      <img class="w-full" :src="img.src" :alt="img.alt" />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    img: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
