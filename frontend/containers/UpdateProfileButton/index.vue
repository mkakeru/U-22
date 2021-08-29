<template>
  <AppButton background="button-primary" @buttonClick="updateAction"
    >プロフィールを更新</AppButton
  >
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'UpdateProfileButton',
  components: {
    AppButton
  },
  computed: {
    _isComplete() {
      return this.$store.getters['user/isComplete'].bool
    }
  },
  methods: {
    async updateAction() {
      if (!this._isComplete) return
      await this.$api.user.updateUserDetails()
      this.$router.push({ name: 'hitokoe' })
    }
  }
}
</script>
