<template>
  <div class="col-span-4">
    <div>
      <Title />
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
