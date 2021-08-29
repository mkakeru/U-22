<template>
  <div>
    <div class="pt-8 mb-4">
      <AppSectionText>設定</AppSectionText>
    </div>
    <div>
      <AppButton background="button-primary" @buttonClick="deleteAccount">
        アカウント削除
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppSectionText,
    AppButton
  },
  layout: 'main',
  methods: {
    async deleteAccount() {
      await this.$api.user.deleteAccount()
    }
  }
}
</script>
