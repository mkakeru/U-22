<template>
  <div>
    <div class="pt-8 mb-4">
      <AppSectionText>SOSボタン</AppSectionText>
    </div>
    <div>
      <ContentCardBySos />
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import ContentCardBySos from '@/containers/ContentCardBySos'

export default {
  components: { AppSectionText, ContentCardBySos },
  layout: 'main',
  middleware: 'userInfomation'
}
</script>
