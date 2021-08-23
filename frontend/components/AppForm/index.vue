<template>
  <div class="w-full box-border p-4 bg-white rounded-md shadow">
    <span
      v-if="isRequired"
      class="text-xs font-bold text-red-600 text-opacity-95 pb-1 block"
      >必須</span
    >
    <h2 class="text-xl text-primary font-bold pb-1">{{ title }}</h2>
    <p :class="{ hidden: !caption }" class="text-xm text-gray-600 mb-6">
      {{ caption }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppForm',
  props: {
    isRequired: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'title'
    },
    caption: {
      type: String,
      default: ''
    }
  }
}
</script>
