<template>
  <AppTitle :img="img" />
</template>

<script>
import AppTitle from '@/components/AppTitle'
import hitokoeLogo from '@/assets/svg/hitokoe-log.svg'

export default {
  name: 'Title',
  components: { AppTitle },
  // props: {
  //   titleType: {
  //     type: String,
  //     default: 'base'
  //   }
  // },
  data() {
    return {
      img: {
        src: hitokoeLogo,
        alt: 'ヒトコエ'
      }
    }
  }
}
</script>
