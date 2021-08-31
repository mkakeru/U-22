<template>
  <div>
    <div class="pt-8 mb-4">
      <AppSectionText>設定</AppSectionText>
    </div>
    <div>
      <AppForm
        title="アカウント削除"
        caption="※削除されたアカウントは復元できません"
        :is-required="false"
      >
        <AppButton
          background="button-secondary"
          :is-full-width="false"
          @buttonClick="deleteAccount"
        >
          <span class="px-6"> 削除する </span>
        </AppButton>
      </AppForm>
    </div>
  </div>
</template>

<script>
import AppSectionText from '@/components/AppSectionText'
import AppForm from '@/components/AppForm'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppSectionText,
    AppForm,
    AppButton
  },
  layout: 'hitokoe',
  methods: {
    async deleteAccount() {
      await this.$api.user.deleteAccount()
    }
  }
}
</script>
