<template>
  <input
    class="border border-gray-400 text-base text-primary font-bold p-4 rounded"
    type="input"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
}
</script>
