<template>
  <div class="col-span-4">
    <div class="pt-12 pb-8">
      <Title title-type="big" />
      <p class="pt-2 text-2xl font-bold text-caption">
        caption caption caption
        <span class="block">caption</span>
      </p>
    </div>
    <div class="mb-4">
      <ContentCardByUserType user-type="client" />
    </div>
    <div>
      <ContentCardByUserType user-type="helper" />
    </div>
  </div>
</template>

<script>
import Title from '@/containers/Title'
import ContentCardByUserType from '@/containers/ContentCardByUserType'

export default {
  components: {
    ContentCardByUserType,
    Title,
  },
  layout: 'default',
}
</script>
