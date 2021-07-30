<template>
  <AppTitle :title-type="titleType" :title="title" :img="img" />
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  components: { AppTitle },
  props: {
    titleType: {
      type: String,
      default: 'base',
    },
  },
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
