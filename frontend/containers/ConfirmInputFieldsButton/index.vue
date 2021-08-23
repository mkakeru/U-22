<template>
  <AppButton background="button-primary" @buttonClick="_checkIsCompleate"
    >登録内容を確認</AppButton
  >
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'ConfirmInputFieldsButton',
  components: { AppButton },
  computed: {
    _isComplete() {
      return this.$store.getters['user/isComplete']
    }
  },
  methods: {
    _checkIsCompleate() {
      this.$store.commit('user/checkIsCompleate')
      if (this._isComplete.bool) {
        this.$store.commit('user/mergeEmergencyList')
        this.$router.push({ path: 'sign_up/check' })
      }
    }
  }
}
</script>
