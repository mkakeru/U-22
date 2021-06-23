<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
