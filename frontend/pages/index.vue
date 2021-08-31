<template>
  <div>
    <p class="pb-6 text-xl font-bold text-caption">
      たすけてのコエ届いていますか？
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
