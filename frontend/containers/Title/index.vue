<template>
  <AppTitle :title="title" :img="img" />
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  components: { AppTitle },
  data() {
    return {
      title: 'ヒトコエ',
      img: {
        src: '',
        alt: '',
      },
    }
  },
}
</script>
