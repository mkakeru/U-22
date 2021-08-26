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
  middleware: 'userInfomation'
}
</script>
