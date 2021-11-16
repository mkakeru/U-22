<template>
  <AppButton background="button-primary" @buttonClick="registerAction"
    >登録</AppButton
  >
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AccountRegisterButton',
  components: {
    AppButton
  },
  computed: {
    _isComplete() {
      return this.$store.getters['user/isComplete'].bool
    }
  },
  methods: {
    async registerAction() {
      if (!this._isComplete) return
      await this.$api.user.postUserRegistory()
      const handleS3 = this.$handleS3()
      handleS3.fileUpload()
      this.$router.push('/hitokoe')
    }
  }
}
</script>
