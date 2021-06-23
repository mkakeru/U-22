<template>
  <AppTitle :title="title" />
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  components: { AppTitle },
  data() {
    return {
      title: 'Hello world',
    }
  },
}
</script>
