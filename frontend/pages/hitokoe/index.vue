<template>
  <div class="col-span-4">
    <div class="py-12"><Title /></div>
    <AppTabMenu />
  </div>
</template>

<script>
import Title from '@/containers/Title'
import AppTabMenu from '@/components/AppTabMenu'
export default {
  components: {
    Title,
    AppTabMenu
  },
  async asyncData({ $api, store }) {
    const auth = store.getters['authLine/auth']

    const { data } = await $api.user.getUserInfomation(auth.uid)
    // eslint-disable-next-line no-console
    console.log(data)
  }
}
</script>
