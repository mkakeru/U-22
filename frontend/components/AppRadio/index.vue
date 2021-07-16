<template>
  <label class="text-sm font-bold">
    <input class="" type="radio" />
    {{ radioText }}
  </label>
</template>

<script>
export default {
  name: 'AppRadio',
  props: {
    radioText: {
      type: String,
      default: 'title',
    },
  },
}
</script>
