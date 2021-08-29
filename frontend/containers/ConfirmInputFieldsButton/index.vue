<template>
  <AppButton background="button-primary" @buttonClick="_checkIsCompleate">{{
    buttonText
  }}</AppButton>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'ConfirmInputFieldsButton',
  components: { AppButton },
  props: {
    buttonText: {
      type: String,
      default: '登録内容を確認'
    },
    toRouterName: {
      type: String,
      default: 'sign_up-check'
    }
  },
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
        this.$router.push({ name: this.toRouterName })
      }
    }
  }
}
</script>
