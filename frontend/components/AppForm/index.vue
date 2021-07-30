<template>
  <div class="w-full box-border p-4 bg-white rounded-md shadow">
    <h2 class="text-xl font-bold pb-1">{{ title }}</h2>
    <p class="text-xm text-gray-600 mb-6">{{ caption }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppForm',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    caption: {
      type: String,
      default: 'caption',
    },
  },
}
</script>
