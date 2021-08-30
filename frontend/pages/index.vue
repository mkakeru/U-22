<template>
  <div>
    <p class="pb-4 text-xl font-bold text-caption">
      caption caption caption
      <span class="block">caption</span>
    </p>
    <div class="mb-4">
      <ContentCardByUserType user-type="client" />
    </div>
    <div>
      <ContentCardByUserType user-type="helper" />
    </div>
  </div>
</template>

<script>
import ContentCardByUserType from '@/containers/ContentCardByUserType'

export default {
  components: {
    ContentCardByUserType
  },
  layout: 'default'
}
</script>
