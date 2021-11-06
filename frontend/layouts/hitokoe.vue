<template>
  <div
    class="
      box-border
      px-4
      container
      grid
      md:grid-cols-8
      grid-cols-4
      md:gap-6
      gap-4
      min-h-screen
    "
  >
    <div
      class="grid grid-cols-4 col-span-4 md:col-start-3 w-full md:gap-6 gap-4"
    >
      <div class="col-span-4">
        <div class="pt-9 pb-8"><Title /></div>
        <TabMenuWithHitokoeRoute />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/containers/Title'
import TabMenuWithHitokoeRoute from '@/containers/TabMenuWithHitokoeRoute'

export default {
  components: {
    Title,
    TabMenuWithHitokoeRoute
  }
}
</script>
